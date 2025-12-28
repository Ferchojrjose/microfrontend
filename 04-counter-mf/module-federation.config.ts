export const mfConfig = {
  name: "counter_mf",
  filename: "remoteEntry.js",
  exposes: {
    "./CounterReact": "./src/components/Counter.tsx",
  },
  shared: ["react", "react-dom"],
};
