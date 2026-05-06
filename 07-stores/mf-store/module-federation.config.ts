export const mfConfig = {
  name: "mf_store",
  filename: "remoteEntry.js",
  exposes: {
    "./StoreProvider": "./src/StoreProvider.tsx",
  },
  shared: ["react", "react-dom"],
};
