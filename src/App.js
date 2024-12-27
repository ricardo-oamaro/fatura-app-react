
import AddButton from './component/AddButton';
import SimpleTable from './component/Table';

function App() {

  const handleButtonClick = () => {
    alert('Botão clicado!');
};

  return (
    <div>
      <SimpleTable />
      <AddButton onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
