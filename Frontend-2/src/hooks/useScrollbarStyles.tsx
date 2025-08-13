// src/hooks/useScrollbarStyles.ts

import { useEffect } from "react";
import { scrollbarStyles } from "../styles/scrollbarStyles";

export const useScrollbarStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = scrollbarStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
};
