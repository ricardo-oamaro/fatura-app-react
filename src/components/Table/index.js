import './Table.css'; // Importa o arquivo CSS para estilizar a tabela
import { useTable } from 'react-table';

const SimpleTable = ({ columns, data }) => {


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    // const formatDate = (dateString) => {
    //     const [year, month, day] = dateString.split('-');
    //     return `${day}/${month}/${year}`; 
    // }

    return (
        <section className="App">
            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => {
                            const { key: headerGroupKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={headerGroupKey} {...restHeaderGroupProps}>
                                    {headerGroup.headers.map(column => {
                                        const { key: columnKey, ...restColumnProps } = column.getHeaderProps();
                                        return (
                                            <th key={columnKey} {...restColumnProps}>
                                                {column.render("Header")}
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            const rowProps = row.getRowProps();
                            return (
                                <tr {...rowProps} key={rowProps.key}>
                                {row.cells.map(cell => {
                                    // debugger;
                                    const cellProps = cell.getCellProps();
                                        return (
                                            <td {...cellProps} key={cellProps.key}>
                                                {cell.column.id === 'date' ? 
                                                    cell.value : // Formata a data
                                                    cell.render("Cell")} {/* Renderiza normalmente para outras células */}
                                                    
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SimpleTable;