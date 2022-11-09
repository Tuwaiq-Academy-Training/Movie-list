import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Ali');

  console.log('Hey from مطبخ');

  // UseEffect Type 1
  useEffect(() => {
    console.log('Hey from useEffect 1');
  });

  // UseEffect Type 2
  useEffect(() => {
    console.log('Hey from useEffect 2');
  }, []);

  // UseEffect Type 3
  useEffect(() => {
    console.log('Hey from useEffect 3');
  }, [counter]);

  return (
    <div className='container text-center'>
      {console.log('Hey from  وجبه')}
      <h1>Counter</h1>
      <h3>{counter}</h3>

      <button
        onClick={() => setCounter(counter + 1)}
        type='button'
        className='btn btn-secondary'
      >
        Add count
      </button>
      <br />
      <h3 className='mt-5'>{name}</h3>
      <button
        onClick={() => setName('Saleh')}
        type='button'
        className='btn btn-secondary mt-2'
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
