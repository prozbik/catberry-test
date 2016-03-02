/*
 * catberry-project: 0.0.0
 * Build Date: Wed Mar 02 2016 12:07:15 GMT+0200 (Финляндия (зима))
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./catberry_components\\Content\\index.js":3,"./catberry_components\\document\\Document.js":4,"./catberry_components\\head\\Head.js":5,"./catberry_components\\hello-world\\HelloWorld.js":6,"./catberry_components\\navigation\\index.js":7,"./catberry_stores\\Content.js":8,"./catberry_stores\\Pages.js":9,"./node_modules/catberry/browser/Catberry.js":29,"./node_modules/catberry/browser/CookieWrapper":30,"./node_modules/catberry/browser/Logger.js":32,"./node_modules/catberry/browser/providers/ModuleApiProvider":37,"./node_modules/catberry/lib/StoreDispatcher":41,"./node_modules/catberry/lib/base/BootstrapperBase.js":42,"./routes.js":69,"util":68}],2:[function(require,module,exports){
'use strict';

var catberry = require('catberry'),
	templateEngine = require('catberry-jade'),
	// this config will be replaced by `./config/browser.json` when building
	// because of `browser` field in `package.json`
	config = require('./config/environment.json'),
	cat = catberry.create(config);

templateEngine.register(cat.locator);
cat.startWhenReady();


},{"./config/environment.json":10,"catberry":38,"catberry-jade":17}],3:[function(require,module,exports){
'use strict';

module.exports = Content;

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of the "Content" component.
 * @constructor
 */
function Content() {

}

/**
 * Gets data context for template engine.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Data context
 * for template engine.
 */
Content.prototype.render = function () {
  return this.$context.getStoreData();
};

/**
 * Returns event binding settings for the component.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Binding settings.
 */
Content.prototype.bind = function () {

};

/**
 * Does cleaning for everything that have NOT been set by .bind() method.
 * This method is optional.
 * @returns {Promise|undefined} Promise or nothing.
 */
Content.prototype.unbind = function () {

};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = Document;

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of "document" component.
 * @constructor
 */
function Document() { }

},{}],5:[function(require,module,exports){
'use strict';

module.exports = Head;

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of "head" component.
 * @param {Object} $config Catberry application config.
 * @constructor
 */
function Head($config) {
	this._config = $config;
}

/**
 * Current config.
 * @type {Object}
 * @private
 */
Head.prototype._config = null;

/**
 * Gets data for template.
 * @returns {Object} Data object.
 */
Head.prototype.render = function () {
	return this._config;
};

},{}],6:[function(require,module,exports){
'use strict';

module.exports = HelloWorld;

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of "hello-world" component.
 * @constructor
 */
function HelloWorld() { }

/**
 * Gets data for template.
 * @returns {Promise<Object>} Promise for data.
 */
HelloWorld.prototype.render = function () {
	return this.$context.getStoreData();
};

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

module.exports = Content;

/*
 * This is a Catberry Store file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#stores
 */

/**
 * Creates new instance of the "Content" store.
 * @param {UHR} $uhr Universal HTTP request.
 * @constructor
 */
function Content($uhr) {
	this._uhr = $uhr;
	this.$context.setDependency('Pages');
}

/**
 * Current universal HTTP request to do it in isomorphic way.
 * @type {UHR}
 * @private
 */
Content.prototype._uhr = null;

/**
 * Current lifetime of data (in milliseconds) that is returned by this store.
 * @type {number} Lifetime in milliseconds.
 */
Content.prototype.$lifetime = 60000;

/**
 * Loads data from remote source.
 * @returns {Promise<Object>|Object|null|undefined} Loaded data.
 */
Content.prototype.load = function () {
	// Here you can do any HTTP requests using this._uhr.
	// Please read details here https://github.com/catberry/catberry-uhr.
	return this.$context.getStoreData('Pages')
		.then(function(data) {
			if(data.current === 'home') {
				data.content = 'Content for homepage'
				return data;
			} else {
				data.content = 'Content for another page'
				return data;
			}
		})
};

/**
 * Handles action named "some-action" from any component.
 * @returns {Promise<Object>|Object|null|undefined} Response to component.
 */
Content.prototype.handleSomeAction = function () {
	// Here you can call this.$context.changed() if you know
	// that remote data source has been changed.
	// Also you can have many handle methods for other actions.
};

},{}],9:[function(require,module,exports){
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

},{"../config/pages.json":11}],10:[function(require,module,exports){
module.exports={
	"title": "Catberry Project"
}

},{}],11:[function(require,module,exports){
module.exports={
  "home": {
    "title": "Home page | Oleg Protsenko",
    "description": "Javascript developer, looking for a job",
    "keywords": "javascript, job, nodejs, catberryjs, isomorphic javascript"
  },
  "portfolio": {
    "title": "Portfolio page | Portfolio",
    "description": "Javascript developer, looking for a job, my portfolio",
    "keywords": "javascript, job, nodejs, catberryjs, isomorphic javascript"
  }
}

},{}],12:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":13}],13:[function(require,module,exports){
(function (global){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (process,global){
module.exports = process.hrtime || hrtime

// polyfil for window.performance.now
var performance = global.performance || {}
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() }

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3
  var seconds = Math.floor(clocktime)
  var nanoseconds = Math.floor((clocktime%1)*1e9)
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0]
    nanoseconds = nanoseconds - previousTimestamp[1]
    if (nanoseconds<0) {
      seconds--
      nanoseconds += 1e9
    }
  }
  return [seconds,nanoseconds]
}
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":58}],15:[function(require,module,exports){

},{}],16:[function(require,module,exports){
/*
 * catberry-jade
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
 *
 * catberry-jade's license follows:
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
 * This license applies to all parts of catberry-jade that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = TemplateProvider;

/**
 * Creates new instance of Jade template provider.
 * @param {Jade} $jade Jade factory.
 * @constructor
 */
function TemplateProvider($jade) {
	this._jade = $jade;
	this._templates = Object.create(null);
}

/**
 * Current Jade factory.
 * @type {Jade}
 * @private
 */
TemplateProvider.prototype._jade = null;

/**
 * Current set of registered templates.
 * @type {Object}
 * @private
 */
TemplateProvider.prototype._templates = null;

/**
 * Registers compiled (precompiled) Jade template.
 * http://jadejs.com/reference.html
 * @param {string} name Template name.
 * @param {string} compiled Compiled template source.
 */
TemplateProvider.prototype.registerCompiled = function (name, compiled) {
	// jshint evil:true
	var getTemplate = new Function('jade', 'return ' + compiled + ';');
	this._templates[name] = getTemplate(this._jade);
};

/**
 * Renders template with specified data.
 * @param {string} name Name of template.
 * @param {Object} data Data context for template.
 * @returns {Promise<string>} Promise for rendered HTML.
 */
TemplateProvider.prototype.render = function (name, data) {
	if (!(name in this._templates)) {
		return Promise.reject(new Error('No such template'));
	}

	var promise;
	try {
		promise = Promise.resolve(this._templates[name](data));
	} catch (e) {
		promise = Promise.reject(e);
	}
	return promise;
};
},{}],17:[function(require,module,exports){
/*
 * catberry-jade
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-jade's license follows:
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry-jade that are not externally
 * maintained libraries.
 */

'use strict';

var Jade = require('jade'),
	TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register: function (locator, config) {
		config = config || {};
		locator.registerInstance('jade', Jade);
		locator.register('templateProvider', TemplateProvider, config, true);
	},
	Jade: Jade,
	TemplateProvider: TemplateProvider
};
},{"./lib/TemplateProvider":16,"jade":55}],18:[function(require,module,exports){
/*
 * catberry-locator
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-locator's license follows:
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry-locator that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = ConstructorTokenizer;

var STATES = {
	ILLEGAL: -1,
	NO: 0,
	IDENTIFIER: 1,
	FUNCTION: 2,
	PARENTHESES_OPEN: 3,
	PARENTHESES_CLOSE: 4,
	COMMA: 5,
	END: 6
};
ConstructorTokenizer.STATES = STATES;

var KEYWORDS = {
	FUNCTION: 'function'
};

var WHITESPACE_TEST = /^\s$/,
	IDENTIFIER_TEST = /^[\$\w]$/;

function ConstructorTokenizer(constructorSource) {
	this._source = String(constructorSource || '');
}

/**
 * Current source code of constructor.
 * @type {string}
 * @private
 */
ConstructorTokenizer.prototype._source = '';

/**
 * Current index in source code.
 * @type {number}
 * @private
 */
ConstructorTokenizer.prototype._currentIndex = 0;

/**
 * Current index in source code.
 * @type {number}
 * @private
 */
ConstructorTokenizer.prototype._currentEnd = 0;

/**
 * Current state.
 * @type {number}
 * @private
 */
ConstructorTokenizer.prototype._currentState = STATES.NO;

/**
 * Gets next token in source.
 * @returns {{state: (number), start: number, end: number}} Token descriptor.
 */
ConstructorTokenizer.prototype.next = function () {
	if (this._currentState === STATES.ILLEGAL ||
		this._currentState === STATES.END) {
		return {
			state: this._currentState,
			start: this._currentIndex,
			end: this._currentIndex + 1
		};
	}

	var start = this._currentIndex,
		state = this._currentState;

	switch (this._currentState) {
		case STATES.PARENTHESES_OPEN:
			this.parenthesesOpenState();
			break;
		case STATES.PARENTHESES_CLOSE:
			this.parenthesesCloseState();
			break;
		case STATES.IDENTIFIER:
			this.identifierState();
			break;
		case STATES.COMMA:
			this.commaState();
			break;
		case STATES.FUNCTION:
			this.functionState();
			break;
		default:
			this.skipWhitespace();
			var expected = this._source.substr(
				this._currentIndex, KEYWORDS.FUNCTION.length
			);
			if (expected === KEYWORDS.FUNCTION) {
				this._currentState = STATES.FUNCTION;
				return this.next();
			}

			state = STATES.ILLEGAL;
	}

	return {
		state: state,
		start: start,
		end: this._currentEnd
	};
};

/**
 * Skips all whitespace characters.
 */
ConstructorTokenizer.prototype.skipWhitespace = function () {
	while (
		this._currentIndex < this._source.length &&
		WHITESPACE_TEST.test(this._source[this._currentIndex])) {
		this._currentIndex++;
	}
};

/**
 * Describes PARENTHESES_OPEN state of machine.
 */
ConstructorTokenizer.prototype.parenthesesOpenState = function () {
	this._currentIndex++;
	this._currentEnd = this._currentIndex;

	this.skipWhitespace();
	if (IDENTIFIER_TEST.test(this._source[this._currentIndex])) {
		this._currentState = STATES.IDENTIFIER;
	} else if (this._source[this._currentIndex] === ')') {
		this._currentState = STATES.PARENTHESES_CLOSE;
	} else {
		this._currentState = STATES.ILLEGAL;
	}
};

/**
 * Describes PARENTHESES_CLOSE state of machine.
 */
ConstructorTokenizer.prototype.parenthesesCloseState = function () {
	this._currentIndex++;
	this._currentEnd = this._currentIndex;
	this._currentState = STATES.END;
};

/**
 * Describes FUNCTION state of machine.
 */
ConstructorTokenizer.prototype.functionState = function () {
	this._currentIndex += KEYWORDS.FUNCTION.length;
	this._currentEnd = this._currentIndex;

	this.skipWhitespace();

	if (this._source[this._currentIndex] === '(') {
		this._currentState = STATES.PARENTHESES_OPEN;
	} else if (IDENTIFIER_TEST.test(this._source[this._currentIndex])) {
		this._currentState = STATES.IDENTIFIER;
	} else {
		this._currentState = STATES.ILLEGAL;
	}
};

/**
 * Describes IDENTIFIER state of machine.
 */
ConstructorTokenizer.prototype.identifierState = function () {
	while (
		this._currentIndex < this._source.length &&
		IDENTIFIER_TEST.test(this._source[this._currentIndex])) {
		this._currentIndex++;
	}

	this._currentEnd = this._currentIndex;

	this.skipWhitespace();
	if (this._source[this._currentIndex] === '(') {
		this._currentState = STATES.PARENTHESES_OPEN;
	} else if (this._source[this._currentIndex] === ')') {
		this._currentState = STATES.PARENTHESES_CLOSE;
	} else if (this._source[this._currentIndex] === ',') {
		this._currentState = STATES.COMMA;
	} else {
		this._currentState = STATES.ILLEGAL;
	}
};

/**
 * Describes COMMA state of machine.
 */
ConstructorTokenizer.prototype.commaState = function () {
	this._currentIndex++;
	this._currentEnd = this._currentIndex;

	this.skipWhitespace();
	if (IDENTIFIER_TEST.test(this._source[this._currentIndex])) {
		this._currentState = STATES.IDENTIFIER;
		return;
	}
	this._currentState = STATES.ILLEGAL;
};
},{}],19:[function(require,module,exports){
/*
 * catberry-locator
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-locator's license follows:
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry-locator that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = ServiceLocator;

var util = require('util'),
	ConstructorTokenizer = require('./ConstructorTokenizer');

var DEPENDENCY_REGEXP = /^\$\w+/,
	ERROR_CONSTRUCTOR_SHOULD_BE_FUNCTION = 'Constructor should be a function',
	ERROR_TYPE_NOT_REGISTERED = 'Type "%s" not registered',
	ERROR_TYPE_SHOULD_BE_STRING = 'Type name "%s" should be a string';

/**
 * Creates new instance of service locator.
 * @constructor
 */
function ServiceLocator() {
	this._registrations = Object.create(null);
}

/**
 * Current type registrations.
 * @type {Object}
 * @protected
 */
ServiceLocator.prototype._registrations = null;

/**
 * Registers new type in service locator.
 * @param {string} type Type name, which will be alias in other constructors.
 * @param {Function} constructor Constructor which
 * initializes instance of specified type.
 * @param {Object?} parameters Set of named parameters
 * which will be also injected.
 * @param {boolean?} isSingleton If true every resolve will return
 * the same instance.
 */
ServiceLocator.prototype.register =
	function (type, constructor, parameters, isSingleton) {
		throwIfNotFunction(constructor);
		throwIfNotString(type);

		initializeRegistration(type, this);
		var parameterNames = getParameterNames(constructor);

		this._registrations[type].unshift({
			constructor: constructor,
			parameters: parameters || {},
			parameterNames: parameterNames,
			isSingleton: Boolean(isSingleton),
			singleInstance: null
		});
	};

/**
 * Registers single instance for specified type.
 * @param {string} type Type name.
 * @param {Object} instance Instance to register.
 */
ServiceLocator.prototype.registerInstance = function (type, instance) {
	throwIfNotString(type);
	initializeRegistration(type, this);

	this._registrations[type].unshift({
		constructor: instance.constructor,
		parameters: {},
		parameterNames: [],
		isSingleton: true,
		singleInstance: instance
	});
};

/**
 * Resolves last registered implementation by type name
 * including all its dependencies recursively.
 * @param {string} type Type name.
 * @returns {Object} Instance of specified type.
 */
ServiceLocator.prototype.resolve = function (type) {
	throwIfNotString(type);
	throwIfNoType(this._registrations, type);
	var firstRegistration = this._registrations[type][0];
	return createInstance(firstRegistration, this);
};

/**
 * Resolves all registered implementations by type name
 * including all dependencies recursively.
 * @param {string} type Type name.
 * @returns {Array} Array of instances specified type.
 */
ServiceLocator.prototype.resolveAll = function (type) {
	throwIfNotString(type);
	try {
		throwIfNoType(this._registrations, type);
	} catch (e) {
		return [];
	}
	return this._registrations[type].map(function (registration) {
		return createInstance(registration, this);
	}, this);
};

/**
 * Resolves instance of specified constructor including dependencies.
 * @param {Function} constructor Constructor for instance creation.
 * @param {Object?} parameters Set of its parameters values.
 * @returns {Object} Instance of specified constructor.
 */
ServiceLocator.prototype.resolveInstance = function (constructor, parameters) {
	return createInstance({
		constructor: constructor,
		parameters: parameters || {},
		parameterNames: getParameterNames(constructor),
		isSingleton: false,
		singleInstance: null
	}, this);
};

/**
 * Unregisters all registrations of specified type.
 * @param {string} type Type name.
 */
ServiceLocator.prototype.unregister = function (type) {
	throwIfNotString(type);
	delete this._registrations[type];
};

/**
 * Initializes registration array for specified type.
 * @param {string} type Type name.
 * @param {ServiceLocator} context Context of execution.
 */
function initializeRegistration(type, context) {
	if (!(type in context._registrations)) {
		context._registrations[type] = [];
	}
}

/**
 * Throws error if specified registration is not found.
 * @param {Object} registrations Current registrations set.
 * @param {string} type Type to check.
 */
function throwIfNoType(registrations, type) {
	if (!(type in registrations) || registrations[type].length === 0) {
		throw new Error(util.format(ERROR_TYPE_NOT_REGISTERED, type));
	}
}

/**
 * Throws error if specified constructor is not a function.
 * @param {Function} constructor Constructor to check.
 */
function throwIfNotFunction(constructor) {
	if (constructor instanceof Function) {
		return;
	}

	throw new Error(ERROR_CONSTRUCTOR_SHOULD_BE_FUNCTION);
}

/**
 * Throws error if specified type name is not a string.
 * @param {string} type Type name to check.
 */
function throwIfNotString(type) {
	if (typeof (type) === 'string') {
		return;
	}

	throw new Error(util.format(ERROR_TYPE_SHOULD_BE_STRING, type));
}

/**
 * Creates instance of type specified and parameters in registration.
 * @param {Object} registration Specified registration of type.
 * @param {ServiceLocator} context Context of execution.
 * @returns {Object} Instance of type specified in registration.
 */
function createInstance(registration, context) {
	if (registration.isSingleton && registration.singleInstance !== null) {
		return registration.singleInstance;
	}

	var instanceParameters = getParameters(registration, context),
		instance = Object.create(registration.constructor.prototype);
	registration.constructor.apply(instance, instanceParameters);

	if (registration.isSingleton) {
		registration.singleInstance = instance;
	}

	return instance;
}

/**
 * Gets constructor parameters specified in type constructor.
 * @param {Object} registration Type registration.
 * @param {ServiceLocator} context Context of execution.
 * @returns {Array} Array of resolved dependencies to inject.
 */
function getParameters(registration, context) {
	return registration.parameterNames.map(function (parameterName) {
		var dependencyName = getDependencyName(parameterName);
		return dependencyName === null ?
			registration.parameters[parameterName] :
			this.resolve(dependencyName);
	}, context);
}

/**
 * Gets name of dependency type.
 * @param {string} parameterName Name of constructor parameter.
 * @returns {string|null} Name of dependency type.
 */
function getDependencyName(parameterName) {
	if (!DEPENDENCY_REGEXP.test(parameterName)) {
		return null;
	}

	return parameterName.substr(1, parameterName.length - 1);
}

/**
 * Gets all parameter names used in constructor function.
 * @param {Function} constructor Constructor function.
 * @returns {Array<string>} Array of parameter names.
 */
function getParameterNames(constructor) {
	var source = constructor.toString(),
		tokenizer = new ConstructorTokenizer(source),
		result = [],
		token = {
			state: ConstructorTokenizer.STATES.NO,
			start: 0,
			end: 0
		},
		areParametersStarted = false;

	while (
		token.state !== ConstructorTokenizer.STATES.END &&
		token.state !== ConstructorTokenizer.STATES.ILLEGAL) {
		token = tokenizer.next();
		if (token.state === ConstructorTokenizer.STATES.PARENTHESES_OPEN) {
			areParametersStarted = true;
		}

		if (areParametersStarted &&
			token.state === ConstructorTokenizer.STATES.IDENTIFIER) {
			result.push(source.substring(token.start, token.end));
		}
	}
	return result;
}
},{"./ConstructorTokenizer":18,"util":68}],20:[function(require,module,exports){
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = UHR;

var UHRBase = require('../lib/UHRBase'),
	Promise = require('promise'),
	URI = require('catberry-uri').URI,
	util = require('util');

// if browser still does not have promises then add it.
if (!('Promise' in window)) {
	window.Promise = Promise;
}

util.inherits(UHR, UHRBase);

var NON_SAFE_HEADERS = {
	cookie: true,
	'accept-charset': true
};

var ERROR_CONNECTION = 'Connection error',
	ERROR_TIMEOUT = 'Request timeout',
	ERROR_ABORTED = 'Request aborted';

/**
 * Creates new instance of client-side HTTP(S) request implementation.
 * @param {Window} $window Current window object.
 * @constructor
 */
function UHR($window) {
	UHRBase.call(this);
	this.window = $window;
}

/**
 * Current instance of window.
 * @type {Window}
 */
UHR.prototype.window = null;

/**
 * Does request with specified parameters using protocol implementation.
 * @param {Object} parameters Request parameters.
 * @param {string} parameters.method HTTP method.
 * @param {string} parameters.url URL for request.
 * @param {URI} parameters.uri URI object.
 * @param {Object} parameters.headers HTTP headers to send.
 * @param {string|Object} parameters.data Data to send.
 * @param {number} parameters.timeout Request timeout.
 * @param {boolean} parameters.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 * @protected
 */
UHR.prototype._doRequest = function (parameters) {
	var self = this;

	Object.keys(parameters.headers)
		.forEach(function (name) {
			if (NON_SAFE_HEADERS.hasOwnProperty(name.toLowerCase())) {
				delete parameters.headers[name];
			}
		});

	return new Promise(function (fulfill, reject) {
		var requestError = null,
			xhr = new self.window.XMLHttpRequest();

		xhr.onabort = function () {
			requestError = new Error(ERROR_ABORTED);
			reject(requestError);
		};
		xhr.ontimeout = function () {
			requestError = new Error(ERROR_TIMEOUT);
			reject(requestError);
		};
		xhr.onerror = function () {
			requestError = new Error(xhr.statusText || ERROR_CONNECTION);
			reject(requestError);
		};
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) {
				return;
			}
			if (requestError) {
				return;
			}
			var statusObject = getStatusObject(xhr),
				content = self.convertResponse(
					statusObject.headers,
					xhr.responseText
				);
			fulfill({
				status: statusObject,
				content: content
			});
		};

		var user = parameters.uri.authority.userInfo ?
				parameters.uri.authority.userInfo.user : null,
			password = parameters.uri.authority.userInfo ?
				parameters.uri.authority.userInfo.password : null;
		xhr.open(
			parameters.method, parameters.uri.toString(), true,
			user || undefined, password || undefined
		);
		xhr.timeout = parameters.timeout;

		if (parameters.withCredentials) {
			xhr.withCredentials = true;
		}

		Object.keys(parameters.headers)
			.forEach(function (headerName) {
				xhr.setRequestHeader(
					headerName, parameters.headers[headerName]
				);
			});

		xhr.send(parameters.data);
	});
};

/**
 * Gets state object for specified jQuery XHR object.
 * @param {Object?} xhr XHR object.
 * @returns {{code: number, text: string, headers: Object}} Status object.
 */
function getStatusObject(xhr) {
	var headers = {};

	if (!xhr) {
		return {
			code: 0,
			text: '',
			headers: headers
		};
	}

	xhr
		.getAllResponseHeaders()
		.split('\n')
		.forEach(function (header) {
			var delimiterIndex = header.indexOf(':');
			if (delimiterIndex <= 0) {
				return;
			}
			var headerName = header
				.substring(0, delimiterIndex)
				.trim()
				.toLowerCase();
			headers[headerName] = header
				.substring(delimiterIndex + 1)
				.trim();
		});

	return {
		// handle IE9 bug: http://goo.gl/idspSr
		code: xhr.status === 1223 ? 204 : xhr.status,
		text: xhr.status === 1223 ? 'No Content' : xhr.statusText,
		headers: headers
	};
}
},{"../lib/UHRBase":22,"catberry-uri":23,"promise":59,"util":68}],21:[function(require,module,exports){
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

'use strict';

var UHR = require('./lib/UHR');

module.exports = {
	/**
	 * Registers UHR in server-side service locator.
	 * @param {ServiceLocator} locator Catberry's service locator.
	 */
	register: function (locator) {
		var config = locator.resolve('config');
		locator.register('uhr', UHR, config, true);
	},
	UHR: UHR
};
},{"./lib/UHR":20}],22:[function(require,module,exports){
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = UHRBase;

var catberryUri = require('catberry-uri'),
	Query = catberryUri.Query,
	URI = catberryUri.URI;

var ERROR_UNSUPPORTED_PROTOCOL = 'Protocol is unsupported',
	ERROR_PARAMETERS_SHOULD_BE_OBJECT = 'Request parameters should be object',
	ERROR_URL_IS_REQUIRED = 'URL is required parameter',
	ERROR_METHOD_IS_REQUIRED = 'Request method is required parameter',
	ERROR_HOST_IS_REQUIRED = 'Host in URL is required',
	ERROR_SCHEME_IS_REQUIRED = 'Scheme in URL is required',
	ERROR_TIMEOUT_SHOULD_BE_NUMBER = 'Timeout should be a number',
	DEFAULT_TIMEOUT = 30000,
	HTTP_PROTOCOL_REGEXP = /^(http)s?$/i;

var METHODS = {
	GET: 'GET',
	HEAD: 'HEAD',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
	OPTIONS: 'OPTIONS',
	TRACE: 'TRACE',
	CONNECT: 'CONNECT'
};

UHRBase.TYPES = {
	URL_ENCODED: 'application/x-www-form-urlencoded',
	JSON: 'application/json',
	PLAIN_TEXT: 'text/plain',
	HTML: 'text/html'
};

UHRBase.CHARSET = 'UTF-8';

UHRBase.DEFAULT_GENERAL_HEADERS = {
	Accept: UHRBase.TYPES.JSON + '; q=0.7, ' +
		UHRBase.TYPES.HTML + '; q=0.2, ' +
		UHRBase.TYPES.PLAIN_TEXT + '; q=0.1',
	'Accept-Charset': UHRBase.CHARSET + '; q=1'
};

UHRBase.CHARSET_PARAMETER = '; charset=' + UHRBase.CHARSET;
UHRBase.URL_ENCODED_ENTITY_CONTENT_TYPE = UHRBase.TYPES.URL_ENCODED +
	UHRBase.CHARSET_PARAMETER;

UHRBase.JSON_ENTITY_CONTENT_TYPE = UHRBase.TYPES.JSON +
	UHRBase.CHARSET_PARAMETER;

UHRBase.PLAIN_TEXT_ENTITY_CONTENT_TYPE = UHRBase.TYPES.PLAIN_TEXT +
	UHRBase.CHARSET_PARAMETER;

// This module were developed using HTTP/1.1v2 RFC 2616
// (http://www.w3.org/Protocols/rfc2616/)
/**
 * Creates new instance of Basic Universal HTTP(S) Request implementation.
 * @constructor
 */
function UHRBase() { }

/**
 * Does GET request to HTTP server.
 * @param {string} url URL to request.
 * @param {Object?} options Request parameters.
 * @param {Object?} options.headers HTTP headers to send.
 * @param {(string|Object)?} options.data Data to send.
 * @param {number?} options.timeout Request timeout.
 * @param {boolean?} options.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.get = function (url, options) {
	options = options || {};
	var parameters = Object.create(options);
	parameters.method = METHODS.GET;
	parameters.url = url;
	return this.request(parameters);
};

/**
 * Does POST request to HTTP server.
 * @param {string} url URL to request.
 * @param {Object?} options Request parameters.
 * @param {Object?} options.headers HTTP headers to send.
 * @param {(string|Object)?} options.data Data to send.
 * @param {number?} options.timeout Request timeout.
 * @param {boolean?} options.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.post = function (url, options) {
	options = options || {};
	var parameters = Object.create(options);
	parameters.method = METHODS.POST;
	parameters.url = url;
	return this.request(parameters);
};

/**
 * Does PUT request to HTTP server.
 * @param {string} url URL to request.
 * @param {Object?} options Request parameters.
 * @param {Object?} options.headers HTTP headers to send.
 * @param {(string|Object)?} options.data Data to send.
 * @param {number?} options.timeout Request timeout.
 * @param {boolean?} options.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.put = function (url, options) {
	options = options || {};
	var parameters = Object.create(options);
	parameters.method = METHODS.PUT;
	parameters.url = url;
	return this.request(parameters);
};

/**
 * Does PATCH request to HTTP server.
 * @param {string} url URL to request.
 * @param {Object?} options Request parameters.
 * @param {Object?} options.headers HTTP headers to send.
 * @param {(string|Object)?} options.data Data to send.
 * @param {number?} options.timeout Request timeout.
 * @param {boolean?} options.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.patch = function (url, options) {
	options = options || {};
	var parameters = Object.create(options);
	parameters.method = METHODS.PATCH;
	parameters.url = url;
	return this.request(parameters);
};

/**
 * Does DELETE request to HTTP server.
 * @param {string} url URL to request.
 * @param {Object?} options Request parameters.
 * @param {Object?} options.headers HTTP headers to send.
 * @param {(string|Object)?} options.data Data to send.
 * @param {number?} options.timeout Request timeout.
 * @param {boolean?} options.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.delete = function (url, options) {
	var parameters = Object.create(options);
	parameters.method = METHODS.DELETE;
	parameters.url = url;
	return this.request(parameters);
};

/**
 * Does request with specified parameters.
 * @param {Object} parameters Request parameters.
 * @param {string} parameters.method HTTP method.
 * @param {string} parameters.url URL for request.
 * @param {Object?} parameters.headers HTTP headers to send.
 * @param {(string|Object)?} parameters.data Data to send.
 * @param {number?} parameters.timeout Request timeout.
 * @param {boolean?} parameters.unsafeHTTPS If true then requests
 * to servers with invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 */
UHRBase.prototype.request = function (parameters) {
	var self = this;
	return this._validateRequest(parameters)
		.then(function (validated) {
			return self._doRequest(validated);
		});
};

/**
 * Validates UHR parameters.
 * @param {Object} parameters Request parameters.
 * @param {string} parameters.method HTTP method.
 * @param {string} parameters.url URL for request.
 * @param {Object?} parameters.headers HTTP headers to send.
 * @param {(string|Object)?} parameters.data Data to send.
 * @param {number?} parameters.timeout Request timeout.
 * @param {boolean?} parameters.unsafeHTTPS If true then requests
 * to servers with invalid HTTPS certificates are allowed.
 * @returns {Promise} Promise for nothing.
 * @private
 */
/*jshint maxcomplexity:false */
UHRBase.prototype._validateRequest = function (parameters) {
	if (!parameters || typeof (parameters) !== 'object') {
		return Promise.reject(new Error(ERROR_PARAMETERS_SHOULD_BE_OBJECT));
	}

	var validated = Object.create(parameters);

	if (typeof (parameters.url) !== 'string') {
		return Promise.reject(new Error(ERROR_URL_IS_REQUIRED));
	}
	validated.uri = new URI(validated.url);
	if (!validated.uri.scheme) {
		return Promise.reject(new Error(ERROR_SCHEME_IS_REQUIRED));
	}
	if (!HTTP_PROTOCOL_REGEXP.test(validated.uri.scheme)) {
		return Promise.reject(new Error(ERROR_UNSUPPORTED_PROTOCOL));
	}
	if (!validated.uri.authority || !validated.uri.authority.host) {
		return Promise.reject(new Error(ERROR_HOST_IS_REQUIRED));
	}
	if (typeof (validated.method) !== 'string' ||
		!(validated.method in METHODS)) {
		return Promise.reject(new Error(ERROR_METHOD_IS_REQUIRED));
	}

	validated.timeout = validated.timeout || DEFAULT_TIMEOUT;
	if (typeof (validated.timeout) !== 'number') {
		return Promise.reject(new Error(ERROR_TIMEOUT_SHOULD_BE_NUMBER));
	}

	validated.headers = this._createHeaders(validated.headers);

	if (!this._isUpstreamRequest(parameters.method) &&
		validated.data && typeof (validated.data) === 'object') {

		var dataKeys = Object.keys(validated.data);

		if (dataKeys.length > 0 && !validated.uri.query) {
			validated.uri.query = new Query('');
		}

		dataKeys.forEach(function (key) {
			validated.uri.query.values[key] = validated.data[key];
		});
		validated.data = null;
	} else {
		var dataAndHeaders = this._getDataToSend(
			validated.headers, validated.data
		);
		validated.headers = dataAndHeaders.headers;
		validated.data = dataAndHeaders.data;
	}

	return Promise.resolve(validated);
};

/**
 * Gets data for sending via HTTP request using Content Type HTTP header.
 * @param {Object} headers HTTP headers.
 * @param {Object|string} data Data to send.
 * @returns {{headers: Object, data: Object|string}} Data and headers to send.
 * @private
 */
UHRBase.prototype._getDataToSend = function (headers, data) {
	var found = findContentType(headers),
		contentTypeHeader = found.name,
		contentType = found.type;

	if (!data || typeof (data) !== 'object') {
		data = data ? String(data) : '';
		if (!contentType) {
			headers[contentTypeHeader] = UHRBase.PLAIN_TEXT_ENTITY_CONTENT_TYPE;
		}
		return {
			headers: headers,
			data: data
		};
	}

	if (contentType === UHRBase.TYPES.JSON) {
		return {
			headers: headers,
			data: JSON.stringify(data)
		};
	}

	// otherwise object will be sent with
	// application/x-www-form-urlencoded
	headers[contentTypeHeader] = UHRBase.URL_ENCODED_ENTITY_CONTENT_TYPE;

	var query = new Query();
	query.values = data;
	return {
		headers: headers,
		data: query.toString()
			.replace(/\+/g, '%2B')
			.replace(/%20/g, '+')
	};
};

/**
 * Creates HTTP headers for request using defaults and current parameters.
 * @param {Object} parameterHeaders HTTP headers of UHR.
 * @protected
 */
UHRBase.prototype._createHeaders = function (parameterHeaders) {
	if (!parameterHeaders || typeof (parameterHeaders) !== 'object') {
		parameterHeaders = {};
	}
	var headers = {};

	Object.keys(UHRBase.DEFAULT_GENERAL_HEADERS)
		.forEach(function (headerName) {
			headers[headerName] = UHRBase.DEFAULT_GENERAL_HEADERS[headerName];
		});

	Object.keys(parameterHeaders)
		.forEach(function (headerName) {
			if (parameterHeaders[headerName] === null ||
				parameterHeaders[headerName] === undefined) {
				delete headers[headerName];
				return;
			}
			headers[headerName] = parameterHeaders[headerName];
		});

	return headers;
};

/**
 * Does request with specified parameters using protocol implementation.
 * @param {Object} parameters Request parameters.
 * @param {string} parameters.method HTTP method.
 * @param {string} parameters.url URL for request.
 * @param {URI} parameters.uri URI object.
 * @param {Object} parameters.headers HTTP headers to send.
 * @param {string|Object} parameters.data Data to send.
 * @param {number} parameters.timeout Request timeout.
 * @param {boolean} parameters.unsafeHTTPS If true then requests to servers with
 * invalid HTTPS certificates are allowed.
 * @returns {Promise<Object>} Promise for result with status object and content.
 * @protected
 * @abstract
 */
// jscs:disable disallowUnusedParams
UHRBase.prototype._doRequest = function (parameters) { };

/**
 * Converts response data according content type.
 * @param {Object} headers HTTP headers.
 * @param {string} responseData Data from response.
 * @returns {string|Object} Converted data.
 */
UHRBase.prototype.convertResponse = function (headers, responseData) {
	if (typeof (responseData) !== 'string') {
		responseData = '';
	}
	var found = findContentType(headers),
		contentType = found.type || UHRBase.TYPES.PLAIN_TEXT;

	switch (contentType) {
		case UHRBase.TYPES.JSON:
			var json;
			try {
				json = JSON.parse(responseData);
			} catch (e) {
				// nothing to do
			}
			return json || {};
		case UHRBase.TYPES.URL_ENCODED:
			var object;
			try {
				var query = new Query(responseData.replace('+', '%20'));
				object = query.values;
			} catch (e) {
				// nothing to do
			}
			return object || {};
		default:
			return responseData;
	}
};

/**
 * Determines is current query needs to use upstream.
 * @param {string} method HTTP method.
 * @returns {boolean} Is current HTTP method means upstream usage.
 * @protected
 */
UHRBase.prototype._isUpstreamRequest = function (method) {
	return (
		method === METHODS.POST ||
		method === METHODS.PUT ||
		method === METHODS.PATCH
		);
};

/**
 * Finds content type header in headers object.
 * @param {Object} headers HTTP headers.
 * @returns {{name: string, type: string}} Name of header and content type.
 */
function findContentType(headers) {
	var contentTypeString = '',
		contentTypeHeader = 'Content-Type';

	Object.keys(headers)
		.forEach(function (key) {
			if (key.toLowerCase() !== 'content-type') {
				return;
			}
			contentTypeHeader = key;
			contentTypeString = headers[key];
		});

	var typeAndParameters = contentTypeString.split(';'),
		contentType = typeAndParameters[0].toLowerCase();
	return {
		name: contentTypeHeader,
		type: contentType
	};
}

},{"catberry-uri":23}],23:[function(require,module,exports){
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
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This license applies to all parts of catberry that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = {
	URI: require('./lib/URI'),
	Authority: require('./lib/Authority'),
	UserInfo: require('./lib/UserInfo'),
	Query: require('./lib/Query')
};
},{"./lib/Authority":24,"./lib/Query":25,"./lib/URI":26,"./lib/UserInfo":27}],24:[function(require,module,exports){
/*
 * catberry-uri
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-uri's license follows:
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
 * This license applies to all parts of catberry-uri that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = Authority;

var UserInfo = require('./UserInfo'),
	percentEncodingHelper = require('./percentEncodingHelper');

var PORT_REGEXP = /^\d+$/,
	ERROR_PORT = 'URI authority port must satisfy expression ' +
		PORT_REGEXP.toString();

/**
 * Creates new instance of URI authority component parser.
 * https://tools.ietf.org/html/rfc3986#section-3.2
 * @param {string?} authorityString URI authority component string.
 * @constructor
 */
function Authority(authorityString) {
	if (typeof (authorityString) === 'string' && authorityString.length > 0) {
		var firstAtIndex = authorityString.indexOf('@');
		if (firstAtIndex !== -1) {
			var userInfoString = authorityString.substring(0, firstAtIndex);
			this.userInfo = new UserInfo(userInfoString);
			authorityString = authorityString.substring(firstAtIndex + 1);
		}

		var lastColonIndex = authorityString.lastIndexOf(':');
		if (lastColonIndex !== -1) {
			var portString = authorityString.substring(lastColonIndex + 1);
			if (lastColonIndex === authorityString.length - 1) {
				this.port = '';
				authorityString = authorityString.substring(0, lastColonIndex);
			} else if (PORT_REGEXP.test(portString)) {
				this.port = portString;
				authorityString = authorityString.substring(0, lastColonIndex);
			}
		}

		this.host = percentEncodingHelper.decode(authorityString);
	}
}

/**
 * Current user information.
 * https://tools.ietf.org/html/rfc3986#section-3.2.1
 * @type {UserInfo}
 */
Authority.prototype.userInfo = null;

/**
 * Current host.
 * https://tools.ietf.org/html/rfc3986#section-3.2.2
 * @type {string}
 */
Authority.prototype.host = null;

/**
 * Current port.
 * https://tools.ietf.org/html/rfc3986#section-3.2.3
 * @type {string}
 */
Authority.prototype.port = null;

/**
 * Clones current authority.
 * @returns {Authority} New clone of current object.
 */
Authority.prototype.clone = function () {
	var authority = new Authority();
	if (this.userInfo) {
		authority.userInfo = this.userInfo.clone();
	}
	if (typeof (this.host) === 'string') {
		authority.host = this.host;
	}
	if (typeof (this.port) === 'string') {
		authority.port = this.port;
	}
	return authority;
};

/**
 * Recombine all authority components into authority string.
 * @returns {string} Authority component string.
 */
Authority.prototype.toString = function () {
	var result = '';
	if (this.userInfo) {
		result += this.userInfo.toString() + '@';
	}
	if (this.host !== undefined && this.host !== null) {
		var host = String(this.host);
		result += percentEncodingHelper.encodeHost(host);
	}
	if (this.port !== undefined && this.port !== null) {
		var port = String(this.port);
		if (port.length > 0 && !PORT_REGEXP.test(port)) {
			throw new Error(ERROR_PORT);
		}
		result += ':' + port;
	}
	return result;
};
},{"./UserInfo":27,"./percentEncodingHelper":28}],25:[function(require,module,exports){
/*
 * catberry-uri
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-uri's license follows:
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
 * This license applies to all parts of catberry-uri that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = Query;

var percentEncodingHelper = require('./percentEncodingHelper');

/**
 * Creates new instance of URI query component parser.
 * https://tools.ietf.org/html/rfc3986#section-3.4
 * @param {string?} queryString URI query component string.
 * @constructor
 */
function Query(queryString) {
	if (typeof (queryString) === 'string') {
		this.values = {};

		queryString
			.split('&')
			.forEach(function (pair) {
				var parts = pair.split('='),
					key = percentEncodingHelper.decode(parts[0]);
				if (!key) {
					return;
				}
				if (key in this.values &&
					!(this.values[key] instanceof Array)) {
					this.values[key] = [this.values[key]];
				}

				var value = typeof (parts[1]) === 'string' ?
					percentEncodingHelper.decode(parts[1]) : null;

				if (this.values[key] instanceof Array) {
					this.values[key].push(value);
				} else {
					this.values[key] = value;
				}
			}, this);
	}
}

/**
 * Current set of values of query.
 * @type {Object}
 */
Query.prototype.values = null;

/**
 * Clones current query to a new object.
 * @returns {Query} New clone of current object.
 */
Query.prototype.clone = function () {
	var query = new Query();
	if (this.values) {
		query.values = {};
		Object.keys(this.values)
			.forEach(function (key) {
				query.values[key] = this.values[key];
			}, this);
	}
	return query;
};

/**
 * Converts current set of query values to string.
 * @returns {string} Query component string.
 */
Query.prototype.toString = function () {
	if (!this.values) {
		return '';
	}

	var queryString = '';
	Object.keys(this.values)
		.forEach(function (key) {
			var values = this.values[key] instanceof Array ?
				this.values[key] : [this.values[key]];

			values.forEach(function (value) {
				queryString += '&' + percentEncodingHelper
					.encodeQuerySubComponent(key);
				if (value === undefined || value === null) {
					return;
				}
				value = String(value);
				queryString += '=' +
					percentEncodingHelper.encodeQuerySubComponent(value);
			});
		}, this);

	return queryString.replace(/^&/, '');
};
},{"./percentEncodingHelper":28}],26:[function(require,module,exports){
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

'use strict';

module.exports = URI;

var Authority = require('./Authority'),
	percentEncodingHelper = require('./percentEncodingHelper'),
	Query = require('./Query');

// https://tools.ietf.org/html/rfc3986#appendix-B
var URI_PARSE_REGEXP = new RegExp(
		'^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?'
	),
	// https://tools.ietf.org/html/rfc3986#section-3.1
	SCHEME_REGEXP = /^[a-z]+[a-z\d\+\.-]*$/i,
	ERROR_SCHEME = 'URI scheme must satisfy expression ' +
		SCHEME_REGEXP.toString(),
	ERROR_BASE_SCHEME = 'Scheme component is required to be present ' +
		'in a base URI';

/**
 * Creates new instance of URI according to RFC 3986.
 * @param {string?} uriString URI string to parse components.
 * @constructor
 */
function URI(uriString) {
	if (typeof (uriString) !== 'string') {
		uriString = '';
	}

	// https://tools.ietf.org/html/rfc3986#appendix-B
	var matches = uriString.match(URI_PARSE_REGEXP);

	if (matches) {
		if (typeof (matches[2]) === 'string') {
			this.scheme = percentEncodingHelper.decode(matches[2]);
		}
		if (typeof (matches[4]) === 'string') {
			this.authority = new Authority(matches[4]);
		}
		if (typeof (matches[5]) === 'string') {
			this.path = percentEncodingHelper.decodePath(matches[5]);
		}
		if (typeof (matches[7]) === 'string') {
			this.query = new Query(matches[7]);
		}
		if (typeof (matches[9]) === 'string') {
			this.fragment = percentEncodingHelper.decode(matches[9]);
		}
	}
}

/**
 * Current URI scheme.
 * https://tools.ietf.org/html/rfc3986#section-3.1
 * @type {string}
 */
URI.prototype.scheme = null;

/**
 * Current URI authority.
 * https://tools.ietf.org/html/rfc3986#section-3.2
 * @type {Authority}
 */
URI.prototype.authority = null;

/**
 * Current URI path.
 * https://tools.ietf.org/html/rfc3986#section-3.3
 * @type {string}
 */
URI.prototype.path = null;

/**
 * Current URI query.
 * https://tools.ietf.org/html/rfc3986#section-3.4
 * @type {Query}
 */
URI.prototype.query = null;

/**
 * Current URI fragment.
 * https://tools.ietf.org/html/rfc3986#section-3.5
 * @type {string}
 */
URI.prototype.fragment = null;

/**
 * Converts a URI reference that might be relative to a given base URI
 * into the reference's target URI.
 * https://tools.ietf.org/html/rfc3986#section-5.2
 * @param {URI} baseUri Base URI.
 * @returns {URI} Resolved URI.
 */
URI.prototype.resolveRelative = function (baseUri) {
	if (!baseUri.scheme) {
		throw new Error(ERROR_BASE_SCHEME);
	}

	return transformReference(baseUri, this);
};

/**
 * Clones current URI to a new object.
 * @returns {URI} New clone of current object.
 */
URI.prototype.clone = function () {
	var uri = new URI();

	if (typeof (this.scheme) === 'string') {
		uri.scheme = this.scheme;
	}

	if (this.authority) {
		uri.authority = this.authority.clone();
	}

	if (typeof (this.path) === 'string') {
		uri.path = this.path;
	}

	if (this.query) {
		uri.query = this.query.clone();
	}

	if (typeof (this.fragment) === 'string') {
		uri.fragment = this.fragment;
	}

	return uri;
};

/**
 * Recomposes URI components to URI string,
 * https://tools.ietf.org/html/rfc3986#section-5.3
 * @returns {string} URI string.
 */
URI.prototype.toString = function () {
	var result = '';

	if (this.scheme !== undefined && this.scheme !== null) {
		var scheme = String(this.scheme);
		if (!SCHEME_REGEXP.test(scheme)) {
			throw new Error(ERROR_SCHEME);
		}
		result += scheme + ':';
	}

	if (this.authority) {
		result += '//' + this.authority.toString();
	}

	var path = this.path === undefined || this.path === null ?
		'' : String(this.path);
	result += percentEncodingHelper.encodePath(path);

	if (this.query) {
		result += '?' + this.query.toString();
	}

	if (this.fragment !== undefined && this.fragment !== null) {
		var fragment = String(this.fragment);
		result += '#' + percentEncodingHelper.encodeFragment(fragment);
	}

	return result;
};

/**
 * Transforms reference for relative resolution.
 * Whole algorithm has been taken from
 * https://tools.ietf.org/html/rfc3986#section-5.2.2
 * @param {URI} baseUri Base URI for resolution.
 * @param {URI} referenceUri Reference URI to resolve.
 * @returns {URI} Components of target URI.
 */
/*jshint maxdepth:false */
/*jshint maxcomplexity:false */
function transformReference(baseUri, referenceUri) {
	var targetUri = new URI('');

	if (referenceUri.scheme) {
		targetUri.scheme = referenceUri.scheme;
		targetUri.authority = referenceUri.authority ?
			referenceUri.authority.clone() : referenceUri.authority;
		targetUri.path = removeDotSegments(referenceUri.path);
		targetUri.query = referenceUri.query ?
			referenceUri.query.clone() : referenceUri.query;
	} else {
		if (referenceUri.authority) {
			targetUri.authority = referenceUri.authority ?
				referenceUri.authority.clone() : referenceUri.authority;
			targetUri.path = removeDotSegments(referenceUri.path);
			targetUri.query = referenceUri.query ?
				referenceUri.query.clone() : referenceUri.query;
		} else {
			if (referenceUri.path === '') {
				targetUri.path = baseUri.path;
				if (referenceUri.query) {
					targetUri.query = referenceUri.query.clone();
				} else {
					targetUri.query = baseUri.query ?
						baseUri.query.clone() : baseUri.query;
				}
			} else {
				if (referenceUri.path[0] === '/') {
					targetUri.path =
						removeDotSegments(referenceUri.path);
				} else {
					targetUri.path =
						merge(baseUri, referenceUri);
					targetUri.path =
						removeDotSegments(targetUri.path);
				}
				targetUri.query = referenceUri.query ?
					referenceUri.query.clone() : referenceUri.query;
			}
			targetUri.authority = baseUri.authority ?
				baseUri.authority.clone() : baseUri.authority;
		}
		targetUri.scheme = baseUri.scheme;
	}

	targetUri.fragment = referenceUri.fragment;
	return targetUri;
}

/**
 * Merges a relative-path reference with the path of the base URI.
 * https://tools.ietf.org/html/rfc3986#section-5.2.3
 * @param {URI} baseUri Components of base URI.
 * @param {URI} referenceUri Components of reference URI.
 * @returns {string} Merged path.
 */
function merge(baseUri, referenceUri) {
	if (baseUri.authority && baseUri.path === '') {
		return '/' + referenceUri.path;
	}

	var segmentsString = baseUri.path.indexOf('/') !== -1 ?
		baseUri.path.replace(/\/[^\/]+$/, '/') : '';

	return segmentsString + referenceUri.path;
}

/**
 * Removes dots segments from URI path.
 * https://tools.ietf.org/html/rfc3986#section-5.2.4
 * @param {string} uriPath URI path with possible dot segments.
 * @returns {string} URI path without dot segments.
 */
function removeDotSegments(uriPath) {
	if (!uriPath) {
		return '';
	}

	var inputBuffer = uriPath,
		newBuffer = '',
		nextSegment = '',
		outputBuffer = '';

	while (inputBuffer.length !== 0) {

		// If the input buffer begins with a prefix of "../" or "./",
		// then remove that prefix from the input buffer
		newBuffer = inputBuffer.replace(/^\.?\.\//, '');
		if (newBuffer !== inputBuffer) {
			inputBuffer = newBuffer;
			continue;
		}

		// if the input buffer begins with a prefix of "/./" or "/.",
		// where "." is a complete path segment, then replace that
		// prefix with "/" in the input buffer
		newBuffer = inputBuffer.replace(/^((\/\.\/)|(\/\.$))/, '/');
		if (newBuffer !== inputBuffer) {
			inputBuffer = newBuffer;
			continue;
		}

		// if the input buffer begins with a prefix of "/../" or "/..",
		// where ".." is a complete path segment, then replace that
		// prefix with "/" in the input buffer and remove the last
		// segment and its preceding "/" (if any) from the output
		// buffer
		newBuffer = inputBuffer.replace(/^((\/\.\.\/)|(\/\.\.$))/, '/');
		if (newBuffer !== inputBuffer) {
			outputBuffer = outputBuffer.replace(/\/[^\/]+$/, '');
			inputBuffer = newBuffer;
			continue;
		}

		// if the input buffer consists only of "." or "..", then remove
		// that from the input buffer
		if (inputBuffer === '.' || inputBuffer === '..') {
			break;
		}

		// move the first path segment in the input buffer to the end of
		// the output buffer, including the initial "/" character (if
		// any) and any subsequent characters up to, but not including,
		// the next "/" character or the end of the input buffer
		nextSegment = /^\/?[^\/]*(\/|$)/.exec(inputBuffer)[0];
		nextSegment = nextSegment.replace(/([^\/])(\/$)/, '$1');
		inputBuffer = inputBuffer.substring(nextSegment.length);
		outputBuffer += nextSegment;
	}

	return outputBuffer;
}
},{"./Authority":24,"./Query":25,"./percentEncodingHelper":28}],27:[function(require,module,exports){
/*
 * catberry-uri
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-uri's license follows:
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
 * This license applies to all parts of catberry-uri that are not externally
 * maintained libraries.
 */

'use strict';

module.exports = UserInfo;

var percentEncodingHelper = require('./percentEncodingHelper');

/**
 * Creates new instance of user information component parser.
 * https://tools.ietf.org/html/rfc3986#section-3.2.1
 * @param {string?} userInfoString User information component string.
 * @constructor
 */
function UserInfo(userInfoString) {
	if (typeof (userInfoString) === 'string' && userInfoString.length > 0) {
		var parts = userInfoString.split(':');
		if (typeof (parts[0]) === 'string') {
			this.user = percentEncodingHelper.decode(parts[0]);
		}
		if (typeof (parts[1]) === 'string') {
			this.password = percentEncodingHelper.decode(parts[1]);
		}
	}
}

/**
 * Current user component.
 * @type {string}
 */
UserInfo.prototype.user = null;

/**
 * Current password.
 * @type {string}
 */
UserInfo.prototype.password = null;

/**
 * Clones current user information.
 * @returns {UserInfo} New clone of current object.
 */
UserInfo.prototype.clone = function () {
	var userInfo = new UserInfo();
	if (typeof (this.user) === 'string') {
		userInfo.user = this.user;
	}
	if (typeof (this.password) === 'string') {
		userInfo.password = this.password;
	}
	return userInfo;
};

/**
 * Recombines user information components to userInfo string.
 * @returns {string} User information component string.
 */
UserInfo.prototype.toString = function () {
	var result = '';
	if (this.user !== undefined && this.user !== null) {
		var user = String(this.user);
		result += percentEncodingHelper
			.encodeUserInfoSubComponent(user);
	}
	if (this.password !== undefined && this.password !== null) {
		var password = String(this.password);
		result += ':' + percentEncodingHelper
			.encodeUserInfoSubComponent(password);
	}

	return result;
};
},{"./percentEncodingHelper":28}],28:[function(require,module,exports){
/*
 * catberry-uri
 *
 * Copyright (c) 2014 Denis Rechkunov and project contributors.
 *
 * catberry-uri's license follows:
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
 * This license applies to all parts of catberry-uri that are not externally
 * maintained libraries.
 */

'use strict';

// https://tools.ietf.org/html/rfc3986#section-2.1

module.exports = {
	// \uD800-\uDBFF \uDC00-\uDFFF
	// surrogates pairs like emoji we should ignore
	/**
	 * Encodes authority user information sub-component according to RFC 3986.
	 * @param {string} string Component to encode.
	 * @returns {string} Encoded component.
	 */
	encodeUserInfoSubComponent: function (string) {
		return string.replace(
			// https://tools.ietf.org/html/rfc3986#section-3.2.1
			/[^\w\.~\-!\$&'\(\)\*\+,;=\uD800-\uDBFF\uDC00-\uDFFF]/g,
			encodeURIComponent
		);
	},
	/**
	 * Encodes authority host component according to RFC 3986.
	 * @param {string} string Component to encode.
	 * @returns {string} Encoded component.
	 */
	encodeHost: function (string) {
		return string.replace(
			// https://tools.ietf.org/html/rfc3986#section-3.2.2
			/[^\w\.~\-!\$&'\(\)\*\+,;=:\[\]\uD800-\uDBFF\uDC00-\uDFFF]/g,
			encodeURIComponent
		);
	},
	/**
	 * Encodes URI path component according to RFC 3986.
	 * @param {string} string Component to encode.
	 * @returns {string} Encoded component.
	 */
	encodePath: function (string) {
		return string.split(/%2f/i)
			.map(function (part) {
				return part.replace(
					// https://tools.ietf.org/html/rfc3986#section-3.3
					/[^\w\.~\-!\$&'\(\)\*\+,;=:@\/\uD800-\uDBFF\uDC00-\uDFFF]/g,
					encodeURIComponent
				);
			})
			.reduce(function (prev, current) {
				if (!prev) {
					return current;
				}
				if (!current) {
					return prev;
				}
				return prev + '%2F' + current;
			}, '');
	},
	/**
	 * Encodes query sub-component according to RFC 3986.
	 * @param {string} string Component to encode.
	 * @returns {string} Encoded component.
	 */
	encodeQuerySubComponent: function (string) {
		return string.replace(
			// https://tools.ietf.org/html/rfc3986#section-3.4
			/[^\w\.~\-!\$'\(\)\*\+,;:@\/\?\uD800-\uDBFF\uDC00-\uDFFF]/g,
			encodeURIComponent
		);
	},

	/**
	 * Encodes URI fragment component according to RFC 3986.
	 * @param {string} string Component to encode.
	 * @returns {string} Encoded component.
	 */
	encodeFragment: function (string) {
		return string.replace(
			// https://tools.ietf.org/html/rfc3986#section-3.5
			/[^\w\.~\-!\$&'\(\)\*\+,;=:@\/\?\uD800-\uDBFF\uDC00-\uDFFF]/g,
			encodeURIComponent
		);
	},

	/**
	 * Decodes percent encoded component.
	 * @param {string} string Component to decode.
	 * @returns {string} Decoded component.
	 */
	decode: function (string) {
		return decodeURIComponent(string);
	},

	/**
	 * Decodes percent encoded path component.
	 * @param {string} string Component to decode.
	 * @returns {string} Decoded path component.
	 */
	decodePath: function (string) {
		return string.split(/%2f/i)
			.map(decodeURIComponent)
			.reduce(function (prev, current) {
				if (!prev) {
					return current;
				}
				if (!current) {
					return prev;
				}
				return prev + '%2F' + current;
			}, '');
	}
};
},{}],29:[function(require,module,exports){
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

'use strict';

module.exports = Catberry;

var util = require('util'),
	CatberryBase = require('../lib/base/CatberryBase');

util.inherits(Catberry, CatberryBase);

/**
 * Creates new instance of the browser version of Catberry.
 * @constructor
 * @extends CatberryBase
 */
function Catberry() {
	CatberryBase.call(this);
}

/**
 * Current request router.
 * @type {RequestRouter}
 * @private
 */
Catberry.prototype._router = null;

/**
 * Wraps current HTML document with Catberry event handlers.
 */
Catberry.prototype.wrapDocument = function () {
	this._router = this.locator.resolve('requestRouter');
};

/**
 * Starts Catberry application when DOM is ready.
 * @returns {Promise} Promise for nothing.
 */
Catberry.prototype.startWhenReady = function () {
	if (window.catberry) {
		return Promise.resolve();
	}
	var self = this;

	return new Promise(function (fulfill) {
		window.document.addEventListener('DOMContentLoaded', function () {
			self.wrapDocument();
			window.catberry = self;
			fulfill();
		});
	});
};
},{"../lib/base/CatberryBase":43,"util":68}],30:[function(require,module,exports){
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

'use strict';

module.exports = CookieWrapper;

var util = require('util'),
	CookieWrapperBase = require('../lib/base/CookieWrapperBase');

util.inherits(CookieWrapper, CookieWrapperBase);

/**
 * Creates new instance of the browser cookie wrapper.
 * @param {Window} $window Window object.
 * @constructor
 */
function CookieWrapper($window) {
	CookieWrapperBase.call(this);
	this._window = $window;
}

/**
 * Current browser window.
 * @type {Window}
 * @private
 */
CookieWrapper.prototype._window = null;

/**
 * Gets current cookie string.
 * @returns {string} Cookie string.
 */
CookieWrapper.prototype.getCookieString = function () {
	return this._window.document.cookie ?
		this._window.document.cookie.toString() :
		'';
};

/**
 * Sets cookie to this wrapper.
 * @param {Object} cookieSetup Cookie setup object.
 * @param {string} cookieSetup.key Cookie key.
 * @param {string} cookieSetup.value Cookie value.
 * @param {number?} cookieSetup.maxAge Max cookie age in seconds.
 * @param {Date?} cookieSetup.expires Expire date.
 * @param {string?} cookieSetup.path URI path for cookie.
 * @param {string?} cookieSetup.domain Cookie domain.
 * @param {boolean?} cookieSetup.secure Is cookie secured.
 * @param {boolean?} cookieSetup.httpOnly Is cookie HTTP only.
 * @returns {string} Cookie setup string.
 */
CookieWrapper.prototype.set = function (cookieSetup) {
	var cookie = this._convertToCookieSetup(cookieSetup);
	this._window.document.cookie = cookie;
	return cookie;
};
},{"../lib/base/CookieWrapperBase":44,"util":68}],31:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = DocumentRenderer;

var util = require('util'),
	morphdom = require('morphdom'),
	errorHelper = require('../lib/helpers/errorHelper'),
	moduleHelper = require('../lib/helpers/moduleHelper'),
	hrTimeHelper = require('../lib/helpers/hrTimeHelper'),
	DocumentRendererBase = require('../lib/base/DocumentRendererBase');

util.inherits(DocumentRenderer, DocumentRendererBase);

var WARN_ID_NOT_SPECIFIED = 'Component "%s" does not have an ID, skipping...',
	WARN_SAME_ID =
		'The duplicated ID "%s" has been found, skipping component "%s"...';

var SPECIAL_IDS = {
		$$head: '$$head',
		$$document: '$$document'
	},
	TAG_NAMES = {
		TITLE: 'TITLE',
		HTML: 'HTML',
		HEAD: 'HEAD',
		BASE: 'BASE',
		STYLE: 'STYLE',
		SCRIPT: 'SCRIPT',
		NOSCRIPT: 'NOSCRIPT',
		META: 'META',
		LINK: 'LINK'
	},
	NODE_TYPES = {
		ELEMENT_NODE: 1,
		TEXT_NODE: 3,
		PROCESSING_INSTRUCTION_NODE: 7,
		COMMENT_NODE: 8
	},
	ERROR_CREATE_WRONG_ARGUMENTS = 'Tag name should be a string ' +
		'and attributes should be an object',
	ERROR_CREATE_WRONG_NAME = 'Component for tag "%s" not found',
	ERROR_CREATE_WRONG_ID = 'The ID is not specified or already used',
	// http://www.w3.org/TR/2015/WD-uievents-20150319/#event-types-list
	NON_BUBBLING_EVENTS = {
		abort: true,
		blur: true,
		error: true,
		focus: true,
		load: true,
		mouseenter: true,
		mouseleave: true,
		resize: true,
		unload: true
	};

/**
 * Creates new instance of the document renderer.
 * @param {ServiceLocator} $serviceLocator Locator to resolve dependencies.
 * @constructor
 * @extends DocumentRendererBase
 */
function DocumentRenderer($serviceLocator) {
	DocumentRendererBase.call(this, $serviceLocator);
	this._componentInstances = Object.create(null);
	this._componentElements = Object.create(null);
	this._componentBindings = Object.create(null);
	this._currentChangedStores = Object.create(null);
	this._window = $serviceLocator.resolve('window');
	this._logger = $serviceLocator.resolve('logger');
	this._config = $serviceLocator.resolve('config');
	this._storeDispatcher = $serviceLocator.resolve('storeDispatcher');

	var self = this;

	this._eventBus.on('storeChanged', function (storeName) {
		self._currentChangedStores[storeName] = true;
		if (self._isStateChanging) {
			return;
		}
		self._updateStoreComponents();
	});
}

/**
 * Current application config.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._config = null;

/**
 * Current logger.
 * @type {Logger}
 * @private
 */
DocumentRenderer.prototype._logger = null;

/**
 * Current store dispatcher.
 * @type {StoreDispatcher}
 * @protected
 */
DocumentRenderer.prototype._storeDispatcher = null;

/**
 * Current set of component instances by unique keys.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._componentInstances = null;

/**
 * Current set of component elements by unique keys.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._componentElements = null;

/**
 * Current set of component bindings by unique keys.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._componentBindings = null;

/**
 * Current routing context.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._currentRoutingContext = null;

/**
 * Current set of changed stores.
 * @type {Object}
 * @private
 */
DocumentRenderer.prototype._currentChangedStores = null;

/**
 * Current promise for rendered page.
 * @type {Promise}
 * @private
 */
DocumentRenderer.prototype._renderedPromise = null;

/**
 * Current state of updating components.
 * @type {boolean}
 * @private
 */
DocumentRenderer.prototype._isUpdating = false;

/**
 * Current awaiting routing.
 * @type {{state: Object, routingContext: Object}}
 * @private
 */
DocumentRenderer.prototype._awaitingRouting = null;

/**
 * Sets the initial state of the application.
 * @param {Object} state New state of application.
 * @param {Object} routingContext Routing context.
 * @returns {Promise} Promise for nothing.
 */
DocumentRenderer.prototype.initWithState = function (state, routingContext) {
	var self = this;
	return self._getPromiseForReadyState()
		.then(function () {
			self._currentRoutingContext = routingContext;
			return self._storeDispatcher.setState(state, routingContext);
		})
		.then(function () {
			var components = self._componentLoader.getComponentsByNames(),
				elements = self._findComponents(
					self._window.document.body, components, true
				);
			elements.unshift(self._window.document.head);
			elements.unshift(self._window.document.documentElement);
			return self._initialWrap(components, elements);
		});
};

/**
 * Renders new state of application.
 * @param {Object} state New state of application.
 * @param {Object} routingContext Routing context.
 * @returns {Promise} Promise for nothing.
 */
DocumentRenderer.prototype.render = function (state, routingContext) {
	this._awaitingRouting = {
		state: state,
		routingContext: routingContext
	};
	if (this._isStateChanging) {
		return this._renderedPromise;
	}

	// we should set this flag to avoid "storeChanged"
	// event handling for now
	this._isStateChanging = true;

	var self = this;
	self._renderedPromise = this._getPromiseForReadyState()
		.then(function () {
			// and then we update all components of these stores in a batch.
			return self._updateStoreComponents();
		})
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
		})
		.then(function () {
			self._isStateChanging = false;
		});

	return this._renderedPromise;
};

/**
 * Renders component into HTML element.
 * @param {Element} element HTML element of component
 * @param {Object?} renderingContext Rendering context for group rendering.
 */
DocumentRenderer.prototype.renderComponent =
	function (element, renderingContext) {
		var self = this;
		return this._getPromiseForReadyState()
			.then(function () {
				var id = self._getId(element);
				if (!id) {
					self._logger.warn(
						util.format(WARN_ID_NOT_SPECIFIED, componentName)
					);
					return;
				}

				if (!renderingContext) {
					renderingContext = self._createRenderingContext([]);
					renderingContext.rootIds[id] = true;
				}

				var componentName = moduleHelper.getOriginalComponentName(
						element.tagName
					),
					hadChildren = element.hasChildNodes(),
					component = renderingContext.components[componentName],
					instance = self._componentInstances[id];

				if (!component) {
					return;
				}

				if (id in renderingContext.renderedIds) {
					self._logger.warn(
						util.format(WARN_SAME_ID, id, componentName)
					);
					return;
				}

				renderingContext.renderedIds[id] = true;

				if (!instance) {
					component.constructor.prototype.$context =
						self._getComponentContext(component, element);
					instance = self._serviceLocator.resolveInstance(
						component.constructor, renderingContext.config
					);
					instance.$context = component.constructor.prototype.$context;
					self._componentInstances[id] = instance;
				}

				var eventArgs = {
					name: componentName,
					context: instance.$context
				};

				self._componentElements[id] = element;

				var startTime = hrTimeHelper.get();
				self._eventBus.emit('componentRender', eventArgs);

				return Promise.resolve()
					.then(function () {
						// we need unbind the whole hierarchy only at
						// the beginning and not for new elements
						if (!(id in renderingContext.rootIds) ||
							!hadChildren) {
							return;
						}

						return self._unbindAll(element, renderingContext);
					})
					.catch(function (reason) {
						self._eventBus.emit('error', reason);
					})
					.then(function () {
						if (instance.$context.element !== element) {
							instance.$context = self._getComponentContext(
								component, element
							);
						}
						var renderMethod = moduleHelper.getMethodToInvoke(
							instance, 'render'
						);
						return moduleHelper.getSafePromise(renderMethod);
					})
					.then(function (dataContext) {
						return component.template.render(dataContext);
					})
					.catch(function (reason) {
						return self._handleRenderError(
							element, component, reason
						);
					})
					.then(function (html) {
						var isHead = element.tagName === TAG_NAMES.HEAD;
						if (html === '' && isHead) {
							return;
						}
						var tmpElement = self._createTemporaryElement(element);
						tmpElement.innerHTML = html;

						if (isHead) {
							self._mergeHead(element, tmpElement);
							return;
						}

						morphdom(element, tmpElement, {
							onBeforeMorphElChildren: function (foundElement) {
								return foundElement === element ||
									!self._isComponent(
										renderingContext.components,
										foundElement
									);
							}
						});

						var promises = self._findComponents(
							element, renderingContext.components, false
						)
							.map(function (innerComponent) {
								return self.renderComponent(
									innerComponent, renderingContext
								);
							});
						return Promise.all(promises);
					})
					.then(function () {
						eventArgs.hrTime = hrTimeHelper.get(startTime);
						eventArgs.time = hrTimeHelper.toMilliseconds(
							eventArgs.hrTime
						);
						self._eventBus.emit('componentRendered', eventArgs);
						return self._bindComponent(element);
					})
					.then(function () {
						// collecting garbage only when
						// the entire rendering is finished
						if (!(id in renderingContext.rootIds) ||
							!hadChildren) {
							return;
						}
						self._collectRenderingGarbage(renderingContext);
					})
					.catch(function (reason) {
						self._eventBus.emit('error', reason);
					});
			});
	};

/**
 * Gets component instance by ID.
 * @param {string} id Component ID.
 * @returns {Object|null} Component instance.
 */
DocumentRenderer.prototype.getComponentById = function (id) {
	return this._componentInstances[id] || null;
};

/**
 * Gets component instance by a DOM element.
 * @param {Element} element Component's Element.
 * @returns {Object|null} Component instance.
 */
DocumentRenderer.prototype.getComponentByElement = function (element) {
	if (!element) {
		return null;
	}
	var id = element.getAttribute(moduleHelper.ATTRIBUTE_ID);
	return this.getComponentById(id);
};

/**
 * Checks that every instance of component has element on the page and
 * removes all references to components removed from DOM.
 * @returns {Promise} Promise for nothing.
 */
DocumentRenderer.prototype.collectGarbage = function () {
	var self = this;
	return this._getPromiseForReadyState()
		.then(function () {
			var promises = [];
			Object.keys(self._componentElements)
				.forEach(function (id) {
					if (SPECIAL_IDS.hasOwnProperty(id)) {
						return;
					}
					var element = self._window.document.getElementById(id);
					if (element) {
						return;
					}

					var promise = self._unbindComponent(self._componentElements[id])
						.then(function () {
							self._removeComponent(id);
						});
					promises.push(promise);
				});
			return Promise.all(promises);
		});
};

/**
 * Creates and renders component element.
 * @param {string} tagName Name of HTML tag.
 * @param {Object} attributes Element attributes.
 * @returns {Promise<Element>} Promise for HTML element with rendered component.
 */
DocumentRenderer.prototype.createComponent = function (tagName, attributes) {
	if (typeof (tagName) !== 'string' || !attributes ||
		typeof (attributes) !== 'object') {
		return Promise.reject(
			new Error(ERROR_CREATE_WRONG_ARGUMENTS)
		);
	}

	var self = this;
	return this._getPromiseForReadyState()
		.then(function () {
			var components = self._componentLoader.getComponentsByNames(),
				componentName = moduleHelper.getOriginalComponentName(tagName);

			if (moduleHelper.isHeadComponent(componentName) ||
				moduleHelper.isDocumentComponent(componentName) ||
				!(componentName in components)) {
				return Promise.reject(
					new Error(util.format(ERROR_CREATE_WRONG_NAME, tagName))
				);
			}

			var safeTagName = moduleHelper.getTagNameForComponentName(componentName);

			var id = attributes[moduleHelper.ATTRIBUTE_ID];
			if (!id || id in self._componentInstances) {
				return Promise.reject(new Error(ERROR_CREATE_WRONG_ID));
			}

			var element = self._window.document.createElement(safeTagName);
			Object.keys(attributes)
				.forEach(function (attributeName) {
					element.setAttribute(attributeName, attributes[attributeName]);
				});

			return self.renderComponent(element)
				.then(function () {
					return element;
				});
		});
};

/**
 * Clears all references to removed components during rendering process.
 * @param {Object} renderingContext Context of rendering.
 * @private
 */
DocumentRenderer.prototype._collectRenderingGarbage =
	function (renderingContext) {
		var self = this;
		Object.keys(renderingContext.unboundIds)
			.forEach(function (id) {
				// this component has been rendered again and we do not need to
				// remove it.
				if (id in renderingContext.renderedIds) {
					return;
				}

				// if someone added an element with the same ID during the
				// rendering process
				if (self._window.document.getElementById(id) !== null) {
					return;
				}

				self._removeComponent(id);
			});
	};

/**
 * Unbinds all event handlers from specified component and all it's descendants.
 * @param {Element} element Component HTML element.
 * @param {Object} renderingContext Context of rendering.
 * @returns {Promise} Promise for nothing.
 * @private
 */
DocumentRenderer.prototype._unbindAll = function (element, renderingContext) {
	var self = this,
		rootId = this._getId(element),
		promises = [];

	self._findComponents(element, renderingContext.components, true)
		.forEach(function (innerElement) {
			var id = self._getId(innerElement);
			renderingContext.unboundIds[id] = true;
			promises.push(self._unbindComponent(innerElement));
		});

	renderingContext.unboundIds[rootId] = true;
	promises.push(this._unbindComponent(element));

	return Promise.all(promises);
};

/**
 * Unbinds all event handlers from specified component.
 * @param {Element} element Component HTML element.
 * @returns {Promise} Promise for nothing.
 * @private
 */
DocumentRenderer.prototype._unbindComponent = function (element) {
	var id = this._getId(element),
		self = this,
		instance = this._componentInstances[id];
	if (!instance) {
		return Promise.resolve();
	}
	if (id in this._componentBindings) {
		Object.keys(this._componentBindings[id])
			.forEach(function (eventName) {
				element.removeEventListener(
					eventName,
					self._componentBindings[id][eventName].handler,
					NON_BUBBLING_EVENTS.hasOwnProperty(eventName)
				);
			});
		delete this._componentBindings[id];
	}
	var unbindMethod = moduleHelper.getMethodToInvoke(instance, 'unbind');
	return moduleHelper.getSafePromise(unbindMethod)
		.then(function () {
			self._eventBus.emit('componentUnbound', {
				element: element,
				id: !SPECIAL_IDS.hasOwnProperty(id) ? id : null
			});
		})
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
		});
};

/**
 * Removes component from the list.
 * @param {string} id Component's ID
 * @private
 */
DocumentRenderer.prototype._removeComponent = function (id) {
	delete this._componentElements[id];
	delete this._componentInstances[id];
	delete this._componentBindings[id];
};

/**
 * Binds all required event handlers to component.
 * @param {Element} element Component HTML element.
 * @returns {Promise} Promise for nothing.
 * @private
 */
DocumentRenderer.prototype._bindComponent = function (element) {
	var id = this._getId(element),
		self = this,
		instance = this._componentInstances[id];
	if (!instance) {
		return Promise.resolve();
	}

	var bindMethod = moduleHelper.getMethodToInvoke(instance, 'bind');
	return moduleHelper.getSafePromise(bindMethod)
		.then(function (bindings) {
			if (!bindings || typeof (bindings) !== 'object') {
				self._eventBus.emit('componentBound', {
					element: element,
					id: !SPECIAL_IDS.hasOwnProperty(id) ? id : null
				});
				return;
			}
			self._componentBindings[id] = Object.create(null);
			Object.keys(bindings)
				.forEach(function (eventName) {
					eventName = eventName.toLowerCase();
					if (eventName in self._componentBindings[id]) {
						return;
					}
					var selectorHandlers = Object.create(null);
					Object.keys(bindings[eventName])
						.forEach(function (selector) {
							var handler = bindings[eventName][selector];
							if (typeof (handler) !== 'function') {
								return;
							}
							selectorHandlers[selector] = handler.bind(instance);
						});
					self._componentBindings[id][eventName] = {
						handler: self._createBindingHandler(
							element, selectorHandlers
						),
						selectorHandlers: selectorHandlers
					};
					element.addEventListener(
						eventName,
						self._componentBindings[id][eventName].handler,
						NON_BUBBLING_EVENTS.hasOwnProperty(eventName)
					);
				});
			self._eventBus.emit('componentBound', {
				element: element,
				id: id
			});
		});
};

/**
 * Creates universal event handler for delegated events.
 * @param {Element} componentRoot Root element of component.
 * @param {Object} selectorHandlers Map of event handlers by CSS selectors.
 * @returns {Function} Universal event handler for delegated events.
 * @private
 */
DocumentRenderer.prototype._createBindingHandler =
	function (componentRoot, selectorHandlers) {
		var selectors = Object.keys(selectorHandlers);
		return function (event) {
			var dispatchedEvent = createCustomEvent(event, function () {
					return element;
				}),
				element = event.target,
				targetMatches = getMatchesMethod(element),
				isHandled = selectors.some(function (selector) {
					if (targetMatches(selector)) {
						selectorHandlers[selector](dispatchedEvent);
						return true;
					}
					return false;
				});
			if (isHandled || !event.bubbles) {
				return;
			}

			while (element.parentElement && element !== componentRoot) {
				element = element.parentElement;
				targetMatches = getMatchesMethod(element);
				for (var i = 0; i < selectors.length; i++) {
					if (!targetMatches(selectors[i])) {
						continue;
					}
					isHandled = true;
					selectorHandlers[selectors[i]](dispatchedEvent);
					break;
				}

				if (isHandled) {
					break;
				}
			}
		};
	};

/**
 * Checks if the element is a component.
 * @param {Object} components Current components.
 * @param {Element} element DOM element.
 * @private
 */
DocumentRenderer.prototype._isComponent = function (components, element) {
	var currentNodeName = element.nodeName;
	return moduleHelper.COMPONENT_PREFIX_REGEXP.test(currentNodeName) &&
		(moduleHelper.getOriginalComponentName(currentNodeName) in components);
};

/**
 * Finds all descendant components of specified component element.
 * @param {Element} element Root component HTML element to begin search with.
 * @param {Object} components Map of components by names.
 * @param {boolean} goInComponents Go inside nested components.
 * @private
 */
DocumentRenderer.prototype._findComponents =
	function (element, components, goInComponents) {
		var elements = [],
			queue = [element],
			currentChildren, i;

		while (queue.length > 0) {
			currentChildren = queue.shift().childNodes;
			for (i = 0; i < currentChildren.length; i++) {
				// we need only Element nodes
				if (currentChildren[i].nodeType !== 1) {
					continue;
				}

				// and they should be components
				if (!this._isComponent(components, currentChildren[i])) {
					queue.push(currentChildren[i]);
					continue;
				}

				if (goInComponents) {
					queue.push(currentChildren[i]);
				}
				elements.push(currentChildren[i]);
			}
		}

		return elements;
	};

/**
 * Handles error while rendering.
 * @param {Element} element Component HTML element.
 * @param {Object} component Component instance.
 * @param {Error} error Error to handle.
 * @returns {Promise<string>} Promise for HTML string.
 * @private
 */
DocumentRenderer.prototype._handleRenderError =
	function (element, component, error) {
		this._eventBus.emit('error', error);

		// do not corrupt existed HEAD when error occurs
		if (element.tagName === TAG_NAMES.HEAD) {
			return Promise.resolve('');
		}

		if (!this._config.isRelease && error instanceof Error) {
			return Promise.resolve(errorHelper.prettyPrint(
				error, this._window.navigator.userAgent
			));
		} else if (component.errorTemplate) {
			return component.errorTemplate.render(error);
		}

		return Promise.resolve('');
	};

/**
 * Updates all components that depend on current set of changed stores.
 * @returns {Promise} Promise for nothing.
 * @private
 */
DocumentRenderer.prototype._updateStoreComponents = function () {
	if (this._isUpdating) {
		return Promise.resolve();
	}

	var self = this;

	// if document component is changed we should reload the page
	var documentStore = this._window.document.documentElement.getAttribute(
		moduleHelper.ATTRIBUTE_STORE
	);
	if (documentStore in this._currentChangedStores) {
		var newLocation = this._currentRoutingContext.location.toString();
		if (newLocation === this._window.location.toString()) {
			this._window.location.reload();
			return Promise.resolve();
		}
		this._window.location.assign(newLocation);
		return Promise.resolve();
	}

	this._isUpdating = true;

	// if we have awaiting routing we should apply state to the stores
	if (this._awaitingRouting) {
		var components = this._componentLoader.getComponentsByNames(),
			changedByState = this._storeDispatcher.setState(
				this._awaitingRouting.state,
				this._awaitingRouting.routingContext
			);

		changedByState.forEach(function (name) {
			self._currentChangedStores[name] = true;
		});

		// we should update contexts of the stores with the new routing context
		this._currentRoutingContext = this._awaitingRouting.routingContext;
		Object.keys(this._componentInstances)
			.forEach(function (id) {
				var instance = self._componentInstances[id];
				instance.$context = self._getComponentContext(
					components[instance.$context.name],
					instance.$context.element
				);
			});
		this._awaitingRouting = null;
	}

	var changedStores = Object.keys(this._currentChangedStores);
	if (changedStores.length === 0) {
		this._isUpdating = false;
		return Promise.resolve();
	}

	this._currentChangedStores = Object.create(null);

	var renderingContext = this._createRenderingContext(changedStores),
		promises = renderingContext.roots.map(function (root) {
			renderingContext.rootIds[self._getId(root)] = true;
			return self.renderComponent(root, renderingContext);
		});

	return Promise.all(promises)
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
		})
		.then(function () {
			self._isUpdating = false;
			self._eventBus.emit('documentUpdated', changedStores);
			return self._updateStoreComponents();
		});
};

/**
 * Merges new and existed head elements and change only difference.
 * @param {Element} head HEAD DOM element.
 * @param {Element} newHead New head element.
 * @private
 */
/*jshint maxcomplexity:false */
DocumentRenderer.prototype._mergeHead = function (head, newHead) {
	if (!newHead) {
		return;
	}
	var self = this;

	var map = this._getHeadMap(head.childNodes),
		current, i, key, oldKey, oldItem,
		sameMetaElements = Object.create(null);

	for (i = 0; i < newHead.childNodes.length; i++) {
		current = newHead.childNodes[i];

		if (!(current.nodeName in map)) {
			map[current.nodeName] = Object.create(null);
		}

		switch (current.nodeName) {
			// these elements can be only replaced
			case TAG_NAMES.TITLE:
			case TAG_NAMES.BASE:
			case TAG_NAMES.NOSCRIPT:
				key = this._getNodeKey(current);
				oldItem = head.getElementsByTagName(current.nodeName)[0];
				if (oldItem) {
					oldKey = this._getNodeKey(oldItem);
					head.replaceChild(current, oldItem);
				} else {
					head.appendChild(current);
				}
				// when we do replace or append current is removed from newHead
				// therefore we need to decrement index
				i--;
				break;

			// these elements can not be deleted from head
			// therefore we just add new elements that differs from existed
			case TAG_NAMES.STYLE:
			case TAG_NAMES.LINK:
			case TAG_NAMES.SCRIPT:
				key = self._getNodeKey(current);
				if (!(key in map[current.nodeName])) {
					head.appendChild(current);
					i--;
				}
				break;
			// meta and other elements can be deleted
			// but we should not delete and append same elements
			default:
				key = self._getNodeKey(current);
				if (key in map[current.nodeName]) {
					sameMetaElements[key] = true;
				} else {
					head.appendChild(current);
					i--;
				}
				break;
		}
	}

	if (TAG_NAMES.META in map) {
		// remove meta tags which a not in a new head state
		Object.keys(map[TAG_NAMES.META])
			.forEach(function (metaKey) {
				if (metaKey in sameMetaElements) {
					return;
				}

				head.removeChild(map[TAG_NAMES.META][metaKey]);
			});
	}
};

/**
 * Gets map of all HEAD's elements.
 * @param {NodeList} headChildren Head children DOM nodes.
 * @returns {Object} Map of HEAD elements.
 * @private
 */
DocumentRenderer.prototype._getHeadMap = function (headChildren) {
	// Create map of <meta>, <link>, <style> and <script> tags
	// by unique keys that contain attributes and content
	var map = Object.create(null),
		i, current,
		self = this;

	for (i = 0; i < headChildren.length; i++) {
		current = headChildren[i];
		if (!(current.nodeName in map)) {
			map[current.nodeName] = Object.create(null);
		}
		map[current.nodeName][self._getNodeKey(current)] = current;
	}
	return map;
};

/**
 * Gets unique element key using element's attributes and its content.
 * @param {Node} node HTML element.
 * @returns {string} Unique key for element.
 * @private
 */
DocumentRenderer.prototype._getNodeKey = function (node) {
	var current, i,
		attributes = [];

	if (node.nodeType !== NODE_TYPES.ELEMENT_NODE) {
		return node.nodeValue || '';
	}

	if (node.hasAttributes()) {
		for (i = 0; i < node.attributes.length; i++) {
			current = node.attributes[i];
			attributes.push(current.name + '=' + current.value);
		}
	}

	return attributes
			.sort()
			.join('|') + '>' + node.textContent;
};

/**
 * Does initial wrapping for every component on the page.
 * @param {Array} components Current components list.
 * @param {Array} element Elements list.
 * @private
 */
DocumentRenderer.prototype._initialWrap = function (components, elements) {
	var self = this,
		current = elements.pop();

	return Promise.resolve()
		.then(function () {
			var id = self._getId(current);
			if (!id) {
				return;
			}

			var componentName = moduleHelper.getOriginalComponentName(
					current.nodeName
				);
			if (!(componentName in components)) {
				return;
			}
			var constructor = components[componentName].constructor;
			constructor.prototype.$context = self._getComponentContext(
				components[componentName], current
			);

			var instance = self._serviceLocator.resolveInstance(
				constructor, self._config
			);
			instance.$context = constructor.prototype.$context;
			self._componentElements[id] = current;
			self._componentInstances[id] = instance;
			// initialize the store of the component
			self._storeDispatcher.getStore(
				current.getAttribute(moduleHelper.ATTRIBUTE_STORE)
			);
			self._eventBus.emit('componentRendered', {
				name: componentName,
				attributes: instance.$context.attributes,
				context: instance.$context
			});
			return self._bindComponent(current);
		})
		.then(function () {
			if (elements.length > 0) {
				return self._initialWrap(components, elements);
			}

			self._eventBus.emit(
				'documentRendered', self._currentRoutingContext
			);
		});
};

/**
 * Gets component context using basic context.
 * @param {Object} component Component details.
 * @param {Element} element DOM element of component.
 * @returns {Object} Component context.
 * @private
 */
DocumentRenderer.prototype._getComponentContext =
	function (component, element) {
		var self = this,
			storeName = element.getAttribute(moduleHelper.ATTRIBUTE_STORE),
			componentContext = Object.create(this._currentRoutingContext);

		// initialize the store of the component
		this._storeDispatcher.getStore(storeName);

		Object.defineProperties(componentContext, {
			name: {
				get: function () {
					return component.name;
				},
				enumerable: true
			},
			attributes: {
				get: function () {
					return attributesToObject(element.attributes);
				},
				enumerable: true
			}
		});

		componentContext.element = element;
		componentContext.getComponentById = function (id) {
			return self.getComponentById(id);
		};
		componentContext.getComponentByElement = function (element) {
			return self.getComponentByElement(element);
		};
		componentContext.createComponent = function (tagName, attributes) {
			return self.createComponent(tagName, attributes);
		};
		componentContext.collectGarbage = function () {
			return self.collectGarbage();
		};
		componentContext.getStoreData = function () {
			var currentStoreName = element
				.getAttribute(moduleHelper.ATTRIBUTE_STORE);
			return self._storeDispatcher
				.getStoreData(currentStoreName);
		};
		componentContext.sendAction = function (name, args) {
			var currentStoreName = element
				.getAttribute(moduleHelper.ATTRIBUTE_STORE);
			return self._storeDispatcher
				.sendAction(currentStoreName, name, args);
		};
		componentContext.sendBroadcastAction = function (name, args) {
			return self._storeDispatcher
				.sendBroadcastAction(name, args);
		};

		return Object.freeze(componentContext);
	};

/**
 * Finds all rendering roots on page for all changed stores.
 * @param {Array} changedStoreNames List of store names which has been changed.
 * @returns {Array<Element>} HTML elements that are rendering roots.
 * @private
 */
DocumentRenderer.prototype._findRenderingRoots = function (changedStoreNames) {
	var self = this,
		headStore = this._window.document.head.getAttribute(
			moduleHelper.ATTRIBUTE_STORE
		),
		components = this._componentLoader.getComponentsByNames(),
		componentsElements = Object.create(null),
		storeNamesSet = Object.create(null),
		rootsSet = Object.create(null),
		roots = [];

	// we should find all components and then looking for roots
	changedStoreNames
		.forEach(function (storeName) {
			storeNamesSet[storeName] = true;
			componentsElements[storeName] = self._window.document
				.querySelectorAll(
					'[' +
					moduleHelper.ATTRIBUTE_ID +
					']' +
					'[' +
					moduleHelper.ATTRIBUTE_STORE +
					'="' +
					storeName +
					'"]'
				);
		});

	if (moduleHelper.HEAD_COMPONENT_NAME in components &&
		headStore in storeNamesSet) {
		rootsSet[this._getId(this._window.document.head)] = true;
		roots.push(this._window.document.head);
	}

	changedStoreNames
		.forEach(function (storeName) {
			var current, currentId,
				lastRoot, lastRootId,
				currentStore, currentComponentName;

			for (var i = 0; i < componentsElements[storeName].length; i++) {
				current = componentsElements[storeName][i];
				currentId = componentsElements[storeName][i]
					.getAttribute(moduleHelper.ATTRIBUTE_ID);
				lastRoot = current;
				lastRootId = currentId;
				currentComponentName = moduleHelper.getOriginalComponentName(
					current.tagName
				);

				while (current.parentElement) {
					current = current.parentElement;
					currentId = self._getId(current);
					currentStore = current.getAttribute(
						moduleHelper.ATTRIBUTE_STORE
					);

					// store did not change state
					if (!currentStore || !(currentStore in storeNamesSet)) {
						continue;
					}

					// is not an active component
					if (!(currentComponentName in components)) {
						continue;
					}

					lastRoot = current;
					lastRootId = currentId;
				}
				if (lastRootId in rootsSet) {
					continue;
				}
				rootsSet[lastRootId] = true;
				roots.push(lastRoot);
			}
		});

	return roots;
};

/**
 * Creates rendering context.
 * @param {Array?} changedStores Names of changed stores.
 * @returns {{
 *   config: Object,
 *   renderedIds: {},
 *   unboundIds: {},
 *   isHeadRendered: boolean,
 *   bindMethods: Array,
 *   routingContext: Object,
 *   components: Object,
 *   roots: Array.<Element>
 * }} The context object.
 * @private
 */
DocumentRenderer.prototype._createRenderingContext = function (changedStores) {
	var components = this._componentLoader.getComponentsByNames();

	return {
		config: this._config,
		renderedIds: Object.create(null),
		unboundIds: Object.create(null),
		isHeadRendered: false,
		bindMethods: [],
		routingContext: this._currentRoutingContext,
		components: components,
		rootIds: Object.create(null),
		roots: changedStores ? this._findRenderingRoots(changedStores) : []
	};
};

/**
 * Gets ID of the element.
 * @param {Element} element HTML element of component.
 * @returns {string} ID.
 */
DocumentRenderer.prototype._getId = function (element) {
	if (element === this._window.document.documentElement) {
		return SPECIAL_IDS.$$document;
	}
	if (element === this._window.document.head) {
		return SPECIAL_IDS.$$head;
	}
	return element.getAttribute(moduleHelper.ATTRIBUTE_ID);
};

/**
 * Creates temporary clone of the element.
 * @param {Element} element DOM element.
 * @returns {Element} clone.
 * @private
 */
DocumentRenderer.prototype._createTemporaryElement = function (element) {
	var tmp = this._window.document.createElement(element.tagName),
		attributes = element.attributes;
	for (var i = 0; i < attributes.length; i++) {
		tmp.setAttribute(attributes[i].name, attributes[i].value);
	}
	return tmp;
};

/**
 * Converts NamedNodeMap of Attr items to key-value object map.
 * @param {NamedNodeMap} attributes List of Element attributes.
 * @returns {Object} Map of attribute values by names.
 */
function attributesToObject(attributes) {
	var result = Object.create(null);
	for (var i = 0; i < attributes.length; i++) {
		result[attributes[i].name] = attributes[i].value;
	}
	return result;
}

/**
 * Gets cross-browser "matches" method for the element.
 * @param {Element} element HTML element.
 * @returns {Function} "matches" method.
 */
function getMatchesMethod(element) {
	var method = (element.matches ||
		element.webkitMatchesSelector ||
		element.mozMatchesSelector ||
		element.oMatchesSelector ||
		element.msMatchesSelector);

	return method.bind(element);
}

/**
 * Creates imitation of original Event object but with specified currentTarget.
 * @param {Event} event Original event object.
 * @param {Function} currentTargetGetter Getter for currentTarget.
 * @returns {Event} Wrapped event.
 */
function createCustomEvent(event, currentTargetGetter) {
	var catEvent = Object.create(event),
		keys = [],
		properties = {};
	for (var key in event) {
		keys.push(key);
	}
	keys.forEach(function (key) {
		if (typeof (event[key]) === 'function') {
			properties[key] = {
				get: function () {
					return event[key].bind(event);
				}
			};
			return;
		}

		properties[key] = {
			get: function () {
				return event[key];
			},
			set: function (value) {
				event[key] = value;
			}
		};
	});

	properties.currentTarget = {
		get: currentTargetGetter
	};
	Object.defineProperties(catEvent, properties);
	Object.seal(catEvent);
	Object.freeze(catEvent);
	return catEvent;
}
},{"../lib/base/DocumentRendererBase":45,"../lib/helpers/errorHelper":48,"../lib/helpers/hrTimeHelper":34,"../lib/helpers/moduleHelper":49,"morphdom":56,"util":68}],32:[function(require,module,exports){
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

'use strict';

module.exports = Logger;

var LEVELS = {
	DEBUG: 'debug',
	TRACE: 'trace',
	INFO: 'info',
	WARN: 'warn',
	ERROR: 'error',
	FATAL: 'fatal'
};

/**
 * Creates browser logger.
 * @param {Object|string} levels Levels to log.
 * @constructor
 */
function Logger(levels) {
	if (typeof (levels) === 'object') {
		this._levels = levels;
	}

	if (typeof (levels) === 'string') {
		this._levels = {};
		Object.keys(LEVELS)
			.forEach(function (level) {
				this._levels[LEVELS[level]] =
					(levels.search(LEVELS[level]) !== -1);
			}, this);
	}

	this.debug = this.debug.bind(this);
	this.trace = this.trace.bind(this);
	this.info = this.info.bind(this);
	this.warn = this.warn.bind(this);
	this.error = this.error.bind(this);
	this.fatal = this.fatal.bind(this);
}

/**
 * Current levels of logging.
 * @type {Object}
 * @private
 */
Logger.prototype._levels = {
	debug: true,
	trace: true,
	info: true,
	warn: true,
	error: true,
	fatal: true
};

/**
 * Logs trace message.
 * @param {string} message Trace message.
 */
Logger.prototype.trace = function (message) {
	if (!this._levels.trace) {
		return;
	}

	if (console.log) {
		console.log(message);
	}
};

/**
 * Logs trace message.
 * @param {string} message Trace message.
 */
Logger.prototype.debug = function (message) {
	if (!this._levels.debug) {
		return;
	}

	if (console.log) {
		console.log(message);
	}
};

/**
 * Logs info message.
 * @param {string} message Information message.
 */
Logger.prototype.info = function (message) {
	if (!this._levels.info) {
		return;
	}

	if (console.info) {
		console.info(message);
	}
};

/**
 * Logs warn message.
 * @param {string} message Warning message.
 */
Logger.prototype.warn = function (message) {
	if (!this._levels.warn) {
		return;
	}

	if (console.warn) {
		console.warn(message);
	}
};
/**
 * Logs error message.
 * @param {string|Error} error Error object or message.
 */
Logger.prototype.error = function (error) {
	if (!this._levels.error) {
		return;
	}

	writeError(error);
};

/**
 * Logs error message.
 * @param {string|Error} error Error object or message.
 */
Logger.prototype.fatal = function (error) {
	if (!this._levels.fatal) {
		return;
	}
	writeError(error);
};

/**
 * Writes error to console.
 * @param {Error|string} error Error to write.
 */
function writeError(error) {
	try {
		if (!(error instanceof Error)) {
			error = typeof (error) === 'string' ? new Error(error) : new Error();
		}
		if (console.error) {
			console.error(error);
		}
	} catch (e) {
		writeError(e);
	}
}
},{}],33:[function(require,module,exports){
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

'use strict';

module.exports = RequestRouter;

var util = require('util'),
	URI = require('catberry-uri').URI;

var MOUSE_PRIMARY_KEY = 0,
	HREF_ATTRIBUTE_NAME = 'href',
	TARGET_ATTRIBUTE_NAME = 'target',
	A_TAG_NAME = 'A',
	BODY_TAG_NAME = 'BODY';

/**
 * Creates new instance of the browser request router.
 * @param {ServiceLocator} $serviceLocator Service locator to resolve services.
 * @constructor
 */
function RequestRouter($serviceLocator) {
	this._eventBus = $serviceLocator.resolve('eventBus');
	this._window = $serviceLocator.resolve('window');
	this._documentRenderer = $serviceLocator.resolve('documentRenderer');
	this._stateProvider = $serviceLocator.resolve('stateProvider');
	this._contextFactory = $serviceLocator.resolve('contextFactory');

	this._isHistorySupported = this._window.history &&
		this._window.history.pushState instanceof Function;

	// add event handlers
	this._wrapDocument();

	// set initial state from current URI
	var currentLocation = new URI(this._window.location.toString()),
		state = this._stateProvider.getStateByUri(currentLocation),
		self = this;

	this._location = currentLocation;
	this._changeState(state)
		.catch(function (reason) {
			self._handleError(reason);
		});
}

/**
 * Current initialization flag.
 * @type {boolean}
 * @private
 */
RequestRouter.prototype._isStateInitialized = false;

/**
 * Current referrer.
 * @type {URI}
 * @private
 */
RequestRouter.prototype._referrer = '';

/**
 * Current location.
 * @type {URI}
 * @private
 */
RequestRouter.prototype._location = null;

/**
 * Current event bus.
 * @type {EventEmitter}
 * @private
 */
RequestRouter.prototype._eventBus = null;

/**
 * Current context factory.
 * @type {ContextFactory}
 * @private
 */
RequestRouter.prototype._contextFactory = null;

/**
 * Current state provider.
 * @type {StateProvider}
 * @private
 */
RequestRouter.prototype._stateProvider = null;

/**
 * Current document renderer.
 * @type {DocumentRenderer}
 * @private
 */
RequestRouter.prototype._documentRenderer = null;

/**
 * Current browser window.
 * @type {Window}
 * @private
 */
RequestRouter.prototype._window = null;

/**
 * True if current browser supports history API.
 * @type {boolean}
 * @private
 */
RequestRouter.prototype._isHistorySupported = false;

/**
 * Routes browser render request.
 * @param {URI} newLocation New location.
 * @returns {Promise} Promise for nothing.
 */
RequestRouter.prototype.route = function (newLocation) {
	var self = this;
	// because now location was not change yet and
	// different browsers handle `popstate` differently
	// we need to do route in next iteration of event loop
	return Promise.resolve()
		.then(function () {
			var state = self._stateProvider.getStateByUri(newLocation),
				newLocationString = newLocation.toString();

			if (!state) {
				self._window.location.assign(newLocationString);
				return;
			}

			self._window.history.pushState(state, '', newLocationString);

			// if only URI fragment is changed
			var newQuery = newLocation.query ?
					newLocation.query.toString() : null,
				currentQuery = self._location.query ?
					self._location.query.toString() : null;
			if (newLocation.path === self._location.path &&
				newQuery === currentQuery) {
				self._location = newLocation;
				return;
			}
			self._location = newLocation;
			return self._changeState(state);
		});
};

/**
 * Sets application state to specified URI.
 * @param {string} locationString URI to go.
 * @returns {Promise} Promise for nothing.
 */
RequestRouter.prototype.go = function (locationString) {
	var self = this;
	return Promise.resolve()
		.then(function () {
			var location = new URI(locationString);
			location = location.resolveRelative(self._location);
			locationString = location.toString();

			var currentAuthority = self._location.authority ?
					self._location.authority.toString() : null,
				newAuthority = location.authority ?
					location.authority.toString() : null;

			// we must check if this is an external link before map URI
			// to internal application state
			if (!self._isHistorySupported ||
				location.scheme !== self._location.scheme ||
				newAuthority !== currentAuthority) {
				self._window.location.assign(locationString);
				return;
			}

			return self.route(location);
		});
};

/**
 * Changes current application state with new location.
 * @param {Object} state New state.
 * @returns {Promise} Promise for nothing.
 * @private
 */
RequestRouter.prototype._changeState = function (state) {
	var self = this;
	return Promise.resolve()
		.then(function () {
			var routingContext = self._contextFactory.create({
					referrer: self._referrer || self._window.document.referrer,
					location: self._location,
					userAgent: self._window.navigator.userAgent
				});

			if (!self._isStateInitialized) {
				self._isStateInitialized = true;
				return self._documentRenderer.initWithState(
					state, routingContext
				);
			}

			// for "not found" state
			if (state === null) {
				window.location.reload();
				return;
			}

			return self._documentRenderer
				.render(state, routingContext);
		})
		.then(function () {
			self._referrer = self._location;
		});
};

/**
 * Wraps document with required events to route requests.
 * @private
 */
RequestRouter.prototype._wrapDocument = function () {
	var self = this;

	if (!this._isHistorySupported) {
		return;
	}

	this._window.addEventListener('popstate', function () {
		self.route(new URI(self._window.location.toString()))
			.catch(self._handleError.bind(self));
	});

	this._window.document.body.addEventListener('click', function (event) {
		if (event.defaultPrevented) {
			return;
		}
		if (event.target.tagName === A_TAG_NAME) {
			self._linkClickHandler(event, event.target);
		} else {
			var link = closestLink(event.target);
			if (!link) {
				return;
			}
			self._linkClickHandler(event, link);
		}
	});
};

/**
 * Handles link click on the page.
 * @param {Event} event Event-related object.
 * @param {Element} element Link element.
 * @private
 */
RequestRouter.prototype._linkClickHandler = function (event, element) {
	var targetAttribute = element.getAttribute(TARGET_ATTRIBUTE_NAME);
	if (targetAttribute) {
		return;
	}

	// if middle mouse button was clicked
	if (event.button !== MOUSE_PRIMARY_KEY ||
		event.ctrlKey || event.altKey || event.shiftKey) {
		return;
	}

	var locationString = element.getAttribute(HREF_ATTRIBUTE_NAME);
	if (!locationString) {
		return;
	}
	if (locationString[0] === '#') {
		return;
	}

	event.preventDefault();
	this.go(locationString)
		.catch(this._handleError.bind(this));
};

/**
 * Handles all errors.
 * @param {Error} error Error to handle.
 * @private
 */
RequestRouter.prototype._handleError = function (error) {
	this._eventBus.emit('error', error);
};

/**
 * Finds the closest ascending "A" element node.
 * @param {Node} element DOM element.
 * @returns {Node|null} The closest "A" element or null.
 */
function closestLink(element) {
	while (element && element.nodeName !== A_TAG_NAME &&
		element.nodeName !== BODY_TAG_NAME) {
		element = element.parentNode;
	}
	return element && element.nodeName === A_TAG_NAME ? element : null;
}

},{"catberry-uri":23,"util":68}],34:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = {
	/**
	 * Gets the high resolution time or the difference between
	 * previous and current time.
	 * @param {Array?} Previous high resolution timestamp.
	 * @returns {Array} The high resolution time.
	 */
	get: require('browser-process-hrtime'),
	/**
	 * Converts the high resolution timestamp to text message.
	 * @param {Array}
	 * @returns {string} Time message.
	 */
	toMessage: require('pretty-hrtime'),
	/**
	 * Converts high resolution time to milliseconds number.
	 * @param {Array} hrTime High resolution time tuple.
	 */
	toMilliseconds: function (hrTime) {
		return hrTime[0] * 1e3 + Math.round(hrTime[1] / 1e6);
	}
};
},{"browser-process-hrtime":14,"pretty-hrtime":57}],35:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = ComponentLoader;

var moduleHelper = require('../../lib/helpers/moduleHelper'),
	util = require('util'),
	LoaderBase = require('../../lib/base/LoaderBase');

util.inherits(ComponentLoader, LoaderBase);

/**
 * Creates new instance of the component loader.
 * @param {ServiceLocator} $serviceLocator Locator to resolve dependencies.
 * @constructor
 * @extends LoaderBase
 */
function ComponentLoader($serviceLocator) {
	this._serviceLocator = $serviceLocator;
	this._eventBus = $serviceLocator.resolve('eventBus');
	this._templateProvider = $serviceLocator.resolve('templateProvider');
	LoaderBase.call(this, $serviceLocator.resolveAll('componentTransform'));
}

/**
 * Current event bus.
 * @type {EventEmitter}
 * @private
 */
ComponentLoader.prototype._eventBus = null;

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @private
 */
ComponentLoader.prototype._serviceLocator = null;

/**
 * Current template provider.
 * @type {TemplateProvider}
 * @private
 */
ComponentLoader.prototype._templateProvider = null;

/**
 * Current map of loaded components by names.
 * @type {Object} Map of components by names.
 * @private
 */
ComponentLoader.prototype._loadedComponents = null;

/**
 * Loads components when it is in a browser.
 * @returns {Promise} Promise for nothing.
 */
ComponentLoader.prototype.load = function () {
	if (this._loadedComponents) {
		return Promise.resolve(this._loadedComponents);
	}

	this._loadedComponents = Object.create(null);

	var self = this;
	return Promise.resolve()
		.then(function () {
			var components = self._serviceLocator.resolveAll('component'),
				componentPromises = [];

			// the list is a stack, we should reverse it
			components.forEach(function (component) {
				componentPromises.unshift(
					self._processComponent(component)
				);
			});
			return Promise.all(componentPromises);
		})
		.then(function (components) {
			components.forEach(function (component) {
				if (!component || typeof (component) !== 'object') {
					return;
				}
				self._loadedComponents[component.name] = component;
			});
			self._eventBus.emit('allComponentsLoaded', components);
			return self._loadedComponents;
		});
};

/**
 * Processes component and apply required operations.
 * @param {Object} componentDetails Loaded component details.
 * @returns {Object} Component object.
 * @private
 */
ComponentLoader.prototype._processComponent = function (componentDetails) {
	var self = this,
		component = Object.create(componentDetails);

	return this._applyTransforms(component)
		.then(function (transformed) {
			component = transformed;
			self._templateProvider.registerCompiled(
				component.name, component.templateSource
			);
			component.template = {
				render: function (dataContext) {
					return self._templateProvider.render(
						component.name, dataContext
					);
				}
			};
			if (typeof (component.errorTemplateSource) === 'string') {
				var errorTemplateName = moduleHelper.getNameForErrorTemplate(
					component.name
				);
				self._templateProvider.registerCompiled(
					errorTemplateName, component.errorTemplateSource
				);
				component.errorTemplate = {
					render: function (dataContext) {
						return self._templateProvider.render(
							errorTemplateName, dataContext
						);
					}
				};
			}
			self._eventBus.emit('componentLoaded', component);
			return component;
		})
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
			return null;
		});
};

/**
 * Gets map of components by names.
 * @returns {Object} Map of components by names.
 */
ComponentLoader.prototype.getComponentsByNames = function () {
	return this._loadedComponents || Object.create(null);
};
},{"../../lib/base/LoaderBase":46,"../../lib/helpers/moduleHelper":49,"util":68}],36:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = StoreLoader;

var util = require('util'),
	LoaderBase = require('../../lib/base/LoaderBase');

util.inherits(StoreLoader, LoaderBase);

/**
 * Creates instance of the store loader.
 * @param {ServiceLocator} $serviceLocator Locator to resolve stores.
 * @constructor
 * @extends LoaderBase
 */
function StoreLoader($serviceLocator) {
	this._serviceLocator = $serviceLocator;
	this._eventBus = $serviceLocator.resolve('eventBus');
	LoaderBase.call(this, $serviceLocator.resolveAll('storeTransform'));
}

/**
 * Current event bus.
 * @type {EventEmitter}
 * @private
 */
StoreLoader.prototype._eventBus = null;

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @private
 */
StoreLoader.prototype._serviceLocator = null;

/**
 * Current set of loaded stores.
 * @type {Object}
 * @private
 */
StoreLoader.prototype._loadedStores = null;

/**
 * Loads all stores when it is in a browser.
 * @returns {Promise} Promise for nothing.
 */
StoreLoader.prototype.load = function () {
	if (this._loadedStores) {
		return Promise.resolve(this._loadedStores);
	}

	this._loadedStores = Object.create(null);
	var self = this;

	return Promise.resolve()
		.then(function () {
			var stores = self._serviceLocator.resolveAll('store'),
				storePromises = [];

			// the list is a stack, we should reverse it
			stores.forEach(function (store) {
				storePromises.unshift(
					self._getStore(store)
				);
			});

			return Promise.all(storePromises);
		})
		.then(function (stores) {
			stores.forEach(function (store) {
				if (!store || typeof (store) !== 'object') {
					return;
				}
				self._loadedStores[store.name] = store;
			});
			self._eventBus.emit('allStoresLoaded', self._loadedStores);
			return Promise.resolve(self._loadedStores);
		});
};

/**
 * Gets the store from store details.
 * @param {Object} storeDetails Store details.
 * @returns {Promise<Object>} Promise for store.
 * @private
 */
StoreLoader.prototype._getStore = function (storeDetails) {
	var self = this;
	return this._applyTransforms(storeDetails)
		.then(function (transformed) {
			self._eventBus.emit('storeLoaded', transformed);
			return transformed;
		})
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
			return null;
		});
};

/**
 * Gets stores map by names.
 * @returns {Object} Map of stores by names.
 */
StoreLoader.prototype.getStoresByNames = function () {
	return this._loadedStores || Object.create(null);
};
},{"../../lib/base/LoaderBase":46,"util":68}],37:[function(require,module,exports){
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

'use strict';

module.exports = ModuleApiProvider;

var util = require('util'),
	propertyHelper = require('../../lib/helpers/propertyHelper'),
	ModuleApiProviderBase = require('../../lib/base/ModuleApiProviderBase');

util.inherits(ModuleApiProvider, ModuleApiProviderBase);

/**
 * Creates new instance of the module API provider.
 * @param {ServiceLocator} $serviceLocator Service locator
 * to resolve dependencies.
 * @constructor
 * @extends ModuleApiProviderBase
 */
function ModuleApiProvider($serviceLocator) {
	ModuleApiProviderBase.call(this, $serviceLocator);
	propertyHelper.defineReadOnly(this, 'isBrowser', true);
	propertyHelper.defineReadOnly(this, 'isServer', false);
}

/**
 * Reloads the page for handling "not found" error.
 * @returns {Promise} Promise for nothing.
 */
ModuleApiProvider.prototype.notFound = function () {
	var window = this.locator.resolve('window');
	window.location.reload();
	return Promise.resolve();
};

/**
 * Redirects current page to specified URI.
 * @param {string} uriString URI to redirect.
 * @returns {Promise} Promise for nothing.
 */
ModuleApiProvider.prototype.redirect = function (uriString) {
	var requestRouter = this.locator.resolve('requestRouter');
	return requestRouter.go(uriString);
};

/**
 * Clears current location URI's fragment.
 * @returns {Promise} Promise for nothing.
 */
ModuleApiProvider.prototype.clearFragment = function () {
	var window = this.locator.resolve('window'),
		position = window.document.body.scrollTop;
	window.location.hash = '';
	window.document.body.scrollTop = position;
	return Promise.resolve();
};
},{"../../lib/base/ModuleApiProviderBase":47,"../../lib/helpers/propertyHelper":50,"util":68}],38:[function(require,module,exports){
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

'use strict';

module.exports = require('./lib/Bootstrapper');

},{"./lib/Bootstrapper":1}],39:[function(require,module,exports){
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

'use strict';

module.exports = ContextFactory;

var propertyHelper = require('./helpers/propertyHelper');

/**
 * Creates new instance of the context factory.
 * @param {ServiceLocator} $serviceLocator Locator to resolve dependencies.
 * @constructor
 */
function ContextFactory($serviceLocator) {
	this._serviceLocator = $serviceLocator;
}

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @private
 */
ContextFactory.prototype._serviceLocator = null;

/**
 * Creates new context for modules.
 * @param {Object} additional Additional parameters.
 * @param {URI} additional.referrer Current referrer.
 * @param {URI} additional.location Current location.
 * @param {string} additional.userAgent Current user agent.
 */
ContextFactory.prototype.create = function (additional) {
	var apiProvider = this._serviceLocator.resolve('moduleApiProvider'),
		context = Object.create(apiProvider);
	Object.keys(additional)
		.forEach(function (key) {
			propertyHelper.defineReadOnly(context, key, additional[key]);
		});
	return context;
};
},{"./helpers/propertyHelper":50}],40:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = SerialWrapper;

var events = require('events');

var ERROR_NO_SUCH_METHOD = 'There is no such registered method';

/**
 * Creates new instance of the serial wrapper for promises.
 * @constructor
 */
function SerialWrapper() {
	this._emitter = new events.EventEmitter();
	this._emitter.setMaxListeners(0);
	this._toInvoke = Object.create(null);
	this._inProgress = Object.create(null);
}

/**
 * Current event emitter.
 * @type {EventEmitter}
 * @private
 */
SerialWrapper.prototype._emitter = null;

/**
 * Current set of named methods to invoke.
 * @type {Object}
 * @private
 */
SerialWrapper.prototype._toInvoke = null;

/**
 * Current set of flags if the method is in progress.
 * @type {Object}
 * @private
 */
SerialWrapper.prototype._inProgress = null;

/**
 * Adds method to the set.
 * @param {string} name Method name.
 * @param {Function} toInvoke Function that returns promise.
 */
SerialWrapper.prototype.add = function (name, toInvoke) {
	this._toInvoke[name] = toInvoke;
};

/**
 * Returns true if method with such name was registered to the set.
 * @param {string} name Name of method.
 * @returns {boolean} True if method name is registered.
 */
SerialWrapper.prototype.isRegistered = function (name) {
	return typeof (this._toInvoke[name]) === 'function';
};

/**
 * Invokes method without concurrency.
 * @param {string} name Method name.
 * @returns {Promise<Object>} Promise for result.
 */
SerialWrapper.prototype.invoke = function (name) {
	var self = this;

	if (!this.isRegistered(name)) {
		return Promise.reject(new Error(ERROR_NO_SUCH_METHOD));
	}

	if (this._inProgress[name]) {
		return new Promise(function (fulfill, reject) {
			self._emitter.once(name, fulfill);
			self._emitter.once(name + '--error', reject);
		});
	}

	this._inProgress[name] = true;
	this._toInvoke[name]()
		.then(function (result) {
			self._emitter.emit(name, result);
			self._inProgress[name] = null;
		})
		.catch(function (reason) {
			self._emitter.emit(name + '--error', reason);
			self._inProgress[name] = null;
		});

	return this.invoke(name);
};
},{"events":53}],41:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = StoreDispatcher;

var util = require('util'),
	SerialWrapper = require('./SerialWrapper'),
	moduleHelper = require('./helpers/moduleHelper');

var ERROR_STORE_NOT_FOUND = 'Store "%s" not found',
	ERROR_STATE = 'State should be set before any request',
	DEFAULT_LIFETIME = 60000;

/**
 * Creates new instance of store dispatcher.
 * @param {ServiceLocator} $serviceLocator Locator to resolve dependencies.
 * @param {StoreLoader} $storeLoader Store loader to load stores.
 * @param {EventEmitter} $eventBus Event bus to emit events.
 * @constructor
 */
function StoreDispatcher($serviceLocator, $storeLoader, $eventBus) {
	this._serviceLocator = $serviceLocator;
	this._storeLoader = $storeLoader;
	this._eventBus = $eventBus;
	this._storeInstances = Object.create(null);
	this._lastData = Object.create(null);
	this._dependants = Object.create(null);
	this._serialWrapper = new SerialWrapper();
}

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @private
 */
StoreDispatcher.prototype._serviceLocator = null;

/**
 * Current event bus.
 * @type {EventEmitter}
 * @private
 */
StoreDispatcher.prototype._eventBus = null;

/**
 * Current store loader.
 * @type {StoreLoader}
 * @private
 */
StoreDispatcher.prototype._storeLoader = null;

/**
 * Current map of all store instances.
 * @type {null}
 * @private
 */
StoreDispatcher.prototype._storeInstances = null;

/**
 * Current map of last data for each store.
 * @type {Object}
 * @private
 */
StoreDispatcher.prototype._lastData = null;

/**
 * Current map of last state of store dispatcher.
 * @type {Object}
 * @private
 */
StoreDispatcher.prototype._lastState = null;

/**
 * Current serial wrapper.
 * @type {SerialWrapper}
 * @private
 */
StoreDispatcher.prototype._serialWrapper = null;

/**
 * Current basic context for all store contexts.
 * @type {Object}
 * @private
 */
StoreDispatcher.prototype._currentBasicContext = null;

/**
 * Current set of store dependency graph.
 * @type {Object}
 * @private
 */
StoreDispatcher.prototype._dependants = null;

/**
 * Gets store data and creates store instance if required.
 * @param {string} storeName Name of store.
 * @returns {Object} Store's data.
 */
StoreDispatcher.prototype.getStoreData = function (storeName) {
	if (!this._lastState) {
		return Promise.reject(new Error(ERROR_STATE));
	}
	if (typeof (storeName) !== 'string') {
		return Promise.resolve(null);
	}
	if (storeName in this._lastData) {
		var existTime = Date.now() - this._lastData[storeName].createdAt;
		if (existTime <= this._lastData[storeName].lifetime) {
			return Promise.resolve(this._lastData[storeName].data);
		}
		delete this._lastData[storeName];
	}
	var self = this,
		lifetime = DEFAULT_LIFETIME;
	self._eventBus.emit('storeDataLoad', {
		name: storeName
	});
	var store = this.getStore(storeName);
	if (!store) {
		return Promise.reject(new Error(
				util.format(ERROR_STORE_NOT_FOUND, storeName))
		);
	}
	if (typeof (store.$lifetime) === 'number') {
		lifetime = store.$lifetime;
	}
	return self._serialWrapper.invoke(storeName)
		.then(function (data) {
			self._lastData[storeName] = {
				data: data,
				lifetime: lifetime,
				createdAt: Date.now()
			};
			self._eventBus.emit('storeDataLoaded', {
				name: storeName,
				data: data,
				lifetime: lifetime
			});
			return data;
		});
};

/**
 * Sends action to specified store and resolves promises in serial mode.
 * @param {string} storeName Name of the store.
 * @param {string} actionName Name of the action.
 * @param {Object} args Action arguments.
 * @returns {Promise<*>} Promise for action handling result.
 */
StoreDispatcher.prototype.sendAction = function (storeName, actionName, args) {
	if (!this._lastState) {
		return Promise.reject(new Error(ERROR_STATE));
	}
	var self = this,
		actionDetails = {
			storeName: storeName,
			actionName: actionName,
			args: args
		};
	this._eventBus.emit('actionSend', actionDetails);
	var store = this.getStore(storeName);
	if (!store) {
		return Promise.reject(new Error(
			util.format(ERROR_STORE_NOT_FOUND, storeName))
		);
	}
	var handleMethod = moduleHelper.getMethodToInvoke(
		store, 'handle', actionName
	);
	return moduleHelper.getSafePromise(function () {
		return handleMethod(args);
	})
		.then(function (result) {
			self._eventBus.emit('actionSent', actionDetails);
			return result;
		});
};

/**
 * Sends action to every store that has handle method for such action.
 * @param {string} actionName Name of the action.
 * @param {Object} arg Action arguments.
 * @returns {Promise<Array<*>>} Promise for the action handling result.
 */
StoreDispatcher.prototype.sendBroadcastAction = function (actionName, arg) {
	var promises = [],
		self = this,
		storesByNames = this._storeLoader.getStoresByNames(),
		methodName = moduleHelper.getCamelCaseName('handle', actionName);
	Object.keys(storesByNames)
		.forEach(function (storeName) {
			var store = storesByNames[storeName],
				protoMethod = store.constructor.prototype[methodName];
			if (typeof (protoMethod) !== 'function') {
				return;
			}
			var sendActionPromise = self.sendAction(
				store.name, actionName, arg
			);
			promises.push(sendActionPromise);
		});
	return Promise.all(promises);
};

/**
 * Sets new state to store dispatcher and invokes "changed" method for all
 * stores which state have been changed.
 * @param {Object} parameters Map of new parameters.
 * @param {Object} basicContext Basic context for all stores.
 * @returns {Array<string>} Names of stores that have been changed.
 */
StoreDispatcher.prototype.setState = function (parameters, basicContext) {
	parameters = parameters || Object.create(null);
	if (!this._lastState) {
		this._currentBasicContext = basicContext;
		this._lastState = parameters;
		return [];
	}

	// some store's parameters can be removed since last time
	var self = this,
		changed = Object.create(null);

	Object.keys(this._lastState)
		.filter(function (storeName) {
			return !(storeName in parameters);
		})
		.forEach(function (name) {
			changed[name] = true;
		});

	Object.keys(parameters)
		.forEach(function (storeName) {
			// new parameters were set for store
			if (!(storeName in self._lastState)) {
				changed[storeName] = true;
				return;
			}

			// new and last parameters has different values
			var lastParameterNames =
					Object.keys(self._lastState[storeName]),
				currentParameterNames =
					Object.keys(parameters[storeName]);

			if (currentParameterNames.length !==
				lastParameterNames.length) {
				changed[storeName] = true;
				return;
			}

			currentParameterNames.every(function (parameterName) {
				if (parameters[storeName][parameterName] !==
					self._lastState[storeName][parameterName]) {
					changed[storeName] = true;
					return false;
				}
				return true;
			});
		});

	this._lastState = parameters;
	if (this._currentBasicContext !== basicContext) {
		this._currentBasicContext = basicContext;
		Object.keys(this._storeInstances)
			.forEach(function (storeName) {
				self._storeInstances[storeName].$context =
					self._getStoreContext(storeName);
			});
	}

	var changedStoreNames = Object.create(null);
	Object.keys(changed)
		.forEach(function (storeName) {
			var store = self.getStore(storeName);
			if (!store) {
				return;
			}
			store.$context.changed()
				.forEach(function (name) {
					changedStoreNames[name] = true;
				});
		});

	this._eventBus.emit('stateChanged', {
		oldState: this._lastState,
		newState: parameters
	});
	return Object.keys(changedStoreNames);
};

/**
 * Gets context for store using component's context as a prototype.
 * @param {string} storeName Name of store.
 * @returns {Object} Store context.
 * @private
 */
StoreDispatcher.prototype._getStoreContext = function (storeName) {
	var self = this,
		storeContext = Object.create(this._currentBasicContext);
	storeContext.name = storeName;
	storeContext.state = this._lastState[storeName] || Object.create(null);
	storeContext.changed = function () {
		var walked = Object.create(null),
			current,
			toChange = [storeName];

		while (toChange.length > 0) {
			current = toChange.shift();
			if (current in walked) {
				continue;
			}
			walked[current] = true;
			if (current in self._dependants) {
				toChange = toChange.concat(
					Object.keys(self._dependants[current])
				);
			}
			delete self._lastData[current];
			self._eventBus.emit('storeChanged', current);
		}
		return Object.keys(walked);
	};
	storeContext.getStoreData = function (sourceStoreName) {
		if (sourceStoreName === storeName) {
			return Promise.resolve(null);
		}
		return self.getStoreData(sourceStoreName);
	};
	storeContext.setDependency = function (name) {
		if (!(name in self._dependants)) {
			self._dependants[name] = Object.create(null);
		}
		self._dependants[name][storeName] = true;
	};
	storeContext.unsetDependency = function (name) {
		if (!(name in self._dependants)) {
			return;
		}
		delete self._dependants[name][storeName];
	};
	storeContext.sendAction = function (storeName, name, args) {
		return self.sendAction(storeName, name, args);
	};
	storeContext.sendBroadcastAction = function (name, args) {
		return self.sendBroadcastAction(name, args);
	};

	return storeContext;
};

/**
 * Gets store instance and creates it if required.
 * @param {string} storeName Name of store.
 * @returns {Promise<Object>} Promise for store.
 */
StoreDispatcher.prototype.getStore = function (storeName) {
	if (!storeName) {
		return null;
	}
	var store = this._storeInstances[storeName];
	if (store) {
		return store;
	}
	var self = this;

	var stores = self._storeLoader.getStoresByNames(),
		config = self._serviceLocator.resolve('config');
	if (!(storeName in stores)) {
		return null;
	}

	var constructor = stores[storeName].constructor;
	constructor.prototype.$context = self._getStoreContext(storeName);
	self._storeInstances[storeName] = self._serviceLocator
		.resolveInstance(constructor, config);
	self._storeInstances[storeName].$context = constructor.prototype.$context;

	self._serialWrapper.add(storeName, function () {
		var loadMethod = moduleHelper.getMethodToInvoke(
			self._storeInstances[storeName], 'load'
		);
		return moduleHelper.getSafePromise(loadMethod);
	});
	return self._storeInstances[storeName];
};
},{"./SerialWrapper":40,"./helpers/moduleHelper":49,"util":68}],42:[function(require,module,exports){
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

'use strict';

module.exports = BootstrapperBase;

var util = require('util'),
	moduleHelper = require('../helpers/moduleHelper'),
	hrTimeHelper = require('../helpers/hrTimeHelper'),
	uhr = require('catberry-uhr'),
	Promise = require('promise'),
	StateProvider = require('../providers/StateProvider'),
	StoreLoader = require('../loaders/StoreLoader'),
	ComponentLoader = require('../loaders/ComponentLoader'),
	DocumentRenderer = require('../DocumentRenderer'),
	RequestRouter = require('../RequestRouter'),
	ModuleApiProviderBase = require('../base/ModuleApiProviderBase'),
	ContextFactory = require('../ContextFactory'),
	EventEmitter = require('events').EventEmitter;

var INFO_COMPONENT_LOADED = 'Component "%s" loaded',
	INFO_STORE_LOADED = 'Store "%s" loaded',
	INFO_ALL_STORES_LOADED = 'All stores loaded',
	INFO_ALL_COMPONENTS_LOADED = 'All components loaded',
	DEBUG_DOCUMENT_RENDERED = 'Document rendered for URI %s',
	DEBUG_RENDER_COMPONENT = 'Component "%s%s" is being rendered...',
	DEBUG_COMPONENT_RENDERED = 'Component "%s%s" rendered%s';

/**
 * Creates new instance of base Catberry bootstrapper.
 * @param {Function} catberryConstructor Constructor
 * of the Catberry's main module.
 * @constructor
 */
function BootstrapperBase(catberryConstructor) {
	this._catberryConstructor = catberryConstructor;
}

/**
 * Current constructor of the Catberry's main module.
 * @type {Function}
 * @private
 */
BootstrapperBase.prototype._catberryConstructor = null;

/**
 * Creates new full-configured instance of the Catberry application.
 * @param {Object?} configObject Configuration object.
 * @returns {Catberry} Catberry application instance.
 */
BootstrapperBase.prototype.create = function (configObject) {
	var currentConfig = configObject || {},
		catberry = new this._catberryConstructor();

	this.configure(currentConfig, catberry.locator);
	catberry.events = catberry.locator.resolveInstance(ModuleApiProviderBase);
	return catberry;
};

/**
 * Configures locator with all required type registrations.
 * @param {Object} configObject Configuration object.
 * @param {ServiceLocator} locator Service locator to configure.
 */
BootstrapperBase.prototype.configure = function (configObject, locator) {
	var eventBus = new EventEmitter();
	eventBus.setMaxListeners(0);
	locator.registerInstance('promise', Promise);
	locator.registerInstance('eventBus', eventBus);
	locator.registerInstance('config', configObject);
	locator.register('stateProvider', StateProvider, configObject, true);
	locator.register('contextFactory', ContextFactory, configObject, true);
	locator.register('storeLoader', StoreLoader, configObject, true);
	locator.register('componentLoader', ComponentLoader, configObject, true);
	locator.register('documentRenderer', DocumentRenderer, configObject, true);
	locator.register('requestRouter', RequestRouter, configObject, true);

	uhr.register(locator);
};

/**
 * Wraps event bus with log messages.
 * @param {Object} config Application config.
 * @param {EventEmitter} eventBus Event emitter that implements event bus.
 * @param {Logger} logger Logger to write messages.
 * @protected
 */
BootstrapperBase.prototype._wrapEventsWithLogger =
	function (config, eventBus, logger) {
		var isRelease = Boolean(config.isRelease);
		eventBus
			.on('componentLoaded', function (args) {
				logger.info(util.format(INFO_COMPONENT_LOADED, args.name));
			})
			.on('storeLoaded', function (args) {
				logger.info(util.format(INFO_STORE_LOADED, args.name));
			})
			.on('allStoresLoaded', function () {
				logger.info(INFO_ALL_STORES_LOADED);
			})
			.on('allComponentsLoaded', function () {
				logger.info(INFO_ALL_COMPONENTS_LOADED);
			})
			.on('error', function (error) {
				logger.error(error);
			});

		if (isRelease) {
			return;
		}
		eventBus
			.on('componentRender', function (args) {
				var id = args.context.attributes[moduleHelper.ATTRIBUTE_ID];
				logger.debug(util.format(DEBUG_RENDER_COMPONENT,
					moduleHelper.getTagNameForComponentName(args.name),
					id ? '#' + id : ''
				));
			})
			.on('componentRendered', function (args) {
				var id = args.context.attributes[moduleHelper.ATTRIBUTE_ID];
				logger.debug(util.format(
					DEBUG_COMPONENT_RENDERED,
					moduleHelper.getTagNameForComponentName(args.name),
					id ? '#' + id : '',
					util.isArray(args.hrTime) ?
						' (' + hrTimeHelper.toMessage(args.hrTime) + ')' : ''
				));
			})
			.on('documentRendered', function (args) {
				logger.debug(util.format(
					DEBUG_DOCUMENT_RENDERED, args.location.toString()
				));
			});
	};
},{"../ContextFactory":39,"../DocumentRenderer":31,"../RequestRouter":33,"../base/ModuleApiProviderBase":47,"../helpers/hrTimeHelper":34,"../helpers/moduleHelper":49,"../loaders/ComponentLoader":35,"../loaders/StoreLoader":36,"../providers/StateProvider":52,"catberry-uhr":21,"events":53,"promise":59,"util":68}],43:[function(require,module,exports){
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

'use strict';

module.exports = CatberryBase;

var ServiceLocator = require('catberry-locator');

/**
 * Creates new instance of the basic Catberry application module.
 * @constructor
 */
function CatberryBase() {
	this.locator = new ServiceLocator();
	this.locator.registerInstance('serviceLocator', this.locator);
	this.locator.registerInstance('catberry', this);
}

/**
 * Current version of catberry.
 */
CatberryBase.prototype.version = '7.1.2';

/**
 * Current object with events.
 * @type {ModuleApiProvider}
 */
CatberryBase.prototype.events = null;

/**
 * Current service locator.
 * @type {ServiceLocator}
 */
CatberryBase.prototype.locator = null;
},{"catberry-locator":19}],44:[function(require,module,exports){
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

'use strict';

module.exports = CookieWrapperBase;

var util = require('util');

/**
 * Creates new instance of the basic cookie wrapper.
 * @constructor
 */
function CookieWrapperBase() {
}

/**
 * Gets map of cookie values by name.
 * @returns {Object} Cookies map by names.
 */
CookieWrapperBase.prototype.getAll = function () {
	var string = this.getCookieString();
	return this._parseCookieString(string);
};

/**
 * Gets cookie value by name.
 * @param {string} name Cookie name.
 * @returns {string} Cookie value.
 */
CookieWrapperBase.prototype.get = function (name) {
	if (typeof (name) !== 'string') {
		return '';
	}

	return this.getAll()[name] || '';
};

/**
 * Parses cookie string into map of cookie key/value pairs.
 * @param {string} string Cookie string.
 * @returns {Object} Object with cookie values by keys.
 * @protected
 */
CookieWrapperBase.prototype._parseCookieString = function (string) {
	var cookie = Object.create(null);

	if (typeof (string) !== 'string') {
		return cookie;
	}
	string
		.split(/; */)
		.forEach(function (cookiePair) {
			var equalsIndex = cookiePair.indexOf('=');
			if (equalsIndex < 0) {
				return;
			}

			var key = cookiePair.substr(0, equalsIndex).trim(),
				value = cookiePair.substr(
					equalsIndex + 1, cookiePair.length
				).trim();

			value = value.replace(/^"|"$/g, '');
			cookie[key] = value;
		});

	return cookie;
};

/**
 * Converts cookie setup object to cookie string.
 * @param {Object} cookieSetup Cookie setup object.
 * @param {string} cookieSetup.key Cookie key.
 * @param {string} cookieSetup.value Cookie value.
 * @param {number?} cookieSetup.maxAge Max cookie age in seconds.
 * @param {Date?} cookieSetup.expires Expire date.
 * @param {string?} cookieSetup.path URI path for cookie.
 * @param {string?} cookieSetup.domain Cookie domain.
 * @param {boolean?} cookieSetup.secure Is cookie secured.
 * @param {boolean?} cookieSetup.httpOnly Is cookie HTTP only.
 * @returns {string} Cookie string.
 * @protected
 */
CookieWrapperBase.prototype._convertToCookieSetup = function (cookieSetup) {
	if (typeof (cookieSetup.key) !== 'string' ||
		typeof (cookieSetup.value) !== 'string') {
		throw new Error('Wrong key or value');
	}

	var cookie = cookieSetup.key + '=' + cookieSetup.value;

	// http://tools.ietf.org/html/rfc6265#section-4.1.1
	if (typeof (cookieSetup.maxAge) === 'number') {
		cookie += '; Max-Age=' + cookieSetup.maxAge.toFixed();
		if (!cookieSetup.expires) {
			// by default expire date = current date + max-age in seconds
			cookieSetup.expires = new Date(Date.now() +
				cookieSetup.maxAge * 1000);
		}
	}
	if (cookieSetup.expires instanceof Date) {
		cookie += '; Expires=' + cookieSetup.expires.toUTCString();
	}
	if (typeof (cookieSetup.path) === 'string') {
		cookie += '; Path=' + cookieSetup.path;
	}
	if (typeof (cookieSetup.domain) === 'string') {
		cookie += '; Domain=' + cookieSetup.domain;
	}
	if (typeof (cookieSetup.secure) === 'boolean' &&
		cookieSetup.secure) {
		cookie += '; Secure';
	}
	if (typeof (cookieSetup.httpOnly) === 'boolean' &&
		cookieSetup.httpOnly) {
		cookie += '; HttpOnly';
	}

	return cookie;
};
},{"util":68}],45:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = DocumentRendererBase;

/**
 * Creates new instance of the basic document renderer.
 * @param {ServiceLocator} $serviceLocator Locator to resolve dependencies.
 * @constructor
 */
function DocumentRendererBase($serviceLocator) {
	var self = this;
	this._serviceLocator = $serviceLocator;
	this._contextFactory = $serviceLocator.resolve('contextFactory');
	this._componentLoader = $serviceLocator.resolve('componentLoader');
	this._eventBus = $serviceLocator.resolve('eventBus');

	var storeLoader = $serviceLocator.resolve('storeLoader');
	this._loading = Promise.all([
		this._componentLoader.load(),
		storeLoader.load()
	])
		.then(function () {
			self._loading = null;
			self._eventBus.emit('ready');
		})
		.catch(function (reason) {
			self._eventBus.emit('error', reason);
		});
}

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @protected
 */
DocumentRendererBase.prototype._serviceLocator = null;

/**
 * Current component loader.
 * @type {ComponentLoader}
 * @protected
 */
DocumentRendererBase.prototype._componentLoader = null;

/**
 * Current module loading promise.
 * @type {Promise}
 * @protected
 */
DocumentRendererBase.prototype._loading = null;

/**
 * Current context factory.
 * @type {ContextFactory}
 * @protected
 */
DocumentRendererBase.prototype._contextFactory = null;

/**
 * Gets promise for ready state when it will be able handle requests.
 * @returns {Promise} Promise for nothing.
 * @protected
 */
DocumentRendererBase.prototype._getPromiseForReadyState = function () {
	return this._loading ?
		this._loading :
		Promise.resolve();
};
},{}],46:[function(require,module,exports){
/*
 * catberry
 *
 * Copyright (c) 2015 Denis Rechkunov and project contributors.
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

'use strict';

module.exports = LoaderBase;

/**
 * Create basic implementation of a module loader.
 * @param {Array} transforms Array of module transformations.
 * @constructor
 */
function LoaderBase(transforms) {
	this._transforms = transforms;
}

/**
 * Current list of component transforms.
 * @type {Array}
 * @private
 */
LoaderBase.prototype._transforms = null;

/**
 * Applies all transformations registered in Service Locator.
 * @param {Object} module Loaded module.
 * @param {number?} index Transformation index in a list.
 * @returns {Promise<Object>} Transformed module.
 * @protected
 */
LoaderBase.prototype._applyTransforms = function (module, index) {
	if (index === undefined) {
		// the list is a stack, we should reverse it
		index = this._transforms.length - 1;
	}

	if (index < 0) {
		return Promise.resolve(module);
	}

	var self = this,
		transformation = this._transforms[index];

	return Promise.resolve()
		.then(function () {
			return transformation.transform(module);
		})
		.then(function (transformedModule) {
			return self._applyTransforms(transformedModule, index - 1);
		});
};
},{}],47:[function(require,module,exports){
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

'use strict';

module.exports = ModuleApiProviderBase;

var ERROR_EVENT_NAME = 'Event name should be a string',
	ERROR_EVENT_HANDLER = 'Event handler should be a function';

/**
 * Creates new instance of the basic API provider.
 * @param {ServiceLocator} $serviceLocator Service locator
 * to resolve dependencies.
 * @constructor
 */
function ModuleApiProviderBase($serviceLocator) {
	this.locator = $serviceLocator;
	this.cookie = $serviceLocator.resolve('cookieWrapper');
	this._eventBus = $serviceLocator.resolve('eventBus');
}

/**
 * Current cookie provider.
 * @type {CookieWrapper}
 */
ModuleApiProviderBase.prototype.cookie = null;

/**
 * Current service locator.
 * @type {ServiceLocator}
 * @protected
 */
ModuleApiProviderBase.prototype.locator = null;

/**
 * Current event bus.
 * @type {EventEmitter}
 * @private
 */
ModuleApiProviderBase.prototype._eventBus = null;

/**
 * Subscribes on the specified event in Catberry.
 * @param {string} eventName Name of the event.
 * @param {Function} handler Event handler.
 * @returns {ModuleApiProviderBase} This object for chaining.
 */
ModuleApiProviderBase.prototype.on = function (eventName, handler) {
	checkEventNameAndHandler(eventName, handler);
	this._eventBus.on(eventName, handler);
	return this;
};

/**
 * Subscribes on the specified event in Catberry to handle once.
 * @param {string} eventName Name of the event.
 * @param {Function} handler Event handler.
 * @returns {ModuleApiProviderBase} This object for chaining.
 */
ModuleApiProviderBase.prototype.once = function (eventName, handler) {
	checkEventNameAndHandler(eventName, handler);
	this._eventBus.once(eventName, handler);
	return this;
};

/**
 * Removes the specified handler from the specified event.
 * @param {string} eventName Name of the event.
 * @param {Function} handler Event handler.
 * @returns {ModuleApiProviderBase} This object for chaining.
 */
ModuleApiProviderBase.prototype.removeListener = function (eventName, handler) {
	checkEventNameAndHandler(eventName, handler);
	this._eventBus.removeListener(eventName, handler);
	return this;
};

/**
 * Removes all handlers from the specified event in Catberry.
 * @param {string} eventName Name of the event.
 * @returns {ModuleApiProviderBase} This object for chaining.
 */
ModuleApiProviderBase.prototype.removeAllListeners = function (eventName) {
	checkEventNameAndHandler(eventName, dummy);
	this._eventBus.removeAllListeners(eventName);
	return this;
};

/**
 * Checks if event name is a string and handler is a function.
 * @param {*} eventName Name of the event to check.
 * @param {*} handler The event handler to check.
 */
function checkEventNameAndHandler(eventName, handler) {
	if (typeof (eventName) !== 'string') {
		throw new Error(ERROR_EVENT_NAME);
	}

	if (typeof (handler) !== 'function') {
		throw new Error(ERROR_EVENT_HANDLER);
	}
}

/**
 * Does nothing. It is used as a default callback.
 */
function dummy() {}

},{}],48:[function(require,module,exports){
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

'use strict';

var util = require('util');

var TITLE = 'Catberry@7.1.2 (' +
		'<a href="https://github.com/catberry/catberry/issues" ' +
		'target="_blank">' +
		'report an issue' +
		'</a>' +
		')',
	AMP = /&/g,
	LT = /</g,
	GT = />/g,
	QUOT = /\"/g,
	SINGLE_QUOT = /\'/g,
	ERROR_MESSAGE_REGEXP = /^(?:[\w$]+): (?:.+)\r?\n/i,
	ERROR_MESSAGE_FORMAT = '<span ' +
		'style="color: red; font-size: 16pt; font-weight: bold;">' +
		'%s%s' +
		'</span>',
	NEW_LINE = /\r?\n/g;

module.exports = {
	/**
	 * Prints error with pretty formatting.
	 * @param {Error} error Error to print.
	 * @param {string} userAgent User agent information.
	 * @returns {string} HTML with all information about error.
	 */
	prettyPrint: function (error, userAgent) {
		if (!error || typeof (error) !== 'object') {
			return '';
		}
		var dateString = (new Date()).toUTCString() + ';<br/>',
			userAgentString = (userAgent ? (userAgent + ';<br/>') : ''),
			name = (typeof (error.name) === 'string' ? error.name + ': ' : ''),
			message = String(error.message || ''),
			stack = String(error.stack || '').replace(ERROR_MESSAGE_REGEXP, ''),
			fullMessage = util.format(
				ERROR_MESSAGE_FORMAT, escape(name), escape(message)
			);

		return '<div style="background-color: white; font-size: 12pt;">' +
			dateString +
			userAgentString +
			TITLE + '<br/><br/>' +
			fullMessage + '<br/><br/>' +
			escape(stack) +
			'</div>';
	}
};

/**
 * Escapes error text.
 * @param {string} value Error text.
 * @returns {string} escaped and formatted string.
 */
function escape(value) {
	return value
		.replace(AMP, '&amp;')
		.replace(LT, '&lt;')
		.replace(GT, '&gt;')
		.replace(QUOT, '&quot;')
		.replace(SINGLE_QUOT, '&#39;')
		.replace(NEW_LINE, '<br/>');
}
},{"util":68}],49:[function(require,module,exports){
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

'use strict';

var helper = {
	COMPONENT_PREFIX: 'cat-',
	COMPONENT_PREFIX_REGEXP: /^cat-/i,
	COMPONENT_ERROR_TEMPLATE_POSTFIX: '--error',
	DOCUMENT_COMPONENT_NAME: 'document',
	DOCUMENT_ELEMENT_NAME: 'html',
	HEAD_COMPONENT_NAME: 'head',
	ATTRIBUTE_ID: 'id',
	ATTRIBUTE_STORE: 'cat-store',
	DEFAULT_LOGIC_FILENAME: 'index.js',

	/**
	 * Creates name for error template of component.
	 * @param {string} componentName name of component.
	 * @returns {string} Name of error template of the component.
	 */
	getNameForErrorTemplate: function (componentName) {
		if (typeof (componentName) !== 'string') {
			return '';
		}
		return componentName + helper.COMPONENT_ERROR_TEMPLATE_POSTFIX;
	},

	/**
	 * Determines if specified component name is the "document" component name.
	 * @param {string} componentName Name of the component.
	 * @returns {boolean} True if specified component is the "document" component.
	 */
	isDocumentComponent: function (componentName) {
		return componentName.toLowerCase() === helper.DOCUMENT_COMPONENT_NAME;
	},
	/**
	 * Determines if specified component name is the "head" component name.
	 * @param {string} componentName Name of the component.
	 * @returns {boolean} True if specified component is the "head" component.
	 */
	isHeadComponent: function (componentName) {
		return componentName.toLowerCase() === helper.HEAD_COMPONENT_NAME;
	},

	/**
	 * Gets the original component name without prefix.
	 * @param {string} fullComponentName Full component name (tag name).
	 * @returns {string} The original component name without prefix.
	 */
	getOriginalComponentName: function (fullComponentName) {
		if (typeof (fullComponentName) !== 'string') {
			return '';
		}
		fullComponentName = fullComponentName.toLowerCase();
		if (fullComponentName === helper.HEAD_COMPONENT_NAME) {
			return fullComponentName;
		}
		if (fullComponentName === helper.DOCUMENT_COMPONENT_NAME ||
			fullComponentName === helper.DOCUMENT_ELEMENT_NAME) {
			return helper.DOCUMENT_COMPONENT_NAME;
		}
		return fullComponentName.replace(helper.COMPONENT_PREFIX_REGEXP, '');
	},

	/**
	 * Gets valid tag name for component.
	 * @param {string} componentName Name of the component.
	 * @returns {string} Name of the tag.
	 */
	getTagNameForComponentName: function (componentName) {
		if (typeof (componentName) !== 'string') {
			return '';
		}
		var upperComponentName = componentName.toUpperCase();
		if (componentName === helper.HEAD_COMPONENT_NAME) {
			return upperComponentName;
		}
		if (componentName === helper.DOCUMENT_COMPONENT_NAME) {
			return helper.DOCUMENT_ELEMENT_NAME.toUpperCase();
		}
		return helper.COMPONENT_PREFIX.toUpperCase() + upperComponentName;
	},

	/**
	 * Gets method of the module that can be invoked.
	 * @param {Object} module Module implementation.
	 * @param {string} prefix Method prefix (i.e. handle).
	 * @param {string?} name Name of the entity to invoke method for
	 * (will be converted to camel casing).
	 * @returns {Function} Method to invoke.
	 */
	getMethodToInvoke: function (module, prefix, name) {
		if (!module || typeof (module) !== 'object') {
			return defaultPromiseMethod;
		}
		var methodName = helper.getCamelCaseName(prefix, name);
		if (typeof (module[methodName]) === 'function') {
			return module[methodName].bind(module);
		}
		if (typeof (module[prefix]) === 'function') {
			return module[prefix].bind(module, name);
		}

		return defaultPromiseMethod;
	},

	/**
	 * Gets name in camel casing for everything.
	 * @param {string} prefix Prefix for the name.
	 * @param {string} name Name to convert.
	 */
	getCamelCaseName: function (prefix, name) {
		if (!name) {
			return '';
		}
		var parts = name.split(/[^a-z0-9]/i),
			camelCaseName = String(prefix || '');

		parts.forEach(function (part) {
			if (!part) {
				return;
			}

			// first character in method name must be in lowercase
			camelCaseName += camelCaseName ?
				part[0].toUpperCase() :
				part[0].toLowerCase();
			camelCaseName += part.substring(1);
		});

		return camelCaseName;
	},

	/**
	 * Gets safe promise resolved from action.
	 * @param {Function} action Action to wrap with safe promise.
	 * @returns {Promise} Promise for done action.
	 */
	getSafePromise: function (action) {
		var result;
		try {
			result = action();
		} catch (e) {
			return Promise.reject(e);
		}
		return Promise.resolve(result);
	}
};

module.exports = helper;

/**
 * Just returns resolved promise.
 * @returns {Promise} Promise for nothing.
 */
function defaultPromiseMethod() {
	return Promise.resolve();
}
},{}],50:[function(require,module,exports){
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

'use strict';

module.exports = {
	/**
	 * Defines read-only property.
	 * @param {Object} object Object to define property in.
	 * @param {string} name Name of the property.
	 * @param {*} value Property value.
	 */
	defineReadOnly: function (object, name, value) {
		Object.defineProperty(object, name, {
			enumerable: false,
			configurable: false,
			writable: false,
			value: value
		});
	}
};
},{}],51:[function(require,module,exports){
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

'use strict';

var util = require('util'),
	URI = require('catberry-uri').URI;

var URI_PATH_REPLACEMENT_REG_EXP_SOURCE = '([^\\/\\\\]*)',
	URI_QUERY_REPLACEMENT_REG_EXP_SOURCE = '([^&?=]*)';

var PATH_END_SLASH_REG_EXP = /(.+)\/($|\?|#)/,
	EXPRESSION_ESCAPE_REG_EXP = /[\-\[\]\{\}\(\)\*\+\?\.\\\^\$\|]/g,
	IDENTIFIER_REG_EXP_SOURCE = '[$A-Z_][\\dA-Z_$]*',
	STORE_LIST_REG_EXP_SOURCE = '(?:(?:\\\\[[ ]*' +
		'[^\\[\\],]+' +
		'([ ]*,[ ]*' +
		'[^\\[\\],]+' +
		')*[ ]*\\\\])|(?:\\\\[[ ]*\\\\]))?',
	PARAMETER_REG_EXP = new RegExp(
			':' +
			IDENTIFIER_REG_EXP_SOURCE +
			STORE_LIST_REG_EXP_SOURCE, 'gi'),
	SLASHED_BRACKETS_REG_EXP = /\\\[|\\\]/,
	STORE_LIST_SEPARATOR = ',';

module.exports = {
	/**
	 * Removes slash from the end of URI path.
	 * @param {string} uriPath URI path to process.
	 * @returns {string} URI without end slash.
	 */
	removeEndSlash: function (uriPath) {
		if (!uriPath || typeof (uriPath) !== 'string') {
			return '';
		}
		if (uriPath === '/') {
			return uriPath;
		}
		return uriPath.replace(PATH_END_SLASH_REG_EXP, '$1$2');
	},
	/**
	 * Gets URI mapper from the route expression like
	 * /some/:id[store1, store2, store3]/details?filter=:filter[store3].
	 * @param {URI} routeUri Expression that defines route.
	 * @returns {{expression: RegExp, map: Function}?} URI mapper object.
	 * URI mapper object.
	 */
	compileRoute: function (routeUri) {
		if (!routeUri) {
			return null;
		}

		// escape regular expression characters
		var escaped = routeUri.path.replace(
			EXPRESSION_ESCAPE_REG_EXP, '\\$&'
		);

		// get all occurrences of routing parameters in URI path
		var regExpSource = '^' + escaped.replace(
					PARAMETER_REG_EXP,
					URI_PATH_REPLACEMENT_REG_EXP_SOURCE) + '$',
			expression = new RegExp(regExpSource, 'i'),
			queryMapper,
			pathMapper,
			pathParameterMatches = escaped.match(
				PARAMETER_REG_EXP
			),
			pathParameters = pathParameterMatches ?
				pathParameterMatches.map(getParameterDescriptor) : null;

		if (pathParameters) {
			pathMapper = createUriPathMapper(expression, pathParameters);
		}

		if (routeUri.query) {
			var queryParameters = Object.create(null);
			Object.keys(routeUri.query.values)
				.forEach(function (name) {
					// arrays in routing definitions are not supported
					if (util.isArray(routeUri.query.values[name])) {
						return;
					}

					// escape regular expression characters
					var escaped = routeUri.query.values[name].replace(
						EXPRESSION_ESCAPE_REG_EXP, '\\$&'
					);

					// get all occurrences of routing parameters in URI path
					var regExpSource = '^' + escaped.replace(
							PARAMETER_REG_EXP,
							URI_QUERY_REPLACEMENT_REG_EXP_SOURCE) + '$';
					var queryParameterMatches = escaped.match(
							PARAMETER_REG_EXP
						);
					if (!queryParameterMatches ||
						queryParameterMatches.length === 0) {
						return;
					}

					var parameter = getParameterDescriptor(
						queryParameterMatches[queryParameterMatches.length - 1]
					);
					var expression = new RegExp(regExpSource, 'i');
					parameter.map = createUriQueryValueMapper(expression);
					queryParameters[name] = parameter;
				});
			queryMapper = createUriQueryMapper(queryParameters);
		}

		return {
			expression: expression,
			map: function (uri) {
				var state = Object.create(null);
				if (pathMapper) {
					pathMapper(uri.path, state);
				}

				if (queryMapper && uri.query) {
					queryMapper(uri.query.values, state);
				}

				return state;
			}
		};
	}
};

/**
 * Creates new URI path-to-state object mapper.
 * @param {RegExp} expression Regular expression to match URI path.
 * @param {Array} parameters List of parameter descriptors.
 * @returns {Function} URI mapper function.
 */
function createUriPathMapper(expression, parameters) {
	return function (uriPath, state) {
		var matches = uriPath.match(expression);
		if (!matches || matches.length < 2) {
			return state;
		}

		// start with second match because first match is always
		// the whole URI path
		matches = matches.splice(1);

		parameters.forEach(function (parameter, index) {
			var value = matches[index];
			try {
				value = decodeURIComponent(value);
			} catch (e) {
				// nothing to do
			}
			parameter.storeNames.forEach(function (storeName) {
				if (!state[storeName]) {
					state[storeName] = Object.create(null);
				}
				state[storeName][parameter.name] = value;
			});
		});
	};
}

/**
 * Creates new URI query-to-state object mapper.
 * @param {Object} parameters List of possible query parameter descriptors by
 * query parameter names.
 * @returns {Function} URI mapper function.
 */
function createUriQueryMapper(parameters) {
	return function (queryValues, state) {
		queryValues = queryValues || Object.create(null);

		Object.keys(queryValues)
			.forEach(function (queryKey) {
				var parameter = parameters[queryKey];
				if (!parameter) {
					return;
				}

				var value = util.isArray(queryValues[queryKey]) ?
						queryValues[queryKey]
							.map(parameter.map)
							.filter(function (value) {
								return value !== null;
							}) :
						parameter.map(queryValues[queryKey]);

				if (value === null) {
					return;
				}
				parameter.storeNames.forEach(function (storeName) {
					if (!state[storeName]) {
						state[storeName] = Object.create(null);
					}
					state[storeName][parameter.name] = value;
				});
			});
	};
}

/**
 * Maps query parameter value using the parameters expression.
 * @param {RegExp} expression Regular expression to get parameter value.
 * @returns {Function} URI query string parameter value mapper function.
 */
function createUriQueryValueMapper(expression) {
	return function (value) {
		value = value
			.toString()
			// we have to temporary encode these characters for not breaking
			// expression parsing, because it's terminated by query separator
			.replace(/=/g, '%3D')
			.replace(/\?/g, '%3F')
			.replace(/&/g, '%26');
		var matches = value.match(expression);
		if (!matches || matches.length === 0) {
			return null;
		}

		// the value is the second item, the first is a whole string
		var mappedValue = matches[matches.length - 1];
		try {
			mappedValue = decodeURIComponent(mappedValue);
		} catch (e) {
			// nothing to do
		}

		return mappedValue;
	};
}

/**
 * Gets description of parameters from its expression.
 * @param {string} parameter Parameter expression.
 * @returns {{name: string, storeNames: Array}} Parameter descriptor.
 */
function getParameterDescriptor(parameter) {
	var parts = parameter.split(SLASHED_BRACKETS_REG_EXP);

	return {
		name: parts[0]
			.trim()
			.substring(1),
		storeNames: (parts[1] ? parts[1] : '')
			.split(STORE_LIST_SEPARATOR)
			.map(function (storeName) {
				return storeName.trim();
			})
			.filter(function (storeName) {
				return storeName.length > 0;
			})
	};
}
},{"catberry-uri":23,"util":68}],52:[function(require,module,exports){
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

'use strict';

module.exports = StateProvider;

var routeHelper = require('./../helpers/routeHelper'),
	catberryUri = require('catberry-uri'),
	URI = catberryUri.URI;

/**
 * Create new instance of the state provider.
 * @param {ServiceLocator} $serviceLocator Service locator
 * to resolve URI mappers.
 * @constructor
 */
function StateProvider($serviceLocator) {
	this._uriMappers = getUriMappers($serviceLocator);
}

/**
 * Current list of URI mappers.
 * @type {Array}
 * @private
 */
StateProvider.prototype._uriMappers = null;

/**
 * Gets state by specified location URI.
 * @param {URI} location URI location.
 * @returns {Object?} State object.
 */
StateProvider.prototype.getStateByUri = function (location) {
	if (this._uriMappers.length === 0) {
		return null;
	}

	location = location.clone();

	location.path = routeHelper.removeEndSlash(location.path);
	var state = getState(this._uriMappers, location);

	if (!state) {
		return null;
	}

	// make state object immutable
	Object.keys(state)
		.forEach(function (storeName) {
			Object.freeze(state[storeName]);
		});
	Object.freeze(state);

	return state;
};

/**
 * Gets list of URI mappers.
 * @param {ServiceLocator} serviceLocator Service locator to get route
 * definitions.
 * @returns {Array} List of URI mappers.
 */
function getUriMappers(serviceLocator) {
	var uriMappers = [];

	serviceLocator.resolveAll('routeDefinition')
		.forEach(function (route) {
			// just colon-parametrized string
			if (typeof (route) === 'string') {
				var routeUri = new URI(route);
				routeUri.path = routeHelper.removeEndSlash(routeUri.path);
				uriMappers.push(routeHelper.compileRoute(routeUri));
				return;
			}

			// extended colon-parametrized mapper
			if (typeof (route) === 'object' &&
				(typeof (route.expression) === 'string') &&
				(route.map instanceof Function)) {
				var mapperUri = new URI(route.expression);
				mapperUri.path = routeHelper.removeEndSlash(mapperUri.path);
				var mapper = routeHelper.compileRoute(mapperUri);
				uriMappers.push({
					expression: mapper.expression,
					map: function (uri) {
						var state = mapper.map(uri);
						return route.map(state);
					}
				});
				return;
			}

			// regular expression mapper
			if (typeof (route) === 'object' &&
				(route.expression instanceof RegExp) &&
				(route.map instanceof Function)) {
				uriMappers.push(route);
			}
		});
	return uriMappers;
}

/**
 * Gets state.
 * @param {Array} uriMappers List of URI mappers.
 * @param {URI} location URI that describes the state.
 * @returns {Object|null} The state from URI.
 */
function getState(uriMappers, location) {
	var state = null;

	uriMappers.some(function (mapper) {
		if (mapper.expression.test(location.path)) {
			state = mapper.map(location) || Object.create(null);
			return true;
		}
		return false;
	});

	return state;
}
},{"./../helpers/routeHelper":51,"catberry-uri":23}],53:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],54:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],55:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jade = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"fs":15}],56:[function(require,module,exports){
// Create a range object for efficently rendering strings to elements.
var range;

var testEl = typeof document !== 'undefined' ? document.body || document.createElement('div') : {};

// Fixes https://github.com/patrick-steele-idem/morphdom/issues/32 (IE7+ support)
// <=IE7 does not support el.hasAttribute(name)
var hasAttribute;
if (testEl.hasAttribute) {
    hasAttribute = function hasAttribute(el, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttribute = function hasAttribute(el, name) {
        return el.getAttributeNode(name);
    };
}

function empty(o) {
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }

    return true;
}
function toElement(str) {
    if (!range && document.createRange) {
        range = document.createRange();
        range.selectNode(document.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = document.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think
     * that "selected" is an attribute when reading
     * over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        if ((fromEl.selected = toEl.selected)) {
            fromEl.setAttribute('selected', '');
        } else {
            fromEl.removeAttribute('selected', '');
        }
    },
    /**
     * The "value" attribute is special for the <input> element
     * since it sets the initial value. Changing the "value"
     * attribute without changing the "value" property will have
     * no effect since it is only used to the set the initial value.
     * Similar for the "checked" attribute.
     */
    INPUT: function(fromEl, toEl) {
        fromEl.checked = toEl.checked;

        if (fromEl.value != toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttribute(toEl, 'checked')) {
            fromEl.removeAttribute('checked');
        }

        if (!hasAttribute(toEl, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value != newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

/**
 * Loop over all of the attributes on the target node and make sure the
 * original DOM node has the same attributes. If an attribute
 * found on the original node is not on the new node then remove it from
 * the original node
 * @param  {HTMLElement} fromNode
 * @param  {HTMLElement} toNode
 */
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrValue;
    var foundAttrs = {};

    for (i=attrs.length-1; i>=0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrValue = attr.value;
            foundAttrs[attrName] = true;

            if (fromNode.getAttribute(attrName) !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Delete any extra attributes found on the original DOM element that weren't
    // found on the target element.
    attrs = fromNode.attributes;

    for (i=attrs.length-1; i>=0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            if (!foundAttrs.hasOwnProperty(attrName)) {
                fromNode.removeAttribute(attrName);
            }
        }
    }
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while(curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        toNode = toElement(toNode);
    }

    var savedEls = {}; // Used to save off DOM elements with IDs
    var unmatchedEls = {};
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeMorphEl = options.onBeforeMorphEl || noop;
    var onBeforeMorphElChildren = options.onBeforeMorphElChildren || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var childrenOnly = options.childrenOnly === true;
    var movedEls = [];

    function removeNodeHelper(node, nestedInSavedEl) {
        var id = getNodeKey(node);
        // If the node has an ID then save it off since we will want
        // to reuse it in case the target DOM tree has a DOM element
        // with the same ID
        if (id) {
            savedEls[id] = node;
        } else if (!nestedInSavedEl) {
            // If we are not nested in a saved element then we know that this node has been
            // completely discarded and will not exist in the final DOM.
            onNodeDiscarded(node);
        }

        if (node.nodeType === 1) {
            var curChild = node.firstChild;
            while(curChild) {
                removeNodeHelper(curChild, nestedInSavedEl || id);
                curChild = curChild.nextSibling;
            }
        }
    }

    function walkDiscardedChildNodes(node) {
        if (node.nodeType === 1) {
            var curChild = node.firstChild;
            while(curChild) {


                if (!getNodeKey(curChild)) {
                    // We only want to handle nodes that don't have an ID to avoid double
                    // walking the same saved element.

                    onNodeDiscarded(curChild);

                    // Walk recursively
                    walkDiscardedChildNodes(curChild);
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    function removeNode(node, parentNode, alreadyVisited) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        parentNode.removeChild(node);
        if (alreadyVisited) {
            if (!getNodeKey(node)) {
                onNodeDiscarded(node);
                walkDiscardedChildNodes(node);
            }
        } else {
            removeNodeHelper(node);
        }
    }

    function morphEl(fromEl, toEl, alreadyVisited, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
            // If an element with an ID is being morphed then it is will be in the final
            // DOM so clear it out of the saved elements collection
            delete savedEls[toElKey];
        }

        if (!childrenOnly) {
            if (onBeforeMorphEl(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);

            if (onBeforeMorphElChildren(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.tagName != 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeId;

            var fromNextSibling;
            var toNextSibling;
            var savedEl;
            var unmatchedEl;

            outer: while(curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeId = getNodeKey(curToNodeChild);

                while(curFromNodeChild) {
                    var curFromNodeId = getNodeKey(curFromNodeChild);
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (!alreadyVisited) {
                        if (curFromNodeId && (unmatchedEl = unmatchedEls[curFromNodeId])) {
                            unmatchedEl.parentNode.replaceChild(curFromNodeChild, unmatchedEl);
                            morphEl(curFromNodeChild, unmatchedEl, alreadyVisited);
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }
                    }

                    var curFromNodeType = curFromNodeChild.nodeType;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        var isCompatible = false;

                        if (curFromNodeType === 1) { // Both nodes being compared are Element nodes
                            if (curFromNodeChild.tagName === curToNodeChild.tagName) {
                                // We have compatible DOM elements
                                if (curFromNodeId || curToNodeId) {
                                    // If either DOM element has an ID then we handle
                                    // those differently since we want to match up
                                    // by ID
                                    if (curToNodeId === curFromNodeId) {
                                        isCompatible = true;
                                    }
                                } else {
                                    isCompatible = true;
                                }
                            }

                            if (isCompatible) {
                                // We found compatible DOM elements so transform the current "from" node
                                // to match the current target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild, alreadyVisited);
                            }
                        } else if (curFromNodeType === 3) { // Both nodes being compared are Text nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }

                        if (isCompatible) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }
                    }

                    // No compatible match so remove the old node from the DOM and continue trying
                    // to find a match in the original DOM
                    removeNode(curFromNodeChild, fromEl, alreadyVisited);
                    curFromNodeChild = fromNextSibling;
                }

                if (curToNodeId) {
                    if ((savedEl = savedEls[curToNodeId])) {
                        morphEl(savedEl, curToNodeChild, true);
                        curToNodeChild = savedEl; // We want to append the saved element instead
                    } else {
                        // The current DOM element in the target tree has an ID
                        // but we did not find a match in any of the corresponding
                        // siblings. We just put the target element in the old DOM tree
                        // but if we later find an element in the old DOM tree that has
                        // a matching ID then we will replace the target element
                        // with the corresponding old element and morph the old element
                        unmatchedEls[curToNodeId] = curToNodeChild;
                    }
                }

                // If we got this far then we did not find a candidate match for our "to node"
                // and we exhausted all of the children "from" nodes. Therefore, we will just
                // append the current "to node" to the end
                fromEl.appendChild(curToNodeChild);

                if (curToNodeChild.nodeType === 1 && (curToNodeId || curToNodeChild.firstChild)) {
                    // The element that was just added to the original DOM may have
                    // some nested elements with a key/ID that needs to be matched up
                    // with other elements. We'll add the element to a list so that we
                    // can later process the nested elements if there are any unmatched
                    // keyed elements that were discarded
                    movedEls.push(curToNodeChild);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is non-null then
            // we still have some from nodes left over that need to be removed
            while(curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                removeNode(curFromNodeChild, fromEl, alreadyVisited);
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.tagName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        // Handle the case where we are given two DOM nodes that are not
        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
        if (morphedNodeType === 1) {
            if (toNodeType === 1) {
                if (fromNode.tagName !== toNode.tagName) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, document.createElement(toNode.tagName));
                }
            } else {
                // Going from an element node to a text node
                morphedNode = toNode;
            }
        } else if (morphedNodeType === 3) { // Text node
            if (toNodeType === 3) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                // Text node to something else
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        // The "to node" was not compatible with the "from node"
        // so we had to toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, false, childrenOnly);

        /**
         * What we will do here is walk the tree for the DOM element
         * that was moved from the target DOM tree to the original
         * DOM tree and we will look for keyed elements that could
         * be matched to keyed elements that were earlier discarded.
         * If we find a match then we will move the saved element
         * into the final DOM tree
         */
        var handleMovedEl = function(el) {
            var curChild = el.firstChild;
            while(curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var savedEl = savedEls[key];
                    if (savedEl && (curChild.tagName === savedEl.tagName)) {
                        curChild.parentNode.replaceChild(savedEl, curChild);
                        morphEl(savedEl, curChild, true /* already visited the saved el tree */);
                        curChild = nextSibling;
                        if (empty(savedEls)) {
                            return false;
                        }
                        continue;
                    }
                }

                if (curChild.nodeType === 1) {
                    handleMovedEl(curChild);
                }

                curChild = nextSibling;
            }
        };

        // The loop below is used to possibly match up any discarded
        // elements in the original DOM tree with elemenets from the
        // target tree that were moved over without visiting their
        // children
        if (!empty(savedEls)) {
            handleMovedElsLoop:
            while (movedEls.length) {
                var movedElsTemp = movedEls;
                movedEls = [];
                for (var i=0; i<movedElsTemp.length; i++) {
                    if (handleMovedEl(movedElsTemp[i]) === false) {
                        // There are no more unmatched elements so completely end
                        // the loop
                        break handleMovedElsLoop;
                    }
                }
            }
        }

        // Fire the "onNodeDiscarded" event for any saved elements
        // that never found a new home in the morphed DOM
        for (var savedElId in savedEls) {
            if (savedEls.hasOwnProperty(savedElId)) {
                var savedEl = savedEls[savedElId];
                onNodeDiscarded(savedEl);
                walkDiscardedChildNodes(savedEl);
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        // If we had to swap out the from node with a new node because the old
        // node was not compatible with the target node then we need to
        // replace the old DOM node in the original DOM tree. This is only
        // possible if the original DOM node was part of a DOM tree which
        // we know is the case if it has a parent node.
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;

},{}],57:[function(require,module,exports){
/*jshint node:true */

"use strict";

var minimalDesc = ['h', 'min', 's', 'ms', 'μs', 'ns'];
var verboseDesc = ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
var convert = [60*60, 60, 1, 1e6, 1e3, 1];

module.exports = function (source, opts) {
	var verbose, precise, i, spot, sourceAtStep, valAtStep, decimals, strAtStep, results, totalSeconds;

	verbose = false;
	precise = false;
	if (opts) {
		verbose = opts.verbose || false;
		precise = opts.precise || false;
	}

	if (!Array.isArray(source) || source.length !== 2) {
		return '';
	}
	if (typeof source[0] !== 'number' || typeof source[1] !== 'number') {
		return '';
	}

	// normalize source array due to changes in node v5.4+
	if (source[1] < 0) {
		totalSeconds = source[0] + source[1] / 1e9;
		source[0] = parseInt(totalSeconds);
		source[1] = parseFloat((totalSeconds % 1).toPrecision(9)) * 1e9;
	}

	results = '';

	// foreach unit
	for (i = 0; i < 6; i++) {
		spot = i < 3 ? 0 : 1; // grabbing first or second spot in source array
		sourceAtStep = source[spot];
		if (i !== 3 && i !== 0) {
			sourceAtStep = sourceAtStep % convert[i-1]; // trim off previous portions
		}
		if (i === 2) {
			sourceAtStep += source[1]/1e9; // get partial seconds from other portion of the array
		}
		valAtStep = sourceAtStep / convert[i]; // val at this unit
		if (valAtStep >= 1) {
			if (verbose) {
				valAtStep = Math.floor(valAtStep); // deal in whole units, subsequent laps will get the decimal portion
			}
			if (!precise) {
				// don't fling too many decimals
				decimals = valAtStep >= 10 ? 0 : 2;
				strAtStep = valAtStep.toFixed(decimals);
			} else {
				strAtStep = valAtStep.toString();
			}
			if (strAtStep.indexOf('.') > -1 && strAtStep[strAtStep.length-1] === '0') {
				strAtStep = strAtStep.replace(/\.?0+$/,''); // remove trailing zeros
			}
			if (results) {
				results += ' '; // append space if we have a previous value
			}
			results += strAtStep; // append the value
			// append units
			if (verbose) {
				results += ' '+verboseDesc[i];
				if (strAtStep !== '1') {
					results += 's';
				}
			} else {
				results += ' '+minimalDesc[i];
			}
			if (!verbose) {
				break; // verbose gets as many groups as necessary, the rest get only one
			}
		}
	}

	return results;
};

},{}],58:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],59:[function(require,module,exports){
'use strict';

module.exports = require('./lib')

},{"./lib":64}],60:[function(require,module,exports){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._45 = 0;
  this._81 = 0;
  this._65 = null;
  this._54 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._10 = null;
Promise._97 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._81 === 3) {
    self = self._65;
  }
  if (Promise._10) {
    Promise._10(self);
  }
  if (self._81 === 0) {
    if (self._45 === 0) {
      self._45 = 1;
      self._54 = deferred;
      return;
    }
    if (self._45 === 1) {
      self._45 = 2;
      self._54 = [self._54, deferred];
      return;
    }
    self._54.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._81 === 1) {
        resolve(deferred.promise, self._65);
      } else {
        reject(deferred.promise, self._65);
      }
      return;
    }
    var ret = tryCallOne(cb, self._65);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._81 = 3;
      self._65 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._81 = 1;
  self._65 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._81 = 2;
  self._65 = newValue;
  if (Promise._97) {
    Promise._97(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._45 === 1) {
    handle(self, self._54);
    self._54 = null;
  }
  if (self._45 === 2) {
    for (var i = 0; i < self._54.length; i++) {
      handle(self, self._54[i]);
    }
    self._54 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":13}],61:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};

},{"./core.js":60}],62:[function(require,module,exports){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._81 = 1;
  p._65 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._81 === 3) {
            val = val._65;
          }
          if (val._81 === 1) return res(i, val._65);
          if (val._81 === 2) reject(val._65);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":60}],63:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

},{"./core.js":60}],64:[function(require,module,exports){
'use strict';

module.exports = require('./core.js');
require('./done.js');
require('./finally.js');
require('./es6-extensions.js');
require('./node-extensions.js');
require('./synchronous.js');

},{"./core.js":60,"./done.js":61,"./es6-extensions.js":62,"./finally.js":63,"./node-extensions.js":65,"./synchronous.js":66}],65:[function(require,module,exports){
'use strict';

// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = require('./core.js');
var asap = require('asap');

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
}

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
}

},{"./core.js":60,"asap":12}],66:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._81 === 3) {
      return this._65.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._65;
  };

  Promise.prototype.getReason = function () {
    if (this._81 === 3) {
      return this._65.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._65;
  };

  Promise.prototype.getState = function () {
    if (this._81 === 3) {
      return this._65.getState();
    }
    if (this._81 === -1 || this._81 === -2) {
      return 0;
    }

    return this._81;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};

},{"./core.js":60}],67:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],68:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":67,"_process":58,"inherits":54}],69:[function(require,module,exports){
'use strict';

// This file contains definitions of rules how location URLs are translated
// to parameters for stores in Catberry application.
//
// Format:
// /some/:parameter[store1,store2,store3]
//
// More details here:
// https://github.com/catberry/catberry/blob/master/docs/index.md#routing

module.exports = [
	'/:page[Pages]'
];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfX0Jyb3dzZXJCdW5kbGUuanMiLCJicm93c2VyLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9Db250ZW50L2luZGV4LmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9kb2N1bWVudC9Eb2N1bWVudC5qcyIsImNhdGJlcnJ5X2NvbXBvbmVudHMvaGVhZC9IZWFkLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9oZWxsby13b3JsZC9IZWxsb1dvcmxkLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwiY2F0YmVycnlfc3RvcmVzL0NvbnRlbnQuanMiLCJjYXRiZXJyeV9zdG9yZXMvUGFnZXMuanMiLCJjb25maWcvYnJvd3Nlci5qc29uIiwiY29uZmlnL3BhZ2VzLmpzb24iLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLXJhdy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2Jyb3dzZXIvVGVtcGxhdGVQcm92aWRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvY2F0b3IvbGliL0NvbnN0cnVjdG9yVG9rZW5pemVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvY2F0b3IvbGliL1NlcnZpY2VMb2NhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVoci9icm93c2VyL1VIUi5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11aHIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdWhyL2xpYi9VSFJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL0F1dGhvcml0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL1F1ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVVJJLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVXNlckluZm8uanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdXJpL2xpYi9wZXJjZW50RW5jb2RpbmdIZWxwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9DYXRiZXJyeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0Nvb2tpZVdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9Eb2N1bWVudFJlbmRlcmVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvTG9nZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvUmVxdWVzdFJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL2hlbHBlcnMvaHJUaW1lSGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvbG9hZGVycy9Db21wb25lbnRMb2FkZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9sb2FkZXJzL1N0b3JlTG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvcHJvdmlkZXJzL01vZHVsZUFwaVByb3ZpZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9Db250ZXh0RmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU2VyaWFsV3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU3RvcmVEaXNwYXRjaGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Jvb3RzdHJhcHBlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvQ2F0YmVycnlCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Nvb2tpZVdyYXBwZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0RvY3VtZW50UmVuZGVyZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0xvYWRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvTW9kdWxlQXBpUHJvdmlkZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL2Vycm9ySGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9wcm9wZXJ0eUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9yb3V0ZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvcHJvdmlkZXJzL1N0YXRlUHJvdmlkZXIuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2phZGUvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9tb3JwaGRvbS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJldHR5LWhydGltZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2RvbmUuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvZXM2LWV4dGVuc2lvbnMuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvZmluYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9ub2RlLWV4dGVuc2lvbnMuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJyb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzViQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzd5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyBhIHRlbXBsYXRlIGFuZCBpdCBpcyB1c2VkIG9ubHkgd2l0aCBzb21lIHN0cmluZyByZXBsYWNlc1xuICogYnkgQnJvd3NlckJ1bmRsZUJ1aWxkZXIgbW9kdWxlLiBJdCBkb2VzIG5vdCB3b3JrIGJ5IGl0c2VsZi5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdG9yZXMgPSBbXG5cbntuYW1lOiAnUGFnZXMnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9zdG9yZXNcXFxcUGFnZXMuanMnKX0sXG57bmFtZTogJ0NvbnRlbnQnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9zdG9yZXNcXFxcQ29udGVudC5qcycpfVxuXTtcblxudmFyIGNvbXBvbmVudHMgPSBbXG5cbntuYW1lOiAnY29udGVudCcsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHNcXFxcQ29udGVudFxcXFxpbmRleC5qcycpLCBwcm9wZXJ0aWVzOiB7XCJuYW1lXCI6XCJDb250ZW50XCIsXCJ0ZW1wbGF0ZVwiOlwiLi90ZW1wbGF0ZS5qYWRlXCIsXCJlcnJvclRlbXBsYXRlXCI6XCIuL2Vycm9yLmphZGVcIixcImxvZ2ljXCI6XCJpbmRleC5qc1wifSwgdGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjb250ZW50KSB7XFxuYnVmLnB1c2goXCI8aDM+XCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gY29udGVudCkgPT0gbnVsbCA/IFxcJ1xcJyA6IGphZGVfaW50ZXJwKSkgKyBcIjwvaDM+XCIpO30uY2FsbCh0aGlzLFwiY29udGVudFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY29udGVudDp0eXBlb2YgY29udGVudCE9PVwidW5kZWZpbmVkXCI/Y29udGVudDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nLCBlcnJvclRlbXBsYXRlU291cmNlOiAnZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XFxudmFyIGJ1ZiA9IFtdO1xcbnZhciBqYWRlX21peGlucyA9IHt9O1xcbnZhciBqYWRlX2ludGVycDtcXG5cXG47cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nfSxcbntuYW1lOiAnZG9jdW1lbnQnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9jb21wb25lbnRzXFxcXGRvY3VtZW50XFxcXERvY3VtZW50LmpzJyksIHByb3BlcnRpZXM6IHtcIm5hbWVcIjpcImRvY3VtZW50XCIsXCJ0ZW1wbGF0ZVwiOlwiLi9kb2N1bWVudC5qYWRlXCIsXCJsb2dpY1wiOlwiLi9Eb2N1bWVudC5qc1wifSwgdGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbmJ1Zi5wdXNoKFwiPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxjYXQtaGVsbG8td29ybGQgaWQ9XFxcXFwidW5pcXVlXFxcXFwiIGNhdC1zdG9yZT1cXFxcXCJQYWdlc1xcXFxcIj48L2NhdC1oZWxsby13b3JsZD48Y2F0LW5hdmlnYXRpb24gaWQ9XFxcXFwiY2F0LXRvcC1uYXZcXFxcXCIgY2F0LXN0b3JlPVxcXFxcIlBhZ2VzXFxcXFwiPjwvY2F0LW5hdmlnYXRpb24+PGNhdC1jb250ZW50IGlkPVxcXFxcImNhdC1jb250ZW50XFxcXFwiIGNhdC1zdG9yZT1cXFxcXCJDb250ZW50XFxcXFwiPjwvY2F0LWNvbnRlbnQ+PC9ib2R5PjwvaHRtbD5cIik7O3JldHVybiBidWYuam9pbihcIlwiKTtcXG59JywgZXJyb3JUZW1wbGF0ZVNvdXJjZTogbnVsbH0sXG57bmFtZTogJ2hlYWQnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9jb21wb25lbnRzXFxcXGhlYWRcXFxcSGVhZC5qcycpLCBwcm9wZXJ0aWVzOiB7XCJuYW1lXCI6XCJoZWFkXCIsXCJ0ZW1wbGF0ZVwiOlwiLi9oZWFkLmphZGVcIixcImxvZ2ljXCI6XCIuL0hlYWQuanNcIn0sIHRlbXBsYXRlU291cmNlOiAnZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XFxudmFyIGJ1ZiA9IFtdO1xcbnZhciBqYWRlX21peGlucyA9IHt9O1xcbnZhciBqYWRlX2ludGVycDtcXG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAodGl0bGUpIHtcXG5idWYucHVzaChcIjxtZXRhIGNoYXJzZXQ9XFxcXFwiVVRGLThcXFxcXCIvPjx0aXRsZT5cIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSB0aXRsZSkgPT0gbnVsbCA/IFxcJ1xcJyA6IGphZGVfaW50ZXJwKSkgKyBcIjwvdGl0bGU+PHNjcmlwdCBzcmM9XFxcXFwiYnVuZGxlLmpzXFxcXFwiPjwvc2NyaXB0PlwiKTt9LmNhbGwodGhpcyxcInRpdGxlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC50aXRsZTp0eXBlb2YgdGl0bGUhPT1cInVuZGVmaW5lZFwiP3RpdGxlOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsIGVycm9yVGVtcGxhdGVTb3VyY2U6IG51bGx9LFxue25hbWU6ICdoZWxsby13b3JsZCcsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHNcXFxcaGVsbG8td29ybGRcXFxcSGVsbG9Xb3JsZC5qcycpLCBwcm9wZXJ0aWVzOiB7XCJuYW1lXCI6XCJoZWxsby13b3JsZFwiLFwidGVtcGxhdGVcIjpcIi4vaGVsbG8uamFkZVwiLFwiZXJyb3JUZW1wbGF0ZVwiOlwiLi9lcnJvci5qYWRlXCIsXCJsb2dpY1wiOlwiLi9IZWxsb1dvcmxkLmpzXCJ9LCB0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGN1cnJlbnQpIHtcXG5idWYucHVzaChcIjxoMT5IZWxsbyBcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSBjdXJyZW50KSA9PSBudWxsID8gXFwnXFwnIDogamFkZV9pbnRlcnApKSArIFwiPC9oMT5cIik7fS5jYWxsKHRoaXMsXCJjdXJyZW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jdXJyZW50OnR5cGVvZiBjdXJyZW50IT09XCJ1bmRlZmluZWRcIj9jdXJyZW50OnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsIGVycm9yVGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbjtyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufSd9LFxue25hbWU6ICduYXZpZ2F0aW9uJywgY29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY2F0YmVycnlfY29tcG9uZW50c1xcXFxuYXZpZ2F0aW9uXFxcXGluZGV4LmpzJyksIHByb3BlcnRpZXM6IHtcIm5hbWVcIjpcIm5hdmlnYXRpb25cIixcInRlbXBsYXRlXCI6XCIuL3RlbXBsYXRlLmphZGVcIixcImVycm9yVGVtcGxhdGVcIjpcIi4vZXJyb3IuamFkZVwiLFwibG9naWNcIjpcImluZGV4LmpzXCJ9LCB0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGlzQWN0aXZlLCBtZW51LCB1bmRlZmluZWQpIHtcXG5idWYucHVzaChcIjx1bD5cIik7XFxuLy8gaXRlcmF0ZSBtZW51XFxuOyhmdW5jdGlvbigpe1xcbiAgdmFyICRvYmogPSBtZW51O1xcbiAgaWYgKFxcJ251bWJlclxcJyA9PSB0eXBlb2YgJG9iai5sZW5ndGgpIHtcXG5cXG4gICAgZm9yICh2YXIgJGluZGV4ID0gMCwgJGwgPSAkb2JqLmxlbmd0aDsgJGluZGV4IDwgJGw7ICRpbmRleCsrKSB7XFxuICAgICAgdmFyIGl0ZW0gPSAkb2JqWyRpbmRleF07XFxuXFxuYnVmLnB1c2goXCI8bGlcIiArIChqYWRlLmNscyhbaXNBY3RpdmVbaXRlbS5uYW1lXSA/IFxcJ2FjdGl2ZVxcJzogXFwnXFwnXSwgW3RydWVdKSkgKyBcIj48YVwiICsgKGphZGUuYXR0cihcImhyZWZcIiwgXCJcIiArIChpdGVtLmxpbmspICsgXCJcIiwgdHJ1ZSwgZmFsc2UpKSArIFwiPlwiICsgKGphZGUuZXNjYXBlKG51bGwgPT0gKGphZGVfaW50ZXJwID0gaXRlbS5uYW1lKSA/IFwiXCIgOiBqYWRlX2ludGVycCkpICsgXCI8L2E+PC9saT5cIik7XFxuICAgIH1cXG5cXG4gIH0gZWxzZSB7XFxuICAgIHZhciAkbCA9IDA7XFxuICAgIGZvciAodmFyICRpbmRleCBpbiAkb2JqKSB7XFxuICAgICAgJGwrKzsgICAgICB2YXIgaXRlbSA9ICRvYmpbJGluZGV4XTtcXG5cXG5idWYucHVzaChcIjxsaVwiICsgKGphZGUuY2xzKFtpc0FjdGl2ZVtpdGVtLm5hbWVdID8gXFwnYWN0aXZlXFwnOiBcXCdcXCddLCBbdHJ1ZV0pKSArIFwiPjxhXCIgKyAoamFkZS5hdHRyKFwiaHJlZlwiLCBcIlwiICsgKGl0ZW0ubGluaykgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCI+XCIgKyAoamFkZS5lc2NhcGUobnVsbCA9PSAoamFkZV9pbnRlcnAgPSBpdGVtLm5hbWUpID8gXCJcIiA6IGphZGVfaW50ZXJwKSkgKyBcIjwvYT48L2xpPlwiKTtcXG4gICAgfVxcblxcbiAgfVxcbn0pLmNhbGwodGhpcyk7XFxuXFxuYnVmLnB1c2goXCI8L3VsPlwiKTt9LmNhbGwodGhpcyxcImlzQWN0aXZlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5pc0FjdGl2ZTp0eXBlb2YgaXNBY3RpdmUhPT1cInVuZGVmaW5lZFwiP2lzQWN0aXZlOnVuZGVmaW5lZCxcIm1lbnVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLm1lbnU6dHlwZW9mIG1lbnUhPT1cInVuZGVmaW5lZFwiP21lbnU6dW5kZWZpbmVkLFwidW5kZWZpbmVkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51bmRlZmluZWQ6dHlwZW9mIHVuZGVmaW5lZCE9PVwidW5kZWZpbmVkXCI/dW5kZWZpbmVkOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsIGVycm9yVGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbjtyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufSd9XG5dO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0cm91dGVEZWZpbml0aW9ucyA9IHJlcXVpcmUoJy4vcm91dGVzLmpzJykgfHwgW10sXG5cdENhdGJlcnJ5ID0gcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9DYXRiZXJyeS5qcycpLFxuXHRMb2dnZXIgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0xvZ2dlci5qcycpLFxuXHRCb290c3RyYXBwZXJCYXNlID1cblx0XHRyZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvYmFzZS9Cb290c3RyYXBwZXJCYXNlLmpzJyksXG5cdFN0b3JlRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9TdG9yZURpc3BhdGNoZXInKSxcblx0TW9kdWxlQXBpUHJvdmlkZXIgPVxuXHRcdHJlcXVpcmUoJy4vbm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvcHJvdmlkZXJzL01vZHVsZUFwaVByb3ZpZGVyJyksXG5cdENvb2tpZVdyYXBwZXIgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0Nvb2tpZVdyYXBwZXInKTtcblxudmFyIERFQlVHX0RPQ1VNRU5UX1VQREFURUQgPSAnRG9jdW1lbnQgdXBkYXRlZCAoJWQgc3RvcmUocykgY2hhbmdlZCknLFxuXHRERUJVR19DT01QT05FTlRfQk9VTkQgPSAnQ29tcG9uZW50IFwiJXNcIiBpcyBib3VuZCcsXG5cdERFQlVHX0NPTVBPTkVOVF9VTkJPVU5EID0gJ0NvbXBvbmVudCBcIiVzXCIgaXMgdW5ib3VuZCc7XG5cbnV0aWwuaW5oZXJpdHMoQm9vdHN0cmFwcGVyLCBCb290c3RyYXBwZXJCYXNlKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgYnJvd3NlciBDYXRiZXJyeSdzIGJvb3RzdHJhcHBlci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgQm9vdHN0cmFwcGVyQmFzZVxuICovXG5mdW5jdGlvbiBCb290c3RyYXBwZXIoKSB7XG5cdEJvb3RzdHJhcHBlckJhc2UuY2FsbCh0aGlzLCBDYXRiZXJyeSk7XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyBDYXRiZXJyeSdzIHNlcnZpY2UgbG9jYXRvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdPYmplY3QgQXBwbGljYXRpb24gY29uZmlnIG9iamVjdC5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgU2VydmljZSBsb2NhdG9yIHRvIGNvbmZpZ3VyZS5cbiAqL1xuQm9vdHN0cmFwcGVyLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAoY29uZmlnT2JqZWN0LCBsb2NhdG9yKSB7XG5cdEJvb3RzdHJhcHBlckJhc2UucHJvdG90eXBlLmNvbmZpZ3VyZS5jYWxsKHRoaXMsIGNvbmZpZ09iamVjdCwgbG9jYXRvcik7XG5cblx0Ly8gaWYgYnJvd3NlciBzdGlsbCBkb2VzIG5vdCBoYXZlIHByb21pc2VzIHRoZW4gYWRkIGl0LlxuXHRpZiAoISgnUHJvbWlzZScgaW4gd2luZG93KSkge1xuXHRcdHdpbmRvdy5Qcm9taXNlID0gbG9jYXRvci5yZXNvbHZlKCdwcm9taXNlJyk7XG5cdH1cblxuXHRsb2NhdG9yLnJlZ2lzdGVyKCdzdG9yZURpc3BhdGNoZXInLCBTdG9yZURpc3BhdGNoZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXIoXG5cdFx0J21vZHVsZUFwaVByb3ZpZGVyJywgTW9kdWxlQXBpUHJvdmlkZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZVxuXHQpO1xuXHRsb2NhdG9yLnJlZ2lzdGVyKCdjb29raWVXcmFwcGVyJywgQ29va2llV3JhcHBlciwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblxuXHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3dpbmRvdycsIHdpbmRvdyk7XG5cblx0dmFyIGxvZ2dlckNvbmZpZyA9IGNvbmZpZ09iamVjdC5sb2dnZXIgfHwge30sXG5cdFx0bG9nZ2VyID0gbmV3IExvZ2dlcihsb2dnZXJDb25maWcubGV2ZWxzKTtcblx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdsb2dnZXInLCBsb2dnZXIpO1xuXHR3aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihtc2csIHVyaSwgbGluZSkge1xuXHRcdGxvZ2dlci5mYXRhbCh1cmkgKyAnOicgKyBsaW5lICsgJyAnICsgbXNnKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0dmFyIGV2ZW50QnVzID0gbG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xuXHR0aGlzLl93cmFwRXZlbnRzV2l0aExvZ2dlcihjb25maWdPYmplY3QsIGV2ZW50QnVzLCBsb2dnZXIpO1xuXG5cdHJvdXRlRGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocm91dGVEZWZpbml0aW9uKSB7XG5cdFx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdyb3V0ZURlZmluaXRpb24nLCByb3V0ZURlZmluaXRpb24pO1xuXHR9KTtcblxuXHRzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcblx0XHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3N0b3JlJywgc3RvcmUpO1xuXHR9KTtcblxuXHRjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuXHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnY29tcG9uZW50JywgY29tcG9uZW50KTtcblx0fSk7XG59O1xuXG4vKipcbiAqIFdyYXBzIGV2ZW50IGJ1cyB3aXRoIGxvZyBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQXBwbGljYXRpb24gY29uZmlnLlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGV2ZW50QnVzIEV2ZW50IGVtaXR0ZXIgdGhhdCBpbXBsZW1lbnRzIGV2ZW50IGJ1cy5cbiAqIEBwYXJhbSB7TG9nZ2VyfSBsb2dnZXIgTG9nZ2VyIHRvIHdyaXRlIG1lc3NhZ2VzLlxuICogQHByb3RlY3RlZFxuICovXG5Cb290c3RyYXBwZXIucHJvdG90eXBlLl93cmFwRXZlbnRzV2l0aExvZ2dlciA9XG5cdGZ1bmN0aW9uIChjb25maWcsIGV2ZW50QnVzLCBsb2dnZXIpIHtcblx0XHRCb290c3RyYXBwZXJCYXNlLnByb3RvdHlwZS5fd3JhcEV2ZW50c1dpdGhMb2dnZXJcblx0XHRcdC5jYWxsKHRoaXMsIGNvbmZpZywgZXZlbnRCdXMsIGxvZ2dlcik7XG5cblx0XHR2YXIgaXNSZWxlYXNlID0gQm9vbGVhbihjb25maWcuaXNSZWxlYXNlKTtcblx0XHRpZiAoaXNSZWxlYXNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGV2ZW50QnVzXG5cdFx0XHQub24oJ2RvY3VtZW50VXBkYXRlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdGxvZ2dlci5kZWJ1Zyh1dGlsLmZvcm1hdChERUJVR19ET0NVTUVOVF9VUERBVEVELCBhcmdzLmxlbmd0aCkpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignY29tcG9uZW50Qm91bmQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoXG5cdFx0XHRcdFx0REVCVUdfQ09NUE9ORU5UX0JPVU5ELFxuXHRcdFx0XHRcdGFyZ3MuZWxlbWVudC50YWdOYW1lICsgKGFyZ3MuaWQgPyAnIycgKyBhcmdzLmlkIDogJycpXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignY29tcG9uZW50VW5ib3VuZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdGxvZ2dlci5kZWJ1Zyh1dGlsLmZvcm1hdChcblx0XHRcdFx0XHRERUJVR19DT01QT05FTlRfVU5CT1VORCxcblx0XHRcdFx0XHRhcmdzLmVsZW1lbnQudGFnTmFtZSArIChhcmdzLmlkID8gJyMnICsgYXJncy5pZCA6ICcnKVxuXHRcdFx0XHQpKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBCb290c3RyYXBwZXIoKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYXRiZXJyeSA9IHJlcXVpcmUoJ2NhdGJlcnJ5JyksXG5cdHRlbXBsYXRlRW5naW5lID0gcmVxdWlyZSgnY2F0YmVycnktamFkZScpLFxuXHQvLyB0aGlzIGNvbmZpZyB3aWxsIGJlIHJlcGxhY2VkIGJ5IGAuL2NvbmZpZy9icm93c2VyLmpzb25gIHdoZW4gYnVpbGRpbmdcblx0Ly8gYmVjYXVzZSBvZiBgYnJvd3NlcmAgZmllbGQgaW4gYHBhY2thZ2UuanNvbmBcblx0Y29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvZW52aXJvbm1lbnQuanNvbicpLFxuXHRjYXQgPSBjYXRiZXJyeS5jcmVhdGUoY29uZmlnKTtcblxudGVtcGxhdGVFbmdpbmUucmVnaXN0ZXIoY2F0LmxvY2F0b3IpO1xuY2F0LnN0YXJ0V2hlblJlYWR5KCk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50O1xuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IENhdC1jb21wb25lbnQgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjY2F0LWNvbXBvbmVudHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBcIkNvbnRlbnRcIiBjb21wb25lbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29udGVudCgpIHtcblxufVxuXG4vKipcbiAqIEdldHMgZGF0YSBjb250ZXh0IGZvciB0ZW1wbGF0ZSBlbmdpbmUuXG4gKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBEYXRhIGNvbnRleHRcbiAqIGZvciB0ZW1wbGF0ZSBlbmdpbmUuXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuJGNvbnRleHQuZ2V0U3RvcmVEYXRhKCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZXZlbnQgYmluZGluZyBzZXR0aW5ncyBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R8bnVsbHx1bmRlZmluZWR9IEJpbmRpbmcgc2V0dGluZ3MuXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG5cbn07XG5cbi8qKlxuICogRG9lcyBjbGVhbmluZyBmb3IgZXZlcnl0aGluZyB0aGF0IGhhdmUgTk9UIGJlZW4gc2V0IGJ5IC5iaW5kKCkgbWV0aG9kLlxuICogVGhpcyBtZXRob2QgaXMgb3B0aW9uYWwuXG4gKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IFByb21pc2Ugb3Igbm90aGluZy5cbiAqL1xuQ29udGVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKCkge1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50O1xuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IENhdC1jb21wb25lbnQgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjY2F0LWNvbXBvbmVudHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIFwiZG9jdW1lbnRcIiBjb21wb25lbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRG9jdW1lbnQoKSB7IH1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkO1xuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IENhdC1jb21wb25lbnQgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjY2F0LWNvbXBvbmVudHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIFwiaGVhZFwiIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSAkY29uZmlnIENhdGJlcnJ5IGFwcGxpY2F0aW9uIGNvbmZpZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIZWFkKCRjb25maWcpIHtcblx0dGhpcy5fY29uZmlnID0gJGNvbmZpZztcbn1cblxuLyoqXG4gKiBDdXJyZW50IGNvbmZpZy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5IZWFkLnByb3RvdHlwZS5fY29uZmlnID0gbnVsbDtcblxuLyoqXG4gKiBHZXRzIGRhdGEgZm9yIHRlbXBsYXRlLlxuICogQHJldHVybnMge09iamVjdH0gRGF0YSBvYmplY3QuXG4gKi9cbkhlYWQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX2NvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVsbG9Xb3JsZDtcblxuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI2NhdC1jb21wb25lbnRzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBcImhlbGxvLXdvcmxkXCIgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhlbGxvV29ybGQoKSB7IH1cblxuLyoqXG4gKiBHZXRzIGRhdGEgZm9yIHRlbXBsYXRlLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgZGF0YS5cbiAqL1xuSGVsbG9Xb3JsZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy4kY29udGV4dC5nZXRTdG9yZURhdGEoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2aWdhdGlvbjtcblxudmFyIE1FTlUgPSBbXG4gIHtcbiAgICBsaW5rOiAnL2hvbWUnLFxuICAgIG5hbWU6ICdob21lJ1xuICB9LFxuICB7XG4gICAgbGluazogJy9wb3J0Zm9saW8nLFxuICAgIG5hbWU6ICdwb3J0Zm9saW8nXG4gIH1cbl07XG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IENhdC1jb21wb25lbnQgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjY2F0LWNvbXBvbmVudHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBcIm5hdmlnYXRpb25cIiBjb21wb25lbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcblxufVxuXG4vKipcbiAqIEdldHMgZGF0YSBjb250ZXh0IGZvciB0ZW1wbGF0ZSBlbmdpbmUuXG4gKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBEYXRhIGNvbnRleHRcbiAqIGZvciB0ZW1wbGF0ZSBlbmdpbmUuXG4gKi9cbk5hdmlnYXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuJGNvbnRleHQuZ2V0U3RvcmVEYXRhKCkuXG4gICAgdGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICBkYXRhLm1lbnUgPSBNRU5VO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZXZlbnQgYmluZGluZyBzZXR0aW5ncyBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R8bnVsbHx1bmRlZmluZWR9IEJpbmRpbmcgc2V0dGluZ3MuXG4gKi9cbk5hdmlnYXRpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG5cbn07XG5cbi8qKlxuICogRG9lcyBjbGVhbmluZyBmb3IgZXZlcnl0aGluZyB0aGF0IGhhdmUgTk9UIGJlZW4gc2V0IGJ5IC5iaW5kKCkgbWV0aG9kLlxuICogVGhpcyBtZXRob2QgaXMgb3B0aW9uYWwuXG4gKiBAcmV0dXJucyB7UHJvbWlzZXx1bmRlZmluZWR9IFByb21pc2Ugb3Igbm90aGluZy5cbiAqL1xuTmF2aWdhdGlvbi5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKCkge1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRlbnQ7XG5cbi8qXG4gKiBUaGlzIGlzIGEgQ2F0YmVycnkgU3RvcmUgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjc3RvcmVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgXCJDb250ZW50XCIgc3RvcmUuXG4gKiBAcGFyYW0ge1VIUn0gJHVociBVbml2ZXJzYWwgSFRUUCByZXF1ZXN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvbnRlbnQoJHVocikge1xuXHR0aGlzLl91aHIgPSAkdWhyO1xuXHR0aGlzLiRjb250ZXh0LnNldERlcGVuZGVuY3koJ1BhZ2VzJyk7XG59XG5cbi8qKlxuICogQ3VycmVudCB1bml2ZXJzYWwgSFRUUCByZXF1ZXN0IHRvIGRvIGl0IGluIGlzb21vcnBoaWMgd2F5LlxuICogQHR5cGUge1VIUn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLl91aHIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbGlmZXRpbWUgb2YgZGF0YSAoaW4gbWlsbGlzZWNvbmRzKSB0aGF0IGlzIHJldHVybmVkIGJ5IHRoaXMgc3RvcmUuXG4gKiBAdHlwZSB7bnVtYmVyfSBMaWZldGltZSBpbiBtaWxsaXNlY29uZHMuXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLiRsaWZldGltZSA9IDYwMDAwO1xuXG4vKipcbiAqIExvYWRzIGRhdGEgZnJvbSByZW1vdGUgc291cmNlLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R8bnVsbHx1bmRlZmluZWR9IExvYWRlZCBkYXRhLlxuICovXG5Db250ZW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHQvLyBIZXJlIHlvdSBjYW4gZG8gYW55IEhUVFAgcmVxdWVzdHMgdXNpbmcgdGhpcy5fdWhyLlxuXHQvLyBQbGVhc2UgcmVhZCBkZXRhaWxzIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5LXVoci5cblx0cmV0dXJuIHRoaXMuJGNvbnRleHQuZ2V0U3RvcmVEYXRhKCdQYWdlcycpXG5cdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0aWYoZGF0YS5jdXJyZW50ID09PSAnaG9tZScpIHtcblx0XHRcdFx0ZGF0YS5jb250ZW50ID0gJ0NvbnRlbnQgZm9yIGhvbWVwYWdlJ1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGEuY29udGVudCA9ICdDb250ZW50IGZvciBhbm90aGVyIHBhZ2UnXG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fVxuXHRcdH0pXG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYWN0aW9uIG5hbWVkIFwic29tZS1hY3Rpb25cIiBmcm9tIGFueSBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fE9iamVjdHxudWxsfHVuZGVmaW5lZH0gUmVzcG9uc2UgdG8gY29tcG9uZW50LlxuICovXG5Db250ZW50LnByb3RvdHlwZS5oYW5kbGVTb21lQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXHQvLyBIZXJlIHlvdSBjYW4gY2FsbCB0aGlzLiRjb250ZXh0LmNoYW5nZWQoKSBpZiB5b3Uga25vd1xuXHQvLyB0aGF0IHJlbW90ZSBkYXRhIHNvdXJjZSBoYXMgYmVlbiBjaGFuZ2VkLlxuXHQvLyBBbHNvIHlvdSBjYW4gaGF2ZSBtYW55IGhhbmRsZSBtZXRob2RzIGZvciBvdGhlciBhY3Rpb25zLlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlcztcblxuXG4vKiBQQUdFUyAqL1xuXG52YXIgUEFHRVMgPSByZXF1aXJlKFwiLi4vY29uZmlnL3BhZ2VzLmpzb25cIik7XG5cblxuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IFN0b3JlIGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI3N0b3Jlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIFwiUGFnZXNcIiBzdG9yZS5cbiAqIEBwYXJhbSB7VUhSfSAkdWhyIFVuaXZlcnNhbCBIVFRQIHJlcXVlc3QuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFnZXMoJGNvbmZpZykge1xuXHR0aGlzLl9jb25maWcgPSAkY29uZmlnO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgdW5pdmVyc2FsIEhUVFAgcmVxdWVzdCB0byBkbyBpdCBpbiBpc29tb3JwaGljIHdheS5cbiAqIEB0eXBlIHtVSFJ9XG4gKiBAcHJpdmF0ZVxuICovXG5QYWdlcy5wcm90b3R5cGUuX3VociA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBsaWZldGltZSBvZiBkYXRhIChpbiBtaWxsaXNlY29uZHMpIHRoYXQgaXMgcmV0dXJuZWQgYnkgdGhpcyBzdG9yZS5cbiAqIEB0eXBlIHtudW1iZXJ9IExpZmV0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAqL1xuUGFnZXMucHJvdG90eXBlLiRsaWZldGltZSA9IDYwMDAwO1xuXG4vKipcbiAqIExvYWRzIGRhdGEgZnJvbSByZW1vdGUgc291cmNlLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R8bnVsbHx1bmRlZmluZWR9IExvYWRlZCBkYXRhLlxuICovXG5QYWdlcy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gSGVyZSB5b3UgY2FuIGRvIGFueSBIVFRQIHJlcXVlc3RzIHVzaW5nIHRoaXMuX3Voci5cblx0Ly8gUGxlYXNlIHJlYWQgZGV0YWlscyBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS11aHIuXG5cdHZhciBjdXJyZW50UGFnZSA9IHRoaXMuJGNvbnRleHQuc3RhdGUucGFnZSB8fCAnaG9tZSc7XG5cblx0dmFyIHJlc3VsdCA9IHtcblx0XHRjdXJyZW50OiBjdXJyZW50UGFnZSxcblx0XHRpc0FjdGl2ZToge31cblx0fTtcblxuXHRpZighUEFHRVMuaGFzT3duUHJvcGVydHkoY3VycmVudFBhZ2UpKSB7XG5cdFx0dGhpcy4kY29udGV4dC5yZWRpcmVjdCgnL2hvbWUnKTtcblx0fVxuXG5cdE9iamVjdC5rZXlzKFBBR0VTKS5mb3JFYWNoKGZ1bmN0aW9uKHBhZ2UpIHtcblx0XHRyZXN1bHQuaXNBY3RpdmVbcGFnZV0gPSAoY3VycmVudFBhZ2UgPT09IHBhZ2UpXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ7XG5cbn07XG5cbi8qKlxuICogSGFuZGxlcyBhY3Rpb24gbmFtZWQgXCJzb21lLWFjdGlvblwiIGZyb20gYW55IGNvbXBvbmVudC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBSZXNwb25zZSB0byBjb21wb25lbnQuXG4gKi9cblBhZ2VzLnByb3RvdHlwZS5oYW5kbGVTb21lQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXHQvLyBIZXJlIHlvdSBjYW4gY2FsbCB0aGlzLiRjb250ZXh0LmNoYW5nZWQoKSBpZiB5b3Uga25vd1xuXHQvLyB0aGF0IHJlbW90ZSBkYXRhIHNvdXJjZSBoYXMgYmVlbiBjaGFuZ2VkLlxuXHQvLyBBbHNvIHlvdSBjYW4gaGF2ZSBtYW55IGhhbmRsZSBtZXRob2RzIGZvciBvdGhlciBhY3Rpb25zLlxufTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ0aXRsZVwiOiBcIkNhdGJlcnJ5IFByb2plY3RcIlxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwiaG9tZVwiOiB7XHJcbiAgICBcInRpdGxlXCI6IFwiSG9tZSBwYWdlIHwgT2xlZyBQcm90c2Vua29cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJKYXZhc2NyaXB0IGRldmVsb3BlciwgbG9va2luZyBmb3IgYSBqb2JcIixcclxuICAgIFwia2V5d29yZHNcIjogXCJqYXZhc2NyaXB0LCBqb2IsIG5vZGVqcywgY2F0YmVycnlqcywgaXNvbW9ycGhpYyBqYXZhc2NyaXB0XCJcclxuICB9LFxyXG4gIFwicG9ydGZvbGlvXCI6IHtcclxuICAgIFwidGl0bGVcIjogXCJQb3J0Zm9saW8gcGFnZSB8IFBvcnRmb2xpb1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkphdmFzY3JpcHQgZGV2ZWxvcGVyLCBsb29raW5nIGZvciBhIGpvYiwgbXkgcG9ydGZvbGlvXCIsXHJcbiAgICBcImtleXdvcmRzXCI6IFwiamF2YXNjcmlwdCwgam9iLCBub2RlanMsIGNhdGJlcnJ5anMsIGlzb21vcnBoaWMgamF2YXNjcmlwdFwiXHJcbiAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByYXdBc2FwIHByb3ZpZGVzIGV2ZXJ5dGhpbmcgd2UgbmVlZCBleGNlcHQgZXhjZXB0aW9uIG1hbmFnZW1lbnQuXG52YXIgcmF3QXNhcCA9IHJlcXVpcmUoXCIuL3Jhd1wiKTtcbi8vIFJhd1Rhc2tzIGFyZSByZWN5Y2xlZCB0byByZWR1Y2UgR0MgY2h1cm4uXG52YXIgZnJlZVRhc2tzID0gW107XG4vLyBXZSBxdWV1ZSBlcnJvcnMgdG8gZW5zdXJlIHRoZXkgYXJlIHRocm93biBpbiByaWdodCBvcmRlciAoRklGTykuXG4vLyBBcnJheS1hcy1xdWV1ZSBpcyBnb29kIGVub3VnaCBoZXJlLCBzaW5jZSB3ZSBhcmUganVzdCBkZWFsaW5nIHdpdGggZXhjZXB0aW9ucy5cbnZhciBwZW5kaW5nRXJyb3JzID0gW107XG52YXIgcmVxdWVzdEVycm9yVGhyb3cgPSByYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcih0aHJvd0ZpcnN0RXJyb3IpO1xuXG5mdW5jdGlvbiB0aHJvd0ZpcnN0RXJyb3IoKSB7XG4gICAgaWYgKHBlbmRpbmdFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IHBlbmRpbmdFcnJvcnMuc2hpZnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbHMgYSB0YXNrIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgcmV0dXJuaW5nLCBpbiBpdHMgb3duIGV2ZW50LCB3aXRoIHByaW9yaXR5XG4gKiBvdmVyIG90aGVyIGV2ZW50cyBsaWtlIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVwYWludC4gQW4gZXJyb3IgdGhyb3duIGZyb20gYW5cbiAqIGV2ZW50IHdpbGwgbm90IGludGVycnVwdCwgbm9yIGV2ZW4gc3Vic3RhbnRpYWxseSBzbG93IGRvd24gdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIG90aGVyIGV2ZW50cywgYnV0IHdpbGwgYmUgcmF0aGVyIHBvc3Rwb25lZCB0byBhIGxvd2VyIHByaW9yaXR5IGV2ZW50LlxuICogQHBhcmFtIHt7Y2FsbH19IHRhc2sgQSBjYWxsYWJsZSBvYmplY3QsIHR5cGljYWxseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqIGFyZ3VtZW50cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc2FwO1xuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gICAgdmFyIHJhd1Rhc2s7XG4gICAgaWYgKGZyZWVUYXNrcy5sZW5ndGgpIHtcbiAgICAgICAgcmF3VGFzayA9IGZyZWVUYXNrcy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdUYXNrID0gbmV3IFJhd1Rhc2soKTtcbiAgICB9XG4gICAgcmF3VGFzay50YXNrID0gdGFzaztcbiAgICByYXdBc2FwKHJhd1Rhc2spO1xufVxuXG4vLyBXZSB3cmFwIHRhc2tzIHdpdGggcmVjeWNsYWJsZSB0YXNrIG9iamVjdHMuICBBIHRhc2sgb2JqZWN0IGltcGxlbWVudHNcbi8vIGBjYWxsYCwganVzdCBsaWtlIGEgZnVuY3Rpb24uXG5mdW5jdGlvbiBSYXdUYXNrKCkge1xuICAgIHRoaXMudGFzayA9IG51bGw7XG59XG5cbi8vIFRoZSBzb2xlIHB1cnBvc2Ugb2Ygd3JhcHBpbmcgdGhlIHRhc2sgaXMgdG8gY2F0Y2ggdGhlIGV4Y2VwdGlvbiBhbmQgcmVjeWNsZVxuLy8gdGhlIHRhc2sgb2JqZWN0IGFmdGVyIGl0cyBzaW5nbGUgdXNlLlxuUmF3VGFzay5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnRhc2suY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChhc2FwLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaG9vayBleGlzdHMgcHVyZWx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgICAgICAgICAgLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0XG4gICAgICAgICAgICAvLyBkZXBlbmRzIG9uIGl0cyBleGlzdGVuY2UuXG4gICAgICAgICAgICBhc2FwLm9uZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gYSB3ZWIgYnJvd3NlciwgZXhjZXB0aW9ucyBhcmUgbm90IGZhdGFsLiBIb3dldmVyLCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2xvd2luZyBkb3duIHRoZSBxdWV1ZSBvZiBwZW5kaW5nIHRhc2tzLCB3ZSByZXRocm93IHRoZSBlcnJvciBpbiBhXG4gICAgICAgICAgICAvLyBsb3dlciBwcmlvcml0eSB0dXJuLlxuICAgICAgICAgICAgcGVuZGluZ0Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIHJlcXVlc3RFcnJvclRocm93KCk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgICBmcmVlVGFza3NbZnJlZVRhc2tzLmxlbmd0aF0gPSB0aGlzO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IG1lYW5zIHBvc3NpYmxlIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGl0cyBvd24gdHVybiwgd2l0aFxuLy8gcHJpb3JpdHkgb3ZlciBvdGhlciBldmVudHMgaW5jbHVkaW5nIElPLCBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlZHJhd1xuLy8gZXZlbnRzIGluIGJyb3dzZXJzLlxuLy9cbi8vIEFuIGV4Y2VwdGlvbiB0aHJvd24gYnkgYSB0YXNrIHdpbGwgcGVybWFuZW50bHkgaW50ZXJydXB0IHRoZSBwcm9jZXNzaW5nIG9mXG4vLyBzdWJzZXF1ZW50IHRhc2tzLiBUaGUgaGlnaGVyIGxldmVsIGBhc2FwYCBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgYSB0YXNrLCB0aGF0IHRoZSB0YXNrIHF1ZXVlIHdpbGwgY29udGludWUgZmx1c2hpbmcgYXNcbi8vIHNvb24gYXMgcG9zc2libGUsIGJ1dCBpZiB5b3UgdXNlIGByYXdBc2FwYCBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSB0b1xuLy8gZWl0aGVyIGVuc3VyZSB0aGF0IG5vIGV4Y2VwdGlvbnMgYXJlIHRocm93biBmcm9tIHlvdXIgdGFzaywgb3IgdG8gbWFudWFsbHlcbi8vIGNhbGwgYHJhd0FzYXAucmVxdWVzdEZsdXNoYCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxubW9kdWxlLmV4cG9ydHMgPSByYXdBc2FwO1xuZnVuY3Rpb24gcmF3QXNhcCh0YXNrKSB7XG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWVzdEZsdXNoKCk7XG4gICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRXF1aXZhbGVudCB0byBwdXNoLCBidXQgYXZvaWRzIGEgZnVuY3Rpb24gY2FsbC5cbiAgICBxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdGFzaztcbn1cblxudmFyIHF1ZXVlID0gW107XG4vLyBPbmNlIGEgZmx1c2ggaGFzIGJlZW4gcmVxdWVzdGVkLCBubyBmdXJ0aGVyIGNhbGxzIHRvIGByZXF1ZXN0Rmx1c2hgIGFyZVxuLy8gbmVjZXNzYXJ5IHVudGlsIHRoZSBuZXh0IGBmbHVzaGAgY29tcGxldGVzLlxudmFyIGZsdXNoaW5nID0gZmFsc2U7XG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBhbiBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBtZXRob2QgdGhhdCBhdHRlbXB0cyB0byBraWNrXG4vLyBvZmYgYSBgZmx1c2hgIGV2ZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIGBmbHVzaGAgd2lsbCBhdHRlbXB0IHRvIGV4aGF1c3Rcbi8vIHRoZSBldmVudCBxdWV1ZSBiZWZvcmUgeWllbGRpbmcgdG8gdGhlIGJyb3dzZXIncyBvd24gZXZlbnQgbG9vcC5cbnZhciByZXF1ZXN0Rmx1c2g7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIG5leHQgdGFzayB0byBleGVjdXRlIGluIHRoZSB0YXNrIHF1ZXVlLiBUaGlzIGlzXG4vLyBwcmVzZXJ2ZWQgYmV0d2VlbiBjYWxscyB0byBgZmx1c2hgIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3VtZWQgaWZcbi8vIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLlxudmFyIGluZGV4ID0gMDtcbi8vIElmIGEgdGFzayBzY2hlZHVsZXMgYWRkaXRpb25hbCB0YXNrcyByZWN1cnNpdmVseSwgdGhlIHRhc2sgcXVldWUgY2FuIGdyb3dcbi8vIHVuYm91bmRlZC4gVG8gcHJldmVudCBtZW1vcnkgZXhoYXVzdGlvbiwgdGhlIHRhc2sgcXVldWUgd2lsbCBwZXJpb2RpY2FsbHlcbi8vIHRydW5jYXRlIGFscmVhZHktY29tcGxldGVkIHRhc2tzLlxudmFyIGNhcGFjaXR5ID0gMTAyNDtcblxuLy8gVGhlIGZsdXNoIGZ1bmN0aW9uIHByb2Nlc3NlcyBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHdpdGhcbi8vIGByYXdBc2FwYCB1bmxlc3MgYW5kIHVudGlsIG9uZSBvZiB0aG9zZSB0YXNrcyB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuLy8gSWYgYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24sIGBmbHVzaGAgZW5zdXJlcyB0aGF0IGl0cyBzdGF0ZSB3aWxsIHJlbWFpblxuLy8gY29uc2lzdGVudCBhbmQgd2lsbCByZXN1bWUgd2hlcmUgaXQgbGVmdCBvZmYgd2hlbiBjYWxsZWQgYWdhaW4uXG4vLyBIb3dldmVyLCBgZmx1c2hgIGRvZXMgbm90IG1ha2UgYW55IGFycmFuZ2VtZW50cyB0byBiZSBjYWxsZWQgYWdhaW4gaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBpbmRleCBiZWZvcmUgY2FsbGluZyB0aGUgdGFzay4gVGhpcyBlbnN1cmVzIHRoYXQgd2Ugd2lsbFxuICAgICAgICAvLyBiZWdpbiBmbHVzaGluZyBvbiB0aGUgbmV4dCB0YXNrIHRoZSB0YXNrIHRocm93cyBhbiBlcnJvci5cbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIHF1ZXVlW2N1cnJlbnRJbmRleF0uY2FsbCgpO1xuICAgICAgICAvLyBQcmV2ZW50IGxlYWtpbmcgbWVtb3J5IGZvciBsb25nIGNoYWlucyBvZiByZWN1cnNpdmUgY2FsbHMgdG8gYGFzYXBgLlxuICAgICAgICAvLyBJZiB3ZSBjYWxsIGBhc2FwYCB3aXRoaW4gdGFza3Mgc2NoZWR1bGVkIGJ5IGBhc2FwYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgLy8gZ3JvdywgYnV0IHRvIGF2b2lkIGFuIE8obikgd2FsayBmb3IgZXZlcnkgdGFzayB3ZSBleGVjdXRlLCB3ZSBkb24ndFxuICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICBpZiAoaW5kZXggPiBjYXBhY2l0eSkge1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICBmb3IgKHZhciBzY2FuID0gMCwgbmV3TGVuZ3RoID0gcXVldWUubGVuZ3RoIC0gaW5kZXg7IHNjYW4gPCBuZXdMZW5ndGg7IHNjYW4rKykge1xuICAgICAgICAgICAgICAgIHF1ZXVlW3NjYW5dID0gcXVldWVbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCAtPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIGluZGV4ID0gMDtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBpbXBsZW1lbnRlZCB1c2luZyBhIHN0cmF0ZWd5IGJhc2VkIG9uIGRhdGEgY29sbGVjdGVkIGZyb21cbi8vIGV2ZXJ5IGF2YWlsYWJsZSBTYXVjZUxhYnMgU2VsZW5pdW0gd2ViIGRyaXZlciB3b3JrZXIgYXQgdGltZSBvZiB3cml0aW5nLlxuLy8gaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW1HLTVVWUd1cDVxeEdkRU1Xa2hQNkJXQ3owNTNOVWIyRTFRb1VUVTE2dUEvZWRpdCNnaWQ9NzgzNzI0NTkzXG5cbi8vIFNhZmFyaSA2IGFuZCA2LjEgZm9yIGRlc2t0b3AsIGlQYWQsIGFuZCBpUGhvbmUgYXJlIHRoZSBvbmx5IGJyb3dzZXJzIHRoYXRcbi8vIGhhdmUgV2ViS2l0TXV0YXRpb25PYnNlcnZlciBidXQgbm90IHVuLXByZWZpeGVkIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXN0IHVzZSBgZ2xvYmFsYCBpbnN0ZWFkIG9mIGB3aW5kb3dgIHRvIHdvcmsgaW4gYm90aCBmcmFtZXMgYW5kIHdlYlxuLy8gd29ya2Vycy4gYGdsb2JhbGAgaXMgYSBwcm92aXNpb24gb2YgQnJvd3NlcmlmeSwgTXIsIE1ycywgb3IgTW9wLlxudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3MuaHJ0aW1lIHx8IGhydGltZVxuXG4vLyBwb2x5ZmlsIGZvciB3aW5kb3cucGVyZm9ybWFuY2Uubm93XG52YXIgcGVyZm9ybWFuY2UgPSBnbG9iYWwucGVyZm9ybWFuY2UgfHwge31cbnZhciBwZXJmb3JtYW5jZU5vdyA9XG4gIHBlcmZvcm1hbmNlLm5vdyAgICAgICAgfHxcbiAgcGVyZm9ybWFuY2UubW96Tm93ICAgICB8fFxuICBwZXJmb3JtYW5jZS5tc05vdyAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm9Ob3cgICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uud2Via2l0Tm93ICB8fFxuICBmdW5jdGlvbigpeyByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSB9XG5cbi8vIGdlbmVyYXRlIHRpbWVzdGFtcCBvciBkZWx0YVxuLy8gc2VlIGh0dHA6Ly9ub2RlanMub3JnL2FwaS9wcm9jZXNzLmh0bWwjcHJvY2Vzc19wcm9jZXNzX2hydGltZVxuZnVuY3Rpb24gaHJ0aW1lKHByZXZpb3VzVGltZXN0YW1wKXtcbiAgdmFyIGNsb2NrdGltZSA9IHBlcmZvcm1hbmNlTm93LmNhbGwocGVyZm9ybWFuY2UpKjFlLTNcbiAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKGNsb2NrdGltZSlcbiAgdmFyIG5hbm9zZWNvbmRzID0gTWF0aC5mbG9vcigoY2xvY2t0aW1lJTEpKjFlOSlcbiAgaWYgKHByZXZpb3VzVGltZXN0YW1wKSB7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFswXVxuICAgIG5hbm9zZWNvbmRzID0gbmFub3NlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFsxXVxuICAgIGlmIChuYW5vc2Vjb25kczwwKSB7XG4gICAgICBzZWNvbmRzLS1cbiAgICAgIG5hbm9zZWNvbmRzICs9IDFlOVxuICAgIH1cbiAgfVxuICByZXR1cm4gW3NlY29uZHMsbmFub3NlY29uZHNdXG59IiwiIiwiLypcbiAqIGNhdGJlcnJ5LWphZGVcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeS1qYWRlJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS1qYWRlIHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGVQcm92aWRlcjtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBKYWRlIHRlbXBsYXRlIHByb3ZpZGVyLlxuICogQHBhcmFtIHtKYWRlfSAkamFkZSBKYWRlIGZhY3RvcnkuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVGVtcGxhdGVQcm92aWRlcigkamFkZSkge1xuXHR0aGlzLl9qYWRlID0gJGphZGU7XG5cdHRoaXMuX3RlbXBsYXRlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogQ3VycmVudCBKYWRlIGZhY3RvcnkuXG4gKiBAdHlwZSB7SmFkZX1cbiAqIEBwcml2YXRlXG4gKi9cblRlbXBsYXRlUHJvdmlkZXIucHJvdG90eXBlLl9qYWRlID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiByZWdpc3RlcmVkIHRlbXBsYXRlcy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5UZW1wbGF0ZVByb3ZpZGVyLnByb3RvdHlwZS5fdGVtcGxhdGVzID0gbnVsbDtcblxuLyoqXG4gKiBSZWdpc3RlcnMgY29tcGlsZWQgKHByZWNvbXBpbGVkKSBKYWRlIHRlbXBsYXRlLlxuICogaHR0cDovL2phZGVqcy5jb20vcmVmZXJlbmNlLmh0bWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRlbXBsYXRlIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcGlsZWQgQ29tcGlsZWQgdGVtcGxhdGUgc291cmNlLlxuICovXG5UZW1wbGF0ZVByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3RlckNvbXBpbGVkID0gZnVuY3Rpb24gKG5hbWUsIGNvbXBpbGVkKSB7XG5cdC8vIGpzaGludCBldmlsOnRydWVcblx0dmFyIGdldFRlbXBsYXRlID0gbmV3IEZ1bmN0aW9uKCdqYWRlJywgJ3JldHVybiAnICsgY29tcGlsZWQgKyAnOycpO1xuXHR0aGlzLl90ZW1wbGF0ZXNbbmFtZV0gPSBnZXRUZW1wbGF0ZSh0aGlzLl9qYWRlKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0ZW1wbGF0ZSB3aXRoIHNwZWNpZmllZCBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgY29udGV4dCBmb3IgdGVtcGxhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBQcm9taXNlIGZvciByZW5kZXJlZCBIVE1MLlxuICovXG5UZW1wbGF0ZVByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuXHRpZiAoIShuYW1lIGluIHRoaXMuX3RlbXBsYXRlcykpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdObyBzdWNoIHRlbXBsYXRlJykpO1xuXHR9XG5cblx0dmFyIHByb21pc2U7XG5cdHRyeSB7XG5cdFx0cHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl90ZW1wbGF0ZXNbbmFtZV0oZGF0YSkpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGUpO1xuXHR9XG5cdHJldHVybiBwcm9taXNlO1xufTsiLCIvKlxuICogY2F0YmVycnktamFkZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5LWphZGUncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5LWphZGUgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEphZGUgPSByZXF1aXJlKCdqYWRlJyksXG5cdFRlbXBsYXRlUHJvdmlkZXIgPSByZXF1aXJlKCcuL2xpYi9UZW1wbGF0ZVByb3ZpZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRyZWdpc3RlcjogZnVuY3Rpb24gKGxvY2F0b3IsIGNvbmZpZykge1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ2phZGUnLCBKYWRlKTtcblx0XHRsb2NhdG9yLnJlZ2lzdGVyKCd0ZW1wbGF0ZVByb3ZpZGVyJywgVGVtcGxhdGVQcm92aWRlciwgY29uZmlnLCB0cnVlKTtcblx0fSxcblx0SmFkZTogSmFkZSxcblx0VGVtcGxhdGVQcm92aWRlcjogVGVtcGxhdGVQcm92aWRlclxufTsiLCIvKlxuICogY2F0YmVycnktbG9jYXRvclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5LWxvY2F0b3IncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5LWxvY2F0b3IgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdHJ1Y3RvclRva2VuaXplcjtcblxudmFyIFNUQVRFUyA9IHtcblx0SUxMRUdBTDogLTEsXG5cdE5POiAwLFxuXHRJREVOVElGSUVSOiAxLFxuXHRGVU5DVElPTjogMixcblx0UEFSRU5USEVTRVNfT1BFTjogMyxcblx0UEFSRU5USEVTRVNfQ0xPU0U6IDQsXG5cdENPTU1BOiA1LFxuXHRFTkQ6IDZcbn07XG5Db25zdHJ1Y3RvclRva2VuaXplci5TVEFURVMgPSBTVEFURVM7XG5cbnZhciBLRVlXT1JEUyA9IHtcblx0RlVOQ1RJT046ICdmdW5jdGlvbidcbn07XG5cbnZhciBXSElURVNQQUNFX1RFU1QgPSAvXlxccyQvLFxuXHRJREVOVElGSUVSX1RFU1QgPSAvXltcXCRcXHddJC87XG5cbmZ1bmN0aW9uIENvbnN0cnVjdG9yVG9rZW5pemVyKGNvbnN0cnVjdG9yU291cmNlKSB7XG5cdHRoaXMuX3NvdXJjZSA9IFN0cmluZyhjb25zdHJ1Y3RvclNvdXJjZSB8fCAnJyk7XG59XG5cbi8qKlxuICogQ3VycmVudCBzb3VyY2UgY29kZSBvZiBjb25zdHJ1Y3Rvci5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUuX3NvdXJjZSA9ICcnO1xuXG4vKipcbiAqIEN1cnJlbnQgaW5kZXggaW4gc291cmNlIGNvZGUuXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLl9jdXJyZW50SW5kZXggPSAwO1xuXG4vKipcbiAqIEN1cnJlbnQgaW5kZXggaW4gc291cmNlIGNvZGUuXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLl9jdXJyZW50RW5kID0gMDtcblxuLyoqXG4gKiBDdXJyZW50IHN0YXRlLlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5fY3VycmVudFN0YXRlID0gU1RBVEVTLk5PO1xuXG4vKipcbiAqIEdldHMgbmV4dCB0b2tlbiBpbiBzb3VyY2UuXG4gKiBAcmV0dXJucyB7e3N0YXRlOiAobnVtYmVyKSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXJ9fSBUb2tlbiBkZXNjcmlwdG9yLlxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSA9PT0gU1RBVEVTLklMTEVHQUwgfHxcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPT09IFNUQVRFUy5FTkQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdGU6IHRoaXMuX2N1cnJlbnRTdGF0ZSxcblx0XHRcdHN0YXJ0OiB0aGlzLl9jdXJyZW50SW5kZXgsXG5cdFx0XHRlbmQ6IHRoaXMuX2N1cnJlbnRJbmRleCArIDFcblx0XHR9O1xuXHR9XG5cblx0dmFyIHN0YXJ0ID0gdGhpcy5fY3VycmVudEluZGV4LFxuXHRcdHN0YXRlID0gdGhpcy5fY3VycmVudFN0YXRlO1xuXG5cdHN3aXRjaCAodGhpcy5fY3VycmVudFN0YXRlKSB7XG5cdFx0Y2FzZSBTVEFURVMuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHRoaXMucGFyZW50aGVzZXNPcGVuU3RhdGUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgU1RBVEVTLlBBUkVOVEhFU0VTX0NMT1NFOlxuXHRcdFx0dGhpcy5wYXJlbnRoZXNlc0Nsb3NlU3RhdGUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgU1RBVEVTLklERU5USUZJRVI6XG5cdFx0XHR0aGlzLmlkZW50aWZpZXJTdGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBTVEFURVMuQ09NTUE6XG5cdFx0XHR0aGlzLmNvbW1hU3RhdGUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgU1RBVEVTLkZVTkNUSU9OOlxuXHRcdFx0dGhpcy5mdW5jdGlvblN0YXRlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5za2lwV2hpdGVzcGFjZSgpO1xuXHRcdFx0dmFyIGV4cGVjdGVkID0gdGhpcy5fc291cmNlLnN1YnN0cihcblx0XHRcdFx0dGhpcy5fY3VycmVudEluZGV4LCBLRVlXT1JEUy5GVU5DVElPTi5sZW5ndGhcblx0XHRcdCk7XG5cdFx0XHRpZiAoZXhwZWN0ZWQgPT09IEtFWVdPUkRTLkZVTkNUSU9OKSB7XG5cdFx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5GVU5DVElPTjtcblx0XHRcdFx0cmV0dXJuIHRoaXMubmV4dCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFUy5JTExFR0FMO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdGF0ZTogc3RhdGUsXG5cdFx0c3RhcnQ6IHN0YXJ0LFxuXHRcdGVuZDogdGhpcy5fY3VycmVudEVuZFxuXHR9O1xufTtcblxuLyoqXG4gKiBTa2lwcyBhbGwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUuc2tpcFdoaXRlc3BhY2UgPSBmdW5jdGlvbiAoKSB7XG5cdHdoaWxlIChcblx0XHR0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9zb3VyY2UubGVuZ3RoICYmXG5cdFx0V0hJVEVTUEFDRV9URVNULnRlc3QodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0pKSB7XG5cdFx0dGhpcy5fY3VycmVudEluZGV4Kys7XG5cdH1cbn07XG5cbi8qKlxuICogRGVzY3JpYmVzIFBBUkVOVEhFU0VTX09QRU4gc3RhdGUgb2YgbWFjaGluZS5cbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLnBhcmVudGhlc2VzT3BlblN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9jdXJyZW50SW5kZXgrKztcblx0dGhpcy5fY3VycmVudEVuZCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcblxuXHR0aGlzLnNraXBXaGl0ZXNwYWNlKCk7XG5cdGlmIChJREVOVElGSUVSX1RFU1QudGVzdCh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSkpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuSURFTlRJRklFUjtcblx0fSBlbHNlIGlmICh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSA9PT0gJyknKSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLlBBUkVOVEhFU0VTX0NMT1NFO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5JTExFR0FMO1xuXHR9XG59O1xuXG4vKipcbiAqIERlc2NyaWJlcyBQQVJFTlRIRVNFU19DTE9TRSBzdGF0ZSBvZiBtYWNoaW5lLlxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUucGFyZW50aGVzZXNDbG9zZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9jdXJyZW50SW5kZXgrKztcblx0dGhpcy5fY3VycmVudEVuZCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcblx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLkVORDtcbn07XG5cbi8qKlxuICogRGVzY3JpYmVzIEZVTkNUSU9OIHN0YXRlIG9mIG1hY2hpbmUuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5mdW5jdGlvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9jdXJyZW50SW5kZXggKz0gS0VZV09SRFMuRlVOQ1RJT04ubGVuZ3RoO1xuXHR0aGlzLl9jdXJyZW50RW5kID0gdGhpcy5fY3VycmVudEluZGV4O1xuXG5cdHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcblxuXHRpZiAodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0gPT09ICcoJykge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5QQVJFTlRIRVNFU19PUEVOO1xuXHR9IGVsc2UgaWYgKElERU5USUZJRVJfVEVTVC50ZXN0KHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdKSkge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5JREVOVElGSUVSO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5JTExFR0FMO1xuXHR9XG59O1xuXG4vKipcbiAqIERlc2NyaWJlcyBJREVOVElGSUVSIHN0YXRlIG9mIG1hY2hpbmUuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5pZGVudGlmaWVyU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHdoaWxlIChcblx0XHR0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9zb3VyY2UubGVuZ3RoICYmXG5cdFx0SURFTlRJRklFUl9URVNULnRlc3QodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0pKSB7XG5cdFx0dGhpcy5fY3VycmVudEluZGV4Kys7XG5cdH1cblxuXHR0aGlzLl9jdXJyZW50RW5kID0gdGhpcy5fY3VycmVudEluZGV4O1xuXG5cdHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcblx0aWYgKHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdID09PSAnKCcpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuUEFSRU5USEVTRVNfT1BFTjtcblx0fSBlbHNlIGlmICh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSA9PT0gJyknKSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLlBBUkVOVEhFU0VTX0NMT1NFO1xuXHR9IGVsc2UgaWYgKHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdID09PSAnLCcpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuQ09NTUE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLklMTEVHQUw7XG5cdH1cbn07XG5cbi8qKlxuICogRGVzY3JpYmVzIENPTU1BIHN0YXRlIG9mIG1hY2hpbmUuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5jb21tYVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9jdXJyZW50SW5kZXgrKztcblx0dGhpcy5fY3VycmVudEVuZCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcblxuXHR0aGlzLnNraXBXaGl0ZXNwYWNlKCk7XG5cdGlmIChJREVOVElGSUVSX1RFU1QudGVzdCh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSkpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuSURFTlRJRklFUjtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLklMTEVHQUw7XG59OyIsIi8qXG4gKiBjYXRiZXJyeS1sb2NhdG9yXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktbG9jYXRvcidzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnktbG9jYXRvciB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VMb2NhdG9yO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0Q29uc3RydWN0b3JUb2tlbml6ZXIgPSByZXF1aXJlKCcuL0NvbnN0cnVjdG9yVG9rZW5pemVyJyk7XG5cbnZhciBERVBFTkRFTkNZX1JFR0VYUCA9IC9eXFwkXFx3Ky8sXG5cdEVSUk9SX0NPTlNUUlVDVE9SX1NIT1VMRF9CRV9GVU5DVElPTiA9ICdDb25zdHJ1Y3RvciBzaG91bGQgYmUgYSBmdW5jdGlvbicsXG5cdEVSUk9SX1RZUEVfTk9UX1JFR0lTVEVSRUQgPSAnVHlwZSBcIiVzXCIgbm90IHJlZ2lzdGVyZWQnLFxuXHRFUlJPUl9UWVBFX1NIT1VMRF9CRV9TVFJJTkcgPSAnVHlwZSBuYW1lIFwiJXNcIiBzaG91bGQgYmUgYSBzdHJpbmcnO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHNlcnZpY2UgbG9jYXRvci5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTZXJ2aWNlTG9jYXRvcigpIHtcblx0dGhpcy5fcmVnaXN0cmF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogQ3VycmVudCB0eXBlIHJlZ2lzdHJhdGlvbnMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3RlY3RlZFxuICovXG5TZXJ2aWNlTG9jYXRvci5wcm90b3R5cGUuX3JlZ2lzdHJhdGlvbnMgPSBudWxsO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBuZXcgdHlwZSBpbiBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUsIHdoaWNoIHdpbGwgYmUgYWxpYXMgaW4gb3RoZXIgY29uc3RydWN0b3JzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3IgQ29uc3RydWN0b3Igd2hpY2hcbiAqIGluaXRpYWxpemVzIGluc3RhbmNlIG9mIHNwZWNpZmllZCB0eXBlLlxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzIFNldCBvZiBuYW1lZCBwYXJhbWV0ZXJzXG4gKiB3aGljaCB3aWxsIGJlIGFsc28gaW5qZWN0ZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBpc1NpbmdsZXRvbiBJZiB0cnVlIGV2ZXJ5IHJlc29sdmUgd2lsbCByZXR1cm5cbiAqIHRoZSBzYW1lIGluc3RhbmNlLlxuICovXG5TZXJ2aWNlTG9jYXRvci5wcm90b3R5cGUucmVnaXN0ZXIgPVxuXHRmdW5jdGlvbiAodHlwZSwgY29uc3RydWN0b3IsIHBhcmFtZXRlcnMsIGlzU2luZ2xldG9uKSB7XG5cdFx0dGhyb3dJZk5vdEZ1bmN0aW9uKGNvbnN0cnVjdG9yKTtcblx0XHR0aHJvd0lmTm90U3RyaW5nKHR5cGUpO1xuXG5cdFx0aW5pdGlhbGl6ZVJlZ2lzdHJhdGlvbih0eXBlLCB0aGlzKTtcblx0XHR2YXIgcGFyYW1ldGVyTmFtZXMgPSBnZXRQYXJhbWV0ZXJOYW1lcyhjb25zdHJ1Y3Rvcik7XG5cblx0XHR0aGlzLl9yZWdpc3RyYXRpb25zW3R5cGVdLnVuc2hpZnQoe1xuXHRcdFx0Y29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuXHRcdFx0cGFyYW1ldGVyczogcGFyYW1ldGVycyB8fCB7fSxcblx0XHRcdHBhcmFtZXRlck5hbWVzOiBwYXJhbWV0ZXJOYW1lcyxcblx0XHRcdGlzU2luZ2xldG9uOiBCb29sZWFuKGlzU2luZ2xldG9uKSxcblx0XHRcdHNpbmdsZUluc3RhbmNlOiBudWxsXG5cdFx0fSk7XG5cdH07XG5cbi8qKlxuICogUmVnaXN0ZXJzIHNpbmdsZSBpbnN0YW5jZSBmb3Igc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2UgSW5zdGFuY2UgdG8gcmVnaXN0ZXIuXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24gKHR5cGUsIGluc3RhbmNlKSB7XG5cdHRocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cdGluaXRpYWxpemVSZWdpc3RyYXRpb24odHlwZSwgdGhpcyk7XG5cblx0dGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXS51bnNoaWZ0KHtcblx0XHRjb25zdHJ1Y3RvcjogaW5zdGFuY2UuY29uc3RydWN0b3IsXG5cdFx0cGFyYW1ldGVyczoge30sXG5cdFx0cGFyYW1ldGVyTmFtZXM6IFtdLFxuXHRcdGlzU2luZ2xldG9uOiB0cnVlLFxuXHRcdHNpbmdsZUluc3RhbmNlOiBpbnN0YW5jZVxuXHR9KTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgbGFzdCByZWdpc3RlcmVkIGltcGxlbWVudGF0aW9uIGJ5IHR5cGUgbmFtZVxuICogaW5jbHVkaW5nIGFsbCBpdHMgZGVwZW5kZW5jaWVzIHJlY3Vyc2l2ZWx5LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBuYW1lLlxuICogQHJldHVybnMge09iamVjdH0gSW5zdGFuY2Ugb2Ygc3BlY2lmaWVkIHR5cGUuXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dGhyb3dJZk5vdFN0cmluZyh0eXBlKTtcblx0dGhyb3dJZk5vVHlwZSh0aGlzLl9yZWdpc3RyYXRpb25zLCB0eXBlKTtcblx0dmFyIGZpcnN0UmVnaXN0cmF0aW9uID0gdGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXVswXTtcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKGZpcnN0UmVnaXN0cmF0aW9uLCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgYWxsIHJlZ2lzdGVyZWQgaW1wbGVtZW50YXRpb25zIGJ5IHR5cGUgbmFtZVxuICogaW5jbHVkaW5nIGFsbCBkZXBlbmRlbmNpZXMgcmVjdXJzaXZlbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IG9mIGluc3RhbmNlcyBzcGVjaWZpZWQgdHlwZS5cbiAqL1xuU2VydmljZUxvY2F0b3IucHJvdG90eXBlLnJlc29sdmVBbGwgPSBmdW5jdGlvbiAodHlwZSkge1xuXHR0aHJvd0lmTm90U3RyaW5nKHR5cGUpO1xuXHR0cnkge1xuXHRcdHRocm93SWZOb1R5cGUodGhpcy5fcmVnaXN0cmF0aW9ucywgdHlwZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0cmV0dXJuIHRoaXMuX3JlZ2lzdHJhdGlvbnNbdHlwZV0ubWFwKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcblx0XHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UocmVnaXN0cmF0aW9uLCB0aGlzKTtcblx0fSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIGluc3RhbmNlIG9mIHNwZWNpZmllZCBjb25zdHJ1Y3RvciBpbmNsdWRpbmcgZGVwZW5kZW5jaWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3IgQ29uc3RydWN0b3IgZm9yIGluc3RhbmNlIGNyZWF0aW9uLlxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzIFNldCBvZiBpdHMgcGFyYW1ldGVycyB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBJbnN0YW5jZSBvZiBzcGVjaWZpZWQgY29uc3RydWN0b3IuXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS5yZXNvbHZlSW5zdGFuY2UgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IsIHBhcmFtZXRlcnMpIHtcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKHtcblx0XHRjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG5cdFx0cGFyYW1ldGVyczogcGFyYW1ldGVycyB8fCB7fSxcblx0XHRwYXJhbWV0ZXJOYW1lczogZ2V0UGFyYW1ldGVyTmFtZXMoY29uc3RydWN0b3IpLFxuXHRcdGlzU2luZ2xldG9uOiBmYWxzZSxcblx0XHRzaW5nbGVJbnN0YW5jZTogbnVsbFxuXHR9LCB0aGlzKTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlcnMgYWxsIHJlZ2lzdHJhdGlvbnMgb2Ygc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUuXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dGhyb3dJZk5vdFN0cmluZyh0eXBlKTtcblx0ZGVsZXRlIHRoaXMuX3JlZ2lzdHJhdGlvbnNbdHlwZV07XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHJlZ2lzdHJhdGlvbiBhcnJheSBmb3Igc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBjb250ZXh0IENvbnRleHQgb2YgZXhlY3V0aW9uLlxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplUmVnaXN0cmF0aW9uKHR5cGUsIGNvbnRleHQpIHtcblx0aWYgKCEodHlwZSBpbiBjb250ZXh0Ll9yZWdpc3RyYXRpb25zKSkge1xuXHRcdGNvbnRleHQuX3JlZ2lzdHJhdGlvbnNbdHlwZV0gPSBbXTtcblx0fVxufVxuXG4vKipcbiAqIFRocm93cyBlcnJvciBpZiBzcGVjaWZpZWQgcmVnaXN0cmF0aW9uIGlzIG5vdCBmb3VuZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdpc3RyYXRpb25zIEN1cnJlbnQgcmVnaXN0cmF0aW9ucyBzZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIHRvIGNoZWNrLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmTm9UeXBlKHJlZ2lzdHJhdGlvbnMsIHR5cGUpIHtcblx0aWYgKCEodHlwZSBpbiByZWdpc3RyYXRpb25zKSB8fCByZWdpc3RyYXRpb25zW3R5cGVdLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcih1dGlsLmZvcm1hdChFUlJPUl9UWVBFX05PVF9SRUdJU1RFUkVELCB0eXBlKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaHJvd3MgZXJyb3IgaWYgc3BlY2lmaWVkIGNvbnN0cnVjdG9yIGlzIG5vdCBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3IgQ29uc3RydWN0b3IgdG8gY2hlY2suXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZOb3RGdW5jdGlvbihjb25zdHJ1Y3Rvcikge1xuXHRpZiAoY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihFUlJPUl9DT05TVFJVQ1RPUl9TSE9VTERfQkVfRlVOQ1RJT04pO1xufVxuXG4vKipcbiAqIFRocm93cyBlcnJvciBpZiBzcGVjaWZpZWQgdHlwZSBuYW1lIGlzIG5vdCBhIHN0cmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZSB0byBjaGVjay5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZk5vdFN0cmluZyh0eXBlKSB7XG5cdGlmICh0eXBlb2YgKHR5cGUpID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcih1dGlsLmZvcm1hdChFUlJPUl9UWVBFX1NIT1VMRF9CRV9TVFJJTkcsIHR5cGUpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGluc3RhbmNlIG9mIHR5cGUgc3BlY2lmaWVkIGFuZCBwYXJhbWV0ZXJzIGluIHJlZ2lzdHJhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdpc3RyYXRpb24gU3BlY2lmaWVkIHJlZ2lzdHJhdGlvbiBvZiB0eXBlLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gY29udGV4dCBDb250ZXh0IG9mIGV4ZWN1dGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEluc3RhbmNlIG9mIHR5cGUgc3BlY2lmaWVkIGluIHJlZ2lzdHJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UocmVnaXN0cmF0aW9uLCBjb250ZXh0KSB7XG5cdGlmIChyZWdpc3RyYXRpb24uaXNTaW5nbGV0b24gJiYgcmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJhdGlvbi5zaW5nbGVJbnN0YW5jZTtcblx0fVxuXG5cdHZhciBpbnN0YW5jZVBhcmFtZXRlcnMgPSBnZXRQYXJhbWV0ZXJzKHJlZ2lzdHJhdGlvbiwgY29udGV4dCksXG5cdFx0aW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHJlZ2lzdHJhdGlvbi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXHRyZWdpc3RyYXRpb24uY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIGluc3RhbmNlUGFyYW1ldGVycyk7XG5cblx0aWYgKHJlZ2lzdHJhdGlvbi5pc1NpbmdsZXRvbikge1xuXHRcdHJlZ2lzdHJhdGlvbi5zaW5nbGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuXHR9XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4vKipcbiAqIEdldHMgY29uc3RydWN0b3IgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gdHlwZSBjb25zdHJ1Y3Rvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdpc3RyYXRpb24gVHlwZSByZWdpc3RyYXRpb24uXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBjb250ZXh0IENvbnRleHQgb2YgZXhlY3V0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiByZXNvbHZlZCBkZXBlbmRlbmNpZXMgdG8gaW5qZWN0LlxuICovXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJzKHJlZ2lzdHJhdGlvbiwgY29udGV4dCkge1xuXHRyZXR1cm4gcmVnaXN0cmF0aW9uLnBhcmFtZXRlck5hbWVzLm1hcChmdW5jdGlvbiAocGFyYW1ldGVyTmFtZSkge1xuXHRcdHZhciBkZXBlbmRlbmN5TmFtZSA9IGdldERlcGVuZGVuY3lOYW1lKHBhcmFtZXRlck5hbWUpO1xuXHRcdHJldHVybiBkZXBlbmRlbmN5TmFtZSA9PT0gbnVsbCA/XG5cdFx0XHRyZWdpc3RyYXRpb24ucGFyYW1ldGVyc1twYXJhbWV0ZXJOYW1lXSA6XG5cdFx0XHR0aGlzLnJlc29sdmUoZGVwZW5kZW5jeU5hbWUpO1xuXHR9LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZXRzIG5hbWUgb2YgZGVwZW5kZW5jeSB0eXBlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlck5hbWUgTmFtZSBvZiBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IE5hbWUgb2YgZGVwZW5kZW5jeSB0eXBlLlxuICovXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5TmFtZShwYXJhbWV0ZXJOYW1lKSB7XG5cdGlmICghREVQRU5ERU5DWV9SRUdFWFAudGVzdChwYXJhbWV0ZXJOYW1lKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHBhcmFtZXRlck5hbWUuc3Vic3RyKDEsIHBhcmFtZXRlck5hbWUubGVuZ3RoIC0gMSk7XG59XG5cbi8qKlxuICogR2V0cyBhbGwgcGFyYW1ldGVyIG5hbWVzIHVzZWQgaW4gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBBcnJheSBvZiBwYXJhbWV0ZXIgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlck5hbWVzKGNvbnN0cnVjdG9yKSB7XG5cdHZhciBzb3VyY2UgPSBjb25zdHJ1Y3Rvci50b1N0cmluZygpLFxuXHRcdHRva2VuaXplciA9IG5ldyBDb25zdHJ1Y3RvclRva2VuaXplcihzb3VyY2UpLFxuXHRcdHJlc3VsdCA9IFtdLFxuXHRcdHRva2VuID0ge1xuXHRcdFx0c3RhdGU6IENvbnN0cnVjdG9yVG9rZW5pemVyLlNUQVRFUy5OTyxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZW5kOiAwXG5cdFx0fSxcblx0XHRhcmVQYXJhbWV0ZXJzU3RhcnRlZCA9IGZhbHNlO1xuXG5cdHdoaWxlIChcblx0XHR0b2tlbi5zdGF0ZSAhPT0gQ29uc3RydWN0b3JUb2tlbml6ZXIuU1RBVEVTLkVORCAmJlxuXHRcdHRva2VuLnN0YXRlICE9PSBDb25zdHJ1Y3RvclRva2VuaXplci5TVEFURVMuSUxMRUdBTCkge1xuXHRcdHRva2VuID0gdG9rZW5pemVyLm5leHQoKTtcblx0XHRpZiAodG9rZW4uc3RhdGUgPT09IENvbnN0cnVjdG9yVG9rZW5pemVyLlNUQVRFUy5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0XHRhcmVQYXJhbWV0ZXJzU3RhcnRlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZVBhcmFtZXRlcnNTdGFydGVkICYmXG5cdFx0XHR0b2tlbi5zdGF0ZSA9PT0gQ29uc3RydWN0b3JUb2tlbml6ZXIuU1RBVEVTLklERU5USUZJRVIpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHNvdXJjZS5zdWJzdHJpbmcodG9rZW4uc3RhcnQsIHRva2VuLmVuZCkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVIUjtcblxudmFyIFVIUkJhc2UgPSByZXF1aXJlKCcuLi9saWIvVUhSQmFzZScpLFxuXHRQcm9taXNlID0gcmVxdWlyZSgncHJvbWlzZScpLFxuXHRVUkkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKS5VUkksXG5cdHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8vIGlmIGJyb3dzZXIgc3RpbGwgZG9lcyBub3QgaGF2ZSBwcm9taXNlcyB0aGVuIGFkZCBpdC5cbmlmICghKCdQcm9taXNlJyBpbiB3aW5kb3cpKSB7XG5cdHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcbn1cblxudXRpbC5pbmhlcml0cyhVSFIsIFVIUkJhc2UpO1xuXG52YXIgTk9OX1NBRkVfSEVBREVSUyA9IHtcblx0Y29va2llOiB0cnVlLFxuXHQnYWNjZXB0LWNoYXJzZXQnOiB0cnVlXG59O1xuXG52YXIgRVJST1JfQ09OTkVDVElPTiA9ICdDb25uZWN0aW9uIGVycm9yJyxcblx0RVJST1JfVElNRU9VVCA9ICdSZXF1ZXN0IHRpbWVvdXQnLFxuXHRFUlJPUl9BQk9SVEVEID0gJ1JlcXVlc3QgYWJvcnRlZCc7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgY2xpZW50LXNpZGUgSFRUUChTKSByZXF1ZXN0IGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtXaW5kb3d9ICR3aW5kb3cgQ3VycmVudCB3aW5kb3cgb2JqZWN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFVIUigkd2luZG93KSB7XG5cdFVIUkJhc2UuY2FsbCh0aGlzKTtcblx0dGhpcy53aW5kb3cgPSAkd2luZG93O1xufVxuXG4vKipcbiAqIEN1cnJlbnQgaW5zdGFuY2Ugb2Ygd2luZG93LlxuICogQHR5cGUge1dpbmRvd31cbiAqL1xuVUhSLnByb3RvdHlwZS53aW5kb3cgPSBudWxsO1xuXG4vKipcbiAqIERvZXMgcmVxdWVzdCB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzIHVzaW5nIHByb3RvY29sIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlcnMubWV0aG9kIEhUVFAgbWV0aG9kLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlcnMudXJsIFVSTCBmb3IgcmVxdWVzdC5cbiAqIEBwYXJhbSB7VVJJfSBwYXJhbWV0ZXJzLnVyaSBVUkkgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMuaGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gcGFyYW1ldGVycy5kYXRhIERhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbWV0ZXJzLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcbiAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuVUhSLnByb3RvdHlwZS5fZG9SZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdE9iamVjdC5rZXlzKHBhcmFtZXRlcnMuaGVhZGVycylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0aWYgKE5PTl9TQUZFX0hFQURFUlMuaGFzT3duUHJvcGVydHkobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdFx0XHRkZWxldGUgcGFyYW1ldGVycy5oZWFkZXJzW25hbWVdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlcXVlc3RFcnJvciA9IG51bGwsXG5cdFx0XHR4aHIgPSBuZXcgc2VsZi53aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVxdWVzdEVycm9yID0gbmV3IEVycm9yKEVSUk9SX0FCT1JURUQpO1xuXHRcdFx0cmVqZWN0KHJlcXVlc3RFcnJvcik7XG5cdFx0fTtcblx0XHR4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVxdWVzdEVycm9yID0gbmV3IEVycm9yKEVSUk9SX1RJTUVPVVQpO1xuXHRcdFx0cmVqZWN0KHJlcXVlc3RFcnJvcik7XG5cdFx0fTtcblx0XHR4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlcXVlc3RFcnJvciA9IG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCB8fCBFUlJPUl9DT05ORUNUSU9OKTtcblx0XHRcdHJlamVjdChyZXF1ZXN0RXJyb3IpO1xuXHRcdH07XG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVxdWVzdEVycm9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBzdGF0dXNPYmplY3QgPSBnZXRTdGF0dXNPYmplY3QoeGhyKSxcblx0XHRcdFx0Y29udGVudCA9IHNlbGYuY29udmVydFJlc3BvbnNlKFxuXHRcdFx0XHRcdHN0YXR1c09iamVjdC5oZWFkZXJzLFxuXHRcdFx0XHRcdHhoci5yZXNwb25zZVRleHRcblx0XHRcdFx0KTtcblx0XHRcdGZ1bGZpbGwoe1xuXHRcdFx0XHRzdGF0dXM6IHN0YXR1c09iamVjdCxcblx0XHRcdFx0Y29udGVudDogY29udGVudFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciB1c2VyID0gcGFyYW1ldGVycy51cmkuYXV0aG9yaXR5LnVzZXJJbmZvID9cblx0XHRcdFx0cGFyYW1ldGVycy51cmkuYXV0aG9yaXR5LnVzZXJJbmZvLnVzZXIgOiBudWxsLFxuXHRcdFx0cGFzc3dvcmQgPSBwYXJhbWV0ZXJzLnVyaS5hdXRob3JpdHkudXNlckluZm8gP1xuXHRcdFx0XHRwYXJhbWV0ZXJzLnVyaS5hdXRob3JpdHkudXNlckluZm8ucGFzc3dvcmQgOiBudWxsO1xuXHRcdHhoci5vcGVuKFxuXHRcdFx0cGFyYW1ldGVycy5tZXRob2QsIHBhcmFtZXRlcnMudXJpLnRvU3RyaW5nKCksIHRydWUsXG5cdFx0XHR1c2VyIHx8IHVuZGVmaW5lZCwgcGFzc3dvcmQgfHwgdW5kZWZpbmVkXG5cdFx0KTtcblx0XHR4aHIudGltZW91dCA9IHBhcmFtZXRlcnMudGltZW91dDtcblxuXHRcdGlmIChwYXJhbWV0ZXJzLndpdGhDcmVkZW50aWFscykge1xuXHRcdFx0eGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmtleXMocGFyYW1ldGVycy5oZWFkZXJzKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKGhlYWRlck5hbWUpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcdFx0aGVhZGVyTmFtZSwgcGFyYW1ldGVycy5oZWFkZXJzW2hlYWRlck5hbWVdXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdHhoci5zZW5kKHBhcmFtZXRlcnMuZGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHN0YXRlIG9iamVjdCBmb3Igc3BlY2lmaWVkIGpRdWVyeSBYSFIgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSB4aHIgWEhSIG9iamVjdC5cbiAqIEByZXR1cm5zIHt7Y29kZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGhlYWRlcnM6IE9iamVjdH19IFN0YXR1cyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXR1c09iamVjdCh4aHIpIHtcblx0dmFyIGhlYWRlcnMgPSB7fTtcblxuXHRpZiAoIXhocikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2RlOiAwLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHhoclxuXHRcdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG5cdFx0XHR2YXIgZGVsaW1pdGVySW5kZXggPSBoZWFkZXIuaW5kZXhPZignOicpO1xuXHRcdFx0aWYgKGRlbGltaXRlckluZGV4IDw9IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGhlYWRlck5hbWUgPSBoZWFkZXJcblx0XHRcdFx0LnN1YnN0cmluZygwLCBkZWxpbWl0ZXJJbmRleClcblx0XHRcdFx0LnRyaW0oKVxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHRcdGhlYWRlcnNbaGVhZGVyTmFtZV0gPSBoZWFkZXJcblx0XHRcdFx0LnN1YnN0cmluZyhkZWxpbWl0ZXJJbmRleCArIDEpXG5cdFx0XHRcdC50cmltKCk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHQvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL2dvby5nbC9pZHNwU3Jcblx0XHRjb2RlOiB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cyxcblx0XHR0ZXh0OiB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogeGhyLnN0YXR1c1RleHQsXG5cdFx0aGVhZGVyczogaGVhZGVyc1xuXHR9O1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVUhSID0gcmVxdWlyZSgnLi9saWIvVUhSJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHQvKipcblx0ICogUmVnaXN0ZXJzIFVIUiBpbiBzZXJ2ZXItc2lkZSBzZXJ2aWNlIGxvY2F0b3IuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgQ2F0YmVycnkncyBzZXJ2aWNlIGxvY2F0b3IuXG5cdCAqL1xuXHRyZWdpc3RlcjogZnVuY3Rpb24gKGxvY2F0b3IpIHtcblx0XHR2YXIgY29uZmlnID0gbG9jYXRvci5yZXNvbHZlKCdjb25maWcnKTtcblx0XHRsb2NhdG9yLnJlZ2lzdGVyKCd1aHInLCBVSFIsIGNvbmZpZywgdHJ1ZSk7XG5cdH0sXG5cdFVIUjogVUhSXG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVIUkJhc2U7XG5cbnZhciBjYXRiZXJyeVVyaSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LXVyaScpLFxuXHRRdWVyeSA9IGNhdGJlcnJ5VXJpLlF1ZXJ5LFxuXHRVUkkgPSBjYXRiZXJyeVVyaS5VUkk7XG5cbnZhciBFUlJPUl9VTlNVUFBPUlRFRF9QUk9UT0NPTCA9ICdQcm90b2NvbCBpcyB1bnN1cHBvcnRlZCcsXG5cdEVSUk9SX1BBUkFNRVRFUlNfU0hPVUxEX0JFX09CSkVDVCA9ICdSZXF1ZXN0IHBhcmFtZXRlcnMgc2hvdWxkIGJlIG9iamVjdCcsXG5cdEVSUk9SX1VSTF9JU19SRVFVSVJFRCA9ICdVUkwgaXMgcmVxdWlyZWQgcGFyYW1ldGVyJyxcblx0RVJST1JfTUVUSE9EX0lTX1JFUVVJUkVEID0gJ1JlcXVlc3QgbWV0aG9kIGlzIHJlcXVpcmVkIHBhcmFtZXRlcicsXG5cdEVSUk9SX0hPU1RfSVNfUkVRVUlSRUQgPSAnSG9zdCBpbiBVUkwgaXMgcmVxdWlyZWQnLFxuXHRFUlJPUl9TQ0hFTUVfSVNfUkVRVUlSRUQgPSAnU2NoZW1lIGluIFVSTCBpcyByZXF1aXJlZCcsXG5cdEVSUk9SX1RJTUVPVVRfU0hPVUxEX0JFX05VTUJFUiA9ICdUaW1lb3V0IHNob3VsZCBiZSBhIG51bWJlcicsXG5cdERFRkFVTFRfVElNRU9VVCA9IDMwMDAwLFxuXHRIVFRQX1BST1RPQ09MX1JFR0VYUCA9IC9eKGh0dHApcz8kL2k7XG5cbnZhciBNRVRIT0RTID0ge1xuXHRHRVQ6ICdHRVQnLFxuXHRIRUFEOiAnSEVBRCcsXG5cdFBPU1Q6ICdQT1NUJyxcblx0UFVUOiAnUFVUJyxcblx0UEFUQ0g6ICdQQVRDSCcsXG5cdERFTEVURTogJ0RFTEVURScsXG5cdE9QVElPTlM6ICdPUFRJT05TJyxcblx0VFJBQ0U6ICdUUkFDRScsXG5cdENPTk5FQ1Q6ICdDT05ORUNUJ1xufTtcblxuVUhSQmFzZS5UWVBFUyA9IHtcblx0VVJMX0VOQ09ERUQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuXHRKU09OOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFBMQUlOX1RFWFQ6ICd0ZXh0L3BsYWluJyxcblx0SFRNTDogJ3RleHQvaHRtbCdcbn07XG5cblVIUkJhc2UuQ0hBUlNFVCA9ICdVVEYtOCc7XG5cblVIUkJhc2UuREVGQVVMVF9HRU5FUkFMX0hFQURFUlMgPSB7XG5cdEFjY2VwdDogVUhSQmFzZS5UWVBFUy5KU09OICsgJzsgcT0wLjcsICcgK1xuXHRcdFVIUkJhc2UuVFlQRVMuSFRNTCArICc7IHE9MC4yLCAnICtcblx0XHRVSFJCYXNlLlRZUEVTLlBMQUlOX1RFWFQgKyAnOyBxPTAuMScsXG5cdCdBY2NlcHQtQ2hhcnNldCc6IFVIUkJhc2UuQ0hBUlNFVCArICc7IHE9MSdcbn07XG5cblVIUkJhc2UuQ0hBUlNFVF9QQVJBTUVURVIgPSAnOyBjaGFyc2V0PScgKyBVSFJCYXNlLkNIQVJTRVQ7XG5VSFJCYXNlLlVSTF9FTkNPREVEX0VOVElUWV9DT05URU5UX1RZUEUgPSBVSFJCYXNlLlRZUEVTLlVSTF9FTkNPREVEICtcblx0VUhSQmFzZS5DSEFSU0VUX1BBUkFNRVRFUjtcblxuVUhSQmFzZS5KU09OX0VOVElUWV9DT05URU5UX1RZUEUgPSBVSFJCYXNlLlRZUEVTLkpTT04gK1xuXHRVSFJCYXNlLkNIQVJTRVRfUEFSQU1FVEVSO1xuXG5VSFJCYXNlLlBMQUlOX1RFWFRfRU5USVRZX0NPTlRFTlRfVFlQRSA9IFVIUkJhc2UuVFlQRVMuUExBSU5fVEVYVCArXG5cdFVIUkJhc2UuQ0hBUlNFVF9QQVJBTUVURVI7XG5cbi8vIFRoaXMgbW9kdWxlIHdlcmUgZGV2ZWxvcGVkIHVzaW5nIEhUVFAvMS4xdjIgUkZDIDI2MTZcbi8vIChodHRwOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi8pXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIEJhc2ljIFVuaXZlcnNhbCBIVFRQKFMpIFJlcXVlc3QgaW1wbGVtZW50YXRpb24uXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVUhSQmFzZSgpIHsgfVxuXG4vKipcbiAqIERvZXMgR0VUIHJlcXVlc3QgdG8gSFRUUCBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBvcHRpb25zLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXI/fSBvcHRpb25zLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG4gKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHJlc3VsdCB3aXRoIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdHZhciBwYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zKTtcblx0cGFyYW1ldGVycy5tZXRob2QgPSBNRVRIT0RTLkdFVDtcblx0cGFyYW1ldGVycy51cmwgPSB1cmw7XG5cdHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW1ldGVycyk7XG59O1xuXG4vKipcbiAqIERvZXMgUE9TVCByZXF1ZXN0IHRvIEhUVFAgc2VydmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgdG8gcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMuaGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cbiAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gb3B0aW9ucy5kYXRhIERhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyP30gb3B0aW9ucy50aW1lb3V0IFJlcXVlc3QgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IG9wdGlvbnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQgd2l0aCBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuICovXG5VSFJCYXNlLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0dmFyIHBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMpO1xuXHRwYXJhbWV0ZXJzLm1ldGhvZCA9IE1FVEhPRFMuUE9TVDtcblx0cGFyYW1ldGVycy51cmwgPSB1cmw7XG5cdHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW1ldGVycyk7XG59O1xuXG4vKipcbiAqIERvZXMgUFVUIHJlcXVlc3QgdG8gSFRUUCBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBvcHRpb25zLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXI/fSBvcHRpb25zLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG4gKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHJlc3VsdCB3aXRoIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdHZhciBwYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zKTtcblx0cGFyYW1ldGVycy5tZXRob2QgPSBNRVRIT0RTLlBVVDtcblx0cGFyYW1ldGVycy51cmwgPSB1cmw7XG5cdHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW1ldGVycyk7XG59O1xuXG4vKipcbiAqIERvZXMgUEFUQ0ggcmVxdWVzdCB0byBIVFRQIHNlcnZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHRvIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IG9wdGlvbnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IG9wdGlvbnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcbiAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUucGF0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHR2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUob3B0aW9ucyk7XG5cdHBhcmFtZXRlcnMubWV0aG9kID0gTUVUSE9EUy5QQVRDSDtcblx0cGFyYW1ldGVycy51cmwgPSB1cmw7XG5cdHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW1ldGVycyk7XG59O1xuXG4vKipcbiAqIERvZXMgREVMRVRFIHJlcXVlc3QgdG8gSFRUUCBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBvcHRpb25zLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXI/fSBvcHRpb25zLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG4gKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHJlc3VsdCB3aXRoIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcblx0dmFyIHBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMpO1xuXHRwYXJhbWV0ZXJzLm1ldGhvZCA9IE1FVEhPRFMuREVMRVRFO1xuXHRwYXJhbWV0ZXJzLnVybCA9IHVybDtcblx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbWV0ZXJzKTtcbn07XG5cbi8qKlxuICogRG9lcyByZXF1ZXN0IHdpdGggc3BlY2lmaWVkIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy5tZXRob2QgSFRUUCBtZXRob2QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy51cmwgVVJMIGZvciByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IHBhcmFtZXRlcnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IHBhcmFtZXRlcnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0c1xuICogdG8gc2VydmVycyB3aXRoIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIHRoaXMuX3ZhbGlkYXRlUmVxdWVzdChwYXJhbWV0ZXJzKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh2YWxpZGF0ZWQpIHtcblx0XHRcdHJldHVybiBzZWxmLl9kb1JlcXVlc3QodmFsaWRhdGVkKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIFVIUiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlcnMubWV0aG9kIEhUVFAgbWV0aG9kLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlcnMudXJsIFVSTCBmb3IgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBwYXJhbWV0ZXJzLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXI/fSBwYXJhbWV0ZXJzLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFuP30gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHNcbiAqIHRvIHNlcnZlcnMgd2l0aCBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICogQHByaXZhdGVcbiAqL1xuLypqc2hpbnQgbWF4Y29tcGxleGl0eTpmYWxzZSAqL1xuVUhSQmFzZS5wcm90b3R5cGUuX3ZhbGlkYXRlUmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG5cdGlmICghcGFyYW1ldGVycyB8fCB0eXBlb2YgKHBhcmFtZXRlcnMpICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfUEFSQU1FVEVSU19TSE9VTERfQkVfT0JKRUNUKSk7XG5cdH1cblxuXHR2YXIgdmFsaWRhdGVkID0gT2JqZWN0LmNyZWF0ZShwYXJhbWV0ZXJzKTtcblxuXHRpZiAodHlwZW9mIChwYXJhbWV0ZXJzLnVybCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9VUkxfSVNfUkVRVUlSRUQpKTtcblx0fVxuXHR2YWxpZGF0ZWQudXJpID0gbmV3IFVSSSh2YWxpZGF0ZWQudXJsKTtcblx0aWYgKCF2YWxpZGF0ZWQudXJpLnNjaGVtZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfU0NIRU1FX0lTX1JFUVVJUkVEKSk7XG5cdH1cblx0aWYgKCFIVFRQX1BST1RPQ09MX1JFR0VYUC50ZXN0KHZhbGlkYXRlZC51cmkuc2NoZW1lKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfVU5TVVBQT1JURURfUFJPVE9DT0wpKTtcblx0fVxuXHRpZiAoIXZhbGlkYXRlZC51cmkuYXV0aG9yaXR5IHx8ICF2YWxpZGF0ZWQudXJpLmF1dGhvcml0eS5ob3N0KSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9IT1NUX0lTX1JFUVVJUkVEKSk7XG5cdH1cblx0aWYgKHR5cGVvZiAodmFsaWRhdGVkLm1ldGhvZCkgIT09ICdzdHJpbmcnIHx8XG5cdFx0ISh2YWxpZGF0ZWQubWV0aG9kIGluIE1FVEhPRFMpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9NRVRIT0RfSVNfUkVRVUlSRUQpKTtcblx0fVxuXG5cdHZhbGlkYXRlZC50aW1lb3V0ID0gdmFsaWRhdGVkLnRpbWVvdXQgfHwgREVGQVVMVF9USU1FT1VUO1xuXHRpZiAodHlwZW9mICh2YWxpZGF0ZWQudGltZW91dCkgIT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9USU1FT1VUX1NIT1VMRF9CRV9OVU1CRVIpKTtcblx0fVxuXG5cdHZhbGlkYXRlZC5oZWFkZXJzID0gdGhpcy5fY3JlYXRlSGVhZGVycyh2YWxpZGF0ZWQuaGVhZGVycyk7XG5cblx0aWYgKCF0aGlzLl9pc1Vwc3RyZWFtUmVxdWVzdChwYXJhbWV0ZXJzLm1ldGhvZCkgJiZcblx0XHR2YWxpZGF0ZWQuZGF0YSAmJiB0eXBlb2YgKHZhbGlkYXRlZC5kYXRhKSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdHZhciBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKHZhbGlkYXRlZC5kYXRhKTtcblxuXHRcdGlmIChkYXRhS2V5cy5sZW5ndGggPiAwICYmICF2YWxpZGF0ZWQudXJpLnF1ZXJ5KSB7XG5cdFx0XHR2YWxpZGF0ZWQudXJpLnF1ZXJ5ID0gbmV3IFF1ZXJ5KCcnKTtcblx0XHR9XG5cblx0XHRkYXRhS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHZhbGlkYXRlZC51cmkucXVlcnkudmFsdWVzW2tleV0gPSB2YWxpZGF0ZWQuZGF0YVtrZXldO1xuXHRcdH0pO1xuXHRcdHZhbGlkYXRlZC5kYXRhID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHR2YXIgZGF0YUFuZEhlYWRlcnMgPSB0aGlzLl9nZXREYXRhVG9TZW5kKFxuXHRcdFx0dmFsaWRhdGVkLmhlYWRlcnMsIHZhbGlkYXRlZC5kYXRhXG5cdFx0KTtcblx0XHR2YWxpZGF0ZWQuaGVhZGVycyA9IGRhdGFBbmRIZWFkZXJzLmhlYWRlcnM7XG5cdFx0dmFsaWRhdGVkLmRhdGEgPSBkYXRhQW5kSGVhZGVycy5kYXRhO1xuXHR9XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWxpZGF0ZWQpO1xufTtcblxuLyoqXG4gKiBHZXRzIGRhdGEgZm9yIHNlbmRpbmcgdmlhIEhUVFAgcmVxdWVzdCB1c2luZyBDb250ZW50IFR5cGUgSFRUUCBoZWFkZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyBIVFRQIGhlYWRlcnMuXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGRhdGEgRGF0YSB0byBzZW5kLlxuICogQHJldHVybnMge3toZWFkZXJzOiBPYmplY3QsIGRhdGE6IE9iamVjdHxzdHJpbmd9fSBEYXRhIGFuZCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5VSFJCYXNlLnByb3RvdHlwZS5fZ2V0RGF0YVRvU2VuZCA9IGZ1bmN0aW9uIChoZWFkZXJzLCBkYXRhKSB7XG5cdHZhciBmb3VuZCA9IGZpbmRDb250ZW50VHlwZShoZWFkZXJzKSxcblx0XHRjb250ZW50VHlwZUhlYWRlciA9IGZvdW5kLm5hbWUsXG5cdFx0Y29udGVudFR5cGUgPSBmb3VuZC50eXBlO1xuXG5cdGlmICghZGF0YSB8fCB0eXBlb2YgKGRhdGEpICE9PSAnb2JqZWN0Jykge1xuXHRcdGRhdGEgPSBkYXRhID8gU3RyaW5nKGRhdGEpIDogJyc7XG5cdFx0aWYgKCFjb250ZW50VHlwZSkge1xuXHRcdFx0aGVhZGVyc1tjb250ZW50VHlwZUhlYWRlcl0gPSBVSFJCYXNlLlBMQUlOX1RFWFRfRU5USVRZX0NPTlRFTlRfVFlQRTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fTtcblx0fVxuXG5cdGlmIChjb250ZW50VHlwZSA9PT0gVUhSQmFzZS5UWVBFUy5KU09OKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxuXHRcdH07XG5cdH1cblxuXHQvLyBvdGhlcndpc2Ugb2JqZWN0IHdpbGwgYmUgc2VudCB3aXRoXG5cdC8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuXHRoZWFkZXJzW2NvbnRlbnRUeXBlSGVhZGVyXSA9IFVIUkJhc2UuVVJMX0VOQ09ERURfRU5USVRZX0NPTlRFTlRfVFlQRTtcblxuXHR2YXIgcXVlcnkgPSBuZXcgUXVlcnkoKTtcblx0cXVlcnkudmFsdWVzID0gZGF0YTtcblx0cmV0dXJuIHtcblx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdGRhdGE6IHF1ZXJ5LnRvU3RyaW5nKClcblx0XHRcdC5yZXBsYWNlKC9cXCsvZywgJyUyQicpXG5cdFx0XHQucmVwbGFjZSgvJTIwL2csICcrJylcblx0fTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBIVFRQIGhlYWRlcnMgZm9yIHJlcXVlc3QgdXNpbmcgZGVmYXVsdHMgYW5kIGN1cnJlbnQgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJIZWFkZXJzIEhUVFAgaGVhZGVycyBvZiBVSFIuXG4gKiBAcHJvdGVjdGVkXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLl9jcmVhdGVIZWFkZXJzID0gZnVuY3Rpb24gKHBhcmFtZXRlckhlYWRlcnMpIHtcblx0aWYgKCFwYXJhbWV0ZXJIZWFkZXJzIHx8IHR5cGVvZiAocGFyYW1ldGVySGVhZGVycykgIT09ICdvYmplY3QnKSB7XG5cdFx0cGFyYW1ldGVySGVhZGVycyA9IHt9O1xuXHR9XG5cdHZhciBoZWFkZXJzID0ge307XG5cblx0T2JqZWN0LmtleXMoVUhSQmFzZS5ERUZBVUxUX0dFTkVSQUxfSEVBREVSUylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyTmFtZSkge1xuXHRcdFx0aGVhZGVyc1toZWFkZXJOYW1lXSA9IFVIUkJhc2UuREVGQVVMVF9HRU5FUkFMX0hFQURFUlNbaGVhZGVyTmFtZV07XG5cdFx0fSk7XG5cblx0T2JqZWN0LmtleXMocGFyYW1ldGVySGVhZGVycylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyTmFtZSkge1xuXHRcdFx0aWYgKHBhcmFtZXRlckhlYWRlcnNbaGVhZGVyTmFtZV0gPT09IG51bGwgfHxcblx0XHRcdFx0cGFyYW1ldGVySGVhZGVyc1toZWFkZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGRlbGV0ZSBoZWFkZXJzW2hlYWRlck5hbWVdO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRoZWFkZXJzW2hlYWRlck5hbWVdID0gcGFyYW1ldGVySGVhZGVyc1toZWFkZXJOYW1lXTtcblx0XHR9KTtcblxuXHRyZXR1cm4gaGVhZGVycztcbn07XG5cbi8qKlxuICogRG9lcyByZXF1ZXN0IHdpdGggc3BlY2lmaWVkIHBhcmFtZXRlcnMgdXNpbmcgcHJvdG9jb2wgaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy5tZXRob2QgSFRUUCBtZXRob2QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy51cmwgVVJMIGZvciByZXF1ZXN0LlxuICogQHBhcmFtIHtVUkl9IHBhcmFtZXRlcnMudXJpIFVSSSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBwYXJhbWV0ZXJzLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtZXRlcnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQgd2l0aCBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuICogQHByb3RlY3RlZFxuICogQGFic3RyYWN0XG4gKi9cbi8vIGpzY3M6ZGlzYWJsZSBkaXNhbGxvd1VudXNlZFBhcmFtc1xuVUhSQmFzZS5wcm90b3R5cGUuX2RvUmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7IH07XG5cbi8qKlxuICogQ29udmVydHMgcmVzcG9uc2UgZGF0YSBhY2NvcmRpbmcgY29udGVudCB0eXBlLlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnMgSFRUUCBoZWFkZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlRGF0YSBEYXRhIGZyb20gcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfE9iamVjdH0gQ29udmVydGVkIGRhdGEuXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLmNvbnZlcnRSZXNwb25zZSA9IGZ1bmN0aW9uIChoZWFkZXJzLCByZXNwb25zZURhdGEpIHtcblx0aWYgKHR5cGVvZiAocmVzcG9uc2VEYXRhKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXNwb25zZURhdGEgPSAnJztcblx0fVxuXHR2YXIgZm91bmQgPSBmaW5kQ29udGVudFR5cGUoaGVhZGVycyksXG5cdFx0Y29udGVudFR5cGUgPSBmb3VuZC50eXBlIHx8IFVIUkJhc2UuVFlQRVMuUExBSU5fVEVYVDtcblxuXHRzd2l0Y2ggKGNvbnRlbnRUeXBlKSB7XG5cdFx0Y2FzZSBVSFJCYXNlLlRZUEVTLkpTT046XG5cdFx0XHR2YXIganNvbjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlRGF0YSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG9cblx0XHRcdH1cblx0XHRcdHJldHVybiBqc29uIHx8IHt9O1xuXHRcdGNhc2UgVUhSQmFzZS5UWVBFUy5VUkxfRU5DT0RFRDpcblx0XHRcdHZhciBvYmplY3Q7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcXVlcnkgPSBuZXcgUXVlcnkocmVzcG9uc2VEYXRhLnJlcGxhY2UoJysnLCAnJTIwJykpO1xuXHRcdFx0XHRvYmplY3QgPSBxdWVyeS52YWx1ZXM7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG9cblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmplY3QgfHwge307XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiByZXNwb25zZURhdGE7XG5cdH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpcyBjdXJyZW50IHF1ZXJ5IG5lZWRzIHRvIHVzZSB1cHN0cmVhbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgSFRUUCBtZXRob2QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgY3VycmVudCBIVFRQIG1ldGhvZCBtZWFucyB1cHN0cmVhbSB1c2FnZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUuX2lzVXBzdHJlYW1SZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXHRyZXR1cm4gKFxuXHRcdG1ldGhvZCA9PT0gTUVUSE9EUy5QT1NUIHx8XG5cdFx0bWV0aG9kID09PSBNRVRIT0RTLlBVVCB8fFxuXHRcdG1ldGhvZCA9PT0gTUVUSE9EUy5QQVRDSFxuXHRcdCk7XG59O1xuXG4vKipcbiAqIEZpbmRzIGNvbnRlbnQgdHlwZSBoZWFkZXIgaW4gaGVhZGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyBIVFRQIGhlYWRlcnMuXG4gKiBAcmV0dXJucyB7e25hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nfX0gTmFtZSBvZiBoZWFkZXIgYW5kIGNvbnRlbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gZmluZENvbnRlbnRUeXBlKGhlYWRlcnMpIHtcblx0dmFyIGNvbnRlbnRUeXBlU3RyaW5nID0gJycsXG5cdFx0Y29udGVudFR5cGVIZWFkZXIgPSAnQ29udGVudC1UeXBlJztcblxuXHRPYmplY3Qua2V5cyhoZWFkZXJzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSAhPT0gJ2NvbnRlbnQtdHlwZScpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29udGVudFR5cGVIZWFkZXIgPSBrZXk7XG5cdFx0XHRjb250ZW50VHlwZVN0cmluZyA9IGhlYWRlcnNba2V5XTtcblx0XHR9KTtcblxuXHR2YXIgdHlwZUFuZFBhcmFtZXRlcnMgPSBjb250ZW50VHlwZVN0cmluZy5zcGxpdCgnOycpLFxuXHRcdGNvbnRlbnRUeXBlID0gdHlwZUFuZFBhcmFtZXRlcnNbMF0udG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiBjb250ZW50VHlwZUhlYWRlcixcblx0XHR0eXBlOiBjb250ZW50VHlwZVxuXHR9O1xufVxuIiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRVUkk6IHJlcXVpcmUoJy4vbGliL1VSSScpLFxuXHRBdXRob3JpdHk6IHJlcXVpcmUoJy4vbGliL0F1dGhvcml0eScpLFxuXHRVc2VySW5mbzogcmVxdWlyZSgnLi9saWIvVXNlckluZm8nKSxcblx0UXVlcnk6IHJlcXVpcmUoJy4vbGliL1F1ZXJ5Jylcbn07IiwiLypcbiAqIGNhdGJlcnJ5LXVyaVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5LXVyaSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnktdXJpIHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aG9yaXR5O1xuXG52YXIgVXNlckluZm8gPSByZXF1aXJlKCcuL1VzZXJJbmZvJyksXG5cdHBlcmNlbnRFbmNvZGluZ0hlbHBlciA9IHJlcXVpcmUoJy4vcGVyY2VudEVuY29kaW5nSGVscGVyJyk7XG5cbnZhciBQT1JUX1JFR0VYUCA9IC9eXFxkKyQvLFxuXHRFUlJPUl9QT1JUID0gJ1VSSSBhdXRob3JpdHkgcG9ydCBtdXN0IHNhdGlzZnkgZXhwcmVzc2lvbiAnICtcblx0XHRQT1JUX1JFR0VYUC50b1N0cmluZygpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIFVSSSBhdXRob3JpdHkgY29tcG9uZW50IHBhcnNlci5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yXG4gKiBAcGFyYW0ge3N0cmluZz99IGF1dGhvcml0eVN0cmluZyBVUkkgYXV0aG9yaXR5IGNvbXBvbmVudCBzdHJpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQXV0aG9yaXR5KGF1dGhvcml0eVN0cmluZykge1xuXHRpZiAodHlwZW9mIChhdXRob3JpdHlTdHJpbmcpID09PSAnc3RyaW5nJyAmJiBhdXRob3JpdHlTdHJpbmcubGVuZ3RoID4gMCkge1xuXHRcdHZhciBmaXJzdEF0SW5kZXggPSBhdXRob3JpdHlTdHJpbmcuaW5kZXhPZignQCcpO1xuXHRcdGlmIChmaXJzdEF0SW5kZXggIT09IC0xKSB7XG5cdFx0XHR2YXIgdXNlckluZm9TdHJpbmcgPSBhdXRob3JpdHlTdHJpbmcuc3Vic3RyaW5nKDAsIGZpcnN0QXRJbmRleCk7XG5cdFx0XHR0aGlzLnVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXJJbmZvU3RyaW5nKTtcblx0XHRcdGF1dGhvcml0eVN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoZmlyc3RBdEluZGV4ICsgMSk7XG5cdFx0fVxuXG5cdFx0dmFyIGxhc3RDb2xvbkluZGV4ID0gYXV0aG9yaXR5U3RyaW5nLmxhc3RJbmRleE9mKCc6Jyk7XG5cdFx0aWYgKGxhc3RDb2xvbkluZGV4ICE9PSAtMSkge1xuXHRcdFx0dmFyIHBvcnRTdHJpbmcgPSBhdXRob3JpdHlTdHJpbmcuc3Vic3RyaW5nKGxhc3RDb2xvbkluZGV4ICsgMSk7XG5cdFx0XHRpZiAobGFzdENvbG9uSW5kZXggPT09IGF1dGhvcml0eVN0cmluZy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdHRoaXMucG9ydCA9ICcnO1xuXHRcdFx0XHRhdXRob3JpdHlTdHJpbmcgPSBhdXRob3JpdHlTdHJpbmcuc3Vic3RyaW5nKDAsIGxhc3RDb2xvbkluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoUE9SVF9SRUdFWFAudGVzdChwb3J0U3RyaW5nKSkge1xuXHRcdFx0XHR0aGlzLnBvcnQgPSBwb3J0U3RyaW5nO1xuXHRcdFx0XHRhdXRob3JpdHlTdHJpbmcgPSBhdXRob3JpdHlTdHJpbmcuc3Vic3RyaW5nKDAsIGxhc3RDb2xvbkluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmhvc3QgPSBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZGVjb2RlKGF1dGhvcml0eVN0cmluZyk7XG5cdH1cbn1cblxuLyoqXG4gKiBDdXJyZW50IHVzZXIgaW5mb3JtYXRpb24uXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4xXG4gKiBAdHlwZSB7VXNlckluZm99XG4gKi9cbkF1dGhvcml0eS5wcm90b3R5cGUudXNlckluZm8gPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgaG9zdC5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkF1dGhvcml0eS5wcm90b3R5cGUuaG9zdCA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBwb3J0LlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjIuM1xuICogQHR5cGUge3N0cmluZ31cbiAqL1xuQXV0aG9yaXR5LnByb3RvdHlwZS5wb3J0ID0gbnVsbDtcblxuLyoqXG4gKiBDbG9uZXMgY3VycmVudCBhdXRob3JpdHkuXG4gKiBAcmV0dXJucyB7QXV0aG9yaXR5fSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG4gKi9cbkF1dGhvcml0eS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBhdXRob3JpdHkgPSBuZXcgQXV0aG9yaXR5KCk7XG5cdGlmICh0aGlzLnVzZXJJbmZvKSB7XG5cdFx0YXV0aG9yaXR5LnVzZXJJbmZvID0gdGhpcy51c2VySW5mby5jbG9uZSgpO1xuXHR9XG5cdGlmICh0eXBlb2YgKHRoaXMuaG9zdCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0YXV0aG9yaXR5Lmhvc3QgPSB0aGlzLmhvc3Q7XG5cdH1cblx0aWYgKHR5cGVvZiAodGhpcy5wb3J0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRhdXRob3JpdHkucG9ydCA9IHRoaXMucG9ydDtcblx0fVxuXHRyZXR1cm4gYXV0aG9yaXR5O1xufTtcblxuLyoqXG4gKiBSZWNvbWJpbmUgYWxsIGF1dGhvcml0eSBjb21wb25lbnRzIGludG8gYXV0aG9yaXR5IHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEF1dGhvcml0eSBjb21wb25lbnQgc3RyaW5nLlxuICovXG5BdXRob3JpdHkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmVzdWx0ID0gJyc7XG5cdGlmICh0aGlzLnVzZXJJbmZvKSB7XG5cdFx0cmVzdWx0ICs9IHRoaXMudXNlckluZm8udG9TdHJpbmcoKSArICdAJztcblx0fVxuXHRpZiAodGhpcy5ob3N0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5ob3N0ICE9PSBudWxsKSB7XG5cdFx0dmFyIGhvc3QgPSBTdHJpbmcodGhpcy5ob3N0KTtcblx0XHRyZXN1bHQgKz0gcGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZUhvc3QoaG9zdCk7XG5cdH1cblx0aWYgKHRoaXMucG9ydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucG9ydCAhPT0gbnVsbCkge1xuXHRcdHZhciBwb3J0ID0gU3RyaW5nKHRoaXMucG9ydCk7XG5cdFx0aWYgKHBvcnQubGVuZ3RoID4gMCAmJiAhUE9SVF9SRUdFWFAudGVzdChwb3J0KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX1BPUlQpO1xuXHRcdH1cblx0XHRyZXN1bHQgKz0gJzonICsgcG9ydDtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvKlxuICogY2F0YmVycnktdXJpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktdXJpJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS11cmkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxudmFyIHBlcmNlbnRFbmNvZGluZ0hlbHBlciA9IHJlcXVpcmUoJy4vcGVyY2VudEVuY29kaW5nSGVscGVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgVVJJIHF1ZXJ5IGNvbXBvbmVudCBwYXJzZXIuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNFxuICogQHBhcmFtIHtzdHJpbmc/fSBxdWVyeVN0cmluZyBVUkkgcXVlcnkgY29tcG9uZW50IHN0cmluZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeShxdWVyeVN0cmluZykge1xuXHRpZiAodHlwZW9mIChxdWVyeVN0cmluZykgPT09ICdzdHJpbmcnKSB7XG5cdFx0dGhpcy52YWx1ZXMgPSB7fTtcblxuXHRcdHF1ZXJ5U3RyaW5nXG5cdFx0XHQuc3BsaXQoJyYnKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gcGFpci5zcGxpdCgnPScpLFxuXHRcdFx0XHRcdGtleSA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUocGFydHNbMF0pO1xuXHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoa2V5IGluIHRoaXMudmFsdWVzICYmXG5cdFx0XHRcdFx0ISh0aGlzLnZhbHVlc1trZXldIGluc3RhbmNlb2YgQXJyYXkpKSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XSA9IFt0aGlzLnZhbHVlc1trZXldXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHR5cGVvZiAocGFydHNbMV0pID09PSAnc3RyaW5nJyA/XG5cdFx0XHRcdFx0cGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShwYXJ0c1sxXSkgOiBudWxsO1xuXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlc1trZXldIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlc1trZXldLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiB2YWx1ZXMgb2YgcXVlcnkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5RdWVyeS5wcm90b3R5cGUudmFsdWVzID0gbnVsbDtcblxuLyoqXG4gKiBDbG9uZXMgY3VycmVudCBxdWVyeSB0byBhIG5ldyBvYmplY3QuXG4gKiBAcmV0dXJucyB7UXVlcnl9IE5ldyBjbG9uZSBvZiBjdXJyZW50IG9iamVjdC5cbiAqL1xuUXVlcnkucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcXVlcnkgPSBuZXcgUXVlcnkoKTtcblx0aWYgKHRoaXMudmFsdWVzKSB7XG5cdFx0cXVlcnkudmFsdWVzID0ge307XG5cdFx0T2JqZWN0LmtleXModGhpcy52YWx1ZXMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdHF1ZXJ5LnZhbHVlc1trZXldID0gdGhpcy52YWx1ZXNba2V5XTtcblx0XHRcdH0sIHRoaXMpO1xuXHR9XG5cdHJldHVybiBxdWVyeTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgY3VycmVudCBzZXQgb2YgcXVlcnkgdmFsdWVzIHRvIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFF1ZXJ5IGNvbXBvbmVudCBzdHJpbmcuXG4gKi9cblF1ZXJ5LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCF0aGlzLnZhbHVlcykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHZhciBxdWVyeVN0cmluZyA9ICcnO1xuXHRPYmplY3Qua2V5cyh0aGlzLnZhbHVlcylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHR2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXNba2V5XSBpbnN0YW5jZW9mIEFycmF5ID9cblx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XSA6IFt0aGlzLnZhbHVlc1trZXldXTtcblxuXHRcdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHF1ZXJ5U3RyaW5nICs9ICcmJyArIHBlcmNlbnRFbmNvZGluZ0hlbHBlclxuXHRcdFx0XHRcdC5lbmNvZGVRdWVyeVN1YkNvbXBvbmVudChrZXkpO1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0XHRcdHF1ZXJ5U3RyaW5nICs9ICc9JyArXG5cdFx0XHRcdFx0cGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZVF1ZXJ5U3ViQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0sIHRoaXMpO1xuXG5cdHJldHVybiBxdWVyeVN0cmluZy5yZXBsYWNlKC9eJi8sICcnKTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVVJJO1xuXG52YXIgQXV0aG9yaXR5ID0gcmVxdWlyZSgnLi9BdXRob3JpdHknKSxcblx0cGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKSxcblx0UXVlcnkgPSByZXF1aXJlKCcuL1F1ZXJ5Jyk7XG5cbi8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I2FwcGVuZGl4LUJcbnZhciBVUklfUEFSU0VfUkVHRVhQID0gbmV3IFJlZ0V4cChcblx0XHQnXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/J1xuXHQpLFxuXHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMVxuXHRTQ0hFTUVfUkVHRVhQID0gL15bYS16XStbYS16XFxkXFwrXFwuLV0qJC9pLFxuXHRFUlJPUl9TQ0hFTUUgPSAnVVJJIHNjaGVtZSBtdXN0IHNhdGlzZnkgZXhwcmVzc2lvbiAnICtcblx0XHRTQ0hFTUVfUkVHRVhQLnRvU3RyaW5nKCksXG5cdEVSUk9SX0JBU0VfU0NIRU1FID0gJ1NjaGVtZSBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCAnICtcblx0XHQnaW4gYSBiYXNlIFVSSSc7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgVVJJIGFjY29yZGluZyB0byBSRkMgMzk4Ni5cbiAqIEBwYXJhbSB7c3RyaW5nP30gdXJpU3RyaW5nIFVSSSBzdHJpbmcgdG8gcGFyc2UgY29tcG9uZW50cy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBVUkkodXJpU3RyaW5nKSB7XG5cdGlmICh0eXBlb2YgKHVyaVN0cmluZykgIT09ICdzdHJpbmcnKSB7XG5cdFx0dXJpU3RyaW5nID0gJyc7XG5cdH1cblxuXHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNhcHBlbmRpeC1CXG5cdHZhciBtYXRjaGVzID0gdXJpU3RyaW5nLm1hdGNoKFVSSV9QQVJTRV9SRUdFWFApO1xuXG5cdGlmIChtYXRjaGVzKSB7XG5cdFx0aWYgKHR5cGVvZiAobWF0Y2hlc1syXSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnNjaGVtZSA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUobWF0Y2hlc1syXSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbNF0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5hdXRob3JpdHkgPSBuZXcgQXV0aG9yaXR5KG1hdGNoZXNbNF0pO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChtYXRjaGVzWzVdKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMucGF0aCA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGVQYXRoKG1hdGNoZXNbNV0pO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChtYXRjaGVzWzddKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMucXVlcnkgPSBuZXcgUXVlcnkobWF0Y2hlc1s3XSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbOV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5mcmFnbWVudCA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUobWF0Y2hlc1s5XSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ3VycmVudCBVUkkgc2NoZW1lLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjFcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblVSSS5wcm90b3R5cGUuc2NoZW1lID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IFVSSSBhdXRob3JpdHkuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMlxuICogQHR5cGUge0F1dGhvcml0eX1cbiAqL1xuVVJJLnByb3RvdHlwZS5hdXRob3JpdHkgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgVVJJIHBhdGguXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuM1xuICogQHR5cGUge3N0cmluZ31cbiAqL1xuVVJJLnByb3RvdHlwZS5wYXRoID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IFVSSSBxdWVyeS5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy40XG4gKiBAdHlwZSB7UXVlcnl9XG4gKi9cblVSSS5wcm90b3R5cGUucXVlcnkgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgVVJJIGZyYWdtZW50LlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblVSSS5wcm90b3R5cGUuZnJhZ21lbnQgPSBudWxsO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVVJJIHJlZmVyZW5jZSB0aGF0IG1pZ2h0IGJlIHJlbGF0aXZlIHRvIGEgZ2l2ZW4gYmFzZSBVUklcbiAqIGludG8gdGhlIHJlZmVyZW5jZSdzIHRhcmdldCBVUkkuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTUuMlxuICogQHBhcmFtIHtVUkl9IGJhc2VVcmkgQmFzZSBVUkkuXG4gKiBAcmV0dXJucyB7VVJJfSBSZXNvbHZlZCBVUkkuXG4gKi9cblVSSS5wcm90b3R5cGUucmVzb2x2ZVJlbGF0aXZlID0gZnVuY3Rpb24gKGJhc2VVcmkpIHtcblx0aWYgKCFiYXNlVXJpLnNjaGVtZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihFUlJPUl9CQVNFX1NDSEVNRSk7XG5cdH1cblxuXHRyZXR1cm4gdHJhbnNmb3JtUmVmZXJlbmNlKGJhc2VVcmksIHRoaXMpO1xufTtcblxuLyoqXG4gKiBDbG9uZXMgY3VycmVudCBVUkkgdG8gYSBuZXcgb2JqZWN0LlxuICogQHJldHVybnMge1VSSX0gTmV3IGNsb25lIG9mIGN1cnJlbnQgb2JqZWN0LlxuICovXG5VUkkucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgdXJpID0gbmV3IFVSSSgpO1xuXG5cdGlmICh0eXBlb2YgKHRoaXMuc2NoZW1lKSA9PT0gJ3N0cmluZycpIHtcblx0XHR1cmkuc2NoZW1lID0gdGhpcy5zY2hlbWU7XG5cdH1cblxuXHRpZiAodGhpcy5hdXRob3JpdHkpIHtcblx0XHR1cmkuYXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHkuY2xvbmUoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgKHRoaXMucGF0aCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0dXJpLnBhdGggPSB0aGlzLnBhdGg7XG5cdH1cblxuXHRpZiAodGhpcy5xdWVyeSkge1xuXHRcdHVyaS5xdWVyeSA9IHRoaXMucXVlcnkuY2xvbmUoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgKHRoaXMuZnJhZ21lbnQpID09PSAnc3RyaW5nJykge1xuXHRcdHVyaS5mcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG5cdH1cblxuXHRyZXR1cm4gdXJpO1xufTtcblxuLyoqXG4gKiBSZWNvbXBvc2VzIFVSSSBjb21wb25lbnRzIHRvIFVSSSBzdHJpbmcsXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTUuM1xuICogQHJldHVybnMge3N0cmluZ30gVVJJIHN0cmluZy5cbiAqL1xuVVJJLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJlc3VsdCA9ICcnO1xuXG5cdGlmICh0aGlzLnNjaGVtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2NoZW1lICE9PSBudWxsKSB7XG5cdFx0dmFyIHNjaGVtZSA9IFN0cmluZyh0aGlzLnNjaGVtZSk7XG5cdFx0aWYgKCFTQ0hFTUVfUkVHRVhQLnRlc3Qoc2NoZW1lKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX1NDSEVNRSk7XG5cdFx0fVxuXHRcdHJlc3VsdCArPSBzY2hlbWUgKyAnOic7XG5cdH1cblxuXHRpZiAodGhpcy5hdXRob3JpdHkpIHtcblx0XHRyZXN1bHQgKz0gJy8vJyArIHRoaXMuYXV0aG9yaXR5LnRvU3RyaW5nKCk7XG5cdH1cblxuXHR2YXIgcGF0aCA9IHRoaXMucGF0aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucGF0aCA9PT0gbnVsbCA/XG5cdFx0JycgOiBTdHJpbmcodGhpcy5wYXRoKTtcblx0cmVzdWx0ICs9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5lbmNvZGVQYXRoKHBhdGgpO1xuXG5cdGlmICh0aGlzLnF1ZXJ5KSB7XG5cdFx0cmVzdWx0ICs9ICc/JyArIHRoaXMucXVlcnkudG9TdHJpbmcoKTtcblx0fVxuXG5cdGlmICh0aGlzLmZyYWdtZW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5mcmFnbWVudCAhPT0gbnVsbCkge1xuXHRcdHZhciBmcmFnbWVudCA9IFN0cmluZyh0aGlzLmZyYWdtZW50KTtcblx0XHRyZXN1bHQgKz0gJyMnICsgcGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZUZyYWdtZW50KGZyYWdtZW50KTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgcmVmZXJlbmNlIGZvciByZWxhdGl2ZSByZXNvbHV0aW9uLlxuICogV2hvbGUgYWxnb3JpdGhtIGhhcyBiZWVuIHRha2VuIGZyb21cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4yLjJcbiAqIEBwYXJhbSB7VVJJfSBiYXNlVXJpIEJhc2UgVVJJIGZvciByZXNvbHV0aW9uLlxuICogQHBhcmFtIHtVUkl9IHJlZmVyZW5jZVVyaSBSZWZlcmVuY2UgVVJJIHRvIHJlc29sdmUuXG4gKiBAcmV0dXJucyB7VVJJfSBDb21wb25lbnRzIG9mIHRhcmdldCBVUkkuXG4gKi9cbi8qanNoaW50IG1heGRlcHRoOmZhbHNlICovXG4vKmpzaGludCBtYXhjb21wbGV4aXR5OmZhbHNlICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1SZWZlcmVuY2UoYmFzZVVyaSwgcmVmZXJlbmNlVXJpKSB7XG5cdHZhciB0YXJnZXRVcmkgPSBuZXcgVVJJKCcnKTtcblxuXHRpZiAocmVmZXJlbmNlVXJpLnNjaGVtZSkge1xuXHRcdHRhcmdldFVyaS5zY2hlbWUgPSByZWZlcmVuY2VVcmkuc2NoZW1lO1xuXHRcdHRhcmdldFVyaS5hdXRob3JpdHkgPSByZWZlcmVuY2VVcmkuYXV0aG9yaXR5ID9cblx0XHRcdHJlZmVyZW5jZVVyaS5hdXRob3JpdHkuY2xvbmUoKSA6IHJlZmVyZW5jZVVyaS5hdXRob3JpdHk7XG5cdFx0dGFyZ2V0VXJpLnBhdGggPSByZW1vdmVEb3RTZWdtZW50cyhyZWZlcmVuY2VVcmkucGF0aCk7XG5cdFx0dGFyZ2V0VXJpLnF1ZXJ5ID0gcmVmZXJlbmNlVXJpLnF1ZXJ5ID9cblx0XHRcdHJlZmVyZW5jZVVyaS5xdWVyeS5jbG9uZSgpIDogcmVmZXJlbmNlVXJpLnF1ZXJ5O1xuXHR9IGVsc2Uge1xuXHRcdGlmIChyZWZlcmVuY2VVcmkuYXV0aG9yaXR5KSB7XG5cdFx0XHR0YXJnZXRVcmkuYXV0aG9yaXR5ID0gcmVmZXJlbmNlVXJpLmF1dGhvcml0eSA/XG5cdFx0XHRcdHJlZmVyZW5jZVVyaS5hdXRob3JpdHkuY2xvbmUoKSA6IHJlZmVyZW5jZVVyaS5hdXRob3JpdHk7XG5cdFx0XHR0YXJnZXRVcmkucGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHJlZmVyZW5jZVVyaS5wYXRoKTtcblx0XHRcdHRhcmdldFVyaS5xdWVyeSA9IHJlZmVyZW5jZVVyaS5xdWVyeSA/XG5cdFx0XHRcdHJlZmVyZW5jZVVyaS5xdWVyeS5jbG9uZSgpIDogcmVmZXJlbmNlVXJpLnF1ZXJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocmVmZXJlbmNlVXJpLnBhdGggPT09ICcnKSB7XG5cdFx0XHRcdHRhcmdldFVyaS5wYXRoID0gYmFzZVVyaS5wYXRoO1xuXHRcdFx0XHRpZiAocmVmZXJlbmNlVXJpLnF1ZXJ5KSB7XG5cdFx0XHRcdFx0dGFyZ2V0VXJpLnF1ZXJ5ID0gcmVmZXJlbmNlVXJpLnF1ZXJ5LmNsb25lKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0VXJpLnF1ZXJ5ID0gYmFzZVVyaS5xdWVyeSA/XG5cdFx0XHRcdFx0XHRiYXNlVXJpLnF1ZXJ5LmNsb25lKCkgOiBiYXNlVXJpLnF1ZXJ5O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocmVmZXJlbmNlVXJpLnBhdGhbMF0gPT09ICcvJykge1xuXHRcdFx0XHRcdHRhcmdldFVyaS5wYXRoID1cblx0XHRcdFx0XHRcdHJlbW92ZURvdFNlZ21lbnRzKHJlZmVyZW5jZVVyaS5wYXRoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRVcmkucGF0aCA9XG5cdFx0XHRcdFx0XHRtZXJnZShiYXNlVXJpLCByZWZlcmVuY2VVcmkpO1xuXHRcdFx0XHRcdHRhcmdldFVyaS5wYXRoID1cblx0XHRcdFx0XHRcdHJlbW92ZURvdFNlZ21lbnRzKHRhcmdldFVyaS5wYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXJnZXRVcmkucXVlcnkgPSByZWZlcmVuY2VVcmkucXVlcnkgP1xuXHRcdFx0XHRcdHJlZmVyZW5jZVVyaS5xdWVyeS5jbG9uZSgpIDogcmVmZXJlbmNlVXJpLnF1ZXJ5O1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0VXJpLmF1dGhvcml0eSA9IGJhc2VVcmkuYXV0aG9yaXR5ID9cblx0XHRcdFx0YmFzZVVyaS5hdXRob3JpdHkuY2xvbmUoKSA6IGJhc2VVcmkuYXV0aG9yaXR5O1xuXHRcdH1cblx0XHR0YXJnZXRVcmkuc2NoZW1lID0gYmFzZVVyaS5zY2hlbWU7XG5cdH1cblxuXHR0YXJnZXRVcmkuZnJhZ21lbnQgPSByZWZlcmVuY2VVcmkuZnJhZ21lbnQ7XG5cdHJldHVybiB0YXJnZXRVcmk7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUtcGF0aCByZWZlcmVuY2Ugd2l0aCB0aGUgcGF0aCBvZiB0aGUgYmFzZSBVUkkuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTUuMi4zXG4gKiBAcGFyYW0ge1VSSX0gYmFzZVVyaSBDb21wb25lbnRzIG9mIGJhc2UgVVJJLlxuICogQHBhcmFtIHtVUkl9IHJlZmVyZW5jZVVyaSBDb21wb25lbnRzIG9mIHJlZmVyZW5jZSBVUkkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBNZXJnZWQgcGF0aC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2UoYmFzZVVyaSwgcmVmZXJlbmNlVXJpKSB7XG5cdGlmIChiYXNlVXJpLmF1dGhvcml0eSAmJiBiYXNlVXJpLnBhdGggPT09ICcnKSB7XG5cdFx0cmV0dXJuICcvJyArIHJlZmVyZW5jZVVyaS5wYXRoO1xuXHR9XG5cblx0dmFyIHNlZ21lbnRzU3RyaW5nID0gYmFzZVVyaS5wYXRoLmluZGV4T2YoJy8nKSAhPT0gLTEgP1xuXHRcdGJhc2VVcmkucGF0aC5yZXBsYWNlKC9cXC9bXlxcL10rJC8sICcvJykgOiAnJztcblxuXHRyZXR1cm4gc2VnbWVudHNTdHJpbmcgKyByZWZlcmVuY2VVcmkucGF0aDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGRvdHMgc2VnbWVudHMgZnJvbSBVUkkgcGF0aC5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4yLjRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmlQYXRoIFVSSSBwYXRoIHdpdGggcG9zc2libGUgZG90IHNlZ21lbnRzLlxuICogQHJldHVybnMge3N0cmluZ30gVVJJIHBhdGggd2l0aG91dCBkb3Qgc2VnbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKHVyaVBhdGgpIHtcblx0aWYgKCF1cmlQYXRoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dmFyIGlucHV0QnVmZmVyID0gdXJpUGF0aCxcblx0XHRuZXdCdWZmZXIgPSAnJyxcblx0XHRuZXh0U2VnbWVudCA9ICcnLFxuXHRcdG91dHB1dEJ1ZmZlciA9ICcnO1xuXG5cdHdoaWxlIChpbnB1dEJ1ZmZlci5sZW5ndGggIT09IDApIHtcblxuXHRcdC8vIElmIHRoZSBpbnB1dCBidWZmZXIgYmVnaW5zIHdpdGggYSBwcmVmaXggb2YgXCIuLi9cIiBvciBcIi4vXCIsXG5cdFx0Ly8gdGhlbiByZW1vdmUgdGhhdCBwcmVmaXggZnJvbSB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXlxcLj9cXC5cXC8vLCAnJyk7XG5cdFx0aWYgKG5ld0J1ZmZlciAhPT0gaW5wdXRCdWZmZXIpIHtcblx0XHRcdGlucHV0QnVmZmVyID0gbmV3QnVmZmVyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgdGhlIGlucHV0IGJ1ZmZlciBiZWdpbnMgd2l0aCBhIHByZWZpeCBvZiBcIi8uL1wiIG9yIFwiLy5cIixcblx0XHQvLyB3aGVyZSBcIi5cIiBpcyBhIGNvbXBsZXRlIHBhdGggc2VnbWVudCwgdGhlbiByZXBsYWNlIHRoYXRcblx0XHQvLyBwcmVmaXggd2l0aCBcIi9cIiBpbiB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXigoXFwvXFwuXFwvKXwoXFwvXFwuJCkpLywgJy8nKTtcblx0XHRpZiAobmV3QnVmZmVyICE9PSBpbnB1dEJ1ZmZlcikge1xuXHRcdFx0aW5wdXRCdWZmZXIgPSBuZXdCdWZmZXI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgaW5wdXQgYnVmZmVyIGJlZ2lucyB3aXRoIGEgcHJlZml4IG9mIFwiLy4uL1wiIG9yIFwiLy4uXCIsXG5cdFx0Ly8gd2hlcmUgXCIuLlwiIGlzIGEgY29tcGxldGUgcGF0aCBzZWdtZW50LCB0aGVuIHJlcGxhY2UgdGhhdFxuXHRcdC8vIHByZWZpeCB3aXRoIFwiL1wiIGluIHRoZSBpbnB1dCBidWZmZXIgYW5kIHJlbW92ZSB0aGUgbGFzdFxuXHRcdC8vIHNlZ21lbnQgYW5kIGl0cyBwcmVjZWRpbmcgXCIvXCIgKGlmIGFueSkgZnJvbSB0aGUgb3V0cHV0XG5cdFx0Ly8gYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXigoXFwvXFwuXFwuXFwvKXwoXFwvXFwuXFwuJCkpLywgJy8nKTtcblx0XHRpZiAobmV3QnVmZmVyICE9PSBpbnB1dEJ1ZmZlcikge1xuXHRcdFx0b3V0cHV0QnVmZmVyID0gb3V0cHV0QnVmZmVyLnJlcGxhY2UoL1xcL1teXFwvXSskLywgJycpO1xuXHRcdFx0aW5wdXRCdWZmZXIgPSBuZXdCdWZmZXI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgaW5wdXQgYnVmZmVyIGNvbnNpc3RzIG9ubHkgb2YgXCIuXCIgb3IgXCIuLlwiLCB0aGVuIHJlbW92ZVxuXHRcdC8vIHRoYXQgZnJvbSB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0aWYgKGlucHV0QnVmZmVyID09PSAnLicgfHwgaW5wdXRCdWZmZXIgPT09ICcuLicpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIG1vdmUgdGhlIGZpcnN0IHBhdGggc2VnbWVudCBpbiB0aGUgaW5wdXQgYnVmZmVyIHRvIHRoZSBlbmQgb2Zcblx0XHQvLyB0aGUgb3V0cHV0IGJ1ZmZlciwgaW5jbHVkaW5nIHRoZSBpbml0aWFsIFwiL1wiIGNoYXJhY3RlciAoaWZcblx0XHQvLyBhbnkpIGFuZCBhbnkgc3Vic2VxdWVudCBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZyxcblx0XHQvLyB0aGUgbmV4dCBcIi9cIiBjaGFyYWN0ZXIgb3IgdGhlIGVuZCBvZiB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV4dFNlZ21lbnQgPSAvXlxcLz9bXlxcL10qKFxcL3wkKS8uZXhlYyhpbnB1dEJ1ZmZlcilbMF07XG5cdFx0bmV4dFNlZ21lbnQgPSBuZXh0U2VnbWVudC5yZXBsYWNlKC8oW15cXC9dKShcXC8kKS8sICckMScpO1xuXHRcdGlucHV0QnVmZmVyID0gaW5wdXRCdWZmZXIuc3Vic3RyaW5nKG5leHRTZWdtZW50Lmxlbmd0aCk7XG5cdFx0b3V0cHV0QnVmZmVyICs9IG5leHRTZWdtZW50O1xuXHR9XG5cblx0cmV0dXJuIG91dHB1dEJ1ZmZlcjtcbn0iLCIvKlxuICogY2F0YmVycnktdXJpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktdXJpJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS11cmkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5mbztcblxudmFyIHBlcmNlbnRFbmNvZGluZ0hlbHBlciA9IHJlcXVpcmUoJy4vcGVyY2VudEVuY29kaW5nSGVscGVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdXNlciBpbmZvcm1hdGlvbiBjb21wb25lbnQgcGFyc2VyLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjIuMVxuICogQHBhcmFtIHtzdHJpbmc/fSB1c2VySW5mb1N0cmluZyBVc2VyIGluZm9ybWF0aW9uIGNvbXBvbmVudCBzdHJpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVXNlckluZm8odXNlckluZm9TdHJpbmcpIHtcblx0aWYgKHR5cGVvZiAodXNlckluZm9TdHJpbmcpID09PSAnc3RyaW5nJyAmJiB1c2VySW5mb1N0cmluZy5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIHBhcnRzID0gdXNlckluZm9TdHJpbmcuc3BsaXQoJzonKTtcblx0XHRpZiAodHlwZW9mIChwYXJ0c1swXSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnVzZXIgPSBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZGVjb2RlKHBhcnRzWzBdKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAocGFydHNbMV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5wYXNzd29yZCA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUocGFydHNbMV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEN1cnJlbnQgdXNlciBjb21wb25lbnQuXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Vc2VySW5mby5wcm90b3R5cGUudXNlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBwYXNzd29yZC5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblVzZXJJbmZvLnByb3RvdHlwZS5wYXNzd29yZCA9IG51bGw7XG5cbi8qKlxuICogQ2xvbmVzIGN1cnJlbnQgdXNlciBpbmZvcm1hdGlvbi5cbiAqIEByZXR1cm5zIHtVc2VySW5mb30gTmV3IGNsb25lIG9mIGN1cnJlbnQgb2JqZWN0LlxuICovXG5Vc2VySW5mby5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciB1c2VySW5mbyA9IG5ldyBVc2VySW5mbygpO1xuXHRpZiAodHlwZW9mICh0aGlzLnVzZXIpID09PSAnc3RyaW5nJykge1xuXHRcdHVzZXJJbmZvLnVzZXIgPSB0aGlzLnVzZXI7XG5cdH1cblx0aWYgKHR5cGVvZiAodGhpcy5wYXNzd29yZCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0dXNlckluZm8ucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkO1xuXHR9XG5cdHJldHVybiB1c2VySW5mbztcbn07XG5cbi8qKlxuICogUmVjb21iaW5lcyB1c2VyIGluZm9ybWF0aW9uIGNvbXBvbmVudHMgdG8gdXNlckluZm8gc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVXNlciBpbmZvcm1hdGlvbiBjb21wb25lbnQgc3RyaW5nLlxuICovXG5Vc2VySW5mby5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZXN1bHQgPSAnJztcblx0aWYgKHRoaXMudXNlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMudXNlciAhPT0gbnVsbCkge1xuXHRcdHZhciB1c2VyID0gU3RyaW5nKHRoaXMudXNlcik7XG5cdFx0cmVzdWx0ICs9IHBlcmNlbnRFbmNvZGluZ0hlbHBlclxuXHRcdFx0LmVuY29kZVVzZXJJbmZvU3ViQ29tcG9uZW50KHVzZXIpO1xuXHR9XG5cdGlmICh0aGlzLnBhc3N3b3JkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXNzd29yZCAhPT0gbnVsbCkge1xuXHRcdHZhciBwYXNzd29yZCA9IFN0cmluZyh0aGlzLnBhc3N3b3JkKTtcblx0XHRyZXN1bHQgKz0gJzonICsgcGVyY2VudEVuY29kaW5nSGVscGVyXG5cdFx0XHQuZW5jb2RlVXNlckluZm9TdWJDb21wb25lbnQocGFzc3dvcmQpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLypcbiAqIGNhdGJlcnJ5LXVyaVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5LXVyaSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnktdXJpIHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4xXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHQvLyBcXHVEODAwLVxcdURCRkYgXFx1REMwMC1cXHVERkZGXG5cdC8vIHN1cnJvZ2F0ZXMgcGFpcnMgbGlrZSBlbW9qaSB3ZSBzaG91bGQgaWdub3JlXG5cdC8qKlxuXHQgKiBFbmNvZGVzIGF1dGhvcml0eSB1c2VyIGluZm9ybWF0aW9uIHN1Yi1jb21wb25lbnQgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBlbmNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZW5jb2RlVXNlckluZm9TdWJDb21wb25lbnQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4xXG5cdFx0XHQvW15cXHdcXC5+XFwtIVxcJCYnXFwoXFwpXFwqXFwrLDs9XFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblx0LyoqXG5cdCAqIEVuY29kZXMgYXV0aG9yaXR5IGhvc3QgY29tcG9uZW50IGFjY29yZGluZyB0byBSRkMgMzk4Ni5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZW5jb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGVuY29kZUhvc3Q6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4yXG5cdFx0XHQvW15cXHdcXC5+XFwtIVxcJCYnXFwoXFwpXFwqXFwrLDs9OlxcW1xcXVxcdUQ4MDAtXFx1REJGRlxcdURDMDAtXFx1REZGRl0vZyxcblx0XHRcdGVuY29kZVVSSUNvbXBvbmVudFxuXHRcdCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBFbmNvZGVzIFVSSSBwYXRoIGNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVQYXRoOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5zcGxpdCgvJTJmL2kpXG5cdFx0XHQubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG5cdFx0XHRcdHJldHVybiBwYXJ0LnJlcGxhY2UoXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjNcblx0XHRcdFx0XHQvW15cXHdcXC5+XFwtIVxcJCYnXFwoXFwpXFwqXFwrLDs9OkBcXC9cXHVEODAwLVxcdURCRkZcXHVEQzAwLVxcdURGRkZdL2csXG5cdFx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdFx0LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuXHRcdFx0XHRpZiAoIXByZXYpIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWN1cnJlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcHJldiArICclMkYnICsgY3VycmVudDtcblx0XHRcdH0sICcnKTtcblx0fSxcblx0LyoqXG5cdCAqIEVuY29kZXMgcXVlcnkgc3ViLWNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVRdWVyeVN1YkNvbXBvbmVudDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShcblx0XHRcdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy40XG5cdFx0XHQvW15cXHdcXC5+XFwtIVxcJCdcXChcXClcXCpcXCssOzpAXFwvXFw/XFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogRW5jb2RlcyBVUkkgZnJhZ21lbnQgY29tcG9uZW50IGFjY29yZGluZyB0byBSRkMgMzk4Ni5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZW5jb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGVuY29kZUZyYWdtZW50OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKFxuXHRcdFx0Ly8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjVcblx0XHRcdC9bXlxcd1xcLn5cXC0hXFwkJidcXChcXClcXCpcXCssOz06QFxcL1xcP1xcdUQ4MDAtXFx1REJGRlxcdURDMDAtXFx1REZGRl0vZyxcblx0XHRcdGVuY29kZVVSSUNvbXBvbmVudFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIERlY29kZXMgcGVyY2VudCBlbmNvZGVkIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZGVjb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBEZWNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGRlY29kZTogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nKTtcblx0fSxcblxuXHQvKipcblx0ICogRGVjb2RlcyBwZXJjZW50IGVuY29kZWQgcGF0aCBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGRlY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRGVjb2RlZCBwYXRoIGNvbXBvbmVudC5cblx0ICovXG5cdGRlY29kZVBhdGg6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnNwbGl0KC8lMmYvaSlcblx0XHRcdC5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuXHRcdFx0XHRpZiAoIXByZXYpIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWN1cnJlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcHJldiArICclMkYnICsgY3VycmVudDtcblx0XHRcdH0sICcnKTtcblx0fVxufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDYXRiZXJyeTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdENhdGJlcnJ5QmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9iYXNlL0NhdGJlcnJ5QmFzZScpO1xuXG51dGlsLmluaGVyaXRzKENhdGJlcnJ5LCBDYXRiZXJyeUJhc2UpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHZlcnNpb24gb2YgQ2F0YmVycnkuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIENhdGJlcnJ5QmFzZVxuICovXG5mdW5jdGlvbiBDYXRiZXJyeSgpIHtcblx0Q2F0YmVycnlCYXNlLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogQ3VycmVudCByZXF1ZXN0IHJvdXRlci5cbiAqIEB0eXBlIHtSZXF1ZXN0Um91dGVyfVxuICogQHByaXZhdGVcbiAqL1xuQ2F0YmVycnkucHJvdG90eXBlLl9yb3V0ZXIgPSBudWxsO1xuXG4vKipcbiAqIFdyYXBzIGN1cnJlbnQgSFRNTCBkb2N1bWVudCB3aXRoIENhdGJlcnJ5IGV2ZW50IGhhbmRsZXJzLlxuICovXG5DYXRiZXJyeS5wcm90b3R5cGUud3JhcERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl9yb3V0ZXIgPSB0aGlzLmxvY2F0b3IucmVzb2x2ZSgncmVxdWVzdFJvdXRlcicpO1xufTtcblxuLyoqXG4gKiBTdGFydHMgQ2F0YmVycnkgYXBwbGljYXRpb24gd2hlbiBET00gaXMgcmVhZHkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuQ2F0YmVycnkucHJvdG90eXBlLnN0YXJ0V2hlblJlYWR5ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93LmNhdGJlcnJ5KSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwpIHtcblx0XHR3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYud3JhcERvY3VtZW50KCk7XG5cdFx0XHR3aW5kb3cuY2F0YmVycnkgPSBzZWxmO1xuXHRcdFx0ZnVsZmlsbCgpO1xuXHRcdH0pO1xuXHR9KTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29va2llV3JhcHBlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdENvb2tpZVdyYXBwZXJCYXNlID0gcmVxdWlyZSgnLi4vbGliL2Jhc2UvQ29va2llV3JhcHBlckJhc2UnKTtcblxudXRpbC5pbmhlcml0cyhDb29raWVXcmFwcGVyLCBDb29raWVXcmFwcGVyQmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgY29va2llIHdyYXBwZXIuXG4gKiBAcGFyYW0ge1dpbmRvd30gJHdpbmRvdyBXaW5kb3cgb2JqZWN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvb2tpZVdyYXBwZXIoJHdpbmRvdykge1xuXHRDb29raWVXcmFwcGVyQmFzZS5jYWxsKHRoaXMpO1xuXHR0aGlzLl93aW5kb3cgPSAkd2luZG93O1xufVxuXG4vKipcbiAqIEN1cnJlbnQgYnJvd3NlciB3aW5kb3cuXG4gKiBAdHlwZSB7V2luZG93fVxuICogQHByaXZhdGVcbiAqL1xuQ29va2llV3JhcHBlci5wcm90b3R5cGUuX3dpbmRvdyA9IG51bGw7XG5cbi8qKlxuICogR2V0cyBjdXJyZW50IGNvb2tpZSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb29raWUgc3RyaW5nLlxuICovXG5Db29raWVXcmFwcGVyLnByb3RvdHlwZS5nZXRDb29raWVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY29va2llID9cblx0XHR0aGlzLl93aW5kb3cuZG9jdW1lbnQuY29va2llLnRvU3RyaW5nKCkgOlxuXHRcdCcnO1xufTtcblxuLyoqXG4gKiBTZXRzIGNvb2tpZSB0byB0aGlzIHdyYXBwZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gY29va2llU2V0dXAgQ29va2llIHNldHVwIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC5rZXkgQ29va2llIGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC52YWx1ZSBDb29raWUgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcj99IGNvb2tpZVNldHVwLm1heEFnZSBNYXggY29va2llIGFnZSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIHtEYXRlP30gY29va2llU2V0dXAuZXhwaXJlcyBFeHBpcmUgZGF0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nP30gY29va2llU2V0dXAucGF0aCBVUkkgcGF0aCBmb3IgY29va2llLlxuICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5kb21haW4gQ29va2llIGRvbWFpbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGNvb2tpZVNldHVwLnNlY3VyZSBJcyBjb29raWUgc2VjdXJlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGNvb2tpZVNldHVwLmh0dHBPbmx5IElzIGNvb2tpZSBIVFRQIG9ubHkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb29raWUgc2V0dXAgc3RyaW5nLlxuICovXG5Db29raWVXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoY29va2llU2V0dXApIHtcblx0dmFyIGNvb2tpZSA9IHRoaXMuX2NvbnZlcnRUb0Nvb2tpZVNldHVwKGNvb2tpZVNldHVwKTtcblx0dGhpcy5fd2luZG93LmRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZTtcblx0cmV0dXJuIGNvb2tpZTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnRSZW5kZXJlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdG1vcnBoZG9tID0gcmVxdWlyZSgnbW9ycGhkb20nKSxcblx0ZXJyb3JIZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvaGVscGVycy9lcnJvckhlbHBlcicpLFxuXHRtb2R1bGVIZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvaGVscGVycy9tb2R1bGVIZWxwZXInKSxcblx0aHJUaW1lSGVscGVyID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcnMvaHJUaW1lSGVscGVyJyksXG5cdERvY3VtZW50UmVuZGVyZXJCYXNlID0gcmVxdWlyZSgnLi4vbGliL2Jhc2UvRG9jdW1lbnRSZW5kZXJlckJhc2UnKTtcblxudXRpbC5pbmhlcml0cyhEb2N1bWVudFJlbmRlcmVyLCBEb2N1bWVudFJlbmRlcmVyQmFzZSk7XG5cbnZhciBXQVJOX0lEX05PVF9TUEVDSUZJRUQgPSAnQ29tcG9uZW50IFwiJXNcIiBkb2VzIG5vdCBoYXZlIGFuIElELCBza2lwcGluZy4uLicsXG5cdFdBUk5fU0FNRV9JRCA9XG5cdFx0J1RoZSBkdXBsaWNhdGVkIElEIFwiJXNcIiBoYXMgYmVlbiBmb3VuZCwgc2tpcHBpbmcgY29tcG9uZW50IFwiJXNcIi4uLic7XG5cbnZhciBTUEVDSUFMX0lEUyA9IHtcblx0XHQkJGhlYWQ6ICckJGhlYWQnLFxuXHRcdCQkZG9jdW1lbnQ6ICckJGRvY3VtZW50J1xuXHR9LFxuXHRUQUdfTkFNRVMgPSB7XG5cdFx0VElUTEU6ICdUSVRMRScsXG5cdFx0SFRNTDogJ0hUTUwnLFxuXHRcdEhFQUQ6ICdIRUFEJyxcblx0XHRCQVNFOiAnQkFTRScsXG5cdFx0U1RZTEU6ICdTVFlMRScsXG5cdFx0U0NSSVBUOiAnU0NSSVBUJyxcblx0XHROT1NDUklQVDogJ05PU0NSSVBUJyxcblx0XHRNRVRBOiAnTUVUQScsXG5cdFx0TElOSzogJ0xJTksnXG5cdH0sXG5cdE5PREVfVFlQRVMgPSB7XG5cdFx0RUxFTUVOVF9OT0RFOiAxLFxuXHRcdFRFWFRfTk9ERTogMyxcblx0XHRQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6IDcsXG5cdFx0Q09NTUVOVF9OT0RFOiA4XG5cdH0sXG5cdEVSUk9SX0NSRUFURV9XUk9OR19BUkdVTUVOVFMgPSAnVGFnIG5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nICcgK1xuXHRcdCdhbmQgYXR0cmlidXRlcyBzaG91bGQgYmUgYW4gb2JqZWN0Jyxcblx0RVJST1JfQ1JFQVRFX1dST05HX05BTUUgPSAnQ29tcG9uZW50IGZvciB0YWcgXCIlc1wiIG5vdCBmb3VuZCcsXG5cdEVSUk9SX0NSRUFURV9XUk9OR19JRCA9ICdUaGUgSUQgaXMgbm90IHNwZWNpZmllZCBvciBhbHJlYWR5IHVzZWQnLFxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDE1L1dELXVpZXZlbnRzLTIwMTUwMzE5LyNldmVudC10eXBlcy1saXN0XG5cdE5PTl9CVUJCTElOR19FVkVOVFMgPSB7XG5cdFx0YWJvcnQ6IHRydWUsXG5cdFx0Ymx1cjogdHJ1ZSxcblx0XHRlcnJvcjogdHJ1ZSxcblx0XHRmb2N1czogdHJ1ZSxcblx0XHRsb2FkOiB0cnVlLFxuXHRcdG1vdXNlZW50ZXI6IHRydWUsXG5cdFx0bW91c2VsZWF2ZTogdHJ1ZSxcblx0XHRyZXNpemU6IHRydWUsXG5cdFx0dW5sb2FkOiB0cnVlXG5cdH07XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGRvY3VtZW50IHJlbmRlcmVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIERvY3VtZW50UmVuZGVyZXJCYXNlXG4gKi9cbmZ1bmN0aW9uIERvY3VtZW50UmVuZGVyZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdERvY3VtZW50UmVuZGVyZXJCYXNlLmNhbGwodGhpcywgJHNlcnZpY2VMb2NhdG9yKTtcblx0dGhpcy5fY29tcG9uZW50SW5zdGFuY2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dGhpcy5fY29tcG9uZW50RWxlbWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9jb21wb25lbnRCaW5kaW5ncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dGhpcy5fd2luZG93ID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXHR0aGlzLl9sb2dnZXIgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnbG9nZ2VyJyk7XG5cdHRoaXMuX2NvbmZpZyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb25maWcnKTtcblx0dGhpcy5fc3RvcmVEaXNwYXRjaGVyID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ3N0b3JlRGlzcGF0Y2hlcicpO1xuXG5cdHZhciBzZWxmID0gdGhpcztcblxuXHR0aGlzLl9ldmVudEJ1cy5vbignc3RvcmVDaGFuZ2VkJywgZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdHNlbGYuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzW3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdGlmIChzZWxmLl9pc1N0YXRlQ2hhbmdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2VsZi5fdXBkYXRlU3RvcmVDb21wb25lbnRzKCk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgYXBwbGljYXRpb24gY29uZmlnLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9jb25maWcgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbG9nZ2VyLlxuICogQHR5cGUge0xvZ2dlcn1cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9sb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc3RvcmUgZGlzcGF0Y2hlci5cbiAqIEB0eXBlIHtTdG9yZURpc3BhdGNoZXJ9XG4gKiBAcHJvdGVjdGVkXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9zdG9yZURpc3BhdGNoZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2V0IG9mIGNvbXBvbmVudCBpbnN0YW5jZXMgYnkgdW5pcXVlIGtleXMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NvbXBvbmVudEluc3RhbmNlcyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgY29tcG9uZW50IGVsZW1lbnRzIGJ5IHVuaXF1ZSBrZXlzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9jb21wb25lbnRFbGVtZW50cyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgY29tcG9uZW50IGJpbmRpbmdzIGJ5IHVuaXF1ZSBrZXlzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9jb21wb25lbnRCaW5kaW5ncyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCByb3V0aW5nIGNvbnRleHQuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2N1cnJlbnRSb3V0aW5nQ29udGV4dCA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgY2hhbmdlZCBzdG9yZXMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHByb21pc2UgZm9yIHJlbmRlcmVkIHBhZ2UuXG4gKiBAdHlwZSB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9yZW5kZXJlZFByb21pc2UgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc3RhdGUgb2YgdXBkYXRpbmcgY29tcG9uZW50cy5cbiAqIEB0eXBlIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2lzVXBkYXRpbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBDdXJyZW50IGF3YWl0aW5nIHJvdXRpbmcuXG4gKiBAdHlwZSB7e3N0YXRlOiBPYmplY3QsIHJvdXRpbmdDb250ZXh0OiBPYmplY3R9fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2F3YWl0aW5nUm91dGluZyA9IG51bGw7XG5cbi8qKlxuICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgTmV3IHN0YXRlIG9mIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IHJvdXRpbmdDb250ZXh0IFJvdXRpbmcgY29udGV4dC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5pbml0V2l0aFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCByb3V0aW5nQ29udGV4dCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHJldHVybiBzZWxmLl9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSgpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5fY3VycmVudFJvdXRpbmdDb250ZXh0ID0gcm91dGluZ0NvbnRleHQ7XG5cdFx0XHRyZXR1cm4gc2VsZi5fc3RvcmVEaXNwYXRjaGVyLnNldFN0YXRlKHN0YXRlLCByb3V0aW5nQ29udGV4dCk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50cyA9IHNlbGYuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpLFxuXHRcdFx0XHRlbGVtZW50cyA9IHNlbGYuX2ZpbmRDb21wb25lbnRzKFxuXHRcdFx0XHRcdHNlbGYuX3dpbmRvdy5kb2N1bWVudC5ib2R5LCBjb21wb25lbnRzLCB0cnVlXG5cdFx0XHRcdCk7XG5cdFx0XHRlbGVtZW50cy51bnNoaWZ0KHNlbGYuX3dpbmRvdy5kb2N1bWVudC5oZWFkKTtcblx0XHRcdGVsZW1lbnRzLnVuc2hpZnQoc2VsZi5fd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cdFx0XHRyZXR1cm4gc2VsZi5faW5pdGlhbFdyYXAoY29tcG9uZW50cywgZWxlbWVudHMpO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIG5ldyBzdGF0ZSBvZiBhcHBsaWNhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBOZXcgc3RhdGUgb2YgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcm91dGluZ0NvbnRleHQgUm91dGluZyBjb250ZXh0LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChzdGF0ZSwgcm91dGluZ0NvbnRleHQpIHtcblx0dGhpcy5fYXdhaXRpbmdSb3V0aW5nID0ge1xuXHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRyb3V0aW5nQ29udGV4dDogcm91dGluZ0NvbnRleHRcblx0fTtcblx0aWYgKHRoaXMuX2lzU3RhdGVDaGFuZ2luZykge1xuXHRcdHJldHVybiB0aGlzLl9yZW5kZXJlZFByb21pc2U7XG5cdH1cblxuXHQvLyB3ZSBzaG91bGQgc2V0IHRoaXMgZmxhZyB0byBhdm9pZCBcInN0b3JlQ2hhbmdlZFwiXG5cdC8vIGV2ZW50IGhhbmRsaW5nIGZvciBub3dcblx0dGhpcy5faXNTdGF0ZUNoYW5naW5nID0gdHJ1ZTtcblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHNlbGYuX3JlbmRlcmVkUHJvbWlzZSA9IHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBhbmQgdGhlbiB3ZSB1cGRhdGUgYWxsIGNvbXBvbmVudHMgb2YgdGhlc2Ugc3RvcmVzIGluIGEgYmF0Y2guXG5cdFx0XHRyZXR1cm4gc2VsZi5fdXBkYXRlU3RvcmVDb21wb25lbnRzKCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5faXNTdGF0ZUNoYW5naW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkUHJvbWlzZTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBjb21wb25lbnQgaW50byBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgSFRNTCBlbGVtZW50IG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3Q/fSByZW5kZXJpbmdDb250ZXh0IFJlbmRlcmluZyBjb250ZXh0IGZvciBncm91cCByZW5kZXJpbmcuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckNvbXBvbmVudCA9XG5cdGZ1bmN0aW9uIChlbGVtZW50LCByZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiB0aGlzLl9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSgpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBpZCA9IHNlbGYuX2dldElkKGVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdFx0c2VsZi5fbG9nZ2VyLndhcm4oXG5cdFx0XHRcdFx0XHR1dGlsLmZvcm1hdChXQVJOX0lEX05PVF9TUEVDSUZJRUQsIGNvbXBvbmVudE5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRcdFx0XHRyZW5kZXJpbmdDb250ZXh0ID0gc2VsZi5fY3JlYXRlUmVuZGVyaW5nQ29udGV4dChbXSk7XG5cdFx0XHRcdFx0cmVuZGVyaW5nQ29udGV4dC5yb290SWRzW2lkXSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgY29tcG9uZW50TmFtZSA9IG1vZHVsZUhlbHBlci5nZXRPcmlnaW5hbENvbXBvbmVudE5hbWUoXG5cdFx0XHRcdFx0XHRlbGVtZW50LnRhZ05hbWVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGhhZENoaWxkcmVuID0gZWxlbWVudC5oYXNDaGlsZE5vZGVzKCksXG5cdFx0XHRcdFx0Y29tcG9uZW50ID0gcmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLFxuXHRcdFx0XHRcdGluc3RhbmNlID0gc2VsZi5fY29tcG9uZW50SW5zdGFuY2VzW2lkXTtcblxuXHRcdFx0XHRpZiAoIWNvbXBvbmVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpZCBpbiByZW5kZXJpbmdDb250ZXh0LnJlbmRlcmVkSWRzKSB7XG5cdFx0XHRcdFx0c2VsZi5fbG9nZ2VyLndhcm4oXG5cdFx0XHRcdFx0XHR1dGlsLmZvcm1hdChXQVJOX1NBTUVfSUQsIGlkLCBjb21wb25lbnROYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVuZGVyaW5nQ29udGV4dC5yZW5kZXJlZElkc1tpZF0gPSB0cnVlO1xuXG5cdFx0XHRcdGlmICghaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0ID1cblx0XHRcdFx0XHRcdHNlbGYuX2dldENvbXBvbmVudENvbnRleHQoY29tcG9uZW50LCBlbGVtZW50KTtcblx0XHRcdFx0XHRpbnN0YW5jZSA9IHNlbGYuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmVJbnN0YW5jZShcblx0XHRcdFx0XHRcdGNvbXBvbmVudC5jb25zdHJ1Y3RvciwgcmVuZGVyaW5nQ29udGV4dC5jb25maWdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0ID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZS4kY29udGV4dDtcblx0XHRcdFx0XHRzZWxmLl9jb21wb25lbnRJbnN0YW5jZXNbaWRdID0gaW5zdGFuY2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZXZlbnRBcmdzID0ge1xuXHRcdFx0XHRcdG5hbWU6IGNvbXBvbmVudE5hbWUsXG5cdFx0XHRcdFx0Y29udGV4dDogaW5zdGFuY2UuJGNvbnRleHRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzZWxmLl9jb21wb25lbnRFbGVtZW50c1tpZF0gPSBlbGVtZW50O1xuXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBoclRpbWVIZWxwZXIuZ2V0KCk7XG5cdFx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudFJlbmRlcicsIGV2ZW50QXJncyk7XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gd2UgbmVlZCB1bmJpbmQgdGhlIHdob2xlIGhpZXJhcmNoeSBvbmx5IGF0XG5cdFx0XHRcdFx0XHQvLyB0aGUgYmVnaW5uaW5nIGFuZCBub3QgZm9yIG5ldyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0aWYgKCEoaWQgaW4gcmVuZGVyaW5nQ29udGV4dC5yb290SWRzKSB8fFxuXHRcdFx0XHRcdFx0XHQhaGFkQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fdW5iaW5kQWxsKGVsZW1lbnQsIHJlbmRlcmluZ0NvbnRleHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdFx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZS4kY29udGV4dC5lbGVtZW50ICE9PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0ID0gc2VsZi5fZ2V0Q29tcG9uZW50Q29udGV4dChcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQsIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciByZW5kZXJNZXRob2QgPSBtb2R1bGVIZWxwZXIuZ2V0TWV0aG9kVG9JbnZva2UoXG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlLCAncmVuZGVyJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBtb2R1bGVIZWxwZXIuZ2V0U2FmZVByb21pc2UocmVuZGVyTWV0aG9kKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChkYXRhQ29udGV4dCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC50ZW1wbGF0ZS5yZW5kZXIoZGF0YUNvbnRleHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLl9oYW5kbGVSZW5kZXJFcnJvcihcblx0XHRcdFx0XHRcdFx0ZWxlbWVudCwgY29tcG9uZW50LCByZWFzb25cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuXHRcdFx0XHRcdFx0dmFyIGlzSGVhZCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gVEFHX05BTUVTLkhFQUQ7XG5cdFx0XHRcdFx0XHRpZiAoaHRtbCA9PT0gJycgJiYgaXNIZWFkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciB0bXBFbGVtZW50ID0gc2VsZi5fY3JlYXRlVGVtcG9yYXJ5RWxlbWVudChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHRtcEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRcdFx0XHRcdFx0aWYgKGlzSGVhZCkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLl9tZXJnZUhlYWQoZWxlbWVudCwgdG1wRWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bW9ycGhkb20oZWxlbWVudCwgdG1wRWxlbWVudCwge1xuXHRcdFx0XHRcdFx0XHRvbkJlZm9yZU1vcnBoRWxDaGlsZHJlbjogZnVuY3Rpb24gKGZvdW5kRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmb3VuZEVsZW1lbnQgPT09IGVsZW1lbnQgfHxcblx0XHRcdFx0XHRcdFx0XHRcdCFzZWxmLl9pc0NvbXBvbmVudChcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnRzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3VuZEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHR2YXIgcHJvbWlzZXMgPSBzZWxmLl9maW5kQ29tcG9uZW50cyhcblx0XHRcdFx0XHRcdFx0ZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnRzLCBmYWxzZVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uIChpbm5lckNvbXBvbmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnJlbmRlckNvbXBvbmVudChcblx0XHRcdFx0XHRcdFx0XHRcdGlubmVyQ29tcG9uZW50LCByZW5kZXJpbmdDb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0ZXZlbnRBcmdzLmhyVGltZSA9IGhyVGltZUhlbHBlci5nZXQoc3RhcnRUaW1lKTtcblx0XHRcdFx0XHRcdGV2ZW50QXJncy50aW1lID0gaHJUaW1lSGVscGVyLnRvTWlsbGlzZWNvbmRzKFxuXHRcdFx0XHRcdFx0XHRldmVudEFyZ3MuaHJUaW1lXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50UmVuZGVyZWQnLCBldmVudEFyZ3MpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuX2JpbmRDb21wb25lbnQoZWxlbWVudCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBjb2xsZWN0aW5nIGdhcmJhZ2Ugb25seSB3aGVuXG5cdFx0XHRcdFx0XHQvLyB0aGUgZW50aXJlIHJlbmRlcmluZyBpcyBmaW5pc2hlZFxuXHRcdFx0XHRcdFx0aWYgKCEoaWQgaW4gcmVuZGVyaW5nQ29udGV4dC5yb290SWRzKSB8fFxuXHRcdFx0XHRcdFx0XHQhaGFkQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5fY29sbGVjdFJlbmRlcmluZ0dhcmJhZ2UocmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH07XG5cbi8qKlxuICogR2V0cyBjb21wb25lbnQgaW5zdGFuY2UgYnkgSUQuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgQ29tcG9uZW50IElELlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBDb21wb25lbnQgaW5zdGFuY2UuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLmdldENvbXBvbmVudEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcblx0cmV0dXJuIHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogR2V0cyBjb21wb25lbnQgaW5zdGFuY2UgYnkgYSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBDb21wb25lbnQncyBFbGVtZW50LlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBDb21wb25lbnQgaW5zdGFuY2UuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLmdldENvbXBvbmVudEJ5RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfSUQpO1xuXHRyZXR1cm4gdGhpcy5nZXRDb21wb25lbnRCeUlkKGlkKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHRoYXQgZXZlcnkgaW5zdGFuY2Ugb2YgY29tcG9uZW50IGhhcyBlbGVtZW50IG9uIHRoZSBwYWdlIGFuZFxuICogcmVtb3ZlcyBhbGwgcmVmZXJlbmNlcyB0byBjb21wb25lbnRzIHJlbW92ZWQgZnJvbSBET00uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuY29sbGVjdEdhcmJhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblx0XHRcdE9iamVjdC5rZXlzKHNlbGYuX2NvbXBvbmVudEVsZW1lbnRzKVxuXHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0XHRpZiAoU1BFQ0lBTF9JRFMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0gc2VsZi5fd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gc2VsZi5fdW5iaW5kQ29tcG9uZW50KHNlbGYuX2NvbXBvbmVudEVsZW1lbnRzW2lkXSlcblx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5fcmVtb3ZlQ29tcG9uZW50KGlkKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmVuZGVycyBjb21wb25lbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIE5hbWUgb2YgSFRNTCB0YWcuXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyBFbGVtZW50IGF0dHJpYnV0ZXMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxFbGVtZW50Pn0gUHJvbWlzZSBmb3IgSFRNTCBlbGVtZW50IHdpdGggcmVuZGVyZWQgY29tcG9uZW50LlxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgYXR0cmlidXRlcykge1xuXHRpZiAodHlwZW9mICh0YWdOYW1lKSAhPT0gJ3N0cmluZycgfHwgIWF0dHJpYnV0ZXMgfHxcblx0XHR0eXBlb2YgKGF0dHJpYnV0ZXMpICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcblx0XHRcdG5ldyBFcnJvcihFUlJPUl9DUkVBVEVfV1JPTkdfQVJHVU1FTlRTKVxuXHRcdCk7XG5cdH1cblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHJldHVybiB0aGlzLl9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSgpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGNvbXBvbmVudHMgPSBzZWxmLl9jb21wb25lbnRMb2FkZXIuZ2V0Q29tcG9uZW50c0J5TmFtZXMoKSxcblx0XHRcdFx0Y29tcG9uZW50TmFtZSA9IG1vZHVsZUhlbHBlci5nZXRPcmlnaW5hbENvbXBvbmVudE5hbWUodGFnTmFtZSk7XG5cblx0XHRcdGlmIChtb2R1bGVIZWxwZXIuaXNIZWFkQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8XG5cdFx0XHRcdG1vZHVsZUhlbHBlci5pc0RvY3VtZW50Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8XG5cdFx0XHRcdCEoY29tcG9uZW50TmFtZSBpbiBjb21wb25lbnRzKSkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXG5cdFx0XHRcdFx0bmV3IEVycm9yKHV0aWwuZm9ybWF0KEVSUk9SX0NSRUFURV9XUk9OR19OQU1FLCB0YWdOYW1lKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNhZmVUYWdOYW1lID0gbW9kdWxlSGVscGVyLmdldFRhZ05hbWVGb3JDb21wb25lbnROYW1lKGNvbXBvbmVudE5hbWUpO1xuXG5cdFx0XHR2YXIgaWQgPSBhdHRyaWJ1dGVzW21vZHVsZUhlbHBlci5BVFRSSUJVVEVfSURdO1xuXHRcdFx0aWYgKCFpZCB8fCBpZCBpbiBzZWxmLl9jb21wb25lbnRJbnN0YW5jZXMpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9DUkVBVEVfV1JPTkdfSUQpKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzZWxmLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzYWZlVGFnTmFtZSk7XG5cdFx0XHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKVxuXHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNlbGYucmVuZGVyQ29tcG9uZW50KGVsZW1lbnQpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIENsZWFycyBhbGwgcmVmZXJlbmNlcyB0byByZW1vdmVkIGNvbXBvbmVudHMgZHVyaW5nIHJlbmRlcmluZyBwcm9jZXNzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlbmRlcmluZ0NvbnRleHQgQ29udGV4dCBvZiByZW5kZXJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY29sbGVjdFJlbmRlcmluZ0dhcmJhZ2UgPVxuXHRmdW5jdGlvbiAocmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRPYmplY3Qua2V5cyhyZW5kZXJpbmdDb250ZXh0LnVuYm91bmRJZHMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0Ly8gdGhpcyBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQgYWdhaW4gYW5kIHdlIGRvIG5vdCBuZWVkIHRvXG5cdFx0XHRcdC8vIHJlbW92ZSBpdC5cblx0XHRcdFx0aWYgKGlkIGluIHJlbmRlcmluZ0NvbnRleHQucmVuZGVyZWRJZHMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBzb21lb25lIGFkZGVkIGFuIGVsZW1lbnQgd2l0aCB0aGUgc2FtZSBJRCBkdXJpbmcgdGhlXG5cdFx0XHRcdC8vIHJlbmRlcmluZyBwcm9jZXNzXG5cdFx0XHRcdGlmIChzZWxmLl93aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VsZi5fcmVtb3ZlQ29tcG9uZW50KGlkKTtcblx0XHRcdH0pO1xuXHR9O1xuXG4vKipcbiAqIFVuYmluZHMgYWxsIGV2ZW50IGhhbmRsZXJzIGZyb20gc3BlY2lmaWVkIGNvbXBvbmVudCBhbmQgYWxsIGl0J3MgZGVzY2VuZGFudHMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQ29tcG9uZW50IEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZW5kZXJpbmdDb250ZXh0IENvbnRleHQgb2YgcmVuZGVyaW5nLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fdW5iaW5kQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHJlbmRlcmluZ0NvbnRleHQpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdHJvb3RJZCA9IHRoaXMuX2dldElkKGVsZW1lbnQpLFxuXHRcdHByb21pc2VzID0gW107XG5cblx0c2VsZi5fZmluZENvbXBvbmVudHMoZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnRzLCB0cnVlKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChpbm5lckVsZW1lbnQpIHtcblx0XHRcdHZhciBpZCA9IHNlbGYuX2dldElkKGlubmVyRWxlbWVudCk7XG5cdFx0XHRyZW5kZXJpbmdDb250ZXh0LnVuYm91bmRJZHNbaWRdID0gdHJ1ZTtcblx0XHRcdHByb21pc2VzLnB1c2goc2VsZi5fdW5iaW5kQ29tcG9uZW50KGlubmVyRWxlbWVudCkpO1xuXHRcdH0pO1xuXG5cdHJlbmRlcmluZ0NvbnRleHQudW5ib3VuZElkc1tyb290SWRdID0gdHJ1ZTtcblx0cHJvbWlzZXMucHVzaCh0aGlzLl91bmJpbmRDb21wb25lbnQoZWxlbWVudCkpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG4vKipcbiAqIFVuYmluZHMgYWxsIGV2ZW50IGhhbmRsZXJzIGZyb20gc3BlY2lmaWVkIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBDb21wb25lbnQgSFRNTCBlbGVtZW50LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fdW5iaW5kQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0dmFyIGlkID0gdGhpcy5fZ2V0SWQoZWxlbWVudCksXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0aW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRJbnN0YW5jZXNbaWRdO1xuXHRpZiAoIWluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdGlmIChpZCBpbiB0aGlzLl9jb21wb25lbnRCaW5kaW5ncykge1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXSlcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0XHRzZWxmLl9jb21wb25lbnRCaW5kaW5nc1tpZF1bZXZlbnROYW1lXS5oYW5kbGVyLFxuXHRcdFx0XHRcdE5PTl9CVUJCTElOR19FVkVOVFMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXTtcblx0fVxuXHR2YXIgdW5iaW5kTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKGluc3RhbmNlLCAndW5iaW5kJyk7XG5cdHJldHVybiBtb2R1bGVIZWxwZXIuZ2V0U2FmZVByb21pc2UodW5iaW5kTWV0aG9kKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudFVuYm91bmQnLCB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGlkOiAhU1BFQ0lBTF9JRFMuaGFzT3duUHJvcGVydHkoaWQpID8gaWQgOiBudWxsXG5cdFx0XHR9KTtcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgY29tcG9uZW50IGZyb20gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgQ29tcG9uZW50J3MgSURcbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcblx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEVsZW1lbnRzW2lkXTtcblx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdGRlbGV0ZSB0aGlzLl9jb21wb25lbnRCaW5kaW5nc1tpZF07XG59O1xuXG4vKipcbiAqIEJpbmRzIGFsbCByZXF1aXJlZCBldmVudCBoYW5kbGVycyB0byBjb21wb25lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQ29tcG9uZW50IEhUTUwgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2JpbmRDb21wb25lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHR2YXIgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRpbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdGlmICghaW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHR2YXIgYmluZE1ldGhvZCA9IG1vZHVsZUhlbHBlci5nZXRNZXRob2RUb0ludm9rZShpbnN0YW5jZSwgJ2JpbmQnKTtcblx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZShiaW5kTWV0aG9kKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChiaW5kaW5ncykge1xuXHRcdFx0aWYgKCFiaW5kaW5ncyB8fCB0eXBlb2YgKGJpbmRpbmdzKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50Qm91bmQnLCB7XG5cdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRpZDogIVNQRUNJQUxfSURTLmhhc093blByb3BlcnR5KGlkKSA/IGlkIDogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5fY29tcG9uZW50QmluZGluZ3NbaWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHRcdE9iamVjdC5rZXlzKGJpbmRpbmdzKVxuXHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cdFx0XHRcdFx0ZXZlbnROYW1lID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0aWYgKGV2ZW50TmFtZSBpbiBzZWxmLl9jb21wb25lbnRCaW5kaW5nc1tpZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIHNlbGVjdG9ySGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGJpbmRpbmdzW2V2ZW50TmFtZV0pXG5cdFx0XHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGhhbmRsZXIgPSBiaW5kaW5nc1tldmVudE5hbWVdW3NlbGVjdG9yXTtcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAoaGFuZGxlcikgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2VsZWN0b3JIYW5kbGVyc1tzZWxlY3Rvcl0gPSBoYW5kbGVyLmJpbmQoaW5zdGFuY2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2VsZi5fY29tcG9uZW50QmluZGluZ3NbaWRdW2V2ZW50TmFtZV0gPSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyOiBzZWxmLl9jcmVhdGVCaW5kaW5nSGFuZGxlcihcblx0XHRcdFx0XHRcdFx0ZWxlbWVudCwgc2VsZWN0b3JIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHNlbGVjdG9ySGFuZGxlcnM6IHNlbGVjdG9ySGFuZGxlcnNcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0XHRcdHNlbGYuX2NvbXBvbmVudEJpbmRpbmdzW2lkXVtldmVudE5hbWVdLmhhbmRsZXIsXG5cdFx0XHRcdFx0XHROT05fQlVCQkxJTkdfRVZFTlRTLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudEJvdW5kJywge1xuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH0pO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHVuaXZlcnNhbCBldmVudCBoYW5kbGVyIGZvciBkZWxlZ2F0ZWQgZXZlbnRzLlxuICogQHBhcmFtIHtFbGVtZW50fSBjb21wb25lbnRSb290IFJvb3QgZWxlbWVudCBvZiBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JIYW5kbGVycyBNYXAgb2YgZXZlbnQgaGFuZGxlcnMgYnkgQ1NTIHNlbGVjdG9ycy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVW5pdmVyc2FsIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGVnYXRlZCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY3JlYXRlQmluZGluZ0hhbmRsZXIgPVxuXHRmdW5jdGlvbiAoY29tcG9uZW50Um9vdCwgc2VsZWN0b3JIYW5kbGVycykge1xuXHRcdHZhciBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyhzZWxlY3RvckhhbmRsZXJzKTtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgZGlzcGF0Y2hlZEV2ZW50ID0gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnQsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsZW1lbnQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRcdHRhcmdldE1hdGNoZXMgPSBnZXRNYXRjaGVzTWV0aG9kKGVsZW1lbnQpLFxuXHRcdFx0XHRpc0hhbmRsZWQgPSBzZWxlY3RvcnMuc29tZShmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0TWF0Y2hlcyhzZWxlY3RvcikpIHtcblx0XHRcdFx0XHRcdHNlbGVjdG9ySGFuZGxlcnNbc2VsZWN0b3JdKGRpc3BhdGNoZWRFdmVudCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGlmIChpc0hhbmRsZWQgfHwgIWV2ZW50LmJ1YmJsZXMpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQgIT09IGNvbXBvbmVudFJvb3QpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0dGFyZ2V0TWF0Y2hlcyA9IGdldE1hdGNoZXNNZXRob2QoZWxlbWVudCk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRNYXRjaGVzKHNlbGVjdG9yc1tpXSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpc0hhbmRsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHNlbGVjdG9ySGFuZGxlcnNbc2VsZWN0b3JzW2ldXShkaXNwYXRjaGVkRXZlbnQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzSGFuZGxlZCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGVsZW1lbnQgaXMgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50cyBDdXJyZW50IGNvbXBvbmVudHMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5faXNDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50cywgZWxlbWVudCkge1xuXHR2YXIgY3VycmVudE5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblx0cmV0dXJuIG1vZHVsZUhlbHBlci5DT01QT05FTlRfUFJFRklYX1JFR0VYUC50ZXN0KGN1cnJlbnROb2RlTmFtZSkgJiZcblx0XHQobW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZShjdXJyZW50Tm9kZU5hbWUpIGluIGNvbXBvbmVudHMpO1xufTtcblxuLyoqXG4gKiBGaW5kcyBhbGwgZGVzY2VuZGFudCBjb21wb25lbnRzIG9mIHNwZWNpZmllZCBjb21wb25lbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBSb290IGNvbXBvbmVudCBIVE1MIGVsZW1lbnQgdG8gYmVnaW4gc2VhcmNoIHdpdGguXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50cyBNYXAgb2YgY29tcG9uZW50cyBieSBuYW1lcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZ29JbkNvbXBvbmVudHMgR28gaW5zaWRlIG5lc3RlZCBjb21wb25lbnRzLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2ZpbmRDb21wb25lbnRzID1cblx0ZnVuY3Rpb24gKGVsZW1lbnQsIGNvbXBvbmVudHMsIGdvSW5Db21wb25lbnRzKSB7XG5cdFx0dmFyIGVsZW1lbnRzID0gW10sXG5cdFx0XHRxdWV1ZSA9IFtlbGVtZW50XSxcblx0XHRcdGN1cnJlbnRDaGlsZHJlbiwgaTtcblxuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjdXJyZW50Q2hpbGRyZW4gPSBxdWV1ZS5zaGlmdCgpLmNoaWxkTm9kZXM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY3VycmVudENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIHdlIG5lZWQgb25seSBFbGVtZW50IG5vZGVzXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGRyZW5baV0ubm9kZVR5cGUgIT09IDEpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFuZCB0aGV5IHNob3VsZCBiZSBjb21wb25lbnRzXG5cdFx0XHRcdGlmICghdGhpcy5faXNDb21wb25lbnQoY29tcG9uZW50cywgY3VycmVudENoaWxkcmVuW2ldKSkge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goY3VycmVudENoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChnb0luQ29tcG9uZW50cykge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goY3VycmVudENoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbGVtZW50cy5wdXNoKGN1cnJlbnRDaGlsZHJlbltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xuXHR9O1xuXG4vKipcbiAqIEhhbmRsZXMgZXJyb3Igd2hpbGUgcmVuZGVyaW5nLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIEVycm9yIHRvIGhhbmRsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFByb21pc2UgZm9yIEhUTUwgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2hhbmRsZVJlbmRlckVycm9yID1cblx0ZnVuY3Rpb24gKGVsZW1lbnQsIGNvbXBvbmVudCwgZXJyb3IpIHtcblx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIGVycm9yKTtcblxuXHRcdC8vIGRvIG5vdCBjb3JydXB0IGV4aXN0ZWQgSEVBRCB3aGVuIGVycm9yIG9jY3Vyc1xuXHRcdGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFRBR19OQU1FUy5IRUFEKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuX2NvbmZpZy5pc1JlbGVhc2UgJiYgZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvckhlbHBlci5wcmV0dHlQcmludChcblx0XHRcdFx0ZXJyb3IsIHRoaXMuX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG5cdFx0XHQpKTtcblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudC5lcnJvclRlbXBsYXRlKSB7XG5cdFx0XHRyZXR1cm4gY29tcG9uZW50LmVycm9yVGVtcGxhdGUucmVuZGVyKGVycm9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcblx0fTtcblxuLyoqXG4gKiBVcGRhdGVzIGFsbCBjb21wb25lbnRzIHRoYXQgZGVwZW5kIG9uIGN1cnJlbnQgc2V0IG9mIGNoYW5nZWQgc3RvcmVzLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fdXBkYXRlU3RvcmVDb21wb25lbnRzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5faXNVcGRhdGluZykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHZhciBzZWxmID0gdGhpcztcblxuXHQvLyBpZiBkb2N1bWVudCBjb21wb25lbnQgaXMgY2hhbmdlZCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBwYWdlXG5cdHZhciBkb2N1bWVudFN0b3JlID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXG5cdFx0bW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRVxuXHQpO1xuXHRpZiAoZG9jdW1lbnRTdG9yZSBpbiB0aGlzLl9jdXJyZW50Q2hhbmdlZFN0b3Jlcykge1xuXHRcdHZhciBuZXdMb2NhdGlvbiA9IHRoaXMuX2N1cnJlbnRSb3V0aW5nQ29udGV4dC5sb2NhdGlvbi50b1N0cmluZygpO1xuXHRcdGlmIChuZXdMb2NhdGlvbiA9PT0gdGhpcy5fd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpIHtcblx0XHRcdHRoaXMuX3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0dGhpcy5fd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdMb2NhdGlvbik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cblx0dGhpcy5faXNVcGRhdGluZyA9IHRydWU7XG5cblx0Ly8gaWYgd2UgaGF2ZSBhd2FpdGluZyByb3V0aW5nIHdlIHNob3VsZCBhcHBseSBzdGF0ZSB0byB0aGUgc3RvcmVzXG5cdGlmICh0aGlzLl9hd2FpdGluZ1JvdXRpbmcpIHtcblx0XHR2YXIgY29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpLFxuXHRcdFx0Y2hhbmdlZEJ5U3RhdGUgPSB0aGlzLl9zdG9yZURpc3BhdGNoZXIuc2V0U3RhdGUoXG5cdFx0XHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZy5zdGF0ZSxcblx0XHRcdFx0dGhpcy5fYXdhaXRpbmdSb3V0aW5nLnJvdXRpbmdDb250ZXh0XG5cdFx0XHQpO1xuXG5cdFx0Y2hhbmdlZEJ5U3RhdGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0c2VsZi5fY3VycmVudENoYW5nZWRTdG9yZXNbbmFtZV0gPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0Ly8gd2Ugc2hvdWxkIHVwZGF0ZSBjb250ZXh0cyBvZiB0aGUgc3RvcmVzIHdpdGggdGhlIG5ldyByb3V0aW5nIGNvbnRleHRcblx0XHR0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQgPSB0aGlzLl9hd2FpdGluZ1JvdXRpbmcucm91dGluZ0NvbnRleHQ7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50SW5zdGFuY2VzKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRcdHZhciBpbnN0YW5jZSA9IHNlbGYuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0ID0gc2VsZi5fZ2V0Q29tcG9uZW50Q29udGV4dChcblx0XHRcdFx0XHRjb21wb25lbnRzW2luc3RhbmNlLiRjb250ZXh0Lm5hbWVdLFxuXHRcdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0LmVsZW1lbnRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZyA9IG51bGw7XG5cdH1cblxuXHR2YXIgY2hhbmdlZFN0b3JlcyA9IE9iamVjdC5rZXlzKHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzKTtcblx0aWYgKGNoYW5nZWRTdG9yZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhpcy5faXNVcGRhdGluZyA9IGZhbHNlO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHR2YXIgcmVuZGVyaW5nQ29udGV4dCA9IHRoaXMuX2NyZWF0ZVJlbmRlcmluZ0NvbnRleHQoY2hhbmdlZFN0b3JlcyksXG5cdFx0cHJvbWlzZXMgPSByZW5kZXJpbmdDb250ZXh0LnJvb3RzLm1hcChmdW5jdGlvbiAocm9vdCkge1xuXHRcdFx0cmVuZGVyaW5nQ29udGV4dC5yb290SWRzW3NlbGYuX2dldElkKHJvb3QpXSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gc2VsZi5yZW5kZXJDb21wb25lbnQocm9vdCwgcmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLl9pc1VwZGF0aW5nID0gZmFsc2U7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdkb2N1bWVudFVwZGF0ZWQnLCBjaGFuZ2VkU3RvcmVzKTtcblx0XHRcdHJldHVybiBzZWxmLl91cGRhdGVTdG9yZUNvbXBvbmVudHMoKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogTWVyZ2VzIG5ldyBhbmQgZXhpc3RlZCBoZWFkIGVsZW1lbnRzIGFuZCBjaGFuZ2Ugb25seSBkaWZmZXJlbmNlLlxuICogQHBhcmFtIHtFbGVtZW50fSBoZWFkIEhFQUQgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5ld0hlYWQgTmV3IGhlYWQgZWxlbWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbi8qanNoaW50IG1heGNvbXBsZXhpdHk6ZmFsc2UgKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9tZXJnZUhlYWQgPSBmdW5jdGlvbiAoaGVhZCwgbmV3SGVhZCkge1xuXHRpZiAoIW5ld0hlYWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHZhciBtYXAgPSB0aGlzLl9nZXRIZWFkTWFwKGhlYWQuY2hpbGROb2RlcyksXG5cdFx0Y3VycmVudCwgaSwga2V5LCBvbGRLZXksIG9sZEl0ZW0sXG5cdFx0c2FtZU1ldGFFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0Zm9yIChpID0gMDsgaSA8IG5ld0hlYWQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdGN1cnJlbnQgPSBuZXdIZWFkLmNoaWxkTm9kZXNbaV07XG5cblx0XHRpZiAoIShjdXJyZW50Lm5vZGVOYW1lIGluIG1hcCkpIHtcblx0XHRcdG1hcFtjdXJyZW50Lm5vZGVOYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChjdXJyZW50Lm5vZGVOYW1lKSB7XG5cdFx0XHQvLyB0aGVzZSBlbGVtZW50cyBjYW4gYmUgb25seSByZXBsYWNlZFxuXHRcdFx0Y2FzZSBUQUdfTkFNRVMuVElUTEU6XG5cdFx0XHRjYXNlIFRBR19OQU1FUy5CQVNFOlxuXHRcdFx0Y2FzZSBUQUdfTkFNRVMuTk9TQ1JJUFQ6XG5cdFx0XHRcdGtleSA9IHRoaXMuX2dldE5vZGVLZXkoY3VycmVudCk7XG5cdFx0XHRcdG9sZEl0ZW0gPSBoZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKGN1cnJlbnQubm9kZU5hbWUpWzBdO1xuXHRcdFx0XHRpZiAob2xkSXRlbSkge1xuXHRcdFx0XHRcdG9sZEtleSA9IHRoaXMuX2dldE5vZGVLZXkob2xkSXRlbSk7XG5cdFx0XHRcdFx0aGVhZC5yZXBsYWNlQ2hpbGQoY3VycmVudCwgb2xkSXRlbSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChjdXJyZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB3aGVuIHdlIGRvIHJlcGxhY2Ugb3IgYXBwZW5kIGN1cnJlbnQgaXMgcmVtb3ZlZCBmcm9tIG5ld0hlYWRcblx0XHRcdFx0Ly8gdGhlcmVmb3JlIHdlIG5lZWQgdG8gZGVjcmVtZW50IGluZGV4XG5cdFx0XHRcdGktLTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIHRoZXNlIGVsZW1lbnRzIGNhbiBub3QgYmUgZGVsZXRlZCBmcm9tIGhlYWRcblx0XHRcdC8vIHRoZXJlZm9yZSB3ZSBqdXN0IGFkZCBuZXcgZWxlbWVudHMgdGhhdCBkaWZmZXJzIGZyb20gZXhpc3RlZFxuXHRcdFx0Y2FzZSBUQUdfTkFNRVMuU1RZTEU6XG5cdFx0XHRjYXNlIFRBR19OQU1FUy5MSU5LOlxuXHRcdFx0Y2FzZSBUQUdfTkFNRVMuU0NSSVBUOlxuXHRcdFx0XHRrZXkgPSBzZWxmLl9nZXROb2RlS2V5KGN1cnJlbnQpO1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbWFwW2N1cnJlbnQubm9kZU5hbWVdKSkge1xuXHRcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoY3VycmVudCk7XG5cdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gbWV0YSBhbmQgb3RoZXIgZWxlbWVudHMgY2FuIGJlIGRlbGV0ZWRcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90IGRlbGV0ZSBhbmQgYXBwZW5kIHNhbWUgZWxlbWVudHNcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGtleSA9IHNlbGYuX2dldE5vZGVLZXkoY3VycmVudCk7XG5cdFx0XHRcdGlmIChrZXkgaW4gbWFwW2N1cnJlbnQubm9kZU5hbWVdKSB7XG5cdFx0XHRcdFx0c2FtZU1ldGFFbGVtZW50c1trZXldID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGN1cnJlbnQpO1xuXHRcdFx0XHRcdGktLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZiAoVEFHX05BTUVTLk1FVEEgaW4gbWFwKSB7XG5cdFx0Ly8gcmVtb3ZlIG1ldGEgdGFncyB3aGljaCBhIG5vdCBpbiBhIG5ldyBoZWFkIHN0YXRlXG5cdFx0T2JqZWN0LmtleXMobWFwW1RBR19OQU1FUy5NRVRBXSlcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRhS2V5KSB7XG5cdFx0XHRcdGlmIChtZXRhS2V5IGluIHNhbWVNZXRhRWxlbWVudHMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkLnJlbW92ZUNoaWxkKG1hcFtUQUdfTkFNRVMuTUVUQV1bbWV0YUtleV0pO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0cyBtYXAgb2YgYWxsIEhFQUQncyBlbGVtZW50cy5cbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IGhlYWRDaGlsZHJlbiBIZWFkIGNoaWxkcmVuIERPTSBub2Rlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcCBvZiBIRUFEIGVsZW1lbnRzLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2dldEhlYWRNYXAgPSBmdW5jdGlvbiAoaGVhZENoaWxkcmVuKSB7XG5cdC8vIENyZWF0ZSBtYXAgb2YgPG1ldGE+LCA8bGluaz4sIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IHRhZ3Ncblx0Ly8gYnkgdW5pcXVlIGtleXMgdGhhdCBjb250YWluIGF0dHJpYnV0ZXMgYW5kIGNvbnRlbnRcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0aSwgY3VycmVudCxcblx0XHRzZWxmID0gdGhpcztcblxuXHRmb3IgKGkgPSAwOyBpIDwgaGVhZENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y3VycmVudCA9IGhlYWRDaGlsZHJlbltpXTtcblx0XHRpZiAoIShjdXJyZW50Lm5vZGVOYW1lIGluIG1hcCkpIHtcblx0XHRcdG1hcFtjdXJyZW50Lm5vZGVOYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0fVxuXHRcdG1hcFtjdXJyZW50Lm5vZGVOYW1lXVtzZWxmLl9nZXROb2RlS2V5KGN1cnJlbnQpXSA9IGN1cnJlbnQ7XG5cdH1cblx0cmV0dXJuIG1hcDtcbn07XG5cbi8qKlxuICogR2V0cyB1bmlxdWUgZWxlbWVudCBrZXkgdXNpbmcgZWxlbWVudCdzIGF0dHJpYnV0ZXMgYW5kIGl0cyBjb250ZW50LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIEhUTUwgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVuaXF1ZSBrZXkgZm9yIGVsZW1lbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fZ2V0Tm9kZUtleSA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdHZhciBjdXJyZW50LCBpLFxuXHRcdGF0dHJpYnV0ZXMgPSBbXTtcblxuXHRpZiAobm9kZS5ub2RlVHlwZSAhPT0gTk9ERV9UWVBFUy5FTEVNRU5UX05PREUpIHtcblx0XHRyZXR1cm4gbm9kZS5ub2RlVmFsdWUgfHwgJyc7XG5cdH1cblxuXHRpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50ID0gbm9kZS5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0YXR0cmlidXRlcy5wdXNoKGN1cnJlbnQubmFtZSArICc9JyArIGN1cnJlbnQudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGVzXG5cdFx0XHQuc29ydCgpXG5cdFx0XHQuam9pbignfCcpICsgJz4nICsgbm9kZS50ZXh0Q29udGVudDtcbn07XG5cbi8qKlxuICogRG9lcyBpbml0aWFsIHdyYXBwaW5nIGZvciBldmVyeSBjb21wb25lbnQgb24gdGhlIHBhZ2UuXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIEN1cnJlbnQgY29tcG9uZW50cyBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gZWxlbWVudCBFbGVtZW50cyBsaXN0LlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2luaXRpYWxXcmFwID0gZnVuY3Rpb24gKGNvbXBvbmVudHMsIGVsZW1lbnRzKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRjdXJyZW50ID0gZWxlbWVudHMucG9wKCk7XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGlkID0gc2VsZi5fZ2V0SWQoY3VycmVudCk7XG5cdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbXBvbmVudE5hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0T3JpZ2luYWxDb21wb25lbnROYW1lKFxuXHRcdFx0XHRcdGN1cnJlbnQubm9kZU5hbWVcblx0XHRcdFx0KTtcblx0XHRcdGlmICghKGNvbXBvbmVudE5hbWUgaW4gY29tcG9uZW50cykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNvbnN0cnVjdG9yID0gY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5jb25zdHJ1Y3Rvcjtcblx0XHRcdGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kY29udGV4dCA9IHNlbGYuX2dldENvbXBvbmVudENvbnRleHQoXG5cdFx0XHRcdGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0sIGN1cnJlbnRcblx0XHRcdCk7XG5cblx0XHRcdHZhciBpbnN0YW5jZSA9IHNlbGYuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmVJbnN0YW5jZShcblx0XHRcdFx0Y29uc3RydWN0b3IsIHNlbGYuX2NvbmZpZ1xuXHRcdFx0KTtcblx0XHRcdGluc3RhbmNlLiRjb250ZXh0ID0gY29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0O1xuXHRcdFx0c2VsZi5fY29tcG9uZW50RWxlbWVudHNbaWRdID0gY3VycmVudDtcblx0XHRcdHNlbGYuX2NvbXBvbmVudEluc3RhbmNlc1tpZF0gPSBpbnN0YW5jZTtcblx0XHRcdC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIG9mIHRoZSBjb21wb25lbnRcblx0XHRcdHNlbGYuX3N0b3JlRGlzcGF0Y2hlci5nZXRTdG9yZShcblx0XHRcdFx0Y3VycmVudC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRSlcblx0XHRcdCk7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdjb21wb25lbnRSZW5kZXJlZCcsIHtcblx0XHRcdFx0bmFtZTogY29tcG9uZW50TmFtZSxcblx0XHRcdFx0YXR0cmlidXRlczogaW5zdGFuY2UuJGNvbnRleHQuYXR0cmlidXRlcyxcblx0XHRcdFx0Y29udGV4dDogaW5zdGFuY2UuJGNvbnRleHRcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHNlbGYuX2JpbmRDb21wb25lbnQoY3VycmVudCk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5faW5pdGlhbFdyYXAoY29tcG9uZW50cywgZWxlbWVudHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KFxuXHRcdFx0XHQnZG9jdW1lbnRSZW5kZXJlZCcsIHNlbGYuX2N1cnJlbnRSb3V0aW5nQ29udGV4dFxuXHRcdFx0KTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogR2V0cyBjb21wb25lbnQgY29udGV4dCB1c2luZyBiYXNpYyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgZGV0YWlscy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudCBvZiBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb21wb25lbnQgY29udGV4dC5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9nZXRDb21wb25lbnRDb250ZXh0ID1cblx0ZnVuY3Rpb24gKGNvbXBvbmVudCwgZWxlbWVudCkge1xuXHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdHN0b3JlTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpLFxuXHRcdFx0Y29tcG9uZW50Q29udGV4dCA9IE9iamVjdC5jcmVhdGUodGhpcy5fY3VycmVudFJvdXRpbmdDb250ZXh0KTtcblxuXHRcdC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIG9mIHRoZSBjb21wb25lbnRcblx0XHR0aGlzLl9zdG9yZURpc3BhdGNoZXIuZ2V0U3RvcmUoc3RvcmVOYW1lKTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbXBvbmVudENvbnRleHQsIHtcblx0XHRcdG5hbWU6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gYXR0cmlidXRlc1RvT2JqZWN0KGVsZW1lbnQuYXR0cmlidXRlcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbXBvbmVudENvbnRleHQuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0Y29tcG9uZW50Q29udGV4dC5nZXRDb21wb25lbnRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5nZXRDb21wb25lbnRCeUlkKGlkKTtcblx0XHR9O1xuXHRcdGNvbXBvbmVudENvbnRleHQuZ2V0Q29tcG9uZW50QnlFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBzZWxmLmdldENvbXBvbmVudEJ5RWxlbWVudChlbGVtZW50KTtcblx0XHR9O1xuXHRcdGNvbXBvbmVudENvbnRleHQuY3JlYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHJldHVybiBzZWxmLmNyZWF0ZUNvbXBvbmVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzKTtcblx0XHR9O1xuXHRcdGNvbXBvbmVudENvbnRleHQuY29sbGVjdEdhcmJhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5jb2xsZWN0R2FyYmFnZSgpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5nZXRTdG9yZURhdGEgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY3VycmVudFN0b3JlTmFtZSA9IGVsZW1lbnRcblx0XHRcdFx0LmdldEF0dHJpYnV0ZShtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFKTtcblx0XHRcdHJldHVybiBzZWxmLl9zdG9yZURpc3BhdGNoZXJcblx0XHRcdFx0LmdldFN0b3JlRGF0YShjdXJyZW50U3RvcmVOYW1lKTtcblx0XHR9O1xuXHRcdGNvbXBvbmVudENvbnRleHQuc2VuZEFjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG5cdFx0XHR2YXIgY3VycmVudFN0b3JlTmFtZSA9IGVsZW1lbnRcblx0XHRcdFx0LmdldEF0dHJpYnV0ZShtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFKTtcblx0XHRcdHJldHVybiBzZWxmLl9zdG9yZURpc3BhdGNoZXJcblx0XHRcdFx0LnNlbmRBY3Rpb24oY3VycmVudFN0b3JlTmFtZSwgbmFtZSwgYXJncyk7XG5cdFx0fTtcblx0XHRjb21wb25lbnRDb250ZXh0LnNlbmRCcm9hZGNhc3RBY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuXHRcdFx0cmV0dXJuIHNlbGYuX3N0b3JlRGlzcGF0Y2hlclxuXHRcdFx0XHQuc2VuZEJyb2FkY2FzdEFjdGlvbihuYW1lLCBhcmdzKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoY29tcG9uZW50Q29udGV4dCk7XG5cdH07XG5cbi8qKlxuICogRmluZHMgYWxsIHJlbmRlcmluZyByb290cyBvbiBwYWdlIGZvciBhbGwgY2hhbmdlZCBzdG9yZXMuXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VkU3RvcmVOYW1lcyBMaXN0IG9mIHN0b3JlIG5hbWVzIHdoaWNoIGhhcyBiZWVuIGNoYW5nZWQuXG4gKiBAcmV0dXJucyB7QXJyYXk8RWxlbWVudD59IEhUTUwgZWxlbWVudHMgdGhhdCBhcmUgcmVuZGVyaW5nIHJvb3RzLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2ZpbmRSZW5kZXJpbmdSb290cyA9IGZ1bmN0aW9uIChjaGFuZ2VkU3RvcmVOYW1lcykge1xuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0aGVhZFN0b3JlID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmhlYWQuZ2V0QXR0cmlidXRlKFxuXHRcdFx0bW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRVxuXHRcdCksXG5cdFx0Y29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpLFxuXHRcdGNvbXBvbmVudHNFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0c3RvcmVOYW1lc1NldCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0cm9vdHNTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuXHRcdHJvb3RzID0gW107XG5cblx0Ly8gd2Ugc2hvdWxkIGZpbmQgYWxsIGNvbXBvbmVudHMgYW5kIHRoZW4gbG9va2luZyBmb3Igcm9vdHNcblx0Y2hhbmdlZFN0b3JlTmFtZXNcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRzdG9yZU5hbWVzU2V0W3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdFx0Y29tcG9uZW50c0VsZW1lbnRzW3N0b3JlTmFtZV0gPSBzZWxmLl93aW5kb3cuZG9jdW1lbnRcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdFx0J1snICtcblx0XHRcdFx0XHRtb2R1bGVIZWxwZXIuQVRUUklCVVRFX0lEICtcblx0XHRcdFx0XHQnXScgK1xuXHRcdFx0XHRcdCdbJyArXG5cdFx0XHRcdFx0bW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRSArXG5cdFx0XHRcdFx0Jz1cIicgK1xuXHRcdFx0XHRcdHN0b3JlTmFtZSArXG5cdFx0XHRcdFx0J1wiXSdcblx0XHRcdFx0KTtcblx0XHR9KTtcblxuXHRpZiAobW9kdWxlSGVscGVyLkhFQURfQ09NUE9ORU5UX05BTUUgaW4gY29tcG9uZW50cyAmJlxuXHRcdGhlYWRTdG9yZSBpbiBzdG9yZU5hbWVzU2V0KSB7XG5cdFx0cm9vdHNTZXRbdGhpcy5fZ2V0SWQodGhpcy5fd2luZG93LmRvY3VtZW50LmhlYWQpXSA9IHRydWU7XG5cdFx0cm9vdHMucHVzaCh0aGlzLl93aW5kb3cuZG9jdW1lbnQuaGVhZCk7XG5cdH1cblxuXHRjaGFuZ2VkU3RvcmVOYW1lc1xuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdHZhciBjdXJyZW50LCBjdXJyZW50SWQsXG5cdFx0XHRcdGxhc3RSb290LCBsYXN0Um9vdElkLFxuXHRcdFx0XHRjdXJyZW50U3RvcmUsIGN1cnJlbnRDb21wb25lbnROYW1lO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudHNFbGVtZW50c1tzdG9yZU5hbWVdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSBjb21wb25lbnRzRWxlbWVudHNbc3RvcmVOYW1lXVtpXTtcblx0XHRcdFx0Y3VycmVudElkID0gY29tcG9uZW50c0VsZW1lbnRzW3N0b3JlTmFtZV1baV1cblx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfSUQpO1xuXHRcdFx0XHRsYXN0Um9vdCA9IGN1cnJlbnQ7XG5cdFx0XHRcdGxhc3RSb290SWQgPSBjdXJyZW50SWQ7XG5cdFx0XHRcdGN1cnJlbnRDb21wb25lbnROYW1lID0gbW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZShcblx0XHRcdFx0XHRjdXJyZW50LnRhZ05hbWVcblx0XHRcdFx0KTtcblxuXHRcdFx0XHR3aGlsZSAoY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRjdXJyZW50SWQgPSBzZWxmLl9nZXRJZChjdXJyZW50KTtcblx0XHRcdFx0XHRjdXJyZW50U3RvcmUgPSBjdXJyZW50LmdldEF0dHJpYnV0ZShcblx0XHRcdFx0XHRcdG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkVcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0Ly8gc3RvcmUgZGlkIG5vdCBjaGFuZ2Ugc3RhdGVcblx0XHRcdFx0XHRpZiAoIWN1cnJlbnRTdG9yZSB8fCAhKGN1cnJlbnRTdG9yZSBpbiBzdG9yZU5hbWVzU2V0KSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gaXMgbm90IGFuIGFjdGl2ZSBjb21wb25lbnRcblx0XHRcdFx0XHRpZiAoIShjdXJyZW50Q29tcG9uZW50TmFtZSBpbiBjb21wb25lbnRzKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGFzdFJvb3QgPSBjdXJyZW50O1xuXHRcdFx0XHRcdGxhc3RSb290SWQgPSBjdXJyZW50SWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxhc3RSb290SWQgaW4gcm9vdHNTZXQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyb290c1NldFtsYXN0Um9vdElkXSA9IHRydWU7XG5cdFx0XHRcdHJvb3RzLnB1c2gobGFzdFJvb3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdHJldHVybiByb290cztcbn07XG5cbi8qKlxuICogQ3JlYXRlcyByZW5kZXJpbmcgY29udGV4dC5cbiAqIEBwYXJhbSB7QXJyYXk/fSBjaGFuZ2VkU3RvcmVzIE5hbWVzIG9mIGNoYW5nZWQgc3RvcmVzLlxuICogQHJldHVybnMge3tcbiAqICAgY29uZmlnOiBPYmplY3QsXG4gKiAgIHJlbmRlcmVkSWRzOiB7fSxcbiAqICAgdW5ib3VuZElkczoge30sXG4gKiAgIGlzSGVhZFJlbmRlcmVkOiBib29sZWFuLFxuICogICBiaW5kTWV0aG9kczogQXJyYXksXG4gKiAgIHJvdXRpbmdDb250ZXh0OiBPYmplY3QsXG4gKiAgIGNvbXBvbmVudHM6IE9iamVjdCxcbiAqICAgcm9vdHM6IEFycmF5LjxFbGVtZW50PlxuICogfX0gVGhlIGNvbnRleHQgb2JqZWN0LlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NyZWF0ZVJlbmRlcmluZ0NvbnRleHQgPSBmdW5jdGlvbiAoY2hhbmdlZFN0b3Jlcykge1xuXHR2YXIgY29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29uZmlnOiB0aGlzLl9jb25maWcsXG5cdFx0cmVuZGVyZWRJZHM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0dW5ib3VuZElkczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRpc0hlYWRSZW5kZXJlZDogZmFsc2UsXG5cdFx0YmluZE1ldGhvZHM6IFtdLFxuXHRcdHJvdXRpbmdDb250ZXh0OiB0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQsXG5cdFx0Y29tcG9uZW50czogY29tcG9uZW50cyxcblx0XHRyb290SWRzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXHRcdHJvb3RzOiBjaGFuZ2VkU3RvcmVzID8gdGhpcy5fZmluZFJlbmRlcmluZ1Jvb3RzKGNoYW5nZWRTdG9yZXMpIDogW11cblx0fTtcbn07XG5cbi8qKlxuICogR2V0cyBJRCBvZiB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBIVE1MIGVsZW1lbnQgb2YgY29tcG9uZW50LlxuICogQHJldHVybnMge3N0cmluZ30gSUQuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9nZXRJZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdGlmIChlbGVtZW50ID09PSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuIFNQRUNJQUxfSURTLiQkZG9jdW1lbnQ7XG5cdH1cblx0aWYgKGVsZW1lbnQgPT09IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5oZWFkKSB7XG5cdFx0cmV0dXJuIFNQRUNJQUxfSURTLiQkaGVhZDtcblx0fVxuXHRyZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9JRCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGVtcG9yYXJ5IGNsb25lIG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50LlxuICogQHJldHVybnMge0VsZW1lbnR9IGNsb25lLlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NyZWF0ZVRlbXBvcmFyeUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHR2YXIgdG1wID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWdOYW1lKSxcblx0XHRhdHRyaWJ1dGVzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHR0bXAuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbaV0ubmFtZSwgYXR0cmlidXRlc1tpXS52YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHRtcDtcbn07XG5cbi8qKlxuICogQ29udmVydHMgTmFtZWROb2RlTWFwIG9mIEF0dHIgaXRlbXMgdG8ga2V5LXZhbHVlIG9iamVjdCBtYXAuXG4gKiBAcGFyYW0ge05hbWVkTm9kZU1hcH0gYXR0cmlidXRlcyBMaXN0IG9mIEVsZW1lbnQgYXR0cmlidXRlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcCBvZiBhdHRyaWJ1dGUgdmFsdWVzIGJ5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhdHRyaWJ1dGVzVG9PYmplY3QoYXR0cmlidXRlcykge1xuXHR2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0cmVzdWx0W2F0dHJpYnV0ZXNbaV0ubmFtZV0gPSBhdHRyaWJ1dGVzW2ldLnZhbHVlO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyBjcm9zcy1icm93c2VyIFwibWF0Y2hlc1wiIG1ldGhvZCBmb3IgdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgSFRNTCBlbGVtZW50LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBcIm1hdGNoZXNcIiBtZXRob2QuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNNZXRob2QoZWxlbWVudCkge1xuXHR2YXIgbWV0aG9kID0gKGVsZW1lbnQubWF0Y2hlcyB8fFxuXHRcdGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuXHRyZXR1cm4gbWV0aG9kLmJpbmQoZWxlbWVudCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBpbWl0YXRpb24gb2Ygb3JpZ2luYWwgRXZlbnQgb2JqZWN0IGJ1dCB3aXRoIHNwZWNpZmllZCBjdXJyZW50VGFyZ2V0LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgT3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VycmVudFRhcmdldEdldHRlciBHZXR0ZXIgZm9yIGN1cnJlbnRUYXJnZXQuXG4gKiBAcmV0dXJucyB7RXZlbnR9IFdyYXBwZWQgZXZlbnQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KGV2ZW50LCBjdXJyZW50VGFyZ2V0R2V0dGVyKSB7XG5cdHZhciBjYXRFdmVudCA9IE9iamVjdC5jcmVhdGUoZXZlbnQpLFxuXHRcdGtleXMgPSBbXSxcblx0XHRwcm9wZXJ0aWVzID0ge307XG5cdGZvciAodmFyIGtleSBpbiBldmVudCkge1xuXHRcdGtleXMucHVzaChrZXkpO1xuXHR9XG5cdGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0aWYgKHR5cGVvZiAoZXZlbnRba2V5XSkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHByb3BlcnRpZXNba2V5XSA9IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50W2tleV0uYmluZChldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllc1trZXldID0ge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBldmVudFtrZXldO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdGV2ZW50W2tleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcblxuXHRwcm9wZXJ0aWVzLmN1cnJlbnRUYXJnZXQgPSB7XG5cdFx0Z2V0OiBjdXJyZW50VGFyZ2V0R2V0dGVyXG5cdH07XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhdEV2ZW50LCBwcm9wZXJ0aWVzKTtcblx0T2JqZWN0LnNlYWwoY2F0RXZlbnQpO1xuXHRPYmplY3QuZnJlZXplKGNhdEV2ZW50KTtcblx0cmV0dXJuIGNhdEV2ZW50O1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlcjtcblxudmFyIExFVkVMUyA9IHtcblx0REVCVUc6ICdkZWJ1ZycsXG5cdFRSQUNFOiAndHJhY2UnLFxuXHRJTkZPOiAnaW5mbycsXG5cdFdBUk46ICd3YXJuJyxcblx0RVJST1I6ICdlcnJvcicsXG5cdEZBVEFMOiAnZmF0YWwnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYnJvd3NlciBsb2dnZXIuXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGxldmVscyBMZXZlbHMgdG8gbG9nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExvZ2dlcihsZXZlbHMpIHtcblx0aWYgKHR5cGVvZiAobGV2ZWxzKSA9PT0gJ29iamVjdCcpIHtcblx0XHR0aGlzLl9sZXZlbHMgPSBsZXZlbHM7XG5cdH1cblxuXHRpZiAodHlwZW9mIChsZXZlbHMpID09PSAnc3RyaW5nJykge1xuXHRcdHRoaXMuX2xldmVscyA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKExFVkVMUylcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChsZXZlbCkge1xuXHRcdFx0XHR0aGlzLl9sZXZlbHNbTEVWRUxTW2xldmVsXV0gPVxuXHRcdFx0XHRcdChsZXZlbHMuc2VhcmNoKExFVkVMU1tsZXZlbF0pICE9PSAtMSk7XG5cdFx0XHR9LCB0aGlzKTtcblx0fVxuXG5cdHRoaXMuZGVidWcgPSB0aGlzLmRlYnVnLmJpbmQodGhpcyk7XG5cdHRoaXMudHJhY2UgPSB0aGlzLnRyYWNlLmJpbmQodGhpcyk7XG5cdHRoaXMuaW5mbyA9IHRoaXMuaW5mby5iaW5kKHRoaXMpO1xuXHR0aGlzLndhcm4gPSB0aGlzLndhcm4uYmluZCh0aGlzKTtcblx0dGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKTtcblx0dGhpcy5mYXRhbCA9IHRoaXMuZmF0YWwuYmluZCh0aGlzKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IGxldmVscyBvZiBsb2dnaW5nLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkxvZ2dlci5wcm90b3R5cGUuX2xldmVscyA9IHtcblx0ZGVidWc6IHRydWUsXG5cdHRyYWNlOiB0cnVlLFxuXHRpbmZvOiB0cnVlLFxuXHR3YXJuOiB0cnVlLFxuXHRlcnJvcjogdHJ1ZSxcblx0ZmF0YWw6IHRydWVcbn07XG5cbi8qKlxuICogTG9ncyB0cmFjZSBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVHJhY2UgbWVzc2FnZS5cbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS50cmFjZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdGlmICghdGhpcy5fbGV2ZWxzLnRyYWNlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNvbnNvbGUubG9nKSB7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cbn07XG5cbi8qKlxuICogTG9ncyB0cmFjZSBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVHJhY2UgbWVzc2FnZS5cbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdGlmICghdGhpcy5fbGV2ZWxzLmRlYnVnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNvbnNvbGUubG9nKSB7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cbn07XG5cbi8qKlxuICogTG9ncyBpbmZvIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBJbmZvcm1hdGlvbiBtZXNzYWdlLlxuICovXG5Mb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRpZiAoIXRoaXMuX2xldmVscy5pbmZvKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNvbnNvbGUuaW5mbykge1xuXHRcdGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2dzIHdhcm4gbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFdhcm5pbmcgbWVzc2FnZS5cbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0aWYgKCF0aGlzLl9sZXZlbHMud2Fybikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChjb25zb2xlLndhcm4pIHtcblx0XHRjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cdH1cbn07XG4vKipcbiAqIExvZ3MgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfEVycm9yfSBlcnJvciBFcnJvciBvYmplY3Qgb3IgbWVzc2FnZS5cbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRpZiAoIXRoaXMuX2xldmVscy5lcnJvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdyaXRlRXJyb3IoZXJyb3IpO1xufTtcblxuLyoqXG4gKiBMb2dzIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gZXJyb3IgRXJyb3Igb2JqZWN0IG9yIG1lc3NhZ2UuXG4gKi9cbkxvZ2dlci5wcm90b3R5cGUuZmF0YWwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0aWYgKCF0aGlzLl9sZXZlbHMuZmF0YWwpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0d3JpdGVFcnJvcihlcnJvcik7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBlcnJvciB0byBjb25zb2xlLlxuICogQHBhcmFtIHtFcnJvcnxzdHJpbmd9IGVycm9yIEVycm9yIHRvIHdyaXRlLlxuICovXG5mdW5jdGlvbiB3cml0ZUVycm9yKGVycm9yKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcblx0XHRcdGVycm9yID0gdHlwZW9mIChlcnJvcikgPT09ICdzdHJpbmcnID8gbmV3IEVycm9yKGVycm9yKSA6IG5ldyBFcnJvcigpO1xuXHRcdH1cblx0XHRpZiAoY29uc29sZS5lcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0d3JpdGVFcnJvcihlKTtcblx0fVxufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RSb3V0ZXI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRVUkkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKS5VUkk7XG5cbnZhciBNT1VTRV9QUklNQVJZX0tFWSA9IDAsXG5cdEhSRUZfQVRUUklCVVRFX05BTUUgPSAnaHJlZicsXG5cdFRBUkdFVF9BVFRSSUJVVEVfTkFNRSA9ICd0YXJnZXQnLFxuXHRBX1RBR19OQU1FID0gJ0EnLFxuXHRCT0RZX1RBR19OQU1FID0gJ0JPRFknO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHJlcXVlc3Qgcm91dGVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIFNlcnZpY2UgbG9jYXRvciB0byByZXNvbHZlIHNlcnZpY2VzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlcXVlc3RSb3V0ZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMuX2V2ZW50QnVzID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2V2ZW50QnVzJyk7XG5cdHRoaXMuX3dpbmRvdyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKTtcblx0dGhpcy5fZG9jdW1lbnRSZW5kZXJlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdkb2N1bWVudFJlbmRlcmVyJyk7XG5cdHRoaXMuX3N0YXRlUHJvdmlkZXIgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnc3RhdGVQcm92aWRlcicpO1xuXHR0aGlzLl9jb250ZXh0RmFjdG9yeSA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb250ZXh0RmFjdG9yeScpO1xuXG5cdHRoaXMuX2lzSGlzdG9yeVN1cHBvcnRlZCA9IHRoaXMuX3dpbmRvdy5oaXN0b3J5ICYmXG5cdFx0dGhpcy5fd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cblx0Ly8gYWRkIGV2ZW50IGhhbmRsZXJzXG5cdHRoaXMuX3dyYXBEb2N1bWVudCgpO1xuXG5cdC8vIHNldCBpbml0aWFsIHN0YXRlIGZyb20gY3VycmVudCBVUklcblx0dmFyIGN1cnJlbnRMb2NhdGlvbiA9IG5ldyBVUkkodGhpcy5fd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLFxuXHRcdHN0YXRlID0gdGhpcy5fc3RhdGVQcm92aWRlci5nZXRTdGF0ZUJ5VXJpKGN1cnJlbnRMb2NhdGlvbiksXG5cdFx0c2VsZiA9IHRoaXM7XG5cblx0dGhpcy5fbG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cdHRoaXMuX2NoYW5nZVN0YXRlKHN0YXRlKVxuXHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRzZWxmLl9oYW5kbGVFcnJvcihyZWFzb24pO1xuXHRcdH0pO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgaW5pdGlhbGl6YXRpb24gZmxhZy5cbiAqIEB0eXBlIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2lzU3RhdGVJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vKipcbiAqIEN1cnJlbnQgcmVmZXJyZXIuXG4gKiBAdHlwZSB7VVJJfVxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX3JlZmVycmVyID0gJyc7XG5cbi8qKlxuICogQ3VycmVudCBsb2NhdGlvbi5cbiAqIEB0eXBlIHtVUkl9XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fbG9jYXRpb24gPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuICogQHR5cGUge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9ldmVudEJ1cyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBjb250ZXh0IGZhY3RvcnkuXG4gKiBAdHlwZSB7Q29udGV4dEZhY3Rvcnl9XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fY29udGV4dEZhY3RvcnkgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc3RhdGUgcHJvdmlkZXIuXG4gKiBAdHlwZSB7U3RhdGVQcm92aWRlcn1cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9zdGF0ZVByb3ZpZGVyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGRvY3VtZW50IHJlbmRlcmVyLlxuICogQHR5cGUge0RvY3VtZW50UmVuZGVyZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fZG9jdW1lbnRSZW5kZXJlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBicm93c2VyIHdpbmRvdy5cbiAqIEB0eXBlIHtXaW5kb3d9XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fd2luZG93ID0gbnVsbDtcblxuLyoqXG4gKiBUcnVlIGlmIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBoaXN0b3J5IEFQSS5cbiAqIEB0eXBlIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2lzSGlzdG9yeVN1cHBvcnRlZCA9IGZhbHNlO1xuXG4vKipcbiAqIFJvdXRlcyBicm93c2VyIHJlbmRlciByZXF1ZXN0LlxuICogQHBhcmFtIHtVUkl9IG5ld0xvY2F0aW9uIE5ldyBsb2NhdGlvbi5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5yb3V0ZSA9IGZ1bmN0aW9uIChuZXdMb2NhdGlvbikge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdC8vIGJlY2F1c2Ugbm93IGxvY2F0aW9uIHdhcyBub3QgY2hhbmdlIHlldCBhbmRcblx0Ly8gZGlmZmVyZW50IGJyb3dzZXJzIGhhbmRsZSBgcG9wc3RhdGVgIGRpZmZlcmVudGx5XG5cdC8vIHdlIG5lZWQgdG8gZG8gcm91dGUgaW4gbmV4dCBpdGVyYXRpb24gb2YgZXZlbnQgbG9vcFxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc3RhdGUgPSBzZWxmLl9zdGF0ZVByb3ZpZGVyLmdldFN0YXRlQnlVcmkobmV3TG9jYXRpb24pLFxuXHRcdFx0XHRuZXdMb2NhdGlvblN0cmluZyA9IG5ld0xvY2F0aW9uLnRvU3RyaW5nKCk7XG5cblx0XHRcdGlmICghc3RhdGUpIHtcblx0XHRcdFx0c2VsZi5fd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdMb2NhdGlvblN0cmluZyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5fd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCAnJywgbmV3TG9jYXRpb25TdHJpbmcpO1xuXG5cdFx0XHQvLyBpZiBvbmx5IFVSSSBmcmFnbWVudCBpcyBjaGFuZ2VkXG5cdFx0XHR2YXIgbmV3UXVlcnkgPSBuZXdMb2NhdGlvbi5xdWVyeSA/XG5cdFx0XHRcdFx0bmV3TG9jYXRpb24ucXVlcnkudG9TdHJpbmcoKSA6IG51bGwsXG5cdFx0XHRcdGN1cnJlbnRRdWVyeSA9IHNlbGYuX2xvY2F0aW9uLnF1ZXJ5ID9cblx0XHRcdFx0XHRzZWxmLl9sb2NhdGlvbi5xdWVyeS50b1N0cmluZygpIDogbnVsbDtcblx0XHRcdGlmIChuZXdMb2NhdGlvbi5wYXRoID09PSBzZWxmLl9sb2NhdGlvbi5wYXRoICYmXG5cdFx0XHRcdG5ld1F1ZXJ5ID09PSBjdXJyZW50UXVlcnkpIHtcblx0XHRcdFx0c2VsZi5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblx0XHRcdHJldHVybiBzZWxmLl9jaGFuZ2VTdGF0ZShzdGF0ZSk7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFNldHMgYXBwbGljYXRpb24gc3RhdGUgdG8gc3BlY2lmaWVkIFVSSS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblN0cmluZyBVUkkgdG8gZ28uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiAobG9jYXRpb25TdHJpbmcpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgbG9jYXRpb24gPSBuZXcgVVJJKGxvY2F0aW9uU3RyaW5nKTtcblx0XHRcdGxvY2F0aW9uID0gbG9jYXRpb24ucmVzb2x2ZVJlbGF0aXZlKHNlbGYuX2xvY2F0aW9uKTtcblx0XHRcdGxvY2F0aW9uU3RyaW5nID0gbG9jYXRpb24udG9TdHJpbmcoKTtcblxuXHRcdFx0dmFyIGN1cnJlbnRBdXRob3JpdHkgPSBzZWxmLl9sb2NhdGlvbi5hdXRob3JpdHkgP1xuXHRcdFx0XHRcdHNlbGYuX2xvY2F0aW9uLmF1dGhvcml0eS50b1N0cmluZygpIDogbnVsbCxcblx0XHRcdFx0bmV3QXV0aG9yaXR5ID0gbG9jYXRpb24uYXV0aG9yaXR5ID9cblx0XHRcdFx0XHRsb2NhdGlvbi5hdXRob3JpdHkudG9TdHJpbmcoKSA6IG51bGw7XG5cblx0XHRcdC8vIHdlIG11c3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBleHRlcm5hbCBsaW5rIGJlZm9yZSBtYXAgVVJJXG5cdFx0XHQvLyB0byBpbnRlcm5hbCBhcHBsaWNhdGlvbiBzdGF0ZVxuXHRcdFx0aWYgKCFzZWxmLl9pc0hpc3RvcnlTdXBwb3J0ZWQgfHxcblx0XHRcdFx0bG9jYXRpb24uc2NoZW1lICE9PSBzZWxmLl9sb2NhdGlvbi5zY2hlbWUgfHxcblx0XHRcdFx0bmV3QXV0aG9yaXR5ICE9PSBjdXJyZW50QXV0aG9yaXR5KSB7XG5cdFx0XHRcdHNlbGYuX3dpbmRvdy5sb2NhdGlvbi5hc3NpZ24obG9jYXRpb25TdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZWxmLnJvdXRlKGxvY2F0aW9uKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogQ2hhbmdlcyBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlIHdpdGggbmV3IGxvY2F0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIE5ldyBzdGF0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2NoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHJvdXRpbmdDb250ZXh0ID0gc2VsZi5fY29udGV4dEZhY3RvcnkuY3JlYXRlKHtcblx0XHRcdFx0XHRyZWZlcnJlcjogc2VsZi5fcmVmZXJyZXIgfHwgc2VsZi5fd2luZG93LmRvY3VtZW50LnJlZmVycmVyLFxuXHRcdFx0XHRcdGxvY2F0aW9uOiBzZWxmLl9sb2NhdGlvbixcblx0XHRcdFx0XHR1c2VyQWdlbnQ6IHNlbGYuX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIXNlbGYuX2lzU3RhdGVJbml0aWFsaXplZCkge1xuXHRcdFx0XHRzZWxmLl9pc1N0YXRlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5fZG9jdW1lbnRSZW5kZXJlci5pbml0V2l0aFN0YXRlKFxuXHRcdFx0XHRcdHN0YXRlLCByb3V0aW5nQ29udGV4dFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgXCJub3QgZm91bmRcIiBzdGF0ZVxuXHRcdFx0aWYgKHN0YXRlID09PSBudWxsKSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VsZi5fZG9jdW1lbnRSZW5kZXJlclxuXHRcdFx0XHQucmVuZGVyKHN0YXRlLCByb3V0aW5nQ29udGV4dCk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLl9yZWZlcnJlciA9IHNlbGYuX2xvY2F0aW9uO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBXcmFwcyBkb2N1bWVudCB3aXRoIHJlcXVpcmVkIGV2ZW50cyB0byByb3V0ZSByZXF1ZXN0cy5cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl93cmFwRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHRpZiAoIXRoaXMuX2lzSGlzdG9yeVN1cHBvcnRlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRzZWxmLnJvdXRlKG5ldyBVUkkoc2VsZi5fd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpKVxuXHRcdFx0LmNhdGNoKHNlbGYuX2hhbmRsZUVycm9yLmJpbmQoc2VsZikpO1xuXHR9KTtcblxuXHR0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gQV9UQUdfTkFNRSkge1xuXHRcdFx0c2VsZi5fbGlua0NsaWNrSGFuZGxlcihldmVudCwgZXZlbnQudGFyZ2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGxpbmsgPSBjbG9zZXN0TGluayhldmVudC50YXJnZXQpO1xuXHRcdFx0aWYgKCFsaW5rKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNlbGYuX2xpbmtDbGlja0hhbmRsZXIoZXZlbnQsIGxpbmspO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgbGluayBjbGljayBvbiB0aGUgcGFnZS5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50LXJlbGF0ZWQgb2JqZWN0LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IExpbmsgZWxlbWVudC5cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9saW5rQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50KSB7XG5cdHZhciB0YXJnZXRBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShUQVJHRVRfQVRUUklCVVRFX05BTUUpO1xuXHRpZiAodGFyZ2V0QXR0cmlidXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgbWlkZGxlIG1vdXNlIGJ1dHRvbiB3YXMgY2xpY2tlZFxuXHRpZiAoZXZlbnQuYnV0dG9uICE9PSBNT1VTRV9QUklNQVJZX0tFWSB8fFxuXHRcdGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGxvY2F0aW9uU3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoSFJFRl9BVFRSSUJVVEVfTkFNRSk7XG5cdGlmICghbG9jYXRpb25TdHJpbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGxvY2F0aW9uU3RyaW5nWzBdID09PSAnIycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR0aGlzLmdvKGxvY2F0aW9uU3RyaW5nKVxuXHRcdC5jYXRjaCh0aGlzLl9oYW5kbGVFcnJvci5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyBhbGwgZXJyb3JzLlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgRXJyb3IgdG8gaGFuZGxlLlxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2hhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xufTtcblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBhc2NlbmRpbmcgXCJBXCIgZWxlbWVudCBub2RlLlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IERPTSBlbGVtZW50LlxuICogQHJldHVybnMge05vZGV8bnVsbH0gVGhlIGNsb3Nlc3QgXCJBXCIgZWxlbWVudCBvciBudWxsLlxuICovXG5mdW5jdGlvbiBjbG9zZXN0TGluayhlbGVtZW50KSB7XG5cdHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgIT09IEFfVEFHX05BTUUgJiZcblx0XHRlbGVtZW50Lm5vZGVOYW1lICE9PSBCT0RZX1RBR19OQU1FKSB7XG5cdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVOYW1lID09PSBBX1RBR19OQU1FID8gZWxlbWVudCA6IG51bGw7XG59XG4iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBoaWdoIHJlc29sdXRpb24gdGltZSBvciB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG5cdCAqIHByZXZpb3VzIGFuZCBjdXJyZW50IHRpbWUuXG5cdCAqIEBwYXJhbSB7QXJyYXk/fSBQcmV2aW91cyBoaWdoIHJlc29sdXRpb24gdGltZXN0YW1wLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBoaWdoIHJlc29sdXRpb24gdGltZS5cblx0ICovXG5cdGdldDogcmVxdWlyZSgnYnJvd3Nlci1wcm9jZXNzLWhydGltZScpLFxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAgdG8gdGV4dCBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge0FycmF5fVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaW1lIG1lc3NhZ2UuXG5cdCAqL1xuXHR0b01lc3NhZ2U6IHJlcXVpcmUoJ3ByZXR0eS1ocnRpbWUnKSxcblx0LyoqXG5cdCAqIENvbnZlcnRzIGhpZ2ggcmVzb2x1dGlvbiB0aW1lIHRvIG1pbGxpc2Vjb25kcyBudW1iZXIuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGhyVGltZSBIaWdoIHJlc29sdXRpb24gdGltZSB0dXBsZS5cblx0ICovXG5cdHRvTWlsbGlzZWNvbmRzOiBmdW5jdGlvbiAoaHJUaW1lKSB7XG5cdFx0cmV0dXJuIGhyVGltZVswXSAqIDFlMyArIE1hdGgucm91bmQoaHJUaW1lWzFdIC8gMWU2KTtcblx0fVxufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnRMb2FkZXI7XG5cbnZhciBtb2R1bGVIZWxwZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVycy9tb2R1bGVIZWxwZXInKSxcblx0dXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0TG9hZGVyQmFzZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9iYXNlL0xvYWRlckJhc2UnKTtcblxudXRpbC5pbmhlcml0cyhDb21wb25lbnRMb2FkZXIsIExvYWRlckJhc2UpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgbG9hZGVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIExvYWRlckJhc2VcbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50TG9hZGVyKCRzZXJ2aWNlTG9jYXRvcikge1xuXHR0aGlzLl9zZXJ2aWNlTG9jYXRvciA9ICRzZXJ2aWNlTG9jYXRvcjtcblx0dGhpcy5fZXZlbnRCdXMgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblx0dGhpcy5fdGVtcGxhdGVQcm92aWRlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCd0ZW1wbGF0ZVByb3ZpZGVyJyk7XG5cdExvYWRlckJhc2UuY2FsbCh0aGlzLCAkc2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgnY29tcG9uZW50VHJhbnNmb3JtJykpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuICogQHR5cGUge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUuX2V2ZW50QnVzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUuX3NlcnZpY2VMb2NhdG9yID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHRlbXBsYXRlIHByb3ZpZGVyLlxuICogQHR5cGUge1RlbXBsYXRlUHJvdmlkZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5Db21wb25lbnRMb2FkZXIucHJvdG90eXBlLl90ZW1wbGF0ZVByb3ZpZGVyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IG1hcCBvZiBsb2FkZWQgY29tcG9uZW50cyBieSBuYW1lcy5cbiAqIEB0eXBlIHtPYmplY3R9IE1hcCBvZiBjb21wb25lbnRzIGJ5IG5hbWVzLlxuICogQHByaXZhdGVcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5fbG9hZGVkQ29tcG9uZW50cyA9IG51bGw7XG5cbi8qKlxuICogTG9hZHMgY29tcG9uZW50cyB3aGVuIGl0IGlzIGluIGEgYnJvd3Nlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5Db21wb25lbnRMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLl9sb2FkZWRDb21wb25lbnRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkZWRDb21wb25lbnRzKTtcblx0fVxuXG5cdHRoaXMuX2xvYWRlZENvbXBvbmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGNvbXBvbmVudHMgPSBzZWxmLl9zZXJ2aWNlTG9jYXRvci5yZXNvbHZlQWxsKCdjb21wb25lbnQnKSxcblx0XHRcdFx0Y29tcG9uZW50UHJvbWlzZXMgPSBbXTtcblxuXHRcdFx0Ly8gdGhlIGxpc3QgaXMgYSBzdGFjaywgd2Ugc2hvdWxkIHJldmVyc2UgaXRcblx0XHRcdGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdGNvbXBvbmVudFByb21pc2VzLnVuc2hpZnQoXG5cdFx0XHRcdFx0c2VsZi5fcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChjb21wb25lbnRQcm9taXNlcyk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoY29tcG9uZW50cykge1xuXHRcdFx0Y29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRcdFx0aWYgKCFjb21wb25lbnQgfHwgdHlwZW9mIChjb21wb25lbnQpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLl9sb2FkZWRDb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcblx0XHRcdH0pO1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnYWxsQ29tcG9uZW50c0xvYWRlZCcsIGNvbXBvbmVudHMpO1xuXHRcdFx0cmV0dXJuIHNlbGYuX2xvYWRlZENvbXBvbmVudHM7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFByb2Nlc3NlcyBjb21wb25lbnQgYW5kIGFwcGx5IHJlcXVpcmVkIG9wZXJhdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50RGV0YWlscyBMb2FkZWQgY29tcG9uZW50IGRldGFpbHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb21wb25lbnQgb2JqZWN0LlxuICogQHByaXZhdGVcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5fcHJvY2Vzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnREZXRhaWxzKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRjb21wb25lbnQgPSBPYmplY3QuY3JlYXRlKGNvbXBvbmVudERldGFpbHMpO1xuXG5cdHJldHVybiB0aGlzLl9hcHBseVRyYW5zZm9ybXMoY29tcG9uZW50KVxuXHRcdC50aGVuKGZ1bmN0aW9uICh0cmFuc2Zvcm1lZCkge1xuXHRcdFx0Y29tcG9uZW50ID0gdHJhbnNmb3JtZWQ7XG5cdFx0XHRzZWxmLl90ZW1wbGF0ZVByb3ZpZGVyLnJlZ2lzdGVyQ29tcGlsZWQoXG5cdFx0XHRcdGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQudGVtcGxhdGVTb3VyY2Vcblx0XHRcdCk7XG5cdFx0XHRjb21wb25lbnQudGVtcGxhdGUgPSB7XG5cdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKGRhdGFDb250ZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYuX3RlbXBsYXRlUHJvdmlkZXIucmVuZGVyKFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Lm5hbWUsIGRhdGFDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmICh0eXBlb2YgKGNvbXBvbmVudC5lcnJvclRlbXBsYXRlU291cmNlKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dmFyIGVycm9yVGVtcGxhdGVOYW1lID0gbW9kdWxlSGVscGVyLmdldE5hbWVGb3JFcnJvclRlbXBsYXRlKFxuXHRcdFx0XHRcdGNvbXBvbmVudC5uYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHNlbGYuX3RlbXBsYXRlUHJvdmlkZXIucmVnaXN0ZXJDb21waWxlZChcblx0XHRcdFx0XHRlcnJvclRlbXBsYXRlTmFtZSwgY29tcG9uZW50LmVycm9yVGVtcGxhdGVTb3VyY2Vcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29tcG9uZW50LmVycm9yVGVtcGxhdGUgPSB7XG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YUNvbnRleHQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLl90ZW1wbGF0ZVByb3ZpZGVyLnJlbmRlcihcblx0XHRcdFx0XHRcdFx0ZXJyb3JUZW1wbGF0ZU5hbWUsIGRhdGFDb250ZXh0XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudExvYWRlZCcsIGNvbXBvbmVudCk7XG5cdFx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIG1hcCBvZiBjb21wb25lbnRzIGJ5IG5hbWVzLlxuICogQHJldHVybnMge09iamVjdH0gTWFwIG9mIGNvbXBvbmVudHMgYnkgbmFtZXMuXG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50c0J5TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl9sb2FkZWRDb21wb25lbnRzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JlTG9hZGVyO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0TG9hZGVyQmFzZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9iYXNlL0xvYWRlckJhc2UnKTtcblxudXRpbC5pbmhlcml0cyhTdG9yZUxvYWRlciwgTG9hZGVyQmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBpbnN0YW5jZSBvZiB0aGUgc3RvcmUgbG9hZGVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBzdG9yZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIExvYWRlckJhc2VcbiAqL1xuZnVuY3Rpb24gU3RvcmVMb2FkZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gJHNlcnZpY2VMb2NhdG9yO1xuXHR0aGlzLl9ldmVudEJ1cyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xuXHRMb2FkZXJCYXNlLmNhbGwodGhpcywgJHNlcnZpY2VMb2NhdG9yLnJlc29sdmVBbGwoJ3N0b3JlVHJhbnNmb3JtJykpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuICogQHR5cGUge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlTG9hZGVyLnByb3RvdHlwZS5fZXZlbnRCdXMgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVMb2FkZXIucHJvdG90eXBlLl9zZXJ2aWNlTG9jYXRvciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgbG9hZGVkIHN0b3Jlcy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZUxvYWRlci5wcm90b3R5cGUuX2xvYWRlZFN0b3JlcyA9IG51bGw7XG5cbi8qKlxuICogTG9hZHMgYWxsIHN0b3JlcyB3aGVuIGl0IGlzIGluIGEgYnJvd3Nlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5TdG9yZUxvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuX2xvYWRlZFN0b3Jlcykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZGVkU3RvcmVzKTtcblx0fVxuXG5cdHRoaXMuX2xvYWRlZFN0b3JlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc3RvcmVzID0gc2VsZi5fc2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgnc3RvcmUnKSxcblx0XHRcdFx0c3RvcmVQcm9taXNlcyA9IFtdO1xuXG5cdFx0XHQvLyB0aGUgbGlzdCBpcyBhIHN0YWNrLCB3ZSBzaG91bGQgcmV2ZXJzZSBpdFxuXHRcdFx0c3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG5cdFx0XHRcdHN0b3JlUHJvbWlzZXMudW5zaGlmdChcblx0XHRcdFx0XHRzZWxmLl9nZXRTdG9yZShzdG9yZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoc3RvcmVQcm9taXNlcyk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoc3RvcmVzKSB7XG5cdFx0XHRzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcblx0XHRcdFx0aWYgKCFzdG9yZSB8fCB0eXBlb2YgKHN0b3JlKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5fbG9hZGVkU3RvcmVzW3N0b3JlLm5hbWVdID0gc3RvcmU7XG5cdFx0XHR9KTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2FsbFN0b3Jlc0xvYWRlZCcsIHNlbGYuX2xvYWRlZFN0b3Jlcyk7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX2xvYWRlZFN0b3Jlcyk7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIHN0b3JlIGZyb20gc3RvcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdG9yZURldGFpbHMgU3RvcmUgZGV0YWlscy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHN0b3JlLlxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVMb2FkZXIucHJvdG90eXBlLl9nZXRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZURldGFpbHMpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gdGhpcy5fYXBwbHlUcmFuc2Zvcm1zKHN0b3JlRGV0YWlscylcblx0XHQudGhlbihmdW5jdGlvbiAodHJhbnNmb3JtZWQpIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ3N0b3JlTG9hZGVkJywgdHJhbnNmb3JtZWQpO1xuXHRcdFx0cmV0dXJuIHRyYW5zZm9ybWVkO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHN0b3JlcyBtYXAgYnkgbmFtZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBNYXAgb2Ygc3RvcmVzIGJ5IG5hbWVzLlxuICovXG5TdG9yZUxvYWRlci5wcm90b3R5cGUuZ2V0U3RvcmVzQnlOYW1lcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX2xvYWRlZFN0b3JlcyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVBcGlQcm92aWRlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdHByb3BlcnR5SGVscGVyID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcnMvcHJvcGVydHlIZWxwZXInKSxcblx0TW9kdWxlQXBpUHJvdmlkZXJCYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL2Jhc2UvTW9kdWxlQXBpUHJvdmlkZXJCYXNlJyk7XG5cbnV0aWwuaW5oZXJpdHMoTW9kdWxlQXBpUHJvdmlkZXIsIE1vZHVsZUFwaVByb3ZpZGVyQmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIG1vZHVsZSBBUEkgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgU2VydmljZSBsb2NhdG9yXG4gKiB0byByZXNvbHZlIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgTW9kdWxlQXBpUHJvdmlkZXJCYXNlXG4gKi9cbmZ1bmN0aW9uIE1vZHVsZUFwaVByb3ZpZGVyKCRzZXJ2aWNlTG9jYXRvcikge1xuXHRNb2R1bGVBcGlQcm92aWRlckJhc2UuY2FsbCh0aGlzLCAkc2VydmljZUxvY2F0b3IpO1xuXHRwcm9wZXJ0eUhlbHBlci5kZWZpbmVSZWFkT25seSh0aGlzLCAnaXNCcm93c2VyJywgdHJ1ZSk7XG5cdHByb3BlcnR5SGVscGVyLmRlZmluZVJlYWRPbmx5KHRoaXMsICdpc1NlcnZlcicsIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBSZWxvYWRzIHRoZSBwYWdlIGZvciBoYW5kbGluZyBcIm5vdCBmb3VuZFwiIGVycm9yLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyLnByb3RvdHlwZS5ub3RGb3VuZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHdpbmRvdyA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKTtcblx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG4vKipcbiAqIFJlZGlyZWN0cyBjdXJyZW50IHBhZ2UgdG8gc3BlY2lmaWVkIFVSSS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmlTdHJpbmcgVVJJIHRvIHJlZGlyZWN0LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uICh1cmlTdHJpbmcpIHtcblx0dmFyIHJlcXVlc3RSb3V0ZXIgPSB0aGlzLmxvY2F0b3IucmVzb2x2ZSgncmVxdWVzdFJvdXRlcicpO1xuXHRyZXR1cm4gcmVxdWVzdFJvdXRlci5nbyh1cmlTdHJpbmcpO1xufTtcblxuLyoqXG4gKiBDbGVhcnMgY3VycmVudCBsb2NhdGlvbiBVUkkncyBmcmFnbWVudC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5Nb2R1bGVBcGlQcm92aWRlci5wcm90b3R5cGUuY2xlYXJGcmFnbWVudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHdpbmRvdyA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKSxcblx0XHRwb3NpdGlvbiA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcblx0d2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gcG9zaXRpb247XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvQm9vdHN0cmFwcGVyJyk7XG4iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0RmFjdG9yeTtcblxudmFyIHByb3BlcnR5SGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Byb3BlcnR5SGVscGVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbnRleHQgZmFjdG9yeS5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9ICRzZXJ2aWNlTG9jYXRvciBMb2NhdG9yIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvbnRleHRGYWN0b3J5KCRzZXJ2aWNlTG9jYXRvcikge1xuXHR0aGlzLl9zZXJ2aWNlTG9jYXRvciA9ICRzZXJ2aWNlTG9jYXRvcjtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnRleHRGYWN0b3J5LnByb3RvdHlwZS5fc2VydmljZUxvY2F0b3IgPSBudWxsO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGNvbnRleHQgZm9yIG1vZHVsZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge1VSSX0gYWRkaXRpb25hbC5yZWZlcnJlciBDdXJyZW50IHJlZmVycmVyLlxuICogQHBhcmFtIHtVUkl9IGFkZGl0aW9uYWwubG9jYXRpb24gQ3VycmVudCBsb2NhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhZGRpdGlvbmFsLnVzZXJBZ2VudCBDdXJyZW50IHVzZXIgYWdlbnQuXG4gKi9cbkNvbnRleHRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoYWRkaXRpb25hbCkge1xuXHR2YXIgYXBpUHJvdmlkZXIgPSB0aGlzLl9zZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdtb2R1bGVBcGlQcm92aWRlcicpLFxuXHRcdGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKGFwaVByb3ZpZGVyKTtcblx0T2JqZWN0LmtleXMoYWRkaXRpb25hbClcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRwcm9wZXJ0eUhlbHBlci5kZWZpbmVSZWFkT25seShjb250ZXh0LCBrZXksIGFkZGl0aW9uYWxba2V5XSk7XG5cdFx0fSk7XG5cdHJldHVybiBjb250ZXh0O1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXJpYWxXcmFwcGVyO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbnZhciBFUlJPUl9OT19TVUNIX01FVEhPRCA9ICdUaGVyZSBpcyBubyBzdWNoIHJlZ2lzdGVyZWQgbWV0aG9kJztcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgc2VyaWFsIHdyYXBwZXIgZm9yIHByb21pc2VzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNlcmlhbFdyYXBwZXIoKSB7XG5cdHRoaXMuX2VtaXR0ZXIgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuXHR0aGlzLl9lbWl0dGVyLnNldE1heExpc3RlbmVycygwKTtcblx0dGhpcy5fdG9JbnZva2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9pblByb2dyZXNzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IGV2ZW50IGVtaXR0ZXIuXG4gKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuU2VyaWFsV3JhcHBlci5wcm90b3R5cGUuX2VtaXR0ZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2V0IG9mIG5hbWVkIG1ldGhvZHMgdG8gaW52b2tlLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblNlcmlhbFdyYXBwZXIucHJvdG90eXBlLl90b0ludm9rZSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgZmxhZ3MgaWYgdGhlIG1ldGhvZCBpcyBpbiBwcm9ncmVzcy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5TZXJpYWxXcmFwcGVyLnByb3RvdHlwZS5faW5Qcm9ncmVzcyA9IG51bGw7XG5cbi8qKlxuICogQWRkcyBtZXRob2QgdG8gdGhlIHNldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE1ldGhvZCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdG9JbnZva2UgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHByb21pc2UuXG4gKi9cblNlcmlhbFdyYXBwZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCB0b0ludm9rZSkge1xuXHR0aGlzLl90b0ludm9rZVtuYW1lXSA9IHRvSW52b2tlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgbWV0aG9kIHdpdGggc3VjaCBuYW1lIHdhcyByZWdpc3RlcmVkIHRvIHRoZSBzZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIG1ldGhvZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIG1ldGhvZCBuYW1lIGlzIHJlZ2lzdGVyZWQuXG4gKi9cblNlcmlhbFdyYXBwZXIucHJvdG90eXBlLmlzUmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiB0eXBlb2YgKHRoaXMuX3RvSW52b2tlW25hbWVdKSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbi8qKlxuICogSW52b2tlcyBtZXRob2Qgd2l0aG91dCBjb25jdXJyZW5jeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE1ldGhvZCBuYW1lLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0LlxuICovXG5TZXJpYWxXcmFwcGVyLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAobmFtZSkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0aWYgKCF0aGlzLmlzUmVnaXN0ZXJlZChuYW1lKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfTk9fU1VDSF9NRVRIT0QpKTtcblx0fVxuXG5cdGlmICh0aGlzLl9pblByb2dyZXNzW25hbWVdKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcblx0XHRcdHNlbGYuX2VtaXR0ZXIub25jZShuYW1lLCBmdWxmaWxsKTtcblx0XHRcdHNlbGYuX2VtaXR0ZXIub25jZShuYW1lICsgJy0tZXJyb3InLCByZWplY3QpO1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5faW5Qcm9ncmVzc1tuYW1lXSA9IHRydWU7XG5cdHRoaXMuX3RvSW52b2tlW25hbWVdKClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRzZWxmLl9lbWl0dGVyLmVtaXQobmFtZSwgcmVzdWx0KTtcblx0XHRcdHNlbGYuX2luUHJvZ3Jlc3NbbmFtZV0gPSBudWxsO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2VtaXR0ZXIuZW1pdChuYW1lICsgJy0tZXJyb3InLCByZWFzb24pO1xuXHRcdFx0c2VsZi5faW5Qcm9ncmVzc1tuYW1lXSA9IG51bGw7XG5cdFx0fSk7XG5cblx0cmV0dXJuIHRoaXMuaW52b2tlKG5hbWUpO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdG9yZURpc3BhdGNoZXI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRTZXJpYWxXcmFwcGVyID0gcmVxdWlyZSgnLi9TZXJpYWxXcmFwcGVyJyksXG5cdG1vZHVsZUhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2R1bGVIZWxwZXInKTtcblxudmFyIEVSUk9SX1NUT1JFX05PVF9GT1VORCA9ICdTdG9yZSBcIiVzXCIgbm90IGZvdW5kJyxcblx0RVJST1JfU1RBVEUgPSAnU3RhdGUgc2hvdWxkIGJlIHNldCBiZWZvcmUgYW55IHJlcXVlc3QnLFxuXHRERUZBVUxUX0xJRkVUSU1FID0gNjAwMDA7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2Ygc3RvcmUgZGlzcGF0Y2hlci5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9ICRzZXJ2aWNlTG9jYXRvciBMb2NhdG9yIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzLlxuICogQHBhcmFtIHtTdG9yZUxvYWRlcn0gJHN0b3JlTG9hZGVyIFN0b3JlIGxvYWRlciB0byBsb2FkIHN0b3Jlcy5cbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSAkZXZlbnRCdXMgRXZlbnQgYnVzIHRvIGVtaXQgZXZlbnRzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFN0b3JlRGlzcGF0Y2hlcigkc2VydmljZUxvY2F0b3IsICRzdG9yZUxvYWRlciwgJGV2ZW50QnVzKSB7XG5cdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gJHNlcnZpY2VMb2NhdG9yO1xuXHR0aGlzLl9zdG9yZUxvYWRlciA9ICRzdG9yZUxvYWRlcjtcblx0dGhpcy5fZXZlbnRCdXMgPSAkZXZlbnRCdXM7XG5cdHRoaXMuX3N0b3JlSW5zdGFuY2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dGhpcy5fbGFzdERhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9kZXBlbmRhbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dGhpcy5fc2VyaWFsV3JhcHBlciA9IG5ldyBTZXJpYWxXcmFwcGVyKCk7XG59XG5cbi8qKlxuICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9zZXJ2aWNlTG9jYXRvciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBldmVudCBidXMuXG4gKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fZXZlbnRCdXMgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc3RvcmUgbG9hZGVyLlxuICogQHR5cGUge1N0b3JlTG9hZGVyfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fc3RvcmVMb2FkZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbWFwIG9mIGFsbCBzdG9yZSBpbnN0YW5jZXMuXG4gKiBAdHlwZSB7bnVsbH1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX3N0b3JlSW5zdGFuY2VzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IG1hcCBvZiBsYXN0IGRhdGEgZm9yIGVhY2ggc3RvcmUuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fbGFzdERhdGEgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbWFwIG9mIGxhc3Qgc3RhdGUgb2Ygc3RvcmUgZGlzcGF0Y2hlci5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9sYXN0U3RhdGUgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2VyaWFsIHdyYXBwZXIuXG4gKiBAdHlwZSB7U2VyaWFsV3JhcHBlcn1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX3NlcmlhbFdyYXBwZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgYmFzaWMgY29udGV4dCBmb3IgYWxsIHN0b3JlIGNvbnRleHRzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX2N1cnJlbnRCYXNpY0NvbnRleHQgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2V0IG9mIHN0b3JlIGRlcGVuZGVuY3kgZ3JhcGguXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fZGVwZW5kYW50cyA9IG51bGw7XG5cbi8qKlxuICogR2V0cyBzdG9yZSBkYXRhIGFuZCBjcmVhdGVzIHN0b3JlIGluc3RhbmNlIGlmIHJlcXVpcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZSBOYW1lIG9mIHN0b3JlLlxuICogQHJldHVybnMge09iamVjdH0gU3RvcmUncyBkYXRhLlxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLmdldFN0b3JlRGF0YSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0aWYgKCF0aGlzLl9sYXN0U3RhdGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX1NUQVRFKSk7XG5cdH1cblx0aWYgKHR5cGVvZiAoc3RvcmVOYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuXHR9XG5cdGlmIChzdG9yZU5hbWUgaW4gdGhpcy5fbGFzdERhdGEpIHtcblx0XHR2YXIgZXhpc3RUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3REYXRhW3N0b3JlTmFtZV0uY3JlYXRlZEF0O1xuXHRcdGlmIChleGlzdFRpbWUgPD0gdGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXS5saWZldGltZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sYXN0RGF0YVtzdG9yZU5hbWVdLmRhdGEpO1xuXHRcdH1cblx0XHRkZWxldGUgdGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXTtcblx0fVxuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0bGlmZXRpbWUgPSBERUZBVUxUX0xJRkVUSU1FO1xuXHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdzdG9yZURhdGFMb2FkJywge1xuXHRcdG5hbWU6IHN0b3JlTmFtZVxuXHR9KTtcblx0dmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZShzdG9yZU5hbWUpO1xuXHRpZiAoIXN0b3JlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcblx0XHRcdFx0dXRpbC5mb3JtYXQoRVJST1JfU1RPUkVfTk9UX0ZPVU5ELCBzdG9yZU5hbWUpKVxuXHRcdCk7XG5cdH1cblx0aWYgKHR5cGVvZiAoc3RvcmUuJGxpZmV0aW1lKSA9PT0gJ251bWJlcicpIHtcblx0XHRsaWZldGltZSA9IHN0b3JlLiRsaWZldGltZTtcblx0fVxuXHRyZXR1cm4gc2VsZi5fc2VyaWFsV3JhcHBlci5pbnZva2Uoc3RvcmVOYW1lKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRzZWxmLl9sYXN0RGF0YVtzdG9yZU5hbWVdID0ge1xuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRsaWZldGltZTogbGlmZXRpbWUsXG5cdFx0XHRcdGNyZWF0ZWRBdDogRGF0ZS5ub3coKVxuXHRcdFx0fTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ3N0b3JlRGF0YUxvYWRlZCcsIHtcblx0XHRcdFx0bmFtZTogc3RvcmVOYW1lLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRsaWZldGltZTogbGlmZXRpbWVcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFNlbmRzIGFjdGlvbiB0byBzcGVjaWZpZWQgc3RvcmUgYW5kIHJlc29sdmVzIHByb21pc2VzIGluIHNlcmlhbCBtb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25OYW1lIE5hbWUgb2YgdGhlIGFjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIEFjdGlvbiBhcmd1bWVudHMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn0gUHJvbWlzZSBmb3IgYWN0aW9uIGhhbmRsaW5nIHJlc3VsdC5cbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5zZW5kQWN0aW9uID0gZnVuY3Rpb24gKHN0b3JlTmFtZSwgYWN0aW9uTmFtZSwgYXJncykge1xuXHRpZiAoIXRoaXMuX2xhc3RTdGF0ZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfU1RBVEUpKTtcblx0fVxuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0YWN0aW9uRGV0YWlscyA9IHtcblx0XHRcdHN0b3JlTmFtZTogc3RvcmVOYW1lLFxuXHRcdFx0YWN0aW9uTmFtZTogYWN0aW9uTmFtZSxcblx0XHRcdGFyZ3M6IGFyZ3Ncblx0XHR9O1xuXHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdhY3Rpb25TZW5kJywgYWN0aW9uRGV0YWlscyk7XG5cdHZhciBzdG9yZSA9IHRoaXMuZ2V0U3RvcmUoc3RvcmVOYW1lKTtcblx0aWYgKCFzdG9yZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXG5cdFx0XHR1dGlsLmZvcm1hdChFUlJPUl9TVE9SRV9OT1RfRk9VTkQsIHN0b3JlTmFtZSkpXG5cdFx0KTtcblx0fVxuXHR2YXIgaGFuZGxlTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKFxuXHRcdHN0b3JlLCAnaGFuZGxlJywgYWN0aW9uTmFtZVxuXHQpO1xuXHRyZXR1cm4gbW9kdWxlSGVscGVyLmdldFNhZmVQcm9taXNlKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gaGFuZGxlTWV0aG9kKGFyZ3MpO1xuXHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2FjdGlvblNlbnQnLCBhY3Rpb25EZXRhaWxzKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFNlbmRzIGFjdGlvbiB0byBldmVyeSBzdG9yZSB0aGF0IGhhcyBoYW5kbGUgbWV0aG9kIGZvciBzdWNoIGFjdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25OYW1lIE5hbWUgb2YgdGhlIGFjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmcgQWN0aW9uIGFyZ3VtZW50cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PCo+Pn0gUHJvbWlzZSBmb3IgdGhlIGFjdGlvbiBoYW5kbGluZyByZXN1bHQuXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuc2VuZEJyb2FkY2FzdEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25OYW1lLCBhcmcpIHtcblx0dmFyIHByb21pc2VzID0gW10sXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0c3RvcmVzQnlOYW1lcyA9IHRoaXMuX3N0b3JlTG9hZGVyLmdldFN0b3Jlc0J5TmFtZXMoKSxcblx0XHRtZXRob2ROYW1lID0gbW9kdWxlSGVscGVyLmdldENhbWVsQ2FzZU5hbWUoJ2hhbmRsZScsIGFjdGlvbk5hbWUpO1xuXHRPYmplY3Qua2V5cyhzdG9yZXNCeU5hbWVzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdHZhciBzdG9yZSA9IHN0b3Jlc0J5TmFtZXNbc3RvcmVOYW1lXSxcblx0XHRcdFx0cHJvdG9NZXRob2QgPSBzdG9yZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cdFx0XHRpZiAodHlwZW9mIChwcm90b01ldGhvZCkgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHNlbmRBY3Rpb25Qcm9taXNlID0gc2VsZi5zZW5kQWN0aW9uKFxuXHRcdFx0XHRzdG9yZS5uYW1lLCBhY3Rpb25OYW1lLCBhcmdcblx0XHRcdCk7XG5cdFx0XHRwcm9taXNlcy5wdXNoKHNlbmRBY3Rpb25Qcm9taXNlKTtcblx0XHR9KTtcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbi8qKlxuICogU2V0cyBuZXcgc3RhdGUgdG8gc3RvcmUgZGlzcGF0Y2hlciBhbmQgaW52b2tlcyBcImNoYW5nZWRcIiBtZXRob2QgZm9yIGFsbFxuICogc3RvcmVzIHdoaWNoIHN0YXRlIGhhdmUgYmVlbiBjaGFuZ2VkLlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgTWFwIG9mIG5ldyBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3R9IGJhc2ljQ29udGV4dCBCYXNpYyBjb250ZXh0IGZvciBhbGwgc3RvcmVzLlxuICogQHJldHVybnMge0FycmF5PHN0cmluZz59IE5hbWVzIG9mIHN0b3JlcyB0aGF0IGhhdmUgYmVlbiBjaGFuZ2VkLlxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMsIGJhc2ljQ29udGV4dCkge1xuXHRwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRpZiAoIXRoaXMuX2xhc3RTdGF0ZSkge1xuXHRcdHRoaXMuX2N1cnJlbnRCYXNpY0NvbnRleHQgPSBiYXNpY0NvbnRleHQ7XG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gcGFyYW1ldGVycztcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBzb21lIHN0b3JlJ3MgcGFyYW1ldGVycyBjYW4gYmUgcmVtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGNoYW5nZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdE9iamVjdC5rZXlzKHRoaXMuX2xhc3RTdGF0ZSlcblx0XHQuZmlsdGVyKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdHJldHVybiAhKHN0b3JlTmFtZSBpbiBwYXJhbWV0ZXJzKTtcblx0XHR9KVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRjaGFuZ2VkW25hbWVdID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdC8vIG5ldyBwYXJhbWV0ZXJzIHdlcmUgc2V0IGZvciBzdG9yZVxuXHRcdFx0aWYgKCEoc3RvcmVOYW1lIGluIHNlbGYuX2xhc3RTdGF0ZSkpIHtcblx0XHRcdFx0Y2hhbmdlZFtzdG9yZU5hbWVdID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBuZXcgYW5kIGxhc3QgcGFyYW1ldGVycyBoYXMgZGlmZmVyZW50IHZhbHVlc1xuXHRcdFx0dmFyIGxhc3RQYXJhbWV0ZXJOYW1lcyA9XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoc2VsZi5fbGFzdFN0YXRlW3N0b3JlTmFtZV0pLFxuXHRcdFx0XHRjdXJyZW50UGFyYW1ldGVyTmFtZXMgPVxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKHBhcmFtZXRlcnNbc3RvcmVOYW1lXSk7XG5cblx0XHRcdGlmIChjdXJyZW50UGFyYW1ldGVyTmFtZXMubGVuZ3RoICE9PVxuXHRcdFx0XHRsYXN0UGFyYW1ldGVyTmFtZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNoYW5nZWRbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudFBhcmFtZXRlck5hbWVzLmV2ZXJ5KGZ1bmN0aW9uIChwYXJhbWV0ZXJOYW1lKSB7XG5cdFx0XHRcdGlmIChwYXJhbWV0ZXJzW3N0b3JlTmFtZV1bcGFyYW1ldGVyTmFtZV0gIT09XG5cdFx0XHRcdFx0c2VsZi5fbGFzdFN0YXRlW3N0b3JlTmFtZV1bcGFyYW1ldGVyTmFtZV0pIHtcblx0XHRcdFx0XHRjaGFuZ2VkW3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdHRoaXMuX2xhc3RTdGF0ZSA9IHBhcmFtZXRlcnM7XG5cdGlmICh0aGlzLl9jdXJyZW50QmFzaWNDb250ZXh0ICE9PSBiYXNpY0NvbnRleHQpIHtcblx0XHR0aGlzLl9jdXJyZW50QmFzaWNDb250ZXh0ID0gYmFzaWNDb250ZXh0O1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuX3N0b3JlSW5zdGFuY2VzKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0XHRzZWxmLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdLiRjb250ZXh0ID1cblx0XHRcdFx0XHRzZWxmLl9nZXRTdG9yZUNvbnRleHQoc3RvcmVOYW1lKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dmFyIGNoYW5nZWRTdG9yZU5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0T2JqZWN0LmtleXMoY2hhbmdlZClcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHR2YXIgc3RvcmUgPSBzZWxmLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdFx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHN0b3JlLiRjb250ZXh0LmNoYW5nZWQoKVxuXHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0XHRcdGNoYW5nZWRTdG9yZU5hbWVzW25hbWVdID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnc3RhdGVDaGFuZ2VkJywge1xuXHRcdG9sZFN0YXRlOiB0aGlzLl9sYXN0U3RhdGUsXG5cdFx0bmV3U3RhdGU6IHBhcmFtZXRlcnNcblx0fSk7XG5cdHJldHVybiBPYmplY3Qua2V5cyhjaGFuZ2VkU3RvcmVOYW1lcyk7XG59O1xuXG4vKipcbiAqIEdldHMgY29udGV4dCBmb3Igc3RvcmUgdXNpbmcgY29tcG9uZW50J3MgY29udGV4dCBhcyBhIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWUgTmFtZSBvZiBzdG9yZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFN0b3JlIGNvbnRleHQuXG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9nZXRTdG9yZUNvbnRleHQgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRzdG9yZUNvbnRleHQgPSBPYmplY3QuY3JlYXRlKHRoaXMuX2N1cnJlbnRCYXNpY0NvbnRleHQpO1xuXHRzdG9yZUNvbnRleHQubmFtZSA9IHN0b3JlTmFtZTtcblx0c3RvcmVDb250ZXh0LnN0YXRlID0gdGhpcy5fbGFzdFN0YXRlW3N0b3JlTmFtZV0gfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0c3RvcmVDb250ZXh0LmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHdhbGtlZCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0XHRjdXJyZW50LFxuXHRcdFx0dG9DaGFuZ2UgPSBbc3RvcmVOYW1lXTtcblxuXHRcdHdoaWxlICh0b0NoYW5nZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjdXJyZW50ID0gdG9DaGFuZ2Uuc2hpZnQoKTtcblx0XHRcdGlmIChjdXJyZW50IGluIHdhbGtlZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHdhbGtlZFtjdXJyZW50XSA9IHRydWU7XG5cdFx0XHRpZiAoY3VycmVudCBpbiBzZWxmLl9kZXBlbmRhbnRzKSB7XG5cdFx0XHRcdHRvQ2hhbmdlID0gdG9DaGFuZ2UuY29uY2F0KFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKHNlbGYuX2RlcGVuZGFudHNbY3VycmVudF0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc2VsZi5fbGFzdERhdGFbY3VycmVudF07XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdzdG9yZUNoYW5nZWQnLCBjdXJyZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHdhbGtlZCk7XG5cdH07XG5cdHN0b3JlQ29udGV4dC5nZXRTdG9yZURhdGEgPSBmdW5jdGlvbiAoc291cmNlU3RvcmVOYW1lKSB7XG5cdFx0aWYgKHNvdXJjZVN0b3JlTmFtZSA9PT0gc3RvcmVOYW1lKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2VsZi5nZXRTdG9yZURhdGEoc291cmNlU3RvcmVOYW1lKTtcblx0fTtcblx0c3RvcmVDb250ZXh0LnNldERlcGVuZGVuY3kgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGlmICghKG5hbWUgaW4gc2VsZi5fZGVwZW5kYW50cykpIHtcblx0XHRcdHNlbGYuX2RlcGVuZGFudHNbbmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdH1cblx0XHRzZWxmLl9kZXBlbmRhbnRzW25hbWVdW3N0b3JlTmFtZV0gPSB0cnVlO1xuXHR9O1xuXHRzdG9yZUNvbnRleHQudW5zZXREZXBlbmRlbmN5ID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRpZiAoIShuYW1lIGluIHNlbGYuX2RlcGVuZGFudHMpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRlbGV0ZSBzZWxmLl9kZXBlbmRhbnRzW25hbWVdW3N0b3JlTmFtZV07XG5cdH07XG5cdHN0b3JlQ29udGV4dC5zZW5kQWN0aW9uID0gZnVuY3Rpb24gKHN0b3JlTmFtZSwgbmFtZSwgYXJncykge1xuXHRcdHJldHVybiBzZWxmLnNlbmRBY3Rpb24oc3RvcmVOYW1lLCBuYW1lLCBhcmdzKTtcblx0fTtcblx0c3RvcmVDb250ZXh0LnNlbmRCcm9hZGNhc3RBY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuXHRcdHJldHVybiBzZWxmLnNlbmRCcm9hZGNhc3RBY3Rpb24obmFtZSwgYXJncyk7XG5cdH07XG5cblx0cmV0dXJuIHN0b3JlQ29udGV4dDtcbn07XG5cbi8qKlxuICogR2V0cyBzdG9yZSBpbnN0YW5jZSBhbmQgY3JlYXRlcyBpdCBpZiByZXF1aXJlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWUgTmFtZSBvZiBzdG9yZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHN0b3JlLlxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLmdldFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRpZiAoIXN0b3JlTmFtZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBzdG9yZSA9IHRoaXMuX3N0b3JlSW5zdGFuY2VzW3N0b3JlTmFtZV07XG5cdGlmIChzdG9yZSkge1xuXHRcdHJldHVybiBzdG9yZTtcblx0fVxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0dmFyIHN0b3JlcyA9IHNlbGYuX3N0b3JlTG9hZGVyLmdldFN0b3Jlc0J5TmFtZXMoKSxcblx0XHRjb25maWcgPSBzZWxmLl9zZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb25maWcnKTtcblx0aWYgKCEoc3RvcmVOYW1lIGluIHN0b3JlcykpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBjb25zdHJ1Y3RvciA9IHN0b3Jlc1tzdG9yZU5hbWVdLmNvbnN0cnVjdG9yO1xuXHRjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQgPSBzZWxmLl9nZXRTdG9yZUNvbnRleHQoc3RvcmVOYW1lKTtcblx0c2VsZi5fc3RvcmVJbnN0YW5jZXNbc3RvcmVOYW1lXSA9IHNlbGYuX3NlcnZpY2VMb2NhdG9yXG5cdFx0LnJlc29sdmVJbnN0YW5jZShjb25zdHJ1Y3RvciwgY29uZmlnKTtcblx0c2VsZi5fc3RvcmVJbnN0YW5jZXNbc3RvcmVOYW1lXS4kY29udGV4dCA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kY29udGV4dDtcblxuXHRzZWxmLl9zZXJpYWxXcmFwcGVyLmFkZChzdG9yZU5hbWUsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgbG9hZE1ldGhvZCA9IG1vZHVsZUhlbHBlci5nZXRNZXRob2RUb0ludm9rZShcblx0XHRcdHNlbGYuX3N0b3JlSW5zdGFuY2VzW3N0b3JlTmFtZV0sICdsb2FkJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZShsb2FkTWV0aG9kKTtcblx0fSk7XG5cdHJldHVybiBzZWxmLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBCb290c3RyYXBwZXJCYXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0bW9kdWxlSGVscGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9tb2R1bGVIZWxwZXInKSxcblx0aHJUaW1lSGVscGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9oclRpbWVIZWxwZXInKSxcblx0dWhyID0gcmVxdWlyZSgnY2F0YmVycnktdWhyJyksXG5cdFByb21pc2UgPSByZXF1aXJlKCdwcm9taXNlJyksXG5cdFN0YXRlUHJvdmlkZXIgPSByZXF1aXJlKCcuLi9wcm92aWRlcnMvU3RhdGVQcm92aWRlcicpLFxuXHRTdG9yZUxvYWRlciA9IHJlcXVpcmUoJy4uL2xvYWRlcnMvU3RvcmVMb2FkZXInKSxcblx0Q29tcG9uZW50TG9hZGVyID0gcmVxdWlyZSgnLi4vbG9hZGVycy9Db21wb25lbnRMb2FkZXInKSxcblx0RG9jdW1lbnRSZW5kZXJlciA9IHJlcXVpcmUoJy4uL0RvY3VtZW50UmVuZGVyZXInKSxcblx0UmVxdWVzdFJvdXRlciA9IHJlcXVpcmUoJy4uL1JlcXVlc3RSb3V0ZXInKSxcblx0TW9kdWxlQXBpUHJvdmlkZXJCYXNlID0gcmVxdWlyZSgnLi4vYmFzZS9Nb2R1bGVBcGlQcm92aWRlckJhc2UnKSxcblx0Q29udGV4dEZhY3RvcnkgPSByZXF1aXJlKCcuLi9Db250ZXh0RmFjdG9yeScpLFxuXHRFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbnZhciBJTkZPX0NPTVBPTkVOVF9MT0FERUQgPSAnQ29tcG9uZW50IFwiJXNcIiBsb2FkZWQnLFxuXHRJTkZPX1NUT1JFX0xPQURFRCA9ICdTdG9yZSBcIiVzXCIgbG9hZGVkJyxcblx0SU5GT19BTExfU1RPUkVTX0xPQURFRCA9ICdBbGwgc3RvcmVzIGxvYWRlZCcsXG5cdElORk9fQUxMX0NPTVBPTkVOVFNfTE9BREVEID0gJ0FsbCBjb21wb25lbnRzIGxvYWRlZCcsXG5cdERFQlVHX0RPQ1VNRU5UX1JFTkRFUkVEID0gJ0RvY3VtZW50IHJlbmRlcmVkIGZvciBVUkkgJXMnLFxuXHRERUJVR19SRU5ERVJfQ09NUE9ORU5UID0gJ0NvbXBvbmVudCBcIiVzJXNcIiBpcyBiZWluZyByZW5kZXJlZC4uLicsXG5cdERFQlVHX0NPTVBPTkVOVF9SRU5ERVJFRCA9ICdDb21wb25lbnQgXCIlcyVzXCIgcmVuZGVyZWQlcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgYmFzZSBDYXRiZXJyeSBib290c3RyYXBwZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYXRiZXJyeUNvbnN0cnVjdG9yIENvbnN0cnVjdG9yXG4gKiBvZiB0aGUgQ2F0YmVycnkncyBtYWluIG1vZHVsZS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCb290c3RyYXBwZXJCYXNlKGNhdGJlcnJ5Q29uc3RydWN0b3IpIHtcblx0dGhpcy5fY2F0YmVycnlDb25zdHJ1Y3RvciA9IGNhdGJlcnJ5Q29uc3RydWN0b3I7XG59XG5cbi8qKlxuICogQ3VycmVudCBjb25zdHJ1Y3RvciBvZiB0aGUgQ2F0YmVycnkncyBtYWluIG1vZHVsZS5cbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbkJvb3RzdHJhcHBlckJhc2UucHJvdG90eXBlLl9jYXRiZXJyeUNvbnN0cnVjdG9yID0gbnVsbDtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBmdWxsLWNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIENhdGJlcnJ5IGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtPYmplY3Q/fSBjb25maWdPYmplY3QgQ29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcmV0dXJucyB7Q2F0YmVycnl9IENhdGJlcnJ5IGFwcGxpY2F0aW9uIGluc3RhbmNlLlxuICovXG5Cb290c3RyYXBwZXJCYXNlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnT2JqZWN0KSB7XG5cdHZhciBjdXJyZW50Q29uZmlnID0gY29uZmlnT2JqZWN0IHx8IHt9LFxuXHRcdGNhdGJlcnJ5ID0gbmV3IHRoaXMuX2NhdGJlcnJ5Q29uc3RydWN0b3IoKTtcblxuXHR0aGlzLmNvbmZpZ3VyZShjdXJyZW50Q29uZmlnLCBjYXRiZXJyeS5sb2NhdG9yKTtcblx0Y2F0YmVycnkuZXZlbnRzID0gY2F0YmVycnkubG9jYXRvci5yZXNvbHZlSW5zdGFuY2UoTW9kdWxlQXBpUHJvdmlkZXJCYXNlKTtcblx0cmV0dXJuIGNhdGJlcnJ5O1xufTtcblxuLyoqXG4gKiBDb25maWd1cmVzIGxvY2F0b3Igd2l0aCBhbGwgcmVxdWlyZWQgdHlwZSByZWdpc3RyYXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ09iamVjdCBDb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgU2VydmljZSBsb2NhdG9yIHRvIGNvbmZpZ3VyZS5cbiAqL1xuQm9vdHN0cmFwcGVyQmFzZS5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKGNvbmZpZ09iamVjdCwgbG9jYXRvcikge1xuXHR2YXIgZXZlbnRCdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGV2ZW50QnVzLnNldE1heExpc3RlbmVycygwKTtcblx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdwcm9taXNlJywgUHJvbWlzZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnZXZlbnRCdXMnLCBldmVudEJ1cyk7XG5cdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnY29uZmlnJywgY29uZmlnT2JqZWN0KTtcblx0bG9jYXRvci5yZWdpc3Rlcignc3RhdGVQcm92aWRlcicsIFN0YXRlUHJvdmlkZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXIoJ2NvbnRleHRGYWN0b3J5JywgQ29udGV4dEZhY3RvcnksIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXIoJ3N0b3JlTG9hZGVyJywgU3RvcmVMb2FkZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXIoJ2NvbXBvbmVudExvYWRlcicsIENvbXBvbmVudExvYWRlciwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblx0bG9jYXRvci5yZWdpc3RlcignZG9jdW1lbnRSZW5kZXJlcicsIERvY3VtZW50UmVuZGVyZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cdGxvY2F0b3IucmVnaXN0ZXIoJ3JlcXVlc3RSb3V0ZXInLCBSZXF1ZXN0Um91dGVyLCBjb25maWdPYmplY3QsIHRydWUpO1xuXG5cdHVoci5yZWdpc3Rlcihsb2NhdG9yKTtcbn07XG5cbi8qKlxuICogV3JhcHMgZXZlbnQgYnVzIHdpdGggbG9nIG1lc3NhZ2VzLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBBcHBsaWNhdGlvbiBjb25maWcuXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZXZlbnRCdXMgRXZlbnQgZW1pdHRlciB0aGF0IGltcGxlbWVudHMgZXZlbnQgYnVzLlxuICogQHBhcmFtIHtMb2dnZXJ9IGxvZ2dlciBMb2dnZXIgdG8gd3JpdGUgbWVzc2FnZXMuXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkJvb3RzdHJhcHBlckJhc2UucHJvdG90eXBlLl93cmFwRXZlbnRzV2l0aExvZ2dlciA9XG5cdGZ1bmN0aW9uIChjb25maWcsIGV2ZW50QnVzLCBsb2dnZXIpIHtcblx0XHR2YXIgaXNSZWxlYXNlID0gQm9vbGVhbihjb25maWcuaXNSZWxlYXNlKTtcblx0XHRldmVudEJ1c1xuXHRcdFx0Lm9uKCdjb21wb25lbnRMb2FkZWQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuaW5mbyh1dGlsLmZvcm1hdChJTkZPX0NPTVBPTkVOVF9MT0FERUQsIGFyZ3MubmFtZSkpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignc3RvcmVMb2FkZWQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuaW5mbyh1dGlsLmZvcm1hdChJTkZPX1NUT1JFX0xPQURFRCwgYXJncy5uYW1lKSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdhbGxTdG9yZXNMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvZ2dlci5pbmZvKElORk9fQUxMX1NUT1JFU19MT0FERUQpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignYWxsQ29tcG9uZW50c0xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9nZ2VyLmluZm8oSU5GT19BTExfQ09NUE9ORU5UU19MT0FERUQpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKGlzUmVsZWFzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudEJ1c1xuXHRcdFx0Lm9uKCdjb21wb25lbnRSZW5kZXInLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHR2YXIgaWQgPSBhcmdzLmNvbnRleHQuYXR0cmlidXRlc1ttb2R1bGVIZWxwZXIuQVRUUklCVVRFX0lEXTtcblx0XHRcdFx0bG9nZ2VyLmRlYnVnKHV0aWwuZm9ybWF0KERFQlVHX1JFTkRFUl9DT01QT05FTlQsXG5cdFx0XHRcdFx0bW9kdWxlSGVscGVyLmdldFRhZ05hbWVGb3JDb21wb25lbnROYW1lKGFyZ3MubmFtZSksXG5cdFx0XHRcdFx0aWQgPyAnIycgKyBpZCA6ICcnXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignY29tcG9uZW50UmVuZGVyZWQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHR2YXIgaWQgPSBhcmdzLmNvbnRleHQuYXR0cmlidXRlc1ttb2R1bGVIZWxwZXIuQVRUUklCVVRFX0lEXTtcblx0XHRcdFx0bG9nZ2VyLmRlYnVnKHV0aWwuZm9ybWF0KFxuXHRcdFx0XHRcdERFQlVHX0NPTVBPTkVOVF9SRU5ERVJFRCxcblx0XHRcdFx0XHRtb2R1bGVIZWxwZXIuZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoYXJncy5uYW1lKSxcblx0XHRcdFx0XHRpZCA/ICcjJyArIGlkIDogJycsXG5cdFx0XHRcdFx0dXRpbC5pc0FycmF5KGFyZ3MuaHJUaW1lKSA/XG5cdFx0XHRcdFx0XHQnICgnICsgaHJUaW1lSGVscGVyLnRvTWVzc2FnZShhcmdzLmhyVGltZSkgKyAnKScgOiAnJ1xuXHRcdFx0XHQpKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2RvY3VtZW50UmVuZGVyZWQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoXG5cdFx0XHRcdFx0REVCVUdfRE9DVU1FTlRfUkVOREVSRUQsIGFyZ3MubG9jYXRpb24udG9TdHJpbmcoKVxuXHRcdFx0XHQpKTtcblx0XHRcdH0pO1xuXHR9OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGJlcnJ5QmFzZTtcblxudmFyIFNlcnZpY2VMb2NhdG9yID0gcmVxdWlyZSgnY2F0YmVycnktbG9jYXRvcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBiYXNpYyBDYXRiZXJyeSBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2F0YmVycnlCYXNlKCkge1xuXHR0aGlzLmxvY2F0b3IgPSBuZXcgU2VydmljZUxvY2F0b3IoKTtcblx0dGhpcy5sb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3NlcnZpY2VMb2NhdG9yJywgdGhpcy5sb2NhdG9yKTtcblx0dGhpcy5sb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ2NhdGJlcnJ5JywgdGhpcyk7XG59XG5cbi8qKlxuICogQ3VycmVudCB2ZXJzaW9uIG9mIGNhdGJlcnJ5LlxuICovXG5DYXRiZXJyeUJhc2UucHJvdG90eXBlLnZlcnNpb24gPSAnNy4xLjInO1xuXG4vKipcbiAqIEN1cnJlbnQgb2JqZWN0IHdpdGggZXZlbnRzLlxuICogQHR5cGUge01vZHVsZUFwaVByb3ZpZGVyfVxuICovXG5DYXRiZXJyeUJhc2UucHJvdG90eXBlLmV2ZW50cyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG4gKi9cbkNhdGJlcnJ5QmFzZS5wcm90b3R5cGUubG9jYXRvciA9IG51bGw7IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29va2llV3JhcHBlckJhc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBiYXNpYyBjb29raWUgd3JhcHBlci5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb29raWVXcmFwcGVyQmFzZSgpIHtcbn1cblxuLyoqXG4gKiBHZXRzIG1hcCBvZiBjb29raWUgdmFsdWVzIGJ5IG5hbWUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29raWVzIG1hcCBieSBuYW1lcy5cbiAqL1xuQ29va2llV3JhcHBlckJhc2UucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHN0cmluZyA9IHRoaXMuZ2V0Q29va2llU3RyaW5nKCk7XG5cdHJldHVybiB0aGlzLl9wYXJzZUNvb2tpZVN0cmluZyhzdHJpbmcpO1xufTtcblxuLyoqXG4gKiBHZXRzIGNvb2tpZSB2YWx1ZSBieSBuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ29va2llIG5hbWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb29raWUgdmFsdWUuXG4gKi9cbkNvb2tpZVdyYXBwZXJCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRpZiAodHlwZW9mIChuYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5nZXRBbGwoKVtuYW1lXSB8fCAnJztcbn07XG5cbi8qKlxuICogUGFyc2VzIGNvb2tpZSBzdHJpbmcgaW50byBtYXAgb2YgY29va2llIGtleS92YWx1ZSBwYWlycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29va2llIHN0cmluZy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCB3aXRoIGNvb2tpZSB2YWx1ZXMgYnkga2V5cy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29va2llV3JhcHBlckJhc2UucHJvdG90eXBlLl9wYXJzZUNvb2tpZVN0cmluZyA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIGNvb2tpZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiAoc3RyaW5nKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gY29va2llO1xuXHR9XG5cdHN0cmluZ1xuXHRcdC5zcGxpdCgvOyAqLylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoY29va2llUGFpcikge1xuXHRcdFx0dmFyIGVxdWFsc0luZGV4ID0gY29va2llUGFpci5pbmRleE9mKCc9Jyk7XG5cdFx0XHRpZiAoZXF1YWxzSW5kZXggPCAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGtleSA9IGNvb2tpZVBhaXIuc3Vic3RyKDAsIGVxdWFsc0luZGV4KS50cmltKCksXG5cdFx0XHRcdHZhbHVlID0gY29va2llUGFpci5zdWJzdHIoXG5cdFx0XHRcdFx0ZXF1YWxzSW5kZXggKyAxLCBjb29raWVQYWlyLmxlbmd0aFxuXHRcdFx0XHQpLnRyaW0oKTtcblxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKTtcblx0XHRcdGNvb2tpZVtrZXldID0gdmFsdWU7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGNvb2tpZTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgY29va2llIHNldHVwIG9iamVjdCB0byBjb29raWUgc3RyaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGNvb2tpZVNldHVwIENvb2tpZSBzZXR1cCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29va2llU2V0dXAua2V5IENvb2tpZSBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29va2llU2V0dXAudmFsdWUgQ29va2llIHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXI/fSBjb29raWVTZXR1cC5tYXhBZ2UgTWF4IGNvb2tpZSBhZ2UgaW4gc2Vjb25kcy5cbiAqIEBwYXJhbSB7RGF0ZT99IGNvb2tpZVNldHVwLmV4cGlyZXMgRXhwaXJlIGRhdGUuXG4gKiBAcGFyYW0ge3N0cmluZz99IGNvb2tpZVNldHVwLnBhdGggVVJJIHBhdGggZm9yIGNvb2tpZS5cbiAqIEBwYXJhbSB7c3RyaW5nP30gY29va2llU2V0dXAuZG9tYWluIENvb2tpZSBkb21haW4uXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBjb29raWVTZXR1cC5zZWN1cmUgSXMgY29va2llIHNlY3VyZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBjb29raWVTZXR1cC5odHRwT25seSBJcyBjb29raWUgSFRUUCBvbmx5LlxuICogQHJldHVybnMge3N0cmluZ30gQ29va2llIHN0cmluZy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29va2llV3JhcHBlckJhc2UucHJvdG90eXBlLl9jb252ZXJ0VG9Db29raWVTZXR1cCA9IGZ1bmN0aW9uIChjb29raWVTZXR1cCkge1xuXHRpZiAodHlwZW9mIChjb29raWVTZXR1cC5rZXkpICE9PSAnc3RyaW5nJyB8fFxuXHRcdHR5cGVvZiAoY29va2llU2V0dXAudmFsdWUpICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignV3Jvbmcga2V5IG9yIHZhbHVlJyk7XG5cdH1cblxuXHR2YXIgY29va2llID0gY29va2llU2V0dXAua2V5ICsgJz0nICsgY29va2llU2V0dXAudmFsdWU7XG5cblx0Ly8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjI2NSNzZWN0aW9uLTQuMS4xXG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLm1heEFnZSkgPT09ICdudW1iZXInKSB7XG5cdFx0Y29va2llICs9ICc7IE1heC1BZ2U9JyArIGNvb2tpZVNldHVwLm1heEFnZS50b0ZpeGVkKCk7XG5cdFx0aWYgKCFjb29raWVTZXR1cC5leHBpcmVzKSB7XG5cdFx0XHQvLyBieSBkZWZhdWx0IGV4cGlyZSBkYXRlID0gY3VycmVudCBkYXRlICsgbWF4LWFnZSBpbiBzZWNvbmRzXG5cdFx0XHRjb29raWVTZXR1cC5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArXG5cdFx0XHRcdGNvb2tpZVNldHVwLm1heEFnZSAqIDEwMDApO1xuXHRcdH1cblx0fVxuXHRpZiAoY29va2llU2V0dXAuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRjb29raWUgKz0gJzsgRXhwaXJlcz0nICsgY29va2llU2V0dXAuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuXHR9XG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLnBhdGgpID09PSAnc3RyaW5nJykge1xuXHRcdGNvb2tpZSArPSAnOyBQYXRoPScgKyBjb29raWVTZXR1cC5wYXRoO1xuXHR9XG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLmRvbWFpbikgPT09ICdzdHJpbmcnKSB7XG5cdFx0Y29va2llICs9ICc7IERvbWFpbj0nICsgY29va2llU2V0dXAuZG9tYWluO1xuXHR9XG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLnNlY3VyZSkgPT09ICdib29sZWFuJyAmJlxuXHRcdGNvb2tpZVNldHVwLnNlY3VyZSkge1xuXHRcdGNvb2tpZSArPSAnOyBTZWN1cmUnO1xuXHR9XG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLmh0dHBPbmx5KSA9PT0gJ2Jvb2xlYW4nICYmXG5cdFx0Y29va2llU2V0dXAuaHR0cE9ubHkpIHtcblx0XHRjb29raWUgKz0gJzsgSHR0cE9ubHknO1xuXHR9XG5cblx0cmV0dXJuIGNvb2tpZTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnRSZW5kZXJlckJhc2U7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIGRvY3VtZW50IHJlbmRlcmVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRG9jdW1lbnRSZW5kZXJlckJhc2UoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0dGhpcy5fc2VydmljZUxvY2F0b3IgPSAkc2VydmljZUxvY2F0b3I7XG5cdHRoaXMuX2NvbnRleHRGYWN0b3J5ID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2NvbnRleHRGYWN0b3J5Jyk7XG5cdHRoaXMuX2NvbXBvbmVudExvYWRlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb21wb25lbnRMb2FkZXInKTtcblx0dGhpcy5fZXZlbnRCdXMgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblxuXHR2YXIgc3RvcmVMb2FkZXIgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnc3RvcmVMb2FkZXInKTtcblx0dGhpcy5fbG9hZGluZyA9IFByb21pc2UuYWxsKFtcblx0XHR0aGlzLl9jb21wb25lbnRMb2FkZXIubG9hZCgpLFxuXHRcdHN0b3JlTG9hZGVyLmxvYWQoKVxuXHRdKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX2xvYWRpbmcgPSBudWxsO1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgncmVhZHknKTtcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0fSk7XG59XG5cbi8qKlxuICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG4gKiBAcHJvdGVjdGVkXG4gKi9cbkRvY3VtZW50UmVuZGVyZXJCYXNlLnByb3RvdHlwZS5fc2VydmljZUxvY2F0b3IgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgY29tcG9uZW50IGxvYWRlci5cbiAqIEB0eXBlIHtDb21wb25lbnRMb2FkZXJ9XG4gKiBAcHJvdGVjdGVkXG4gKi9cbkRvY3VtZW50UmVuZGVyZXJCYXNlLnByb3RvdHlwZS5fY29tcG9uZW50TG9hZGVyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IG1vZHVsZSBsb2FkaW5nIHByb21pc2UuXG4gKiBAdHlwZSB7UHJvbWlzZX1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlckJhc2UucHJvdG90eXBlLl9sb2FkaW5nID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGNvbnRleHQgZmFjdG9yeS5cbiAqIEB0eXBlIHtDb250ZXh0RmFjdG9yeX1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlckJhc2UucHJvdG90eXBlLl9jb250ZXh0RmFjdG9yeSA9IG51bGw7XG5cbi8qKlxuICogR2V0cyBwcm9taXNlIGZvciByZWFkeSBzdGF0ZSB3aGVuIGl0IHdpbGwgYmUgYWJsZSBoYW5kbGUgcmVxdWVzdHMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlckJhc2UucHJvdG90eXBlLl9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX2xvYWRpbmcgP1xuXHRcdHRoaXMuX2xvYWRpbmcgOlxuXHRcdFByb21pc2UucmVzb2x2ZSgpO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXJCYXNlO1xuXG4vKipcbiAqIENyZWF0ZSBiYXNpYyBpbXBsZW1lbnRhdGlvbiBvZiBhIG1vZHVsZSBsb2FkZXIuXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFuc2Zvcm1zIEFycmF5IG9mIG1vZHVsZSB0cmFuc2Zvcm1hdGlvbnMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTG9hZGVyQmFzZSh0cmFuc2Zvcm1zKSB7XG5cdHRoaXMuX3RyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgbGlzdCBvZiBjb21wb25lbnQgdHJhbnNmb3Jtcy5cbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbkxvYWRlckJhc2UucHJvdG90eXBlLl90cmFuc2Zvcm1zID0gbnVsbDtcblxuLyoqXG4gKiBBcHBsaWVzIGFsbCB0cmFuc2Zvcm1hdGlvbnMgcmVnaXN0ZXJlZCBpbiBTZXJ2aWNlIExvY2F0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIExvYWRlZCBtb2R1bGUuXG4gKiBAcGFyYW0ge251bWJlcj99IGluZGV4IFRyYW5zZm9ybWF0aW9uIGluZGV4IGluIGEgbGlzdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFRyYW5zZm9ybWVkIG1vZHVsZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuTG9hZGVyQmFzZS5wcm90b3R5cGUuX2FwcGx5VHJhbnNmb3JtcyA9IGZ1bmN0aW9uIChtb2R1bGUsIGluZGV4KSB7XG5cdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gdGhlIGxpc3QgaXMgYSBzdGFjaywgd2Ugc2hvdWxkIHJldmVyc2UgaXRcblx0XHRpbmRleCA9IHRoaXMuX3RyYW5zZm9ybXMubGVuZ3RoIC0gMTtcblx0fVxuXG5cdGlmIChpbmRleCA8IDApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1vZHVsZSk7XG5cdH1cblxuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0dHJhbnNmb3JtYXRpb24gPSB0aGlzLl90cmFuc2Zvcm1zW2luZGV4XTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtYXRpb24udHJhbnNmb3JtKG1vZHVsZSk7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAodHJhbnNmb3JtZWRNb2R1bGUpIHtcblx0XHRcdHJldHVybiBzZWxmLl9hcHBseVRyYW5zZm9ybXModHJhbnNmb3JtZWRNb2R1bGUsIGluZGV4IC0gMSk7XG5cdFx0fSk7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUFwaVByb3ZpZGVyQmFzZTtcblxudmFyIEVSUk9SX0VWRU5UX05BTUUgPSAnRXZlbnQgbmFtZSBzaG91bGQgYmUgYSBzdHJpbmcnLFxuXHRFUlJPUl9FVkVOVF9IQU5ETEVSID0gJ0V2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBiYXNpYyBBUEkgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgU2VydmljZSBsb2NhdG9yXG4gKiB0byByZXNvbHZlIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNb2R1bGVBcGlQcm92aWRlckJhc2UoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMubG9jYXRvciA9ICRzZXJ2aWNlTG9jYXRvcjtcblx0dGhpcy5jb29raWUgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnY29va2llV3JhcHBlcicpO1xuXHR0aGlzLl9ldmVudEJ1cyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgY29va2llIHByb3ZpZGVyLlxuICogQHR5cGUge0Nvb2tpZVdyYXBwZXJ9XG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyQmFzZS5wcm90b3R5cGUuY29va2llID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXJCYXNlLnByb3RvdHlwZS5sb2NhdG9yID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGV2ZW50IGJ1cy5cbiAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGVBcGlQcm92aWRlckJhc2UucHJvdG90eXBlLl9ldmVudEJ1cyA9IG51bGw7XG5cbi8qKlxuICogU3Vic2NyaWJlcyBvbiB0aGUgc3BlY2lmaWVkIGV2ZW50IGluIENhdGJlcnJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRXZlbnQgaGFuZGxlci5cbiAqIEByZXR1cm5zIHtNb2R1bGVBcGlQcm92aWRlckJhc2V9IFRoaXMgb2JqZWN0IGZvciBjaGFpbmluZy5cbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXJCYXNlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0Y2hlY2tFdmVudE5hbWVBbmRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cdHRoaXMuX2V2ZW50QnVzLm9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVzIG9uIHRoZSBzcGVjaWZpZWQgZXZlbnQgaW4gQ2F0YmVycnkgdG8gaGFuZGxlIG9uY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICogQHJldHVybnMge01vZHVsZUFwaVByb3ZpZGVyQmFzZX0gVGhpcyBvYmplY3QgZm9yIGNoYWluaW5nLlxuICovXG5Nb2R1bGVBcGlQcm92aWRlckJhc2UucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHR0aGlzLl9ldmVudEJ1cy5vbmNlKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgaGFuZGxlciBmcm9tIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICogQHJldHVybnMge01vZHVsZUFwaVByb3ZpZGVyQmFzZX0gVGhpcyBvYmplY3QgZm9yIGNoYWluaW5nLlxuICovXG5Nb2R1bGVBcGlQcm92aWRlckJhc2UucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0dGhpcy5fZXZlbnRCdXMucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGhhbmRsZXJzIGZyb20gdGhlIHNwZWNpZmllZCBldmVudCBpbiBDYXRiZXJyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcmV0dXJucyB7TW9kdWxlQXBpUHJvdmlkZXJCYXNlfSBUaGlzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyQmFzZS5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuXHRjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBkdW1teSk7XG5cdHRoaXMuX2V2ZW50QnVzLnJlbW92ZUFsbExpc3RlbmVycyhldmVudE5hbWUpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGV2ZW50IG5hbWUgaXMgYSBzdHJpbmcgYW5kIGhhbmRsZXIgaXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHsqfSBoYW5kbGVyIFRoZSBldmVudCBoYW5kbGVyIHRvIGNoZWNrLlxuICovXG5mdW5jdGlvbiBjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmICh0eXBlb2YgKGV2ZW50TmFtZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX0VWRU5UX05BTUUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAoaGFuZGxlcikgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoRVJST1JfRVZFTlRfSEFORExFUik7XG5cdH1cbn1cblxuLyoqXG4gKiBEb2VzIG5vdGhpbmcuIEl0IGlzIHVzZWQgYXMgYSBkZWZhdWx0IGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBkdW1teSgpIHt9XG4iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBUSVRMRSA9ICdDYXRiZXJyeUA3LjEuMiAoJyArXG5cdFx0JzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2F0YmVycnkvY2F0YmVycnkvaXNzdWVzXCIgJyArXG5cdFx0J3RhcmdldD1cIl9ibGFua1wiPicgK1xuXHRcdCdyZXBvcnQgYW4gaXNzdWUnICtcblx0XHQnPC9hPicgK1xuXHRcdCcpJyxcblx0QU1QID0gLyYvZyxcblx0TFQgPSAvPC9nLFxuXHRHVCA9IC8+L2csXG5cdFFVT1QgPSAvXFxcIi9nLFxuXHRTSU5HTEVfUVVPVCA9IC9cXCcvZyxcblx0RVJST1JfTUVTU0FHRV9SRUdFWFAgPSAvXig/OltcXHckXSspOiAoPzouKylcXHI/XFxuL2ksXG5cdEVSUk9SX01FU1NBR0VfRk9STUFUID0gJzxzcGFuICcgK1xuXHRcdCdzdHlsZT1cImNvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMTZwdDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JyArXG5cdFx0JyVzJXMnICtcblx0XHQnPC9zcGFuPicsXG5cdE5FV19MSU5FID0gL1xccj9cXG4vZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBQcmludHMgZXJyb3Igd2l0aCBwcmV0dHkgZm9ybWF0dGluZy5cblx0ICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgRXJyb3IgdG8gcHJpbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgVXNlciBhZ2VudCBpbmZvcm1hdGlvbi5cblx0ICogQHJldHVybnMge3N0cmluZ30gSFRNTCB3aXRoIGFsbCBpbmZvcm1hdGlvbiBhYm91dCBlcnJvci5cblx0ICovXG5cdHByZXR0eVByaW50OiBmdW5jdGlvbiAoZXJyb3IsIHVzZXJBZ2VudCkge1xuXHRcdGlmICghZXJyb3IgfHwgdHlwZW9mIChlcnJvcikgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHZhciBkYXRlU3RyaW5nID0gKG5ldyBEYXRlKCkpLnRvVVRDU3RyaW5nKCkgKyAnOzxici8+Jyxcblx0XHRcdHVzZXJBZ2VudFN0cmluZyA9ICh1c2VyQWdlbnQgPyAodXNlckFnZW50ICsgJzs8YnIvPicpIDogJycpLFxuXHRcdFx0bmFtZSA9ICh0eXBlb2YgKGVycm9yLm5hbWUpID09PSAnc3RyaW5nJyA/IGVycm9yLm5hbWUgKyAnOiAnIDogJycpLFxuXHRcdFx0bWVzc2FnZSA9IFN0cmluZyhlcnJvci5tZXNzYWdlIHx8ICcnKSxcblx0XHRcdHN0YWNrID0gU3RyaW5nKGVycm9yLnN0YWNrIHx8ICcnKS5yZXBsYWNlKEVSUk9SX01FU1NBR0VfUkVHRVhQLCAnJyksXG5cdFx0XHRmdWxsTWVzc2FnZSA9IHV0aWwuZm9ybWF0KFxuXHRcdFx0XHRFUlJPUl9NRVNTQUdFX0ZPUk1BVCwgZXNjYXBlKG5hbWUpLCBlc2NhcGUobWVzc2FnZSlcblx0XHRcdCk7XG5cblx0XHRyZXR1cm4gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAxMnB0O1wiPicgK1xuXHRcdFx0ZGF0ZVN0cmluZyArXG5cdFx0XHR1c2VyQWdlbnRTdHJpbmcgK1xuXHRcdFx0VElUTEUgKyAnPGJyLz48YnIvPicgK1xuXHRcdFx0ZnVsbE1lc3NhZ2UgKyAnPGJyLz48YnIvPicgK1xuXHRcdFx0ZXNjYXBlKHN0YWNrKSArXG5cdFx0XHQnPC9kaXY+Jztcblx0fVxufTtcblxuLyoqXG4gKiBFc2NhcGVzIGVycm9yIHRleHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgRXJyb3IgdGV4dC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGVzY2FwZWQgYW5kIGZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWVcblx0XHQucmVwbGFjZShBTVAsICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoTFQsICcmbHQ7Jylcblx0XHQucmVwbGFjZShHVCwgJyZndDsnKVxuXHRcdC5yZXBsYWNlKFFVT1QsICcmcXVvdDsnKVxuXHRcdC5yZXBsYWNlKFNJTkdMRV9RVU9ULCAnJiMzOTsnKVxuXHRcdC5yZXBsYWNlKE5FV19MSU5FLCAnPGJyLz4nKTtcbn0iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGhlbHBlciA9IHtcblx0Q09NUE9ORU5UX1BSRUZJWDogJ2NhdC0nLFxuXHRDT01QT05FTlRfUFJFRklYX1JFR0VYUDogL15jYXQtL2ksXG5cdENPTVBPTkVOVF9FUlJPUl9URU1QTEFURV9QT1NURklYOiAnLS1lcnJvcicsXG5cdERPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FOiAnZG9jdW1lbnQnLFxuXHRET0NVTUVOVF9FTEVNRU5UX05BTUU6ICdodG1sJyxcblx0SEVBRF9DT01QT05FTlRfTkFNRTogJ2hlYWQnLFxuXHRBVFRSSUJVVEVfSUQ6ICdpZCcsXG5cdEFUVFJJQlVURV9TVE9SRTogJ2NhdC1zdG9yZScsXG5cdERFRkFVTFRfTE9HSUNfRklMRU5BTUU6ICdpbmRleC5qcycsXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgbmFtZSBmb3IgZXJyb3IgdGVtcGxhdGUgb2YgY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBuYW1lIG9mIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gTmFtZSBvZiBlcnJvciB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuXHQgKi9cblx0Z2V0TmFtZUZvckVycm9yVGVtcGxhdGU6IGZ1bmN0aW9uIChjb21wb25lbnROYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiAoY29tcG9uZW50TmFtZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnROYW1lICsgaGVscGVyLkNPTVBPTkVOVF9FUlJPUl9URU1QTEFURV9QT1NURklYO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHNwZWNpZmllZCBjb21wb25lbnQgbmFtZSBpcyB0aGUgXCJkb2N1bWVudFwiIGNvbXBvbmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHNwZWNpZmllZCBjb21wb25lbnQgaXMgdGhlIFwiZG9jdW1lbnRcIiBjb21wb25lbnQuXG5cdCAqL1xuXHRpc0RvY3VtZW50Q29tcG9uZW50OiBmdW5jdGlvbiAoY29tcG9uZW50TmFtZSkge1xuXHRcdHJldHVybiBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09IGhlbHBlci5ET0NVTUVOVF9DT01QT05FTlRfTkFNRTtcblx0fSxcblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgc3BlY2lmaWVkIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBcImhlYWRcIiBjb21wb25lbnQgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50LlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzcGVjaWZpZWQgY29tcG9uZW50IGlzIHRoZSBcImhlYWRcIiBjb21wb25lbnQuXG5cdCAqL1xuXHRpc0hlYWRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnROYW1lKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaGVscGVyLkhFQURfQ09NUE9ORU5UX05BTUU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCBuYW1lIHdpdGhvdXQgcHJlZml4LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZnVsbENvbXBvbmVudE5hbWUgRnVsbCBjb21wb25lbnQgbmFtZSAodGFnIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgb3JpZ2luYWwgY29tcG9uZW50IG5hbWUgd2l0aG91dCBwcmVmaXguXG5cdCAqL1xuXHRnZXRPcmlnaW5hbENvbXBvbmVudE5hbWU6IGZ1bmN0aW9uIChmdWxsQ29tcG9uZW50TmFtZSkge1xuXHRcdGlmICh0eXBlb2YgKGZ1bGxDb21wb25lbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0ZnVsbENvbXBvbmVudE5hbWUgPSBmdWxsQ29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmIChmdWxsQ29tcG9uZW50TmFtZSA9PT0gaGVscGVyLkhFQURfQ09NUE9ORU5UX05BTUUpIHtcblx0XHRcdHJldHVybiBmdWxsQ29tcG9uZW50TmFtZTtcblx0XHR9XG5cdFx0aWYgKGZ1bGxDb21wb25lbnROYW1lID09PSBoZWxwZXIuRE9DVU1FTlRfQ09NUE9ORU5UX05BTUUgfHxcblx0XHRcdGZ1bGxDb21wb25lbnROYW1lID09PSBoZWxwZXIuRE9DVU1FTlRfRUxFTUVOVF9OQU1FKSB7XG5cdFx0XHRyZXR1cm4gaGVscGVyLkRPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVsbENvbXBvbmVudE5hbWUucmVwbGFjZShoZWxwZXIuQ09NUE9ORU5UX1BSRUZJWF9SRUdFWFAsICcnKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyB2YWxpZCB0YWcgbmFtZSBmb3IgY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE5hbWUgb2YgdGhlIHRhZy5cblx0ICovXG5cdGdldFRhZ05hbWVGb3JDb21wb25lbnROYW1lOiBmdW5jdGlvbiAoY29tcG9uZW50TmFtZSkge1xuXHRcdGlmICh0eXBlb2YgKGNvbXBvbmVudE5hbWUpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHR2YXIgdXBwZXJDb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpO1xuXHRcdGlmIChjb21wb25lbnROYW1lID09PSBoZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSkge1xuXHRcdFx0cmV0dXJuIHVwcGVyQ29tcG9uZW50TmFtZTtcblx0XHR9XG5cdFx0aWYgKGNvbXBvbmVudE5hbWUgPT09IGhlbHBlci5ET0NVTUVOVF9DT01QT05FTlRfTkFNRSkge1xuXHRcdFx0cmV0dXJuIGhlbHBlci5ET0NVTUVOVF9FTEVNRU5UX05BTUUudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGhlbHBlci5DT01QT05FTlRfUFJFRklYLnRvVXBwZXJDYXNlKCkgKyB1cHBlckNvbXBvbmVudE5hbWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgbWV0aG9kIG9mIHRoZSBtb2R1bGUgdGhhdCBjYW4gYmUgaW52b2tlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IG1vZHVsZSBNb2R1bGUgaW1wbGVtZW50YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggTWV0aG9kIHByZWZpeCAoaS5lLiBoYW5kbGUpLlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IG5hbWUgTmFtZSBvZiB0aGUgZW50aXR5IHRvIGludm9rZSBtZXRob2QgZm9yXG5cdCAqICh3aWxsIGJlIGNvbnZlcnRlZCB0byBjYW1lbCBjYXNpbmcpLlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IE1ldGhvZCB0byBpbnZva2UuXG5cdCAqL1xuXHRnZXRNZXRob2RUb0ludm9rZTogZnVuY3Rpb24gKG1vZHVsZSwgcHJlZml4LCBuYW1lKSB7XG5cdFx0aWYgKCFtb2R1bGUgfHwgdHlwZW9mIChtb2R1bGUpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRQcm9taXNlTWV0aG9kO1xuXHRcdH1cblx0XHR2YXIgbWV0aG9kTmFtZSA9IGhlbHBlci5nZXRDYW1lbENhc2VOYW1lKHByZWZpeCwgbmFtZSk7XG5cdFx0aWYgKHR5cGVvZiAobW9kdWxlW21ldGhvZE5hbWVdKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIG1vZHVsZVttZXRob2ROYW1lXS5iaW5kKG1vZHVsZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKG1vZHVsZVtwcmVmaXhdKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIG1vZHVsZVtwcmVmaXhdLmJpbmQobW9kdWxlLCBuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdFByb21pc2VNZXRob2Q7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgbmFtZSBpbiBjYW1lbCBjYXNpbmcgZm9yIGV2ZXJ5dGhpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggUHJlZml4IGZvciB0aGUgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSB0byBjb252ZXJ0LlxuXHQgKi9cblx0Z2V0Q2FtZWxDYXNlTmFtZTogZnVuY3Rpb24gKHByZWZpeCwgbmFtZSkge1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHR2YXIgcGFydHMgPSBuYW1lLnNwbGl0KC9bXmEtejAtOV0vaSksXG5cdFx0XHRjYW1lbENhc2VOYW1lID0gU3RyaW5nKHByZWZpeCB8fCAnJyk7XG5cblx0XHRwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0KSB7XG5cdFx0XHRpZiAoIXBhcnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmaXJzdCBjaGFyYWN0ZXIgaW4gbWV0aG9kIG5hbWUgbXVzdCBiZSBpbiBsb3dlcmNhc2Vcblx0XHRcdGNhbWVsQ2FzZU5hbWUgKz0gY2FtZWxDYXNlTmFtZSA/XG5cdFx0XHRcdHBhcnRbMF0udG9VcHBlckNhc2UoKSA6XG5cdFx0XHRcdHBhcnRbMF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdGNhbWVsQ2FzZU5hbWUgKz0gcGFydC5zdWJzdHJpbmcoMSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2FtZWxDYXNlTmFtZTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyBzYWZlIHByb21pc2UgcmVzb2x2ZWQgZnJvbSBhY3Rpb24uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gd3JhcCB3aXRoIHNhZmUgcHJvbWlzZS5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIGRvbmUgYWN0aW9uLlxuXHQgKi9cblx0Z2V0U2FmZVByb21pc2U6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHR2YXIgcmVzdWx0O1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSBhY3Rpb24oKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXI7XG5cbi8qKlxuICogSnVzdCByZXR1cm5zIHJlc29sdmVkIHByb21pc2UuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFByb21pc2VNZXRob2QoKSB7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn0iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBEZWZpbmVzIHJlYWQtb25seSBwcm9wZXJ0eS5cblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBPYmplY3QgdG8gZGVmaW5lIHByb3BlcnR5IGluLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eS5cblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBQcm9wZXJ0eSB2YWx1ZS5cblx0ICovXG5cdGRlZmluZVJlYWRPbmx5OiBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH0pO1xuXHR9XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0VVJJID0gcmVxdWlyZSgnY2F0YmVycnktdXJpJykuVVJJO1xuXG52YXIgVVJJX1BBVEhfUkVQTEFDRU1FTlRfUkVHX0VYUF9TT1VSQ0UgPSAnKFteXFxcXC9cXFxcXFxcXF0qKScsXG5cdFVSSV9RVUVSWV9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSA9ICcoW14mPz1dKiknO1xuXG52YXIgUEFUSF9FTkRfU0xBU0hfUkVHX0VYUCA9IC8oLispXFwvKCR8XFw/fCMpLyxcblx0RVhQUkVTU0lPTl9FU0NBUEVfUkVHX0VYUCA9IC9bXFwtXFxbXFxdXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZyxcblx0SURFTlRJRklFUl9SRUdfRVhQX1NPVVJDRSA9ICdbJEEtWl9dW1xcXFxkQS1aXyRdKicsXG5cdFNUT1JFX0xJU1RfUkVHX0VYUF9TT1VSQ0UgPSAnKD86KD86XFxcXFxcXFxbWyBdKicgK1xuXHRcdCdbXlxcXFxbXFxcXF0sXSsnICtcblx0XHQnKFsgXSosWyBdKicgK1xuXHRcdCdbXlxcXFxbXFxcXF0sXSsnICtcblx0XHQnKSpbIF0qXFxcXFxcXFxdKXwoPzpcXFxcXFxcXFtbIF0qXFxcXFxcXFxdKSk/Jyxcblx0UEFSQU1FVEVSX1JFR19FWFAgPSBuZXcgUmVnRXhwKFxuXHRcdFx0JzonICtcblx0XHRcdElERU5USUZJRVJfUkVHX0VYUF9TT1VSQ0UgK1xuXHRcdFx0U1RPUkVfTElTVF9SRUdfRVhQX1NPVVJDRSwgJ2dpJyksXG5cdFNMQVNIRURfQlJBQ0tFVFNfUkVHX0VYUCA9IC9cXFxcXFxbfFxcXFxcXF0vLFxuXHRTVE9SRV9MSVNUX1NFUEFSQVRPUiA9ICcsJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBSZW1vdmVzIHNsYXNoIGZyb20gdGhlIGVuZCBvZiBVUkkgcGF0aC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVyaVBhdGggVVJJIHBhdGggdG8gcHJvY2Vzcy5cblx0ICogQHJldHVybnMge3N0cmluZ30gVVJJIHdpdGhvdXQgZW5kIHNsYXNoLlxuXHQgKi9cblx0cmVtb3ZlRW5kU2xhc2g6IGZ1bmN0aW9uICh1cmlQYXRoKSB7XG5cdFx0aWYgKCF1cmlQYXRoIHx8IHR5cGVvZiAodXJpUGF0aCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGlmICh1cmlQYXRoID09PSAnLycpIHtcblx0XHRcdHJldHVybiB1cmlQYXRoO1xuXHRcdH1cblx0XHRyZXR1cm4gdXJpUGF0aC5yZXBsYWNlKFBBVEhfRU5EX1NMQVNIX1JFR19FWFAsICckMSQyJyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBHZXRzIFVSSSBtYXBwZXIgZnJvbSB0aGUgcm91dGUgZXhwcmVzc2lvbiBsaWtlXG5cdCAqIC9zb21lLzppZFtzdG9yZTEsIHN0b3JlMiwgc3RvcmUzXS9kZXRhaWxzP2ZpbHRlcj06ZmlsdGVyW3N0b3JlM10uXG5cdCAqIEBwYXJhbSB7VVJJfSByb3V0ZVVyaSBFeHByZXNzaW9uIHRoYXQgZGVmaW5lcyByb3V0ZS5cblx0ICogQHJldHVybnMge3tleHByZXNzaW9uOiBSZWdFeHAsIG1hcDogRnVuY3Rpb259P30gVVJJIG1hcHBlciBvYmplY3QuXG5cdCAqIFVSSSBtYXBwZXIgb2JqZWN0LlxuXHQgKi9cblx0Y29tcGlsZVJvdXRlOiBmdW5jdGlvbiAocm91dGVVcmkpIHtcblx0XHRpZiAoIXJvdXRlVXJpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBlc2NhcGUgcmVndWxhciBleHByZXNzaW9uIGNoYXJhY3RlcnNcblx0XHR2YXIgZXNjYXBlZCA9IHJvdXRlVXJpLnBhdGgucmVwbGFjZShcblx0XHRcdEVYUFJFU1NJT05fRVNDQVBFX1JFR19FWFAsICdcXFxcJCYnXG5cdFx0KTtcblxuXHRcdC8vIGdldCBhbGwgb2NjdXJyZW5jZXMgb2Ygcm91dGluZyBwYXJhbWV0ZXJzIGluIFVSSSBwYXRoXG5cdFx0dmFyIHJlZ0V4cFNvdXJjZSA9ICdeJyArIGVzY2FwZWQucmVwbGFjZShcblx0XHRcdFx0XHRQQVJBTUVURVJfUkVHX0VYUCxcblx0XHRcdFx0XHRVUklfUEFUSF9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSkgKyAnJCcsXG5cdFx0XHRleHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdFeHBTb3VyY2UsICdpJyksXG5cdFx0XHRxdWVyeU1hcHBlcixcblx0XHRcdHBhdGhNYXBwZXIsXG5cdFx0XHRwYXRoUGFyYW1ldGVyTWF0Y2hlcyA9IGVzY2FwZWQubWF0Y2goXG5cdFx0XHRcdFBBUkFNRVRFUl9SRUdfRVhQXG5cdFx0XHQpLFxuXHRcdFx0cGF0aFBhcmFtZXRlcnMgPSBwYXRoUGFyYW1ldGVyTWF0Y2hlcyA/XG5cdFx0XHRcdHBhdGhQYXJhbWV0ZXJNYXRjaGVzLm1hcChnZXRQYXJhbWV0ZXJEZXNjcmlwdG9yKSA6IG51bGw7XG5cblx0XHRpZiAocGF0aFBhcmFtZXRlcnMpIHtcblx0XHRcdHBhdGhNYXBwZXIgPSBjcmVhdGVVcmlQYXRoTWFwcGVyKGV4cHJlc3Npb24sIHBhdGhQYXJhbWV0ZXJzKTtcblx0XHR9XG5cblx0XHRpZiAocm91dGVVcmkucXVlcnkpIHtcblx0XHRcdHZhciBxdWVyeVBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0T2JqZWN0LmtleXMocm91dGVVcmkucXVlcnkudmFsdWVzKVxuXHRcdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0XHRcdC8vIGFycmF5cyBpbiByb3V0aW5nIGRlZmluaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0XHRcdFx0aWYgKHV0aWwuaXNBcnJheShyb3V0ZVVyaS5xdWVyeS52YWx1ZXNbbmFtZV0pKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNjYXBlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGFyYWN0ZXJzXG5cdFx0XHRcdFx0dmFyIGVzY2FwZWQgPSByb3V0ZVVyaS5xdWVyeS52YWx1ZXNbbmFtZV0ucmVwbGFjZShcblx0XHRcdFx0XHRcdEVYUFJFU1NJT05fRVNDQVBFX1JFR19FWFAsICdcXFxcJCYnXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdC8vIGdldCBhbGwgb2NjdXJyZW5jZXMgb2Ygcm91dGluZyBwYXJhbWV0ZXJzIGluIFVSSSBwYXRoXG5cdFx0XHRcdFx0dmFyIHJlZ0V4cFNvdXJjZSA9ICdeJyArIGVzY2FwZWQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0UEFSQU1FVEVSX1JFR19FWFAsXG5cdFx0XHRcdFx0XHRcdFVSSV9RVUVSWV9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSkgKyAnJCc7XG5cdFx0XHRcdFx0dmFyIHF1ZXJ5UGFyYW1ldGVyTWF0Y2hlcyA9IGVzY2FwZWQubWF0Y2goXG5cdFx0XHRcdFx0XHRcdFBBUkFNRVRFUl9SRUdfRVhQXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICghcXVlcnlQYXJhbWV0ZXJNYXRjaGVzIHx8XG5cdFx0XHRcdFx0XHRxdWVyeVBhcmFtZXRlck1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHBhcmFtZXRlciA9IGdldFBhcmFtZXRlckRlc2NyaXB0b3IoXG5cdFx0XHRcdFx0XHRxdWVyeVBhcmFtZXRlck1hdGNoZXNbcXVlcnlQYXJhbWV0ZXJNYXRjaGVzLmxlbmd0aCAtIDFdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2YXIgZXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAocmVnRXhwU291cmNlLCAnaScpO1xuXHRcdFx0XHRcdHBhcmFtZXRlci5tYXAgPSBjcmVhdGVVcmlRdWVyeVZhbHVlTWFwcGVyKGV4cHJlc3Npb24pO1xuXHRcdFx0XHRcdHF1ZXJ5UGFyYW1ldGVyc1tuYW1lXSA9IHBhcmFtZXRlcjtcblx0XHRcdFx0fSk7XG5cdFx0XHRxdWVyeU1hcHBlciA9IGNyZWF0ZVVyaVF1ZXJ5TWFwcGVyKHF1ZXJ5UGFyYW1ldGVycyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGV4cHJlc3Npb246IGV4cHJlc3Npb24sXG5cdFx0XHRtYXA6IGZ1bmN0aW9uICh1cmkpIHtcblx0XHRcdFx0dmFyIHN0YXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHRcdFx0aWYgKHBhdGhNYXBwZXIpIHtcblx0XHRcdFx0XHRwYXRoTWFwcGVyKHVyaS5wYXRoLCBzdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocXVlcnlNYXBwZXIgJiYgdXJpLnF1ZXJ5KSB7XG5cdFx0XHRcdFx0cXVlcnlNYXBwZXIodXJpLnF1ZXJ5LnZhbHVlcywgc3RhdGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgVVJJIHBhdGgtdG8tc3RhdGUgb2JqZWN0IG1hcHBlci5cbiAqIEBwYXJhbSB7UmVnRXhwfSBleHByZXNzaW9uIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBVUkkgcGF0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtZXRlcnMgTGlzdCBvZiBwYXJhbWV0ZXIgZGVzY3JpcHRvcnMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFVSSSBtYXBwZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVyaVBhdGhNYXBwZXIoZXhwcmVzc2lvbiwgcGFyYW1ldGVycykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHVyaVBhdGgsIHN0YXRlKSB7XG5cdFx0dmFyIG1hdGNoZXMgPSB1cmlQYXRoLm1hdGNoKGV4cHJlc3Npb24pO1xuXHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHR9XG5cblx0XHQvLyBzdGFydCB3aXRoIHNlY29uZCBtYXRjaCBiZWNhdXNlIGZpcnN0IG1hdGNoIGlzIGFsd2F5c1xuXHRcdC8vIHRoZSB3aG9sZSBVUkkgcGF0aFxuXHRcdG1hdGNoZXMgPSBtYXRjaGVzLnNwbGljZSgxKTtcblxuXHRcdHBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW1ldGVyLCBpbmRleCkge1xuXHRcdFx0dmFyIHZhbHVlID0gbWF0Y2hlc1tpbmRleF07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG9cblx0XHRcdH1cblx0XHRcdHBhcmFtZXRlci5zdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0XHRpZiAoIXN0YXRlW3N0b3JlTmFtZV0pIHtcblx0XHRcdFx0XHRzdGF0ZVtzdG9yZU5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGF0ZVtzdG9yZU5hbWVdW3BhcmFtZXRlci5uYW1lXSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgVVJJIHF1ZXJ5LXRvLXN0YXRlIG9iamVjdCBtYXBwZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBMaXN0IG9mIHBvc3NpYmxlIHF1ZXJ5IHBhcmFtZXRlciBkZXNjcmlwdG9ycyBieVxuICogcXVlcnkgcGFyYW1ldGVyIG5hbWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBVUkkgbWFwcGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVVcmlRdWVyeU1hcHBlcihwYXJhbWV0ZXJzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAocXVlcnlWYWx1ZXMsIHN0YXRlKSB7XG5cdFx0cXVlcnlWYWx1ZXMgPSBxdWVyeVZhbHVlcyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0T2JqZWN0LmtleXMocXVlcnlWYWx1ZXMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAocXVlcnlLZXkpIHtcblx0XHRcdFx0dmFyIHBhcmFtZXRlciA9IHBhcmFtZXRlcnNbcXVlcnlLZXldO1xuXHRcdFx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHV0aWwuaXNBcnJheShxdWVyeVZhbHVlc1txdWVyeUtleV0pID9cblx0XHRcdFx0XHRcdHF1ZXJ5VmFsdWVzW3F1ZXJ5S2V5XVxuXHRcdFx0XHRcdFx0XHQubWFwKHBhcmFtZXRlci5tYXApXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlICE9PSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0XHRwYXJhbWV0ZXIubWFwKHF1ZXJ5VmFsdWVzW3F1ZXJ5S2V5XSk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtZXRlci5zdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0XHRcdGlmICghc3RhdGVbc3RvcmVOYW1lXSkge1xuXHRcdFx0XHRcdFx0c3RhdGVbc3RvcmVOYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlW3N0b3JlTmFtZV1bcGFyYW1ldGVyLm5hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH07XG59XG5cbi8qKlxuICogTWFwcyBxdWVyeSBwYXJhbWV0ZXIgdmFsdWUgdXNpbmcgdGhlIHBhcmFtZXRlcnMgZXhwcmVzc2lvbi5cbiAqIEBwYXJhbSB7UmVnRXhwfSBleHByZXNzaW9uIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBnZXQgcGFyYW1ldGVyIHZhbHVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBVUkkgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciB2YWx1ZSBtYXBwZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVyaVF1ZXJ5VmFsdWVNYXBwZXIoZXhwcmVzc2lvbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZVxuXHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdC8vIHdlIGhhdmUgdG8gdGVtcG9yYXJ5IGVuY29kZSB0aGVzZSBjaGFyYWN0ZXJzIGZvciBub3QgYnJlYWtpbmdcblx0XHRcdC8vIGV4cHJlc3Npb24gcGFyc2luZywgYmVjYXVzZSBpdCdzIHRlcm1pbmF0ZWQgYnkgcXVlcnkgc2VwYXJhdG9yXG5cdFx0XHQucmVwbGFjZSgvPS9nLCAnJTNEJylcblx0XHRcdC5yZXBsYWNlKC9cXD8vZywgJyUzRicpXG5cdFx0XHQucmVwbGFjZSgvJi9nLCAnJTI2Jyk7XG5cdFx0dmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChleHByZXNzaW9uKTtcblx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIHRoZSB2YWx1ZSBpcyB0aGUgc2Vjb25kIGl0ZW0sIHRoZSBmaXJzdCBpcyBhIHdob2xlIHN0cmluZ1xuXHRcdHZhciBtYXBwZWRWYWx1ZSA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcblx0XHR0cnkge1xuXHRcdFx0bWFwcGVkVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQobWFwcGVkVmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIG5vdGhpbmcgdG8gZG9cblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwcGVkVmFsdWU7XG5cdH07XG59XG5cbi8qKlxuICogR2V0cyBkZXNjcmlwdGlvbiBvZiBwYXJhbWV0ZXJzIGZyb20gaXRzIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyIFBhcmFtZXRlciBleHByZXNzaW9uLlxuICogQHJldHVybnMge3tuYW1lOiBzdHJpbmcsIHN0b3JlTmFtZXM6IEFycmF5fX0gUGFyYW1ldGVyIGRlc2NyaXB0b3IuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckRlc2NyaXB0b3IocGFyYW1ldGVyKSB7XG5cdHZhciBwYXJ0cyA9IHBhcmFtZXRlci5zcGxpdChTTEFTSEVEX0JSQUNLRVRTX1JFR19FWFApO1xuXG5cdHJldHVybiB7XG5cdFx0bmFtZTogcGFydHNbMF1cblx0XHRcdC50cmltKClcblx0XHRcdC5zdWJzdHJpbmcoMSksXG5cdFx0c3RvcmVOYW1lczogKHBhcnRzWzFdID8gcGFydHNbMV0gOiAnJylcblx0XHRcdC5zcGxpdChTVE9SRV9MSVNUX1NFUEFSQVRPUilcblx0XHRcdC5tYXAoZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gc3RvcmVOYW1lLnRyaW0oKTtcblx0XHRcdH0pXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIHN0b3JlTmFtZS5sZW5ndGggPiAwO1xuXHRcdFx0fSlcblx0fTtcbn0iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZVByb3ZpZGVyO1xuXG52YXIgcm91dGVIZWxwZXIgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcm91dGVIZWxwZXInKSxcblx0Y2F0YmVycnlVcmkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKSxcblx0VVJJID0gY2F0YmVycnlVcmkuVVJJO1xuXG4vKipcbiAqIENyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0YXRlIHByb3ZpZGVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIFNlcnZpY2UgbG9jYXRvclxuICogdG8gcmVzb2x2ZSBVUkkgbWFwcGVycy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTdGF0ZVByb3ZpZGVyKCRzZXJ2aWNlTG9jYXRvcikge1xuXHR0aGlzLl91cmlNYXBwZXJzID0gZ2V0VXJpTWFwcGVycygkc2VydmljZUxvY2F0b3IpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgbGlzdCBvZiBVUkkgbWFwcGVycy5cbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblN0YXRlUHJvdmlkZXIucHJvdG90eXBlLl91cmlNYXBwZXJzID0gbnVsbDtcblxuLyoqXG4gKiBHZXRzIHN0YXRlIGJ5IHNwZWNpZmllZCBsb2NhdGlvbiBVUkkuXG4gKiBAcGFyYW0ge1VSSX0gbG9jYXRpb24gVVJJIGxvY2F0aW9uLlxuICogQHJldHVybnMge09iamVjdD99IFN0YXRlIG9iamVjdC5cbiAqL1xuU3RhdGVQcm92aWRlci5wcm90b3R5cGUuZ2V0U3RhdGVCeVVyaSA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuXHRpZiAodGhpcy5fdXJpTWFwcGVycy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxvY2F0aW9uID0gbG9jYXRpb24uY2xvbmUoKTtcblxuXHRsb2NhdGlvbi5wYXRoID0gcm91dGVIZWxwZXIucmVtb3ZlRW5kU2xhc2gobG9jYXRpb24ucGF0aCk7XG5cdHZhciBzdGF0ZSA9IGdldFN0YXRlKHRoaXMuX3VyaU1hcHBlcnMsIGxvY2F0aW9uKTtcblxuXHRpZiAoIXN0YXRlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBtYWtlIHN0YXRlIG9iamVjdCBpbW11dGFibGVcblx0T2JqZWN0LmtleXMoc3RhdGUpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0T2JqZWN0LmZyZWV6ZShzdGF0ZVtzdG9yZU5hbWVdKTtcblx0XHR9KTtcblx0T2JqZWN0LmZyZWV6ZShzdGF0ZSk7XG5cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBHZXRzIGxpc3Qgb2YgVVJJIG1hcHBlcnMuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBzZXJ2aWNlTG9jYXRvciBTZXJ2aWNlIGxvY2F0b3IgdG8gZ2V0IHJvdXRlXG4gKiBkZWZpbml0aW9ucy5cbiAqIEByZXR1cm5zIHtBcnJheX0gTGlzdCBvZiBVUkkgbWFwcGVycy5cbiAqL1xuZnVuY3Rpb24gZ2V0VXJpTWFwcGVycyhzZXJ2aWNlTG9jYXRvcikge1xuXHR2YXIgdXJpTWFwcGVycyA9IFtdO1xuXG5cdHNlcnZpY2VMb2NhdG9yLnJlc29sdmVBbGwoJ3JvdXRlRGVmaW5pdGlvbicpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG5cdFx0XHQvLyBqdXN0IGNvbG9uLXBhcmFtZXRyaXplZCBzdHJpbmdcblx0XHRcdGlmICh0eXBlb2YgKHJvdXRlKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dmFyIHJvdXRlVXJpID0gbmV3IFVSSShyb3V0ZSk7XG5cdFx0XHRcdHJvdXRlVXJpLnBhdGggPSByb3V0ZUhlbHBlci5yZW1vdmVFbmRTbGFzaChyb3V0ZVVyaS5wYXRoKTtcblx0XHRcdFx0dXJpTWFwcGVycy5wdXNoKHJvdXRlSGVscGVyLmNvbXBpbGVSb3V0ZShyb3V0ZVVyaSkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGV4dGVuZGVkIGNvbG9uLXBhcmFtZXRyaXplZCBtYXBwZXJcblx0XHRcdGlmICh0eXBlb2YgKHJvdXRlKSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0KHR5cGVvZiAocm91dGUuZXhwcmVzc2lvbikgPT09ICdzdHJpbmcnKSAmJlxuXHRcdFx0XHQocm91dGUubWFwIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG5cdFx0XHRcdHZhciBtYXBwZXJVcmkgPSBuZXcgVVJJKHJvdXRlLmV4cHJlc3Npb24pO1xuXHRcdFx0XHRtYXBwZXJVcmkucGF0aCA9IHJvdXRlSGVscGVyLnJlbW92ZUVuZFNsYXNoKG1hcHBlclVyaS5wYXRoKTtcblx0XHRcdFx0dmFyIG1hcHBlciA9IHJvdXRlSGVscGVyLmNvbXBpbGVSb3V0ZShtYXBwZXJVcmkpO1xuXHRcdFx0XHR1cmlNYXBwZXJzLnB1c2goe1xuXHRcdFx0XHRcdGV4cHJlc3Npb246IG1hcHBlci5leHByZXNzaW9uLFxuXHRcdFx0XHRcdG1hcDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdFx0XHRcdFx0dmFyIHN0YXRlID0gbWFwcGVyLm1hcCh1cmkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJvdXRlLm1hcChzdGF0ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyByZWd1bGFyIGV4cHJlc3Npb24gbWFwcGVyXG5cdFx0XHRpZiAodHlwZW9mIChyb3V0ZSkgPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdChyb3V0ZS5leHByZXNzaW9uIGluc3RhbmNlb2YgUmVnRXhwKSAmJlxuXHRcdFx0XHQocm91dGUubWFwIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG5cdFx0XHRcdHVyaU1hcHBlcnMucHVzaChyb3V0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdHJldHVybiB1cmlNYXBwZXJzO1xufVxuXG4vKipcbiAqIEdldHMgc3RhdGUuXG4gKiBAcGFyYW0ge0FycmF5fSB1cmlNYXBwZXJzIExpc3Qgb2YgVVJJIG1hcHBlcnMuXG4gKiBAcGFyYW0ge1VSSX0gbG9jYXRpb24gVVJJIHRoYXQgZGVzY3JpYmVzIHRoZSBzdGF0ZS5cbiAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gVGhlIHN0YXRlIGZyb20gVVJJLlxuICovXG5mdW5jdGlvbiBnZXRTdGF0ZSh1cmlNYXBwZXJzLCBsb2NhdGlvbikge1xuXHR2YXIgc3RhdGUgPSBudWxsO1xuXG5cdHVyaU1hcHBlcnMuc29tZShmdW5jdGlvbiAobWFwcGVyKSB7XG5cdFx0aWYgKG1hcHBlci5leHByZXNzaW9uLnRlc3QobG9jYXRpb24ucGF0aCkpIHtcblx0XHRcdHN0YXRlID0gbWFwcGVyLm1hcChsb2NhdGlvbikgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLmphZGUgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBtZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuICB2YXIgYWMgPSBhWydjbGFzcyddO1xuICB2YXIgYmMgPSBiWydjbGFzcyddO1xuXG4gIGlmIChhYyB8fCBiYykge1xuICAgIGFjID0gYWMgfHwgW107XG4gICAgYmMgPSBiYyB8fCBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWMpKSBhYyA9IFthY107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJjKSkgYmMgPSBbYmNdO1xuICAgIGFbJ2NsYXNzJ10gPSBhYy5jb25jYXQoYmMpLmZpbHRlcihudWxscyk7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgIT0gJ2NsYXNzJykge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgbnVsbCBgdmFsYHMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBudWxscyh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJyc7XG59XG5cbi8qKlxuICogam9pbiBhcnJheSBhcyBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuam9pbkNsYXNzZXMgPSBqb2luQ2xhc3NlcztcbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKHZhbCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbC5tYXAoam9pbkNsYXNzZXMpIDpcbiAgICAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSA/IE9iamVjdC5rZXlzKHZhbCkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbFtrZXldOyB9KSA6XG4gICAgW3ZhbF0pLmZpbHRlcihudWxscykuam9pbignICcpO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzXG4gKiBAcGFyYW0ge0FycmF5LjxCb29sZWFuPn0gZXNjYXBlZFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNscyA9IGZ1bmN0aW9uIGNscyhjbGFzc2VzLCBlc2NhcGVkKSB7XG4gIHZhciBidWYgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVzY2FwZWQgJiYgZXNjYXBlZFtpXSkge1xuICAgICAgYnVmLnB1c2goZXhwb3J0cy5lc2NhcGUoam9pbkNsYXNzZXMoW2NsYXNzZXNbaV1dKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWYucHVzaChqb2luQ2xhc3NlcyhjbGFzc2VzW2ldKSk7XG4gICAgfVxuICB9XG4gIHZhciB0ZXh0ID0gam9pbkNsYXNzZXMoYnVmKTtcbiAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcgY2xhc3M9XCInICsgdGV4dCArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5cbmV4cG9ydHMuc3R5bGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsKS5tYXAoZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICByZXR1cm4gc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdO1xuICAgIH0pLmpvaW4oJzsnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59O1xuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gZnVuY3Rpb24gYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgIHZhbCA9IGV4cG9ydHMuc3R5bGUodmFsKTtcbiAgfVxuICBpZiAoJ2Jvb2xlYW4nID09IHR5cGVvZiB2YWwgfHwgbnVsbCA9PSB2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSBlbHNlIGlmICgwID09IGtleS5pbmRleE9mKCdkYXRhJykgJiYgJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWwpLmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignU2luY2UgSmFkZSAyLjAuMCwgYW1wZXJzYW5kcyAoYCZgKSBpbiBkYXRhIGF0dHJpYnV0ZXMgJyArXG4gICAgICAgICAgICAgICAgICAgJ3dpbGwgYmUgZXNjYXBlZCB0byBgJmFtcDtgJyk7XG4gICAgfTtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIGVsaW1pbmF0ZSB0aGUgZG91YmxlIHF1b3RlcyBhcm91bmQgZGF0ZXMgaW4gJyArXG4gICAgICAgICAgICAgICAgICAgJ0lTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyBcIj0nXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpLnJlcGxhY2UoLycvZywgJyZhcG9zOycpICsgXCInXCI7XG4gIH0gZWxzZSBpZiAoZXNjYXBlZCkge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgc3RyaW5naWZ5IGRhdGVzIGluIElTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIGV4cG9ydHMuZXNjYXBlKHZhbCkgKyAnXCInO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgc3RyaW5naWZ5IGRhdGVzIGluIElTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gZXNjYXBlZFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gZnVuY3Rpb24gYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBidWYgPSBbXTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICAsIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PSBrZXkpIHtcbiAgICAgICAgaWYgKHZhbCA9IGpvaW5DbGFzc2VzKHZhbCkpIHtcbiAgICAgICAgICBidWYucHVzaCgnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYucHVzaChleHBvcnRzLmF0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYuam9pbignJyk7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGphZGVfZW5jb2RlX2h0bWxfcnVsZXMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7J1xufTtcbnZhciBqYWRlX21hdGNoX2h0bWwgPSAvWyY8PlwiXS9nO1xuXG5mdW5jdGlvbiBqYWRlX2VuY29kZV9jaGFyKGMpIHtcbiAgcmV0dXJuIGphZGVfZW5jb2RlX2h0bWxfcnVsZXNbY10gfHwgYztcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBqYWRlX2VzY2FwZTtcbmZ1bmN0aW9uIGphZGVfZXNjYXBlKGh0bWwpe1xuICB2YXIgcmVzdWx0ID0gU3RyaW5nKGh0bWwpLnJlcGxhY2UoamFkZV9tYXRjaF9odG1sLCBqYWRlX2VuY29kZV9jaGFyKTtcbiAgaWYgKHJlc3VsdCA9PT0gJycgKyBodG1sKSByZXR1cm4gaHRtbDtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBqYWRlIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBmdW5jdGlvbiByZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICByZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnSmFkZScpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuXG5leHBvcnRzLkRlYnVnSXRlbSA9IGZ1bmN0aW9uIERlYnVnSXRlbShsaW5lbm8sIGZpbGVuYW1lKSB7XG4gIHRoaXMubGluZW5vID0gbGluZW5vO1xuICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XG59XG5cbn0se1wiZnNcIjoyfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbn0se31dfSx7fSxbMV0pKDEpXG59KTsiLCIvLyBDcmVhdGUgYSByYW5nZSBvYmplY3QgZm9yIGVmZmljZW50bHkgcmVuZGVyaW5nIHN0cmluZ3MgdG8gZWxlbWVudHMuXG52YXIgcmFuZ2U7XG5cbnZhciB0ZXN0RWwgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IHt9O1xuXG4vLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcGF0cmljay1zdGVlbGUtaWRlbS9tb3JwaGRvbS9pc3N1ZXMvMzIgKElFNysgc3VwcG9ydClcbi8vIDw9SUU3IGRvZXMgbm90IHN1cHBvcnQgZWwuaGFzQXR0cmlidXRlKG5hbWUpXG52YXIgaGFzQXR0cmlidXRlO1xuaWYgKHRlc3RFbC5oYXNBdHRyaWJ1dGUpIHtcbiAgICBoYXNBdHRyaWJ1dGUgPSBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUoZWwsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShuYW1lKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBoYXNBdHRyaWJ1dGUgPSBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUoZWwsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZU5vZGUobmFtZSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHkobykge1xuICAgIGZvciAodmFyIGsgaW4gbykge1xuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB0b0VsZW1lbnQoc3RyKSB7XG4gICAgaWYgKCFyYW5nZSAmJiBkb2N1bWVudC5jcmVhdGVSYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50O1xuICAgIGlmIChyYW5nZSAmJiByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQpIHtcbiAgICAgICAgZnJhZ21lbnQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICAgICAgZnJhZ21lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgSUUuIEFwcGFyZW50bHkgSUUgZG9lc24ndCB0aGlua1xuICAgICAqIHRoYXQgXCJzZWxlY3RlZFwiIGlzIGFuIGF0dHJpYnV0ZSB3aGVuIHJlYWRpbmdcbiAgICAgKiBvdmVyIHRoZSBhdHRyaWJ1dGVzIHVzaW5nIHNlbGVjdEVsLmF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBPUFRJT046IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZiAoKGZyb21FbC5zZWxlY3RlZCA9IHRvRWwuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50XG4gICAgICogc2luY2UgaXQgc2V0cyB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIlxuICAgICAqIGF0dHJpYnV0ZSB3aXRob3V0IGNoYW5naW5nIHRoZSBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlXG4gICAgICogbm8gZWZmZWN0IHNpbmNlIGl0IGlzIG9ubHkgdXNlZCB0byB0aGUgc2V0IHRoZSBpbml0aWFsIHZhbHVlLlxuICAgICAqIFNpbWlsYXIgZm9yIHRoZSBcImNoZWNrZWRcIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgSU5QVVQ6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBmcm9tRWwuY2hlY2tlZCA9IHRvRWwuY2hlY2tlZDtcblxuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9IHRvRWwudmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0F0dHJpYnV0ZSh0b0VsLCAnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0F0dHJpYnV0ZSh0b0VsLCAndmFsdWUnKSkge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBURVhUQVJFQTogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21FbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBmcm9tRWwuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIExvb3Agb3ZlciBhbGwgb2YgdGhlIGF0dHJpYnV0ZXMgb24gdGhlIHRhcmdldCBub2RlIGFuZCBtYWtlIHN1cmUgdGhlXG4gKiBvcmlnaW5hbCBET00gbm9kZSBoYXMgdGhlIHNhbWUgYXR0cmlidXRlcy4gSWYgYW4gYXR0cmlidXRlXG4gKiBmb3VuZCBvbiB0aGUgb3JpZ2luYWwgbm9kZSBpcyBub3Qgb24gdGhlIG5ldyBub2RlIHRoZW4gcmVtb3ZlIGl0IGZyb21cbiAqIHRoZSBvcmlnaW5hbCBub2RlXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZnJvbU5vZGVcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSB0b05vZGVcbiAqL1xuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIGF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZvdW5kQXR0cnMgPSB7fTtcblxuICAgIGZvciAoaT1hdHRycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgaWYgKGF0dHIuc3BlY2lmaWVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgZm91bmRBdHRyc1thdHRyTmFtZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0IHdlcmVuJ3RcbiAgICAvLyBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgYXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yIChpPWF0dHJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IGF0dHJzW2ldO1xuICAgICAgICBpZiAoYXR0ci5zcGVjaWZpZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgICAgIGlmICghZm91bmRBdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENvcGllcyB0aGUgY2hpbGRyZW4gb2Ygb25lIERPTSBlbGVtZW50IHRvIGFub3RoZXIgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbW92ZUNoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICAgIHJldHVybiBub2RlLmlkO1xufVxuXG5mdW5jdGlvbiBtb3JwaGRvbShmcm9tTm9kZSwgdG9Ob2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIHNhdmVkRWxzID0ge307IC8vIFVzZWQgdG8gc2F2ZSBvZmYgRE9NIGVsZW1lbnRzIHdpdGggSURzXG4gICAgdmFyIHVubWF0Y2hlZEVscyA9IHt9O1xuICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgIHZhciBvbk5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU1vcnBoRWwgPSBvcHRpb25zLm9uQmVmb3JlTW9ycGhFbCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU1vcnBoRWxDaGlsZHJlbiA9IG9wdGlvbnMub25CZWZvcmVNb3JwaEVsQ2hpbGRyZW4gfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgY2hpbGRyZW5Pbmx5ID0gb3B0aW9ucy5jaGlsZHJlbk9ubHkgPT09IHRydWU7XG4gICAgdmFyIG1vdmVkRWxzID0gW107XG5cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlSGVscGVyKG5vZGUsIG5lc3RlZEluU2F2ZWRFbCkge1xuICAgICAgICB2YXIgaWQgPSBnZXROb2RlS2V5KG5vZGUpO1xuICAgICAgICAvLyBJZiB0aGUgbm9kZSBoYXMgYW4gSUQgdGhlbiBzYXZlIGl0IG9mZiBzaW5jZSB3ZSB3aWxsIHdhbnRcbiAgICAgICAgLy8gdG8gcmV1c2UgaXQgaW4gY2FzZSB0aGUgdGFyZ2V0IERPTSB0cmVlIGhhcyBhIERPTSBlbGVtZW50XG4gICAgICAgIC8vIHdpdGggdGhlIHNhbWUgSURcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBzYXZlZEVsc1tpZF0gPSBub2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFuZXN0ZWRJblNhdmVkRWwpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBub3QgbmVzdGVkIGluIGEgc2F2ZWQgZWxlbWVudCB0aGVuIHdlIGtub3cgdGhhdCB0aGlzIG5vZGUgaGFzIGJlZW5cbiAgICAgICAgICAgIC8vIGNvbXBsZXRlbHkgZGlzY2FyZGVkIGFuZCB3aWxsIG5vdCBleGlzdCBpbiB0aGUgZmluYWwgRE9NLlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZUhlbHBlcihjdXJDaGlsZCwgbmVzdGVkSW5TYXZlZEVsIHx8IGlkKTtcbiAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKCFnZXROb2RlS2V5KGN1ckNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gaGFuZGxlIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSBhbiBJRCB0byBhdm9pZCBkb3VibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Fsa2luZyB0aGUgc2FtZSBzYXZlZCBlbGVtZW50LlxuXG4gICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgYWxyZWFkeVZpc2l0ZWQpIHtcbiAgICAgICAgaWYgKG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIGlmIChhbHJlYWR5VmlzaXRlZCkge1xuICAgICAgICAgICAgaWYgKCFnZXROb2RlS2V5KG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlTm9kZUhlbHBlcihub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBhbHJlYWR5VmlzaXRlZCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcbiAgICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgICAgIC8vIElmIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBpcyBiZWluZyBtb3JwaGVkIHRoZW4gaXQgaXMgd2lsbCBiZSBpbiB0aGUgZmluYWxcbiAgICAgICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGRlbGV0ZSBzYXZlZEVsc1t0b0VsS2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVNb3JwaEVsKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG5cbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU1vcnBoRWxDaGlsZHJlbihmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tRWwudGFnTmFtZSAhPSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUlkO1xuXG4gICAgICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgdmFyIHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgc2F2ZWRFbDtcbiAgICAgICAgICAgIHZhciB1bm1hdGNoZWRFbDtcblxuICAgICAgICAgICAgb3V0ZXI6IHdoaWxlKGN1clRvTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdG9OZXh0U2libGluZyA9IGN1clRvTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1clRvTm9kZUlkID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUlkID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFscmVhZHlWaXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVJZCAmJiAodW5tYXRjaGVkRWwgPSB1bm1hdGNoZWRFbHNbY3VyRnJvbU5vZGVJZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkRWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY3VyRnJvbU5vZGVDaGlsZCwgdW5tYXRjaGVkRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgdW5tYXRjaGVkRWwsIGFscmVhZHlWaXNpdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gMSkgeyAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBFbGVtZW50IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQudGFnTmFtZSA9PT0gY3VyVG9Ob2RlQ2hpbGQudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUlkIHx8IGN1clRvTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBlaXRoZXIgRE9NIGVsZW1lbnQgaGFzIGFuIElEIHRoZW4gd2UgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aG9zZSBkaWZmZXJlbnRseSBzaW5jZSB3ZSB3YW50IHRvIG1hdGNoIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBieSBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUlkID09PSBjdXJGcm9tTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybSB0aGUgY3VycmVudCBcImZyb21cIiBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG1hdGNoIHRoZSBjdXJyZW50IHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCwgYWxyZWFkeVZpc2l0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSAzKSB7IC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIFRleHQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZmluZCBhIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET01cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIGFscmVhZHlWaXNpdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzYXZlZEVsID0gc2F2ZWRFbHNbY3VyVG9Ob2RlSWRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChzYXZlZEVsLCBjdXJUb05vZGVDaGlsZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHNhdmVkRWw7IC8vIFdlIHdhbnQgdG8gYXBwZW5kIHRoZSBzYXZlZCBlbGVtZW50IGluc3RlYWRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IERPTSBlbGVtZW50IGluIHRoZSB0YXJnZXQgdHJlZSBoYXMgYW4gSURcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBkaWQgbm90IGZpbmQgYSBtYXRjaCBpbiBhbnkgb2YgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpYmxpbmdzLiBXZSBqdXN0IHB1dCB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIG9sZCBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGlmIHdlIGxhdGVyIGZpbmQgYW4gZWxlbWVudCBpbiB0aGUgb2xkIERPTSB0cmVlIHRoYXQgaGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIG1hdGNoaW5nIElEIHRoZW4gd2Ugd2lsbCByZXBsYWNlIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgY29ycmVzcG9uZGluZyBvbGQgZWxlbWVudCBhbmQgbW9ycGggdGhlIG9sZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB1bm1hdGNoZWRFbHNbY3VyVG9Ob2RlSWRdID0gY3VyVG9Ob2RlQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yIG91ciBcInRvIG5vZGVcIlxuICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIiBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3RcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0byBub2RlXCIgdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUgPT09IDEgJiYgKGN1clRvTm9kZUlkIHx8IGN1clRvTm9kZUNoaWxkLmZpcnN0Q2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IHRoYXQgd2FzIGp1c3QgYWRkZWQgdG8gdGhlIG9yaWdpbmFsIERPTSBtYXkgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAvLyBzb21lIG5lc3RlZCBlbGVtZW50cyB3aXRoIGEga2V5L0lEIHRoYXQgbmVlZHMgdG8gYmUgbWF0Y2hlZCB1cFxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIG90aGVyIGVsZW1lbnRzLiBXZSdsbCBhZGQgdGhlIGVsZW1lbnQgdG8gYSBsaXN0IHNvIHRoYXQgd2VcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuIGxhdGVyIHByb2Nlc3MgdGhlIG5lc3RlZCBlbGVtZW50cyBpZiB0aGVyZSBhcmUgYW55IHVubWF0Y2hlZFxuICAgICAgICAgICAgICAgICAgICAvLyBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgZGlzY2FyZGVkXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkRWxzLnB1c2goY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpcyBub24tbnVsbCB0aGVuXG4gICAgICAgICAgICAvLyB3ZSBzdGlsbCBoYXZlIHNvbWUgZnJvbSBub2RlcyBsZWZ0IG92ZXIgdGhhdCBuZWVkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCBhbHJlYWR5VmlzaXRlZCk7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLnRhZ05hbWVdO1xuICAgICAgICBpZiAoc3BlY2lhbEVsSGFuZGxlcikge1xuICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgICB9XG4gICAgfSAvLyBFTkQ6IG1vcnBoRWwoLi4uKVxuXG4gICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgIHZhciB0b05vZGVUeXBlID0gdG9Ob2RlLm5vZGVUeXBlO1xuXG4gICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgICAvLyBjb21wYXRpYmxlIChlLmcuIDxkaXY+IC0tPiA8c3Bhbj4gb3IgPGRpdj4gLS0+IFRFWFQpXG4gICAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21Ob2RlLnRhZ05hbWUgIT09IHRvTm9kZS50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW92ZUNoaWxkcmVuKGZyb21Ob2RlLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvTm9kZS50YWdOYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBHb2luZyBmcm9tIGFuIGVsZW1lbnQgbm9kZSB0byBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gMykgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRleHQgbm9kZSB0byBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgICAgLy8gVGhlIFwidG8gbm9kZVwiIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBcImZyb20gbm9kZVwiXG4gICAgICAgIC8vIHNvIHdlIGhhZCB0byB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgZmFsc2UsIGNoaWxkcmVuT25seSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoYXQgd2Ugd2lsbCBkbyBoZXJlIGlzIHdhbGsgdGhlIHRyZWUgZm9yIHRoZSBET00gZWxlbWVudFxuICAgICAgICAgKiB0aGF0IHdhcyBtb3ZlZCBmcm9tIHRoZSB0YXJnZXQgRE9NIHRyZWUgdG8gdGhlIG9yaWdpbmFsXG4gICAgICAgICAqIERPTSB0cmVlIGFuZCB3ZSB3aWxsIGxvb2sgZm9yIGtleWVkIGVsZW1lbnRzIHRoYXQgY291bGRcbiAgICAgICAgICogYmUgbWF0Y2hlZCB0byBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgZWFybGllciBkaXNjYXJkZWQuXG4gICAgICAgICAqIElmIHdlIGZpbmQgYSBtYXRjaCB0aGVuIHdlIHdpbGwgbW92ZSB0aGUgc2F2ZWQgZWxlbWVudFxuICAgICAgICAgKiBpbnRvIHRoZSBmaW5hbCBET00gdHJlZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZU1vdmVkRWwgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2F2ZWRFbCA9IHNhdmVkRWxzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXZlZEVsICYmIChjdXJDaGlsZC50YWdOYW1lID09PSBzYXZlZEVsLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzYXZlZEVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHNhdmVkRWwsIGN1ckNoaWxkLCB0cnVlIC8qIGFscmVhZHkgdmlzaXRlZCB0aGUgc2F2ZWQgZWwgdHJlZSAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtcHR5KHNhdmVkRWxzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNoaWxkLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdmVkRWwoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVGhlIGxvb3AgYmVsb3cgaXMgdXNlZCB0byBwb3NzaWJseSBtYXRjaCB1cCBhbnkgZGlzY2FyZGVkXG4gICAgICAgIC8vIGVsZW1lbnRzIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZSB3aXRoIGVsZW1lbmV0cyBmcm9tIHRoZVxuICAgICAgICAvLyB0YXJnZXQgdHJlZSB0aGF0IHdlcmUgbW92ZWQgb3ZlciB3aXRob3V0IHZpc2l0aW5nIHRoZWlyXG4gICAgICAgIC8vIGNoaWxkcmVuXG4gICAgICAgIGlmICghZW1wdHkoc2F2ZWRFbHMpKSB7XG4gICAgICAgICAgICBoYW5kbGVNb3ZlZEVsc0xvb3A6XG4gICAgICAgICAgICB3aGlsZSAobW92ZWRFbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vdmVkRWxzVGVtcCA9IG1vdmVkRWxzO1xuICAgICAgICAgICAgICAgIG1vdmVkRWxzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG1vdmVkRWxzVGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTW92ZWRFbChtb3ZlZEVsc1RlbXBbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIG1vcmUgdW5tYXRjaGVkIGVsZW1lbnRzIHNvIGNvbXBsZXRlbHkgZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgaGFuZGxlTW92ZWRFbHNMb29wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0aGUgXCJvbk5vZGVEaXNjYXJkZWRcIiBldmVudCBmb3IgYW55IHNhdmVkIGVsZW1lbnRzXG4gICAgICAgIC8vIHRoYXQgbmV2ZXIgZm91bmQgYSBuZXcgaG9tZSBpbiB0aGUgbW9ycGhlZCBET01cbiAgICAgICAgZm9yICh2YXIgc2F2ZWRFbElkIGluIHNhdmVkRWxzKSB7XG4gICAgICAgICAgICBpZiAoc2F2ZWRFbHMuaGFzT3duUHJvcGVydHkoc2F2ZWRFbElkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzYXZlZEVsID0gc2F2ZWRFbHNbc2F2ZWRFbElkXTtcbiAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoc2F2ZWRFbCk7XG4gICAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoc2F2ZWRFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAvLyBJZiB3ZSBoYWQgdG8gc3dhcCBvdXQgdGhlIGZyb20gbm9kZSB3aXRoIGEgbmV3IG5vZGUgYmVjYXVzZSB0aGUgb2xkXG4gICAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgICAgLy8gcG9zc2libGUgaWYgdGhlIG9yaWdpbmFsIERPTSBub2RlIHdhcyBwYXJ0IG9mIGEgRE9NIHRyZWUgd2hpY2hcbiAgICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9ycGhkb207XG4iLCIvKmpzaGludCBub2RlOnRydWUgKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1pbmltYWxEZXNjID0gWydoJywgJ21pbicsICdzJywgJ21zJywgJ868cycsICducyddO1xyXG52YXIgdmVyYm9zZURlc2MgPSBbJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCcsICdtaWNyb3NlY29uZCcsICduYW5vc2Vjb25kJ107XHJcbnZhciBjb252ZXJ0ID0gWzYwKjYwLCA2MCwgMSwgMWU2LCAxZTMsIDFdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc291cmNlLCBvcHRzKSB7XHJcblx0dmFyIHZlcmJvc2UsIHByZWNpc2UsIGksIHNwb3QsIHNvdXJjZUF0U3RlcCwgdmFsQXRTdGVwLCBkZWNpbWFscywgc3RyQXRTdGVwLCByZXN1bHRzLCB0b3RhbFNlY29uZHM7XHJcblxyXG5cdHZlcmJvc2UgPSBmYWxzZTtcclxuXHRwcmVjaXNlID0gZmFsc2U7XHJcblx0aWYgKG9wdHMpIHtcclxuXHRcdHZlcmJvc2UgPSBvcHRzLnZlcmJvc2UgfHwgZmFsc2U7XHJcblx0XHRwcmVjaXNlID0gb3B0cy5wcmVjaXNlIHx8IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZSkgfHwgc291cmNlLmxlbmd0aCAhPT0gMikge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHRpZiAodHlwZW9mIHNvdXJjZVswXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHNvdXJjZVsxXSAhPT0gJ251bWJlcicpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdC8vIG5vcm1hbGl6ZSBzb3VyY2UgYXJyYXkgZHVlIHRvIGNoYW5nZXMgaW4gbm9kZSB2NS40K1xyXG5cdGlmIChzb3VyY2VbMV0gPCAwKSB7XHJcblx0XHR0b3RhbFNlY29uZHMgPSBzb3VyY2VbMF0gKyBzb3VyY2VbMV0gLyAxZTk7XHJcblx0XHRzb3VyY2VbMF0gPSBwYXJzZUludCh0b3RhbFNlY29uZHMpO1xyXG5cdFx0c291cmNlWzFdID0gcGFyc2VGbG9hdCgodG90YWxTZWNvbmRzICUgMSkudG9QcmVjaXNpb24oOSkpICogMWU5O1xyXG5cdH1cclxuXHJcblx0cmVzdWx0cyA9ICcnO1xyXG5cclxuXHQvLyBmb3JlYWNoIHVuaXRcclxuXHRmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcblx0XHRzcG90ID0gaSA8IDMgPyAwIDogMTsgLy8gZ3JhYmJpbmcgZmlyc3Qgb3Igc2Vjb25kIHNwb3QgaW4gc291cmNlIGFycmF5XHJcblx0XHRzb3VyY2VBdFN0ZXAgPSBzb3VyY2Vbc3BvdF07XHJcblx0XHRpZiAoaSAhPT0gMyAmJiBpICE9PSAwKSB7XHJcblx0XHRcdHNvdXJjZUF0U3RlcCA9IHNvdXJjZUF0U3RlcCAlIGNvbnZlcnRbaS0xXTsgLy8gdHJpbSBvZmYgcHJldmlvdXMgcG9ydGlvbnNcclxuXHRcdH1cclxuXHRcdGlmIChpID09PSAyKSB7XHJcblx0XHRcdHNvdXJjZUF0U3RlcCArPSBzb3VyY2VbMV0vMWU5OyAvLyBnZXQgcGFydGlhbCBzZWNvbmRzIGZyb20gb3RoZXIgcG9ydGlvbiBvZiB0aGUgYXJyYXlcclxuXHRcdH1cclxuXHRcdHZhbEF0U3RlcCA9IHNvdXJjZUF0U3RlcCAvIGNvbnZlcnRbaV07IC8vIHZhbCBhdCB0aGlzIHVuaXRcclxuXHRcdGlmICh2YWxBdFN0ZXAgPj0gMSkge1xyXG5cdFx0XHRpZiAodmVyYm9zZSkge1xyXG5cdFx0XHRcdHZhbEF0U3RlcCA9IE1hdGguZmxvb3IodmFsQXRTdGVwKTsgLy8gZGVhbCBpbiB3aG9sZSB1bml0cywgc3Vic2VxdWVudCBsYXBzIHdpbGwgZ2V0IHRoZSBkZWNpbWFsIHBvcnRpb25cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXByZWNpc2UpIHtcclxuXHRcdFx0XHQvLyBkb24ndCBmbGluZyB0b28gbWFueSBkZWNpbWFsc1xyXG5cdFx0XHRcdGRlY2ltYWxzID0gdmFsQXRTdGVwID49IDEwID8gMCA6IDI7XHJcblx0XHRcdFx0c3RyQXRTdGVwID0gdmFsQXRTdGVwLnRvRml4ZWQoZGVjaW1hbHMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHN0ckF0U3RlcCA9IHZhbEF0U3RlcC50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdHJBdFN0ZXAuaW5kZXhPZignLicpID4gLTEgJiYgc3RyQXRTdGVwW3N0ckF0U3RlcC5sZW5ndGgtMV0gPT09ICcwJykge1xyXG5cdFx0XHRcdHN0ckF0U3RlcCA9IHN0ckF0U3RlcC5yZXBsYWNlKC9cXC4/MCskLywnJyk7IC8vIHJlbW92ZSB0cmFpbGluZyB6ZXJvc1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChyZXN1bHRzKSB7XHJcblx0XHRcdFx0cmVzdWx0cyArPSAnICc7IC8vIGFwcGVuZCBzcGFjZSBpZiB3ZSBoYXZlIGEgcHJldmlvdXMgdmFsdWVcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXN1bHRzICs9IHN0ckF0U3RlcDsgLy8gYXBwZW5kIHRoZSB2YWx1ZVxyXG5cdFx0XHQvLyBhcHBlbmQgdW5pdHNcclxuXHRcdFx0aWYgKHZlcmJvc2UpIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9ICcgJyt2ZXJib3NlRGVzY1tpXTtcclxuXHRcdFx0XHRpZiAoc3RyQXRTdGVwICE9PSAnMScpIHtcclxuXHRcdFx0XHRcdHJlc3VsdHMgKz0gJ3MnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9ICcgJyttaW5pbWFsRGVzY1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXZlcmJvc2UpIHtcclxuXHRcdFx0XHRicmVhazsgLy8gdmVyYm9zZSBnZXRzIGFzIG1hbnkgZ3JvdXBzIGFzIG5lY2Vzc2FyeSwgdGhlIHJlc3QgZ2V0IG9ubHkgb25lXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc2FwID0gcmVxdWlyZSgnYXNhcC9yYXcnKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFN0YXRlczpcbi8vXG4vLyAwIC0gcGVuZGluZ1xuLy8gMSAtIGZ1bGZpbGxlZCB3aXRoIF92YWx1ZVxuLy8gMiAtIHJlamVjdGVkIHdpdGggX3ZhbHVlXG4vLyAzIC0gYWRvcHRlZCB0aGUgc3RhdGUgb2YgYW5vdGhlciBwcm9taXNlLCBfdmFsdWVcbi8vXG4vLyBvbmNlIHRoZSBzdGF0ZSBpcyBubyBsb25nZXIgcGVuZGluZyAoMCkgaXQgaXMgaW1tdXRhYmxlXG5cbi8vIEFsbCBgX2AgcHJlZml4ZWQgcHJvcGVydGllcyB3aWxsIGJlIHJlZHVjZWQgdG8gYF97cmFuZG9tIG51bWJlcn1gXG4vLyBhdCBidWlsZCB0aW1lIHRvIG9iZnVzY2F0ZSB0aGVtIGFuZCBkaXNjb3VyYWdlIHRoZWlyIHVzZS5cbi8vIFdlIGRvbid0IHVzZSBzeW1ib2xzIG9yIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0byBmdWxseSBoaWRlIHRoZW1cbi8vIGJlY2F1c2UgdGhlIHBlcmZvcm1hbmNlIGlzbid0IGdvb2QgZW5vdWdoLlxuXG5cbi8vIHRvIGF2b2lkIHVzaW5nIHRyeS9jYXRjaCBpbnNpZGUgY3JpdGljYWwgZnVuY3Rpb25zLCB3ZVxuLy8gZXh0cmFjdCB0aGVtIHRvIGhlcmUuXG52YXIgTEFTVF9FUlJPUiA9IG51bGw7XG52YXIgSVNfRVJST1IgPSB7fTtcbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG9iai50aGVuO1xuICB9IGNhdGNoIChleCkge1xuICAgIExBU1RfRVJST1IgPSBleDtcbiAgICByZXR1cm4gSVNfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5Q2FsbE9uZShmbiwgYSkge1xuICB0cnkge1xuICAgIHJldHVybiBmbihhKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBMQVNUX0VSUk9SID0gZXg7XG4gICAgcmV0dXJuIElTX0VSUk9SO1xuICB9XG59XG5mdW5jdGlvbiB0cnlDYWxsVHdvKGZuLCBhLCBiKSB7XG4gIHRyeSB7XG4gICAgZm4oYSwgYik7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgTEFTVF9FUlJPUiA9IGV4O1xuICAgIHJldHVybiBJU19FUlJPUjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICB9XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuXzQ1ID0gMDtcbiAgdGhpcy5fODEgPSAwO1xuICB0aGlzLl82NSA9IG51bGw7XG4gIHRoaXMuXzU0ID0gbnVsbDtcbiAgaWYgKGZuID09PSBub29wKSByZXR1cm47XG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5Qcm9taXNlLl8xMCA9IG51bGw7XG5Qcm9taXNlLl85NyA9IG51bGw7XG5Qcm9taXNlLl82MSA9IG5vb3A7XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICBpZiAodGhpcy5jb25zdHJ1Y3RvciAhPT0gUHJvbWlzZSkge1xuICAgIHJldHVybiBzYWZlVGhlbih0aGlzLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gIH1cbiAgdmFyIHJlcyA9IG5ldyBQcm9taXNlKG5vb3ApO1xuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlcykpO1xuICByZXR1cm4gcmVzO1xufTtcblxuZnVuY3Rpb24gc2FmZVRoZW4oc2VsZiwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIG5ldyBzZWxmLmNvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVzID0gbmV3IFByb21pc2Uobm9vcCk7XG4gICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICBoYW5kbGUoc2VsZiwgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlcykpO1xuICB9KTtcbn07XG5mdW5jdGlvbiBoYW5kbGUoc2VsZiwgZGVmZXJyZWQpIHtcbiAgd2hpbGUgKHNlbGYuXzgxID09PSAzKSB7XG4gICAgc2VsZiA9IHNlbGYuXzY1O1xuICB9XG4gIGlmIChQcm9taXNlLl8xMCkge1xuICAgIFByb21pc2UuXzEwKHNlbGYpO1xuICB9XG4gIGlmIChzZWxmLl84MSA9PT0gMCkge1xuICAgIGlmIChzZWxmLl80NSA9PT0gMCkge1xuICAgICAgc2VsZi5fNDUgPSAxO1xuICAgICAgc2VsZi5fNTQgPSBkZWZlcnJlZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGYuXzQ1ID09PSAxKSB7XG4gICAgICBzZWxmLl80NSA9IDI7XG4gICAgICBzZWxmLl81NCA9IFtzZWxmLl81NCwgZGVmZXJyZWRdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxmLl81NC5wdXNoKGRlZmVycmVkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaGFuZGxlUmVzb2x2ZWQoc2VsZiwgZGVmZXJyZWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNvbHZlZChzZWxmLCBkZWZlcnJlZCkge1xuICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYiA9IHNlbGYuXzgxID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgaWYgKHNlbGYuXzgxID09PSAxKSB7XG4gICAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fNjUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIHNlbGYuXzY1KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldCA9IHRyeUNhbGxPbmUoY2IsIHNlbGYuXzY1KTtcbiAgICBpZiAocmV0ID09PSBJU19FUlJPUikge1xuICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIExBU1RfRVJST1IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKSB7XG4gICAgcmV0dXJuIHJlamVjdChcbiAgICAgIHNlbGYsXG4gICAgICBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpXG4gICAgKTtcbiAgfVxuICBpZiAoXG4gICAgbmV3VmFsdWUgJiZcbiAgICAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICkge1xuICAgIHZhciB0aGVuID0gZ2V0VGhlbihuZXdWYWx1ZSk7XG4gICAgaWYgKHRoZW4gPT09IElTX0VSUk9SKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KHNlbGYsIExBU1RfRVJST1IpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGVuID09PSBzZWxmLnRoZW4gJiZcbiAgICAgIG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZVxuICAgICkge1xuICAgICAgc2VsZi5fODEgPSAzO1xuICAgICAgc2VsZi5fNjUgPSBuZXdWYWx1ZTtcbiAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkb1Jlc29sdmUodGhlbi5iaW5kKG5ld1ZhbHVlKSwgc2VsZik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNlbGYuXzgxID0gMTtcbiAgc2VsZi5fNjUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgc2VsZi5fODEgPSAyO1xuICBzZWxmLl82NSA9IG5ld1ZhbHVlO1xuICBpZiAoUHJvbWlzZS5fOTcpIHtcbiAgICBQcm9taXNlLl85NyhzZWxmLCBuZXdWYWx1ZSk7XG4gIH1cbiAgZmluYWxlKHNlbGYpO1xufVxuZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcbiAgaWYgKHNlbGYuXzQ1ID09PSAxKSB7XG4gICAgaGFuZGxlKHNlbGYsIHNlbGYuXzU0KTtcbiAgICBzZWxmLl81NCA9IG51bGw7XG4gIH1cbiAgaWYgKHNlbGYuXzQ1ID09PSAyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl81NC5sZW5ndGg7IGkrKykge1xuICAgICAgaGFuZGxlKHNlbGYsIHNlbGYuXzU0W2ldKTtcbiAgICB9XG4gICAgc2VsZi5fNTQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2Upe1xuICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xufVxuXG4vKipcbiAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gKi9cbmZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgcHJvbWlzZSkge1xuICB2YXIgZG9uZSA9IGZhbHNlO1xuICB2YXIgcmVzID0gdHJ5Q2FsbFR3byhmbiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIH0pXG4gIGlmICghZG9uZSAmJiByZXMgPT09IElTX0VSUk9SKSB7XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHByb21pc2UsIExBU1RfRVJST1IpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdmFyIHNlbGYgPSBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50aGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0aGlzO1xuICBzZWxmLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0sIDApO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBFUzYgZXh0ZW5zaW9ucyB0byB0aGUgY29yZSBQcm9taXNlcy9BKyBBUElcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG4vKiBTdGF0aWMgRnVuY3Rpb25zICovXG5cbnZhciBUUlVFID0gdmFsdWVQcm9taXNlKHRydWUpO1xudmFyIEZBTFNFID0gdmFsdWVQcm9taXNlKGZhbHNlKTtcbnZhciBOVUxMID0gdmFsdWVQcm9taXNlKG51bGwpO1xudmFyIFVOREVGSU5FRCA9IHZhbHVlUHJvbWlzZSh1bmRlZmluZWQpO1xudmFyIFpFUk8gPSB2YWx1ZVByb21pc2UoMCk7XG52YXIgRU1QVFlTVFJJTkcgPSB2YWx1ZVByb21pc2UoJycpO1xuXG5mdW5jdGlvbiB2YWx1ZVByb21pc2UodmFsdWUpIHtcbiAgdmFyIHAgPSBuZXcgUHJvbWlzZShQcm9taXNlLl82MSk7XG4gIHAuXzgxID0gMTtcbiAgcC5fNjUgPSB2YWx1ZTtcbiAgcmV0dXJuIHA7XG59XG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIHZhbHVlO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIE5VTEw7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gVU5ERUZJTkVEO1xuICBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBUUlVFO1xuICBpZiAodmFsdWUgPT09IGZhbHNlKSByZXR1cm4gRkFMU0U7XG4gIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuIFpFUk87XG4gIGlmICh2YWx1ZSA9PT0gJycpIHJldHVybiBFTVBUWVNUUklORztcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHRoZW4gPSB2YWx1ZS50aGVuO1xuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh0aGVuLmJpbmQodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVQcm9taXNlKHZhbHVlKTtcbn07XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24gKGFycikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsLnRoZW4gPT09IFByb21pc2UucHJvdG90eXBlLnRoZW4pIHtcbiAgICAgICAgICB3aGlsZSAodmFsLl84MSA9PT0gMykge1xuICAgICAgICAgICAgdmFsID0gdmFsLl82NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbC5fODEgPT09IDEpIHJldHVybiByZXMoaSwgdmFsLl82NSk7XG4gICAgICAgICAgaWYgKHZhbC5fODEgPT09IDIpIHJlamVjdCh2YWwuXzY1KTtcbiAgICAgICAgICB2YWwudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZSh0aGVuLmJpbmQodmFsKSk7XG4gICAgICAgICAgICBwLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qIFByb3RvdHlwZSBNZXRob2RzICovXG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZigpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZigpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xucmVxdWlyZSgnLi9kb25lLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbmFsbHkuanMnKTtcbnJlcXVpcmUoJy4vZXM2LWV4dGVuc2lvbnMuanMnKTtcbnJlcXVpcmUoJy4vbm9kZS1leHRlbnNpb25zLmpzJyk7XG5yZXF1aXJlKCcuL3N5bmNocm9ub3VzLmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFRoaXMgZmlsZSBjb250YWlucyB0aGVuL3Byb21pc2Ugc3BlY2lmaWMgZXh0ZW5zaW9ucyB0aGF0IGFyZSBvbmx5IHVzZWZ1bFxuLy8gZm9yIG5vZGUuanMgaW50ZXJvcFxuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuLyogU3RhdGljIEZ1bmN0aW9ucyAqL1xuXG5Qcm9taXNlLmRlbm9kZWlmeSA9IGZ1bmN0aW9uIChmbiwgYXJndW1lbnRDb3VudCkge1xuICBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50Q291bnQgPT09ICdudW1iZXInICYmIGFyZ3VtZW50Q291bnQgIT09IEluZmluaXR5XG4gICkge1xuICAgIHJldHVybiBkZW5vZGVpZnlXaXRoQ291bnQoZm4sIGFyZ3VtZW50Q291bnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkZW5vZGVpZnlXaXRob3V0Q291bnQoZm4pO1xuICB9XG59XG5cbnZhciBjYWxsYmFja0ZuID0gKFxuICAnZnVuY3Rpb24gKGVyciwgcmVzKSB7JyArXG4gICdpZiAoZXJyKSB7IHJqKGVycik7IH0gZWxzZSB7IHJzKHJlcyk7IH0nICtcbiAgJ30nXG4pO1xuZnVuY3Rpb24gZGVub2RlaWZ5V2l0aENvdW50KGZuLCBhcmd1bWVudENvdW50KSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRDb3VudDsgaSsrKSB7XG4gICAgYXJncy5wdXNoKCdhJyArIGkpO1xuICB9XG4gIHZhciBib2R5ID0gW1xuICAgICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBhcmdzLmpvaW4oJywnKSArICcpIHsnLFxuICAgICd2YXIgc2VsZiA9IHRoaXM7JyxcbiAgICAncmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChycywgcmopIHsnLFxuICAgICd2YXIgcmVzID0gZm4uY2FsbCgnLFxuICAgIFsnc2VsZiddLmNvbmNhdChhcmdzKS5jb25jYXQoW2NhbGxiYWNrRm5dKS5qb2luKCcsJyksXG4gICAgJyk7JyxcbiAgICAnaWYgKHJlcyAmJicsXG4gICAgJyh0eXBlb2YgcmVzID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXMgPT09IFwiZnVuY3Rpb25cIikgJiYnLFxuICAgICd0eXBlb2YgcmVzLnRoZW4gPT09IFwiZnVuY3Rpb25cIicsXG4gICAgJykge3JzKHJlcyk7fScsXG4gICAgJ30pOycsXG4gICAgJ307J1xuICBdLmpvaW4oJycpO1xuICByZXR1cm4gRnVuY3Rpb24oWydQcm9taXNlJywgJ2ZuJ10sIGJvZHkpKFByb21pc2UsIGZuKTtcbn1cbmZ1bmN0aW9uIGRlbm9kZWlmeVdpdGhvdXRDb3VudChmbikge1xuICB2YXIgZm5MZW5ndGggPSBNYXRoLm1heChmbi5sZW5ndGggLSAxLCAzKTtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbkxlbmd0aDsgaSsrKSB7XG4gICAgYXJncy5wdXNoKCdhJyArIGkpO1xuICB9XG4gIHZhciBib2R5ID0gW1xuICAgICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBhcmdzLmpvaW4oJywnKSArICcpIHsnLFxuICAgICd2YXIgc2VsZiA9IHRoaXM7JyxcbiAgICAndmFyIGFyZ3M7JyxcbiAgICAndmFyIGFyZ0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7JyxcbiAgICAnaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAnICsgZm5MZW5ndGggKyAnKSB7JyxcbiAgICAnYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoICsgMSk7JyxcbiAgICAnZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsnLFxuICAgICdhcmdzW2ldID0gYXJndW1lbnRzW2ldOycsXG4gICAgJ30nLFxuICAgICd9JyxcbiAgICAncmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChycywgcmopIHsnLFxuICAgICd2YXIgY2IgPSAnICsgY2FsbGJhY2tGbiArICc7JyxcbiAgICAndmFyIHJlczsnLFxuICAgICdzd2l0Y2ggKGFyZ0xlbmd0aCkgeycsXG4gICAgYXJncy5jb25jYXQoWydleHRyYSddKS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnY2FzZSAnICsgKGluZGV4KSArICc6JyArXG4gICAgICAgICdyZXMgPSBmbi5jYWxsKCcgKyBbJ3NlbGYnXS5jb25jYXQoYXJncy5zbGljZSgwLCBpbmRleCkpLmNvbmNhdCgnY2InKS5qb2luKCcsJykgKyAnKTsnICtcbiAgICAgICAgJ2JyZWFrOydcbiAgICAgICk7XG4gICAgfSkuam9pbignJyksXG4gICAgJ2RlZmF1bHQ6JyxcbiAgICAnYXJnc1thcmdMZW5ndGhdID0gY2I7JyxcbiAgICAncmVzID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7JyxcbiAgICAnfScsXG4gICAgXG4gICAgJ2lmIChyZXMgJiYnLFxuICAgICcodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVzID09PSBcImZ1bmN0aW9uXCIpICYmJyxcbiAgICAndHlwZW9mIHJlcy50aGVuID09PSBcImZ1bmN0aW9uXCInLFxuICAgICcpIHtycyhyZXMpO30nLFxuICAgICd9KTsnLFxuICAgICd9OydcbiAgXS5qb2luKCcnKTtcblxuICByZXR1cm4gRnVuY3Rpb24oXG4gICAgWydQcm9taXNlJywgJ2ZuJ10sXG4gICAgYm9keVxuICApKFByb21pc2UsIGZuKTtcbn1cblxuUHJvbWlzZS5ub2RlaWZ5ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBjYWxsYmFjayA9XG4gICAgICB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nID8gYXJncy5wb3AoKSA6IG51bGw7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLm5vZGVpZnkoY2FsbGJhY2ssIGN0eCk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsbGJhY2sgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBleCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLm5vZGVpZnkgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGN0eCkge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHJldHVybiB0aGlzO1xuXG4gIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBudWxsLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5lbmFibGVTeW5jaHJvbm91cyA9IGZ1bmN0aW9uICgpIHtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNQZW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGUoKSA9PSAwO1xuICB9O1xuXG4gIFByb21pc2UucHJvdG90eXBlLmlzRnVsZmlsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGUoKSA9PSAxO1xuICB9O1xuXG4gIFByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpID09IDI7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuXzgxID09PSAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fNjUuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGEgdmFsdWUgb2YgYW4gdW5mdWxmaWxsZWQgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fNjU7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0UmVhc29uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl84MSA9PT0gMykge1xuICAgICAgcmV0dXJuIHRoaXMuXzY1LmdldFJlYXNvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBhIHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fNjU7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuXzgxID09PSAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fNjUuZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuXzgxID09PSAtMSB8fCB0aGlzLl84MSA9PT0gLTIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl84MTtcbiAgfTtcbn07XG5cblByb21pc2UuZGlzYWJsZVN5bmNocm9ub3VzID0gZnVuY3Rpb24oKSB7XG4gIFByb21pc2UucHJvdG90eXBlLmlzUGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSB1bmRlZmluZWQ7XG4gIFByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSB1bmRlZmluZWQ7XG4gIFByb21pc2UucHJvdG90eXBlLmdldFZhbHVlID0gdW5kZWZpbmVkO1xuICBQcm9taXNlLnByb3RvdHlwZS5nZXRSZWFzb24gPSB1bmRlZmluZWQ7XG4gIFByb21pc2UucHJvdG90eXBlLmdldFN0YXRlID0gdW5kZWZpbmVkO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFRoaXMgZmlsZSBjb250YWlucyBkZWZpbml0aW9ucyBvZiBydWxlcyBob3cgbG9jYXRpb24gVVJMcyBhcmUgdHJhbnNsYXRlZFxuLy8gdG8gcGFyYW1ldGVycyBmb3Igc3RvcmVzIGluIENhdGJlcnJ5IGFwcGxpY2F0aW9uLlxuLy9cbi8vIEZvcm1hdDpcbi8vIC9zb21lLzpwYXJhbWV0ZXJbc3RvcmUxLHN0b3JlMixzdG9yZTNdXG4vL1xuLy8gTW9yZSBkZXRhaWxzIGhlcmU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2F0YmVycnkvY2F0YmVycnkvYmxvYi9tYXN0ZXIvZG9jcy9pbmRleC5tZCNyb3V0aW5nXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuXHQnLzpwYWdlW1BhZ2VzXSdcbl07XG4iXX0=
