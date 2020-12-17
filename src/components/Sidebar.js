import React from 'react';
import './Sidebar.css';
import {Slide} from '@material-ui/core';
import pinImage from '../images/pin.png';
export const Sidebar = ({
  isSideBarOpen,
  handlePinClick,
  images,
  setImages
}) => {

  const handleImageClick = (imageUrl) => {
    var image = new Image();
    image.src = imageUrl;
    var w = window.open("");
    w.document.write(image.outerHTML);
    w.document.close();
  }

  const renderImages = (image) => {
    return (
      <img
        onClick={() => handleImageClick(image)}
        className="screenshot"
        height='50'
        width='87'
        src={image}
      />
    )
  }

  return (
    <Slide direction="left" in={isSideBarOpen} mountOnEnter unmountOnExit>
      <div className='sidebar'>

        <div className='sidebar-text'>
          <div className='sidebar-title'>
            <h2> Comments</h2>
          </div>
          <hr />

          <div>
            <div className='pin-row'>
              <div
                className='pin-button'
                onClick={handlePinClick}
              >
                <img src={pinImage} />
              </div>

              <div className='pin-text'>
                Click “Pin” then click anywhere in the dashboard to begin.
              </div>
            </div>


            <div className='pin-row'>
              <div className='text'>
                Ask a question, leave feedback, or delegate a follow-up task.
              </div>
            </div>

            <div className='pin-row'>
              <div className='text'>
                @mentions supported
              </div>
            </div>
          </div>



          

          <hr />
          <div>ScreenShots</div>
          {images.map(renderImages)}

          <hr />
          <button onClick={() => setImages([])}>
            Clear ScreenShots
          </button>
        </div>
      </div>
    </Slide>
  )
}

export default Sidebar;