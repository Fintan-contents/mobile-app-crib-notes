import mediumZoom from 'medium-zoom';

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  const selector = '.markdown img';

  setTimeout(() => {
    mediumZoom(selector);
  }, 100);

  return {
    onRouteUpdate({location}) {
      if (location && location.hash && location.hash.length) {
        return;
      }

      setTimeout(() => {
        mediumZoom(selector);
      }, 100);
    },
  };
})();
