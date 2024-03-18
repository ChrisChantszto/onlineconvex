import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Header from './Header';
import Footer from './Footer';
import ProgramList from './ProgramList';
import ReviewsForm from "./ReviewsForm";
import SchoolsList from "./SchoolsList";
import ProgrammeReviews from "./ProgrammeReviews";

// Import Routes and Route from react-router-dom (Switch is replaced by Routes)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          {/* Replace Switch with Routes */}
          <Routes>
            {/* Update Route components with the new element prop */}
            <Route exact path="/" element={<SchoolsList />} />
            <Route path="/programs" element={<ProgramList />} />
            <Route path="/program/:programmeId/reviews" element={<ProgrammeReviews />} />
            <Route path="/reviews" element={<div>Reviews Page Under Construction</div>} />
            <Route path="/add-review" element={<ReviewsForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;