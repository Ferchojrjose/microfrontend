export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {},
  remotes: {
    colorpicker: "mf_colorpicker@http://localhost:3001/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
