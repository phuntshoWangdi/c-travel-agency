import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['mdx', 'ts', 'tsx','mds'],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig)
