export const mfConfig = {
  name: "mf_colorlist",
  filename: "remoteEntry.js",
  exposes: {
    "./ColorList": "./src/components/ColorList.tsx",
  },
  shared: ["react", "react-dom"],
};
