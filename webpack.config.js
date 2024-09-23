const path=require('path');
console.log(__dirname) 
module.exports ={
    mode:'development',
    entry:'./dist/src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'dist/src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
        
      },
}