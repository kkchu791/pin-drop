import React, {useEffect} from 'react';
import { useCanvas } from '../hooks/useCanvas';
import './Canvas.css';

export const Canvas = ({
  isActive,
  getScreenshot,
  children,
  setIsActive,
  setIsSideBarOpen,
  setIsPinModalOpen,
}) => {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight
  ] = useCanvas();

  useEffect(() => {
    if (coordinates.length > 0) {
      getScreenshot();
    }
  }, [coordinates])

  const handleCanvasClick = (evt) => {
    if (!isActive) {
      return;
    }

    const currentCoord = {
      x: evt.clientX,
      y: evt.clientY,
    };
    // add the newest mouse location to an array in state
    setCoordinates([...coordinates, currentCoord]);

    setIsActive(false);
    setIsSideBarOpen(true);
    setIsPinModalOpen(false);
  };

  const handleClearCanvas = (evt) => {
    setCoordinates([]);
  };

  return (
    <div className='canvas-container'>
      {children}
      <canvas 
        className="canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
      <button onClick={handleClearCanvas}>
        Clear Canvas
      </button>
    </div>
  )
}

export default Canvas;
