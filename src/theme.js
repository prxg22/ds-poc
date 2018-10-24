import tokens from './assets/tokens';

export default {
  "colors": {
    "black": "#000e1a",
    "white": "#fff",
    "blue": "blue",
    "navy": "#004175",
    "blue_sky": `#${tokens.brand01}`,
  },
  "space": [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  "buttons": {
    "primary": {
      "color": "white",
      "backgroundColor": `#${tokens.brand01}`,
      "&:hover": {
        "backgroundColor": "black"
      }
    },
    "secondary": {
      "color": "black",
      "backgroundColor": "red",
      "&:hover": {
        "backgroundColor": "#ccc"
      }
    },
    "tertiary": {
      "color": "black",
      "backgroundColor": "transparent",
    }
  }
};
