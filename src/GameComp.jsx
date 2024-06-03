import { useState, useEffect } from 'react';
import './GameComponent.css';

const GameComponent = () => {
  const [start, setStart] = useState(new Date().getTime());
  const [duration, setDuration] = useState(null);
  const [style, setStyle] = useState({
    display: 'none',
    position: 'relative',
    backgroundColor: '',
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    borderRadius: '0'
  });

  useEffect(() => {
    appearAfterDelay();
  }, []);

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const makeShapeAppear = () => {
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = Math.random() * 200 + 100;

    setStyle({
      ...style,
      backgroundColor: getRandomColor(),
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${width}px`,
      borderRadius: Math.random() > 0.5 ? '50%' : '0',
      display: 'block'
    });
    setStart(new Date().getTime());
  };

  const appearAfterDelay = () => {
    setTimeout(makeShapeAppear, Math.random() * 2000);
  };

  const handleClick = () => {
    setStyle({ ...style, display: 'none' });
    let end = new Date().getTime();
    setDuration((end - start) / 1000);
    appearAfterDelay();
  };

  return (
    <div>
      <h1>Teste deine Reaktionsfähigkeit!</h1>
      <p>Klicke so schnell du kannst auf die Vierecke und Kreise!</p>
      <p className="bold">Deine Zeit: <span id="dauer">{duration}s</span></p>
      <div id="form" style={style} onClick={handleClick}></div>
    </div>
  );
};

export default GameComponent;
