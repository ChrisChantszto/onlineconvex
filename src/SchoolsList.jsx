import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./SchoolsList.css"; 

function SchoolsList() {
  const schools = useQuery(api.schools.get);
  console.log(schools);

  return (
    <div className="schools-list">
      {schools && schools.map(({ _id, name, location, image }) => (
        <div key={_id} className="school-card">
          <img src={image} alt={name} className="school-logo" />
          <div className="school-info">
            <h2 className="school-name">{name}</h2>
            <p className="school-location">{location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SchoolsList;