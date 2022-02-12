import PicoSanity from "picosanity";

import { sanityconfig } from "./config";

// Standard client for fetching data
export const sanityClient = new PicoSanity(sanityconfig);

// Authenticated client for fetching draft documents
export const previewClient = new PicoSanity({
    ...sanityconfig,
    useCdn: false,
    token: process.env.SANITY_TOKEN ?? ``,
});


// Helper function to choose the correct client
export const getClient = (usePreview = false) =>
    usePreview ? previewClient : sanityClient;