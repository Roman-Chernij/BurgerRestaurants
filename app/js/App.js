
window.addEventListener( "DOMContentLoaded", function() {

    tabs ({
		section: '.banner',
		tabsNav: '.banner-toolbar-list',
		targetParent: '.banner-toolbar-list-inner',
		parentAttr: 'data-parent',
		slider: 'data-slider',
		defaultActive: 1
	});

    addMobiNav({
		parent: '.header-inner',
		cloneElem: ['.nav-list', '.btn-row'],
		mobiWrapClass: 'mobi-nav'
	});
});

window.addEventListener('load', loadPage);


