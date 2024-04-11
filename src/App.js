import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { NavbarProvider } from "./components/NavbarContext";
import { CrudProvider, useCrudContext} from "./components/CrudContext";
import Form from "./components/Form";
import DeleteData from "./components/DeleteData";



function App() {

  
  return (
    <CrudProvider>
    <>
    <NavbarProvider><Navbar /> </NavbarProvider>

    <div className="App">
    
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
    </div>
  </>
  </CrudProvider>
  );
}

function DataRows() {
  const { data } = useCrudContext();
  // const handleEdit = id => {
//     const editedItem = data.find(item => item.id === id);
//     setFormData(editedItem);
// };

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
