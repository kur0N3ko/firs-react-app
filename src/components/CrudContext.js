import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CrudContext = createContext();

export const useCrudContext = () => useContext(CrudContext);

export const CrudProvider = ({ children }) => {
    const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [{ id: "", name: "", spoint: "", time: "", epoint: "", etime: "", date: "" }];
});

    const addData = newData => {
        setData([...data, { ...newData, id: uuidv4() }]);
};

    const updateData = updatedData => {
        setData(data.map(item => (item.id === updatedData.id ? { ...updatedData } : item)));
};

        // Function to delete data
    const deleteData = id => {
    const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            const updatedArray = [...data.slice(0, index), ...data.slice(index + 1)];
            setData(updatedArray);
    }
};

useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
}, [data]);

return (
    <CrudContext.Provider value={{ data, addData, updateData, deleteData }}>
    {children}
    </CrudContext.Provider>
);
}

