import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function ProgramList() {
  const programmes = useQuery(api.programmes.get);
  console.log(programmes);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cost ($)</th>
            <th>Duration (Months)</th>
          </tr>
        </thead>
        <tbody>
          {programmes && programmes.map(({ _id, name, description, cost, duration }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{cost}</td>
              <td>{duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramList;