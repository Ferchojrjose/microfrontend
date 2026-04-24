export const mfConfig = {
  name: "mf_charaterDetail",
  filename: "remoteEntry.js",
  exposes: {
    "./CharacterDetail": "./src/components/CharacterDetail.tsx",
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
