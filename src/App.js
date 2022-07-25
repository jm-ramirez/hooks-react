import { Example } from "./components/Example";
import { ExampleUseEffect } from "./components/ExampleUseEffect";
import { Form } from "./components/Form";
import { Management } from "./components/Management";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* useRef */}
        <h1>Example with useRef</h1>
        <Example/>
        <Form/>
        <h1>Example with useMemo</h1>
        {/* useMemo */}
        <Tasks/>
        {/* memo */}
        <h1>Example with memo</h1>
        <Management/>
        {/* useEffect y useLayoutEffect */}
        <h1>Example with useEffect and useLayoutEffect</h1>
        <ExampleUseEffect/>
      </header>
    </div>
  );
}

export default App;
