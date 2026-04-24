import React from 'react';

class Error extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    // Método estático que se ejecuta cuando ocurre un error en el componente hijo
    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
    }

    // Método que se ejecuta cuando ocurre un error en el componente hijo
    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
    }

    // Método que se ejecuta cuando se recarga la página
    handleReload = () => {
        window.location.reload();
    };

    // Método que se ejecuta cuando se renderiza el componente
    render() {
        if ((this.state as any).hasError as boolean) { // Si ocurre un error, se muestra un mensaje de error
            
            const message = ((this.state as any).error as any)?.message ?? 'Error desconocido';

            return (
                <div className="flex items-center justify-center min-h-[200px] p-6">
                    <div className="w-full max-w-md bg-red-50 border border-red-200 rounded-2xl shadow-md p-6">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold">
                                !
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-red-800">
                                    No se pudo cargar el microfrontend
                                </h2>
                                <p className="mt-1 text-sm text-red-700 wrap-break-word">
                                    {message}
                                </p>
                                <button
                                    onClick={this.handleReload}
                                    className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 active:scale-95 transition cursor-pointer"
                                >
                                    Reintentar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return ((this.props as any).children as React.ReactNode); // Si no ocurre un error, se renderiza el componente hijo
    }
}

export default Error;
