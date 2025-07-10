import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const fake_profile = {
  name: "John",
  job_role: "Software Developer",
  phone_number: "800-123-4567",
  work_location: "Hartford",
  salary: 5000000
}

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

  useEffect(() => {
    const fetchProfile = async () => {
      fetch(`${import.meta.env.VITE_DIRECTORY_API_URL}/profile?id=${id}&target_id=${params.id}`);
    }

    fetchProfile();
  }, []);

  return (
    <div
      className="card"
      style={{
        flex: "1",
        minWidth: "300px",
        maxWidth: "300px",
      }}
    >
      <div className="card-body">
        <h2 className="card-title">{profile?.name}</h2>
        <div className="card-text">Job Role: {profile?.job_role}</div>
        <div className="card-text">Phone Number: {profile?.phone_number}</div>
        <div className="card-text">Work Location: {profile?.work_location}</div>
        <div className="card-text">Salary: ${profile?.salary}</div>
      </div>
    </div>
  );
};

export default Profile;
