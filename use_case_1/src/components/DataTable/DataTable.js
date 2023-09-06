import './DataTable.css';
export const DataTable = ({data}) => {

if (!Array.isArray(data)) {
    return null;
}
return(
    <div className='result-container'>
        <h2>Filtered and Sorted Data</h2>
        <table className='data-table'>
            <thead>
            <tr>
                <th></th>
                <th>Country Name</th>
                <th>Population (million)</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name.common}</td>
                    <td>{item.population}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);
}