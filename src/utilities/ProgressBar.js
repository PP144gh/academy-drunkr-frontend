import React, { useEffect } from 'react';
import './ProgressBar.css';

let flag_1 = 0;  
let flag_2 = 0;
let flag_3 = 0;

const CustomProgressBar = ({ progress }) => {

    const getColor = () => {
        if (progress <= 0.5) {
            return `rgb(${Math.floor(255 - progress * 255)}, 255, 0)`;
        } else if (progress <= 0.8) {
            return `rgb(255, ${Math.floor(255 - (progress - 0.5) * 255)}, 0)`;
        } else {
            return `rgb(255, 0, 0)`;
        }
    };

    const popUp = () => {
        if (progress >= 0.2 && flag_1 === 0) {
            window.alert("Atingiste 0.2g/L álcool. Se tens a carta há menos 3 anos, não conduzas!");
            flag_1 = 1;
        } else if (progress >= 0.5 && flag_2 === 0) {
            window.alert("Atingiste 0.5g/L álcool. Se tens a carta, não conduzas!");
            flag_2 = 1;
        } else if (progress >= 1.0 && flag_3 === 0) {
            window.alert("Modo avião ativo. Não podes mandar mensagem à(o) ex.");
            flag_3 = 1;
        }
    };


    useEffect(() => {
        popUp();
    }, [progress]);

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar-content"
                style={{
                    width: `${(progress / 1) * 100}%`,
                    backgroundColor: getColor(),
                    transition: 'width 0.5s',
                }}
            >
                {progress.toFixed(1)} {/* Display progress as a decimal value */}
            </div>
        </div>
    );
};

export default CustomProgressBar;
