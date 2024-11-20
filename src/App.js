import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
    <div className="container text-center py-5">
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-primary text-white">
          <h1>Welcome to My React App!</h1>
        </div>
        <div className="card-body">
          <p className="lead">Hi there! I hope you are having a good day. Welcome to lab 7</p>
          <button
            className="btn btn-success btn-lg"
            onClick={() => alert("You clicked me!")}
          >
            Click Me!
          </button>
        </div>
        <div className="card-footer text-muted">
          <small>Powered by React & Bootstrap</small>
        </div>
      </div>
    </div>
  );
}

export default App;
