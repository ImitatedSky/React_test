import { useState, useEffect, useContext } from "react";
import gContext from "./gContext";

export default function Subapp2() {
  const value = useContext(gContext);

  value.setZvar(2);

  const zvar2 = value.zvar * 2;
  const zvar = value.zvar;

  return (
    <>
      <div>{zvar2}</div>
      <div>{zvar}</div>
    </>
  );
}
