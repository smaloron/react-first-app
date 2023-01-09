import Card from './components/Card';

const cardList = [
  "Berlin", "Glasgow", "Kiev", "Fukuoka"
];

function getCards () {
  return cardList.map((item) => <Card title={item} key={item} />)
}
function App () {
  return (
    <div className="App">
      <h1>Hello gals and guys</h1>
      {getCards()}
    </div>
  );
}

export default App;
