import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { NavbarProvider } from "./components/NavbarContext";
import { CrudProvider} from "./components/CrudContext";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import DataRows from "./components/DataRows";

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
                  <CrudProvider>
                    <h1>Scheduling System</h1>
                      <Form/>
                        <hr/>
                          <table>
                            <thead>
                              <tr>
                                <th>Bus Name</th>
                                <th>Starting Point</th>
                                <th>Time</th>
                                <th>End Point</th>
                                <th>Time</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                              <tbody>
                                <DataRows/>
                              </tbody>
                          </table>
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
