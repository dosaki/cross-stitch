const container = document.getElementById("popup-content");

const getBrowser = () => {
    try {
        return browser;
    } catch (ignored) {
        return chrome;
    }
};

const browser = getBrowser();

const toggle = (e, force) => {
    const isOn = force !== undefined ? !force : container.className.includes("is-on")
    const code = isOn ? "window.turnOff()" : "window.turnOn()";
    container.className = container.className.replaceAll(isOn ? "is-on" : "is-off", isOn ? "is-off" : "is-on");
    browser.tabs.executeScript({code});
    e && e.preventDefault();
}

document.getElementById("status-button").addEventListener("click", toggle);
document.getElementById("status-button-ball").addEventListener("click", toggle);

browser.tabs
    .executeScript({code: "window.__crossStitcher.isOn"})
    .then((result) => {
        toggle(null, result[0]);
    });

