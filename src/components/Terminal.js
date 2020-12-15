import React from 'react';
import { Button } from '@material-ui/core';
import './Terminal.css';

export const Terminal = () => {
  return (
    <div className='container'>
      I am the Terminal

      <div className='button'>
        <Button
          variant="contained"
          color="primary"
        >
          I am the Button
        </Button>
      </div>

      <div className='overlay'>
        Overlay
      </div>
    </div>
  )
}

export default Terminal;