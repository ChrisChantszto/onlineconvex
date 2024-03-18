import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./ReviewsForm.css";
import "./App.css";

function ReviewsForm() {
  const programmes = useQuery(api.programmes.get);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [rating, setRating] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  const [workload, setWorkload] = useState(12);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a function to submit the review to the database
    // submitReview({ selectedProgram, rating, difficulty, workload, reviewText });
    console.log({ selectedProgram, rating, difficulty, workload, reviewText });
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="programSelect">Select Program:</label>
        <select
          id="programSelect"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
          required
        >
          <option value="">Choose a program...</option>
          {programmes &&
            programmes.map((program) => (
              <option key={program._id} value={program._id}>
                {program.name}
              </option>
            ))}
        </select>

        <div className="review-rating">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                value={num}
                checked={rating === num}
                onChange={() => setRating(num)}
              />
              {num}
            </label>
          ))}
        </div>

        <div className="review-difficulty">
          <label>Difficulty:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                value={num}
                checked={difficulty === num}
                onChange={() => setDifficulty(num)}
              />
              {num}
            </label>
          ))}
        </div>

        <div className="review-workload">
          <label>Workload:</label>
          <input
            type="number"
            value={workload}
            onChange={(e) => setWorkload(e.target.value)}
            min={1}
          />
          hours / week
        </div>

        <div className="review-text">
          <label>Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewsForm;