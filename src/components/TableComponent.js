import React from 'react';
import DataRows from './DataRows'; // Import the DataRows component
import { useCrudContext } from './CrudContext';

const TableComponent = () => {
    const { data } = useCrudContext();

    return (
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
            <DataRows data={data} /> {/* Pass data as props to DataRows */}
        </tbody>
        </table>
    );
};

export default TableComponent;
