const scrollTo = (goTo, offset = 0, goToNumber = 0, time = 600) => {
  var target = document.querySelectorAll(goTo)[goToNumber];
  var targetPosition = target.offsetTop - offset;
  var startPosition = window.scrollY;
  var distance = targetPosition - startPosition;
  var duration = time;
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;

    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
};

export default scrollTo;
