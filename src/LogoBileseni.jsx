import React from "react";
import logo from "/logo.svg";

export default function LogoBileseni() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <img src={logo} alt="Dermofest Logo" width="180" />
      <h1>DERMOFEST</h1>
    </div>
  );
}