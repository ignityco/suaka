/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/comingsoon',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
