import { useEffect } from 'react';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticate } = useAuth();

  useEffect(() => {
    if (!isAuthenticate) navigate('/login');
  }, [isAuthenticate]);

  return isAuthenticate ? children : null;
}

export default ProtectedRoute;
