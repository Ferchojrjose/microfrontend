export const mfConfig = {
  name: "mf_counter",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
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
