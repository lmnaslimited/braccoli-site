import path from 'path';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"], // Specify packages to transpile
  output: "standalone", // Use standalone output for deployment
  experimental: {
    outputFileTracingRoot: path.join(process.cwd(), "../../"), // Adjust as necessary for your monorepo structure
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'website', // Name of the website app
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          // Load the blog app running on localhost:3001 as a remote module
          blog: isServer
            ? 'blog@http://localhost:3001/_next/static/chunks/remoteEntry.js'
            : 'blog@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

export default nextConfig; // Use 'export default' for ES modules
