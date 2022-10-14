import {crossStitchElement, unCrossStitchElement} from './patterns/patterns.js';

window.__crossStitcher = {
    isOn: true
}

const observeDOM = (function () {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            // define a new observer
            const mutationObserver = new MutationObserver(callback)

            // have the observer observe foo for changes in children
            mutationObserver.observe(obj, {childList: true, subtree: true})
            return mutationObserver
        }

        // browser support fallback
        else if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false)
        }
    }
})();

const doCrossStitchMethod = (method) => {
    document.querySelectorAll(".status-cell-component.status-print-color").forEach(el => method(el));
    document.querySelectorAll(".single-log-value.color").forEach(el => method(el));
    document.querySelectorAll(".status-color-background").forEach(el => method(el));
    document.querySelectorAll(".color-option-box").forEach(el => method(el));
}

window.turnOff = () => {
    window.__crossStitcher.isOn = false;
    doCrossStitchMethod(unCrossStitchElement);
}

window.turnOn = () => {
    window.__crossStitcher.isOn = true;
    doCrossStitchMethod(crossStitchElement);
}

observeDOM(document.body, () => {
    if (window.__crossStitcher.isOn) {
        doCrossStitchMethod(crossStitchElement);
    }
});
