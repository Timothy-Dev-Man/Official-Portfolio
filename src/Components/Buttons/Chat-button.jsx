import aiChatIcon from "../../assets/chat-head-icon.png";
import { useState, lazy, Suspense, useEffect } from "react";

const ChatView = lazy(() => import("../Chat-view.jsx"));

function ChatButton({ onChatStateChange, showText = true, fixed = true }) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleOpenChat = () => {
            setToggle(true);
            onChatStateChange?.(true);
        };

        const handleCloseChat = () => {
            setToggle(false);
            onChatStateChange?.(false);
        };

        window.addEventListener("open-ai-chat", handleOpenChat);
        window.addEventListener("close-ai-chat", handleCloseChat);

        return () => {
            window.removeEventListener("open-ai-chat", handleOpenChat);
            window.removeEventListener("close-ai-chat", handleCloseChat);
        };
    }, [onChatStateChange]);

    return (
        <>
            <div
                className="ai-chat-icon"
                style={{ position: fixed ? "fixed" : "relative" }}
                onClick={() => {
                    const nextState = !toggle;
                    setToggle(nextState);
                    onChatStateChange?.(nextState);
                }}
                title="Resume AI Chat"
            >
                <div className="ai-inner-div">
                    {showText ? <h3>Let's Chat!</h3> : null}
                    <img src={aiChatIcon} alt="AI chat button" />
                </div>
            </div>

            {toggle && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ChatView onClose={() => {
                        setToggle(false);
                        onChatStateChange?.(false);
                        window.dispatchEvent(new Event("close-ai-chat"));
                    }} />
                </Suspense>
            )}
        </>
    );
}

export default ChatButton;