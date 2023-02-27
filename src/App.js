function App() {
  return (
    <div>
      <div
        onClickCapture={(e) => {
          e.stopPropagation();
          alert("div");
        }}
        style={{ display: "flex", width: "100%", backgroundColor: "red" }}
      >
        <button onClick={() => alert("button")}>click</button>
      </div>
    </div>
  );
}

export default App;
