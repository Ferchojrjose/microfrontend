export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    mf_nav: "mf_nav@http://localhost:8081/remoteEntry.js",
    mf_counter: "mf_counter@http://localhost:8082/remoteEntry.js",
    mf_store: "mf_store@http://localhost:5050/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
