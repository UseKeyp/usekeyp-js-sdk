import { Icon } from "../index.js";

export const trimAddress = (address) => {
  if (typeof address !== "string") return "";

  const firstPart = address.substring(0, 2);
  const secondPart = address.substring(2, 6);
  const lastPart = address.substring(38);

  return (
    <>
      <span style={{ fontFamily: "Arial, sans-serif" }}>{firstPart}</span>
      {secondPart}...{lastPart}
    </>
  );
};

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
    microsoft: "text-brand-microsoft",
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
