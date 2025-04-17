chrome.commands.onCommand.addListener((command) => {
  if (command === "pause") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const firstTab = tabs[0];
      if (firstTab !== undefined && firstTab.id !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId: firstTab.id },
          func: () => {
            debugger;
          },
        });
      }
    });
  }
});
