import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <div className="app-container">
      <h2>Day 4 React Training</h2>

      <div className="glass-card">
        <StudentForm setStudent={setStudent} />
      </div>

      {student && (
        <div className="glass-card student-card">
          <StudentCard student={student} />
        </div>
      )}

      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
