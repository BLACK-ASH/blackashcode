/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '', // No specific port needed
            pathname: '/**', // This will allow all paths under the domain
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '', // No specific port needed
            pathname: '/**', // This will allow all paths under the domain
          },
          {
            protocol: 'https',
            hostname: 'platform-lookaside.fbsbx.com',
            port: '', // No specific port needed
            pathname: '/**', // This will allow all paths under the domain
          },
        ],
      },
  }; 

export default nextConfig;
