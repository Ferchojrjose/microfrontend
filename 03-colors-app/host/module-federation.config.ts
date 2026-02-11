export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  exposes: {},
  remotes: {
    colorpicker: "mf_colorpicker@http://localhost:3001/remoteEntry.js",
    colorlist: "mf_colorlist@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
