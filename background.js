chrome.commands.onCommand.addListener((command) => {
    if (command === "pause") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const firstTab = tabs[0];
            if (firstTab !== undefined && firstTab.id !== undefined) {
                chrome.tabs.executeScript(firstTab.id, {
                    code: "debugger;",
                });
            }
        });
    }
});
