import React from 'react';

const LetterZ = () => {
    const width = 300;
    const height = 200;
    const lineLength = 100;

    return (
        <div style={{ marginTop: '50px', marginLeft: '10px' }}>
            <svg width={width} height={height}>
                {/* Line to the right */}
                <line x1="0" y1="0" x2={lineLength} y2="0" stroke="black" strokeWidth="2" />
                {/* Line down */}
                <line x1={lineLength} y1="0" x2={lineLength} y2={lineLength} stroke="black" strokeWidth="2" />
                {/* Line to the right */}
                <line x1={lineLength} y1={lineLength} x2={width} y2={lineLength} stroke="black" strokeWidth="2" />
                {/*  */}
                <text x={200} y={70} textAnchor="end">Moaaz</text>
            </svg>
        </div>
    );
};

export default LetterZ;