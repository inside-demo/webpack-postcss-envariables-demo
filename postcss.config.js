module.exports = ({options: {env}}) => {
  return {
    plugins: {
      'postcss-envariables': {
        env: {
          contextPath: env === 'development' ? 'dev' : ''
        }
      },
      'postcss-css-variables': {}
    }
  }
};