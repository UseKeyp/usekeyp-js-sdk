export const trimAddress = (address) => {
    if (typeof address !== "string") return "";
  
    const firstPart = address.substring(0, 2);
    const secondPart = address.substring(2, 5);
    const lastPart = address.substring(39);
  
    return (
      <>
        <span style={{ fontVariantLigatures: "no-common-ligatures" }}>
          {firstPart}
        </span>
        {secondPart}...{lastPart}
      </>
    );
  };