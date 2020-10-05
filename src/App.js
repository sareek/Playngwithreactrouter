import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import BoilerPlate from "./components/BoilerPlate";
import Form from "./components/Form";
import NameList from "./components/NameList";
import { routes } from "./routes/routes";
import Protected from "./components/Protected";
import Page404NotFound from "./components/Page404NotFound";
class App extends React.Component {
  state = {
    name: "React",
    isUserAuthenticated: false,
  };
  render() {
    return (
      <Router>
        <div className="background">
          <Switch>
            <Route
              exact
              path={routes.HOME}
              render={(props) => <BoilerPlate {...props} />}
            ></Route>
            <Protected exact path="/" component={Form} />

            <Protected exact path={routes.OVERVIEW} component={NameList} />
            <Protected exact path={routes.PERSONALINFO} component={Form} />
            <Route component={Page404NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
