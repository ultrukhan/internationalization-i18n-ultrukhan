import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Already configured for next-intl v3. Do not add next.config.mjs.

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
