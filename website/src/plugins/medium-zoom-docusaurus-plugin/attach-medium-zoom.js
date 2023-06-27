import mediumZoom from 'medium-zoom';

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  let zoomObject;
  const selector = '.markdown img';

  return {
    onRouteUpdate() {
      setTimeout(() => {
        if (zoomObject) {
          zoomObject.detach();
        }
        zoomObject = mediumZoom(selector);
      }, 100);
    },
  };
})();
