import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe("pk_test_your_key_here");
