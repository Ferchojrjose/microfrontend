export const mfConfig = {
  name: "mf_navbar",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
