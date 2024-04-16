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
import TaskPage from "./components/PageComponent/TaskPage";

function App() {
  return (
    <> 
    <Router>
      <NavbarProvider>
        <Navbar />
        <div className="App">
            <Switch>
              <Route path="/" exact component={Home}>
                <div>
                  <Home/>
                </div>
              </Route>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/taskpage" component={TaskPage} >
                <div className="Form">
                    <h1>Sheduling System</h1>
                    <br/>
                      <CrudProvider>
                        <Form/>
                      </CrudProvider>
                </div>
              </Route>
            </Switch>
        </div>
      </NavbarProvider>
    </Router>
  </>
  );
}

export default App;
