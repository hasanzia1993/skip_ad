function clickSkipAdButton() {
  const skipButton = document.querySelector("button.ytp-ad-skip-button");

  if (skipButton) {
    skipButton.click();
    console.log("Ad skipped!");
  }
}

// Start trying to click the skip button every second
setInterval(clickSkipAdButton, 1000);
