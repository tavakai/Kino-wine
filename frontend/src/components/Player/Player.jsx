import React, { useEffect, useState } from 'react';
import s from './Player.module.css';

export default function Player({ onefilm, full, fullscreen }) {
  function PlayerjsAsync() {
    const player = new Playerjs({
      id: 'player',
      file: onefilm,
      autoplay: onefilm ? 1 : 0,
    });
    const playerFull = new Playerjs({
      id: 'full_player',
      file: full,
      autoplay: full ? 1 : 0,
    });
  }
  useEffect(() => {
    PlayerjsAsync(onefilm);
    // PlayerjsAsync(full);
  }, [onefilm, fullscreen]);
  return (
    <div style={{
      maxWidth: '660px',
      width: '100%',
      border: '0.5px solid white',
      marginTop: '50px',
    }}
    >
      {
        !fullscreen ? <div id="player" /> : <div id="full_player" className={fullscreen ? 'full_player_active' : ''} />
      }
      {/* <button type="button">close</button> */}
    </div>
  );
}
