import type { Session } from "next-auth";

const useSocialLogo = (session: Session | null) => {
  const id = session && session?.user?.id;
  if (id?.includes("GOOGLE")) {
    return "google";
  } else if (id?.includes("DISCORD")) {
    return "discord";
  } else return null;
};

export default useSocialLogo;
