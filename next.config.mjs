/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true
  // images: {
  //   loader: 'custom',
  //   imageSizes: [257, 287, 375, 514, 579, 771, 861, 1125,1166,2332, 3498],
  //   deviceSizes: [800, 1280, 1920, 2560, 2880],
  // },
  // transpilePackages: ["next-image-export-optimizer"],
  // env: {
  //   nextImageExportOptimizer_imageFolderPath: 'public/images',
  //   nextImageExportOptimizer_exportFolderPath: "out",
  //   nextImageExportOptimizer_quality: "75",
  //   nextImageExportOptimizer_storePicturesInWEBP: "true",
  //   nextImageExportOptimizer_blurSize: "10",
  //   nextImageExportOptimizer_exportFolderName: "optimizedImages",
  //   nextImageExportOptimizer_generateAndUseBlurImages: "true",
  // }
};

export default nextConfig;
