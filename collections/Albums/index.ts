import type { CollectionConfig } from "payload";

export const Albums: CollectionConfig = {
  slug: "albums",
  admin: {
    useAsTitle: "title", // Use the 'title' field as the display title
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "songs",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "link", type: "text", required: true },
        { name: "lyrics", type: "textarea" },
        { name: "thumbnail", type: "upload", relationTo: "media" },
      ],
    },
  ],
};
