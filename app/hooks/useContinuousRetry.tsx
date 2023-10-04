// import * as React from "react";

// export default function useContuousRetry(cb, delay, { maxRetries }) {
//   const [resolved, setResolved] = React.useState(false);

//   React.useEffect(() => {
//     const newProm = new Promise((resolve, reject) => {
//       let res = cb();
//       resolve(!!res);
//     });

//     let times = 0;

//     let interval = window.setInterval(() => {
//       if (times >= maxRetries) {
//         window.clearInterval(interval);
//         return;
//       }
//       times += 1;
//       newProm.then((res) => {
//         if (res) {
//           setResolved(true);
//           window.clearInterval(interval);
//         } else {
//           setResolved(true);
//         }
//       });
//     }, delay);

//     return () => {
//       window.clearInterval(interval);
//     };
//   }, [delay, maxRetries]);

//   return resolved;
// }

import * as React from "react";

// React.useEffectEvent = React.experimental_useEffectEvent;

export default function useContinuousRetry(
  callback,
  interval = 100,
  options = {},
) {
  const { maxRetries = Infinity } = options;
  const [hasResolved, setHasResolved] = React.useState(false);
  // const onInterval = React.useEffectEvent(callback);

  React.useEffect(() => {
    let retries = 0;

    const id = window.setInterval(() => {
      if (callback()) {
        setHasResolved(true);
        window.clearInterval(id);
      } else if (retries >= maxRetries) {
        window.clearInterval(id);
      } else {
        retries += 1;
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [interval, maxRetries]);

  return hasResolved;
}
