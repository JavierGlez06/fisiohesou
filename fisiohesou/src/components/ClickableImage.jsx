import React, { useState, forwardRef, useImperativeHandle } from "react";

// Hacemos uso de `forwardRef` para que el componente padre pueda controlar el estado.
const ClickableImage = forwardRef(({ imageSrc }, ref) => {
    const [clicks, setClicks] = useState([]);

    const handleImageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        setClicks([...clicks, { x: xPercent, y: yPercent }]);
    };

    // Función para resetear las marcas de las "X".
    const resetClicks = () => {
        setClicks([]);
    };

    // Exponemos la función `resetClicks` al padre a través del ref.
    useImperativeHandle(ref, () => ({
        resetClicks,
    }));

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handleImageClick}
        >
            <img
                src={imageSrc}
                alt="Clickable"
                style={{ width: "100%", height: "auto", display: "block" }}
            />
            {clicks.map((click, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        top: `${click.y}%`,
                        left: `${click.x}%`,
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
});

export default ClickableImage;

