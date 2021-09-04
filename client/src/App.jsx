import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {Router,Link} from '@reach/router';
import Main from './views/main';
import Create from './views/create';

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to="/">All Tasks</Link>
        <Link to="/new">Add Task</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
      </Router>
    </div>
  );
}

library.add(fas, far);
export default App;
