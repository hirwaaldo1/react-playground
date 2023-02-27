import React from "react";
function App() {
  const [{ x, y }, setXY] = React.useState({ x: 0, y: 100 });
  return (
    <div>
      <div style={{ display: "flex", width: "100%", backgroundColor: "red" }}>
        <button
          onClick={() => {
            setXY({ x: x + 1, y });
          }}
        >
          click
        </button>
        x:{x}
        y:{y}
      </div>
    </div>
  );
}

export default App;
