import DisplayNumber from '../containers/DisplayNumberWrapper';

export default function DisplayNumberRoot(props) {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber unit="kg"></DisplayNumber>
    </div>
  );
}
