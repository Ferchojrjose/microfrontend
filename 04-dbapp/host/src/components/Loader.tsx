
const BARS = Array.from({ length: 12 });

export const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[200px]">
            <div className="relative inline-block h-20 w-20 text-slate-500">
                {BARS.map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-[3.2px] left-[36.8px] h-[17.6px] w-[6.4px] rounded-[20%] bg-current origin-[3.2px_36.8px] animate-[lds-spinner_1.2s_linear_infinite]"
                        style={{
                            transform: `rotate(${i * 30}deg)`,
                            animationDelay: `${-1.1 + i * 0.1}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loader;
