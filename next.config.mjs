/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
      basePath: "/rayca_precision_application",    
      output: "export",  // <=== enables static exports
      reactStrictMode: true,
};
export default nextConfig;
