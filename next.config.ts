import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // El optimizador cachea por URL, no por contenido: si reemplazas una
    // captura sin renombrarla, en dev seguirías viendo la vieja durante las
    // 4 h del TTL por defecto. En producción sí queremos ese TTL.
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 14400,
  },
  // Migración a propus.es: el dominio antiguo y el www redirigen (308) al
  // canónico conservando ruta y query string. /api queda fuera para que un
  // webhook o cualquier endpoint no reciba nunca un 3xx. No se filtra por
  // propus.es ni por el dominio interno de EasyPanel: ahí no hay redirección.
  // El destino va fijo y no sale de NEXT_PUBLIC_SITE_URL: si esa variable
  // apuntase a un host redirigido, se crearía un bucle.
  async redirects() {
    const sinApi = "/:path((?!api(?:/|$)).*)";
    return [
      {
        source: sinApi,
        has: [{ type: "host" as const, value: "(www\\.)?propus\\.ink" }],
        destination: "https://propus.es/:path",
        permanent: true,
      },
      {
        source: sinApi,
        has: [{ type: "host" as const, value: "www\\.propus\\.es" }],
        destination: "https://propus.es/:path",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Escena 3D auto-hospedada: contenido inmutable (si cambia, se renombra)
        source: "/spline/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
