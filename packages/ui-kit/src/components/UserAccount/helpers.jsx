import { Icon } from "../index.js";

export const trimAddress = (address) => {
  if (typeof address !== "string") return "";
  return address.substring(0, 5) + "..." + address.substring(38, 42);
};

export function getStyledUsernameFromCurrentUser(currentUser, sizeVariant) {
  if (!currentUser?.id) {
    return "";
  }

  const platformColorMapping = {
    discord: "#5865F2",
    google: "gray-2000",
    chess: "gray-2000",
    twitter: "#1DA1F2",
    twitch: "#9146FF",
    epic_games: "#2F2D2E",
    reddit: "#FF4500",
    facebook: "#3B5998",
    microsoft: "#2F2D2E",
  };

  const platform = currentUser.id.split("-")[0].toLowerCase();
  const color = platformColorMapping[platform] || "gray-2000";
  const textColorClass = color.startsWith("#")
    ? `text-[${color}]`
    : `text-${color}`;

  return (
    <div className={`flex ${textColorClass} ${sizeVariant || "text-[12px]"}`}>
      <div>{currentUser?.username}</div>
    </div>
  );
}

export function getProviderIconFromCurrentUser(currentUser) {
  if (!currentUser?.id) {
    return <></>;
  }

  const iconMapping = {
    discord: { name: "DISCORD", marginTop: "mt-0.5" },
    google: { name: "GOOGLE" },
    chess: { name: "chess_pawn" },
    twitter: { name: "TWITTER" },
    twitch: { name: "twitch_logo_purple" },
    node_oidc: { name: "keypcircle" },
    epic_games: { name: "epic_games" },
    reddit: { name: "reddit", marginTop: "mt-0.5" },
    facebook: { name: "facebook", marginTop: "mt-0.5" },
    microsoft: { name: "microsoft", marginTop: "mt-0.5" },
  };

  const platform = currentUser.id.split("-")[0].toLowerCase();
  const iconInfo = iconMapping[platform];

  if (!iconInfo) {
    return <></>;
  }

  const { name, marginTop } = iconInfo;

  return (
    <div className={`flex ${marginTop || ""}`}>
      <Icon height="9.75" width="12" name={name} />
    </div>
  );
}
