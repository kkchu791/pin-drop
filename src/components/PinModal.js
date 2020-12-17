import React from 'react';
import './PinModal.css';
import {Slide} from '@material-ui/core';
import pinLargeImage from '../images/pin-large.png';

export const PinModal = ({
  isPinModalOpen
}) => {
  return (
    <Slide in={isPinModalOpen} mountOnEnter unmountOnExit>
      <div className='pin-modal'>
        <div className='pin-modal-text'>
          Click to Pin
        </div>

        <img width='25' height='60' src={pinLargeImage} />
      </div>
    </Slide>
  )
}

export default PinModal;