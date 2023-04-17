/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['uhdtv.io', "localhost", "mango.blender.org", "download.blender.org", "upload.wikimedia.org", "st.kp.yandex.net", "avatars.mds.yandex.net"]
  },
}

module.exports = nextConfig
