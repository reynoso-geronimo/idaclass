/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize'],
    },
    images: {
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
