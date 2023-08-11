import { useSanityClient, groq } from "astro-sanity";


export async function getAllPost() {
  const client = useSanityClient();
  const query = groq`*[_type == "post"]`;
  const posts = await client.fetch(query);
  return posts;
}



export async function getAllProjects() {
  const client = useSanityClient();
  const query = groq`*[_type == "project"]`;
  const projects = await client.fetch(query);
  return projects;
}


// Define a function to fetch data from Sanity
export async function fetchSanityData() {
  const query = '*[_type == "project"]'; // Example query
  return await client.fetch(query);
}