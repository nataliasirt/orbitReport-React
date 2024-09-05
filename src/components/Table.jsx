import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type of Satellite</th>
                <th>Launch Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        //will use the map function to render the data based on which button a user selects
        {sat.map((data) => (
           <tr key= {data.id}>
            <td>{data.name}</td> 
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Operational": "Non-operational"}</td>
            </tr>
            ))}
        </tbody>
   </table>
          );
        };

export default Table;