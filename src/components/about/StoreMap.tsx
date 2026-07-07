interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

const stores: Store[] = [
  {
    name: "RITZ Itumbiara",
    address: "Centro, Itumbiara — GO",
    phone: "(64) 99233-2760",
    hours: "Seg-Sex: 9h-18h · Sáb: 9h-13h"
  }
];

const StoreMap = () => {
  return (
    <div className="w-full h-96 overflow-hidden border border-border bg-surface relative">
      {/* Mapa estático de Itumbiara-GO */}
      <iframe
        title="Mapa RITZ Itumbiara"
        src="https://www.google.com/maps?q=Itumbiara,GO,Brasil&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />

      {/* Sobreposição com as lojas */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-4 max-w-xs border border-border">
        <h4 className="text-xs tracking-editorial text-foreground mb-3">Onde estamos</h4>
        <div className="space-y-2">
          {stores.map((store, index) => (
            <div key={index} className="text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="font-normal text-foreground">{store.name}</span>
              </div>
              <p className="text-muted-foreground ml-4">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
