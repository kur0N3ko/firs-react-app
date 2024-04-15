import DeleteData from "./DeleteData";
import { useCrudContext } from "./CrudContext";


const DataRows = () => {
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
            </td>
        </tr>
    ));
}

export default DataRows;