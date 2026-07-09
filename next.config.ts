import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  turbopack: {
    root: process.cwd(),
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
