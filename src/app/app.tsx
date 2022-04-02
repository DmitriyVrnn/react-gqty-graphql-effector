import React from 'react';
import { Button } from '../shared/ui/Button';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('clickj')}>Hello</Button>
    </div>
  );
}

export default App;
