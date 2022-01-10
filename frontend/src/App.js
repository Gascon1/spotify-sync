import './App.css';
import { useState } from 'react';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const getCurrentTrack = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/v1/currently-playing',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      setCurrentTrack(json);
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  const mutePlayback = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/mute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          volume: 0,
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <a href="http://localhost:5000/api/v1/">Click me to auth</a>
      <button onClick={() => getCurrentTrack()}>Click me to auth</button>
      {currentTrack && (
        <>
          <p>Name: {currentTrack?.item?.name}</p>
          <p>Album: {currentTrack?.item?.album?.name}</p>
          <p>Artist: {currentTrack?.item?.artists[0]?.name}</p>
        </>
      )}
      <button onClick={() => mutePlayback()}>Click me to auth</button>
    </div>
  );
}

export default App;
