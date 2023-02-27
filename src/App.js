import React from "react";
function App() {
  let obj = { name: "Hirwa Aldo", age: 23 };
  return (
    <div>
      <div>{obj.name ?? "empty"}</div>
    </div>
  );
}

export default App;
