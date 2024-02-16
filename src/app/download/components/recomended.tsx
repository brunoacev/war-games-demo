export const Recomended = () => {
  return (
    <section className="flex flex-col  uppercase w-full">
      <div>
        <h3 className="p-4 w-full bg-zinc-50 dark:bg-zinc-600 font-semibold tracking-wider">
          Mínimo
        </h3>
        <div className="flex flex-col px-2">
          <div className="grid grid-cols-2 w-full h-full py-3">
            <span className="font-semibold">GPU</span>
            <span className="font-light">PENTIUM 4 2.0 GHZ+</span>
          </div>
          <div className="grid grid-cols-2 w-full h-full py-3">
            <span className="font-semibold">RAM</span>
            <span className="font-light">1GB+</span>
          </div>
          <div className="grid grid-cols-2 w-full h-full py-3">
            <span className="font-semibold">Placa de Gráfico</span>
            <span className="font-light">
              ATI RADEON 9800PRO OU SUPERIOR / GEFORCE 6 SERIES OU SUPERIOR
            </span>
          </div>
          <div className="grid grid-cols-2 w-full h-full py-3">
            <span className="font-semibold">Placa de Som</span>
            <span className="font-light">
              QUALQUER PLACA DE COM COMPATIVEL COM DIRECT X 9.0C
            </span>
          </div>
          <div className="grid grid-cols-2 w-full h-full py-3">
            <span className="font-semibold">Espaço de Hard Disc</span>
            <span className="font-light">3.5GB+</span>
          </div>
        </div>
      </div>

      <h3 className="p-4 w-full bg-zinc-50 dark:bg-zinc-600 font-semibold tracking-wider">
        Recomendado
      </h3>
      <div className="flex flex-col px-2">
        <div className="grid grid-cols-2 w-full h-full py-3">
          <span className="font-semibold">GPU</span>
          <span className="font-light">PENTIUM 4 3.0 GHZ+</span>
        </div>
        <div className="grid grid-cols-2 w-full h-full py-3">
          <span className="font-semibold">RAM</span>
          <span className="font-light">2GB+</span>
        </div>
        <div className="grid grid-cols-2 w-full h-full py-3">
          <span className="font-semibold">Placa de Gráfico</span>
          <span className="font-light">
            ATI RADEON HD OU SUPERIOR / GEFORCE 7 SERIES OU SUPERIOR
          </span>
        </div>
        <div className="grid grid-cols-2 w-full h-full py-3">
          <span className="font-semibold">Placa de Som</span>
          <span className="font-light">
            QUALQUER PLACA DE COM COMPATIVEL COM DIRECT X 9.0C
          </span>
        </div>
        <div className="grid grid-cols-2 w-full h-full py-3">
          <span className="font-semibold">Espaço de Hard Disc</span>
          <span className="font-light">3.5GB+</span>
        </div>
      </div>
    </section>
  );
};
