import React, { useEffect, useState } from 'react';

export default function Player({ onefilm }) {
  function PlayerjsAsync() {
    const player = new Playerjs({
      id: 'player',
      file: onefilm.path_trailer,
      autoplay: onefilm.path_trailer ? 1 : 0,
    });
  }
  useEffect(() => {
    PlayerjsAsync(onefilm.path_trailer);
  }, [onefilm.path_trailer]);
  return (
    <div style={{
      maxWidth: '660px',
      width: '100%',
      border: '0.5px solid white',
      marginTop: '50px',
    }}
    >
      <div id="player" />
    </div>
  );
}
