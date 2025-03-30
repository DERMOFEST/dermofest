import React from "react";
import logo from "/logo.svg";

export default function LogoBileşeni() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px"
    }}>
      <img src={logo} alt="Dermofest Logo" width="180" />
      <h1>DERMOFEST</h1>
    </div>
  );
}