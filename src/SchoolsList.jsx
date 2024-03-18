import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function SchoolsList() {
  const schools = useQuery(api.schools.get);
  console.log(schools);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {schools && schools.map(({ _id, name, location }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SchoolsList;