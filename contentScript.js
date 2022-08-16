//  Selection highlighted text
selectedText = window.getSelection().toString();
URL = chrome.runtime.getURL("popup.html");

popupCenter({
  url: "chrome-extension://cegafeopbobaoagdnbdncfbndkfaflig/popup.html",
  title: "dic",
  w: 900,
  h: 500,
});

// Credits https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen

function popupCenter({ url, title, w, h }) {
  // Fixes dual-screen position  Most browsers Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;

  const newWindow = window.open(
    url,
    title,
    `
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left},
          location=0,
          menubar=0,
          status=0
          `
  );

  if (window.focus) newWindow.focus();
}
