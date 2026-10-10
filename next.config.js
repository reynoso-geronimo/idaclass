/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next.js 15+: `experimental.serverComponentsExternalPackages` pasó a ser `serverExternalPackages`.
    serverExternalPackages: ['sequelize'],
    images: {
        // Next.js 16 solo permite quality 75 por defecto; el sitio usa quality={100} en varias imágenes.
        qualities: [75, 100],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'flagcdn.com',
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
          },
        ],
      },

}

module.exports = nextConfig
