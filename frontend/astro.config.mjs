import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'nvov5n5h',
    dataset: 'production',
    useCdn: true,
    apiVersion: "v2023-08-02",
  })]
});