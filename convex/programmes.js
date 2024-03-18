/* import { query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("programmes").collect();
    },
}); */

import { query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async ({ db }) => {
        // Fetch all programmes
        const programmes = await db.query("programmes").collect();

        // Fetch the corresponding school for each programme
        const programmesWithSchools = await Promise.all(programmes.map(async (programme) => {
            const school = await db.query("schools").filter(q => q.eq(q.field("_id"), programme.schoolId)).first();
            return {
                ...programme,
                schoolName: school ? school.name : "Unknown", // Include the school name in the programme object
            };
        }));

        return programmesWithSchools;
    },
});