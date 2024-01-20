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
        ],
      },

}

module.exports = nextConfig
