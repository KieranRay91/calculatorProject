import { useState } from "react";
import Homepage from "./components/Homepage";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Homepage />
      </div>
      <Wrapper>
      <Screen value="1234"/>
      </Wrapper>
    </>
  );
}

export default App;
