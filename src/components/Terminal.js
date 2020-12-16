import React, { useState} from 'react';
import { Canvas } from './Canvas';
import { Button } from '@material-ui/core';
import './Terminal.css';
import html2canvas from 'html2canvas';
import { Modal } from '@material-ui/core';


export const Terminal = () => {
  const [isActive, setIsActive] = useState(false);
  const [image, setImage] = useState(null);

  const getScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      var imageUrl = canvas.toDataURL();
      setImage(imageUrl);
     });
  }

  return (
    <div className='container'>
      <Modal
        open={image}
        onClose={() => setImage(null)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='modal'>
          <img className='image' src={image} alt="screenshot" />
        </div>
      </Modal>
      <div className='button'>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'inactivate': 'activate'}
        </Button>
      </div>

      <div className='button'>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => getScreenshot()}
        >
         Take Screenshot
        </Button>
      </div>

      <Canvas
        isActive={isActive}
      />
    </div>
  )
}

export default Terminal;