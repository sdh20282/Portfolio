/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  compiler: {
    // reactStrictMode: true,
    styledComponents: true,
  },
  // compiler: {
  //   styledComponents: {
  //     // Enable display of the component name along with the generated className (needed for debugging).
  //     displayName: true,
  //     // Enable SSR support
  //     ssr: true,
  //     // Optional
  //     fileName: false,
  //   },
  // },
};

module.exports = nextConfig;