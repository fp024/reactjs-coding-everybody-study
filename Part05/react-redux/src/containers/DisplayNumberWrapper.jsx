import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

export default connect()(DisplayNumber); // 자동 Wrapping 해서 반환

/*
import { useEffect, useState } from 'react';
import store from '../store';

export default function DisplayNumberWrapper() {
  const [number, setNumber] = useState(store.getState().number); // state의 초기값도 store에서 설정한 내용을 받아오면 됨.

  // constructor에 있던 부분을 useEffect로 옮김 - componentDidMount()
  useEffect(() => {
    store.subscribe(() => {
      setNumber(store.getState().number);
    });
  }, []);

  return <DisplayNumber number={number}></DisplayNumber>;
}
*/
