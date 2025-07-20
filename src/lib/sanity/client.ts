import { createClient } from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

//client safe config
export const config = {
  projectId: "agz6569r",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};
export const client = createClient(config);

//admin level client
const adminConfig = {
    ...config,
    token: process.env.SANITY_API_TOKEN,
};
export const adminClient = createClient(adminConfig);

//Image Url Builder
const builder= imageUrlBuilder(config);
export const urlFor = (source: string) => builder.image(source);