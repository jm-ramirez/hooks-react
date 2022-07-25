import { Example } from "./components/Example";
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
        <h1>Example with memo</h1>
        {/* useMemo */}
        <Tasks/>
        {/* memo */}
        <Management/>
      </header>
    </div>
  );
}

export default App;
