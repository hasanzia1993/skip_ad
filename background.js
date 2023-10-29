// Listen for browser events, e.g., when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed!");
});

// You can add other event listeners or functions as needed
