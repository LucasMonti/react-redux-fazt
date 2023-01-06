
import './App.css';
import {useSelector} from 'react-redux'

function App() {

const taskSlicer = useSelector(state => state.tasks)
console.log(taskSlicer);

  return (
    <div className="App">
    Hello world
    </div>
  );
}

export default App;
