import AddNumber from '../components/AddNumber';
import store from '../store';

// 함수명을 지정하지 않으면 lint경고가 나옴.
export default function AddNumberWrapper() {
  return (
    <AddNumber
      onClick={(size) => {
        store.dispatch({ type: 'INCREMENT', size: size });
      }}
    ></AddNumber>
  );
}
