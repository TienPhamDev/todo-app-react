import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
// import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/todos" element={<TodoApp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
