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
        ],
      },

}

module.exports = nextConfig
