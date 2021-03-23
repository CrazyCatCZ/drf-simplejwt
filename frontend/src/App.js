import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <span onClick={() => history.push("/login")}>Login</span>
          <span onClick={() => history.push("/register")}>Register</span>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
