import {crossStitchElement} from './patterns/patterns.js';

const observeDOM = (function () {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            // define a new observer
            var mutationObserver = new MutationObserver(callback)

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

observeDOM(document.body, () => {
    document.querySelectorAll(".status-cell-component.status-print-color").forEach(el => crossStitchElement(el));
    document.querySelectorAll(".single-log-value.color").forEach(el => crossStitchElement(el));
    document.querySelectorAll(".status-color-background").forEach(el => crossStitchElement(el));
    document.querySelectorAll(".color-option-box").forEach(el => crossStitchElement(el));
})
