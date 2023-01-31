import React, { useEffect, useState } from 'react';

function StreamComponentTest() {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/stream')
      .then((res) => console.log(res))
  }, [])
  return (
    <video muted autoPlay controls src="./content/fortune.mp4" />
  );
}

export default StreamComponentTest;
