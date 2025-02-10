import CreateCustomer from './container/customers/CreateCustomer';
import Customer from './container/customers/Customer';
import AccountOperations from './container/accounts/AccountOperations';
import BalanceDisplay from './container/accounts/BalanceDisplay';
import { useSelector } from 'react-redux';

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
