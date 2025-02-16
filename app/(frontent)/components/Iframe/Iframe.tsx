import { YouTubeEmbed } from "@next/third-parties/google";

export function IframeComponent({ embed_url }) {
  const RenderIframe = () => {
    const videoId =
      new URL(embed_url).searchParams.get("v") || embed_url.split("/").pop();
    return (
      <YouTubeEmbed
        videoid={videoId?.split("?")[0] || ""}
        style="max-width: 100%"
      />
    );
  };
  return <RenderIframe />;
}
