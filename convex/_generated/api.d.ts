/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.10.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as programmeReviews from "../programmeReviews.js";
import type * as programmeReviewsquery from "../programmeReviewsquery.js";
import type * as programmes from "../programmes.js";
import type * as schoolReviews from "../schoolReviews.js";
import type * as schools from "../schools.js";
import type * as tasks from "../tasks.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  programmeReviews: typeof programmeReviews;
  programmeReviewsquery: typeof programmeReviewsquery;
  programmes: typeof programmes;
  schoolReviews: typeof schoolReviews;
  schools: typeof schools;
  tasks: typeof tasks;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
