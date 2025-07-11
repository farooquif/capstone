import React, { useEffect } from "react";
import { useState } from "react";

import EmployeeCard from "./EmployeeCard";

const fake_reports = [
  {
    "name": "John",
    "id": 1,
    "job_role": "CEO"
  },
  {
    "name": "Mark",
    "id": 2,
    "job_role": "HR"
  },
  {
    "name": "Ashley",
    "id": 3,
    "job_role": "Director"
  },
  {
    "name": "Claire",
    "id": 5,
    "job_role": "HR"
  },
  {
    "name": "John",
    "id": 1,
    "job_role": "CEO"
  },
  {
    "name": "Mark",
    "id": 2,
    "job_role": "HR"
  },
  {
    "name": "Ashley",
    "id": 3,
    "job_role": "Director"
  },
  {
    "name": "Claire",
    "id": 5,
    "job_role": "HR"
  },
  {
    "name": "John",
    "id": 1,
    "job_role": "CEO"
  },
  {
    "name": "Mark",
    "id": 2,
    "job_role": "HR"
  },
  {
    "name": "Ashley",
    "id": 3,
    "job_role": "Director"
  },
  {
    "name": "Claire",
    "id": 5,
    "job_role": "HR"
  },
  {
    "name": "John",
    "id": 1,
    "job_role": "CEO"
  },
  {
    "name": "Mark",
    "id": 2,
    "job_role": "HR"
  },
  {
    "name": "Ashley",
    "id": 3,
    "job_role": "Director"
  },
  {
    "name": "Claire",
    "id": 5,
    "job_role": "HR"
  }
]

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <>
      <p>Instantly access all of your direct reports below!</p>
      {fake_reports.length == 0 ? (
        <p>You have no direct reports at the moment.</p>
      ) : (
        <div
          className="card-container"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
        >
          {fake_reports.map((report) => (
            <EmployeeCard key={report.id} name={report.name} id={report.id} job_role={report.job_role} />
          ))}
        </div>
      )}
    </>
  );
};

export default Reports;
