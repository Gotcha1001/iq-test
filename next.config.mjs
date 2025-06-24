// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Add this to force dynamic rendering for specific routes
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
