import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Press me',
  'Click me again',
  'Push me!',
];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((el, index) => {
        return <Button onClick={incrementCount} text={el} key={index} />;
      })}

      {/* {[
        <Button onClick={incrementCount} text={texts[0]} />,
        <Button onClick={incrementCount} text={texts[1]} />,
        <Button onClick={incrementCount} text={texts[2]} />,
        <Button onClick={incrementCount} text={texts[3]} />,
        <Button onClick={incrementCount} text={texts[4]} />,
        <Button onClick={incrementCount} text={texts[5]} />,
      ]} */}
    </div>
  );
}

export default App;
