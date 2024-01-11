import React, { useState, useRef } from 'react';
import '../styles/index.css';

import video1 from '../img/video1.mp4';
import video2 from '../img/video2.mp4';
import video3 from '../img/video3.mp4';
import video4 from '../img/video4.mp4';
import TSocios from '../img/socios.png';
import Linea from '../img/linea.png';


const Socios = () => {
  const videoRefs = {
    video1: useRef(null),
    video2: useRef(null),
    video3: useRef(null),
    video4: useRef(null)
  };

  const [isPlaying, setIsPlaying] = useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false
  });

  const togglePlay = (videoId) => {
    setIsPlaying((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId]
    }));

    const video = videoRefs[videoId].current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className='socios'>

        
        <img className='linea2' src={Linea} alt="" />
        
        <div className='title-socios'>
            <img src={TSocios} alt="" />
        </div>
        <center>
      <div className="video-container">
        <div className="video-slide" onClick={() => togglePlay('video1')}>
          <video ref={videoRefs.video1} style={{ width: '220px', height: '390px' }} controls={false}>
            <source src={video1} type="video/mp4" />
          </video>
          {isPlaying.video1 ? (
            <div className="play-pause-button pause"></div>
          ) : (
            <div className="play-pause-button play"></div>
          )}
        </div>
        <div className="video-slide" onClick={() => togglePlay('video2')}>
          <video ref={videoRefs.video2} style={{ width: '220px', height: '390px' }} controls={false}>
            <source src={video2} type="video/mp4" />
          </video>
          {isPlaying.video2 ? (
            <div className="play-pause-button pause"></div>
          ) : (
            <div className="play-pause-button play"></div>
          )}
        </div>
        <div className="video-slide" onClick={() => togglePlay('video3')}>
          <video ref={videoRefs.video3} style={{ width: '220px', height: '390px' }} controls={false}>
            <source src={video3} type="video/mp4" />
          </video>
          {isPlaying.video3 ? (
            <div className="play-pause-button pause"></div>
          ) : (
            <div className="play-pause-button play"></div>
          )}
        </div>
        <div className="video-slide" onClick={() => togglePlay('video4')}>
          <video ref={videoRefs.video4} style={{ width: '220px', height: '390px' }} controls={false}>
            <source src={video4} type="video/mp4" />
          </video>
          {isPlaying.video4 ? (
            <div className="play-pause-button pause"></div>
          ) : (
            <div className="play-pause-button play"></div>
          )}
        </div>
      </div>
      </center>
    </section>
  );
};

export default Socios;