export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    mf_navbar: "mf_navbar@http://localhost:8081/remoteEntry.js",    // Nombre del remote y la URL de la aplicación remota
    mf_counter: "mf_counter@http://localhost:8082/remoteEntry.js",  // Nombre del remote y la URL de la aplicación remota
    mf_character: "mf_character@http://localhost:8083/remoteEntry.js",  // Nombre del remote y la URL de la aplicación remota
    mf_charaterDetail: "mf_charaterDetail@http://localhost:8084/remoteEntry.js",  // Nombre del remote y la URL de la aplicación remota
  },
  exposes: {
  },
  shared: {
    "react": {
      singleton: true,
      requiredVersion: "19.2.4",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "19.2.4",
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: "7.13.1",
    },
  },
};
