// tailwind.config.js
module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    theme: {
      colors: {
        'black': '000000'
      }
    }
    // ...
  }