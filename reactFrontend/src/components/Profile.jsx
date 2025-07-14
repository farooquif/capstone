import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

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
  // image_url
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
          <h2 className="card-title">{profile?.name}</h2>
          <img className="circle_image" src={profile?.image_url} />
          <div className="card-text">Job Role: {profile?.job_role}</div>
          <div className="card-text">Phone Number: {profile?.phone_number}</div>
          <div className="card-text">
            Work Location: {profile?.work_location}
          </div>
          {profile?.salary ? (
            <div className="card-text">Salary: ${Number(profile?.salary).toLocaleString()}</div>
          ) : (
            <div className="card-text">Not authorized to view salary</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
