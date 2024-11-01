/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.bibiled.com', 'www.ddw.net', 'www.billups.com', 'readymadeui.com', 'images.ctfassets.net', 'encrypted-tbn0.gstatic.com', 'example.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
