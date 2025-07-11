import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const fake_profile = {
  name: "John",
  job_role: "Software Developer",
  phone_number: "800-123-4567",
  work_location: "Hartford",
  salary: 5000000,
};

const Profile = () => {
  // retrieve id of current user
  const auth = useAuth();
  const id = auth?.id;

  // passed target id as path parameter
  const params = useParams();

  // profile will contain following fields:
  // name
  // job_role
  // phone_number
  // work_location
  // (conditionally) salary
  const [profile, setProfile] = useState({});

  // WORK HERE
  useEffect(() => {
    const fetchProfile = async () => {
      fetch(
        `${import.meta.env.VITE_DIRECTORY_API_URL}/profile?id=${id}&target_id=${
          params.id
        }`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Fetching profile failed.");
          }
          return res.json();
        })
        .then((data) => setProfile(data))
        .catch((error) => console.error(error));
    };

    fetchProfile();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          minWidth: "350px",
          maxWidth: "350px",
        }}
      >
        <div className="card-body">
          <h2 className="card-title">{fake_profile?.name}</h2>
          <img
            className="circle_image"
            src="https://randomuser.me/api/portraits/men/24.jpg"
          />
          <div className="card-text">Job Role: {fake_profile?.job_role}</div>
          <div className="card-text">
            Phone Number: {fake_profile?.phone_number}
          </div>
          <div className="card-text">
            Work Location: {fake_profile?.work_location}
          </div>
          <div className="card-text">Salary: ${fake_profile?.salary}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
