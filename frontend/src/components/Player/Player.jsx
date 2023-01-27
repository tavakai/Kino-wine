import React, { useEffect } from 'react';

export default function Player() {
  function PlayerjsAsync(src) {
    const player = new Playerjs({
      id: 'player',
      file: 'https://https://cloud.mail.ru/home/OperationFortune_TLR.mp4',
      poster: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg',

    });
  }

  useEffect(() => {
    PlayerjsAsync();
  }, []);
  return (
    <div id="player" />
  );
}
