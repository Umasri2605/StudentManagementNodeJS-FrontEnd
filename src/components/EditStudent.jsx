import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    course: "",
    education: "",
  });

  const [loading, setLoading] = useState(true);

  const courseOptions = ["ReactJS", "NodeJS", "Python", "Java"];

  const fetchStudent = async () => {
    try {
      const res = await fetch(`https://student-managment-node-js-back-end.vercel.app/api/students/${id}`);
      const data = await res.json();

      const normalizedCourse =
        courseOptions.find(
          (c) => c.toLowerCase() === (data.course || "").toLowerCase()
        ) || "";

      setForm({
        name: data.name || "",
        age: data.age || "",
        gender: data.gender || "",
        course: normalizedCourse,
        education: data.education || "",
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://student-managment-node-js-back-end.vercel.app/api/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Student updated successfully!");
      navigate("/students");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <h4 className="text-center mt-5 text-secondary">
        Loading student details...
      </h4>
    );

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="fw-bold text-dark mb-3">Edit Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
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
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label>
            <div className="d-flex gap-4 mt-1">
              {["Male", "Female", "Others"].map((g) => (
                <div className="form-check" key={g}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{g}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Course</label>
            <select
              name="course"
              className="form-select"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Course --</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Education</label>
            <input
              type="text"
              name="education"
              className="form-control"
              value={form.education}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success px-4 fw-semibold mt-2"
          >
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}