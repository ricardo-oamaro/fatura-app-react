
import AddButton from './component/AddButton';
import Form from './component/Form';
import SimpleTable from './component/Table';

function App() {

  const handleButtonClick = () => {
    alert('Botão clicado!');
};

  return (
    <div>
      <Form />
      <SimpleTable />
      <AddButton onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
