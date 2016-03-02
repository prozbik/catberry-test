'use strict';

module.exports = Navigation;

var MENU = [
  {
    link: '/home',
    name: 'home'
  },
  {
    link: '/portfolio',
    name: 'portfolio'
  }
];
/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of the "navigation" component.
 * @constructor
 */
function Navigation() {

}

/**
 * Gets data context for template engine.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Data context
 * for template engine.
 */
Navigation.prototype.render = function () {
  return this.$context.getStoreData().
    then(function(data) {
      data.menu = MENU;
      return data;
    });
};

/**
 * Returns event binding settings for the component.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Binding settings.
 */
Navigation.prototype.bind = function () {

};

/**
 * Does cleaning for everything that have NOT been set by .bind() method.
 * This method is optional.
 * @returns {Promise|undefined} Promise or nothing.
 */
Navigation.prototype.unbind = function () {

};
