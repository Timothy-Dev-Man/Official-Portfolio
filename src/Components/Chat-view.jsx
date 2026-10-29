import aiChatIcon from '../assets/chat-head-icon.png'
import { MdClose } from 'react-icons/md';
import { Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { AI_Chat } from '../../APIs/Ai-chat.js'
import ReactMarkdown from "react-markdown";

function ChatView({ onClose }) {
    const [message, setMessage] = useState('')
    const [aiResponse, setAiResponse] = useState([
        { ai: "Hi! I'm Timothy's AI assistant. How can I help you?" }
    ])
    const [status, setStatus] = useState("sent!")

    async function handleSend() {
        if (!message.trim() || status === 'pending') return;
        setStatus('pending')

        const userMessage = message;
        const response = await AI_Chat(message)

        setAiResponse(prev => [
            ...prev,
            {
                user: userMessage,

                ai: response
            }
        ]);
        setStatus('sent!');
        setMessage("");
    }

    return (
        <>
            <div onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
                className="ai-chat-outer-view">

                <div className="ai-chat-header">
                    <div className="ai-inner-header">
                        <img src={aiChatIcon} alt="Ai chat button" />
                        <h3>AI ASSISTANT</h3>
                    </div>
                    <MdClose className="header-close" size={30} color="#fff" onClick={onClose} />
                </div>

                <div className="ai-chat-display">
                    {aiResponse.map((res, index) => (
                        <div key={index}>
                            <div className="user-message-outer">
                                {res.user ? <div className="user-message">
                                    {res.user}
                                </div> : null}

                            </div>
                            <div className="ai-outer-response">
                                <img src={aiChatIcon} alt="Ai chat button" />
                                <div className="ai-response-message">
                                    <ReactMarkdown>
                                    {res.ai}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ai-chat-message-area">
                    <input
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        maxLength={5000}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSend();
                            }
                        }}
                        placeholder="What are Timothy's skills?"

                    />
                    {status == 'pending' ? (<Loader2 color="#fff" className="animate-spin" />) : (<Send className="ai-send-button" onClick={() => handleSend()} size={30} color="#B08D57" />)}
                </div>
            </div>
        </>
    );
}


export default ChatView;
