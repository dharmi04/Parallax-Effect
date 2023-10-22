import { useRef } from 'react';
import './App.css';

import Ironman from './Ironman';

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Ironman />
    </div>
  );
}

export default App;
