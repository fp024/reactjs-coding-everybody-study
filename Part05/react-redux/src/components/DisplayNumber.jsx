import { useEffect, useState } from 'react';
import store from '../store';

function DisplayNumber() {
  const [number, setNumber] = useState(store.getState().number); // state의 초기값도 store에서 설정한 내용을 받아오면 됨.

  // constructor에 있던 부분을 useEffect로 옮김 - componentDidMount()
  useEffect(() => {
    store.subscribe(() => {
      setNumber(store.getState().number);
    });
  }, []);

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
}

export default DisplayNumber;
