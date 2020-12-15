import React, { useState} from 'react';
import { Canvas } from './Canvas';
import { Button } from '@material-ui/core';
import './Terminal.css';

export const Terminal = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='container'>
      I am the Terminal

      <div className='button'>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'inactivate': 'activate'}
        </Button>
      </div>

      <Canvas
        isActive={isActive}
      />
    </div>
  )
}

export default Terminal;