import { useRef } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import imag1 from './bg-2.jpg';
import imag2 from './ATower.jpg';
import ironman from './ironman-removebg.png';

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${imag2})`,
            backgroundSize: 'cover',
            zIndex: 0, // Set the z-index for the Avengers Tower image
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${imag1})`,
            backgroundSize: 'cover',
            zIndex: 1, // Set the z-index for the background image
          }}
        />

<ParallaxLayer
  sticky={{ start: 0.9, end: 2.5 }}
  style={{ textAlign: 'center' }}
>
  <img
    src={ironman}
    style={{
      zIndex: 2, // Set the z-index for the Iron Man image
      position: 'absolute', // Position the Iron Man image absolutely
      width: '500px', // Increase the width to make the image bigger
      top: '50%', // Center the image vertically
      left: '50%', // Center the image horizontally
      transform: 'translate(-50%, -50%)', // Center the image
    }}
  />
</ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
