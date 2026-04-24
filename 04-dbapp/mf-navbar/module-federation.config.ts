export const mfConfig = {
  name: "mf_navbar",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
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
