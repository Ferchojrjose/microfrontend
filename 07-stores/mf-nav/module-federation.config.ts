export const mfConfig = {
  name: "mf_nav",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  remotes: {
    mf_store: "mf_store@http://localhost:5050/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
