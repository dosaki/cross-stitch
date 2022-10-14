const container = document.getElementById("popup-content");

const getCurrentTab = async () => {
    let queryOptions = {active: true, lastFocusedWindow: true};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

const checkCrossStitchStatus = async () => {
    try {
        return browser.tabs.executeScript({code: "window.__crossStitcher.isOn"});
    } catch (ignored) {
        const tab = await getCurrentTab();
        return chrome.scripting.executeScript({
            target:{tabId: tab.id},
            func: () => {
                return window.__crossStitcher.isOn;
            },
            args: []
        });
    }
};

const turnOn = async () => {
    try {
        return browser.tabs.executeScript({code: "window.turnOn()"});
    } catch (ignored) {
        const tab = await getCurrentTab();
        return chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                return window.turnOn();
            },
            args: []
        });
    }
};
const turnOff = async () => {
    try {
        return browser.tabs.executeScript({code: "window.turnOff()"});
    } catch (ignored) {
        const tab = await getCurrentTab();
        return chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                return window.turnOff();
            },
            args: []
        });
    }
};

const toggle = (e, force) => {
    const isOn = force !== undefined ? !force : container.className.includes("is-on")
    const functionToRun = isOn ? turnOff : turnOn;
    container.className = container.className.replaceAll(isOn ? "is-on" : "is-off", isOn ? "is-off" : "is-on");
    functionToRun();
    e && e.preventDefault();
}

document.getElementById("status-button").addEventListener("click", toggle);
document.getElementById("status-button-ball").addEventListener("click", toggle);

checkCrossStitchStatus()
    .then((result) => {
        toggle(null, result[0]);
    });

