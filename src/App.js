import Login from './pages/login';
import CreateAccount from './pages/createAccount';
import Payment from './pages/payment';
import AccountSetup from './pages/accountSetup';
import { UserDetailsProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <UserDetailsProvider>
    <Routes>
    <Route path="/*" element={<Login />} />
    <Route path="/create" element={<CreateAccount />} />
    <Route path="/create/setup" element={<AccountSetup />} />
    <Route path="/create/setup/payment" element={<Payment />} />
    </Routes>
    </UserDetailsProvider>
    </Router>
    </div>
  );




}

export default App;
