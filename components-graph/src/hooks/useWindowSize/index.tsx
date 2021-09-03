import * as React from "react";

function useWindowSize(currentDom?: HTMLDocument) {
  let document: any;

  if (currentDom) {
    document = currentDom;
  } else {
    document = window;
  }

  const [windowSize, setWindowSize] = React.useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });

  React.useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: document.innerWidth,
        height: document.innerHeight,
      });
    };

    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useWindowSize;
