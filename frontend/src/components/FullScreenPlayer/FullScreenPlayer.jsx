import React, { useEffect } from 'react';
import s from './FullScreenPlayer.module.css';

function FullScreenPlayer({ movie }) {
  function PlayerjsAsync() {
    const player2 = new Playerjs({
      id: 'full_player',
      file: movie,
      autoplay: movie ? 1 : 0,
    });
  }
  useEffect(() => {
    PlayerjsAsync(movie);
  }, [movie]);

  console.log(movie);

  return (
    <div className={s.container}>
      <div id="full_player" />
    </div>
  );
}

export default FullScreenPlayer;
