import './App.css';
import { BrowserRouter,Link,Switch,Route } from "react-router-dom";
import Word from './Components/Word.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter className="App">
      <div className='App'>
      <Switch>
        <Route exact path='/home'>
          <h1>Welcome</h1>
        </Route>
        <Route exact path ='/:word/:bgcolor?/:color?'>
          <Word></Word>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
