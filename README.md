# chrome-extension-pause-page

[View in Chrome Web Store](https://chrome.google.com/webstore/detail/aephmjhanjgbapahgbbkfhpianhbmeed).

Instantly pause the page when DevTools is open using a keyboard shortcut.

The default shortcut is <kbd>Ctrl + Shift + U</kbd> or <kbd>Command + Shift + U</kbd>. This can be re-assigned in extension settings.

## Demo

https://user-images.githubusercontent.com/921609/142755771-db7d2357-6e83-40c9-ae24-cd321a12d20d.mov

## Why is it this useful?

Sometimes we need to inspect an element at a specific point in time.

For example, for elements like popovers or dropdowns, visibility is often controlled using JavaScript events like `mousemove`/`mouseleave`, so when we try to inspect these elements, they disappear from the page because the cursor moved or keyboard focus changed.

If we pause the page once the element is visible then it won't disappear when we move the cursor or change keyboard focus, thereby allowing us to inspect the element and its styles.

This can be achieved by running `debugger`. This extension simply provides a keyboard shortcut for doing so, so that we can instantly pause a page as soon as we're in the desired state.

Chrome DevTools already provides an <kbd>F8</kbd> shortcut to pause script execution, however this doesn't quite achieve the same effect because it will only pause the page when some JavaScript starts to run, and this might not happen for a long time.

Chrome DevTools also lets you force the CSS hover state, however this doesn't help if the element's visibility is controlled using JavaScript event listeners like `mousemove`/`mouseleave`.

## Resuming the page

To resume the page, you can either:

-   close DevTools
-   in DevTools, navigate to the sources panel and click "resume script execution" (or use the <kbd>F8</kbd> shortcut)

Ideally we could resume the page using the same shortcut that we used to pause the page, however I don't think there is any way to run the "resume script execution" command from an extension.

## Similar extensions

These extensions provide the similar behaviour but they have larger surface areas (e.g. they require popups or timeouts).

-   [Pause Debugger](https://chrome.google.com/webstore/detail/pause-debugger/bepojlpejmdpcifcmekjapkaapenpncf) ([code](https://github.com/turigeza/freezepage-chrome))
-   [Javascript Pause Keyboard Shortcut](https://chrome.google.com/webstore/detail/javascript-pause-keyboard/djloabcambmaldcfnacbemhefnbfafom) ([code](https://github.com/first1apps/chrome-extensions))
-   [break🔴](https://chrome.google.com/webstore/detail/break%F0%9F%94%B4/ohklhfdebnbjnjkdglfcpohondekiooe) ([code](https://github.com/anmolshres/break))
