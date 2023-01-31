/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

export default function Player({ onefilm }) {
  // const [clickVideo, setClickVideo] = useState('');
  function PlayerjsAsync() {
    const player = new Playerjs({
      id: 'player',
      file: onefilm.path_trailer,
      autoplay: onefilm.path_trailer ? 1 : 0,
      // poster: onefilm.image,

    });
  }
  // const clickHandler = (e) => {
  //   setClickVideo(e.target.name);
  // };

  useEffect(() => {
    PlayerjsAsync(onefilm.path_trailer);
  }, [onefilm.path_trailer]);
  return (
    <div style={{
      width: '350px',
      border: '0.5px solid white',
    }}
    >
      <div id="player" />
    </div>
  );
}
