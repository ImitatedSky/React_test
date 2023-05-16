import { useState, useEffect, useContext } from "react";
import gContext from "./gContext";

export default function Subapp1() {
  return (
    <>
      <gContext.Consumer>
        {(arg) => (
          <>
            <div>{arg.gvar}</div>
            <div>{arg.svar}</div>
          </>
        )}
      </gContext.Consumer>
    </>
  );
}
