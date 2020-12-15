import React, { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const pinSVG = 'M24.6 12.3C24.6 19.1 19.1 24.6 12.3 24.6C5.5 24.6 0 19.1 0 12.3C0 5.5 5.5 0 12.3 0C19.1 0 24.6 5.5 24.6 12.3ZM10.2 26.5V52.4C10.2 53.5 11.1 54.5 12.3 54.5C13.5 54.5 14.4 53.6 14.4 52.4V26.5C13.7 26.6 13 26.7 12.3 26.7C11.6 26.7 10.9 26.6 10.2 26.5Z'
const SVG_PATH = new Path2D(pinSVG);

// Scaling Constants for Canvas
const SCALE = 1;
export const canvasWidth = 600;
export const canvasHeight = 600;

export function draw(ctx, location){
  console.log('clicking')
  ctx.fillStyle = 'blue';
  ctx.shadowColor = 'blue';
  ctx.shadowBlur = 15;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x - 12, location.y - 130);
  ctx.fill(SVG_PATH);
  ctx.restore();  
};

export const useCanvas = () => {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}


// .restore(): Canvas 2D API restores the most recently saved canvas state
