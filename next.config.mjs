const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    authInterrupts: true, // Enable the new forbidden() and unauthorized() APIs
  },
};

export default nextConfig;

