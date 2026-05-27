/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/how', destination: '/#see-how-it-works', permanent: true },
      { source: '/pricing', destination: '/#check-fit', permanent: true },
      { source: '/demo', destination: '/#book-demo', permanent: true },
      { source: '/home-services', destination: '/industries/home-services', permanent: true },
      { source: '/legal', destination: '/industries/legal-intake', permanent: true },
      { source: '/legal-intake', destination: '/industries/legal-intake', permanent: true },
      { source: '/dental', destination: '/industries/dental', permanent: true },
      { source: '/senior', destination: '/industries/senior-living', permanent: true },
      { source: '/senior-living', destination: '/industries/senior-living', permanent: true },
    ];
  },
};

export default nextConfig;
