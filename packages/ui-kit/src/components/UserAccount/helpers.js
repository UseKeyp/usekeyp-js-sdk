import { Icon } from "../index.js";

export function getStyledUsernameFromCurrentUser(currentUser, sizeVariant) {
  if (!currentUser?.id) {
    return "";
  }

  const platformColorMapping = {
    discord: "text-brand-discord",
    google: "text-gray-2000",
    chess: "text-gray-2000",
    twitter: "text-brand-twitter",
    twitch: "text-brand-twitch",
    epic_games: "text-brand-epic_games",
    reddit: "text-brand-reddit",
    facebook: "text-brand-facebook",
    microsoft: "text-gray-2400",
  };

  const platform = currentUser.id.split("-")[0].toLowerCase();
  const textColorClass = platformColorMapping[platform] || "text-gray-2000";

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
    chess: { name: "CHESS" },
    twitter: { name: "TWITTER" },
    twitch: { name: "TWITCH" },
    node: { name: "KEYPCIRCLE" },
    epic_games: { name: "EPIC_GAMES" },
    reddit: { name: "REDDIT" },
    facebook: { name: "FACEBOOK", marginTop: "mt-0.5" },
    microsoft: { name: "MICROSOFT" },
    spotify: { name: "SPOTIFY", marginTop: "mt-0.5" },
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
