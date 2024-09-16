import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  const videoRef = useRef(null);

  // Play the video when the cursor moves over the component
  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  // Pause the video when the cursor leaves the component
  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src="image1.mp4"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        muted // Ensures video is muted on autoplay
        loop  // Optional, plays the video in a loop
      />
      {/* Overlay content (optional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="body" component="div"  className="header-slogan">
        count  calories not regrets
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
