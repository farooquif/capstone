import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EmployeeCard = ({ name, id, job_role }) => {
  const navigate = useNavigate();

  return (
      <div
        onClick={() => navigate(`/profile/${id}`)}
        className="card"
        style={{ flex: "1", minWidth: "300px", maxWidth: "300px", cursor:"pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title">Employee Details</h5>
          <div className="card-text">Name: {name}</div>
          <div className="card-text">Job Role: {job_role}</div>
        </div>
        <div
          className="card-footer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <small className="text-muted">Click to View More</small>
          
        </div>
      </div>
  );
};

export default EmployeeCard;
