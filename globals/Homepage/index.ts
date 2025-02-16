import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  fields: [
    { name: "banner", type: "upload", relationTo: "media" },
    {
      name: "albums",
      type: "relationship",
      required: true,
      relationTo: "albums",
      hasMany: true,
      admin: {
        description: "Select albums to feature on the home page",
      },
    },
    {
      name: "video",
      type: "text",
      required: true,
    },
  ],
};
