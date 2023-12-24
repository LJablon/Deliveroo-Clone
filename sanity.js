import sanityClient, { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
    projectId: "qwoxusny",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21", 
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client; 