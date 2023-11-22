import Login from './pages/Login';
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
    <Route path="/account" element={<AccountSetup />} />
    <Route path="/payment" element={<Payment />} />
    </Routes>
    </UserDetailsProvider>
    </Router>
    </div>
  );




}

export default App;
