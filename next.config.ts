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
