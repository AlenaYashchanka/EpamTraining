var Renderer =  function () {
};

Renderer.prototype.create = function (settings) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(this._createOneElement(settings));
    return fragment;
};

Renderer.prototype.render = function (elemChild, elemParent) { 
    return document.querySelector(elemParent).appendChild(elemChild);
};
    
Renderer.prototype._createOneElement = function (settings) {
    var el = document.createElement(settings.tag);
    this._addClasses(el, settings.classes);
    if (settings.textContent) {
        el.textContent = settings.textContent;
    };   

    if (settings.childrens) {
        for (var elem = 0; elem < settings.childrens.length; elem++) {
            el.appendChild(this._createOneElement(settings.childrens[elem]));
        };
    };
    
    return el;
};    
    
Renderer.prototype._addClasses = function (el, classes) {
    if (!Array.isArray(classes)) {
        el.classList.add(classes);
    }
    else {
        for (var i = 0; i < classes.length; i++) {
            el.className += classes[i] + ' ';
        };
    };
};  