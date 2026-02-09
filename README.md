📦 Microfrontends con React 19 + Module Federation + Rspack

Este proyecto implementa una arquitectura basada en Microfrontends utilizando Module Federation, React 19, Rspack y Tailwind CSS.
El objetivo es construir aplicaciones frontend escalables, desacopladas y mantenibles mediante la separación en múltiples módulos independientes que pueden desarrollarse y desplegarse de forma autónoma.

🚀 Tecnologías utilizadas

⚛️ React 19

⚡ Rspack

🧩 Module Federation

🎨 Tailwind CSS

📦 JavaScript / TypeScript

🌐 Microfrontend Architecture

🧠 Conceptos principales
🔹 Microfrontends

Los Microfrontends son una arquitectura que divide una aplicación frontend en múltiples aplicaciones más pequeñas e independientes.
Cada microfrontend puede:

Tener su propio ciclo de desarrollo

Ser desplegado de forma independiente

Usar su propio dominio funcional

Integrarse dinámicamente dentro de una aplicación host

Esto permite equipos más autónomos, escalabilidad y menor acoplamiento entre módulos.

🔹 Module Federation

Module Federation es una característica que permite compartir módulos entre aplicaciones en tiempo de ejecución.

Permite:

Cargar componentes remotos dinámicamente

Compartir dependencias entre aplicaciones

Reducir duplicación de librerías

Integrar múltiples builds en una sola aplicación

En este proyecto existen dos conceptos principales:

Host → Aplicación principal que consume microfrontends

Remotes → Aplicaciones independientes que exponen módulos

🔹 Rspack

Rspack es un bundler moderno compatible con el ecosistema de Webpack pero escrito en Rust, enfocado en rendimiento extremo.

Beneficios principales:

Compilaciones mucho más rápidas

Compatibilidad con Module Federation

Integración directa con React

Hot reload eficiente

Configuración similar a Webpack

Rspack permite acelerar el desarrollo de microfrontends sin sacrificar compatibilidad.

🔹 Tailwind CSS

Tailwind CSS es un framework utility-first para estilos rápidos y consistentes.

Ventajas:

Desarrollo rápido de interfaces

Clases reutilizables

Diseño responsivo simplificado

Menor necesidad de CSS personalizado

Excelente integración con React

🏗️ Arquitectura del proyecto

Flujo general

El Host arranca la aplicación principal

Los Remotes exponen módulos mediante Module Federation

El Host consume los módulos dinámicamente

React Lazy y Suspense permiten carga bajo demanda