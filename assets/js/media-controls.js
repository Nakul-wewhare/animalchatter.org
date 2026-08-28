(() => {
  const video = document.querySelector("#hero-acoustic-video");
  const button = document.querySelector("[data-hero-video-toggle]");

  if (!video || !button) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let userPaused = false;

  const showPausedState = () => {
    button.textContent = "Play animation";
    button.setAttribute("aria-pressed", "true");
  };

  const showPlayingState = () => {
    button.textContent = "Pause animation";
    button.setAttribute("aria-pressed", "false");
  };

  const pauseVideo = () => {
    video.pause();
    showPausedState();
  };

  const playVideo = async () => {
    try {
      await video.play();
      showPlayingState();
    } catch {
      showPausedState();
    }
  };

  button.hidden = false;

  if (reducedMotion.matches) {
    pauseVideo();
  } else {
    playVideo();
  }

  button.addEventListener("click", () => {
    if (video.paused) {
      userPaused = false;
      playVideo();
    } else {
      userPaused = true;
      pauseVideo();
    }
  });

  const handleMotionPreference = (event) => {
    if (event.matches) {
      pauseVideo();
    } else if (!userPaused && document.visibilityState === "visible") {
      playVideo();
    }
  };

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", handleMotionPreference);
  } else {
    reducedMotion.addListener(handleMotionPreference);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      video.pause();
    } else if (!reducedMotion.matches && !userPaused) {
      playVideo();
    }
  });
})();
