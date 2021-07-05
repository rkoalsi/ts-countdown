import './App.css';
import Card from './Card';
import Clock from './Clock';
function App() {
  return (
    <div className='App'>
      <Card title='Welcome!' paragraph='To this countdown example' />
      <Clock startTimeInSeconds={10} />
    </div>
  );
}

export default App;
