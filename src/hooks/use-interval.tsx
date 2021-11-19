import React from "react";

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null
): void {
  const savedCallback = React.useRef<C>();

  React.useEffect(() => {
    savedCallback.current = callback;
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearInterval(id);
    }
  }, [callback, delay]);
}
