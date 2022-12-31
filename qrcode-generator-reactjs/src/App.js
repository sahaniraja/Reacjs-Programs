import logo from './logo.svg';
import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function App() {

  const [qrcode, setQrCode] = useState("");

  function genQRCode(e){
    setQrCode(e.target.value);
  }

  return (
    <div className="App">
      <h1>Generating a QR Code using react-qr-code package</h1>
      <QRCode value={qrcode} />
      <p>Please enter your text to generate a QR Code</p>
      <div className="input-box">
        <input type="text" value={qrcode} onChange={(e)=>{genQRCode(e)}} />
      </div>
    </div>
  );
}

export default App;
