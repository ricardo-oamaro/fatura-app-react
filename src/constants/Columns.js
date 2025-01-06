
import { MdEdit, MdDelete } from 'react-icons/md'; // Supondo que você usa react-icons ou bibliotecas similares

export const columns = (startEditing, deleteExpense, openModal) => [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Data",
        accessor: "date",
    },
    {
        Header: "Descrição",
        accessor: "description",
    },
    {
        Header: "Valor",
        accessor: "amount",
    },
    {
        Header: "Categoria",
        accessor: "category",
    },
    {
        Header: "Ações",
        accessor: "actions",
        Cell: ({ row }) => (
            <>
                <MdEdit className='editIcon' onClick={() => {startEditing(row.original); openModal();}} />
                <MdDelete className='deleteIcon' onClick={() => deleteExpense(row.original.id)} />
            </>
        ),
    },
];