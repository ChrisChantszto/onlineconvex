import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Header from './Header';
import Footer from './Footer';
import ProgramList from './ProgramList';
import SchoolsList from "./SchoolsList";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <SchoolsList />
            </Route>
            <Route path="/programs">
              <ProgramList />
            </Route>
            <Route path="/reviews">
              <div>Reviews Page Under Construction</div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;