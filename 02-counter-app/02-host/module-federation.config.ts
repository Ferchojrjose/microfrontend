export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    navbar: "navbar@http://localhost:3001/remoteEntry.js",
    counterReact: "counter_mf@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
