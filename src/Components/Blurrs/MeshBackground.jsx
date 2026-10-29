import "../../Styles/Components/MeshBackground.css";

function MeshBackground() {
    return (
        <div className="mesh-background" aria-hidden="true">
            <div className="mesh-background__glow mesh-background__glow--blue" />

            <div className="mesh-background__glow mesh-background__glow--red" />

            <div className="mesh-background__grid" />

            <div className="mesh-background__nodes" />

            <div className="mesh-background__crosses" />

            <div className="mesh-background__squares" />
        </div>
    );
}

export default MeshBackground;