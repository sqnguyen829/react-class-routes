import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
