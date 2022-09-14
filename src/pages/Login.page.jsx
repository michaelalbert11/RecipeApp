import React from "react";
import { FaGrinTongueWink } from "react-icons/fa";
export default function Login() {
  return (
    <section style={{ margin: "0" }}>
      <div
        className="container"
        style={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          minHeight: "85vh",
        }}
      >
        <div style={{ display: "inherit", placeItems: "inherit", gap: "20px" }}>
          <h1 style={{ color: "bisque", fontSize: "2rem" }}>
            Feature in development
          </h1>
          <FaGrinTongueWink style={{ fontSize: "15rem", color: "yellow" }} />
        </div>
      </div>
    </section>
  );
}
