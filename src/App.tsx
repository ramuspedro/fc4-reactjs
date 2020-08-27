import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

interface UserModel {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="fc4-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h1 className="main-text">Maratona Full Cycle 4</h1>;
}

function Users() {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      });
    return () => {
      //destruir coisas aqui
    };
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map((user, key) => (
          <li key={key}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
