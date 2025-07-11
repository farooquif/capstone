import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../hooks/AuthContext";

import EmployeeCard from "./EmployeeCard";

const Reports = () => {
  // Grab user's id from the auth context
  const auth = useAuth();
  const id = auth?.id;

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      fetch(`${import.meta.env.VITE_DIRECTORY_API_URL}/reports?id=${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Fetching profile failed.");
          }
          return res.json();
        })
        .then((data) => setReports(data))
        .catch((error) => console.error(error));
    };

    fetchReports();
  }, []);

  return (
    <>
      <p>Instantly access all of your direct reports below!</p>
      {reports.length == 0 ? (
        <p>You have no direct reports at the moment.</p>
      ) : (
        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {reports.map((report) => (
            <EmployeeCard
              key={report.id}
              name={report.name}
              id={report.id}
              job_role={report.job_role}
              image_url={report.image_url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Reports;
