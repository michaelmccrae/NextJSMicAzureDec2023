/** @type {import('next').NextConfig} */

// https://vercel.com/guides/fix-shared-array-buffer-not-defined-nextjs-react isolation docs


const nextConfig = {
    experimental: {
      appDir: true,
    },
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp',
            },
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
          ],
        },
      ];
    },
  }
   
  module.exports = nextConfig