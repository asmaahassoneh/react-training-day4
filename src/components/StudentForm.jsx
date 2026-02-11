import { useState } from "react";
import { toast } from "react-toastify";

function StudentForm({ setStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course) {
      toast.error("All fields are required");
      return;
    }

    if (formData.gpa < 0 || formData.gpa > 4) {
      toast.error("GPA must be between 0 and 4");
      return;
    }

    setStudent(formData);
    toast.success("Student Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email Address" onChange={handleChange} />
      <input name="course" placeholder="Course Name" onChange={handleChange} />
      <input
        name="gpa"
        type="number"
        step="0.1"
        placeholder="GPA (0 - 4)"
        onChange={handleChange}
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
