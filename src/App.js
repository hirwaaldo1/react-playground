import { useRef, useEffect } from "react";
function App() {
  const ref = useRef();
  let obj = { name: "Hirwa Aldo", age: 23 };
  useEffect(() => {
    console.log(ref);
  }, [ref]);
  return (
    <div>
      <div ref={ref}>{obj.name ?? "empty"}</div>
    </div>
  );
}

export default App;
