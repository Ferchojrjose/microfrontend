
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-white/10">404</h1>
        <p className="-mt-16 text-2xl font-semibold text-white sm:text-3xl">
          Página no encontrada
        </p>
        <p className="mt-4 max-w-md text-gray-400">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
