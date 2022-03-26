/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  compiler:{
    styledComponents:true
  }, 
  nextConfig,
  images:{
    domains:["images.pexels.com"]
  }
}
