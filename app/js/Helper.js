(function (window) {
    if (window.Package) {
        Materialize = {};
    } else {
        window.Materialize = {};
    }
})(window);

function _$ (str) {
    let elem = document.querySelectorAll(str);
    return elem.length === 0 ? undefined: elem.length === 1 ? elem[0]: elem;
}