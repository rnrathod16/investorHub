import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommonLogin from "./pages/AuthPages/CommonLogin";
import InvestorLogin from "./pages/AuthPages/InvestorLogin";
import StartupLogin from "./pages/AuthPages/StartupLogin";
import StartupSignup from "./pages/AuthPages/StartupSignup";
import InvestorSignup from "./pages/AuthPages/InvestorSignup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CommonLogin />
        </Route>
        <Route exact path="/investor/login">
          <InvestorLogin />
        </Route>
        <Route exact path="/investor/signup">
          <InvestorSignup />
        </Route>
        <Route exact path="/startup/login">
          <StartupLogin />
        </Route>
        <Route exact path="/startup/signup">
          <StartupSignup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
