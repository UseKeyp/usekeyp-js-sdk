/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

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
