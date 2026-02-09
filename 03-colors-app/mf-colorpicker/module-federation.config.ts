export const mfConfig = {
  name: "mf_colorpicker",
  filename: "remoteEntry.js",
  exposes: {
    "./ColorPicker": "./src/components/ColorPicker.tsx",
  },
  shared: ["react", "react-dom"],
};
