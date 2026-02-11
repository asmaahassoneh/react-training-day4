function StudentCard({ student }) {
  return (
    <>
      <h3>🎓 Student Preview</h3>
      <p>
        <b>Name:</b> {student.name}
      </p>
      <p>
        <b>Email:</b> {student.email}
      </p>
      <p>
        <b>Course:</b> {student.course}
      </p>
      <p>
        <b>GPA:</b> {student.gpa}
      </p>
    </>
  );
}

export default StudentCard;
