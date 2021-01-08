import {useState} from 'react';
import Layout from './components/layoutComponent';
import { Modal } from 'react-bootstrap';
import './App.css';

function App() {
  const [screenOne, showOne] = useState(true);
  const [screenTwo, showTwo] = useState(false);
  const handleScreenOne = () => {
    showOne(false);
    showTwo(true);
  }
  const handleScreenTwo = () => showTwo(false);
  return (
    <div>
      <Modal className="screen1" show={screenOne} onHide={handleScreenOne}></Modal>
      <Modal className="screen2" show={screenTwo} onHide={handleScreenTwo}></Modal>
      <Layout/>
    </div>
  );
}

export default App;
