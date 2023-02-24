typescript: {
    enableTypeChecking: true 
  }, 
  webpack: {
    configure: {
      target: "web",
    },
    plugins: {
      add: [
        new NodePolyfillPlugin({
          excludeAliases: ["console"],
        }),
        new webpack.ProvidePlugin({
          WaveSurfer: "wavesurfer.js"
        }),
        new webpack.DefinePlugin({
          'process.env.FLUENTFFMPEG_COV': false
      })  
      ],
      
    },
  },


  npm install @mui/core --legacy-peer-deps 
  yarn add @mui/core --strict-peer-dependencies 