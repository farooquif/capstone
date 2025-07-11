import React from "react";
import { useState } from "react";

import EmployeeCard from "./EmployeeCard";

const Search = () => {
  const [searchName, setSearchName] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Here, we fetch the employees (name , id, job_role, image_url) that match the entered name
      const response = await fetch(
        `${import.meta.env.VITE_DIRECTORY_API_URL}/employees?name=${searchName}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="form-group">
            <label htmlFor="name">Search for An Employee:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {employees.length == 0 ? (
        <p>No results. Make sure you spelled right!</p>
      ) : (
        <div
          className="card-container"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
        >
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} name={employee.name} id={employee.id} job_role={employee.job_role} image_url={employee.image_url} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
