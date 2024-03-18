import { query } from "./_generated/server";

export const getReviewsByProgrammeId = query({
    args: {},
    handler: async ({ db }) => {
        // Fetch all reviews for a specific programmeId
        const reviews = await db.query("programmeReviews").collect();

        const reviewsWithProgrammes = await Promise.all(reviews.map(async (review) => {
            const programme = await db.query("programmes").filter(q => q.eq(q.field("_id"), review.programmeId)).first();
            return {
                ...review,
                programmeName: programme ? programme.name : "Unknown",
            };
        
        }));

        return reviewsWithProgrammes;
    },
});