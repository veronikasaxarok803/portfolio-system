import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Storybook лежить у public/storybook і відкривається за адресою /storybook/.
  // Без завершального слеша його ресурси (./sb-common-assets…) шукаються не там і сторінка порожня.
  trailingSlash: true,
};

export default nextConfig;
