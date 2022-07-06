import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
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
