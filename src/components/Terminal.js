import React, { useState} from 'react';
import './Terminal.css';
import html2canvas from 'html2canvas';
import { CommentButton } from './CommentButton';
import { PinModal } from './PinModal';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import { Chart } from './Chart';

export const Terminal = () => {
  const [isActive, setIsActive] = useState(false);
  const [images, setImages] = useState([]);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  const getScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      var imageUrl = canvas.toDataURL();
      setImages([...images, imageUrl]);
    });
  }

  const handlePinClick = () => {
    setIsActive(true);
    setIsSideBarOpen(false);
    setIsPinModalOpen(true);
  }

  return (
    <div className='container'>
    
      <CommentButton
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />

      <PinModal
        isPinModalOpen={isPinModalOpen}
      />

      <Sidebar
        isSideBarOpen={isSideBarOpen}
        handlePinClick={handlePinClick}
        images={images}
        setImages={setImages}
      />

      <Canvas
        isActive={isActive}
        getScreenshot={getScreenshot}
        setIsSideBarOpen={setIsSideBarOpen}
        setIsActive={setIsActive}
        setIsPinModalOpen={setIsPinModalOpen}
      >
        <Chart />
      </Canvas>
    </div>
  )
}

export default Terminal;