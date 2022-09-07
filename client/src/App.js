import React from 'react';
import HomePage from './components/HomePage'
import StyleSheet from './components/Stylesheet';
import { DatePicker } from 'antd';
import ProfilePage from './components/ProfilePage';
import UploadPage from './components/UploadPage';
import FileCard from './components/FileCard';
import './App.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">      
      <ProfilePage/>
    </div>
  );
}

export default App;
