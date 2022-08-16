// Hightlighted text.
let selectedText;
// Main window
let mainWindow;
// URL Main windows
let URL = chrome.runtime.getURL("popup.html");
// Word input
let word;
let wordInput;

function message() {
  alert("yea");
  word = window.getSelection().toString();
  console.log(`The word is ${word}`);
}
chrome.action.onClicked.addListener((tab) => {
  console.log("test");
  // Opens a new tab.
  //   let newURL = "http://stackoverflow.com/";
  //   chrome.tabs.create({
  //     url: newURL,
  //     active: true,
  //     selected: true,
  //   });

  //Working on click
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["contentScript.js"],
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: message,
    });
  }
});

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "onboarding.html",
    });
  }
});
