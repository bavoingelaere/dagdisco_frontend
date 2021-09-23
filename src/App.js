import "./css/App.css";
import About from "./pages/About";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./consts";

const App = () => {
  return (
    <div className="App"><Switch>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
      <Route path={ROUTES.TEAM}>
        <Team />
      </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch></div>
  )
  
};

export default App;
