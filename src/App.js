
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import {incrementHandler,decrementHandler,resetHandler} from './Redux/action ';
import {Button} from 'react-bootstrap'

function App() {
// create a const for the hook "useDispatch"
const Dispatch = useDispatch()
// Dispatch the action 
const plus =() => { Dispatch (incrementHandler())
}
const moin =() => { Dispatch (decrementHandler())
}
const zero =() => { Dispatch (resetHandler())
}

// extract global state from the store 
const count = useSelector((state)=>state.counter)


  return (
    <div className="App">
     <h1>Work shop react-redux</h1>
   
   
   
   
     <div className="Buttons">
     <Button onClick={plus} variant="success">+</Button>{' '}
       <h2>{count}</h2>
     <Button onClick={moin} variant="success">-</Button>{' '}
     </div>
     <br/>
     <br/>
     <div className="rest">
     <Button onClick={zero} variant="danger">RESET</Button>{' '}
     </div>

    </div>
  );
}

export default App;
