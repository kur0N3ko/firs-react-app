import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { NavbarProvider } from "./components/NavbarContext";
import { CrudProvider, useCrudContext} from "./components/CrudContext";
import Form from "./components/Form";
import DeleteData from "./components/DeleteData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  
  return (
    <> 
    <Router>
      <NavbarProvider>
        <Navbar />
        <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </div>
      </NavbarProvider>
    </Router>
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
  </>
  );
}

function DataRows() {
  const { data } = useCrudContext();


  return data.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.spoint}</td>
      <td>{item.time}</td>
      <td>{item.epoint}</td>
      <td>{item.etime}</td>
      <td>{item.date}</td>
      <td>
        <DeleteData id={item.id} />
        {/* <button onClick={() => handleEdit(item.id)}>Edit</button> */}
      </td>
    </tr>
  ));
}

export default App;
