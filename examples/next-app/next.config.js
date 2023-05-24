/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
          use: {
      loader: 'babel-loader',
          options: {
        presets: ['@babel/preset-react'],
      },
    },
    })

    return config;
  },
  experimental: {
    appDir: true,
  }, 
  images: {
    domains: ['juicebox.money','jbx.mypinata.cloud'],
  },
};

module.exports = nextConfig;
