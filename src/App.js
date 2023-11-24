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
    <Route path="/login" element={<Login />} />
    <Route path="login/create" element={<CreateAccount />} />
    <Route path="login/create/setup" element={<AccountSetup />} />
    <Route path="login/create/setup/payment" element={<Payment />} />
    </Routes>
    </UserDetailsProvider>
    </Router>
    </div>
  );




}

export default App;
