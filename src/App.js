import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
