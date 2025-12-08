export default function HomePage() {
    return (
      <div className="container mt-5">
  
        <div className="text-center mb-4">
          <h1 className="fw-bold text-dark">Welcome to Student Management System</h1>
          <p className="text-secondary fs-5">
          This Student Management System helps you manage student records efficiently. 
       You can add, update, and delete student details with ease. 
  The application provides a clean dashboard to track courses, education levels, and personal information. 
  Designed with a responsive UI, it ensures smooth navigation and fast data handling. 
  Perfect for institutes, training centers, and educational organizations.
          </p>
        </div>
  
        <div className="d-flex justify-content-center">
          <img 
            src="https://img.freepik.com/free-vector/professor-teaching-financial-literacy-academy-class-business-school-university-students-learning-about-cryptocurrency-trading-flat-vector-illustration-finances-education-concept_74855-21276.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Student Management"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "600px" }}
          />
        </div>
  
      </div>
    );
  }
  