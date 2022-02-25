import './App.css';
import { Router } from '@reach/router';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
// import OneAuthor from './components/OneAuthor';
import NewAuthor from './components/NewAuthor';

function App() {
  return (
    <div className="App">
      

      <Router>
        
        <AllAuthors path="/" />

        <NewAuthor path="/new" />

        {/* <OneAuthor path="/author/:id" /> */}

        {/* <Errors path="/error" /> */}

        <EditAuthor path="/edit/:id" />

      </Router>


    </div>
  );
}

export default App;
