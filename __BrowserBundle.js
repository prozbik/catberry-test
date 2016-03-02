/*
 * catberry
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry's license follows:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

/**
 * This module is a template and it is used only with some string replaces
 * by BrowserBundleBuilder module. It does not work by itself.
 */

'use strict';

var stores = [

{name: 'Pages', constructor: require('./catberry_stores\\Pages.js')},
{name: 'Content', constructor: require('./catberry_stores\\Content.js')}
];

var components = [

{name: 'content', constructor: require('./catberry_components\\Content\\index.js'), properties: {"name":"Content","template":"./template.jade","errorTemplate":"./error.jade","logic":"index.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (content) {\nbuf.push("<h3>" + (jade.escape((jade_interp = content) == null ? \'\' : jade_interp)) + "</h3>");}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined));;return buf.join("");\n}', errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\n;return buf.join("");\n}'},
{name: 'document', constructor: require('./catberry_components\\document\\Document.js'), properties: {"name":"document","template":"./document.jade","logic":"./Document.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<!DOCTYPE html><html><head></head><body><cat-hello-world id=\\"unique\\" cat-store=\\"Pages\\"></cat-hello-world><cat-navigation id=\\"cat-top-nav\\" cat-store=\\"Pages\\"></cat-navigation><cat-content id=\\"cat-content\\" cat-store=\\"Content\\"></cat-content></body></html>");;return buf.join("");\n}', errorTemplateSource: null},
{name: 'head', constructor: require('./catberry_components\\head\\Head.js'), properties: {"name":"head","template":"./head.jade","logic":"./Head.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (title) {\nbuf.push("<meta charset=\\"UTF-8\\"/><title>" + (jade.escape((jade_interp = title) == null ? \'\' : jade_interp)) + "</title><script src=\\"bundle.js\\"></script>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");\n}', errorTemplateSource: null},
{name: 'hello-world', constructor: require('./catberry_components\\hello-world\\HelloWorld.js'), properties: {"name":"hello-world","template":"./hello.jade","errorTemplate":"./error.jade","logic":"./HelloWorld.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (current) {\nbuf.push("<h1>Hello " + (jade.escape((jade_interp = current) == null ? \'\' : jade_interp)) + "</h1>");}.call(this,"current" in locals_for_with?locals_for_with.current:typeof current!=="undefined"?current:undefined));;return buf.join("");\n}', errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\n;return buf.join("");\n}'},
{name: 'navigation', constructor: require('./catberry_components\\navigation\\index.js'), properties: {"name":"navigation","template":"./template.jade","errorTemplate":"./error.jade","logic":"index.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (isActive, menu, undefined) {\nbuf.push("<ul>");\n// iterate menu\n;(function(){\n  var $obj = menu;\n  if (\'number\' == typeof $obj.length) {\n\n    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {\n      var item = $obj[$index];\n\nbuf.push("<li" + (jade.cls([isActive[item.name] ? \'active\': \'\'], [true])) + "><a" + (jade.attr("href", "" + (item.link) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = item.name) ? "" : jade_interp)) + "</a></li>");\n    }\n\n  } else {\n    var $l = 0;\n    for (var $index in $obj) {\n      $l++;      var item = $obj[$index];\n\nbuf.push("<li" + (jade.cls([isActive[item.name] ? \'active\': \'\'], [true])) + "><a" + (jade.attr("href", "" + (item.link) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = item.name) ? "" : jade_interp)) + "</a></li>");\n    }\n\n  }\n}).call(this);\n\nbuf.push("</ul>");}.call(this,"isActive" in locals_for_with?locals_for_with.isActive:typeof isActive!=="undefined"?isActive:undefined,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");\n}', errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\n;return buf.join("");\n}'}
];

var util = require('util'),
	routeDefinitions = require('./routes.js') || [],
	Catberry = require('./node_modules/catberry/browser/Catberry.js'),
	Logger = require('./node_modules/catberry/browser/Logger.js'),
	BootstrapperBase =
		require('./node_modules/catberry/lib/base/BootstrapperBase.js'),
	StoreDispatcher = require('./node_modules/catberry/lib/StoreDispatcher'),
	ModuleApiProvider =
		require('./node_modules/catberry/browser/providers/ModuleApiProvider'),
	CookieWrapper = require('./node_modules/catberry/browser/CookieWrapper');

var DEBUG_DOCUMENT_UPDATED = 'Document updated (%d store(s) changed)',
	DEBUG_COMPONENT_BOUND = 'Component "%s" is bound',
	DEBUG_COMPONENT_UNBOUND = 'Component "%s" is unbound';

util.inherits(Bootstrapper, BootstrapperBase);

/**
 * Creates new instance of the browser Catberry's bootstrapper.
 * @constructor
 * @extends BootstrapperBase
 */
function Bootstrapper() {
	BootstrapperBase.call(this, Catberry);
}

/**
 * Configures Catberry's service locator.
 * @param {Object} configObject Application config object.
 * @param {ServiceLocator} locator Service locator to configure.
 */
Bootstrapper.prototype.configure = function (configObject, locator) {
	BootstrapperBase.prototype.configure.call(this, configObject, locator);

	// if browser still does not have promises then add it.
	if (!('Promise' in window)) {
		window.Promise = locator.resolve('promise');
	}

	locator.register('storeDispatcher', StoreDispatcher, configObject, true);
	locator.register(
		'moduleApiProvider', ModuleApiProvider, configObject, true
	);
	locator.register('cookieWrapper', CookieWrapper, configObject, true);

	locator.registerInstance('window', window);

	var loggerConfig = configObject.logger || {},
		logger = new Logger(loggerConfig.levels);
	locator.registerInstance('logger', logger);
	window.onerror = function errorHandler(msg, uri, line) {
		logger.fatal(uri + ':' + line + ' ' + msg);
		return true;
	};
	var eventBus = locator.resolve('eventBus');
	this._wrapEventsWithLogger(configObject, eventBus, logger);

	routeDefinitions.forEach(function (routeDefinition) {
		locator.registerInstance('routeDefinition', routeDefinition);
	});

	stores.forEach(function (store) {
		locator.registerInstance('store', store);
	});

	components.forEach(function (component) {
		locator.registerInstance('component', component);
	});
};

/**
 * Wraps event bus with log messages.
 * @param {Object} config Application config.
 * @param {EventEmitter} eventBus Event emitter that implements event bus.
 * @param {Logger} logger Logger to write messages.
 * @protected
 */
Bootstrapper.prototype._wrapEventsWithLogger =
	function (config, eventBus, logger) {
		BootstrapperBase.prototype._wrapEventsWithLogger
			.call(this, config, eventBus, logger);

		var isRelease = Boolean(config.isRelease);
		if (isRelease) {
			return;
		}
		eventBus
			.on('documentUpdated', function (args) {
				logger.debug(util.format(DEBUG_DOCUMENT_UPDATED, args.length));
			})
			.on('componentBound', function (args) {
				logger.debug(util.format(
					DEBUG_COMPONENT_BOUND,
					args.element.tagName + (args.id ? '#' + args.id : '')
				));
			})
			.on('componentUnbound', function (args) {
				logger.debug(util.format(
					DEBUG_COMPONENT_UNBOUND,
					args.element.tagName + (args.id ? '#' + args.id : '')
				));
			});
	};

module.exports = new Bootstrapper();