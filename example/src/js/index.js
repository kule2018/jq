﻿var $ = require('jq');
require('base');
require('ui');
require('customalert');
require('scroll');

//alert方法
window.alert = function alert(str) {
    $.customalert({
        content: str
    });
};


//面板显示回调函数
$.panelLoaded = function ($this, isInit) {
    var load = loader[$this.attr('id')];
    typeof load === 'function' && load($this, isInit);
};

//面板隐藏回调函数
$.panelUnloaded = function ($this) {
    var unload = unloader[$this.attr('id')];
    typeof unload === 'function' && unload($this);
};


var loader = {
    carousel: require('./page/carousel.js'),
    flip: require('./page/flip.js'),
    picpager: require('./page/picpager.js'),
    scroll: require('./page/scroll.js'),
    scratchcard: require('./page/scratchcard.js'),
    turntable: require('./page/turntable.js'),
    swatchbook: require('./page/swatchbook.js')
};
var unloader = {};
