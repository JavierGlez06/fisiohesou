import React, { useState } from "react";

const ClickableImage = ({ imageSrc }) => {
    const [clicks, setClicks] = useState([]);

    const handleImageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X relativa a la imagen
        const y = e.clientY - rect.top; // Posición Y relativa a la imagen
        setClicks([...clicks, { x, y }]);
    };

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
            }}
            onClick={handleImageClick}
        >
            <img
                src={imageSrc}
                alt="Clickable"
                style={{ width: "100%", height: "auto" }}
            />
            {clicks.map((click, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        top: click.y,
                        left: click.x,
                        transform: "translate(-50%, -50%)",
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "20px",
                        pointerEvents: "none",
                    }}
                >
                    X
                </div>
            ))}
        </div>
    );
};

export default ClickableImage;
