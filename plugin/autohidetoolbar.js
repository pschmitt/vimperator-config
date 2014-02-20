// Vimperator Plugin: 'autohide-toolbar'
// Last Change: 2011.05.27
// License: MIT
// Maintainer: xialulee <xialulee at gmail dot com>
// Usage: Use :autohidetb will activate this plugin, all toolbars except 
//   tabs will hide until the mouse cursor move over the tabs
//   Use :noautohidetb will deactivate this plugin
//
// For FireFox 4 and Vimperator 3+

var autoHideToolbars = {
  activate : true, // Set to false to disable auto activation

  init : function () {
    document.getElementById('content').addEventListener(
      'mouseover',
      this.contentMouseOver(),
      false	  
    );
    document.getElementById('tabbrowser-tabs').addEventListener(
      'mouseover',
      this.tabsMouseOver(),
      false	  
    );
  },

  tabsMouseOver : function () {
    var myself = this;
    return function () {
      if (myself.activate)
        options['toolbars'] = 'noaddons,nobookmarks,nomenu,navigation,tabs';
    };
  },

  contentMouseOver : function () {
    var myself = this;
    return function () {
      if (myself.activate)
        options['toolbars'] = 'noaddons,nobookmarks,nomenu,nonavigation,tabs';    
    };
  }
};

autoHideToolbars.init();

commands.addUserCommand(['autohidetb'], 'auto hide/show toolbars',
  function (args) {autoHideToolbars.activate = true;}
);

commands.addUserCommand(['noautohidetb'], 'deactivate auto hide',
  function (args) {autoHideToolbars.activate = false;}
);

