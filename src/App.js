import "./styles.css";

import gContext from "./gContext";
import Subapp1 from "./subapp1";
import Subapp2 from "./subapp2";

import { React, useContext, useState } from "react";

export default function App() {
  const [gvar, setGvar] = useState(11);
  const [zvar, setZvar] = useState(15);
  const svar = "hello";
  return (
    <gContext.Provider value={{ gvar, setGvar, svar, zvar, setZvar }}>
      <div className="App"></div>
      <Subapp1 />
      <Subapp2 />
    </gContext.Provider>
  );
}
