import Header from './components/Header/index.js';
import SideBar from './components/Menu/Sidebar/index.js';
import ExpenseScreen from './components/Expenses/ExpenseScreen/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/index.js';
import CreditCard from './components/CreditCard/index.js';

function App() {




  return (
    <div>
      <BrowserRouter>
      <Header />
      <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpenseScreen />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="*" element={<div>Página não encontradas</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
