import React, { useState } from "react";

const Predictor = () => {
  // values used for prediction - given defaults
  const [work_location, setWork_location] = useState("Hartford");
  const [job_role, setJob_role] = useState("Software Engineer");

  const [salary, setSalary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submission = {
      work_location,
      job_role
    }

    fetch(`http://localhost:5000/api/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fetching prediction failed.");
        }
        return res.json();
      })
      .then((data) => setSalary(data.predicted_salary))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <p>
          Use the form below to predict an employee's salary given their Job
          Role and Work Location!
        </p>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="form-group">
            <label htmlFor="job_role">Enter the Job Role:</label>
            <input
              type="text"
              className="form-control"
              id="job_role"
              name="job_role"
              value={job_role}
              onChange={(e) => setJob_role(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="work_location">Provide the Work Location:</label>
            <input
              type="text"
              className="form-control"
              id="work_location"
              name="work_location"
              value={work_location}
              onChange={(e) => setWork_location(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Predict Salary
          </button>
        </form>
      </div>
      {salary && <p>Predicted Salary: ${salary.toLocaleString()}</p>}
    </>
  );
};

export default Predictor;
