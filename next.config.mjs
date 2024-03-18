/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    imageSizes: [100, 185, 252, 375, 480, 567, 865, 1250],
    deviceSizes: [600, 767, 1080, 828, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_blurSize: "[10]",
    nextImageExportOptimizer_exportFolderName: "optimizedImages",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  }
};

export default nextConfig;
