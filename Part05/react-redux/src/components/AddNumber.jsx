import { useState } from 'react';
import store from '../store';

function AddNumber() {
  const [size, setSize] = useState(1);
  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          store.dispatch({ type: 'INCREMENT', size: size });
        }}
      ></input>
      <input
        type="text"
        value={size}
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
      ></input>
    </div>
  );
}

export default AddNumber;
