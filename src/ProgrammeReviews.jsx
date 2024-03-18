import { useParams } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import './ProgrammeReviews.css';

function ProgrammeReviews() {
    const { programmeId } = useParams();
    const programmes = useQuery(api.programmes.get);
    const reviews = useQuery(api.programmeReviewsquery.getReviewsByProgrammeId);

    if (!programmes || !reviews) {
        return <div>Loading...</div>;
    }

    // Find the specific programme by _id
    const programme = programmes.find(p => p._id === decodeURIComponent(programmeId));
    console.log(programmeId);
    // Filter reviews for the specific programme
    const programmeReviews = reviews.filter(review => review.programmeId === decodeURIComponent(programmeId));
    console.log(programmeReviews);

    if (!programme) {
        return <div>Programme not found.</div>;
    }

    console.log("reviews: ", reviews);

    return (
        <div className='programme-reviews'>
            <h1>{programme.name} - Reviews</h1>
            <h2>Reviews</h2>
            <div className='reviews-list'>
                {programmeReviews.length ? (
                    <ul>
                        {programmeReviews.map((review) => (
                            // Replace 'reviewText' with the actual review text field from your schema
                            <div key={review._id} className="review-card">
                                <p className="review-text">{review.reviewText}</p>
                                <p className="review-rating">Rating: {review.rating}</p>
                                <p className="review-difficulty">Difficulty: {review.difficulty}</p>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </div>
    );
}

export default ProgrammeReviews;