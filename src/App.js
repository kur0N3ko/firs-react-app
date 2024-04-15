import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { NavbarProvider } from "./components/NavbarContext";
import { CrudProvider} from "./components/CrudContext";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/PageComponent/Home";
import About from "./components/PageComponent/About";
import Contact from "./components/PageComponent/Contact";

function App() {
  return (
    <> 
    <Router>
      <NavbarProvider>
        <Navbar />
        <div className="App">
            <Switch>
              <Route path="/" exact component={Home}>
                <div className="Form">
                  <hr/>
                  <CrudProvider>
                    <h2>Scheduling System</h2>
                      <Form/>
                  </CrudProvider>
                </div>
              </Route>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </div>
      </NavbarProvider>
    </Router>
  </>
  );
}

export default App;
