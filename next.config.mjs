/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/comingsoon',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
