import { BrowserRouter } from "react-router-dom";
import Dashboard from "./layout/dashboard";

function App() {
  return (
    <div className="App h-screen w-full">
      <BrowserRouter basename="/">
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
