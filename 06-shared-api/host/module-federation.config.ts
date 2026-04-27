export const mfConfig = {
  name: "host",
  exposes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: "19.0.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "19.0.0",
    },
  },
};
