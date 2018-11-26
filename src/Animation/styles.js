export default {
  '@keyframes contentAnimation': {
    '0%': { transform: 'translateX(-150px)' },
    '100%': { transform: 'translateX(2000px)' },
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1))',
    animation: 'contentAnimation 4s infinite',
  },
};
