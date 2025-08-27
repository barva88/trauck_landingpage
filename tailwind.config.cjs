module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // TRAUCK palette
        bg: '#0D0D0D',
        surface: {
          1: '#1F1F1F',
          2: '#2A2A2A'
        },
        text: '#F5F5F5',
        muted: '#9CA3AF',
        primary: {
          DEFAULT: '#E91E63',
          600: '#D81B60',
          700: '#C2185B'
        },
        secondary: '#00BFFF',
        success: '#10B981',
        warning: '#F59E0B',
        border: '#2A2A2A'
      }
    }
  },
  plugins: []
}
