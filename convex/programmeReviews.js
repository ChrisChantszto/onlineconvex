import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitReview = mutation({
  args: {
    difficulty: v.number(),
    programmeId: v.string(),
    rating: v.number(),
    reviewText: v.string(),
    reviewerId: v.string(),
  },
  handler: async (ctx, args) => {
    const reviewId = await ctx.db.insert("programmeReviews", {
      difficulty: args.difficulty,
      programmeId: args.programmeId,
      rating: args.rating,
      reviewText: args.reviewText,
      reviewerId: args.reviewerId,
    });
    // do something with `reviewId` if needed
  },
});