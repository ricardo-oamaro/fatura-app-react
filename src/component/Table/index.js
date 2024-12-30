import './Table.css'; // Importa o arquivo CSS para estilizar a tabela
import { useTable } from 'react-table';

const SimpleTable = ({ columns, data }) => {


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

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
                            const { key, ...restRowProps } = row.getRowProps();
                            return (
                                <tr key={key} {...restRowProps}>
                                    {row.cells.map(cell => {
                                        const { key: cellKey, ...restCellProps } = cell.getCellProps();
                                        return (
                                            <td key={cellKey} {...restCellProps}>
                                                {cell.render("Cell")}
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