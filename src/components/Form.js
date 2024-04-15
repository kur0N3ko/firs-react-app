import React, { useState } from 'react';
import { useCrudContext } from './CrudContext';
// import TableComponent from './TableComponent';
import DeleteData from './DeleteData';

  function Form() {
    const { data, addData, updateData } = useCrudContext();
    const [formData, setFormData] = useState({ id: "", name: "", spoint: "", time: "", epoint: "", etime: "", date: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.id) {
        // Update existing record
    updateData(formData);
    alert('Successfully updated.');
    } else {
        // Add new record
    addData(formData);
    alert('Successfully added.');
    }
    setFormData({ id: "", name: "", spoint: "", time: "", epoint: "", etime: "", date: "" });
  }

  // Function to handle editing
  function handleEdit(id) {
      const record = data.find(item => item.id === id);
      setFormData(record);
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={formData.id} onChange={handleChange} />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Bus Name" required />
        <input type="text" name="spoint" value={formData.spoint} onChange={handleChange} placeholder="Starting Point" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} placeholder="Time" required />
        <input type="text" name="epoint" value={formData.epoint} onChange={handleChange} placeholder="End Point" required />
        <input type="time" name="etime" value={formData.etime} onChange={handleChange} placeholder="Time" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" required />
        <button type="submit">{formData.id ? 'Update' : 'Add'}</button>
      </form>
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
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.spoint}</td>
              <td>{item.time}</td>
              <td>{item.epoint}</td>
              <td>{item.etime}</td>
              <td>{item.date}</td>
              <td><button onClick={() => handleEdit(item.id)}>Edit</button>
              <DeleteData id={item.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
  
  
  

export default Form;