import React from 'react';
import { useCanvas } from '../hooks/useCanvas';
import './Canvas.css';

export const Canvas = ({
  isActive
}) => {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight
  ] = useCanvas();

  const handleCanvasClick = (evt) => {
    // on each click get current mouse location 

    if (!isActive) {
      return;
    }

    const currentCoord = {
      x: event.clientX,
      y: event.clientY 
    };

    console.log(currentCoord, 'currentCoord');
    console.log(coordinates, 'coordinates');
  // add the newest mouse location to an array in state
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas = (evt) => {
    setCoordinates([]);
  };

  return (
    <div className='canvas-container'>
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />

      <div className="button" >
        <button onClick={handleClearCanvas}>CLEAR</button>
      </div>
    </div>
  )
}

export default Canvas;