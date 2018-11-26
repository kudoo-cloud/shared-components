global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

window.google = {
  maps: {
    Map: class {},
  },
};

global.Image = global.window.Image;

global.Range = function Range() {};

const createContextualFragment = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0]; // so hokey it's not even funny
};

Range.prototype.createContextualFragment = html =>
  createContextualFragment(html);

global.document = typeof document === 'undefined' ? {} : document;
global.window = typeof window === 'undefined' ? {} : window;
global.window.document = typeof document === 'undefined' ? {} : document;

// HACK: Polyfil that allows codemirror to render in a JSDOM env.
global.window.document.createRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => [],
    createContextualFragment,
  };
};

let localStorageMock = (function() {
  let store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
