function supportsTouchEvents() {
  return ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch);
}

export default supportsTouchEvents;
