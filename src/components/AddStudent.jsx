import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    course: "",
    education: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://student-managment-node-js-back-end.vercel.app/api/students/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Student added successfully!");
        navigate("/students");
      } else {
        alert("Failed to add student.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while adding student.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="fw-bold text-dark mb-3">Add New Student</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter student's name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Enter age"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label>
            <div className="d-flex gap-4 mt-1">

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Male</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Others"
                  onChange={handleChange}
                />
                <label className="form-check-label">Others</label>
              </div>

            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Course</label>
            <select
              name="course"
              className="form-select"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Course --</option>
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Education</label>
            <input
              type="text"
              name="education"
              className="form-control"
              placeholder="Enter education"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary px-4 fw-semibold mt-2"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
