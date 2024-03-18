import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    tasks: defineTable({
        text: v.string(),
        isCompleted: v.boolean(),
    }),
    schools: defineTable({
        name: v.string(), // The name of the school
        location: v.string(),
        image: v.optional(v.string()),
        // You can add more fields here as needed
    }),

    schoolReviews: defineTable({
        schoolId: v.id('schools'), // A reference to the schools table
        reviewerId: v.string(), // The ID of the reviewer (could also be a reference to a users table if it exists)
        rating: v.number(), // The numeric rating for the school
        reviewText: v.string(), // The text of the review
        // Additional fields can go here
    }),

    programmes: defineTable({
        schoolId: v.id('schools'), // A reference to the schools table
        name: v.string(), // The name of the programme
        description: v.string(), // A description of the programme
        cost: v.number(),
        duration: v.number(),
        // Additional fields can be added here
    }).index("school", ["schoolId"]),

    programmeReviews: defineTable({
        programmeId: v.id('programmes'), // A reference to the programmes table
        reviewerId: v.string(), // The ID of the reviewer (again, could be a reference)
        rating: v.number(), // The numeric rating for the programme
        difficulty: v.number(),
        reviewText: v.string(), // The text of the review
        // Any other fields you need
    }),
});