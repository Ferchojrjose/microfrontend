export const mfConfig = {
  name: "mf_counter",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  remotes: {
    mf_store: "mf_store@http://localhost:5050/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
