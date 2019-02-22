module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            '>0.25%',
            'not op_mini all'
          ]
        },
        modules: false
      } 
    ],
    'linaria/babel'
  ],
  env: {
    test: {
      presets: [
        '@babel/react',
        ['@babel/env', { modules: 'commonjs' }],
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ],
    }
  }
}