import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch("https://student-managment-node-js-back-end.vercel.app/api/students");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await fetch(`https://student-managment-node-js-back-end.vercel.app/api/students/${id}`, {
      method: "DELETE",
    });
     alert("Student Deleted Sucessfully");
    fetchStudents();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold text-dark">Student List</h2>

          <Link to="/add" className="btn btn-success fw-semibold px-4">
            + Add Student
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Education</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <strong>No students found</strong>
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr key={s._id}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.gender}</td>
                    <td>{s.course}</td>
                    <td>{s.education}</td>

                    <td className="text-center">
                      <Link
                        to={`/edit/${s._id}`}
                        className="btn btn-primary btn-sm me-2 px-3"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm px-3"
                        onClick={() => deleteStudent(s._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
