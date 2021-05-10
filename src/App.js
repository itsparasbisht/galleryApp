import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Upload from './components/Upload';
import {useState} from 'react';
import Modal from './components/Modal';

function App() {
  const[selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="app">
      <Header />
      <Upload />
      <Grid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
