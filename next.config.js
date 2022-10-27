module.exports = {
  env: {
    'API_URL': 'http://localhost:8080/v1',
  },
  images: {
    domains: ['api.honf.ru'],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 1000,
};
