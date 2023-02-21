import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapReduxDispatchToProps(dispatch) {
  return {
    onClick: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}

export default connect(null, mapReduxDispatchToProps)(AddNumber); // 자동 Wrapping 해서 반환
/*
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
*/
