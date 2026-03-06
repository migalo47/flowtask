import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </Router>
  );
}

export default App;