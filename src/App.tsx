import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEmbed from "./FormEmbed";
import { GoogleTagManager } from "react-google-gtm";

function App() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-XXXXXX" />
      <div className="App">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-3xl">
            <p>Welcome to the form show</p>
            <FormEmbed />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
