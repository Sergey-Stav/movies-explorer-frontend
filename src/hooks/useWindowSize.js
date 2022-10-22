import { useEffect, useState } from "react";

function useWindowSize() {
  const getWindowSize = () => {
    const { innerWidth: width } = window;
    return width;
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
