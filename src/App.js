import MyName from './MyName';

function App() {
  const name = "HAN";
  return (
    <div>
      <div>
        hello {name}!
      </div>
      <div>
        {
          1 + 1 === 2
          ? (<div>마자용</div>)
          : (<div>트려용</div>)
        }
      </div>
    </div>
  );
}

export default App;
