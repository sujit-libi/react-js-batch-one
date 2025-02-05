import { createContext, useContext, useState } from 'react';

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const FakeAuthContext = createContext();

function FakeAuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  function login(email, password) {
    console.log({ email, password });
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setIsAuthenticate(true);
      return;
    }
    alert('Email and Password Incorrect!!!!!!!');
  }

  function logout() {}

  return (
    <FakeAuthContext.Provider
      value={{
        isAuthenticate,
        login,
        logout,
      }}
    >
      {children}
    </FakeAuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(FakeAuthContext);
  if (context === undefined)
    throw new error('Context was called outside of Provider');
  return context;
}

export { FakeAuthProvider, useAuth };
