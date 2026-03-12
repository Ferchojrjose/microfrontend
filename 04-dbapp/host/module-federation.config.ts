export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    mf_navbar: "mf_navbar@http://localhost:8081/remoteEntry.js", // Nombre del remote y la URL de la aplicación remota
  },
  exposes: {},
  shared: ["react", "react-dom", "react-router-dom"],
};
