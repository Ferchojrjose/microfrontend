export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    navbar: "navbar@http://localhost:3001/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
