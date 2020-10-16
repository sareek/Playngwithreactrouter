import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import BoilerPlate from "./components/BoilerPlate";
import Form from "./components/Form";
import NameList from "./components/NameList";
import { routes } from "./routes/routes";
import Protected from "./components/Protected";
import ErrorPage from "./components/ErrorPage";
class App extends React.Component {
  state = {
    name: "React",
    isUserAuthenticated: false,
  };
  render() {
    const { HOME, PERSONALINFO, OVERVIEW } = routes;
    return (
      <Router>
        <div className="background">
          <Switch>
            <Route
              exact
              path={HOME}
              render={(props) => <BoilerPlate {...props} />}
            ></Route>
            <Protected exact path="/" component={Form} />
            <Protected exact path={PERSONALINFO} component={Form} />
            <Protected exact path={OVERVIEW} component={NameList} />
            <Route exact path="" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
