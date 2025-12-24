export const mfConfig = {
  name: "navbar",
  filename: "remoteEntry.js",
  exposes: {
    './Navbar': './src/components/Navbar.tsx',
  },
  shared: ["react", "react-dom"],
};
