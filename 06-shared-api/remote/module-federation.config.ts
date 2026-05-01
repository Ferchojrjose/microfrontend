export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header.tsx",
  },
  shared: { // dependecias compartidas
    react: { // react es una dependencia compartida
      singleton: true,
      requiredVersion: "19.0.0",
    },
    "react-dom": { // react-dom es una dependencia compartida
      singleton: true, // singleton: true significa que solo se va a cargar una instancia de react-dom
      requiredVersion: "19.0.0",
    },
    "sweetalert2": { // sweetalert2 es una dependencia compartida
      singleton: true, // singleton: true significa que solo se va a cargar una instancia de sweetalert2
      requiredVersion: "11.26.24",
    },
  },
};
