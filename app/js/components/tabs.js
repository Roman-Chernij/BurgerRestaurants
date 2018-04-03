function tabs (settings) {

    if(!document.querySelector(settings.section)) return;

    const {section,
            tabsNav,
            targetParent,
            parentAttr,
            slider,
            defaultActive} = settings,

        parent = document.querySelector(section),
        nav = parent.querySelector(tabsNav),
        elem = parent.querySelectorAll(targetParent);

    addActive (defaultActive);
    nav.addEventListener('click', tabsEvent);

    function tabsEvent (e) {
        let target =  e && e.target || e.srcElement,
            targetParent = target.parentElement;

        if(targetParent.getAttribute(parentAttr) !== 'true' && targetParent.tagName !== 'DIV') return;

        addActive ();

        let ActiveSlider = document.querySelector(targetParent.getAttribute(slider));

        if(ActiveSlider) ActiveSlider.classList.add('active');

        targetParent.classList.add('active');

    }

    function addActive (numb) {

        for(let i = 0; i < elem.length; i++) {
            let classElem = elem[i].classList.contains('active');
            if(classElem) {
                elem[i].classList.remove('active');
                let activeSlider = document.querySelector(elem[i].getAttribute(slider));

                if(activeSlider) activeSlider.classList.remove('active');
            }
        }

        if(!isNaN(numb)) {
            let activeSlider = document.querySelector(elem[numb].getAttribute(slider));

            if(activeSlider) activeSlider.classList.add('active');

            elem[numb].classList.add('active')

        }
    }
}
