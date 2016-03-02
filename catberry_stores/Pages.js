'use strict';

module.exports = Pages;


/* PAGES */

var PAGES = require("../config/pages.json");



/*
 * This is a Catberry Store file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#stores
 */

/**
 * Creates new instance of the "Pages" store.
 * @param {UHR} $uhr Universal HTTP request.
 * @constructor
 */
function Pages($config) {
	this._config = $config;
}

/**
 * Current universal HTTP request to do it in isomorphic way.
 * @type {UHR}
 * @private
 */
Pages.prototype._uhr = null;

/**
 * Current lifetime of data (in milliseconds) that is returned by this store.
 * @type {number} Lifetime in milliseconds.
 */
Pages.prototype.$lifetime = 60000;

/**
 * Loads data from remote source.
 * @returns {Promise<Object>|Object|null|undefined} Loaded data.
 */
Pages.prototype.load = function () {
	// Here you can do any HTTP requests using this._uhr.
	// Please read details here https://github.com/catberry/catberry-uhr.
	var currentPage = this.$context.state.page || 'home';

	var result = {
		current: currentPage,
		isActive: {}
	};

	if(!PAGES.hasOwnProperty(currentPage)) {
		this.$context.redirect('/home');
	}

	Object.keys(PAGES).forEach(function(page) {
		result.isActive[page] = (currentPage === page)
	});

	return result;

};

/**
 * Handles action named "some-action" from any component.
 * @returns {Promise<Object>|Object|null|undefined} Response to component.
 */
Pages.prototype.handleSomeAction = function () {
	// Here you can call this.$context.changed() if you know
	// that remote data source has been changed.
	// Also you can have many handle methods for other actions.
};
