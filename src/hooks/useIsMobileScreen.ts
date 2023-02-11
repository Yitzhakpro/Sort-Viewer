import { useState, useEffect } from "react";
import { isMobileScreen } from "../utils";

function useIsMobileScreen(): boolean {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize(): void {
      const isSmall = isMobileScreen(window.innerHeight, window.innerWidth);

      setIsSmallScreen(isSmall);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
}

export default useIsMobileScreen;
