function addMobiNav(setting) {

    let {parent, cloneElem, mobiWrapClass} = setting;

    const parentElem = _$(parent);

    if (!parentElem) return;


    let clonic = elemClone (cloneElem, mobiWrapClass);

    parentElem.appendChild(clonic);

}

function elemClone(arr, cl = 'wrap') {

    let workingArray = [],
        newElem = document.createElement('div');

    newElem.setAttribute('class', cl);
    for (var i = 0;i < arr.length; i++) {
        let int = _$(arr[i]);
        if (int) {
            workingArray.push(arr[i])
        } else {
            workingArray.push('null')
        }
    }
    for (var r = 0;r < workingArray.length; r++) {
        if (workingArray[r] == 'null') continue;
        let elem =_$(workingArray[r]);
        newElem.appendChild(elem.cloneNode(true))
    }

    return newElem;
}
