import { useCallback, useEffect, useRef, useState } from "react";

function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

const isBrowser = typeof window !== "undefined";

const useEffectOnce = (effect) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

const useUnmount = (fn) => {
  const fnRef = useRef(fn);

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn;

  useEffectOnce(() => () => fnRef.current());
};

const useRafState = (initialState) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

const useWindowScroll = () => {
  const [state, setState] = useRafState(() => ({
    x: isBrowser ? window.scrollX : 0,
    y: isBrowser ? window.scrollY : 0,
  }));

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        const { scrollX, scrollY } = window;
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return state.x !== scrollX || state.y !== scrollY
          ? {
              x: scrollX,
              y: scrollY,
            }
          : state;
      });
    };

    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler();

    on(window, "scroll", handler, {
      capture: false,
      passive: true,
    });

    return () => {
      off(window, "scroll", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export default useWindowScroll;