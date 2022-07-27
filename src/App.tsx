import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { IUser } from './models/IUser';
import { useActions } from './hooks/useActions';


const App: React.FC = () => {

  const {setIsAuth, setUser} = useActions();

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App;
