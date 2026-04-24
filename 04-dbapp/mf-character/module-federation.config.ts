export const mfConfig = {
  name: "mf_character",
  filename: "remoteEntry.js",
  exposes: {
    "./LayoutCard": "./src/components/LayoutCard.tsx",
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
