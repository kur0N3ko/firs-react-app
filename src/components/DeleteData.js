import React from 'react';
import { useCrudContext } from './CrudContext';

function DeleteData({ id }) {
const { deleteData } = useCrudContext();

const handleDelete = () => {
    deleteData(id);
    alert('Successfully deleted.');
};

return (
    <button onClick={handleDelete}>Delete</button>
);
}

export default DeleteData;
