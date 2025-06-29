export default {
  input: 'public/arena-sdk/index.js',
  output: {
    file: 'public/arena-sdk/arena-umd.js',
    format: 'umd',
    name: 'ArenaAppStoreSdk',
    exports: 'named',
    globals: {},
    inlineDynamicImports: true, // Force single bundle for UMD
  },
};
