/*
 * catberry-project: 0.0.0
 * Build Date: Wed Mar 02 2016 14:46:13 GMT+0200 (Финляндия (зима))
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

{name: 'Content', constructor: require('./catberry_stores\\Content.js')},
{name: 'Pages', constructor: require('./catberry_stores\\Pages.js')}
];

var components = [

{name: 'content', constructor: require('./catberry_components\\Content\\index.js'), properties: {"name":"Content","template":"./template.jade","errorTemplate":"./error.jade","logic":"index.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (content) {\nbuf.push("<h3>" + (jade.escape((jade_interp = content) == null ? \'\' : jade_interp)) + "</h3>");}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined));;return buf.join("");\n}', errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\n;return buf.join("");\n}'},
{name: 'document', constructor: require('./catberry_components\\document\\Document.js'), properties: {"name":"document","template":"./document.jade","logic":"./Document.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<!DOCTYPE html><html><head></head><body><cat-hello-world id=\\"unique\\" cat-store=\\"Pages\\"></cat-hello-world><cat-navigation id=\\"cat-top-nav\\" cat-store=\\"Pages\\"></cat-navigation><cat-content id=\\"cat-content\\" cat-store=\\"Content\\"></cat-content></body></html>");;return buf.join("");\n}', errorTemplateSource: null},
{name: 'head', constructor: require('./catberry_components\\head\\Head.js'), properties: {"name":"head","template":"./head.jade","logic":"./Head.js"}, templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (title) {\nbuf.push("<meta charset=\\"UTF-8\\"/><title>" + (jade.escape((jade_interp = title) == null ? \'\' : jade_interp)) + "</title><link rel=\\"stylesheet\\" href=\\"styles.css\\"/><script src=\\"bundle.js\\"></script>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");\n}', errorTemplateSource: null},
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
				return { content: 'content for home'}
			} else {
				return { content: 'content for not home'}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfX0Jyb3dzZXJCdW5kbGUuanMiLCJicm93c2VyLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9Db250ZW50L2luZGV4LmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9kb2N1bWVudC9Eb2N1bWVudC5qcyIsImNhdGJlcnJ5X2NvbXBvbmVudHMvaGVhZC9IZWFkLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9oZWxsby13b3JsZC9IZWxsb1dvcmxkLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwiY2F0YmVycnlfc3RvcmVzL0NvbnRlbnQuanMiLCJjYXRiZXJyeV9zdG9yZXMvUGFnZXMuanMiLCJjb25maWcvYnJvd3Nlci5qc29uIiwiY29uZmlnL3BhZ2VzLmpzb24iLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLXJhdy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2Jyb3dzZXIvVGVtcGxhdGVQcm92aWRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvY2F0b3IvbGliL0NvbnN0cnVjdG9yVG9rZW5pemVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvY2F0b3IvbGliL1NlcnZpY2VMb2NhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVoci9icm93c2VyL1VIUi5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11aHIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdWhyL2xpYi9VSFJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL0F1dGhvcml0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL1F1ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVVJJLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVXNlckluZm8uanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdXJpL2xpYi9wZXJjZW50RW5jb2RpbmdIZWxwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9DYXRiZXJyeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0Nvb2tpZVdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9Eb2N1bWVudFJlbmRlcmVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvTG9nZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvUmVxdWVzdFJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL2hlbHBlcnMvaHJUaW1lSGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvbG9hZGVycy9Db21wb25lbnRMb2FkZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9sb2FkZXJzL1N0b3JlTG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvcHJvdmlkZXJzL01vZHVsZUFwaVByb3ZpZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9Db250ZXh0RmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU2VyaWFsV3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU3RvcmVEaXNwYXRjaGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Jvb3RzdHJhcHBlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvQ2F0YmVycnlCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Nvb2tpZVdyYXBwZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0RvY3VtZW50UmVuZGVyZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0xvYWRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvTW9kdWxlQXBpUHJvdmlkZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL2Vycm9ySGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9wcm9wZXJ0eUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9yb3V0ZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvcHJvdmlkZXJzL1N0YXRlUHJvdmlkZXIuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2phZGUvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9tb3JwaGRvbS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJldHR5LWhydGltZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2RvbmUuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvZXM2LWV4dGVuc2lvbnMuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvZmluYWxseS5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9ub2RlLWV4dGVuc2lvbnMuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJyb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3lDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGEgdGVtcGxhdGUgYW5kIGl0IGlzIHVzZWQgb25seSB3aXRoIHNvbWUgc3RyaW5nIHJlcGxhY2VzXG4gKiBieSBCcm93c2VyQnVuZGxlQnVpbGRlciBtb2R1bGUuIEl0IGRvZXMgbm90IHdvcmsgYnkgaXRzZWxmLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0b3JlcyA9IFtcblxue25hbWU6ICdDb250ZW50JywgY29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY2F0YmVycnlfc3RvcmVzXFxcXENvbnRlbnQuanMnKX0sXG57bmFtZTogJ1BhZ2VzJywgY29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY2F0YmVycnlfc3RvcmVzXFxcXFBhZ2VzLmpzJyl9XG5dO1xuXG52YXIgY29tcG9uZW50cyA9IFtcblxue25hbWU6ICdjb250ZW50JywgY29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY2F0YmVycnlfY29tcG9uZW50c1xcXFxDb250ZW50XFxcXGluZGV4LmpzJyksIHByb3BlcnRpZXM6IHtcIm5hbWVcIjpcIkNvbnRlbnRcIixcInRlbXBsYXRlXCI6XCIuL3RlbXBsYXRlLmphZGVcIixcImVycm9yVGVtcGxhdGVcIjpcIi4vZXJyb3IuamFkZVwiLFwibG9naWNcIjpcImluZGV4LmpzXCJ9LCB0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNvbnRlbnQpIHtcXG5idWYucHVzaChcIjxoMz5cIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSBjb250ZW50KSA9PSBudWxsID8gXFwnXFwnIDogamFkZV9pbnRlcnApKSArIFwiPC9oMz5cIik7fS5jYWxsKHRoaXMsXCJjb250ZW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jb250ZW50OnR5cGVvZiBjb250ZW50IT09XCJ1bmRlZmluZWRcIj9jb250ZW50OnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsIGVycm9yVGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbjtyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufSd9LFxue25hbWU6ICdkb2N1bWVudCcsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHNcXFxcZG9jdW1lbnRcXFxcRG9jdW1lbnQuanMnKSwgcHJvcGVydGllczoge1wibmFtZVwiOlwiZG9jdW1lbnRcIixcInRlbXBsYXRlXCI6XCIuL2RvY3VtZW50LmphZGVcIixcImxvZ2ljXCI6XCIuL0RvY3VtZW50LmpzXCJ9LCB0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuXFxuYnVmLnB1c2goXCI8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGNhdC1oZWxsby13b3JsZCBpZD1cXFxcXCJ1bmlxdWVcXFxcXCIgY2F0LXN0b3JlPVxcXFxcIlBhZ2VzXFxcXFwiPjwvY2F0LWhlbGxvLXdvcmxkPjxjYXQtbmF2aWdhdGlvbiBpZD1cXFxcXCJjYXQtdG9wLW5hdlxcXFxcIiBjYXQtc3RvcmU9XFxcXFwiUGFnZXNcXFxcXCI+PC9jYXQtbmF2aWdhdGlvbj48Y2F0LWNvbnRlbnQgaWQ9XFxcXFwiY2F0LWNvbnRlbnRcXFxcXCIgY2F0LXN0b3JlPVxcXFxcIkNvbnRlbnRcXFxcXCI+PC9jYXQtY29udGVudD48L2JvZHk+PC9odG1sPlwiKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nLCBlcnJvclRlbXBsYXRlU291cmNlOiBudWxsfSxcbntuYW1lOiAnaGVhZCcsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHNcXFxcaGVhZFxcXFxIZWFkLmpzJyksIHByb3BlcnRpZXM6IHtcIm5hbWVcIjpcImhlYWRcIixcInRlbXBsYXRlXCI6XCIuL2hlYWQuamFkZVwiLFwibG9naWNcIjpcIi4vSGVhZC5qc1wifSwgdGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uICh0aXRsZSkge1xcbmJ1Zi5wdXNoKFwiPG1ldGEgY2hhcnNldD1cXFxcXCJVVEYtOFxcXFxcIi8+PHRpdGxlPlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9IHRpdGxlKSA9PSBudWxsID8gXFwnXFwnIDogamFkZV9pbnRlcnApKSArIFwiPC90aXRsZT48bGluayByZWw9XFxcXFwic3R5bGVzaGVldFxcXFxcIiBocmVmPVxcXFxcInN0eWxlcy5jc3NcXFxcXCIvPjxzY3JpcHQgc3JjPVxcXFxcImJ1bmRsZS5qc1xcXFxcIj48L3NjcmlwdD5cIik7fS5jYWxsKHRoaXMsXCJ0aXRsZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudGl0bGU6dHlwZW9mIHRpdGxlIT09XCJ1bmRlZmluZWRcIj90aXRsZTp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nLCBlcnJvclRlbXBsYXRlU291cmNlOiBudWxsfSxcbntuYW1lOiAnaGVsbG8td29ybGQnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9jb21wb25lbnRzXFxcXGhlbGxvLXdvcmxkXFxcXEhlbGxvV29ybGQuanMnKSwgcHJvcGVydGllczoge1wibmFtZVwiOlwiaGVsbG8td29ybGRcIixcInRlbXBsYXRlXCI6XCIuL2hlbGxvLmphZGVcIixcImVycm9yVGVtcGxhdGVcIjpcIi4vZXJyb3IuamFkZVwiLFwibG9naWNcIjpcIi4vSGVsbG9Xb3JsZC5qc1wifSwgdGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjdXJyZW50KSB7XFxuYnVmLnB1c2goXCI8aDE+SGVsbG8gXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gY3VycmVudCkgPT0gbnVsbCA/IFxcJ1xcJyA6IGphZGVfaW50ZXJwKSkgKyBcIjwvaDE+XCIpO30uY2FsbCh0aGlzLFwiY3VycmVudFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY3VycmVudDp0eXBlb2YgY3VycmVudCE9PVwidW5kZWZpbmVkXCI/Y3VycmVudDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nLCBlcnJvclRlbXBsYXRlU291cmNlOiAnZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XFxudmFyIGJ1ZiA9IFtdO1xcbnZhciBqYWRlX21peGlucyA9IHt9O1xcbnZhciBqYWRlX2ludGVycDtcXG5cXG47cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nfSxcbntuYW1lOiAnbmF2aWdhdGlvbicsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHNcXFxcbmF2aWdhdGlvblxcXFxpbmRleC5qcycpLCBwcm9wZXJ0aWVzOiB7XCJuYW1lXCI6XCJuYXZpZ2F0aW9uXCIsXCJ0ZW1wbGF0ZVwiOlwiLi90ZW1wbGF0ZS5qYWRlXCIsXCJlcnJvclRlbXBsYXRlXCI6XCIuL2Vycm9yLmphZGVcIixcImxvZ2ljXCI6XCJpbmRleC5qc1wifSwgdGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChpc0FjdGl2ZSwgbWVudSwgdW5kZWZpbmVkKSB7XFxuYnVmLnB1c2goXCI8dWw+XCIpO1xcbi8vIGl0ZXJhdGUgbWVudVxcbjsoZnVuY3Rpb24oKXtcXG4gIHZhciAkb2JqID0gbWVudTtcXG4gIGlmIChcXCdudW1iZXJcXCcgPT0gdHlwZW9mICRvYmoubGVuZ3RoKSB7XFxuXFxuICAgIGZvciAodmFyICRpbmRleCA9IDAsICRsID0gJG9iai5sZW5ndGg7ICRpbmRleCA8ICRsOyAkaW5kZXgrKykge1xcbiAgICAgIHZhciBpdGVtID0gJG9ialskaW5kZXhdO1xcblxcbmJ1Zi5wdXNoKFwiPGxpXCIgKyAoamFkZS5jbHMoW2lzQWN0aXZlW2l0ZW0ubmFtZV0gPyBcXCdhY3RpdmVcXCc6IFxcJ1xcJ10sIFt0cnVlXSkpICsgXCI+PGFcIiArIChqYWRlLmF0dHIoXCJocmVmXCIsIFwiXCIgKyAoaXRlbS5saW5rKSArIFwiXCIsIHRydWUsIGZhbHNlKSkgKyBcIj5cIiArIChqYWRlLmVzY2FwZShudWxsID09IChqYWRlX2ludGVycCA9IGl0ZW0ubmFtZSkgPyBcIlwiIDogamFkZV9pbnRlcnApKSArIFwiPC9hPjwvbGk+XCIpO1xcbiAgICB9XFxuXFxuICB9IGVsc2Uge1xcbiAgICB2YXIgJGwgPSAwO1xcbiAgICBmb3IgKHZhciAkaW5kZXggaW4gJG9iaikge1xcbiAgICAgICRsKys7ICAgICAgdmFyIGl0ZW0gPSAkb2JqWyRpbmRleF07XFxuXFxuYnVmLnB1c2goXCI8bGlcIiArIChqYWRlLmNscyhbaXNBY3RpdmVbaXRlbS5uYW1lXSA/IFxcJ2FjdGl2ZVxcJzogXFwnXFwnXSwgW3RydWVdKSkgKyBcIj48YVwiICsgKGphZGUuYXR0cihcImhyZWZcIiwgXCJcIiArIChpdGVtLmxpbmspICsgXCJcIiwgdHJ1ZSwgZmFsc2UpKSArIFwiPlwiICsgKGphZGUuZXNjYXBlKG51bGwgPT0gKGphZGVfaW50ZXJwID0gaXRlbS5uYW1lKSA/IFwiXCIgOiBqYWRlX2ludGVycCkpICsgXCI8L2E+PC9saT5cIik7XFxuICAgIH1cXG5cXG4gIH1cXG59KS5jYWxsKHRoaXMpO1xcblxcbmJ1Zi5wdXNoKFwiPC91bD5cIik7fS5jYWxsKHRoaXMsXCJpc0FjdGl2ZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguaXNBY3RpdmU6dHlwZW9mIGlzQWN0aXZlIT09XCJ1bmRlZmluZWRcIj9pc0FjdGl2ZTp1bmRlZmluZWQsXCJtZW51XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5tZW51OnR5cGVvZiBtZW51IT09XCJ1bmRlZmluZWRcIj9tZW51OnVuZGVmaW5lZCxcInVuZGVmaW5lZFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudW5kZWZpbmVkOnR5cGVvZiB1bmRlZmluZWQhPT1cInVuZGVmaW5lZFwiP3VuZGVmaW5lZDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nLCBlcnJvclRlbXBsYXRlU291cmNlOiAnZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XFxudmFyIGJ1ZiA9IFtdO1xcbnZhciBqYWRlX21peGlucyA9IHt9O1xcbnZhciBqYWRlX2ludGVycDtcXG5cXG47cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xcbn0nfVxuXTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdHJvdXRlRGVmaW5pdGlvbnMgPSByZXF1aXJlKCcuL3JvdXRlcy5qcycpIHx8IFtdLFxuXHRDYXRiZXJyeSA9IHJlcXVpcmUoJy4vbm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvQ2F0YmVycnkuanMnKSxcblx0TG9nZ2VyID0gcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9Mb2dnZXIuanMnKSxcblx0Qm9vdHN0cmFwcGVyQmFzZSA9XG5cdFx0cmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvQm9vdHN0cmFwcGVyQmFzZS5qcycpLFxuXHRTdG9yZURpc3BhdGNoZXIgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU3RvcmVEaXNwYXRjaGVyJyksXG5cdE1vZHVsZUFwaVByb3ZpZGVyID1cblx0XHRyZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL3Byb3ZpZGVycy9Nb2R1bGVBcGlQcm92aWRlcicpLFxuXHRDb29raWVXcmFwcGVyID0gcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9Db29raWVXcmFwcGVyJyk7XG5cbnZhciBERUJVR19ET0NVTUVOVF9VUERBVEVEID0gJ0RvY3VtZW50IHVwZGF0ZWQgKCVkIHN0b3JlKHMpIGNoYW5nZWQpJyxcblx0REVCVUdfQ09NUE9ORU5UX0JPVU5EID0gJ0NvbXBvbmVudCBcIiVzXCIgaXMgYm91bmQnLFxuXHRERUJVR19DT01QT05FTlRfVU5CT1VORCA9ICdDb21wb25lbnQgXCIlc1wiIGlzIHVuYm91bmQnO1xuXG51dGlsLmluaGVyaXRzKEJvb3RzdHJhcHBlciwgQm9vdHN0cmFwcGVyQmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgQ2F0YmVycnkncyBib290c3RyYXBwZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIEJvb3RzdHJhcHBlckJhc2VcbiAqL1xuZnVuY3Rpb24gQm9vdHN0cmFwcGVyKCkge1xuXHRCb290c3RyYXBwZXJCYXNlLmNhbGwodGhpcywgQ2F0YmVycnkpO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyZXMgQ2F0YmVycnkncyBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnT2JqZWN0IEFwcGxpY2F0aW9uIGNvbmZpZyBvYmplY3QuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIFNlcnZpY2UgbG9jYXRvciB0byBjb25maWd1cmUuXG4gKi9cbkJvb3RzdHJhcHBlci5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKGNvbmZpZ09iamVjdCwgbG9jYXRvcikge1xuXHRCb290c3RyYXBwZXJCYXNlLnByb3RvdHlwZS5jb25maWd1cmUuY2FsbCh0aGlzLCBjb25maWdPYmplY3QsIGxvY2F0b3IpO1xuXG5cdC8vIGlmIGJyb3dzZXIgc3RpbGwgZG9lcyBub3QgaGF2ZSBwcm9taXNlcyB0aGVuIGFkZCBpdC5cblx0aWYgKCEoJ1Byb21pc2UnIGluIHdpbmRvdykpIHtcblx0XHR3aW5kb3cuUHJvbWlzZSA9IGxvY2F0b3IucmVzb2x2ZSgncHJvbWlzZScpO1xuXHR9XG5cblx0bG9jYXRvci5yZWdpc3Rlcignc3RvcmVEaXNwYXRjaGVyJywgU3RvcmVEaXNwYXRjaGVyLCBjb25maWdPYmplY3QsIHRydWUpO1xuXHRsb2NhdG9yLnJlZ2lzdGVyKFxuXHRcdCdtb2R1bGVBcGlQcm92aWRlcicsIE1vZHVsZUFwaVByb3ZpZGVyLCBjb25maWdPYmplY3QsIHRydWVcblx0KTtcblx0bG9jYXRvci5yZWdpc3RlcignY29va2llV3JhcHBlcicsIENvb2tpZVdyYXBwZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cblx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCd3aW5kb3cnLCB3aW5kb3cpO1xuXG5cdHZhciBsb2dnZXJDb25maWcgPSBjb25maWdPYmplY3QubG9nZ2VyIHx8IHt9LFxuXHRcdGxvZ2dlciA9IG5ldyBMb2dnZXIobG9nZ2VyQ29uZmlnLmxldmVscyk7XG5cdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnbG9nZ2VyJywgbG9nZ2VyKTtcblx0d2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiBlcnJvckhhbmRsZXIobXNnLCB1cmksIGxpbmUpIHtcblx0XHRsb2dnZXIuZmF0YWwodXJpICsgJzonICsgbGluZSArICcgJyArIG1zZyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdHZhciBldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblx0dGhpcy5fd3JhcEV2ZW50c1dpdGhMb2dnZXIoY29uZmlnT2JqZWN0LCBldmVudEJ1cywgbG9nZ2VyKTtcblxuXHRyb3V0ZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlRGVmaW5pdGlvbikge1xuXHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgncm91dGVEZWZpbml0aW9uJywgcm91dGVEZWZpbml0aW9uKTtcblx0fSk7XG5cblx0c3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG5cdFx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdzdG9yZScsIHN0b3JlKTtcblx0fSk7XG5cblx0Y29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ2NvbXBvbmVudCcsIGNvbXBvbmVudCk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBXcmFwcyBldmVudCBidXMgd2l0aCBsb2cgbWVzc2FnZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIEFwcGxpY2F0aW9uIGNvbmZpZy5cbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBldmVudEJ1cyBFdmVudCBlbWl0dGVyIHRoYXQgaW1wbGVtZW50cyBldmVudCBidXMuXG4gKiBAcGFyYW0ge0xvZ2dlcn0gbG9nZ2VyIExvZ2dlciB0byB3cml0ZSBtZXNzYWdlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQm9vdHN0cmFwcGVyLnByb3RvdHlwZS5fd3JhcEV2ZW50c1dpdGhMb2dnZXIgPVxuXHRmdW5jdGlvbiAoY29uZmlnLCBldmVudEJ1cywgbG9nZ2VyKSB7XG5cdFx0Qm9vdHN0cmFwcGVyQmFzZS5wcm90b3R5cGUuX3dyYXBFdmVudHNXaXRoTG9nZ2VyXG5cdFx0XHQuY2FsbCh0aGlzLCBjb25maWcsIGV2ZW50QnVzLCBsb2dnZXIpO1xuXG5cdFx0dmFyIGlzUmVsZWFzZSA9IEJvb2xlYW4oY29uZmlnLmlzUmVsZWFzZSk7XG5cdFx0aWYgKGlzUmVsZWFzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudEJ1c1xuXHRcdFx0Lm9uKCdkb2N1bWVudFVwZGF0ZWQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoREVCVUdfRE9DVU1FTlRfVVBEQVRFRCwgYXJncy5sZW5ndGgpKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2NvbXBvbmVudEJvdW5kJywgZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdFx0bG9nZ2VyLmRlYnVnKHV0aWwuZm9ybWF0KFxuXHRcdFx0XHRcdERFQlVHX0NPTVBPTkVOVF9CT1VORCxcblx0XHRcdFx0XHRhcmdzLmVsZW1lbnQudGFnTmFtZSArIChhcmdzLmlkID8gJyMnICsgYXJncy5pZCA6ICcnKVxuXHRcdFx0XHQpKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2NvbXBvbmVudFVuYm91bmQnLCBmdW5jdGlvbiAoYXJncykge1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoXG5cdFx0XHRcdFx0REVCVUdfQ09NUE9ORU5UX1VOQk9VTkQsXG5cdFx0XHRcdFx0YXJncy5lbGVtZW50LnRhZ05hbWUgKyAoYXJncy5pZCA/ICcjJyArIGFyZ3MuaWQgOiAnJylcblx0XHRcdFx0KSk7XG5cdFx0XHR9KTtcblx0fTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQm9vdHN0cmFwcGVyKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2F0YmVycnkgPSByZXF1aXJlKCdjYXRiZXJyeScpLFxuXHR0ZW1wbGF0ZUVuZ2luZSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LWphZGUnKSxcblx0Ly8gdGhpcyBjb25maWcgd2lsbCBiZSByZXBsYWNlZCBieSBgLi9jb25maWcvYnJvd3Nlci5qc29uYCB3aGVuIGJ1aWxkaW5nXG5cdC8vIGJlY2F1c2Ugb2YgYGJyb3dzZXJgIGZpZWxkIGluIGBwYWNrYWdlLmpzb25gXG5cdGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL2Vudmlyb25tZW50Lmpzb24nKSxcblx0Y2F0ID0gY2F0YmVycnkuY3JlYXRlKGNvbmZpZyk7XG5cbnRlbXBsYXRlRW5naW5lLnJlZ2lzdGVyKGNhdC5sb2NhdG9yKTtcbmNhdC5zdGFydFdoZW5SZWFkeSgpO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGVudDtcblxuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI2NhdC1jb21wb25lbnRzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgXCJDb250ZW50XCIgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvbnRlbnQoKSB7XG5cbn1cblxuLyoqXG4gKiBHZXRzIGRhdGEgY29udGV4dCBmb3IgdGVtcGxhdGUgZW5naW5lLlxuICogVGhpcyBtZXRob2QgaXMgb3B0aW9uYWwuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fE9iamVjdHxudWxsfHVuZGVmaW5lZH0gRGF0YSBjb250ZXh0XG4gKiBmb3IgdGVtcGxhdGUgZW5naW5lLlxuICovXG5Db250ZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLiRjb250ZXh0LmdldFN0b3JlRGF0YSgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGV2ZW50IGJpbmRpbmcgc2V0dGluZ3MgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBCaW5kaW5nIHNldHRpbmdzLlxuICovXG5Db250ZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuXG59O1xuXG4vKipcbiAqIERvZXMgY2xlYW5pbmcgZm9yIGV2ZXJ5dGhpbmcgdGhhdCBoYXZlIE5PVCBiZWVuIHNldCBieSAuYmluZCgpIG1ldGhvZC5cbiAqIFRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLlxuICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBQcm9taXNlIG9yIG5vdGhpbmcuXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICgpIHtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudDtcblxuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI2NhdC1jb21wb25lbnRzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBcImRvY3VtZW50XCIgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIERvY3VtZW50KCkgeyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZDtcblxuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI2NhdC1jb21wb25lbnRzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBcImhlYWRcIiBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gJGNvbmZpZyBDYXRiZXJyeSBhcHBsaWNhdGlvbiBjb25maWcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSGVhZCgkY29uZmlnKSB7XG5cdHRoaXMuX2NvbmZpZyA9ICRjb25maWc7XG59XG5cbi8qKlxuICogQ3VycmVudCBjb25maWcuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuSGVhZC5wcm90b3R5cGUuX2NvbmZpZyA9IG51bGw7XG5cbi8qKlxuICogR2V0cyBkYXRhIGZvciB0ZW1wbGF0ZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IERhdGEgb2JqZWN0LlxuICovXG5IZWFkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLl9jb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlbGxvV29ybGQ7XG5cbi8qXG4gKiBUaGlzIGlzIGEgQ2F0YmVycnkgQ2F0LWNvbXBvbmVudCBmaWxlLlxuICogTW9yZSBkZXRhaWxzIGNhbiBiZSBmb3VuZCBoZXJlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2F0YmVycnkvY2F0YmVycnkvYmxvYi9tYXN0ZXIvZG9jcy9pbmRleC5tZCNjYXQtY29tcG9uZW50c1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgXCJoZWxsby13b3JsZFwiIGNvbXBvbmVudC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIZWxsb1dvcmxkKCkgeyB9XG5cbi8qKlxuICogR2V0cyBkYXRhIGZvciB0ZW1wbGF0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIGRhdGEuXG4gKi9cbkhlbGxvV29ybGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuJGNvbnRleHQuZ2V0U3RvcmVEYXRhKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb247XG5cbnZhciBNRU5VID0gW1xuICB7XG4gICAgbGluazogJy9ob21lJyxcbiAgICBuYW1lOiAnaG9tZSdcbiAgfSxcbiAge1xuICAgIGxpbms6ICcvcG9ydGZvbGlvJyxcbiAgICBuYW1lOiAncG9ydGZvbGlvJ1xuICB9XG5dO1xuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI2NhdC1jb21wb25lbnRzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgXCJuYXZpZ2F0aW9uXCIgY29tcG9uZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG5cbn1cblxuLyoqXG4gKiBHZXRzIGRhdGEgY29udGV4dCBmb3IgdGVtcGxhdGUgZW5naW5lLlxuICogVGhpcyBtZXRob2QgaXMgb3B0aW9uYWwuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fE9iamVjdHxudWxsfHVuZGVmaW5lZH0gRGF0YSBjb250ZXh0XG4gKiBmb3IgdGVtcGxhdGUgZW5naW5lLlxuICovXG5OYXZpZ2F0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLiRjb250ZXh0LmdldFN0b3JlRGF0YSgpLlxuICAgIHRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgZGF0YS5tZW51ID0gTUVOVTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGV2ZW50IGJpbmRpbmcgc2V0dGluZ3MgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIG1ldGhvZCBpcyBvcHRpb25hbC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBCaW5kaW5nIHNldHRpbmdzLlxuICovXG5OYXZpZ2F0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKCkge1xuXG59O1xuXG4vKipcbiAqIERvZXMgY2xlYW5pbmcgZm9yIGV2ZXJ5dGhpbmcgdGhhdCBoYXZlIE5PVCBiZWVuIHNldCBieSAuYmluZCgpIG1ldGhvZC5cbiAqIFRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLlxuICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBQcm9taXNlIG9yIG5vdGhpbmcuXG4gKi9cbk5hdmlnYXRpb24ucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICgpIHtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50O1xuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IFN0b3JlIGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI3N0b3Jlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIFwiQ29udGVudFwiIHN0b3JlLlxuICogQHBhcmFtIHtVSFJ9ICR1aHIgVW5pdmVyc2FsIEhUVFAgcmVxdWVzdC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb250ZW50KCR1aHIpIHtcblx0dGhpcy5fdWhyID0gJHVocjtcblx0dGhpcy4kY29udGV4dC5zZXREZXBlbmRlbmN5KCdQYWdlcycpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgdW5pdmVyc2FsIEhUVFAgcmVxdWVzdCB0byBkbyBpdCBpbiBpc29tb3JwaGljIHdheS5cbiAqIEB0eXBlIHtVSFJ9XG4gKiBAcHJpdmF0ZVxuICovXG5Db250ZW50LnByb3RvdHlwZS5fdWhyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGxpZmV0aW1lIG9mIGRhdGEgKGluIG1pbGxpc2Vjb25kcykgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIHN0b3JlLlxuICogQHR5cGUge251bWJlcn0gTGlmZXRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5Db250ZW50LnByb3RvdHlwZS4kbGlmZXRpbWUgPSA2MDAwMDtcblxuLyoqXG4gKiBMb2FkcyBkYXRhIGZyb20gcmVtb3RlIHNvdXJjZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBMb2FkZWQgZGF0YS5cbiAqL1xuQ29udGVudC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gSGVyZSB5b3UgY2FuIGRvIGFueSBIVFRQIHJlcXVlc3RzIHVzaW5nIHRoaXMuX3Voci5cblx0Ly8gUGxlYXNlIHJlYWQgZGV0YWlscyBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS11aHIuXG5cdHJldHVybiB0aGlzLiRjb250ZXh0LmdldFN0b3JlRGF0YSgnUGFnZXMnKVxuXHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdGlmKGRhdGEuY3VycmVudCA9PT0gJ2hvbWUnKSB7XG5cdFx0XHRcdHJldHVybiB7IGNvbnRlbnQ6ICdjb250ZW50IGZvciBob21lJ31cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7IGNvbnRlbnQ6ICdjb250ZW50IGZvciBub3QgaG9tZSd9XG5cdFx0XHR9XG5cdFx0fSlcbn07XG5cbi8qKlxuICogSGFuZGxlcyBhY3Rpb24gbmFtZWQgXCJzb21lLWFjdGlvblwiIGZyb20gYW55IGNvbXBvbmVudC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fG51bGx8dW5kZWZpbmVkfSBSZXNwb25zZSB0byBjb21wb25lbnQuXG4gKi9cbkNvbnRlbnQucHJvdG90eXBlLmhhbmRsZVNvbWVBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdC8vIEhlcmUgeW91IGNhbiBjYWxsIHRoaXMuJGNvbnRleHQuY2hhbmdlZCgpIGlmIHlvdSBrbm93XG5cdC8vIHRoYXQgcmVtb3RlIGRhdGEgc291cmNlIGhhcyBiZWVuIGNoYW5nZWQuXG5cdC8vIEFsc28geW91IGNhbiBoYXZlIG1hbnkgaGFuZGxlIG1ldGhvZHMgZm9yIG90aGVyIGFjdGlvbnMuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VzO1xuXG5cbi8qIFBBR0VTICovXG5cbnZhciBQQUdFUyA9IHJlcXVpcmUoXCIuLi9jb25maWcvcGFnZXMuanNvblwiKTtcblxuXG5cbi8qXG4gKiBUaGlzIGlzIGEgQ2F0YmVycnkgU3RvcmUgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5L2Jsb2IvbWFzdGVyL2RvY3MvaW5kZXgubWQjc3RvcmVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgXCJQYWdlc1wiIHN0b3JlLlxuICogQHBhcmFtIHtVSFJ9ICR1aHIgVW5pdmVyc2FsIEhUVFAgcmVxdWVzdC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYWdlcygkY29uZmlnKSB7XG5cdHRoaXMuX2NvbmZpZyA9ICRjb25maWc7XG59XG5cbi8qKlxuICogQ3VycmVudCB1bml2ZXJzYWwgSFRUUCByZXF1ZXN0IHRvIGRvIGl0IGluIGlzb21vcnBoaWMgd2F5LlxuICogQHR5cGUge1VIUn1cbiAqIEBwcml2YXRlXG4gKi9cblBhZ2VzLnByb3RvdHlwZS5fdWhyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGxpZmV0aW1lIG9mIGRhdGEgKGluIG1pbGxpc2Vjb25kcykgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIHN0b3JlLlxuICogQHR5cGUge251bWJlcn0gTGlmZXRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5QYWdlcy5wcm90b3R5cGUuJGxpZmV0aW1lID0gNjAwMDA7XG5cbi8qKlxuICogTG9hZHMgZGF0YSBmcm9tIHJlbW90ZSBzb3VyY2UuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fE9iamVjdHxudWxsfHVuZGVmaW5lZH0gTG9hZGVkIGRhdGEuXG4gKi9cblBhZ2VzLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHQvLyBIZXJlIHlvdSBjYW4gZG8gYW55IEhUVFAgcmVxdWVzdHMgdXNpbmcgdGhpcy5fdWhyLlxuXHQvLyBQbGVhc2UgcmVhZCBkZXRhaWxzIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2NhdGJlcnJ5L2NhdGJlcnJ5LXVoci5cblx0dmFyIGN1cnJlbnRQYWdlID0gdGhpcy4kY29udGV4dC5zdGF0ZS5wYWdlIHx8ICdob21lJztcblxuXHR2YXIgcmVzdWx0ID0ge1xuXHRcdGN1cnJlbnQ6IGN1cnJlbnRQYWdlLFxuXHRcdGlzQWN0aXZlOiB7fVxuXHR9O1xuXG5cdGlmKCFQQUdFUy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50UGFnZSkpIHtcblx0XHR0aGlzLiRjb250ZXh0LnJlZGlyZWN0KCcvaG9tZScpO1xuXHR9XG5cblx0T2JqZWN0LmtleXMoUEFHRVMpLmZvckVhY2goZnVuY3Rpb24ocGFnZSkge1xuXHRcdHJlc3VsdC5pc0FjdGl2ZVtwYWdlXSA9IChjdXJyZW50UGFnZSA9PT0gcGFnZSlcblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufTtcblxuLyoqXG4gKiBIYW5kbGVzIGFjdGlvbiBuYW1lZCBcInNvbWUtYWN0aW9uXCIgZnJvbSBhbnkgY29tcG9uZW50LlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R8bnVsbHx1bmRlZmluZWR9IFJlc3BvbnNlIHRvIGNvbXBvbmVudC5cbiAqL1xuUGFnZXMucHJvdG90eXBlLmhhbmRsZVNvbWVBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdC8vIEhlcmUgeW91IGNhbiBjYWxsIHRoaXMuJGNvbnRleHQuY2hhbmdlZCgpIGlmIHlvdSBrbm93XG5cdC8vIHRoYXQgcmVtb3RlIGRhdGEgc291cmNlIGhhcyBiZWVuIGNoYW5nZWQuXG5cdC8vIEFsc28geW91IGNhbiBoYXZlIG1hbnkgaGFuZGxlIG1ldGhvZHMgZm9yIG90aGVyIGFjdGlvbnMuXG59O1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcInRpdGxlXCI6IFwiQ2F0YmVycnkgUHJvamVjdFwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgXCJob21lXCI6IHtcclxuICAgIFwidGl0bGVcIjogXCJIb21lIHBhZ2UgfCBPbGVnIFByb3RzZW5rb1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkphdmFzY3JpcHQgZGV2ZWxvcGVyLCBsb29raW5nIGZvciBhIGpvYlwiLFxyXG4gICAgXCJrZXl3b3Jkc1wiOiBcImphdmFzY3JpcHQsIGpvYiwgbm9kZWpzLCBjYXRiZXJyeWpzLCBpc29tb3JwaGljIGphdmFzY3JpcHRcIlxyXG4gIH0sXHJcbiAgXCJwb3J0Zm9saW9cIjoge1xyXG4gICAgXCJ0aXRsZVwiOiBcIlBvcnRmb2xpbyBwYWdlIHwgUG9ydGZvbGlvXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YXNjcmlwdCBkZXZlbG9wZXIsIGxvb2tpbmcgZm9yIGEgam9iLCBteSBwb3J0Zm9saW9cIixcclxuICAgIFwia2V5d29yZHNcIjogXCJqYXZhc2NyaXB0LCBqb2IsIG5vZGVqcywgY2F0YmVycnlqcywgaXNvbW9ycGhpYyBqYXZhc2NyaXB0XCJcclxuICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBVc2UgdGhlIGZhc3Rlc3QgbWVhbnMgcG9zc2libGUgdG8gZXhlY3V0ZSBhIHRhc2sgaW4gaXRzIG93biB0dXJuLCB3aXRoXG4vLyBwcmlvcml0eSBvdmVyIG90aGVyIGV2ZW50cyBpbmNsdWRpbmcgSU8sIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVkcmF3XG4vLyBldmVudHMgaW4gYnJvd3NlcnMuXG4vL1xuLy8gQW4gZXhjZXB0aW9uIHRocm93biBieSBhIHRhc2sgd2lsbCBwZXJtYW5lbnRseSBpbnRlcnJ1cHQgdGhlIHByb2Nlc3Npbmcgb2Zcbi8vIHN1YnNlcXVlbnQgdGFza3MuIFRoZSBoaWdoZXIgbGV2ZWwgYGFzYXBgIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93biBieSBhIHRhc2ssIHRoYXQgdGhlIHRhc2sgcXVldWUgd2lsbCBjb250aW51ZSBmbHVzaGluZyBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZSwgYnV0IGlmIHlvdSB1c2UgYHJhd0FzYXBgIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIHRvXG4vLyBlaXRoZXIgZW5zdXJlIHRoYXQgbm8gZXhjZXB0aW9ucyBhcmUgdGhyb3duIGZyb20geW91ciB0YXNrLCBvciB0byBtYW51YWxseVxuLy8gY2FsbCBgcmF3QXNhcC5yZXF1ZXN0Rmx1c2hgIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5tb2R1bGUuZXhwb3J0cyA9IHJhd0FzYXA7XG5mdW5jdGlvbiByYXdBc2FwKHRhc2spIHtcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0Rmx1c2goKTtcbiAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFcXVpdmFsZW50IHRvIHB1c2gsIGJ1dCBhdm9pZHMgYSBmdW5jdGlvbiBjYWxsLlxuICAgIHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB0YXNrO1xufVxuXG52YXIgcXVldWUgPSBbXTtcbi8vIE9uY2UgYSBmbHVzaCBoYXMgYmVlbiByZXF1ZXN0ZWQsIG5vIGZ1cnRoZXIgY2FsbHMgdG8gYHJlcXVlc3RGbHVzaGAgYXJlXG4vLyBuZWNlc3NhcnkgdW50aWwgdGhlIG5leHQgYGZsdXNoYCBjb21wbGV0ZXMuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGFuIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG1ldGhvZCB0aGF0IGF0dGVtcHRzIHRvIGtpY2tcbi8vIG9mZiBhIGBmbHVzaGAgZXZlbnQgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gYGZsdXNoYCB3aWxsIGF0dGVtcHQgdG8gZXhoYXVzdFxuLy8gdGhlIGV2ZW50IHF1ZXVlIGJlZm9yZSB5aWVsZGluZyB0byB0aGUgYnJvd3NlcidzIG93biBldmVudCBsb29wLlxudmFyIHJlcXVlc3RGbHVzaDtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCB0YXNrIHRvIGV4ZWN1dGUgaW4gdGhlIHRhc2sgcXVldWUuIFRoaXMgaXNcbi8vIHByZXNlcnZlZCBiZXR3ZWVuIGNhbGxzIHRvIGBmbHVzaGAgc28gdGhhdCBpdCBjYW4gYmUgcmVzdW1lZCBpZlxuLy8gYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24uXG52YXIgaW5kZXggPSAwO1xuLy8gSWYgYSB0YXNrIHNjaGVkdWxlcyBhZGRpdGlvbmFsIHRhc2tzIHJlY3Vyc2l2ZWx5LCB0aGUgdGFzayBxdWV1ZSBjYW4gZ3Jvd1xuLy8gdW5ib3VuZGVkLiBUbyBwcmV2ZW50IG1lbW9yeSBleGhhdXN0aW9uLCB0aGUgdGFzayBxdWV1ZSB3aWxsIHBlcmlvZGljYWxseVxuLy8gdHJ1bmNhdGUgYWxyZWFkeS1jb21wbGV0ZWQgdGFza3MuXG52YXIgY2FwYWNpdHkgPSAxMDI0O1xuXG4vLyBUaGUgZmx1c2ggZnVuY3Rpb24gcHJvY2Vzc2VzIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgd2l0aFxuLy8gYHJhd0FzYXBgIHVubGVzcyBhbmQgdW50aWwgb25lIG9mIHRob3NlIHRhc2tzIHRocm93cyBhbiBleGNlcHRpb24uXG4vLyBJZiBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgYGZsdXNoYCBlbnN1cmVzIHRoYXQgaXRzIHN0YXRlIHdpbGwgcmVtYWluXG4vLyBjb25zaXN0ZW50IGFuZCB3aWxsIHJlc3VtZSB3aGVyZSBpdCBsZWZ0IG9mZiB3aGVuIGNhbGxlZCBhZ2Fpbi5cbi8vIEhvd2V2ZXIsIGBmbHVzaGAgZG9lcyBub3QgbWFrZSBhbnkgYXJyYW5nZW1lbnRzIHRvIGJlIGNhbGxlZCBhZ2FpbiBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93bi5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIGluZGV4IGJlZm9yZSBjYWxsaW5nIHRoZSB0YXNrLiBUaGlzIGVuc3VyZXMgdGhhdCB3ZSB3aWxsXG4gICAgICAgIC8vIGJlZ2luIGZsdXNoaW5nIG9uIHRoZSBuZXh0IHRhc2sgdGhlIHRhc2sgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgcXVldWVbY3VycmVudEluZGV4XS5jYWxsKCk7XG4gICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgYXNhcGAuXG4gICAgICAgIC8vIElmIHdlIGNhbGwgYGFzYXBgIHdpdGhpbiB0YXNrcyBzY2hlZHVsZWQgYnkgYGFzYXBgLCB0aGUgcXVldWUgd2lsbFxuICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHBlcmlvZGljYWxseSBzaGlmdCAxMDI0IHRhc2tzIG9mZiB0aGUgcXVldWUuXG4gICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwLCBuZXdMZW5ndGggPSBxdWV1ZS5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgcXVldWVbc2Nhbl0gPSBxdWV1ZVtzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgaW5kZXggPSAwO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGltcGxlbWVudGVkIHVzaW5nIGEgc3RyYXRlZ3kgYmFzZWQgb24gZGF0YSBjb2xsZWN0ZWQgZnJvbVxuLy8gZXZlcnkgYXZhaWxhYmxlIFNhdWNlTGFicyBTZWxlbml1bSB3ZWIgZHJpdmVyIHdvcmtlciBhdCB0aW1lIG9mIHdyaXRpbmcuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUctNVVZR3VwNXF4R2RFTVdraFA2QldDejA1M05VYjJFMVFvVVRVMTZ1QS9lZGl0I2dpZD03ODM3MjQ1OTNcblxuLy8gU2FmYXJpIDYgYW5kIDYuMSBmb3IgZGVza3RvcCwgaVBhZCwgYW5kIGlQaG9uZSBhcmUgdGhlIG9ubHkgYnJvd3NlcnMgdGhhdFxuLy8gaGF2ZSBXZWJLaXRNdXRhdGlvbk9ic2VydmVyIGJ1dCBub3QgdW4tcHJlZml4ZWQgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11c3QgdXNlIGBnbG9iYWxgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuLy8gTXV0YXRpb25PYnNlcnZlcnMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgaGF2ZSBoaWdoIHByaW9yaXR5IGFuZCB3b3JrXG4vLyByZWxpYWJseSBldmVyeXdoZXJlIHRoZXkgYXJlIGltcGxlbWVudGVkLlxuLy8gVGhleSBhcmUgaW1wbGVtZW50ZWQgaW4gYWxsIG1vZGVybiBicm93c2Vycy5cbi8vXG4vLyAtIEFuZHJvaWQgNC00LjNcbi8vIC0gQ2hyb21lIDI2LTM0XG4vLyAtIEZpcmVmb3ggMTQtMjlcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbi8vIC0gaVBhZCBTYWZhcmkgNi03LjFcbi8vIC0gaVBob25lIFNhZmFyaSA3LTcuMVxuLy8gLSBTYWZhcmkgNi03XG5pZiAodHlwZW9mIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cbi8vIE1lc3NhZ2VDaGFubmVscyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBnaXZlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIEhUTUxcbi8vIHRhc2sgcXVldWUsIGFyZSBpbXBsZW1lbnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCwgU2FmYXJpIDUuMC0xLCBhbmQgT3BlcmFcbi8vIDExLTEyLCBhbmQgaW4gd2ViIHdvcmtlcnMgaW4gbWFueSBlbmdpbmVzLlxuLy8gQWx0aG91Z2ggbWVzc2FnZSBjaGFubmVscyB5aWVsZCB0byBhbnkgcXVldWVkIHJlbmRlcmluZyBhbmQgSU8gdGFza3MsIHRoZXlcbi8vIHdvdWxkIGJlIGJldHRlciB0aGFuIGltcG9zaW5nIHRoZSA0bXMgZGVsYXkgb2YgdGltZXJzLlxuLy8gSG93ZXZlciwgdGhleSBkbyBub3Qgd29yayByZWxpYWJseSBpbiBJbnRlcm5ldCBFeHBsb3JlciBvciBTYWZhcmkuXG5cbi8vIEludGVybmV0IEV4cGxvcmVyIDEwIGlzIHRoZSBvbmx5IGJyb3dzZXIgdGhhdCBoYXMgc2V0SW1tZWRpYXRlIGJ1dCBkb2VzXG4vLyBub3QgaGF2ZSBNdXRhdGlvbk9ic2VydmVycy5cbi8vIEFsdGhvdWdoIHNldEltbWVkaWF0ZSB5aWVsZHMgdG8gdGhlIGJyb3dzZXIncyByZW5kZXJlciwgaXQgd291bGQgYmVcbi8vIHByZWZlcnJhYmxlIHRvIGZhbGxpbmcgYmFjayB0byBzZXRUaW1lb3V0IHNpbmNlIGl0IGRvZXMgbm90IGhhdmVcbi8vIHRoZSBtaW5pbXVtIDRtcyBwZW5hbHR5LlxuLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBhcHBlYXJzIHRvIGJlIGEgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwIE1vYmlsZSAoYW5kXG4vLyBEZXNrdG9wIHRvIGEgbGVzc2VyIGV4dGVudCkgdGhhdCByZW5kZXJzIGJvdGggc2V0SW1tZWRpYXRlIGFuZFxuLy8gTWVzc2FnZUNoYW5uZWwgdXNlbGVzcyBmb3IgdGhlIHB1cnBvc2VzIG9mIEFTQVAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvaXNzdWVzLzM5NlxuXG4vLyBUaW1lcnMgYXJlIGltcGxlbWVudGVkIHVuaXZlcnNhbGx5LlxuLy8gV2UgZmFsbCBiYWNrIHRvIHRpbWVycyBpbiB3b3JrZXJzIGluIG1vc3QgZW5naW5lcywgYW5kIGluIGZvcmVncm91bmRcbi8vIGNvbnRleHRzIGluIHRoZSBmb2xsb3dpbmcgYnJvd3NlcnMuXG4vLyBIb3dldmVyLCBub3RlIHRoYXQgZXZlbiB0aGlzIHNpbXBsZSBjYXNlIHJlcXVpcmVzIG51YW5jZXMgdG8gb3BlcmF0ZSBpbiBhXG4vLyBicm9hZCBzcGVjdHJ1bSBvZiBicm93c2Vycy5cbi8vXG4vLyAtIEZpcmVmb3ggMy0xM1xuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciA2LTlcbi8vIC0gaVBhZCBTYWZhcmkgNC4zXG4vLyAtIEx5bnggMi44Ljdcbn0gZWxzZSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGZsdXNoKTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgcmVxdWVzdHMgdGhhdCB0aGUgaGlnaCBwcmlvcml0eSBldmVudCBxdWV1ZSBiZSBmbHVzaGVkIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLlxuLy8gVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBhbiBlcnJvciB0aHJvd24gaW4gYSB0YXNrIGZyb20gc3RhbGxpbmcgdGhlIGV2ZW50XG4vLyBxdWV1ZSBpZiB0aGUgZXhjZXB0aW9uIGhhbmRsZWQgYnkgTm9kZS5qc+KAmXNcbi8vIGBwcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIilgIG9yIGJ5IGEgZG9tYWluLlxucmF3QXNhcC5yZXF1ZXN0Rmx1c2ggPSByZXF1ZXN0Rmx1c2g7XG5cbi8vIFRvIHJlcXVlc3QgYSBoaWdoIHByaW9yaXR5IGV2ZW50LCB3ZSBpbmR1Y2UgYSBtdXRhdGlvbiBvYnNlcnZlciBieSB0b2dnbGluZ1xuLy8gdGhlIHRleHQgb2YgYSB0ZXh0IG5vZGUgYmV0d2VlbiBcIjFcIiBhbmQgXCItMVwiLlxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB2YXIgdG9nZ2xlID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlO1xuICAgIH07XG59XG5cbi8vIFRoZSBtZXNzYWdlIGNoYW5uZWwgdGVjaG5pcXVlIHdhcyBkaXNjb3ZlcmVkIGJ5IE1hbHRlIFVibCBhbmQgd2FzIHRoZVxuLy8gb3JpZ2luYWwgZm91bmRhdGlvbiBmb3IgdGhpcyBsaWJyYXJ5LlxuLy8gaHR0cDovL3d3dy5ub25ibG9ja2luZy5pby8yMDExLzA2L3dpbmRvd25leHR0aWNrLmh0bWxcblxuLy8gU2FmYXJpIDYuMC41IChhdCBsZWFzdCkgaW50ZXJtaXR0ZW50bHkgZmFpbHMgdG8gY3JlYXRlIG1lc3NhZ2UgcG9ydHMgb24gYVxuLy8gcGFnZSdzIGZpcnN0IGxvYWQuIFRoYW5rZnVsbHksIHRoaXMgdmVyc2lvbiBvZiBTYWZhcmkgc3VwcG9ydHNcbi8vIE11dGF0aW9uT2JzZXJ2ZXJzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGZhbGwgYmFjayBpbiB0aGF0IGNhc2UuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NZXNzYWdlQ2hhbm5lbChjYWxsYmFjaykge1xuLy8gICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4vLyAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gRm9yIHJlYXNvbnMgZXhwbGFpbmVkIGFib3ZlLCB3ZSBhcmUgYWxzbyB1bmFibGUgdG8gdXNlIGBzZXRJbW1lZGlhdGVgXG4vLyB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcy5cbi8vIEV2ZW4gaWYgd2Ugd2VyZSwgdGhlcmUgaXMgYW5vdGhlciBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4vLyBJdCBpcyBub3Qgc3VmZmljaWVudCB0byBhc3NpZ24gYHNldEltbWVkaWF0ZWAgdG8gYHJlcXVlc3RGbHVzaGAgYmVjYXVzZVxuLy8gYHNldEltbWVkaWF0ZWAgbXVzdCBiZSBjYWxsZWQgKmJ5IG5hbWUqIGFuZCB0aGVyZWZvcmUgbXVzdCBiZSB3cmFwcGVkIGluIGFcbi8vIGNsb3N1cmUuXG4vLyBOZXZlciBmb3JnZXQuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21TZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gU2FmYXJpIDYuMCBoYXMgYSBwcm9ibGVtIHdoZXJlIHRpbWVycyB3aWxsIGdldCBsb3N0IHdoaWxlIHRoZSB1c2VyIGlzXG4vLyBzY3JvbGxpbmcuIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBpbXBhY3QgQVNBUCBiZWNhdXNlIFNhZmFyaSA2LjAgc3VwcG9ydHNcbi8vIG11dGF0aW9uIG9ic2VydmVycywgc28gdGhhdCBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGluc3RlYWQuXG4vLyBIb3dldmVyLCBpZiB3ZSBldmVyIGVsZWN0IHRvIHVzZSB0aW1lcnMgaW4gU2FmYXJpLCB0aGUgcHJldmFsZW50IHdvcmstYXJvdW5kXG4vLyBpcyB0byBhZGQgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBmb3IgYSBmbHVzaC5cblxuLy8gYHNldFRpbWVvdXRgIGRvZXMgbm90IGNhbGwgdGhlIHBhc3NlZCBjYWxsYmFjayBpZiB0aGUgZGVsYXkgaXMgbGVzcyB0aGFuXG4vLyBhcHByb3hpbWF0ZWx5IDcgaW4gd2ViIHdvcmtlcnMgaW4gRmlyZWZveCA4IHRocm91Z2ggMTgsIGFuZCBzb21ldGltZXMgbm90XG4vLyBldmVuIHRoZW4uXG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgLy8gV2UgZGlzcGF0Y2ggYSB0aW1lb3V0IHdpdGggYSBzcGVjaWZpZWQgZGVsYXkgb2YgMCBmb3IgZW5naW5lcyB0aGF0XG4gICAgICAgIC8vIGNhbiByZWxpYWJseSBhY2NvbW1vZGF0ZSB0aGF0IHJlcXVlc3QuIFRoaXMgd2lsbCB1c3VhbGx5IGJlIHNuYXBwZWRcbiAgICAgICAgLy8gdG8gYSA0IG1pbGlzZWNvbmQgZGVsYXksIGJ1dCBvbmNlIHdlJ3JlIGZsdXNoaW5nLCB0aGVyZSdzIG5vIGRlbGF5XG4gICAgICAgIC8vIGJldHdlZW4gZXZlbnRzLlxuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlVGltZXIsIDApO1xuICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGlzIHRpbWVyIGdldHMgZnJlcXVlbnRseSBkcm9wcGVkIGluIEZpcmVmb3hcbiAgICAgICAgLy8gd29ya2Vycywgd2UgZW5saXN0IGFuIGludGVydmFsIGhhbmRsZSB0aGF0IHdpbGwgdHJ5IHRvIGZpcmVcbiAgICAgICAgLy8gYW4gZXZlbnQgMjAgdGltZXMgcGVyIHNlY29uZCB1bnRpbCBpdCBzdWNjZWVkcy5cbiAgICAgICAgdmFyIGludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoaGFuZGxlVGltZXIsIDUwKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUaW1lcigpIHtcbiAgICAgICAgICAgIC8vIFdoaWNoZXZlciB0aW1lciBzdWNjZWVkcyB3aWxsIGNhbmNlbCBib3RoIHRpbWVycyBhbmRcbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVGhpcyBpcyBmb3IgYGFzYXAuanNgIG9ubHkuXG4vLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXQgZGVwZW5kcyBvblxuLy8gaXRzIGV4aXN0ZW5jZS5cbnJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyO1xuXG4vLyBBU0FQIHdhcyBvcmlnaW5hbGx5IGEgbmV4dFRpY2sgc2hpbSBpbmNsdWRlZCBpbiBRLiBUaGlzIHdhcyBmYWN0b3JlZCBvdXRcbi8vIGludG8gdGhpcyBBU0FQIHBhY2thZ2UuIEl0IHdhcyBsYXRlciBhZGFwdGVkIHRvIFJTVlAgd2hpY2ggbWFkZSBmdXJ0aGVyXG4vLyBhbWVuZG1lbnRzLiBUaGVzZSBkZWNpc2lvbnMsIHBhcnRpY3VsYXJseSB0byBtYXJnaW5hbGl6ZSBNZXNzYWdlQ2hhbm5lbCBhbmRcbi8vIHRvIGNhcHR1cmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gaW4gYSBjbG9zdXJlLCB3ZXJlIGludGVncmF0ZWRcbi8vIGJhY2sgaW50byBBU0FQIHByb3Blci5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9jZGRmNzIzMjU0NmE5Y2Y4NTg1MjRiNzVjZGU2ZjllZGY3MjYyMGE3L2xpYi9yc3ZwL2FzYXAuanNcbiIsIm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzcy5ocnRpbWUgfHwgaHJ0aW1lXG5cbi8vIHBvbHlmaWwgZm9yIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbnZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbC5wZXJmb3JtYW5jZSB8fCB7fVxudmFyIHBlcmZvcm1hbmNlTm93ID1cbiAgcGVyZm9ybWFuY2Uubm93ICAgICAgICB8fFxuICBwZXJmb3JtYW5jZS5tb3pOb3cgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1zTm93ICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uub05vdyAgICAgICB8fFxuICBwZXJmb3JtYW5jZS53ZWJraXROb3cgIHx8XG4gIGZ1bmN0aW9uKCl7IHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIH1cblxuLy8gZ2VuZXJhdGUgdGltZXN0YW1wIG9yIGRlbHRhXG4vLyBzZWUgaHR0cDovL25vZGVqcy5vcmcvYXBpL3Byb2Nlc3MuaHRtbCNwcm9jZXNzX3Byb2Nlc3NfaHJ0aW1lXG5mdW5jdGlvbiBocnRpbWUocHJldmlvdXNUaW1lc3RhbXApe1xuICB2YXIgY2xvY2t0aW1lID0gcGVyZm9ybWFuY2VOb3cuY2FsbChwZXJmb3JtYW5jZSkqMWUtM1xuICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoY2xvY2t0aW1lKVxuICB2YXIgbmFub3NlY29uZHMgPSBNYXRoLmZsb29yKChjbG9ja3RpbWUlMSkqMWU5KVxuICBpZiAocHJldmlvdXNUaW1lc3RhbXApIHtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzBdXG4gICAgbmFub3NlY29uZHMgPSBuYW5vc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzFdXG4gICAgaWYgKG5hbm9zZWNvbmRzPDApIHtcbiAgICAgIHNlY29uZHMtLVxuICAgICAgbmFub3NlY29uZHMgKz0gMWU5XG4gICAgfVxuICB9XG4gIHJldHVybiBbc2Vjb25kcyxuYW5vc2Vjb25kc11cbn0iLCIiLCIvKlxuICogY2F0YmVycnktamFkZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5LWphZGUncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5LWphZGUgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZVByb3ZpZGVyO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIEphZGUgdGVtcGxhdGUgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0phZGV9ICRqYWRlIEphZGUgZmFjdG9yeS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBUZW1wbGF0ZVByb3ZpZGVyKCRqYWRlKSB7XG5cdHRoaXMuX2phZGUgPSAkamFkZTtcblx0dGhpcy5fdGVtcGxhdGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IEphZGUgZmFjdG9yeS5cbiAqIEB0eXBlIHtKYWRlfVxuICogQHByaXZhdGVcbiAqL1xuVGVtcGxhdGVQcm92aWRlci5wcm90b3R5cGUuX2phZGUgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2V0IG9mIHJlZ2lzdGVyZWQgdGVtcGxhdGVzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblRlbXBsYXRlUHJvdmlkZXIucHJvdG90eXBlLl90ZW1wbGF0ZXMgPSBudWxsO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBjb21waWxlZCAocHJlY29tcGlsZWQpIEphZGUgdGVtcGxhdGUuXG4gKiBodHRwOi8vamFkZWpzLmNvbS9yZWZlcmVuY2UuaHRtbFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGVtcGxhdGUgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21waWxlZCBDb21waWxlZCB0ZW1wbGF0ZSBzb3VyY2UuXG4gKi9cblRlbXBsYXRlUHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyQ29tcGlsZWQgPSBmdW5jdGlvbiAobmFtZSwgY29tcGlsZWQpIHtcblx0Ly8ganNoaW50IGV2aWw6dHJ1ZVxuXHR2YXIgZ2V0VGVtcGxhdGUgPSBuZXcgRnVuY3Rpb24oJ2phZGUnLCAncmV0dXJuICcgKyBjb21waWxlZCArICc7Jyk7XG5cdHRoaXMuX3RlbXBsYXRlc1tuYW1lXSA9IGdldFRlbXBsYXRlKHRoaXMuX2phZGUpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRlbXBsYXRlIHdpdGggc3BlY2lmaWVkIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRlbXBsYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgRGF0YSBjb250ZXh0IGZvciB0ZW1wbGF0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFByb21pc2UgZm9yIHJlbmRlcmVkIEhUTUwuXG4gKi9cblRlbXBsYXRlUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG5cdGlmICghKG5hbWUgaW4gdGhpcy5fdGVtcGxhdGVzKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHN1Y2ggdGVtcGxhdGUnKSk7XG5cdH1cblxuXHR2YXIgcHJvbWlzZTtcblx0dHJ5IHtcblx0XHRwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RlbXBsYXRlc1tuYW1lXShkYXRhKSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZSk7XG5cdH1cblx0cmV0dXJuIHByb21pc2U7XG59OyIsIi8qXG4gKiBjYXRiZXJyeS1qYWRlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktamFkZSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnktamFkZSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgSmFkZSA9IHJlcXVpcmUoJ2phZGUnKSxcblx0VGVtcGxhdGVQcm92aWRlciA9IHJlcXVpcmUoJy4vbGliL1RlbXBsYXRlUHJvdmlkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJlZ2lzdGVyOiBmdW5jdGlvbiAobG9jYXRvciwgY29uZmlnKSB7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnamFkZScsIEphZGUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3RlbXBsYXRlUHJvdmlkZXInLCBUZW1wbGF0ZVByb3ZpZGVyLCBjb25maWcsIHRydWUpO1xuXHR9LFxuXHRKYWRlOiBKYWRlLFxuXHRUZW1wbGF0ZVByb3ZpZGVyOiBUZW1wbGF0ZVByb3ZpZGVyXG59OyIsIi8qXG4gKiBjYXRiZXJyeS1sb2NhdG9yXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktbG9jYXRvcidzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnktbG9jYXRvciB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0cnVjdG9yVG9rZW5pemVyO1xuXG52YXIgU1RBVEVTID0ge1xuXHRJTExFR0FMOiAtMSxcblx0Tk86IDAsXG5cdElERU5USUZJRVI6IDEsXG5cdEZVTkNUSU9OOiAyLFxuXHRQQVJFTlRIRVNFU19PUEVOOiAzLFxuXHRQQVJFTlRIRVNFU19DTE9TRTogNCxcblx0Q09NTUE6IDUsXG5cdEVORDogNlxufTtcbkNvbnN0cnVjdG9yVG9rZW5pemVyLlNUQVRFUyA9IFNUQVRFUztcblxudmFyIEtFWVdPUkRTID0ge1xuXHRGVU5DVElPTjogJ2Z1bmN0aW9uJ1xufTtcblxudmFyIFdISVRFU1BBQ0VfVEVTVCA9IC9eXFxzJC8sXG5cdElERU5USUZJRVJfVEVTVCA9IC9eW1xcJFxcd10kLztcblxuZnVuY3Rpb24gQ29uc3RydWN0b3JUb2tlbml6ZXIoY29uc3RydWN0b3JTb3VyY2UpIHtcblx0dGhpcy5fc291cmNlID0gU3RyaW5nKGNvbnN0cnVjdG9yU291cmNlIHx8ICcnKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHNvdXJjZSBjb2RlIG9mIGNvbnN0cnVjdG9yLlxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5fc291cmNlID0gJyc7XG5cbi8qKlxuICogQ3VycmVudCBpbmRleCBpbiBzb3VyY2UgY29kZS5cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUuX2N1cnJlbnRJbmRleCA9IDA7XG5cbi8qKlxuICogQ3VycmVudCBpbmRleCBpbiBzb3VyY2UgY29kZS5cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUuX2N1cnJlbnRFbmQgPSAwO1xuXG4vKipcbiAqIEN1cnJlbnQgc3RhdGUuXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuTk87XG5cbi8qKlxuICogR2V0cyBuZXh0IHRva2VuIGluIHNvdXJjZS5cbiAqIEByZXR1cm5zIHt7c3RhdGU6IChudW1iZXIpLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcn19IFRva2VuIGRlc2NyaXB0b3IuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5fY3VycmVudFN0YXRlID09PSBTVEFURVMuSUxMRUdBTCB8fFxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9PT0gU1RBVEVTLkVORCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0ZTogdGhpcy5fY3VycmVudFN0YXRlLFxuXHRcdFx0c3RhcnQ6IHRoaXMuX2N1cnJlbnRJbmRleCxcblx0XHRcdGVuZDogdGhpcy5fY3VycmVudEluZGV4ICsgMVxuXHRcdH07XG5cdH1cblxuXHR2YXIgc3RhcnQgPSB0aGlzLl9jdXJyZW50SW5kZXgsXG5cdFx0c3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGU7XG5cblx0c3dpdGNoICh0aGlzLl9jdXJyZW50U3RhdGUpIHtcblx0XHRjYXNlIFNUQVRFUy5QQVJFTlRIRVNFU19PUEVOOlxuXHRcdFx0dGhpcy5wYXJlbnRoZXNlc09wZW5TdGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBTVEFURVMuUEFSRU5USEVTRVNfQ0xPU0U6XG5cdFx0XHR0aGlzLnBhcmVudGhlc2VzQ2xvc2VTdGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBTVEFURVMuSURFTlRJRklFUjpcblx0XHRcdHRoaXMuaWRlbnRpZmllclN0YXRlKCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFNUQVRFUy5DT01NQTpcblx0XHRcdHRoaXMuY29tbWFTdGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBTVEFURVMuRlVOQ1RJT046XG5cdFx0XHR0aGlzLmZ1bmN0aW9uU3RhdGUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aGlzLnNraXBXaGl0ZXNwYWNlKCk7XG5cdFx0XHR2YXIgZXhwZWN0ZWQgPSB0aGlzLl9zb3VyY2Uuc3Vic3RyKFxuXHRcdFx0XHR0aGlzLl9jdXJyZW50SW5kZXgsIEtFWVdPUkRTLkZVTkNUSU9OLmxlbmd0aFxuXHRcdFx0KTtcblx0XHRcdGlmIChleHBlY3RlZCA9PT0gS0VZV09SRFMuRlVOQ1RJT04pIHtcblx0XHRcdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLkZVTkNUSU9OO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5uZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRlID0gU1RBVEVTLklMTEVHQUw7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRzdGFydDogc3RhcnQsXG5cdFx0ZW5kOiB0aGlzLl9jdXJyZW50RW5kXG5cdH07XG59O1xuXG4vKipcbiAqIFNraXBzIGFsbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5za2lwV2hpdGVzcGFjZSA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKFxuXHRcdHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX3NvdXJjZS5sZW5ndGggJiZcblx0XHRXSElURVNQQUNFX1RFU1QudGVzdCh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSkpIHtcblx0XHR0aGlzLl9jdXJyZW50SW5kZXgrKztcblx0fVxufTtcblxuLyoqXG4gKiBEZXNjcmliZXMgUEFSRU5USEVTRVNfT1BFTiBzdGF0ZSBvZiBtYWNoaW5lLlxuICovXG5Db25zdHJ1Y3RvclRva2VuaXplci5wcm90b3R5cGUucGFyZW50aGVzZXNPcGVuU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRJbmRleCsrO1xuXHR0aGlzLl9jdXJyZW50RW5kID0gdGhpcy5fY3VycmVudEluZGV4O1xuXG5cdHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcblx0aWYgKElERU5USUZJRVJfVEVTVC50ZXN0KHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdKSkge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5JREVOVElGSUVSO1xuXHR9IGVsc2UgaWYgKHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdID09PSAnKScpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuUEFSRU5USEVTRVNfQ0xPU0U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLklMTEVHQUw7XG5cdH1cbn07XG5cbi8qKlxuICogRGVzY3JpYmVzIFBBUkVOVEhFU0VTX0NMT1NFIHN0YXRlIG9mIG1hY2hpbmUuXG4gKi9cbkNvbnN0cnVjdG9yVG9rZW5pemVyLnByb3RvdHlwZS5wYXJlbnRoZXNlc0Nsb3NlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRJbmRleCsrO1xuXHR0aGlzLl9jdXJyZW50RW5kID0gdGhpcy5fY3VycmVudEluZGV4O1xuXHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuRU5EO1xufTtcblxuLyoqXG4gKiBEZXNjcmliZXMgRlVOQ1RJT04gc3RhdGUgb2YgbWFjaGluZS5cbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLmZ1bmN0aW9uU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRJbmRleCArPSBLRVlXT1JEUy5GVU5DVElPTi5sZW5ndGg7XG5cdHRoaXMuX2N1cnJlbnRFbmQgPSB0aGlzLl9jdXJyZW50SW5kZXg7XG5cblx0dGhpcy5za2lwV2hpdGVzcGFjZSgpO1xuXG5cdGlmICh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSA9PT0gJygnKSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLlBBUkVOVEhFU0VTX09QRU47XG5cdH0gZWxzZSBpZiAoSURFTlRJRklFUl9URVNULnRlc3QodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0pKSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLklERU5USUZJRVI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gU1RBVEVTLklMTEVHQUw7XG5cdH1cbn07XG5cbi8qKlxuICogRGVzY3JpYmVzIElERU5USUZJRVIgc3RhdGUgb2YgbWFjaGluZS5cbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLmlkZW50aWZpZXJTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKFxuXHRcdHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX3NvdXJjZS5sZW5ndGggJiZcblx0XHRJREVOVElGSUVSX1RFU1QudGVzdCh0aGlzLl9zb3VyY2VbdGhpcy5fY3VycmVudEluZGV4XSkpIHtcblx0XHR0aGlzLl9jdXJyZW50SW5kZXgrKztcblx0fVxuXG5cdHRoaXMuX2N1cnJlbnRFbmQgPSB0aGlzLl9jdXJyZW50SW5kZXg7XG5cblx0dGhpcy5za2lwV2hpdGVzcGFjZSgpO1xuXHRpZiAodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0gPT09ICcoJykge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5QQVJFTlRIRVNFU19PUEVOO1xuXHR9IGVsc2UgaWYgKHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdID09PSAnKScpIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuUEFSRU5USEVTRVNfQ0xPU0U7XG5cdH0gZWxzZSBpZiAodGhpcy5fc291cmNlW3RoaXMuX2N1cnJlbnRJbmRleF0gPT09ICcsJykge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5DT01NQTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuSUxMRUdBTDtcblx0fVxufTtcblxuLyoqXG4gKiBEZXNjcmliZXMgQ09NTUEgc3RhdGUgb2YgbWFjaGluZS5cbiAqL1xuQ29uc3RydWN0b3JUb2tlbml6ZXIucHJvdG90eXBlLmNvbW1hU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRJbmRleCsrO1xuXHR0aGlzLl9jdXJyZW50RW5kID0gdGhpcy5fY3VycmVudEluZGV4O1xuXG5cdHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcblx0aWYgKElERU5USUZJRVJfVEVTVC50ZXN0KHRoaXMuX3NvdXJjZVt0aGlzLl9jdXJyZW50SW5kZXhdKSkge1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IFNUQVRFUy5JREVOVElGSUVSO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLl9jdXJyZW50U3RhdGUgPSBTVEFURVMuSUxMRUdBTDtcbn07IiwiLypcbiAqIGNhdGJlcnJ5LWxvY2F0b3JcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeS1sb2NhdG9yJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS1sb2NhdG9yIHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VydmljZUxvY2F0b3I7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRDb25zdHJ1Y3RvclRva2VuaXplciA9IHJlcXVpcmUoJy4vQ29uc3RydWN0b3JUb2tlbml6ZXInKTtcblxudmFyIERFUEVOREVOQ1lfUkVHRVhQID0gL15cXCRcXHcrLyxcblx0RVJST1JfQ09OU1RSVUNUT1JfU0hPVUxEX0JFX0ZVTkNUSU9OID0gJ0NvbnN0cnVjdG9yIHNob3VsZCBiZSBhIGZ1bmN0aW9uJyxcblx0RVJST1JfVFlQRV9OT1RfUkVHSVNURVJFRCA9ICdUeXBlIFwiJXNcIiBub3QgcmVnaXN0ZXJlZCcsXG5cdEVSUk9SX1RZUEVfU0hPVUxEX0JFX1NUUklORyA9ICdUeXBlIG5hbWUgXCIlc1wiIHNob3VsZCBiZSBhIHN0cmluZyc7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2Ygc2VydmljZSBsb2NhdG9yLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNlcnZpY2VMb2NhdG9yKCkge1xuXHR0aGlzLl9yZWdpc3RyYXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHR5cGUgcmVnaXN0cmF0aW9ucy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvdGVjdGVkXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS5fcmVnaXN0cmF0aW9ucyA9IG51bGw7XG5cbi8qKlxuICogUmVnaXN0ZXJzIG5ldyB0eXBlIGluIHNlcnZpY2UgbG9jYXRvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZSwgd2hpY2ggd2lsbCBiZSBhbGlhcyBpbiBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciBDb25zdHJ1Y3RvciB3aGljaFxuICogaW5pdGlhbGl6ZXMgaW5zdGFuY2Ugb2Ygc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgU2V0IG9mIG5hbWVkIHBhcmFtZXRlcnNcbiAqIHdoaWNoIHdpbGwgYmUgYWxzbyBpbmplY3RlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGlzU2luZ2xldG9uIElmIHRydWUgZXZlcnkgcmVzb2x2ZSB3aWxsIHJldHVyblxuICogdGhlIHNhbWUgaW5zdGFuY2UuXG4gKi9cblNlcnZpY2VMb2NhdG9yLnByb3RvdHlwZS5yZWdpc3RlciA9XG5cdGZ1bmN0aW9uICh0eXBlLCBjb25zdHJ1Y3RvciwgcGFyYW1ldGVycywgaXNTaW5nbGV0b24pIHtcblx0XHR0aHJvd0lmTm90RnVuY3Rpb24oY29uc3RydWN0b3IpO1xuXHRcdHRocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cblx0XHRpbml0aWFsaXplUmVnaXN0cmF0aW9uKHR5cGUsIHRoaXMpO1xuXHRcdHZhciBwYXJhbWV0ZXJOYW1lcyA9IGdldFBhcmFtZXRlck5hbWVzKGNvbnN0cnVjdG9yKTtcblxuXHRcdHRoaXMuX3JlZ2lzdHJhdGlvbnNbdHlwZV0udW5zaGlmdCh7XG5cdFx0XHRjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG5cdFx0XHRwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIHx8IHt9LFxuXHRcdFx0cGFyYW1ldGVyTmFtZXM6IHBhcmFtZXRlck5hbWVzLFxuXHRcdFx0aXNTaW5nbGV0b246IEJvb2xlYW4oaXNTaW5nbGV0b24pLFxuXHRcdFx0c2luZ2xlSW5zdGFuY2U6IG51bGxcblx0XHR9KTtcblx0fTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgc2luZ2xlIGluc3RhbmNlIGZvciBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZSBJbnN0YW5jZSB0byByZWdpc3Rlci5cbiAqL1xuU2VydmljZUxvY2F0b3IucHJvdG90eXBlLnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbiAodHlwZSwgaW5zdGFuY2UpIHtcblx0dGhyb3dJZk5vdFN0cmluZyh0eXBlKTtcblx0aW5pdGlhbGl6ZVJlZ2lzdHJhdGlvbih0eXBlLCB0aGlzKTtcblxuXHR0aGlzLl9yZWdpc3RyYXRpb25zW3R5cGVdLnVuc2hpZnQoe1xuXHRcdGNvbnN0cnVjdG9yOiBpbnN0YW5jZS5jb25zdHJ1Y3Rvcixcblx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0XHRwYXJhbWV0ZXJOYW1lczogW10sXG5cdFx0aXNTaW5nbGV0b246IHRydWUsXG5cdFx0c2luZ2xlSW5zdGFuY2U6IGluc3RhbmNlXG5cdH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyBsYXN0IHJlZ2lzdGVyZWQgaW1wbGVtZW50YXRpb24gYnkgdHlwZSBuYW1lXG4gKiBpbmNsdWRpbmcgYWxsIGl0cyBkZXBlbmRlbmNpZXMgcmVjdXJzaXZlbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBJbnN0YW5jZSBvZiBzcGVjaWZpZWQgdHlwZS5cbiAqL1xuU2VydmljZUxvY2F0b3IucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAodHlwZSkge1xuXHR0aHJvd0lmTm90U3RyaW5nKHR5cGUpO1xuXHR0aHJvd0lmTm9UeXBlKHRoaXMuX3JlZ2lzdHJhdGlvbnMsIHR5cGUpO1xuXHR2YXIgZmlyc3RSZWdpc3RyYXRpb24gPSB0aGlzLl9yZWdpc3RyYXRpb25zW3R5cGVdWzBdO1xuXHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UoZmlyc3RSZWdpc3RyYXRpb24sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyBhbGwgcmVnaXN0ZXJlZCBpbXBsZW1lbnRhdGlvbnMgYnkgdHlwZSBuYW1lXG4gKiBpbmNsdWRpbmcgYWxsIGRlcGVuZGVuY2llcyByZWN1cnNpdmVseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2YgaW5zdGFuY2VzIHNwZWNpZmllZCB0eXBlLlxuICovXG5TZXJ2aWNlTG9jYXRvci5wcm90b3R5cGUucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdHRocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cdHRyeSB7XG5cdFx0dGhyb3dJZk5vVHlwZSh0aGlzLl9yZWdpc3RyYXRpb25zLCB0eXBlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRyZXR1cm4gdGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXS5tYXAoZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuXHRcdHJldHVybiBjcmVhdGVJbnN0YW5jZShyZWdpc3RyYXRpb24sIHRoaXMpO1xuXHR9LCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgaW5zdGFuY2Ugb2Ygc3BlY2lmaWVkIGNvbnN0cnVjdG9yIGluY2x1ZGluZyBkZXBlbmRlbmNpZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciBDb25zdHJ1Y3RvciBmb3IgaW5zdGFuY2UgY3JlYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgU2V0IG9mIGl0cyBwYXJhbWV0ZXJzIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEluc3RhbmNlIG9mIHNwZWNpZmllZCBjb25zdHJ1Y3Rvci5cbiAqL1xuU2VydmljZUxvY2F0b3IucHJvdG90eXBlLnJlc29sdmVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3RvciwgcGFyYW1ldGVycykge1xuXHRyZXR1cm4gY3JlYXRlSW5zdGFuY2Uoe1xuXHRcdGNvbnN0cnVjdG9yOiBjb25zdHJ1Y3Rvcixcblx0XHRwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIHx8IHt9LFxuXHRcdHBhcmFtZXRlck5hbWVzOiBnZXRQYXJhbWV0ZXJOYW1lcyhjb25zdHJ1Y3RvciksXG5cdFx0aXNTaW5nbGV0b246IGZhbHNlLFxuXHRcdHNpbmdsZUluc3RhbmNlOiBudWxsXG5cdH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVycyBhbGwgcmVnaXN0cmF0aW9ucyBvZiBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZS5cbiAqL1xuU2VydmljZUxvY2F0b3IucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAodHlwZSkge1xuXHR0aHJvd0lmTm90U3RyaW5nKHR5cGUpO1xuXHRkZWxldGUgdGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgcmVnaXN0cmF0aW9uIGFycmF5IGZvciBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgbmFtZS5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGNvbnRleHQgQ29udGV4dCBvZiBleGVjdXRpb24uXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVSZWdpc3RyYXRpb24odHlwZSwgY29udGV4dCkge1xuXHRpZiAoISh0eXBlIGluIGNvbnRleHQuX3JlZ2lzdHJhdGlvbnMpKSB7XG5cdFx0Y29udGV4dC5fcmVnaXN0cmF0aW9uc1t0eXBlXSA9IFtdO1xuXHR9XG59XG5cbi8qKlxuICogVGhyb3dzIGVycm9yIGlmIHNwZWNpZmllZCByZWdpc3RyYXRpb24gaXMgbm90IGZvdW5kLlxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2lzdHJhdGlvbnMgQ3VycmVudCByZWdpc3RyYXRpb25zIHNldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgdG8gY2hlY2suXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZOb1R5cGUocmVnaXN0cmF0aW9ucywgdHlwZSkge1xuXHRpZiAoISh0eXBlIGluIHJlZ2lzdHJhdGlvbnMpIHx8IHJlZ2lzdHJhdGlvbnNbdHlwZV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKHV0aWwuZm9ybWF0KEVSUk9SX1RZUEVfTk9UX1JFR0lTVEVSRUQsIHR5cGUpKTtcblx0fVxufVxuXG4vKipcbiAqIFRocm93cyBlcnJvciBpZiBzcGVjaWZpZWQgY29uc3RydWN0b3IgaXMgbm90IGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciBDb25zdHJ1Y3RvciB0byBjaGVjay5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZk5vdEZ1bmN0aW9uKGNvbnN0cnVjdG9yKSB7XG5cdGlmIChjb25zdHJ1Y3RvciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX0NPTlNUUlVDVE9SX1NIT1VMRF9CRV9GVU5DVElPTik7XG59XG5cbi8qKlxuICogVGhyb3dzIGVycm9yIGlmIHNwZWNpZmllZCB0eXBlIG5hbWUgaXMgbm90IGEgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBuYW1lIHRvIGNoZWNrLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmTm90U3RyaW5nKHR5cGUpIHtcblx0aWYgKHR5cGVvZiAodHlwZSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKHV0aWwuZm9ybWF0KEVSUk9SX1RZUEVfU0hPVUxEX0JFX1NUUklORywgdHlwZSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgaW5zdGFuY2Ugb2YgdHlwZSBzcGVjaWZpZWQgYW5kIHBhcmFtZXRlcnMgaW4gcmVnaXN0cmF0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2lzdHJhdGlvbiBTcGVjaWZpZWQgcmVnaXN0cmF0aW9uIG9mIHR5cGUuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBjb250ZXh0IENvbnRleHQgb2YgZXhlY3V0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gSW5zdGFuY2Ugb2YgdHlwZSBzcGVjaWZpZWQgaW4gcmVnaXN0cmF0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShyZWdpc3RyYXRpb24sIGNvbnRleHQpIHtcblx0aWYgKHJlZ2lzdHJhdGlvbi5pc1NpbmdsZXRvbiAmJiByZWdpc3RyYXRpb24uc2luZ2xlSW5zdGFuY2UgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gcmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlO1xuXHR9XG5cblx0dmFyIGluc3RhbmNlUGFyYW1ldGVycyA9IGdldFBhcmFtZXRlcnMocmVnaXN0cmF0aW9uLCBjb250ZXh0KSxcblx0XHRpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUocmVnaXN0cmF0aW9uLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cdHJlZ2lzdHJhdGlvbi5jb25zdHJ1Y3Rvci5hcHBseShpbnN0YW5jZSwgaW5zdGFuY2VQYXJhbWV0ZXJzKTtcblxuXHRpZiAocmVnaXN0cmF0aW9uLmlzU2luZ2xldG9uKSB7XG5cdFx0cmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlID0gaW5zdGFuY2U7XG5cdH1cblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8qKlxuICogR2V0cyBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiB0eXBlIGNvbnN0cnVjdG9yLlxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2lzdHJhdGlvbiBUeXBlIHJlZ2lzdHJhdGlvbi5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGNvbnRleHQgQ29udGV4dCBvZiBleGVjdXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IG9mIHJlc29sdmVkIGRlcGVuZGVuY2llcyB0byBpbmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlcnMocmVnaXN0cmF0aW9uLCBjb250ZXh0KSB7XG5cdHJldHVybiByZWdpc3RyYXRpb24ucGFyYW1ldGVyTmFtZXMubWFwKGZ1bmN0aW9uIChwYXJhbWV0ZXJOYW1lKSB7XG5cdFx0dmFyIGRlcGVuZGVuY3lOYW1lID0gZ2V0RGVwZW5kZW5jeU5hbWUocGFyYW1ldGVyTmFtZSk7XG5cdFx0cmV0dXJuIGRlcGVuZGVuY3lOYW1lID09PSBudWxsID9cblx0XHRcdHJlZ2lzdHJhdGlvbi5wYXJhbWV0ZXJzW3BhcmFtZXRlck5hbWVdIDpcblx0XHRcdHRoaXMucmVzb2x2ZShkZXBlbmRlbmN5TmFtZSk7XG5cdH0sIGNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdldHMgbmFtZSBvZiBkZXBlbmRlbmN5IHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyTmFtZSBOYW1lIG9mIGNvbnN0cnVjdG9yIHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gTmFtZSBvZiBkZXBlbmRlbmN5IHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lOYW1lKHBhcmFtZXRlck5hbWUpIHtcblx0aWYgKCFERVBFTkRFTkNZX1JFR0VYUC50ZXN0KHBhcmFtZXRlck5hbWUpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gcGFyYW1ldGVyTmFtZS5zdWJzdHIoMSwgcGFyYW1ldGVyTmFtZS5sZW5ndGggLSAxKTtcbn1cblxuLyoqXG4gKiBHZXRzIGFsbCBwYXJhbWV0ZXIgbmFtZXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybnMge0FycmF5PHN0cmluZz59IEFycmF5IG9mIHBhcmFtZXRlciBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1ldGVyTmFtZXMoY29uc3RydWN0b3IpIHtcblx0dmFyIHNvdXJjZSA9IGNvbnN0cnVjdG9yLnRvU3RyaW5nKCksXG5cdFx0dG9rZW5pemVyID0gbmV3IENvbnN0cnVjdG9yVG9rZW5pemVyKHNvdXJjZSksXG5cdFx0cmVzdWx0ID0gW10sXG5cdFx0dG9rZW4gPSB7XG5cdFx0XHRzdGF0ZTogQ29uc3RydWN0b3JUb2tlbml6ZXIuU1RBVEVTLk5PLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRlbmQ6IDBcblx0XHR9LFxuXHRcdGFyZVBhcmFtZXRlcnNTdGFydGVkID0gZmFsc2U7XG5cblx0d2hpbGUgKFxuXHRcdHRva2VuLnN0YXRlICE9PSBDb25zdHJ1Y3RvclRva2VuaXplci5TVEFURVMuRU5EICYmXG5cdFx0dG9rZW4uc3RhdGUgIT09IENvbnN0cnVjdG9yVG9rZW5pemVyLlNUQVRFUy5JTExFR0FMKSB7XG5cdFx0dG9rZW4gPSB0b2tlbml6ZXIubmV4dCgpO1xuXHRcdGlmICh0b2tlbi5zdGF0ZSA9PT0gQ29uc3RydWN0b3JUb2tlbml6ZXIuU1RBVEVTLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdGFyZVBhcmFtZXRlcnNTdGFydGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoYXJlUGFyYW1ldGVyc1N0YXJ0ZWQgJiZcblx0XHRcdHRva2VuLnN0YXRlID09PSBDb25zdHJ1Y3RvclRva2VuaXplci5TVEFURVMuSURFTlRJRklFUikge1xuXHRcdFx0cmVzdWx0LnB1c2goc291cmNlLnN1YnN0cmluZyh0b2tlbi5zdGFydCwgdG9rZW4uZW5kKSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVUhSO1xuXG52YXIgVUhSQmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9VSFJCYXNlJyksXG5cdFByb21pc2UgPSByZXF1aXJlKCdwcm9taXNlJyksXG5cdFVSSSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LXVyaScpLlVSSSxcblx0dXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLy8gaWYgYnJvd3NlciBzdGlsbCBkb2VzIG5vdCBoYXZlIHByb21pc2VzIHRoZW4gYWRkIGl0LlxuaWYgKCEoJ1Byb21pc2UnIGluIHdpbmRvdykpIHtcblx0d2luZG93LlByb21pc2UgPSBQcm9taXNlO1xufVxuXG51dGlsLmluaGVyaXRzKFVIUiwgVUhSQmFzZSk7XG5cbnZhciBOT05fU0FGRV9IRUFERVJTID0ge1xuXHRjb29raWU6IHRydWUsXG5cdCdhY2NlcHQtY2hhcnNldCc6IHRydWVcbn07XG5cbnZhciBFUlJPUl9DT05ORUNUSU9OID0gJ0Nvbm5lY3Rpb24gZXJyb3InLFxuXHRFUlJPUl9USU1FT1VUID0gJ1JlcXVlc3QgdGltZW91dCcsXG5cdEVSUk9SX0FCT1JURUQgPSAnUmVxdWVzdCBhYm9ydGVkJztcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBjbGllbnQtc2lkZSBIVFRQKFMpIHJlcXVlc3QgaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge1dpbmRvd30gJHdpbmRvdyBDdXJyZW50IHdpbmRvdyBvYmplY3QuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVUhSKCR3aW5kb3cpIHtcblx0VUhSQmFzZS5jYWxsKHRoaXMpO1xuXHR0aGlzLndpbmRvdyA9ICR3aW5kb3c7XG59XG5cbi8qKlxuICogQ3VycmVudCBpbnN0YW5jZSBvZiB3aW5kb3cuXG4gKiBAdHlwZSB7V2luZG93fVxuICovXG5VSFIucHJvdG90eXBlLndpbmRvdyA9IG51bGw7XG5cbi8qKlxuICogRG9lcyByZXF1ZXN0IHdpdGggc3BlY2lmaWVkIHBhcmFtZXRlcnMgdXNpbmcgcHJvdG9jb2wgaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy5tZXRob2QgSFRUUCBtZXRob2QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy51cmwgVVJMIGZvciByZXF1ZXN0LlxuICogQHBhcmFtIHtVUkl9IHBhcmFtZXRlcnMudXJpIFVSSSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBwYXJhbWV0ZXJzLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtZXRlcnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQgd2l0aCBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuICogQHByb3RlY3RlZFxuICovXG5VSFIucHJvdG90eXBlLl9kb1JlcXVlc3QgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0T2JqZWN0LmtleXMocGFyYW1ldGVycy5oZWFkZXJzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRpZiAoTk9OX1NBRkVfSEVBREVSUy5oYXNPd25Qcm9wZXJ0eShuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbWV0ZXJzLmhlYWRlcnNbbmFtZV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcblx0XHR2YXIgcmVxdWVzdEVycm9yID0gbnVsbCxcblx0XHRcdHhociA9IG5ldyBzZWxmLndpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0eGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXF1ZXN0RXJyb3IgPSBuZXcgRXJyb3IoRVJST1JfQUJPUlRFRCk7XG5cdFx0XHRyZWplY3QocmVxdWVzdEVycm9yKTtcblx0XHR9O1xuXHRcdHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXF1ZXN0RXJyb3IgPSBuZXcgRXJyb3IoRVJST1JfVElNRU9VVCk7XG5cdFx0XHRyZWplY3QocmVxdWVzdEVycm9yKTtcblx0XHR9O1xuXHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVxdWVzdEVycm9yID0gbmV3IEVycm9yKHhoci5zdGF0dXNUZXh0IHx8IEVSUk9SX0NPTk5FQ1RJT04pO1xuXHRcdFx0cmVqZWN0KHJlcXVlc3RFcnJvcik7XG5cdFx0fTtcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChyZXF1ZXN0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHN0YXR1c09iamVjdCA9IGdldFN0YXR1c09iamVjdCh4aHIpLFxuXHRcdFx0XHRjb250ZW50ID0gc2VsZi5jb252ZXJ0UmVzcG9uc2UoXG5cdFx0XHRcdFx0c3RhdHVzT2JqZWN0LmhlYWRlcnMsXG5cdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dFxuXHRcdFx0XHQpO1xuXHRcdFx0ZnVsZmlsbCh7XG5cdFx0XHRcdHN0YXR1czogc3RhdHVzT2JqZWN0LFxuXHRcdFx0XHRjb250ZW50OiBjb250ZW50XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHVzZXIgPSBwYXJhbWV0ZXJzLnVyaS5hdXRob3JpdHkudXNlckluZm8gP1xuXHRcdFx0XHRwYXJhbWV0ZXJzLnVyaS5hdXRob3JpdHkudXNlckluZm8udXNlciA6IG51bGwsXG5cdFx0XHRwYXNzd29yZCA9IHBhcmFtZXRlcnMudXJpLmF1dGhvcml0eS51c2VySW5mbyA/XG5cdFx0XHRcdHBhcmFtZXRlcnMudXJpLmF1dGhvcml0eS51c2VySW5mby5wYXNzd29yZCA6IG51bGw7XG5cdFx0eGhyLm9wZW4oXG5cdFx0XHRwYXJhbWV0ZXJzLm1ldGhvZCwgcGFyYW1ldGVycy51cmkudG9TdHJpbmcoKSwgdHJ1ZSxcblx0XHRcdHVzZXIgfHwgdW5kZWZpbmVkLCBwYXNzd29yZCB8fCB1bmRlZmluZWRcblx0XHQpO1xuXHRcdHhoci50aW1lb3V0ID0gcGFyYW1ldGVycy50aW1lb3V0O1xuXG5cdFx0aWYgKHBhcmFtZXRlcnMud2l0aENyZWRlbnRpYWxzKSB7XG5cdFx0XHR4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRPYmplY3Qua2V5cyhwYXJhbWV0ZXJzLmhlYWRlcnMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyTmFtZSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFx0XHRoZWFkZXJOYW1lLCBwYXJhbWV0ZXJzLmhlYWRlcnNbaGVhZGVyTmFtZV1cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0eGhyLnNlbmQocGFyYW1ldGVycy5kYXRhKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEdldHMgc3RhdGUgb2JqZWN0IGZvciBzcGVjaWZpZWQgalF1ZXJ5IFhIUiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdD99IHhociBYSFIgb2JqZWN0LlxuICogQHJldHVybnMge3tjb2RlOiBudW1iZXIsIHRleHQ6IHN0cmluZywgaGVhZGVyczogT2JqZWN0fX0gU3RhdHVzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdHVzT2JqZWN0KHhocikge1xuXHR2YXIgaGVhZGVycyA9IHt9O1xuXG5cdGlmICgheGhyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvZGU6IDAsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcblx0XHR9O1xuXHR9XG5cblx0eGhyXG5cdFx0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcblx0XHRcdHZhciBkZWxpbWl0ZXJJbmRleCA9IGhlYWRlci5pbmRleE9mKCc6Jyk7XG5cdFx0XHRpZiAoZGVsaW1pdGVySW5kZXggPD0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgaGVhZGVyTmFtZSA9IGhlYWRlclxuXHRcdFx0XHQuc3Vic3RyaW5nKDAsIGRlbGltaXRlckluZGV4KVxuXHRcdFx0XHQudHJpbSgpXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aGVhZGVyc1toZWFkZXJOYW1lXSA9IGhlYWRlclxuXHRcdFx0XHQuc3Vic3RyaW5nKGRlbGltaXRlckluZGV4ICsgMSlcblx0XHRcdFx0LnRyaW0oKTtcblx0XHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vZ29vLmdsL2lkc3BTclxuXHRcdGNvZGU6IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzLFxuXHRcdHRleHQ6IHhoci5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiB4aHIuc3RhdHVzVGV4dCxcblx0XHRoZWFkZXJzOiBoZWFkZXJzXG5cdH07XG59IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBVSFIgPSByZXF1aXJlKCcuL2xpYi9VSFInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgVUhSIGluIHNlcnZlci1zaWRlIHNlcnZpY2UgbG9jYXRvci5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBDYXRiZXJyeSdzIHNlcnZpY2UgbG9jYXRvci5cblx0ICovXG5cdHJlZ2lzdGVyOiBmdW5jdGlvbiAobG9jYXRvcikge1xuXHRcdHZhciBjb25maWcgPSBsb2NhdG9yLnJlc29sdmUoJ2NvbmZpZycpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3VocicsIFVIUiwgY29uZmlnLCB0cnVlKTtcblx0fSxcblx0VUhSOiBVSFJcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVUhSQmFzZTtcblxudmFyIGNhdGJlcnJ5VXJpID0gcmVxdWlyZSgnY2F0YmVycnktdXJpJyksXG5cdFF1ZXJ5ID0gY2F0YmVycnlVcmkuUXVlcnksXG5cdFVSSSA9IGNhdGJlcnJ5VXJpLlVSSTtcblxudmFyIEVSUk9SX1VOU1VQUE9SVEVEX1BST1RPQ09MID0gJ1Byb3RvY29sIGlzIHVuc3VwcG9ydGVkJyxcblx0RVJST1JfUEFSQU1FVEVSU19TSE9VTERfQkVfT0JKRUNUID0gJ1JlcXVlc3QgcGFyYW1ldGVycyBzaG91bGQgYmUgb2JqZWN0Jyxcblx0RVJST1JfVVJMX0lTX1JFUVVJUkVEID0gJ1VSTCBpcyByZXF1aXJlZCBwYXJhbWV0ZXInLFxuXHRFUlJPUl9NRVRIT0RfSVNfUkVRVUlSRUQgPSAnUmVxdWVzdCBtZXRob2QgaXMgcmVxdWlyZWQgcGFyYW1ldGVyJyxcblx0RVJST1JfSE9TVF9JU19SRVFVSVJFRCA9ICdIb3N0IGluIFVSTCBpcyByZXF1aXJlZCcsXG5cdEVSUk9SX1NDSEVNRV9JU19SRVFVSVJFRCA9ICdTY2hlbWUgaW4gVVJMIGlzIHJlcXVpcmVkJyxcblx0RVJST1JfVElNRU9VVF9TSE9VTERfQkVfTlVNQkVSID0gJ1RpbWVvdXQgc2hvdWxkIGJlIGEgbnVtYmVyJyxcblx0REVGQVVMVF9USU1FT1VUID0gMzAwMDAsXG5cdEhUVFBfUFJPVE9DT0xfUkVHRVhQID0gL14oaHR0cClzPyQvaTtcblxudmFyIE1FVEhPRFMgPSB7XG5cdEdFVDogJ0dFVCcsXG5cdEhFQUQ6ICdIRUFEJyxcblx0UE9TVDogJ1BPU1QnLFxuXHRQVVQ6ICdQVVQnLFxuXHRQQVRDSDogJ1BBVENIJyxcblx0REVMRVRFOiAnREVMRVRFJyxcblx0T1BUSU9OUzogJ09QVElPTlMnLFxuXHRUUkFDRTogJ1RSQUNFJyxcblx0Q09OTkVDVDogJ0NPTk5FQ1QnXG59O1xuXG5VSFJCYXNlLlRZUEVTID0ge1xuXHRVUkxfRU5DT0RFRDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdEpTT046ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0UExBSU5fVEVYVDogJ3RleHQvcGxhaW4nLFxuXHRIVE1MOiAndGV4dC9odG1sJ1xufTtcblxuVUhSQmFzZS5DSEFSU0VUID0gJ1VURi04JztcblxuVUhSQmFzZS5ERUZBVUxUX0dFTkVSQUxfSEVBREVSUyA9IHtcblx0QWNjZXB0OiBVSFJCYXNlLlRZUEVTLkpTT04gKyAnOyBxPTAuNywgJyArXG5cdFx0VUhSQmFzZS5UWVBFUy5IVE1MICsgJzsgcT0wLjIsICcgK1xuXHRcdFVIUkJhc2UuVFlQRVMuUExBSU5fVEVYVCArICc7IHE9MC4xJyxcblx0J0FjY2VwdC1DaGFyc2V0JzogVUhSQmFzZS5DSEFSU0VUICsgJzsgcT0xJ1xufTtcblxuVUhSQmFzZS5DSEFSU0VUX1BBUkFNRVRFUiA9ICc7IGNoYXJzZXQ9JyArIFVIUkJhc2UuQ0hBUlNFVDtcblVIUkJhc2UuVVJMX0VOQ09ERURfRU5USVRZX0NPTlRFTlRfVFlQRSA9IFVIUkJhc2UuVFlQRVMuVVJMX0VOQ09ERUQgK1xuXHRVSFJCYXNlLkNIQVJTRVRfUEFSQU1FVEVSO1xuXG5VSFJCYXNlLkpTT05fRU5USVRZX0NPTlRFTlRfVFlQRSA9IFVIUkJhc2UuVFlQRVMuSlNPTiArXG5cdFVIUkJhc2UuQ0hBUlNFVF9QQVJBTUVURVI7XG5cblVIUkJhc2UuUExBSU5fVEVYVF9FTlRJVFlfQ09OVEVOVF9UWVBFID0gVUhSQmFzZS5UWVBFUy5QTEFJTl9URVhUICtcblx0VUhSQmFzZS5DSEFSU0VUX1BBUkFNRVRFUjtcblxuLy8gVGhpcyBtb2R1bGUgd2VyZSBkZXZlbG9wZWQgdXNpbmcgSFRUUC8xLjF2MiBSRkMgMjYxNlxuLy8gKGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2Lylcbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgQmFzaWMgVW5pdmVyc2FsIEhUVFAoUykgUmVxdWVzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBVSFJCYXNlKCkgeyB9XG5cbi8qKlxuICogRG9lcyBHRVQgcmVxdWVzdCB0byBIVFRQIHNlcnZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHRvIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IG9wdGlvbnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IG9wdGlvbnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcbiAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0dmFyIHBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMpO1xuXHRwYXJhbWV0ZXJzLm1ldGhvZCA9IE1FVEhPRFMuR0VUO1xuXHRwYXJhbWV0ZXJzLnVybCA9IHVybDtcblx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbWV0ZXJzKTtcbn07XG5cbi8qKlxuICogRG9lcyBQT1NUIHJlcXVlc3QgdG8gSFRUUCBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucy5oZWFkZXJzIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBvcHRpb25zLmRhdGEgRGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtudW1iZXI/fSBvcHRpb25zLnRpbWVvdXQgUmVxdWVzdCB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG4gKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHJlc3VsdCB3aXRoIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHR2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUob3B0aW9ucyk7XG5cdHBhcmFtZXRlcnMubWV0aG9kID0gTUVUSE9EUy5QT1NUO1xuXHRwYXJhbWV0ZXJzLnVybCA9IHVybDtcblx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbWV0ZXJzKTtcbn07XG5cbi8qKlxuICogRG9lcyBQVVQgcmVxdWVzdCB0byBIVFRQIHNlcnZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHRvIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IG9wdGlvbnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IG9wdGlvbnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcbiAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0dmFyIHBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMpO1xuXHRwYXJhbWV0ZXJzLm1ldGhvZCA9IE1FVEhPRFMuUFVUO1xuXHRwYXJhbWV0ZXJzLnVybCA9IHVybDtcblx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbWV0ZXJzKTtcbn07XG5cbi8qKlxuICogRG9lcyBQQVRDSCByZXF1ZXN0IHRvIEhUVFAgc2VydmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgdG8gcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMuaGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cbiAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gb3B0aW9ucy5kYXRhIERhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyP30gb3B0aW9ucy50aW1lb3V0IFJlcXVlc3QgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IG9wdGlvbnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQgd2l0aCBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuICovXG5VSFJCYXNlLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdHZhciBwYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zKTtcblx0cGFyYW1ldGVycy5tZXRob2QgPSBNRVRIT0RTLlBBVENIO1xuXHRwYXJhbWV0ZXJzLnVybCA9IHVybDtcblx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbWV0ZXJzKTtcbn07XG5cbi8qKlxuICogRG9lcyBERUxFVEUgcmVxdWVzdCB0byBIVFRQIHNlcnZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHRvIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgUmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IG9wdGlvbnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IG9wdGlvbnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcbiAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgcmVzdWx0IHdpdGggc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXHR2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUob3B0aW9ucyk7XG5cdHBhcmFtZXRlcnMubWV0aG9kID0gTUVUSE9EUy5ERUxFVEU7XG5cdHBhcmFtZXRlcnMudXJsID0gdXJsO1xuXHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtZXRlcnMpO1xufTtcblxuLyoqXG4gKiBEb2VzIHJlcXVlc3Qgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXJzLm1ldGhvZCBIVFRQIG1ldGhvZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXJzLnVybCBVUkwgZm9yIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMuaGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cbiAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gcGFyYW1ldGVycy5kYXRhIERhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyP30gcGFyYW1ldGVycy50aW1lb3V0IFJlcXVlc3QgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzXG4gKiB0byBzZXJ2ZXJzIHdpdGggaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQgd2l0aCBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuICovXG5VSFJCYXNlLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gdGhpcy5fdmFsaWRhdGVSZXF1ZXN0KHBhcmFtZXRlcnMpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRlZCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuX2RvUmVxdWVzdCh2YWxpZGF0ZWQpO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgVUhSIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBSZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy5tZXRob2QgSFRUUCBtZXRob2QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVycy51cmwgVVJMIGZvciByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IHBhcmFtZXRlcnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcj99IHBhcmFtZXRlcnMudGltZW91dCBSZXF1ZXN0IHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0c1xuICogdG8gc2VydmVycyB3aXRoIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG4vKmpzaGludCBtYXhjb21wbGV4aXR5OmZhbHNlICovXG5VSFJCYXNlLnByb3RvdHlwZS5fdmFsaWRhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcblx0aWYgKCFwYXJhbWV0ZXJzIHx8IHR5cGVvZiAocGFyYW1ldGVycykgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9QQVJBTUVURVJTX1NIT1VMRF9CRV9PQkpFQ1QpKTtcblx0fVxuXG5cdHZhciB2YWxpZGF0ZWQgPSBPYmplY3QuY3JlYXRlKHBhcmFtZXRlcnMpO1xuXG5cdGlmICh0eXBlb2YgKHBhcmFtZXRlcnMudXJsKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX1VSTF9JU19SRVFVSVJFRCkpO1xuXHR9XG5cdHZhbGlkYXRlZC51cmkgPSBuZXcgVVJJKHZhbGlkYXRlZC51cmwpO1xuXHRpZiAoIXZhbGlkYXRlZC51cmkuc2NoZW1lKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9TQ0hFTUVfSVNfUkVRVUlSRUQpKTtcblx0fVxuXHRpZiAoIUhUVFBfUFJPVE9DT0xfUkVHRVhQLnRlc3QodmFsaWRhdGVkLnVyaS5zY2hlbWUpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9VTlNVUFBPUlRFRF9QUk9UT0NPTCkpO1xuXHR9XG5cdGlmICghdmFsaWRhdGVkLnVyaS5hdXRob3JpdHkgfHwgIXZhbGlkYXRlZC51cmkuYXV0aG9yaXR5Lmhvc3QpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX0hPU1RfSVNfUkVRVUlSRUQpKTtcblx0fVxuXHRpZiAodHlwZW9mICh2YWxpZGF0ZWQubWV0aG9kKSAhPT0gJ3N0cmluZycgfHxcblx0XHQhKHZhbGlkYXRlZC5tZXRob2QgaW4gTUVUSE9EUykpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX01FVEhPRF9JU19SRVFVSVJFRCkpO1xuXHR9XG5cblx0dmFsaWRhdGVkLnRpbWVvdXQgPSB2YWxpZGF0ZWQudGltZW91dCB8fCBERUZBVUxUX1RJTUVPVVQ7XG5cdGlmICh0eXBlb2YgKHZhbGlkYXRlZC50aW1lb3V0KSAhPT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX1RJTUVPVVRfU0hPVUxEX0JFX05VTUJFUikpO1xuXHR9XG5cblx0dmFsaWRhdGVkLmhlYWRlcnMgPSB0aGlzLl9jcmVhdGVIZWFkZXJzKHZhbGlkYXRlZC5oZWFkZXJzKTtcblxuXHRpZiAoIXRoaXMuX2lzVXBzdHJlYW1SZXF1ZXN0KHBhcmFtZXRlcnMubWV0aG9kKSAmJlxuXHRcdHZhbGlkYXRlZC5kYXRhICYmIHR5cGVvZiAodmFsaWRhdGVkLmRhdGEpID09PSAnb2JqZWN0Jykge1xuXG5cdFx0dmFyIGRhdGFLZXlzID0gT2JqZWN0LmtleXModmFsaWRhdGVkLmRhdGEpO1xuXG5cdFx0aWYgKGRhdGFLZXlzLmxlbmd0aCA+IDAgJiYgIXZhbGlkYXRlZC51cmkucXVlcnkpIHtcblx0XHRcdHZhbGlkYXRlZC51cmkucXVlcnkgPSBuZXcgUXVlcnkoJycpO1xuXHRcdH1cblxuXHRcdGRhdGFLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0dmFsaWRhdGVkLnVyaS5xdWVyeS52YWx1ZXNba2V5XSA9IHZhbGlkYXRlZC5kYXRhW2tleV07XG5cdFx0fSk7XG5cdFx0dmFsaWRhdGVkLmRhdGEgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBkYXRhQW5kSGVhZGVycyA9IHRoaXMuX2dldERhdGFUb1NlbmQoXG5cdFx0XHR2YWxpZGF0ZWQuaGVhZGVycywgdmFsaWRhdGVkLmRhdGFcblx0XHQpO1xuXHRcdHZhbGlkYXRlZC5oZWFkZXJzID0gZGF0YUFuZEhlYWRlcnMuaGVhZGVycztcblx0XHR2YWxpZGF0ZWQuZGF0YSA9IGRhdGFBbmRIZWFkZXJzLmRhdGE7XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRlZCk7XG59O1xuXG4vKipcbiAqIEdldHMgZGF0YSBmb3Igc2VuZGluZyB2aWEgSFRUUCByZXF1ZXN0IHVzaW5nIENvbnRlbnQgVHlwZSBIVFRQIGhlYWRlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzIEhUVFAgaGVhZGVycy5cbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcmV0dXJucyB7e2hlYWRlcnM6IE9iamVjdCwgZGF0YTogT2JqZWN0fHN0cmluZ319IERhdGEgYW5kIGhlYWRlcnMgdG8gc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cblVIUkJhc2UucHJvdG90eXBlLl9nZXREYXRhVG9TZW5kID0gZnVuY3Rpb24gKGhlYWRlcnMsIGRhdGEpIHtcblx0dmFyIGZvdW5kID0gZmluZENvbnRlbnRUeXBlKGhlYWRlcnMpLFxuXHRcdGNvbnRlbnRUeXBlSGVhZGVyID0gZm91bmQubmFtZSxcblx0XHRjb250ZW50VHlwZSA9IGZvdW5kLnR5cGU7XG5cblx0aWYgKCFkYXRhIHx8IHR5cGVvZiAoZGF0YSkgIT09ICdvYmplY3QnKSB7XG5cdFx0ZGF0YSA9IGRhdGEgPyBTdHJpbmcoZGF0YSkgOiAnJztcblx0XHRpZiAoIWNvbnRlbnRUeXBlKSB7XG5cdFx0XHRoZWFkZXJzW2NvbnRlbnRUeXBlSGVhZGVyXSA9IFVIUkJhc2UuUExBSU5fVEVYVF9FTlRJVFlfQ09OVEVOVF9UWVBFO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdGRhdGE6IGRhdGFcblx0XHR9O1xuXHR9XG5cblx0aWYgKGNvbnRlbnRUeXBlID09PSBVSFJCYXNlLlRZUEVTLkpTT04pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cdFx0fTtcblx0fVxuXG5cdC8vIG90aGVyd2lzZSBvYmplY3Qgd2lsbCBiZSBzZW50IHdpdGhcblx0Ly8gYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXG5cdGhlYWRlcnNbY29udGVudFR5cGVIZWFkZXJdID0gVUhSQmFzZS5VUkxfRU5DT0RFRF9FTlRJVFlfQ09OVEVOVF9UWVBFO1xuXG5cdHZhciBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuXHRxdWVyeS52YWx1ZXMgPSBkYXRhO1xuXHRyZXR1cm4ge1xuXHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0ZGF0YTogcXVlcnkudG9TdHJpbmcoKVxuXHRcdFx0LnJlcGxhY2UoL1xcKy9nLCAnJTJCJylcblx0XHRcdC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXHR9O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIEhUVFAgaGVhZGVycyBmb3IgcmVxdWVzdCB1c2luZyBkZWZhdWx0cyBhbmQgY3VycmVudCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlckhlYWRlcnMgSFRUUCBoZWFkZXJzIG9mIFVIUi5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUuX2NyZWF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAocGFyYW1ldGVySGVhZGVycykge1xuXHRpZiAoIXBhcmFtZXRlckhlYWRlcnMgfHwgdHlwZW9mIChwYXJhbWV0ZXJIZWFkZXJzKSAhPT0gJ29iamVjdCcpIHtcblx0XHRwYXJhbWV0ZXJIZWFkZXJzID0ge307XG5cdH1cblx0dmFyIGhlYWRlcnMgPSB7fTtcblxuXHRPYmplY3Qua2V5cyhVSFJCYXNlLkRFRkFVTFRfR0VORVJBTF9IRUFERVJTKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXJOYW1lKSB7XG5cdFx0XHRoZWFkZXJzW2hlYWRlck5hbWVdID0gVUhSQmFzZS5ERUZBVUxUX0dFTkVSQUxfSEVBREVSU1toZWFkZXJOYW1lXTtcblx0XHR9KTtcblxuXHRPYmplY3Qua2V5cyhwYXJhbWV0ZXJIZWFkZXJzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXJOYW1lKSB7XG5cdFx0XHRpZiAocGFyYW1ldGVySGVhZGVyc1toZWFkZXJOYW1lXSA9PT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbWV0ZXJIZWFkZXJzW2hlYWRlck5hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZGVsZXRlIGhlYWRlcnNbaGVhZGVyTmFtZV07XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGhlYWRlcnNbaGVhZGVyTmFtZV0gPSBwYXJhbWV0ZXJIZWFkZXJzW2hlYWRlck5hbWVdO1xuXHRcdH0pO1xuXG5cdHJldHVybiBoZWFkZXJzO1xufTtcblxuLyoqXG4gKiBEb2VzIHJlcXVlc3Qgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycyB1c2luZyBwcm90b2NvbCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIFJlcXVlc3QgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXJzLm1ldGhvZCBIVFRQIG1ldGhvZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXJzLnVybCBVUkwgZm9yIHJlcXVlc3QuXG4gKiBAcGFyYW0ge1VSSX0gcGFyYW1ldGVycy51cmkgVVJJIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzLmhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHBhcmFtZXRlcnMuZGF0YSBEYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1ldGVycy50aW1lb3V0IFJlcXVlc3QgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG4gKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHJlc3VsdCB3aXRoIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG4gKiBAcHJvdGVjdGVkXG4gKiBAYWJzdHJhY3RcbiAqL1xuLy8ganNjczpkaXNhYmxlIGRpc2FsbG93VW51c2VkUGFyYW1zXG5VSFJCYXNlLnByb3RvdHlwZS5fZG9SZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHsgfTtcblxuLyoqXG4gKiBDb252ZXJ0cyByZXNwb25zZSBkYXRhIGFjY29yZGluZyBjb250ZW50IHR5cGUuXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyBIVFRQIGhlYWRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2VEYXRhIERhdGEgZnJvbSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd8T2JqZWN0fSBDb252ZXJ0ZWQgZGF0YS5cbiAqL1xuVUhSQmFzZS5wcm90b3R5cGUuY29udmVydFJlc3BvbnNlID0gZnVuY3Rpb24gKGhlYWRlcnMsIHJlc3BvbnNlRGF0YSkge1xuXHRpZiAodHlwZW9mIChyZXNwb25zZURhdGEpICE9PSAnc3RyaW5nJykge1xuXHRcdHJlc3BvbnNlRGF0YSA9ICcnO1xuXHR9XG5cdHZhciBmb3VuZCA9IGZpbmRDb250ZW50VHlwZShoZWFkZXJzKSxcblx0XHRjb250ZW50VHlwZSA9IGZvdW5kLnR5cGUgfHwgVUhSQmFzZS5UWVBFUy5QTEFJTl9URVhUO1xuXG5cdHN3aXRjaCAoY29udGVudFR5cGUpIHtcblx0XHRjYXNlIFVIUkJhc2UuVFlQRVMuSlNPTjpcblx0XHRcdHZhciBqc29uO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VEYXRhKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpzb24gfHwge307XG5cdFx0Y2FzZSBVSFJCYXNlLlRZUEVTLlVSTF9FTkNPREVEOlxuXHRcdFx0dmFyIG9iamVjdDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBxdWVyeSA9IG5ldyBRdWVyeShyZXNwb25zZURhdGEucmVwbGFjZSgnKycsICclMjAnKSk7XG5cdFx0XHRcdG9iamVjdCA9IHF1ZXJ5LnZhbHVlcztcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iamVjdCB8fCB7fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlRGF0YTtcblx0fVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlzIGN1cnJlbnQgcXVlcnkgbmVlZHMgdG8gdXNlIHVwc3RyZWFtLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBIVFRQIG1ldGhvZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBjdXJyZW50IEhUVFAgbWV0aG9kIG1lYW5zIHVwc3RyZWFtIHVzYWdlLlxuICogQHByb3RlY3RlZFxuICovXG5VSFJCYXNlLnByb3RvdHlwZS5faXNVcHN0cmVhbVJlcXVlc3QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG5cdHJldHVybiAoXG5cdFx0bWV0aG9kID09PSBNRVRIT0RTLlBPU1QgfHxcblx0XHRtZXRob2QgPT09IE1FVEhPRFMuUFVUIHx8XG5cdFx0bWV0aG9kID09PSBNRVRIT0RTLlBBVENIXG5cdFx0KTtcbn07XG5cbi8qKlxuICogRmluZHMgY29udGVudCB0eXBlIGhlYWRlciBpbiBoZWFkZXJzIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzIEhUVFAgaGVhZGVycy5cbiAqIEByZXR1cm5zIHt7bmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmd9fSBOYW1lIG9mIGhlYWRlciBhbmQgY29udGVudCB0eXBlLlxuICovXG5mdW5jdGlvbiBmaW5kQ29udGVudFR5cGUoaGVhZGVycykge1xuXHR2YXIgY29udGVudFR5cGVTdHJpbmcgPSAnJyxcblx0XHRjb250ZW50VHlwZUhlYWRlciA9ICdDb250ZW50LVR5cGUnO1xuXG5cdE9iamVjdC5rZXlzKGhlYWRlcnMpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpICE9PSAnY29udGVudC10eXBlJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb250ZW50VHlwZUhlYWRlciA9IGtleTtcblx0XHRcdGNvbnRlbnRUeXBlU3RyaW5nID0gaGVhZGVyc1trZXldO1xuXHRcdH0pO1xuXG5cdHZhciB0eXBlQW5kUGFyYW1ldGVycyA9IGNvbnRlbnRUeXBlU3RyaW5nLnNwbGl0KCc7JyksXG5cdFx0Y29udGVudFR5cGUgPSB0eXBlQW5kUGFyYW1ldGVyc1swXS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IGNvbnRlbnRUeXBlSGVhZGVyLFxuXHRcdHR5cGU6IGNvbnRlbnRUeXBlXG5cdH07XG59XG4iLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFVSSTogcmVxdWlyZSgnLi9saWIvVVJJJyksXG5cdEF1dGhvcml0eTogcmVxdWlyZSgnLi9saWIvQXV0aG9yaXR5JyksXG5cdFVzZXJJbmZvOiByZXF1aXJlKCcuL2xpYi9Vc2VySW5mbycpLFxuXHRRdWVyeTogcmVxdWlyZSgnLi9saWIvUXVlcnknKVxufTsiLCIvKlxuICogY2F0YmVycnktdXJpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktdXJpJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS11cmkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRob3JpdHk7XG5cbnZhciBVc2VySW5mbyA9IHJlcXVpcmUoJy4vVXNlckluZm8nKSxcblx0cGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxudmFyIFBPUlRfUkVHRVhQID0gL15cXGQrJC8sXG5cdEVSUk9SX1BPUlQgPSAnVVJJIGF1dGhvcml0eSBwb3J0IG11c3Qgc2F0aXNmeSBleHByZXNzaW9uICcgK1xuXHRcdFBPUlRfUkVHRVhQLnRvU3RyaW5nKCk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgVVJJIGF1dGhvcml0eSBjb21wb25lbnQgcGFyc2VyLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjJcbiAqIEBwYXJhbSB7c3RyaW5nP30gYXV0aG9yaXR5U3RyaW5nIFVSSSBhdXRob3JpdHkgY29tcG9uZW50IHN0cmluZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBBdXRob3JpdHkoYXV0aG9yaXR5U3RyaW5nKSB7XG5cdGlmICh0eXBlb2YgKGF1dGhvcml0eVN0cmluZykgPT09ICdzdHJpbmcnICYmIGF1dGhvcml0eVN0cmluZy5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIGZpcnN0QXRJbmRleCA9IGF1dGhvcml0eVN0cmluZy5pbmRleE9mKCdAJyk7XG5cdFx0aWYgKGZpcnN0QXRJbmRleCAhPT0gLTEpIHtcblx0XHRcdHZhciB1c2VySW5mb1N0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoMCwgZmlyc3RBdEluZGV4KTtcblx0XHRcdHRoaXMudXNlckluZm8gPSBuZXcgVXNlckluZm8odXNlckluZm9TdHJpbmcpO1xuXHRcdFx0YXV0aG9yaXR5U3RyaW5nID0gYXV0aG9yaXR5U3RyaW5nLnN1YnN0cmluZyhmaXJzdEF0SW5kZXggKyAxKTtcblx0XHR9XG5cblx0XHR2YXIgbGFzdENvbG9uSW5kZXggPSBhdXRob3JpdHlTdHJpbmcubGFzdEluZGV4T2YoJzonKTtcblx0XHRpZiAobGFzdENvbG9uSW5kZXggIT09IC0xKSB7XG5cdFx0XHR2YXIgcG9ydFN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcobGFzdENvbG9uSW5kZXggKyAxKTtcblx0XHRcdGlmIChsYXN0Q29sb25JbmRleCA9PT0gYXV0aG9yaXR5U3RyaW5nLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0dGhpcy5wb3J0ID0gJyc7XG5cdFx0XHRcdGF1dGhvcml0eVN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoMCwgbGFzdENvbG9uSW5kZXgpO1xuXHRcdFx0fSBlbHNlIGlmIChQT1JUX1JFR0VYUC50ZXN0KHBvcnRTdHJpbmcpKSB7XG5cdFx0XHRcdHRoaXMucG9ydCA9IHBvcnRTdHJpbmc7XG5cdFx0XHRcdGF1dGhvcml0eVN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoMCwgbGFzdENvbG9uSW5kZXgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuaG9zdCA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUoYXV0aG9yaXR5U3RyaW5nKTtcblx0fVxufVxuXG4vKipcbiAqIEN1cnJlbnQgdXNlciBpbmZvcm1hdGlvbi5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjFcbiAqIEB0eXBlIHtVc2VySW5mb31cbiAqL1xuQXV0aG9yaXR5LnByb3RvdHlwZS51c2VySW5mbyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBob3N0LlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjIuMlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuQXV0aG9yaXR5LnByb3RvdHlwZS5ob3N0ID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHBvcnQuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4zXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5BdXRob3JpdHkucHJvdG90eXBlLnBvcnQgPSBudWxsO1xuXG4vKipcbiAqIENsb25lcyBjdXJyZW50IGF1dGhvcml0eS5cbiAqIEByZXR1cm5zIHtBdXRob3JpdHl9IE5ldyBjbG9uZSBvZiBjdXJyZW50IG9iamVjdC5cbiAqL1xuQXV0aG9yaXR5LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGF1dGhvcml0eSA9IG5ldyBBdXRob3JpdHkoKTtcblx0aWYgKHRoaXMudXNlckluZm8pIHtcblx0XHRhdXRob3JpdHkudXNlckluZm8gPSB0aGlzLnVzZXJJbmZvLmNsb25lKCk7XG5cdH1cblx0aWYgKHR5cGVvZiAodGhpcy5ob3N0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRhdXRob3JpdHkuaG9zdCA9IHRoaXMuaG9zdDtcblx0fVxuXHRpZiAodHlwZW9mICh0aGlzLnBvcnQpID09PSAnc3RyaW5nJykge1xuXHRcdGF1dGhvcml0eS5wb3J0ID0gdGhpcy5wb3J0O1xuXHR9XG5cdHJldHVybiBhdXRob3JpdHk7XG59O1xuXG4vKipcbiAqIFJlY29tYmluZSBhbGwgYXV0aG9yaXR5IGNvbXBvbmVudHMgaW50byBhdXRob3JpdHkgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQXV0aG9yaXR5IGNvbXBvbmVudCBzdHJpbmcuXG4gKi9cbkF1dGhvcml0eS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZXN1bHQgPSAnJztcblx0aWYgKHRoaXMudXNlckluZm8pIHtcblx0XHRyZXN1bHQgKz0gdGhpcy51c2VySW5mby50b1N0cmluZygpICsgJ0AnO1xuXHR9XG5cdGlmICh0aGlzLmhvc3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvc3QgIT09IG51bGwpIHtcblx0XHR2YXIgaG9zdCA9IFN0cmluZyh0aGlzLmhvc3QpO1xuXHRcdHJlc3VsdCArPSBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZW5jb2RlSG9zdChob3N0KTtcblx0fVxuXHRpZiAodGhpcy5wb3J0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wb3J0ICE9PSBudWxsKSB7XG5cdFx0dmFyIHBvcnQgPSBTdHJpbmcodGhpcy5wb3J0KTtcblx0XHRpZiAocG9ydC5sZW5ndGggPiAwICYmICFQT1JUX1JFR0VYUC50ZXN0KHBvcnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoRVJST1JfUE9SVCk7XG5cdFx0fVxuXHRcdHJlc3VsdCArPSAnOicgKyBwb3J0O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8qXG4gKiBjYXRiZXJyeS11cmlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeS11cmkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5LXVyaSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG52YXIgcGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBVUkkgcXVlcnkgY29tcG9uZW50IHBhcnNlci5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy40XG4gKiBAcGFyYW0ge3N0cmluZz99IHF1ZXJ5U3RyaW5nIFVSSSBxdWVyeSBjb21wb25lbnQgc3RyaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFF1ZXJ5KHF1ZXJ5U3RyaW5nKSB7XG5cdGlmICh0eXBlb2YgKHF1ZXJ5U3RyaW5nKSA9PT0gJ3N0cmluZycpIHtcblx0XHR0aGlzLnZhbHVlcyA9IHt9O1xuXG5cdFx0cXVlcnlTdHJpbmdcblx0XHRcdC5zcGxpdCgnJicpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBwYWlyLnNwbGl0KCc9JyksXG5cdFx0XHRcdFx0a2V5ID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShwYXJ0c1swXSk7XG5cdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy52YWx1ZXMgJiZcblx0XHRcdFx0XHQhKHRoaXMudmFsdWVzW2tleV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlc1trZXldID0gW3RoaXMudmFsdWVzW2tleV1dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZhbHVlID0gdHlwZW9mIChwYXJ0c1sxXSkgPT09ICdzdHJpbmcnID9cblx0XHRcdFx0XHRwZXJjZW50RW5jb2RpbmdIZWxwZXIuZGVjb2RlKHBhcnRzWzFdKSA6IG51bGw7XG5cblx0XHRcdFx0aWYgKHRoaXMudmFsdWVzW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWVzW2tleV0ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0fVxufVxuXG4vKipcbiAqIEN1cnJlbnQgc2V0IG9mIHZhbHVlcyBvZiBxdWVyeS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblF1ZXJ5LnByb3RvdHlwZS52YWx1ZXMgPSBudWxsO1xuXG4vKipcbiAqIENsb25lcyBjdXJyZW50IHF1ZXJ5IHRvIGEgbmV3IG9iamVjdC5cbiAqIEByZXR1cm5zIHtRdWVyeX0gTmV3IGNsb25lIG9mIGN1cnJlbnQgb2JqZWN0LlxuICovXG5RdWVyeS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuXHRpZiAodGhpcy52YWx1ZXMpIHtcblx0XHRxdWVyeS52YWx1ZXMgPSB7fTtcblx0XHRPYmplY3Qua2V5cyh0aGlzLnZhbHVlcylcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0cXVlcnkudmFsdWVzW2tleV0gPSB0aGlzLnZhbHVlc1trZXldO1xuXHRcdFx0fSwgdGhpcyk7XG5cdH1cblx0cmV0dXJuIHF1ZXJ5O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBjdXJyZW50IHNldCBvZiBxdWVyeSB2YWx1ZXMgdG8gc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gUXVlcnkgY29tcG9uZW50IHN0cmluZy5cbiAqL1xuUXVlcnkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXRoaXMudmFsdWVzKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dmFyIHF1ZXJ5U3RyaW5nID0gJyc7XG5cdE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlc1trZXldIGluc3RhbmNlb2YgQXJyYXkgP1xuXHRcdFx0XHR0aGlzLnZhbHVlc1trZXldIDogW3RoaXMudmFsdWVzW2tleV1dO1xuXG5cdFx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cXVlcnlTdHJpbmcgKz0gJyYnICsgcGVyY2VudEVuY29kaW5nSGVscGVyXG5cdFx0XHRcdFx0LmVuY29kZVF1ZXJ5U3ViQ29tcG9uZW50KGtleSk7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcblx0XHRcdFx0cXVlcnlTdHJpbmcgKz0gJz0nICtcblx0XHRcdFx0XHRwZXJjZW50RW5jb2RpbmdIZWxwZXIuZW5jb2RlUXVlcnlTdWJDb21wb25lbnQodmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0cmV0dXJuIHF1ZXJ5U3RyaW5nLnJlcGxhY2UoL14mLywgJycpO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBVUkk7XG5cbnZhciBBdXRob3JpdHkgPSByZXF1aXJlKCcuL0F1dGhvcml0eScpLFxuXHRwZXJjZW50RW5jb2RpbmdIZWxwZXIgPSByZXF1aXJlKCcuL3BlcmNlbnRFbmNvZGluZ0hlbHBlcicpLFxuXHRRdWVyeSA9IHJlcXVpcmUoJy4vUXVlcnknKTtcblxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjYXBwZW5kaXgtQlxudmFyIFVSSV9QQVJTRV9SRUdFWFAgPSBuZXcgUmVnRXhwKFxuXHRcdCdeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT8nXG5cdCksXG5cdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4xXG5cdFNDSEVNRV9SRUdFWFAgPSAvXlthLXpdK1thLXpcXGRcXCtcXC4tXSokL2ksXG5cdEVSUk9SX1NDSEVNRSA9ICdVUkkgc2NoZW1lIG11c3Qgc2F0aXNmeSBleHByZXNzaW9uICcgK1xuXHRcdFNDSEVNRV9SRUdFWFAudG9TdHJpbmcoKSxcblx0RVJST1JfQkFTRV9TQ0hFTUUgPSAnU2NoZW1lIGNvbXBvbmVudCBpcyByZXF1aXJlZCB0byBiZSBwcmVzZW50ICcgK1xuXHRcdCdpbiBhIGJhc2UgVVJJJztcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBVUkkgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuICogQHBhcmFtIHtzdHJpbmc/fSB1cmlTdHJpbmcgVVJJIHN0cmluZyB0byBwYXJzZSBjb21wb25lbnRzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFVSSSh1cmlTdHJpbmcpIHtcblx0aWYgKHR5cGVvZiAodXJpU3RyaW5nKSAhPT0gJ3N0cmluZycpIHtcblx0XHR1cmlTdHJpbmcgPSAnJztcblx0fVxuXG5cdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I2FwcGVuZGl4LUJcblx0dmFyIG1hdGNoZXMgPSB1cmlTdHJpbmcubWF0Y2goVVJJX1BBUlNFX1JFR0VYUCk7XG5cblx0aWYgKG1hdGNoZXMpIHtcblx0XHRpZiAodHlwZW9mIChtYXRjaGVzWzJdKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuc2NoZW1lID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShtYXRjaGVzWzJdKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAobWF0Y2hlc1s0XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLmF1dGhvcml0eSA9IG5ldyBBdXRob3JpdHkobWF0Y2hlc1s0XSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbNV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5wYXRoID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZVBhdGgobWF0Y2hlc1s1XSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbN10pID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5xdWVyeSA9IG5ldyBRdWVyeShtYXRjaGVzWzddKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAobWF0Y2hlc1s5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLmZyYWdtZW50ID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShtYXRjaGVzWzldKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDdXJyZW50IFVSSSBzY2hlbWUuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuVVJJLnByb3RvdHlwZS5zY2hlbWUgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgVVJJIGF1dGhvcml0eS5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yXG4gKiBAdHlwZSB7QXV0aG9yaXR5fVxuICovXG5VUkkucHJvdG90eXBlLmF1dGhvcml0eSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBVUkkgcGF0aC5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5VUkkucHJvdG90eXBlLnBhdGggPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgVVJJIHF1ZXJ5LlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjRcbiAqIEB0eXBlIHtRdWVyeX1cbiAqL1xuVVJJLnByb3RvdHlwZS5xdWVyeSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBVUkkgZnJhZ21lbnQuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuVVJJLnByb3RvdHlwZS5mcmFnbWVudCA9IG51bGw7XG5cbi8qKlxuICogQ29udmVydHMgYSBVUkkgcmVmZXJlbmNlIHRoYXQgbWlnaHQgYmUgcmVsYXRpdmUgdG8gYSBnaXZlbiBiYXNlIFVSSVxuICogaW50byB0aGUgcmVmZXJlbmNlJ3MgdGFyZ2V0IFVSSS5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4yXG4gKiBAcGFyYW0ge1VSSX0gYmFzZVVyaSBCYXNlIFVSSS5cbiAqIEByZXR1cm5zIHtVUkl9IFJlc29sdmVkIFVSSS5cbiAqL1xuVVJJLnByb3RvdHlwZS5yZXNvbHZlUmVsYXRpdmUgPSBmdW5jdGlvbiAoYmFzZVVyaSkge1xuXHRpZiAoIWJhc2VVcmkuc2NoZW1lKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX0JBU0VfU0NIRU1FKTtcblx0fVxuXG5cdHJldHVybiB0cmFuc2Zvcm1SZWZlcmVuY2UoYmFzZVVyaSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIENsb25lcyBjdXJyZW50IFVSSSB0byBhIG5ldyBvYmplY3QuXG4gKiBAcmV0dXJucyB7VVJJfSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG4gKi9cblVSSS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciB1cmkgPSBuZXcgVVJJKCk7XG5cblx0aWYgKHR5cGVvZiAodGhpcy5zY2hlbWUpID09PSAnc3RyaW5nJykge1xuXHRcdHVyaS5zY2hlbWUgPSB0aGlzLnNjaGVtZTtcblx0fVxuXG5cdGlmICh0aGlzLmF1dGhvcml0eSkge1xuXHRcdHVyaS5hdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eS5jbG9uZSgpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAodGhpcy5wYXRoKSA9PT0gJ3N0cmluZycpIHtcblx0XHR1cmkucGF0aCA9IHRoaXMucGF0aDtcblx0fVxuXG5cdGlmICh0aGlzLnF1ZXJ5KSB7XG5cdFx0dXJpLnF1ZXJ5ID0gdGhpcy5xdWVyeS5jbG9uZSgpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAodGhpcy5mcmFnbWVudCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0dXJpLmZyYWdtZW50ID0gdGhpcy5mcmFnbWVudDtcblx0fVxuXG5cdHJldHVybiB1cmk7XG59O1xuXG4vKipcbiAqIFJlY29tcG9zZXMgVVJJIGNvbXBvbmVudHMgdG8gVVJJIHN0cmluZyxcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4zXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVUkkgc3RyaW5nLlxuICovXG5VUkkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmVzdWx0ID0gJyc7XG5cblx0aWYgKHRoaXMuc2NoZW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY2hlbWUgIT09IG51bGwpIHtcblx0XHR2YXIgc2NoZW1lID0gU3RyaW5nKHRoaXMuc2NoZW1lKTtcblx0XHRpZiAoIVNDSEVNRV9SRUdFWFAudGVzdChzY2hlbWUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0NIRU1FKTtcblx0XHR9XG5cdFx0cmVzdWx0ICs9IHNjaGVtZSArICc6Jztcblx0fVxuXG5cdGlmICh0aGlzLmF1dGhvcml0eSkge1xuXHRcdHJlc3VsdCArPSAnLy8nICsgdGhpcy5hdXRob3JpdHkudG9TdHJpbmcoKTtcblx0fVxuXG5cdHZhciBwYXRoID0gdGhpcy5wYXRoID09PSB1bmRlZmluZWQgfHwgdGhpcy5wYXRoID09PSBudWxsID9cblx0XHQnJyA6IFN0cmluZyh0aGlzLnBhdGgpO1xuXHRyZXN1bHQgKz0gcGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZVBhdGgocGF0aCk7XG5cblx0aWYgKHRoaXMucXVlcnkpIHtcblx0XHRyZXN1bHQgKz0gJz8nICsgdGhpcy5xdWVyeS50b1N0cmluZygpO1xuXHR9XG5cblx0aWYgKHRoaXMuZnJhZ21lbnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZyYWdtZW50ICE9PSBudWxsKSB7XG5cdFx0dmFyIGZyYWdtZW50ID0gU3RyaW5nKHRoaXMuZnJhZ21lbnQpO1xuXHRcdHJlc3VsdCArPSAnIycgKyBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZW5jb2RlRnJhZ21lbnQoZnJhZ21lbnQpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyByZWZlcmVuY2UgZm9yIHJlbGF0aXZlIHJlc29sdXRpb24uXG4gKiBXaG9sZSBhbGdvcml0aG0gaGFzIGJlZW4gdGFrZW4gZnJvbVxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjIuMlxuICogQHBhcmFtIHtVUkl9IGJhc2VVcmkgQmFzZSBVUkkgZm9yIHJlc29sdXRpb24uXG4gKiBAcGFyYW0ge1VSSX0gcmVmZXJlbmNlVXJpIFJlZmVyZW5jZSBVUkkgdG8gcmVzb2x2ZS5cbiAqIEByZXR1cm5zIHtVUkl9IENvbXBvbmVudHMgb2YgdGFyZ2V0IFVSSS5cbiAqL1xuLypqc2hpbnQgbWF4ZGVwdGg6ZmFsc2UgKi9cbi8qanNoaW50IG1heGNvbXBsZXhpdHk6ZmFsc2UgKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVJlZmVyZW5jZShiYXNlVXJpLCByZWZlcmVuY2VVcmkpIHtcblx0dmFyIHRhcmdldFVyaSA9IG5ldyBVUkkoJycpO1xuXG5cdGlmIChyZWZlcmVuY2VVcmkuc2NoZW1lKSB7XG5cdFx0dGFyZ2V0VXJpLnNjaGVtZSA9IHJlZmVyZW5jZVVyaS5zY2hlbWU7XG5cdFx0dGFyZ2V0VXJpLmF1dGhvcml0eSA9IHJlZmVyZW5jZVVyaS5hdXRob3JpdHkgP1xuXHRcdFx0cmVmZXJlbmNlVXJpLmF1dGhvcml0eS5jbG9uZSgpIDogcmVmZXJlbmNlVXJpLmF1dGhvcml0eTtcblx0XHR0YXJnZXRVcmkucGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHJlZmVyZW5jZVVyaS5wYXRoKTtcblx0XHR0YXJnZXRVcmkucXVlcnkgPSByZWZlcmVuY2VVcmkucXVlcnkgP1xuXHRcdFx0cmVmZXJlbmNlVXJpLnF1ZXJ5LmNsb25lKCkgOiByZWZlcmVuY2VVcmkucXVlcnk7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKHJlZmVyZW5jZVVyaS5hdXRob3JpdHkpIHtcblx0XHRcdHRhcmdldFVyaS5hdXRob3JpdHkgPSByZWZlcmVuY2VVcmkuYXV0aG9yaXR5ID9cblx0XHRcdFx0cmVmZXJlbmNlVXJpLmF1dGhvcml0eS5jbG9uZSgpIDogcmVmZXJlbmNlVXJpLmF1dGhvcml0eTtcblx0XHRcdHRhcmdldFVyaS5wYXRoID0gcmVtb3ZlRG90U2VnbWVudHMocmVmZXJlbmNlVXJpLnBhdGgpO1xuXHRcdFx0dGFyZ2V0VXJpLnF1ZXJ5ID0gcmVmZXJlbmNlVXJpLnF1ZXJ5ID9cblx0XHRcdFx0cmVmZXJlbmNlVXJpLnF1ZXJ5LmNsb25lKCkgOiByZWZlcmVuY2VVcmkucXVlcnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChyZWZlcmVuY2VVcmkucGF0aCA9PT0gJycpIHtcblx0XHRcdFx0dGFyZ2V0VXJpLnBhdGggPSBiYXNlVXJpLnBhdGg7XG5cdFx0XHRcdGlmIChyZWZlcmVuY2VVcmkucXVlcnkpIHtcblx0XHRcdFx0XHR0YXJnZXRVcmkucXVlcnkgPSByZWZlcmVuY2VVcmkucXVlcnkuY2xvbmUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRVcmkucXVlcnkgPSBiYXNlVXJpLnF1ZXJ5ID9cblx0XHRcdFx0XHRcdGJhc2VVcmkucXVlcnkuY2xvbmUoKSA6IGJhc2VVcmkucXVlcnk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChyZWZlcmVuY2VVcmkucGF0aFswXSA9PT0gJy8nKSB7XG5cdFx0XHRcdFx0dGFyZ2V0VXJpLnBhdGggPVxuXHRcdFx0XHRcdFx0cmVtb3ZlRG90U2VnbWVudHMocmVmZXJlbmNlVXJpLnBhdGgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFVyaS5wYXRoID1cblx0XHRcdFx0XHRcdG1lcmdlKGJhc2VVcmksIHJlZmVyZW5jZVVyaSk7XG5cdFx0XHRcdFx0dGFyZ2V0VXJpLnBhdGggPVxuXHRcdFx0XHRcdFx0cmVtb3ZlRG90U2VnbWVudHModGFyZ2V0VXJpLnBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhcmdldFVyaS5xdWVyeSA9IHJlZmVyZW5jZVVyaS5xdWVyeSA/XG5cdFx0XHRcdFx0cmVmZXJlbmNlVXJpLnF1ZXJ5LmNsb25lKCkgOiByZWZlcmVuY2VVcmkucXVlcnk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXRVcmkuYXV0aG9yaXR5ID0gYmFzZVVyaS5hdXRob3JpdHkgP1xuXHRcdFx0XHRiYXNlVXJpLmF1dGhvcml0eS5jbG9uZSgpIDogYmFzZVVyaS5hdXRob3JpdHk7XG5cdFx0fVxuXHRcdHRhcmdldFVyaS5zY2hlbWUgPSBiYXNlVXJpLnNjaGVtZTtcblx0fVxuXG5cdHRhcmdldFVyaS5mcmFnbWVudCA9IHJlZmVyZW5jZVVyaS5mcmFnbWVudDtcblx0cmV0dXJuIHRhcmdldFVyaTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSByZWxhdGl2ZS1wYXRoIHJlZmVyZW5jZSB3aXRoIHRoZSBwYXRoIG9mIHRoZSBiYXNlIFVSSS5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4yLjNcbiAqIEBwYXJhbSB7VVJJfSBiYXNlVXJpIENvbXBvbmVudHMgb2YgYmFzZSBVUkkuXG4gKiBAcGFyYW0ge1VSSX0gcmVmZXJlbmNlVXJpIENvbXBvbmVudHMgb2YgcmVmZXJlbmNlIFVSSS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IE1lcmdlZCBwYXRoLlxuICovXG5mdW5jdGlvbiBtZXJnZShiYXNlVXJpLCByZWZlcmVuY2VVcmkpIHtcblx0aWYgKGJhc2VVcmkuYXV0aG9yaXR5ICYmIGJhc2VVcmkucGF0aCA9PT0gJycpIHtcblx0XHRyZXR1cm4gJy8nICsgcmVmZXJlbmNlVXJpLnBhdGg7XG5cdH1cblxuXHR2YXIgc2VnbWVudHNTdHJpbmcgPSBiYXNlVXJpLnBhdGguaW5kZXhPZignLycpICE9PSAtMSA/XG5cdFx0YmFzZVVyaS5wYXRoLnJlcGxhY2UoL1xcL1teXFwvXSskLywgJy8nKSA6ICcnO1xuXG5cdHJldHVybiBzZWdtZW50c1N0cmluZyArIHJlZmVyZW5jZVVyaS5wYXRoO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgZG90cyBzZWdtZW50cyBmcm9tIFVSSSBwYXRoLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjIuNFxuICogQHBhcmFtIHtzdHJpbmd9IHVyaVBhdGggVVJJIHBhdGggd2l0aCBwb3NzaWJsZSBkb3Qgc2VnbWVudHMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVUkkgcGF0aCB3aXRob3V0IGRvdCBzZWdtZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRG90U2VnbWVudHModXJpUGF0aCkge1xuXHRpZiAoIXVyaVBhdGgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHR2YXIgaW5wdXRCdWZmZXIgPSB1cmlQYXRoLFxuXHRcdG5ld0J1ZmZlciA9ICcnLFxuXHRcdG5leHRTZWdtZW50ID0gJycsXG5cdFx0b3V0cHV0QnVmZmVyID0gJyc7XG5cblx0d2hpbGUgKGlucHV0QnVmZmVyLmxlbmd0aCAhPT0gMCkge1xuXG5cdFx0Ly8gSWYgdGhlIGlucHV0IGJ1ZmZlciBiZWdpbnMgd2l0aCBhIHByZWZpeCBvZiBcIi4uL1wiIG9yIFwiLi9cIixcblx0XHQvLyB0aGVuIHJlbW92ZSB0aGF0IHByZWZpeCBmcm9tIHRoZSBpbnB1dCBidWZmZXJcblx0XHRuZXdCdWZmZXIgPSBpbnB1dEJ1ZmZlci5yZXBsYWNlKC9eXFwuP1xcLlxcLy8sICcnKTtcblx0XHRpZiAobmV3QnVmZmVyICE9PSBpbnB1dEJ1ZmZlcikge1xuXHRcdFx0aW5wdXRCdWZmZXIgPSBuZXdCdWZmZXI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgaW5wdXQgYnVmZmVyIGJlZ2lucyB3aXRoIGEgcHJlZml4IG9mIFwiLy4vXCIgb3IgXCIvLlwiLFxuXHRcdC8vIHdoZXJlIFwiLlwiIGlzIGEgY29tcGxldGUgcGF0aCBzZWdtZW50LCB0aGVuIHJlcGxhY2UgdGhhdFxuXHRcdC8vIHByZWZpeCB3aXRoIFwiL1wiIGluIHRoZSBpbnB1dCBidWZmZXJcblx0XHRuZXdCdWZmZXIgPSBpbnB1dEJ1ZmZlci5yZXBsYWNlKC9eKChcXC9cXC5cXC8pfChcXC9cXC4kKSkvLCAnLycpO1xuXHRcdGlmIChuZXdCdWZmZXIgIT09IGlucHV0QnVmZmVyKSB7XG5cdFx0XHRpbnB1dEJ1ZmZlciA9IG5ld0J1ZmZlcjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHRoZSBpbnB1dCBidWZmZXIgYmVnaW5zIHdpdGggYSBwcmVmaXggb2YgXCIvLi4vXCIgb3IgXCIvLi5cIixcblx0XHQvLyB3aGVyZSBcIi4uXCIgaXMgYSBjb21wbGV0ZSBwYXRoIHNlZ21lbnQsIHRoZW4gcmVwbGFjZSB0aGF0XG5cdFx0Ly8gcHJlZml4IHdpdGggXCIvXCIgaW4gdGhlIGlucHV0IGJ1ZmZlciBhbmQgcmVtb3ZlIHRoZSBsYXN0XG5cdFx0Ly8gc2VnbWVudCBhbmQgaXRzIHByZWNlZGluZyBcIi9cIiAoaWYgYW55KSBmcm9tIHRoZSBvdXRwdXRcblx0XHQvLyBidWZmZXJcblx0XHRuZXdCdWZmZXIgPSBpbnB1dEJ1ZmZlci5yZXBsYWNlKC9eKChcXC9cXC5cXC5cXC8pfChcXC9cXC5cXC4kKSkvLCAnLycpO1xuXHRcdGlmIChuZXdCdWZmZXIgIT09IGlucHV0QnVmZmVyKSB7XG5cdFx0XHRvdXRwdXRCdWZmZXIgPSBvdXRwdXRCdWZmZXIucmVwbGFjZSgvXFwvW15cXC9dKyQvLCAnJyk7XG5cdFx0XHRpbnB1dEJ1ZmZlciA9IG5ld0J1ZmZlcjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHRoZSBpbnB1dCBidWZmZXIgY29uc2lzdHMgb25seSBvZiBcIi5cIiBvciBcIi4uXCIsIHRoZW4gcmVtb3ZlXG5cdFx0Ly8gdGhhdCBmcm9tIHRoZSBpbnB1dCBidWZmZXJcblx0XHRpZiAoaW5wdXRCdWZmZXIgPT09ICcuJyB8fCBpbnB1dEJ1ZmZlciA9PT0gJy4uJykge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Ly8gbW92ZSB0aGUgZmlyc3QgcGF0aCBzZWdtZW50IGluIHRoZSBpbnB1dCBidWZmZXIgdG8gdGhlIGVuZCBvZlxuXHRcdC8vIHRoZSBvdXRwdXQgYnVmZmVyLCBpbmNsdWRpbmcgdGhlIGluaXRpYWwgXCIvXCIgY2hhcmFjdGVyIChpZlxuXHRcdC8vIGFueSkgYW5kIGFueSBzdWJzZXF1ZW50IGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLFxuXHRcdC8vIHRoZSBuZXh0IFwiL1wiIGNoYXJhY3RlciBvciB0aGUgZW5kIG9mIHRoZSBpbnB1dCBidWZmZXJcblx0XHRuZXh0U2VnbWVudCA9IC9eXFwvP1teXFwvXSooXFwvfCQpLy5leGVjKGlucHV0QnVmZmVyKVswXTtcblx0XHRuZXh0U2VnbWVudCA9IG5leHRTZWdtZW50LnJlcGxhY2UoLyhbXlxcL10pKFxcLyQpLywgJyQxJyk7XG5cdFx0aW5wdXRCdWZmZXIgPSBpbnB1dEJ1ZmZlci5zdWJzdHJpbmcobmV4dFNlZ21lbnQubGVuZ3RoKTtcblx0XHRvdXRwdXRCdWZmZXIgKz0gbmV4dFNlZ21lbnQ7XG5cdH1cblxuXHRyZXR1cm4gb3V0cHV0QnVmZmVyO1xufSIsIi8qXG4gKiBjYXRiZXJyeS11cmlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeS11cmkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5LXVyaSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbmZvO1xuXG52YXIgcGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB1c2VyIGluZm9ybWF0aW9uIGNvbXBvbmVudCBwYXJzZXIuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4xXG4gKiBAcGFyYW0ge3N0cmluZz99IHVzZXJJbmZvU3RyaW5nIFVzZXIgaW5mb3JtYXRpb24gY29tcG9uZW50IHN0cmluZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBVc2VySW5mbyh1c2VySW5mb1N0cmluZykge1xuXHRpZiAodHlwZW9mICh1c2VySW5mb1N0cmluZykgPT09ICdzdHJpbmcnICYmIHVzZXJJbmZvU3RyaW5nLmxlbmd0aCA+IDApIHtcblx0XHR2YXIgcGFydHMgPSB1c2VySW5mb1N0cmluZy5zcGxpdCgnOicpO1xuXHRcdGlmICh0eXBlb2YgKHBhcnRzWzBdKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMudXNlciA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUocGFydHNbMF0pO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChwYXJ0c1sxXSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnBhc3N3b3JkID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShwYXJ0c1sxXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ3VycmVudCB1c2VyIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblVzZXJJbmZvLnByb3RvdHlwZS51c2VyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHBhc3N3b3JkLlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuVXNlckluZm8ucHJvdG90eXBlLnBhc3N3b3JkID0gbnVsbDtcblxuLyoqXG4gKiBDbG9uZXMgY3VycmVudCB1c2VyIGluZm9ybWF0aW9uLlxuICogQHJldHVybnMge1VzZXJJbmZvfSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG4gKi9cblVzZXJJbmZvLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKCk7XG5cdGlmICh0eXBlb2YgKHRoaXMudXNlcikgPT09ICdzdHJpbmcnKSB7XG5cdFx0dXNlckluZm8udXNlciA9IHRoaXMudXNlcjtcblx0fVxuXHRpZiAodHlwZW9mICh0aGlzLnBhc3N3b3JkKSA9PT0gJ3N0cmluZycpIHtcblx0XHR1c2VySW5mby5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG5cdH1cblx0cmV0dXJuIHVzZXJJbmZvO1xufTtcblxuLyoqXG4gKiBSZWNvbWJpbmVzIHVzZXIgaW5mb3JtYXRpb24gY29tcG9uZW50cyB0byB1c2VySW5mbyBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVc2VyIGluZm9ybWF0aW9uIGNvbXBvbmVudCBzdHJpbmcuXG4gKi9cblVzZXJJbmZvLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJlc3VsdCA9ICcnO1xuXHRpZiAodGhpcy51c2VyICE9PSB1bmRlZmluZWQgJiYgdGhpcy51c2VyICE9PSBudWxsKSB7XG5cdFx0dmFyIHVzZXIgPSBTdHJpbmcodGhpcy51c2VyKTtcblx0XHRyZXN1bHQgKz0gcGVyY2VudEVuY29kaW5nSGVscGVyXG5cdFx0XHQuZW5jb2RlVXNlckluZm9TdWJDb21wb25lbnQodXNlcik7XG5cdH1cblx0aWYgKHRoaXMucGFzc3dvcmQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhc3N3b3JkICE9PSBudWxsKSB7XG5cdFx0dmFyIHBhc3N3b3JkID0gU3RyaW5nKHRoaXMucGFzc3dvcmQpO1xuXHRcdHJlc3VsdCArPSAnOicgKyBwZXJjZW50RW5jb2RpbmdIZWxwZXJcblx0XHRcdC5lbmNvZGVVc2VySW5mb1N1YkNvbXBvbmVudChwYXNzd29yZCk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvKlxuICogY2F0YmVycnktdXJpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnktdXJpJ3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeS11cmkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjFcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8vIFxcdUQ4MDAtXFx1REJGRiBcXHVEQzAwLVxcdURGRkZcblx0Ly8gc3Vycm9nYXRlcyBwYWlycyBsaWtlIGVtb2ppIHdlIHNob3VsZCBpZ25vcmVcblx0LyoqXG5cdCAqIEVuY29kZXMgYXV0aG9yaXR5IHVzZXIgaW5mb3JtYXRpb24gc3ViLWNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVVc2VySW5mb1N1YkNvbXBvbmVudDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShcblx0XHRcdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjFcblx0XHRcdC9bXlxcd1xcLn5cXC0hXFwkJidcXChcXClcXCpcXCssOz1cXHVEODAwLVxcdURCRkZcXHVEQzAwLVxcdURGRkZdL2csXG5cdFx0XHRlbmNvZGVVUklDb21wb25lbnRcblx0XHQpO1xuXHR9LFxuXHQvKipcblx0ICogRW5jb2RlcyBhdXRob3JpdHkgaG9zdCBjb21wb25lbnQgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBlbmNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZW5jb2RlSG9zdDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShcblx0XHRcdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjJcblx0XHRcdC9bXlxcd1xcLn5cXC0hXFwkJidcXChcXClcXCpcXCssOz06XFxbXFxdXFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblx0LyoqXG5cdCAqIEVuY29kZXMgVVJJIHBhdGggY29tcG9uZW50IGFjY29yZGluZyB0byBSRkMgMzk4Ni5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZW5jb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGVuY29kZVBhdGg6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnNwbGl0KC8lMmYvaSlcblx0XHRcdC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnQucmVwbGFjZShcblx0XHRcdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuM1xuXHRcdFx0XHRcdC9bXlxcd1xcLn5cXC0hXFwkJidcXChcXClcXCpcXCssOz06QFxcL1xcdUQ4MDAtXFx1REJGRlxcdURDMDAtXFx1REZGRl0vZyxcblx0XHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnRcblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0XHQucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG5cdFx0XHRcdGlmICghcHJldikge1xuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY3VycmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwcmV2ICsgJyUyRicgKyBjdXJyZW50O1xuXHRcdFx0fSwgJycpO1xuXHR9LFxuXHQvKipcblx0ICogRW5jb2RlcyBxdWVyeSBzdWItY29tcG9uZW50IGFjY29yZGluZyB0byBSRkMgMzk4Ni5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZW5jb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGVuY29kZVF1ZXJ5U3ViQ29tcG9uZW50OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKFxuXHRcdFx0Ly8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjRcblx0XHRcdC9bXlxcd1xcLn5cXC0hXFwkJ1xcKFxcKVxcKlxcKyw7OkBcXC9cXD9cXHVEODAwLVxcdURCRkZcXHVEQzAwLVxcdURGRkZdL2csXG5cdFx0XHRlbmNvZGVVUklDb21wb25lbnRcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBFbmNvZGVzIFVSSSBmcmFnbWVudCBjb21wb25lbnQgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBlbmNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZW5jb2RlRnJhZ21lbnQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNVxuXHRcdFx0L1teXFx3XFwuflxcLSFcXCQmJ1xcKFxcKVxcKlxcKyw7PTpAXFwvXFw/XFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogRGVjb2RlcyBwZXJjZW50IGVuY29kZWQgY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBkZWNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IERlY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZGVjb2RlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZWNvZGVzIHBlcmNlbnQgZW5jb2RlZCBwYXRoIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZGVjb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBEZWNvZGVkIHBhdGggY29tcG9uZW50LlxuXHQgKi9cblx0ZGVjb2RlUGF0aDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcuc3BsaXQoLyUyZi9pKVxuXHRcdFx0Lm1hcChkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHQucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG5cdFx0XHRcdGlmICghcHJldikge1xuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY3VycmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwcmV2ICsgJyUyRicgKyBjdXJyZW50O1xuXHRcdFx0fSwgJycpO1xuXHR9XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGJlcnJ5O1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0Q2F0YmVycnlCYXNlID0gcmVxdWlyZSgnLi4vbGliL2Jhc2UvQ2F0YmVycnlCYXNlJyk7XG5cbnV0aWwuaW5oZXJpdHMoQ2F0YmVycnksIENhdGJlcnJ5QmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgdmVyc2lvbiBvZiBDYXRiZXJyeS5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgQ2F0YmVycnlCYXNlXG4gKi9cbmZ1bmN0aW9uIENhdGJlcnJ5KCkge1xuXHRDYXRiZXJyeUJhc2UuY2FsbCh0aGlzKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHJlcXVlc3Qgcm91dGVyLlxuICogQHR5cGUge1JlcXVlc3RSb3V0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5DYXRiZXJyeS5wcm90b3R5cGUuX3JvdXRlciA9IG51bGw7XG5cbi8qKlxuICogV3JhcHMgY3VycmVudCBIVE1MIGRvY3VtZW50IHdpdGggQ2F0YmVycnkgZXZlbnQgaGFuZGxlcnMuXG4gKi9cbkNhdGJlcnJ5LnByb3RvdHlwZS53cmFwRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX3JvdXRlciA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCdyZXF1ZXN0Um91dGVyJyk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBDYXRiZXJyeSBhcHBsaWNhdGlvbiB3aGVuIERPTSBpcyByZWFkeS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5DYXRiZXJyeS5wcm90b3R5cGUuc3RhcnRXaGVuUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cuY2F0YmVycnkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCkge1xuXHRcdHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi53cmFwRG9jdW1lbnQoKTtcblx0XHRcdHdpbmRvdy5jYXRiZXJyeSA9IHNlbGY7XG5cdFx0XHRmdWxmaWxsKCk7XG5cdFx0fSk7XG5cdH0pO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVXcmFwcGVyO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0Q29va2llV3JhcHBlckJhc2UgPSByZXF1aXJlKCcuLi9saWIvYmFzZS9Db29raWVXcmFwcGVyQmFzZScpO1xuXG51dGlsLmluaGVyaXRzKENvb2tpZVdyYXBwZXIsIENvb2tpZVdyYXBwZXJCYXNlKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgYnJvd3NlciBjb29raWUgd3JhcHBlci5cbiAqIEBwYXJhbSB7V2luZG93fSAkd2luZG93IFdpbmRvdyBvYmplY3QuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29va2llV3JhcHBlcigkd2luZG93KSB7XG5cdENvb2tpZVdyYXBwZXJCYXNlLmNhbGwodGhpcyk7XG5cdHRoaXMuX3dpbmRvdyA9ICR3aW5kb3c7XG59XG5cbi8qKlxuICogQ3VycmVudCBicm93c2VyIHdpbmRvdy5cbiAqIEB0eXBlIHtXaW5kb3d9XG4gKiBAcHJpdmF0ZVxuICovXG5Db29raWVXcmFwcGVyLnByb3RvdHlwZS5fd2luZG93ID0gbnVsbDtcblxuLyoqXG4gKiBHZXRzIGN1cnJlbnQgY29va2llIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IENvb2tpZSBzdHJpbmcuXG4gKi9cbkNvb2tpZVdyYXBwZXIucHJvdG90eXBlLmdldENvb2tpZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jb29raWUgP1xuXHRcdHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jb29raWUudG9TdHJpbmcoKSA6XG5cdFx0Jyc7XG59O1xuXG4vKipcbiAqIFNldHMgY29va2llIHRvIHRoaXMgd3JhcHBlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb29raWVTZXR1cCBDb29raWUgc2V0dXAgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZVNldHVwLmtleSBDb29raWUga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZVNldHVwLnZhbHVlIENvb2tpZSB2YWx1ZS5cbiAqIEBwYXJhbSB7bnVtYmVyP30gY29va2llU2V0dXAubWF4QWdlIE1heCBjb29raWUgYWdlIGluIHNlY29uZHMuXG4gKiBAcGFyYW0ge0RhdGU/fSBjb29raWVTZXR1cC5leHBpcmVzIEV4cGlyZSBkYXRlLlxuICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5wYXRoIFVSSSBwYXRoIGZvciBjb29raWUuXG4gKiBAcGFyYW0ge3N0cmluZz99IGNvb2tpZVNldHVwLmRvbWFpbiBDb29raWUgZG9tYWluLlxuICogQHBhcmFtIHtib29sZWFuP30gY29va2llU2V0dXAuc2VjdXJlIElzIGNvb2tpZSBzZWN1cmVkLlxuICogQHBhcmFtIHtib29sZWFuP30gY29va2llU2V0dXAuaHR0cE9ubHkgSXMgY29va2llIEhUVFAgb25seS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IENvb2tpZSBzZXR1cCBzdHJpbmcuXG4gKi9cbkNvb2tpZVdyYXBwZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChjb29raWVTZXR1cCkge1xuXHR2YXIgY29va2llID0gdGhpcy5fY29udmVydFRvQ29va2llU2V0dXAoY29va2llU2V0dXApO1xuXHR0aGlzLl93aW5kb3cuZG9jdW1lbnQuY29va2llID0gY29va2llO1xuXHRyZXR1cm4gY29va2llO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFJlbmRlcmVyO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0bW9ycGhkb20gPSByZXF1aXJlKCdtb3JwaGRvbScpLFxuXHRlcnJvckhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXJzL2Vycm9ySGVscGVyJyksXG5cdG1vZHVsZUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlcicpLFxuXHRoclRpbWVIZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvaGVscGVycy9oclRpbWVIZWxwZXInKSxcblx0RG9jdW1lbnRSZW5kZXJlckJhc2UgPSByZXF1aXJlKCcuLi9saWIvYmFzZS9Eb2N1bWVudFJlbmRlcmVyQmFzZScpO1xuXG51dGlsLmluaGVyaXRzKERvY3VtZW50UmVuZGVyZXIsIERvY3VtZW50UmVuZGVyZXJCYXNlKTtcblxudmFyIFdBUk5fSURfTk9UX1NQRUNJRklFRCA9ICdDb21wb25lbnQgXCIlc1wiIGRvZXMgbm90IGhhdmUgYW4gSUQsIHNraXBwaW5nLi4uJyxcblx0V0FSTl9TQU1FX0lEID1cblx0XHQnVGhlIGR1cGxpY2F0ZWQgSUQgXCIlc1wiIGhhcyBiZWVuIGZvdW5kLCBza2lwcGluZyBjb21wb25lbnQgXCIlc1wiLi4uJztcblxudmFyIFNQRUNJQUxfSURTID0ge1xuXHRcdCQkaGVhZDogJyQkaGVhZCcsXG5cdFx0JCRkb2N1bWVudDogJyQkZG9jdW1lbnQnXG5cdH0sXG5cdFRBR19OQU1FUyA9IHtcblx0XHRUSVRMRTogJ1RJVExFJyxcblx0XHRIVE1MOiAnSFRNTCcsXG5cdFx0SEVBRDogJ0hFQUQnLFxuXHRcdEJBU0U6ICdCQVNFJyxcblx0XHRTVFlMRTogJ1NUWUxFJyxcblx0XHRTQ1JJUFQ6ICdTQ1JJUFQnLFxuXHRcdE5PU0NSSVBUOiAnTk9TQ1JJUFQnLFxuXHRcdE1FVEE6ICdNRVRBJyxcblx0XHRMSU5LOiAnTElOSydcblx0fSxcblx0Tk9ERV9UWVBFUyA9IHtcblx0XHRFTEVNRU5UX05PREU6IDEsXG5cdFx0VEVYVF9OT0RFOiAzLFxuXHRcdFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTogNyxcblx0XHRDT01NRU5UX05PREU6IDhcblx0fSxcblx0RVJST1JfQ1JFQVRFX1dST05HX0FSR1VNRU5UUyA9ICdUYWcgbmFtZSBzaG91bGQgYmUgYSBzdHJpbmcgJyArXG5cdFx0J2FuZCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBhbiBvYmplY3QnLFxuXHRFUlJPUl9DUkVBVEVfV1JPTkdfTkFNRSA9ICdDb21wb25lbnQgZm9yIHRhZyBcIiVzXCIgbm90IGZvdW5kJyxcblx0RVJST1JfQ1JFQVRFX1dST05HX0lEID0gJ1RoZSBJRCBpcyBub3Qgc3BlY2lmaWVkIG9yIGFscmVhZHkgdXNlZCcsXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTUvV0QtdWlldmVudHMtMjAxNTAzMTkvI2V2ZW50LXR5cGVzLWxpc3Rcblx0Tk9OX0JVQkJMSU5HX0VWRU5UUyA9IHtcblx0XHRhYm9ydDogdHJ1ZSxcblx0XHRibHVyOiB0cnVlLFxuXHRcdGVycm9yOiB0cnVlLFxuXHRcdGZvY3VzOiB0cnVlLFxuXHRcdGxvYWQ6IHRydWUsXG5cdFx0bW91c2VlbnRlcjogdHJ1ZSxcblx0XHRtb3VzZWxlYXZlOiB0cnVlLFxuXHRcdHJlc2l6ZTogdHJ1ZSxcblx0XHR1bmxvYWQ6IHRydWVcblx0fTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgZG9jdW1lbnQgcmVuZGVyZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgTG9jYXRvciB0byByZXNvbHZlIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgRG9jdW1lbnRSZW5kZXJlckJhc2VcbiAqL1xuZnVuY3Rpb24gRG9jdW1lbnRSZW5kZXJlcigkc2VydmljZUxvY2F0b3IpIHtcblx0RG9jdW1lbnRSZW5kZXJlckJhc2UuY2FsbCh0aGlzLCAkc2VydmljZUxvY2F0b3IpO1xuXHR0aGlzLl9jb21wb25lbnRJbnN0YW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9jb21wb25lbnRFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dGhpcy5fY3VycmVudENoYW5nZWRTdG9yZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl93aW5kb3cgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnd2luZG93Jyk7XG5cdHRoaXMuX2xvZ2dlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdsb2dnZXInKTtcblx0dGhpcy5fY29uZmlnID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2NvbmZpZycpO1xuXHR0aGlzLl9zdG9yZURpc3BhdGNoZXIgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnc3RvcmVEaXNwYXRjaGVyJyk7XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHRoaXMuX2V2ZW50QnVzLm9uKCdzdG9yZUNoYW5nZWQnLCBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0c2VsZi5fY3VycmVudENoYW5nZWRTdG9yZXNbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0aWYgKHNlbGYuX2lzU3RhdGVDaGFuZ2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZWxmLl91cGRhdGVTdG9yZUNvbXBvbmVudHMoKTtcblx0fSk7XG59XG5cbi8qKlxuICogQ3VycmVudCBhcHBsaWNhdGlvbiBjb25maWcuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NvbmZpZyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBsb2dnZXIuXG4gKiBAdHlwZSB7TG9nZ2VyfVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2xvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzdG9yZSBkaXNwYXRjaGVyLlxuICogQHR5cGUge1N0b3JlRGlzcGF0Y2hlcn1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX3N0b3JlRGlzcGF0Y2hlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgY29tcG9uZW50IGluc3RhbmNlcyBieSB1bmlxdWUga2V5cy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY29tcG9uZW50SW5zdGFuY2VzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiBjb21wb25lbnQgZWxlbWVudHMgYnkgdW5pcXVlIGtleXMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NvbXBvbmVudEVsZW1lbnRzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiBjb21wb25lbnQgYmluZGluZ3MgYnkgdW5pcXVlIGtleXMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2NvbXBvbmVudEJpbmRpbmdzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHJvdXRpbmcgY29udGV4dC5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY3VycmVudFJvdXRpbmdDb250ZXh0ID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiBjaGFuZ2VkIHN0b3Jlcy5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY3VycmVudENoYW5nZWRTdG9yZXMgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgcHJvbWlzZSBmb3IgcmVuZGVyZWQgcGFnZS5cbiAqIEB0eXBlIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX3JlbmRlcmVkUHJvbWlzZSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzdGF0ZSBvZiB1cGRhdGluZyBjb21wb25lbnRzLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5faXNVcGRhdGluZyA9IGZhbHNlO1xuXG4vKipcbiAqIEN1cnJlbnQgYXdhaXRpbmcgcm91dGluZy5cbiAqIEB0eXBlIHt7c3RhdGU6IE9iamVjdCwgcm91dGluZ0NvbnRleHQ6IE9iamVjdH19XG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fYXdhaXRpbmdSb3V0aW5nID0gbnVsbDtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBOZXcgc3RhdGUgb2YgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcm91dGluZ0NvbnRleHQgUm91dGluZyBjb250ZXh0LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLmluaXRXaXRoU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHJvdXRpbmdDb250ZXh0KSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIHNlbGYuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLl9jdXJyZW50Um91dGluZ0NvbnRleHQgPSByb3V0aW5nQ29udGV4dDtcblx0XHRcdHJldHVybiBzZWxmLl9zdG9yZURpc3BhdGNoZXIuc2V0U3RhdGUoc3RhdGUsIHJvdXRpbmdDb250ZXh0KTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjb21wb25lbnRzID0gc2VsZi5fY29tcG9uZW50TG9hZGVyLmdldENvbXBvbmVudHNCeU5hbWVzKCksXG5cdFx0XHRcdGVsZW1lbnRzID0gc2VsZi5fZmluZENvbXBvbmVudHMoXG5cdFx0XHRcdFx0c2VsZi5fd2luZG93LmRvY3VtZW50LmJvZHksIGNvbXBvbmVudHMsIHRydWVcblx0XHRcdFx0KTtcblx0XHRcdGVsZW1lbnRzLnVuc2hpZnQoc2VsZi5fd2luZG93LmRvY3VtZW50LmhlYWQpO1xuXHRcdFx0ZWxlbWVudHMudW5zaGlmdChzZWxmLl93aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRcdHJldHVybiBzZWxmLl9pbml0aWFsV3JhcChjb21wb25lbnRzLCBlbGVtZW50cyk7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgbmV3IHN0YXRlIG9mIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIE5ldyBzdGF0ZSBvZiBhcHBsaWNhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSByb3V0aW5nQ29udGV4dCBSb3V0aW5nIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHN0YXRlLCByb3V0aW5nQ29udGV4dCkge1xuXHR0aGlzLl9hd2FpdGluZ1JvdXRpbmcgPSB7XG5cdFx0c3RhdGU6IHN0YXRlLFxuXHRcdHJvdXRpbmdDb250ZXh0OiByb3V0aW5nQ29udGV4dFxuXHR9O1xuXHRpZiAodGhpcy5faXNTdGF0ZUNoYW5naW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkUHJvbWlzZTtcblx0fVxuXG5cdC8vIHdlIHNob3VsZCBzZXQgdGhpcyBmbGFnIHRvIGF2b2lkIFwic3RvcmVDaGFuZ2VkXCJcblx0Ly8gZXZlbnQgaGFuZGxpbmcgZm9yIG5vd1xuXHR0aGlzLl9pc1N0YXRlQ2hhbmdpbmcgPSB0cnVlO1xuXG5cdHZhciBzZWxmID0gdGhpcztcblx0c2VsZi5fcmVuZGVyZWRQcm9taXNlID0gdGhpcy5fZ2V0UHJvbWlzZUZvclJlYWR5U3RhdGUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGFuZCB0aGVuIHdlIHVwZGF0ZSBhbGwgY29tcG9uZW50cyBvZiB0aGVzZSBzdG9yZXMgaW4gYSBiYXRjaC5cblx0XHRcdHJldHVybiBzZWxmLl91cGRhdGVTdG9yZUNvbXBvbmVudHMoKTtcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLl9pc1N0YXRlQ2hhbmdpbmcgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRQcm9taXNlO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGNvbXBvbmVudCBpbnRvIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBIVE1MIGVsZW1lbnQgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdD99IHJlbmRlcmluZ0NvbnRleHQgUmVuZGVyaW5nIGNvbnRleHQgZm9yIGdyb3VwIHJlbmRlcmluZy5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyQ29tcG9uZW50ID1cblx0ZnVuY3Rpb24gKGVsZW1lbnQsIHJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGlkID0gc2VsZi5fZ2V0SWQoZWxlbWVudCk7XG5cdFx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0XHRzZWxmLl9sb2dnZXIud2Fybihcblx0XHRcdFx0XHRcdHV0aWwuZm9ybWF0KFdBUk5fSURfTk9UX1NQRUNJRklFRCwgY29tcG9uZW50TmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghcmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdFx0XHRcdHJlbmRlcmluZ0NvbnRleHQgPSBzZWxmLl9jcmVhdGVSZW5kZXJpbmdDb250ZXh0KFtdKTtcblx0XHRcdFx0XHRyZW5kZXJpbmdDb250ZXh0LnJvb3RJZHNbaWRdID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjb21wb25lbnROYW1lID0gbW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZShcblx0XHRcdFx0XHRcdGVsZW1lbnQudGFnTmFtZVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0aGFkQ2hpbGRyZW4gPSBlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSxcblx0XHRcdFx0XHRjb21wb25lbnQgPSByZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0sXG5cdFx0XHRcdFx0aW5zdGFuY2UgPSBzZWxmLl9jb21wb25lbnRJbnN0YW5jZXNbaWRdO1xuXG5cdFx0XHRcdGlmICghY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlkIGluIHJlbmRlcmluZ0NvbnRleHQucmVuZGVyZWRJZHMpIHtcblx0XHRcdFx0XHRzZWxmLl9sb2dnZXIud2Fybihcblx0XHRcdFx0XHRcdHV0aWwuZm9ybWF0KFdBUk5fU0FNRV9JRCwgaWQsIGNvbXBvbmVudE5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZW5kZXJpbmdDb250ZXh0LnJlbmRlcmVkSWRzW2lkXSA9IHRydWU7XG5cblx0XHRcdFx0aWYgKCFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQgPVxuXHRcdFx0XHRcdFx0c2VsZi5fZ2V0Q29tcG9uZW50Q29udGV4dChjb21wb25lbnQsIGVsZW1lbnQpO1xuXHRcdFx0XHRcdGluc3RhbmNlID0gc2VsZi5fc2VydmljZUxvY2F0b3IucmVzb2x2ZUluc3RhbmNlKFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50LmNvbnN0cnVjdG9yLCByZW5kZXJpbmdDb250ZXh0LmNvbmZpZ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW5zdGFuY2UuJGNvbnRleHQgPSBjb21wb25lbnQuY29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0O1xuXHRcdFx0XHRcdHNlbGYuX2NvbXBvbmVudEluc3RhbmNlc1tpZF0gPSBpbnN0YW5jZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBldmVudEFyZ3MgPSB7XG5cdFx0XHRcdFx0bmFtZTogY29tcG9uZW50TmFtZSxcblx0XHRcdFx0XHRjb250ZXh0OiBpbnN0YW5jZS4kY29udGV4dFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHNlbGYuX2NvbXBvbmVudEVsZW1lbnRzW2lkXSA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IGhyVGltZUhlbHBlci5nZXQoKTtcblx0XHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50UmVuZGVyJywgZXZlbnRBcmdzKTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHVuYmluZCB0aGUgd2hvbGUgaGllcmFyY2h5IG9ubHkgYXRcblx0XHRcdFx0XHRcdC8vIHRoZSBiZWdpbm5pbmcgYW5kIG5vdCBmb3IgbmV3IGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRpZiAoIShpZCBpbiByZW5kZXJpbmdDb250ZXh0LnJvb3RJZHMpIHx8XG5cdFx0XHRcdFx0XHRcdCFoYWRDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLl91bmJpbmRBbGwoZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGluc3RhbmNlLiRjb250ZXh0LmVsZW1lbnQgIT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2UuJGNvbnRleHQgPSBzZWxmLl9nZXRDb21wb25lbnRDb250ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudCwgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIHJlbmRlck1ldGhvZCA9IG1vZHVsZUhlbHBlci5nZXRNZXRob2RUb0ludm9rZShcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2UsICdyZW5kZXInXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZShyZW5kZXJNZXRob2QpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKGRhdGFDb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tcG9uZW50LnRlbXBsYXRlLnJlbmRlcihkYXRhQ29udGV4dCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuX2hhbmRsZVJlbmRlckVycm9yKFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LCBjb21wb25lbnQsIHJlYXNvblxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG5cdFx0XHRcdFx0XHR2YXIgaXNIZWFkID0gZWxlbWVudC50YWdOYW1lID09PSBUQUdfTkFNRVMuSEVBRDtcblx0XHRcdFx0XHRcdGlmIChodG1sID09PSAnJyAmJiBpc0hlYWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIHRtcEVsZW1lbnQgPSBzZWxmLl9jcmVhdGVUZW1wb3JhcnlFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0dG1wRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNIZWFkKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuX21lcmdlSGVhZChlbGVtZW50LCB0bXBFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRtb3JwaGRvbShlbGVtZW50LCB0bXBFbGVtZW50LCB7XG5cdFx0XHRcdFx0XHRcdG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuOiBmdW5jdGlvbiAoZm91bmRFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZvdW5kRWxlbWVudCA9PT0gZWxlbWVudCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0IXNlbGYuX2lzQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudHMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvdW5kRWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHZhciBwcm9taXNlcyA9IHNlbGYuX2ZpbmRDb21wb25lbnRzKFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LCByZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudHMsIGZhbHNlXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24gKGlubmVyQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucmVuZGVyQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5uZXJDb21wb25lbnQsIHJlbmRlcmluZ0NvbnRleHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRldmVudEFyZ3MuaHJUaW1lID0gaHJUaW1lSGVscGVyLmdldChzdGFydFRpbWUpO1xuXHRcdFx0XHRcdFx0ZXZlbnRBcmdzLnRpbWUgPSBoclRpbWVIZWxwZXIudG9NaWxsaXNlY29uZHMoXG5cdFx0XHRcdFx0XHRcdGV2ZW50QXJncy5oclRpbWVcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdjb21wb25lbnRSZW5kZXJlZCcsIGV2ZW50QXJncyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fYmluZENvbXBvbmVudChlbGVtZW50KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdC8vIGNvbGxlY3RpbmcgZ2FyYmFnZSBvbmx5IHdoZW5cblx0XHRcdFx0XHRcdC8vIHRoZSBlbnRpcmUgcmVuZGVyaW5nIGlzIGZpbmlzaGVkXG5cdFx0XHRcdFx0XHRpZiAoIShpZCBpbiByZW5kZXJpbmdDb250ZXh0LnJvb3RJZHMpIHx8XG5cdFx0XHRcdFx0XHRcdCFoYWRDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLl9jb2xsZWN0UmVuZGVyaW5nR2FyYmFnZShyZW5kZXJpbmdDb250ZXh0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0XHRcdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fTtcblxuLyoqXG4gKiBHZXRzIGNvbXBvbmVudCBpbnN0YW5jZSBieSBJRC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBDb21wb25lbnQgSUQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IENvbXBvbmVudCBpbnN0YW5jZS5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuXHRyZXR1cm4gdGhpcy5fY29tcG9uZW50SW5zdGFuY2VzW2lkXSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBHZXRzIGNvbXBvbmVudCBpbnN0YW5jZSBieSBhIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCdzIEVsZW1lbnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IENvbXBvbmVudCBpbnN0YW5jZS5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50QnlFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9JRCk7XG5cdHJldHVybiB0aGlzLmdldENvbXBvbmVudEJ5SWQoaWQpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgdGhhdCBldmVyeSBpbnN0YW5jZSBvZiBjb21wb25lbnQgaGFzIGVsZW1lbnQgb24gdGhlIHBhZ2UgYW5kXG4gKiByZW1vdmVzIGFsbCByZWZlcmVuY2VzIHRvIGNvbXBvbmVudHMgcmVtb3ZlZCBmcm9tIERPTS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5jb2xsZWN0R2FyYmFnZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gdGhpcy5fZ2V0UHJvbWlzZUZvclJlYWR5U3RhdGUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXHRcdFx0T2JqZWN0LmtleXMoc2VsZi5fY29tcG9uZW50RWxlbWVudHMpXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0XHRcdGlmIChTUEVDSUFMX0lEUy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBzZWxmLl93aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBzZWxmLl91bmJpbmRDb21wb25lbnQoc2VsZi5fY29tcG9uZW50RWxlbWVudHNbaWRdKVxuXHRcdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLl9yZW1vdmVDb21wb25lbnQoaWQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZW5kZXJzIGNvbXBvbmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgTmFtZSBvZiBIVE1MIHRhZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzIEVsZW1lbnQgYXR0cmlidXRlcy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEVsZW1lbnQ+fSBQcm9taXNlIGZvciBIVE1MIGVsZW1lbnQgd2l0aCByZW5kZXJlZCBjb21wb25lbnQuXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICh0YWdOYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdGlmICh0eXBlb2YgKHRhZ05hbWUpICE9PSAnc3RyaW5nJyB8fCAhYXR0cmlidXRlcyB8fFxuXHRcdHR5cGVvZiAoYXR0cmlidXRlcykgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0bmV3IEVycm9yKEVSUk9SX0NSRUFURV9XUk9OR19BUkdVTUVOVFMpXG5cdFx0KTtcblx0fVxuXG5cdHZhciBzZWxmID0gdGhpcztcblx0cmV0dXJuIHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50cyA9IHNlbGYuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpLFxuXHRcdFx0XHRjb21wb25lbnROYW1lID0gbW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZSh0YWdOYW1lKTtcblxuXHRcdFx0aWYgKG1vZHVsZUhlbHBlci5pc0hlYWRDb21wb25lbnQoY29tcG9uZW50TmFtZSkgfHxcblx0XHRcdFx0bW9kdWxlSGVscGVyLmlzRG9jdW1lbnRDb21wb25lbnQoY29tcG9uZW50TmFtZSkgfHxcblx0XHRcdFx0IShjb21wb25lbnROYW1lIGluIGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcblx0XHRcdFx0XHRuZXcgRXJyb3IodXRpbC5mb3JtYXQoRVJST1JfQ1JFQVRFX1dST05HX05BTUUsIHRhZ05hbWUpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2FmZVRhZ05hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoY29tcG9uZW50TmFtZSk7XG5cblx0XHRcdHZhciBpZCA9IGF0dHJpYnV0ZXNbbW9kdWxlSGVscGVyLkFUVFJJQlVURV9JRF07XG5cdFx0XHRpZiAoIWlkIHx8IGlkIGluIHNlbGYuX2NvbXBvbmVudEluc3RhbmNlcykge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKEVSUk9SX0NSRUFURV9XUk9OR19JRCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNlbGYuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHNhZmVUYWdOYW1lKTtcblx0XHRcdE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gc2VsZi5yZW5kZXJDb21wb25lbnQoZWxlbWVudClcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogQ2xlYXJzIGFsbCByZWZlcmVuY2VzIHRvIHJlbW92ZWQgY29tcG9uZW50cyBkdXJpbmcgcmVuZGVyaW5nIHByb2Nlc3MuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyaW5nQ29udGV4dCBDb250ZXh0IG9mIHJlbmRlcmluZy5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9jb2xsZWN0UmVuZGVyaW5nR2FyYmFnZSA9XG5cdGZ1bmN0aW9uIChyZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdE9iamVjdC5rZXlzKHJlbmRlcmluZ0NvbnRleHQudW5ib3VuZElkcylcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0XHQvLyB0aGlzIGNvbXBvbmVudCBoYXMgYmVlbiByZW5kZXJlZCBhZ2FpbiBhbmQgd2UgZG8gbm90IG5lZWQgdG9cblx0XHRcdFx0Ly8gcmVtb3ZlIGl0LlxuXHRcdFx0XHRpZiAoaWQgaW4gcmVuZGVyaW5nQ29udGV4dC5yZW5kZXJlZElkcykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIHNvbWVvbmUgYWRkZWQgYW4gZWxlbWVudCB3aXRoIHRoZSBzYW1lIElEIGR1cmluZyB0aGVcblx0XHRcdFx0Ly8gcmVuZGVyaW5nIHByb2Nlc3Ncblx0XHRcdFx0aWYgKHNlbGYuX3dpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWxmLl9yZW1vdmVDb21wb25lbnQoaWQpO1xuXHRcdFx0fSk7XG5cdH07XG5cbi8qKlxuICogVW5iaW5kcyBhbGwgZXZlbnQgaGFuZGxlcnMgZnJvbSBzcGVjaWZpZWQgY29tcG9uZW50IGFuZCBhbGwgaXQncyBkZXNjZW5kYW50cy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBDb21wb25lbnQgSFRNTCBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHJlbmRlcmluZ0NvbnRleHQgQ29udGV4dCBvZiByZW5kZXJpbmcuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl91bmJpbmRBbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dCkge1xuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0cm9vdElkID0gdGhpcy5fZ2V0SWQoZWxlbWVudCksXG5cdFx0cHJvbWlzZXMgPSBbXTtcblxuXHRzZWxmLl9maW5kQ29tcG9uZW50cyhlbGVtZW50LCByZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudHMsIHRydWUpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGlubmVyRWxlbWVudCkge1xuXHRcdFx0dmFyIGlkID0gc2VsZi5fZ2V0SWQoaW5uZXJFbGVtZW50KTtcblx0XHRcdHJlbmRlcmluZ0NvbnRleHQudW5ib3VuZElkc1tpZF0gPSB0cnVlO1xuXHRcdFx0cHJvbWlzZXMucHVzaChzZWxmLl91bmJpbmRDb21wb25lbnQoaW5uZXJFbGVtZW50KSk7XG5cdFx0fSk7XG5cblx0cmVuZGVyaW5nQ29udGV4dC51bmJvdW5kSWRzW3Jvb3RJZF0gPSB0cnVlO1xuXHRwcm9taXNlcy5wdXNoKHRoaXMuX3VuYmluZENvbXBvbmVudChlbGVtZW50KSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbi8qKlxuICogVW5iaW5kcyBhbGwgZXZlbnQgaGFuZGxlcnMgZnJvbSBzcGVjaWZpZWQgY29tcG9uZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCBIVE1MIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl91bmJpbmRDb21wb25lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHR2YXIgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRpbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdGlmICghaW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblx0aWYgKGlkIGluIHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzKSB7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50QmluZGluZ3NbaWRdKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0ZXZlbnROYW1lLFxuXHRcdFx0XHRcdHNlbGYuX2NvbXBvbmVudEJpbmRpbmdzW2lkXVtldmVudE5hbWVdLmhhbmRsZXIsXG5cdFx0XHRcdFx0Tk9OX0JVQkJMSU5HX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRkZWxldGUgdGhpcy5fY29tcG9uZW50QmluZGluZ3NbaWRdO1xuXHR9XG5cdHZhciB1bmJpbmRNZXRob2QgPSBtb2R1bGVIZWxwZXIuZ2V0TWV0aG9kVG9JbnZva2UoaW5zdGFuY2UsICd1bmJpbmQnKTtcblx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZSh1bmJpbmRNZXRob2QpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50VW5ib3VuZCcsIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0aWQ6ICFTUEVDSUFMX0lEUy5oYXNPd25Qcm9wZXJ0eShpZCkgPyBpZCA6IG51bGxcblx0XHRcdH0pO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBjb21wb25lbnQgZnJvbSB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBDb21wb25lbnQncyBJRFxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX3JlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuXHRkZWxldGUgdGhpcy5fY29tcG9uZW50RWxlbWVudHNbaWRdO1xuXHRkZWxldGUgdGhpcy5fY29tcG9uZW50SW5zdGFuY2VzW2lkXTtcblx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXTtcbn07XG5cbi8qKlxuICogQmluZHMgYWxsIHJlcXVpcmVkIGV2ZW50IGhhbmRsZXJzIHRvIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBDb21wb25lbnQgSFRNTCBlbGVtZW50LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fYmluZENvbXBvbmVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciBpZCA9IHRoaXMuX2dldElkKGVsZW1lbnQpLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdGluc3RhbmNlID0gdGhpcy5fY29tcG9uZW50SW5zdGFuY2VzW2lkXTtcblx0aWYgKCFpbnN0YW5jZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHZhciBiaW5kTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKGluc3RhbmNlLCAnYmluZCcpO1xuXHRyZXR1cm4gbW9kdWxlSGVscGVyLmdldFNhZmVQcm9taXNlKGJpbmRNZXRob2QpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKGJpbmRpbmdzKSB7XG5cdFx0XHRpZiAoIWJpbmRpbmdzIHx8IHR5cGVvZiAoYmluZGluZ3MpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdjb21wb25lbnRCb3VuZCcsIHtcblx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdGlkOiAhU1BFQ0lBTF9JRFMuaGFzT3duUHJvcGVydHkoaWQpID8gaWQgOiBudWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZWxmLl9jb21wb25lbnRCaW5kaW5nc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0T2JqZWN0LmtleXMoYmluZGluZ3MpXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcblx0XHRcdFx0XHRldmVudE5hbWUgPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRpZiAoZXZlbnROYW1lIGluIHNlbGYuX2NvbXBvbmVudEJpbmRpbmdzW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgc2VsZWN0b3JIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoYmluZGluZ3NbZXZlbnROYW1lXSlcblx0XHRcdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0XHR2YXIgaGFuZGxlciA9IGJpbmRpbmdzW2V2ZW50TmFtZV1bc2VsZWN0b3JdO1xuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIChoYW5kbGVyKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvckhhbmRsZXJzW3NlbGVjdG9yXSA9IGhhbmRsZXIuYmluZChpbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZWxmLl9jb21wb25lbnRCaW5kaW5nc1tpZF1bZXZlbnROYW1lXSA9IHtcblx0XHRcdFx0XHRcdGhhbmRsZXI6IHNlbGYuX2NyZWF0ZUJpbmRpbmdIYW5kbGVyKFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LCBzZWxlY3RvckhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0c2VsZWN0b3JIYW5kbGVyczogc2VsZWN0b3JIYW5kbGVyc1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0ZXZlbnROYW1lLFxuXHRcdFx0XHRcdFx0c2VsZi5fY29tcG9uZW50QmluZGluZ3NbaWRdW2V2ZW50TmFtZV0uaGFuZGxlcixcblx0XHRcdFx0XHRcdE5PTl9CVUJCTElOR19FVkVOVFMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50Qm91bmQnLCB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fSk7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdW5pdmVyc2FsIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGVnYXRlZCBldmVudHMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbXBvbmVudFJvb3QgUm9vdCBlbGVtZW50IG9mIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvckhhbmRsZXJzIE1hcCBvZiBldmVudCBoYW5kbGVycyBieSBDU1Mgc2VsZWN0b3JzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBVbml2ZXJzYWwgZXZlbnQgaGFuZGxlciBmb3IgZGVsZWdhdGVkIGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9jcmVhdGVCaW5kaW5nSGFuZGxlciA9XG5cdGZ1bmN0aW9uIChjb21wb25lbnRSb290LCBzZWxlY3RvckhhbmRsZXJzKSB7XG5cdFx0dmFyIHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ySGFuZGxlcnMpO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBkaXNwYXRjaGVkRXZlbnQgPSBjcmVhdGVDdXN0b21FdmVudChldmVudCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxlbWVudCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0dGFyZ2V0TWF0Y2hlcyA9IGdldE1hdGNoZXNNZXRob2QoZWxlbWVudCksXG5cdFx0XHRcdGlzSGFuZGxlZCA9IHNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRNYXRjaGVzKHNlbGVjdG9yKSkge1xuXHRcdFx0XHRcdFx0c2VsZWN0b3JIYW5kbGVyc1tzZWxlY3Rvcl0oZGlzcGF0Y2hlZEV2ZW50KTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0aWYgKGlzSGFuZGxlZCB8fCAhZXZlbnQuYnViYmxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlIChlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudCAhPT0gY29tcG9uZW50Um9vdCkge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR0YXJnZXRNYXRjaGVzID0gZ2V0TWF0Y2hlc01ldGhvZChlbGVtZW50KTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldE1hdGNoZXMoc2VsZWN0b3JzW2ldKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlzSGFuZGxlZCA9IHRydWU7XG5cdFx0XHRcdFx0c2VsZWN0b3JIYW5kbGVyc1tzZWxlY3RvcnNbaV1dKGRpc3BhdGNoZWRFdmVudCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNIYW5kbGVkKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZWxlbWVudCBpcyBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnRzIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9pc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnRzLCBlbGVtZW50KSB7XG5cdHZhciBjdXJyZW50Tm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXHRyZXR1cm4gbW9kdWxlSGVscGVyLkNPTVBPTkVOVF9QUkVGSVhfUkVHRVhQLnRlc3QoY3VycmVudE5vZGVOYW1lKSAmJlxuXHRcdChtb2R1bGVIZWxwZXIuZ2V0T3JpZ2luYWxDb21wb25lbnROYW1lKGN1cnJlbnROb2RlTmFtZSkgaW4gY29tcG9uZW50cyk7XG59O1xuXG4vKipcbiAqIEZpbmRzIGFsbCBkZXNjZW5kYW50IGNvbXBvbmVudHMgb2Ygc3BlY2lmaWVkIGNvbXBvbmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFJvb3QgY29tcG9uZW50IEhUTUwgZWxlbWVudCB0byBiZWdpbiBzZWFyY2ggd2l0aC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnRzIE1hcCBvZiBjb21wb25lbnRzIGJ5IG5hbWVzLlxuICogQHBhcmFtIHtib29sZWFufSBnb0luQ29tcG9uZW50cyBHbyBpbnNpZGUgbmVzdGVkIGNvbXBvbmVudHMuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fZmluZENvbXBvbmVudHMgPVxuXHRmdW5jdGlvbiAoZWxlbWVudCwgY29tcG9uZW50cywgZ29JbkNvbXBvbmVudHMpIHtcblx0XHR2YXIgZWxlbWVudHMgPSBbXSxcblx0XHRcdHF1ZXVlID0gW2VsZW1lbnRdLFxuXHRcdFx0Y3VycmVudENoaWxkcmVuLCBpO1xuXG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdGN1cnJlbnRDaGlsZHJlbiA9IHF1ZXVlLnNoaWZ0KCkuY2hpbGROb2Rlcztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjdXJyZW50Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly8gd2UgbmVlZCBvbmx5IEVsZW1lbnQgbm9kZXNcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZHJlbltpXS5ub2RlVHlwZSAhPT0gMSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYW5kIHRoZXkgc2hvdWxkIGJlIGNvbXBvbmVudHNcblx0XHRcdFx0aWYgKCF0aGlzLl9pc0NvbXBvbmVudChjb21wb25lbnRzLCBjdXJyZW50Q2hpbGRyZW5baV0pKSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaChjdXJyZW50Q2hpbGRyZW5baV0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGdvSW5Db21wb25lbnRzKSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaChjdXJyZW50Q2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnRzLnB1c2goY3VycmVudENoaWxkcmVuW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudHM7XG5cdH07XG5cbi8qKlxuICogSGFuZGxlcyBlcnJvciB3aGlsZSByZW5kZXJpbmcuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQ29tcG9uZW50IEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IGluc3RhbmNlLlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgRXJyb3IgdG8gaGFuZGxlLlxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUHJvbWlzZSBmb3IgSFRNTCBzdHJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5faGFuZGxlUmVuZGVyRXJyb3IgPVxuXHRmdW5jdGlvbiAoZWxlbWVudCwgY29tcG9uZW50LCBlcnJvcikge1xuXHRcdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXG5cdFx0Ly8gZG8gbm90IGNvcnJ1cHQgZXhpc3RlZCBIRUFEIHdoZW4gZXJyb3Igb2NjdXJzXG5cdFx0aWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gVEFHX05BTUVTLkhFQUQpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5fY29uZmlnLmlzUmVsZWFzZSAmJiBlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVycm9ySGVscGVyLnByZXR0eVByaW50KFxuXHRcdFx0XHRlcnJvciwgdGhpcy5fd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdCkpO1xuXHRcdH0gZWxzZSBpZiAoY29tcG9uZW50LmVycm9yVGVtcGxhdGUpIHtcblx0XHRcdHJldHVybiBjb21wb25lbnQuZXJyb3JUZW1wbGF0ZS5yZW5kZXIoZXJyb3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xuXHR9O1xuXG4vKipcbiAqIFVwZGF0ZXMgYWxsIGNvbXBvbmVudHMgdGhhdCBkZXBlbmQgb24gY3VycmVudCBzZXQgb2YgY2hhbmdlZCBzdG9yZXMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl91cGRhdGVTdG9yZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLl9pc1VwZGF0aW5nKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdC8vIGlmIGRvY3VtZW50IGNvbXBvbmVudCBpcyBjaGFuZ2VkIHdlIHNob3VsZCByZWxvYWQgdGhlIHBhZ2Vcblx0dmFyIGRvY3VtZW50U3RvcmUgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcblx0XHRtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFXG5cdCk7XG5cdGlmIChkb2N1bWVudFN0b3JlIGluIHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzKSB7XG5cdFx0dmFyIG5ld0xvY2F0aW9uID0gdGhpcy5fY3VycmVudFJvdXRpbmdDb250ZXh0LmxvY2F0aW9uLnRvU3RyaW5nKCk7XG5cdFx0aWYgKG5ld0xvY2F0aW9uID09PSB0aGlzLl93aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSkge1xuXHRcdFx0dGhpcy5fd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHR0aGlzLl93aW5kb3cubG9jYXRpb24uYXNzaWduKG5ld0xvY2F0aW9uKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHR0aGlzLl9pc1VwZGF0aW5nID0gdHJ1ZTtcblxuXHQvLyBpZiB3ZSBoYXZlIGF3YWl0aW5nIHJvdXRpbmcgd2Ugc2hvdWxkIGFwcGx5IHN0YXRlIHRvIHRoZSBzdG9yZXNcblx0aWYgKHRoaXMuX2F3YWl0aW5nUm91dGluZykge1xuXHRcdHZhciBjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50TG9hZGVyLmdldENvbXBvbmVudHNCeU5hbWVzKCksXG5cdFx0XHRjaGFuZ2VkQnlTdGF0ZSA9IHRoaXMuX3N0b3JlRGlzcGF0Y2hlci5zZXRTdGF0ZShcblx0XHRcdFx0dGhpcy5fYXdhaXRpbmdSb3V0aW5nLnN0YXRlLFxuXHRcdFx0XHR0aGlzLl9hd2FpdGluZ1JvdXRpbmcucm91dGluZ0NvbnRleHRcblx0XHRcdCk7XG5cblx0XHRjaGFuZ2VkQnlTdGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRzZWxmLl9jdXJyZW50Q2hhbmdlZFN0b3Jlc1tuYW1lXSA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHQvLyB3ZSBzaG91bGQgdXBkYXRlIGNvbnRleHRzIG9mIHRoZSBzdG9yZXMgd2l0aCB0aGUgbmV3IHJvdXRpbmcgY29udGV4dFxuXHRcdHRoaXMuX2N1cnJlbnRSb3V0aW5nQ29udGV4dCA9IHRoaXMuX2F3YWl0aW5nUm91dGluZy5yb3V0aW5nQ29udGV4dDtcblx0XHRPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRJbnN0YW5jZXMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0dmFyIGluc3RhbmNlID0gc2VsZi5fY29tcG9uZW50SW5zdGFuY2VzW2lkXTtcblx0XHRcdFx0aW5zdGFuY2UuJGNvbnRleHQgPSBzZWxmLl9nZXRDb21wb25lbnRDb250ZXh0KFxuXHRcdFx0XHRcdGNvbXBvbmVudHNbaW5zdGFuY2UuJGNvbnRleHQubmFtZV0sXG5cdFx0XHRcdFx0aW5zdGFuY2UuJGNvbnRleHQuZWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy5fYXdhaXRpbmdSb3V0aW5nID0gbnVsbDtcblx0fVxuXG5cdHZhciBjaGFuZ2VkU3RvcmVzID0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudENoYW5nZWRTdG9yZXMpO1xuXHRpZiAoY2hhbmdlZFN0b3Jlcy5sZW5ndGggPT09IDApIHtcblx0XHR0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cblx0dGhpcy5fY3VycmVudENoYW5nZWRTdG9yZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHZhciByZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5fY3JlYXRlUmVuZGVyaW5nQ29udGV4dChjaGFuZ2VkU3RvcmVzKSxcblx0XHRwcm9taXNlcyA9IHJlbmRlcmluZ0NvbnRleHQucm9vdHMubWFwKGZ1bmN0aW9uIChyb290KSB7XG5cdFx0XHRyZW5kZXJpbmdDb250ZXh0LnJvb3RJZHNbc2VsZi5fZ2V0SWQocm9vdCldID0gdHJ1ZTtcblx0XHRcdHJldHVybiBzZWxmLnJlbmRlckNvbXBvbmVudChyb290LCByZW5kZXJpbmdDb250ZXh0KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX2lzVXBkYXRpbmcgPSBmYWxzZTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2RvY3VtZW50VXBkYXRlZCcsIGNoYW5nZWRTdG9yZXMpO1xuXHRcdFx0cmV0dXJuIHNlbGYuX3VwZGF0ZVN0b3JlQ29tcG9uZW50cygpO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBNZXJnZXMgbmV3IGFuZCBleGlzdGVkIGhlYWQgZWxlbWVudHMgYW5kIGNoYW5nZSBvbmx5IGRpZmZlcmVuY2UuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGhlYWQgSEVBRCBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbmV3SGVhZCBOZXcgaGVhZCBlbGVtZW50LlxuICogQHByaXZhdGVcbiAqL1xuLypqc2hpbnQgbWF4Y29tcGxleGl0eTpmYWxzZSAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX21lcmdlSGVhZCA9IGZ1bmN0aW9uIChoZWFkLCBuZXdIZWFkKSB7XG5cdGlmICghbmV3SGVhZCkge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0dmFyIG1hcCA9IHRoaXMuX2dldEhlYWRNYXAoaGVhZC5jaGlsZE5vZGVzKSxcblx0XHRjdXJyZW50LCBpLCBrZXksIG9sZEtleSwgb2xkSXRlbSxcblx0XHRzYW1lTWV0YUVsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3SGVhZC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y3VycmVudCA9IG5ld0hlYWQuY2hpbGROb2Rlc1tpXTtcblxuXHRcdGlmICghKGN1cnJlbnQubm9kZU5hbWUgaW4gbWFwKSkge1xuXHRcdFx0bWFwW2N1cnJlbnQubm9kZU5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGN1cnJlbnQubm9kZU5hbWUpIHtcblx0XHRcdC8vIHRoZXNlIGVsZW1lbnRzIGNhbiBiZSBvbmx5IHJlcGxhY2VkXG5cdFx0XHRjYXNlIFRBR19OQU1FUy5USVRMRTpcblx0XHRcdGNhc2UgVEFHX05BTUVTLkJBU0U6XG5cdFx0XHRjYXNlIFRBR19OQU1FUy5OT1NDUklQVDpcblx0XHRcdFx0a2V5ID0gdGhpcy5fZ2V0Tm9kZUtleShjdXJyZW50KTtcblx0XHRcdFx0b2xkSXRlbSA9IGhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY3VycmVudC5ub2RlTmFtZSlbMF07XG5cdFx0XHRcdGlmIChvbGRJdGVtKSB7XG5cdFx0XHRcdFx0b2xkS2V5ID0gdGhpcy5fZ2V0Tm9kZUtleShvbGRJdGVtKTtcblx0XHRcdFx0XHRoZWFkLnJlcGxhY2VDaGlsZChjdXJyZW50LCBvbGRJdGVtKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGN1cnJlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdoZW4gd2UgZG8gcmVwbGFjZSBvciBhcHBlbmQgY3VycmVudCBpcyByZW1vdmVkIGZyb20gbmV3SGVhZFxuXHRcdFx0XHQvLyB0aGVyZWZvcmUgd2UgbmVlZCB0byBkZWNyZW1lbnQgaW5kZXhcblx0XHRcdFx0aS0tO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gdGhlc2UgZWxlbWVudHMgY2FuIG5vdCBiZSBkZWxldGVkIGZyb20gaGVhZFxuXHRcdFx0Ly8gdGhlcmVmb3JlIHdlIGp1c3QgYWRkIG5ldyBlbGVtZW50cyB0aGF0IGRpZmZlcnMgZnJvbSBleGlzdGVkXG5cdFx0XHRjYXNlIFRBR19OQU1FUy5TVFlMRTpcblx0XHRcdGNhc2UgVEFHX05BTUVTLkxJTks6XG5cdFx0XHRjYXNlIFRBR19OQU1FUy5TQ1JJUFQ6XG5cdFx0XHRcdGtleSA9IHNlbGYuX2dldE5vZGVLZXkoY3VycmVudCk7XG5cdFx0XHRcdGlmICghKGtleSBpbiBtYXBbY3VycmVudC5ub2RlTmFtZV0pKSB7XG5cdFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChjdXJyZW50KTtcblx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBtZXRhIGFuZCBvdGhlciBlbGVtZW50cyBjYW4gYmUgZGVsZXRlZFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QgZGVsZXRlIGFuZCBhcHBlbmQgc2FtZSBlbGVtZW50c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0a2V5ID0gc2VsZi5fZ2V0Tm9kZUtleShjdXJyZW50KTtcblx0XHRcdFx0aWYgKGtleSBpbiBtYXBbY3VycmVudC5ub2RlTmFtZV0pIHtcblx0XHRcdFx0XHRzYW1lTWV0YUVsZW1lbnRzW2tleV0gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoY3VycmVudCk7XG5cdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmIChUQUdfTkFNRVMuTUVUQSBpbiBtYXApIHtcblx0XHQvLyByZW1vdmUgbWV0YSB0YWdzIHdoaWNoIGEgbm90IGluIGEgbmV3IGhlYWQgc3RhdGVcblx0XHRPYmplY3Qua2V5cyhtYXBbVEFHX05BTUVTLk1FVEFdKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKG1ldGFLZXkpIHtcblx0XHRcdFx0aWYgKG1ldGFLZXkgaW4gc2FtZU1ldGFFbGVtZW50cykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGhlYWQucmVtb3ZlQ2hpbGQobWFwW1RBR19OQU1FUy5NRVRBXVttZXRhS2V5XSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXRzIG1hcCBvZiBhbGwgSEVBRCdzIGVsZW1lbnRzLlxuICogQHBhcmFtIHtOb2RlTGlzdH0gaGVhZENoaWxkcmVuIEhlYWQgY2hpbGRyZW4gRE9NIG5vZGVzLlxuICogQHJldHVybnMge09iamVjdH0gTWFwIG9mIEhFQUQgZWxlbWVudHMuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fZ2V0SGVhZE1hcCA9IGZ1bmN0aW9uIChoZWFkQ2hpbGRyZW4pIHtcblx0Ly8gQ3JlYXRlIG1hcCBvZiA8bWV0YT4sIDxsaW5rPiwgPHN0eWxlPiBhbmQgPHNjcmlwdD4gdGFnc1xuXHQvLyBieSB1bmlxdWUga2V5cyB0aGF0IGNvbnRhaW4gYXR0cmlidXRlcyBhbmQgY29udGVudFxuXHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRpLCBjdXJyZW50LFxuXHRcdHNlbGYgPSB0aGlzO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBoZWFkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjdXJyZW50ID0gaGVhZENoaWxkcmVuW2ldO1xuXHRcdGlmICghKGN1cnJlbnQubm9kZU5hbWUgaW4gbWFwKSkge1xuXHRcdFx0bWFwW2N1cnJlbnQubm9kZU5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHR9XG5cdFx0bWFwW2N1cnJlbnQubm9kZU5hbWVdW3NlbGYuX2dldE5vZGVLZXkoY3VycmVudCldID0gY3VycmVudDtcblx0fVxuXHRyZXR1cm4gbWFwO1xufTtcblxuLyoqXG4gKiBHZXRzIHVuaXF1ZSBlbGVtZW50IGtleSB1c2luZyBlbGVtZW50J3MgYXR0cmlidXRlcyBhbmQgaXRzIGNvbnRlbnQuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgSFRNTCBlbGVtZW50LlxuICogQHJldHVybnMge3N0cmluZ30gVW5pcXVlIGtleSBmb3IgZWxlbWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbkRvY3VtZW50UmVuZGVyZXIucHJvdG90eXBlLl9nZXROb2RlS2V5ID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0dmFyIGN1cnJlbnQsIGksXG5cdFx0YXR0cmlidXRlcyA9IFtdO1xuXG5cdGlmIChub2RlLm5vZGVUeXBlICE9PSBOT0RFX1RZUEVTLkVMRU1FTlRfTk9ERSkge1xuXHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZSB8fCAnJztcblx0fVxuXG5cdGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnQgPSBub2RlLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRhdHRyaWJ1dGVzLnB1c2goY3VycmVudC5uYW1lICsgJz0nICsgY3VycmVudC52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0ZXNcblx0XHRcdC5zb3J0KClcblx0XHRcdC5qb2luKCd8JykgKyAnPicgKyBub2RlLnRleHRDb250ZW50O1xufTtcblxuLyoqXG4gKiBEb2VzIGluaXRpYWwgd3JhcHBpbmcgZm9yIGV2ZXJ5IGNvbXBvbmVudCBvbiB0aGUgcGFnZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGNvbXBvbmVudHMgQ3VycmVudCBjb21wb25lbnRzIGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBlbGVtZW50IEVsZW1lbnRzIGxpc3QuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5faW5pdGlhbFdyYXAgPSBmdW5jdGlvbiAoY29tcG9uZW50cywgZWxlbWVudHMpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGN1cnJlbnQgPSBlbGVtZW50cy5wb3AoKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaWQgPSBzZWxmLl9nZXRJZChjdXJyZW50KTtcblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29tcG9uZW50TmFtZSA9IG1vZHVsZUhlbHBlci5nZXRPcmlnaW5hbENvbXBvbmVudE5hbWUoXG5cdFx0XHRcdFx0Y3VycmVudC5ub2RlTmFtZVxuXHRcdFx0XHQpO1xuXHRcdFx0aWYgKCEoY29tcG9uZW50TmFtZSBpbiBjb21wb25lbnRzKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY29uc3RydWN0b3IgPSBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmNvbnN0cnVjdG9yO1xuXHRcdFx0Y29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0ID0gc2VsZi5fZ2V0Q29tcG9uZW50Q29udGV4dChcblx0XHRcdFx0Y29tcG9uZW50c1tjb21wb25lbnROYW1lXSwgY3VycmVudFxuXHRcdFx0KTtcblxuXHRcdFx0dmFyIGluc3RhbmNlID0gc2VsZi5fc2VydmljZUxvY2F0b3IucmVzb2x2ZUluc3RhbmNlKFxuXHRcdFx0XHRjb25zdHJ1Y3Rvciwgc2VsZi5fY29uZmlnXG5cdFx0XHQpO1xuXHRcdFx0aW5zdGFuY2UuJGNvbnRleHQgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQ7XG5cdFx0XHRzZWxmLl9jb21wb25lbnRFbGVtZW50c1tpZF0gPSBjdXJyZW50O1xuXHRcdFx0c2VsZi5fY29tcG9uZW50SW5zdGFuY2VzW2lkXSA9IGluc3RhbmNlO1xuXHRcdFx0Ly8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgb2YgdGhlIGNvbXBvbmVudFxuXHRcdFx0c2VsZi5fc3RvcmVEaXNwYXRjaGVyLmdldFN0b3JlKFxuXHRcdFx0XHRjdXJyZW50LmdldEF0dHJpYnV0ZShtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFKVxuXHRcdFx0KTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudFJlbmRlcmVkJywge1xuXHRcdFx0XHRuYW1lOiBjb21wb25lbnROYW1lLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBpbnN0YW5jZS4kY29udGV4dC5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRjb250ZXh0OiBpbnN0YW5jZS4kY29udGV4dFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gc2VsZi5fYmluZENvbXBvbmVudChjdXJyZW50KTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9pbml0aWFsV3JhcChjb21wb25lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoXG5cdFx0XHRcdCdkb2N1bWVudFJlbmRlcmVkJywgc2VsZi5fY3VycmVudFJvdXRpbmdDb250ZXh0XG5cdFx0XHQpO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIGNvbXBvbmVudCBjb250ZXh0IHVzaW5nIGJhc2ljIGNvbnRleHQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCBkZXRhaWxzLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50IG9mIGNvbXBvbmVudC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IENvbXBvbmVudCBjb250ZXh0LlxuICogQHByaXZhdGVcbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2dldENvbXBvbmVudENvbnRleHQgPVxuXHRmdW5jdGlvbiAoY29tcG9uZW50LCBlbGVtZW50KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0c3RvcmVOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRSksXG5cdFx0XHRjb21wb25lbnRDb250ZXh0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQpO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgb2YgdGhlIGNvbXBvbmVudFxuXHRcdHRoaXMuX3N0b3JlRGlzcGF0Y2hlci5nZXRTdG9yZShzdG9yZU5hbWUpO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29tcG9uZW50Q29udGV4dCwge1xuXHRcdFx0bmFtZToge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Lm5hbWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzVG9PYmplY3QoZWxlbWVudC5hdHRyaWJ1dGVzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29tcG9uZW50Q29udGV4dC5lbGVtZW50ID0gZWxlbWVudDtcblx0XHRjb21wb25lbnRDb250ZXh0LmdldENvbXBvbmVudEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiBzZWxmLmdldENvbXBvbmVudEJ5SWQoaWQpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5nZXRDb21wb25lbnRCeUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuZ2V0Q29tcG9uZW50QnlFbGVtZW50KGVsZW1lbnQpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5jcmVhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgYXR0cmlidXRlcykge1xuXHRcdFx0cmV0dXJuIHNlbGYuY3JlYXRlQ29tcG9uZW50KHRhZ05hbWUsIGF0dHJpYnV0ZXMpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5jb2xsZWN0R2FyYmFnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBzZWxmLmNvbGxlY3RHYXJiYWdlKCk7XG5cdFx0fTtcblx0XHRjb21wb25lbnRDb250ZXh0LmdldFN0b3JlRGF0YSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjdXJyZW50U3RvcmVOYW1lID0gZWxlbWVudFxuXHRcdFx0XHQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdFx0cmV0dXJuIHNlbGYuX3N0b3JlRGlzcGF0Y2hlclxuXHRcdFx0XHQuZ2V0U3RvcmVEYXRhKGN1cnJlbnRTdG9yZU5hbWUpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5zZW5kQWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHtcblx0XHRcdHZhciBjdXJyZW50U3RvcmVOYW1lID0gZWxlbWVudFxuXHRcdFx0XHQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdFx0cmV0dXJuIHNlbGYuX3N0b3JlRGlzcGF0Y2hlclxuXHRcdFx0XHQuc2VuZEFjdGlvbihjdXJyZW50U3RvcmVOYW1lLCBuYW1lLCBhcmdzKTtcblx0XHR9O1xuXHRcdGNvbXBvbmVudENvbnRleHQuc2VuZEJyb2FkY2FzdEFjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5fc3RvcmVEaXNwYXRjaGVyXG5cdFx0XHRcdC5zZW5kQnJvYWRjYXN0QWN0aW9uKG5hbWUsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZShjb21wb25lbnRDb250ZXh0KTtcblx0fTtcblxuLyoqXG4gKiBGaW5kcyBhbGwgcmVuZGVyaW5nIHJvb3RzIG9uIHBhZ2UgZm9yIGFsbCBjaGFuZ2VkIHN0b3Jlcy5cbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZWRTdG9yZU5hbWVzIExpc3Qgb2Ygc3RvcmUgbmFtZXMgd2hpY2ggaGFzIGJlZW4gY2hhbmdlZC5cbiAqIEByZXR1cm5zIHtBcnJheTxFbGVtZW50Pn0gSFRNTCBlbGVtZW50cyB0aGF0IGFyZSByZW5kZXJpbmcgcm9vdHMuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fZmluZFJlbmRlcmluZ1Jvb3RzID0gZnVuY3Rpb24gKGNoYW5nZWRTdG9yZU5hbWVzKSB7XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRoZWFkU3RvcmUgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuaGVhZC5nZXRBdHRyaWJ1dGUoXG5cdFx0XHRtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFXG5cdFx0KSxcblx0XHRjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50TG9hZGVyLmdldENvbXBvbmVudHNCeU5hbWVzKCksXG5cdFx0Y29tcG9uZW50c0VsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRzdG9yZU5hbWVzU2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRyb290c1NldCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0cm9vdHMgPSBbXTtcblxuXHQvLyB3ZSBzaG91bGQgZmluZCBhbGwgY29tcG9uZW50cyBhbmQgdGhlbiBsb29raW5nIGZvciByb290c1xuXHRjaGFuZ2VkU3RvcmVOYW1lc1xuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdHN0b3JlTmFtZXNTZXRbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0XHRjb21wb25lbnRzRWxlbWVudHNbc3RvcmVOYW1lXSA9IHNlbGYuX3dpbmRvdy5kb2N1bWVudFxuXHRcdFx0XHQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0XHQnWycgK1xuXHRcdFx0XHRcdG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfSUQgK1xuXHRcdFx0XHRcdCddJyArXG5cdFx0XHRcdFx0J1snICtcblx0XHRcdFx0XHRtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFICtcblx0XHRcdFx0XHQnPVwiJyArXG5cdFx0XHRcdFx0c3RvcmVOYW1lICtcblx0XHRcdFx0XHQnXCJdJ1xuXHRcdFx0XHQpO1xuXHRcdH0pO1xuXG5cdGlmIChtb2R1bGVIZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSBpbiBjb21wb25lbnRzICYmXG5cdFx0aGVhZFN0b3JlIGluIHN0b3JlTmFtZXNTZXQpIHtcblx0XHRyb290c1NldFt0aGlzLl9nZXRJZCh0aGlzLl93aW5kb3cuZG9jdW1lbnQuaGVhZCldID0gdHJ1ZTtcblx0XHRyb290cy5wdXNoKHRoaXMuX3dpbmRvdy5kb2N1bWVudC5oZWFkKTtcblx0fVxuXG5cdGNoYW5nZWRTdG9yZU5hbWVzXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0dmFyIGN1cnJlbnQsIGN1cnJlbnRJZCxcblx0XHRcdFx0bGFzdFJvb3QsIGxhc3RSb290SWQsXG5cdFx0XHRcdGN1cnJlbnRTdG9yZSwgY3VycmVudENvbXBvbmVudE5hbWU7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50c0VsZW1lbnRzW3N0b3JlTmFtZV0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudCA9IGNvbXBvbmVudHNFbGVtZW50c1tzdG9yZU5hbWVdW2ldO1xuXHRcdFx0XHRjdXJyZW50SWQgPSBjb21wb25lbnRzRWxlbWVudHNbc3RvcmVOYW1lXVtpXVxuXHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9JRCk7XG5cdFx0XHRcdGxhc3RSb290ID0gY3VycmVudDtcblx0XHRcdFx0bGFzdFJvb3RJZCA9IGN1cnJlbnRJZDtcblx0XHRcdFx0Y3VycmVudENvbXBvbmVudE5hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0T3JpZ2luYWxDb21wb25lbnROYW1lKFxuXHRcdFx0XHRcdGN1cnJlbnQudGFnTmFtZVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHdoaWxlIChjdXJyZW50LnBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGN1cnJlbnRJZCA9IHNlbGYuX2dldElkKGN1cnJlbnQpO1xuXHRcdFx0XHRcdGN1cnJlbnRTdG9yZSA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0bW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBzdG9yZSBkaWQgbm90IGNoYW5nZSBzdGF0ZVxuXHRcdFx0XHRcdGlmICghY3VycmVudFN0b3JlIHx8ICEoY3VycmVudFN0b3JlIGluIHN0b3JlTmFtZXNTZXQpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBpcyBub3QgYW4gYWN0aXZlIGNvbXBvbmVudFxuXHRcdFx0XHRcdGlmICghKGN1cnJlbnRDb21wb25lbnROYW1lIGluIGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsYXN0Um9vdCA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0bGFzdFJvb3RJZCA9IGN1cnJlbnRJZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGFzdFJvb3RJZCBpbiByb290c1NldCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJvb3RzU2V0W2xhc3RSb290SWRdID0gdHJ1ZTtcblx0XHRcdFx0cm9vdHMucHVzaChsYXN0Um9vdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0cmV0dXJuIHJvb3RzO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHJlbmRlcmluZyBjb250ZXh0LlxuICogQHBhcmFtIHtBcnJheT99IGNoYW5nZWRTdG9yZXMgTmFtZXMgb2YgY2hhbmdlZCBzdG9yZXMuXG4gKiBAcmV0dXJucyB7e1xuICogICBjb25maWc6IE9iamVjdCxcbiAqICAgcmVuZGVyZWRJZHM6IHt9LFxuICogICB1bmJvdW5kSWRzOiB7fSxcbiAqICAgaXNIZWFkUmVuZGVyZWQ6IGJvb2xlYW4sXG4gKiAgIGJpbmRNZXRob2RzOiBBcnJheSxcbiAqICAgcm91dGluZ0NvbnRleHQ6IE9iamVjdCxcbiAqICAgY29tcG9uZW50czogT2JqZWN0LFxuICogICByb290czogQXJyYXkuPEVsZW1lbnQ+XG4gKiB9fSBUaGUgY29udGV4dCBvYmplY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY3JlYXRlUmVuZGVyaW5nQ29udGV4dCA9IGZ1bmN0aW9uIChjaGFuZ2VkU3RvcmVzKSB7XG5cdHZhciBjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50TG9hZGVyLmdldENvbXBvbmVudHNCeU5hbWVzKCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25maWc6IHRoaXMuX2NvbmZpZyxcblx0XHRyZW5kZXJlZElkczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHR1bmJvdW5kSWRzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXHRcdGlzSGVhZFJlbmRlcmVkOiBmYWxzZSxcblx0XHRiaW5kTWV0aG9kczogW10sXG5cdFx0cm91dGluZ0NvbnRleHQ6IHRoaXMuX2N1cnJlbnRSb3V0aW5nQ29udGV4dCxcblx0XHRjb21wb25lbnRzOiBjb21wb25lbnRzLFxuXHRcdHJvb3RJZHM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cdFx0cm9vdHM6IGNoYW5nZWRTdG9yZXMgPyB0aGlzLl9maW5kUmVuZGVyaW5nUm9vdHMoY2hhbmdlZFN0b3JlcykgOiBbXVxuXHR9O1xufTtcblxuLyoqXG4gKiBHZXRzIElEIG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IEhUTUwgZWxlbWVudCBvZiBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBJRC5cbiAqL1xuRG9jdW1lbnRSZW5kZXJlci5wcm90b3R5cGUuX2dldElkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0aWYgKGVsZW1lbnQgPT09IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHRyZXR1cm4gU1BFQ0lBTF9JRFMuJCRkb2N1bWVudDtcblx0fVxuXHRpZiAoZWxlbWVudCA9PT0gdGhpcy5fd2luZG93LmRvY3VtZW50LmhlYWQpIHtcblx0XHRyZXR1cm4gU1BFQ0lBTF9JRFMuJCRoZWFkO1xuXHR9XG5cdHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShtb2R1bGVIZWxwZXIuQVRUUklCVVRFX0lEKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0ZW1wb3JhcnkgY2xvbmUgb2YgdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY2xvbmUuXG4gKiBAcHJpdmF0ZVxuICovXG5Eb2N1bWVudFJlbmRlcmVyLnByb3RvdHlwZS5fY3JlYXRlVGVtcG9yYXJ5RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciB0bXAgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZ05hbWUpLFxuXHRcdGF0dHJpYnV0ZXMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdHRtcC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlc1tpXS5uYW1lLCBhdHRyaWJ1dGVzW2ldLnZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdG1wO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBOYW1lZE5vZGVNYXAgb2YgQXR0ciBpdGVtcyB0byBrZXktdmFsdWUgb2JqZWN0IG1hcC5cbiAqIEBwYXJhbSB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzIExpc3Qgb2YgRWxlbWVudCBhdHRyaWJ1dGVzLlxuICogQHJldHVybnMge09iamVjdH0gTWFwIG9mIGF0dHJpYnV0ZSB2YWx1ZXMgYnkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNUb09iamVjdChhdHRyaWJ1dGVzKSB7XG5cdHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRyZXN1bHRbYXR0cmlidXRlc1tpXS5uYW1lXSA9IGF0dHJpYnV0ZXNbaV0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIGNyb3NzLWJyb3dzZXIgXCJtYXRjaGVzXCIgbWV0aG9kIGZvciB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBIVE1MIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFwibWF0Y2hlc1wiIG1ldGhvZC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc01ldGhvZChlbGVtZW50KSB7XG5cdHZhciBtZXRob2QgPSAoZWxlbWVudC5tYXRjaGVzIHx8XG5cdFx0ZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGVsZW1lbnQub01hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IpO1xuXG5cdHJldHVybiBtZXRob2QuYmluZChlbGVtZW50KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGltaXRhdGlvbiBvZiBvcmlnaW5hbCBFdmVudCBvYmplY3QgYnV0IHdpdGggc3BlY2lmaWVkIGN1cnJlbnRUYXJnZXQuXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBPcmlnaW5hbCBldmVudCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXJyZW50VGFyZ2V0R2V0dGVyIEdldHRlciBmb3IgY3VycmVudFRhcmdldC5cbiAqIEByZXR1cm5zIHtFdmVudH0gV3JhcHBlZCBldmVudC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnQsIGN1cnJlbnRUYXJnZXRHZXR0ZXIpIHtcblx0dmFyIGNhdEV2ZW50ID0gT2JqZWN0LmNyZWF0ZShldmVudCksXG5cdFx0a2V5cyA9IFtdLFxuXHRcdHByb3BlcnRpZXMgPSB7fTtcblx0Zm9yICh2YXIga2V5IGluIGV2ZW50KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0a2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRpZiAodHlwZW9mIChldmVudFtrZXldKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cHJvcGVydGllc1trZXldID0ge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXZlbnRba2V5XS5iaW5kKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzW2tleV0gPSB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGV2ZW50W2tleV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0ZXZlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdHByb3BlcnRpZXMuY3VycmVudFRhcmdldCA9IHtcblx0XHRnZXQ6IGN1cnJlbnRUYXJnZXRHZXR0ZXJcblx0fTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2F0RXZlbnQsIHByb3BlcnRpZXMpO1xuXHRPYmplY3Quc2VhbChjYXRFdmVudCk7XG5cdE9iamVjdC5mcmVlemUoY2F0RXZlbnQpO1xuXHRyZXR1cm4gY2F0RXZlbnQ7XG59IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyO1xuXG52YXIgTEVWRUxTID0ge1xuXHRERUJVRzogJ2RlYnVnJyxcblx0VFJBQ0U6ICd0cmFjZScsXG5cdElORk86ICdpbmZvJyxcblx0V0FSTjogJ3dhcm4nLFxuXHRFUlJPUjogJ2Vycm9yJyxcblx0RkFUQUw6ICdmYXRhbCdcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBicm93c2VyIGxvZ2dlci5cbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gbGV2ZWxzIExldmVscyB0byBsb2cuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTG9nZ2VyKGxldmVscykge1xuXHRpZiAodHlwZW9mIChsZXZlbHMpID09PSAnb2JqZWN0Jykge1xuXHRcdHRoaXMuX2xldmVscyA9IGxldmVscztcblx0fVxuXG5cdGlmICh0eXBlb2YgKGxldmVscykgPT09ICdzdHJpbmcnKSB7XG5cdFx0dGhpcy5fbGV2ZWxzID0ge307XG5cdFx0T2JqZWN0LmtleXMoTEVWRUxTKVxuXHRcdFx0LmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG5cdFx0XHRcdHRoaXMuX2xldmVsc1tMRVZFTFNbbGV2ZWxdXSA9XG5cdFx0XHRcdFx0KGxldmVscy5zZWFyY2goTEVWRUxTW2xldmVsXSkgIT09IC0xKTtcblx0XHRcdH0sIHRoaXMpO1xuXHR9XG5cblx0dGhpcy5kZWJ1ZyA9IHRoaXMuZGVidWcuYmluZCh0aGlzKTtcblx0dGhpcy50cmFjZSA9IHRoaXMudHJhY2UuYmluZCh0aGlzKTtcblx0dGhpcy5pbmZvID0gdGhpcy5pbmZvLmJpbmQodGhpcyk7XG5cdHRoaXMud2FybiA9IHRoaXMud2Fybi5iaW5kKHRoaXMpO1xuXHR0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpO1xuXHR0aGlzLmZhdGFsID0gdGhpcy5mYXRhbC5iaW5kKHRoaXMpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgbGV2ZWxzIG9mIGxvZ2dpbmcuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS5fbGV2ZWxzID0ge1xuXHRkZWJ1ZzogdHJ1ZSxcblx0dHJhY2U6IHRydWUsXG5cdGluZm86IHRydWUsXG5cdHdhcm46IHRydWUsXG5cdGVycm9yOiB0cnVlLFxuXHRmYXRhbDogdHJ1ZVxufTtcblxuLyoqXG4gKiBMb2dzIHRyYWNlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUcmFjZSBtZXNzYWdlLlxuICovXG5Mb2dnZXIucHJvdG90eXBlLnRyYWNlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0aWYgKCF0aGlzLl9sZXZlbHMudHJhY2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY29uc29sZS5sb2cpIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2dzIHRyYWNlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUcmFjZSBtZXNzYWdlLlxuICovXG5Mb2dnZXIucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0aWYgKCF0aGlzLl9sZXZlbHMuZGVidWcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY29uc29sZS5sb2cpIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2dzIGluZm8gbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEluZm9ybWF0aW9uIG1lc3NhZ2UuXG4gKi9cbkxvZ2dlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdGlmICghdGhpcy5fbGV2ZWxzLmluZm8pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY29uc29sZS5pbmZvKSB7XG5cdFx0Y29uc29sZS5pbmZvKG1lc3NhZ2UpO1xuXHR9XG59O1xuXG4vKipcbiAqIExvZ3Mgd2FybiBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgV2FybmluZyBtZXNzYWdlLlxuICovXG5Mb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRpZiAoIXRoaXMuX2xldmVscy53YXJuKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNvbnNvbGUud2Fybikge1xuXHRcdGNvbnNvbGUud2FybihtZXNzYWdlKTtcblx0fVxufTtcbi8qKlxuICogTG9ncyBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IGVycm9yIEVycm9yIG9iamVjdCBvciBtZXNzYWdlLlxuICovXG5Mb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdGlmICghdGhpcy5fbGV2ZWxzLmVycm9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d3JpdGVFcnJvcihlcnJvcik7XG59O1xuXG4vKipcbiAqIExvZ3MgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfEVycm9yfSBlcnJvciBFcnJvciBvYmplY3Qgb3IgbWVzc2FnZS5cbiAqL1xuTG9nZ2VyLnByb3RvdHlwZS5mYXRhbCA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRpZiAoIXRoaXMuX2xldmVscy5mYXRhbCkge1xuXHRcdHJldHVybjtcblx0fVxuXHR3cml0ZUVycm9yKGVycm9yKTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGVycm9yIHRvIGNvbnNvbGUuXG4gKiBAcGFyYW0ge0Vycm9yfHN0cmluZ30gZXJyb3IgRXJyb3IgdG8gd3JpdGUuXG4gKi9cbmZ1bmN0aW9uIHdyaXRlRXJyb3IoZXJyb3IpIHtcblx0dHJ5IHtcblx0XHRpZiAoIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuXHRcdFx0ZXJyb3IgPSB0eXBlb2YgKGVycm9yKSA9PT0gJ3N0cmluZycgPyBuZXcgRXJyb3IoZXJyb3IpIDogbmV3IEVycm9yKCk7XG5cdFx0fVxuXHRcdGlmIChjb25zb2xlLmVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR3cml0ZUVycm9yKGUpO1xuXHR9XG59IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdFJvdXRlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdFVSSSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LXVyaScpLlVSSTtcblxudmFyIE1PVVNFX1BSSU1BUllfS0VZID0gMCxcblx0SFJFRl9BVFRSSUJVVEVfTkFNRSA9ICdocmVmJyxcblx0VEFSR0VUX0FUVFJJQlVURV9OQU1FID0gJ3RhcmdldCcsXG5cdEFfVEFHX05BTUUgPSAnQScsXG5cdEJPRFlfVEFHX05BTUUgPSAnQk9EWSc7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgcmVxdWVzdCByb3V0ZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgU2VydmljZSBsb2NhdG9yIHRvIHJlc29sdmUgc2VydmljZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVxdWVzdFJvdXRlcigkc2VydmljZUxvY2F0b3IpIHtcblx0dGhpcy5fZXZlbnRCdXMgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblx0dGhpcy5fd2luZG93ID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXHR0aGlzLl9kb2N1bWVudFJlbmRlcmVyID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2RvY3VtZW50UmVuZGVyZXInKTtcblx0dGhpcy5fc3RhdGVQcm92aWRlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdzdGF0ZVByb3ZpZGVyJyk7XG5cdHRoaXMuX2NvbnRleHRGYWN0b3J5ID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2NvbnRleHRGYWN0b3J5Jyk7XG5cblx0dGhpcy5faXNIaXN0b3J5U3VwcG9ydGVkID0gdGhpcy5fd2luZG93Lmhpc3RvcnkgJiZcblx0XHR0aGlzLl93aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblxuXHQvLyBhZGQgZXZlbnQgaGFuZGxlcnNcblx0dGhpcy5fd3JhcERvY3VtZW50KCk7XG5cblx0Ly8gc2V0IGluaXRpYWwgc3RhdGUgZnJvbSBjdXJyZW50IFVSSVxuXHR2YXIgY3VycmVudExvY2F0aW9uID0gbmV3IFVSSSh0aGlzLl93aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSksXG5cdFx0c3RhdGUgPSB0aGlzLl9zdGF0ZVByb3ZpZGVyLmdldFN0YXRlQnlVcmkoY3VycmVudExvY2F0aW9uKSxcblx0XHRzZWxmID0gdGhpcztcblxuXHR0aGlzLl9sb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblx0dGhpcy5fY2hhbmdlU3RhdGUoc3RhdGUpXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2hhbmRsZUVycm9yKHJlYXNvbik7XG5cdFx0fSk7XG59XG5cbi8qKlxuICogQ3VycmVudCBpbml0aWFsaXphdGlvbiBmbGFnLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5faXNTdGF0ZUluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8qKlxuICogQ3VycmVudCByZWZlcnJlci5cbiAqIEB0eXBlIHtVUkl9XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fcmVmZXJyZXIgPSAnJztcblxuLyoqXG4gKiBDdXJyZW50IGxvY2F0aW9uLlxuICogQHR5cGUge1VSSX1cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9sb2NhdGlvbiA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBldmVudCBidXMuXG4gKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2V2ZW50QnVzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGNvbnRleHQgZmFjdG9yeS5cbiAqIEB0eXBlIHtDb250ZXh0RmFjdG9yeX1cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9jb250ZXh0RmFjdG9yeSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzdGF0ZSBwcm92aWRlci5cbiAqIEB0eXBlIHtTdGF0ZVByb3ZpZGVyfVxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX3N0YXRlUHJvdmlkZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgZG9jdW1lbnQgcmVuZGVyZXIuXG4gKiBAdHlwZSB7RG9jdW1lbnRSZW5kZXJlcn1cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl9kb2N1bWVudFJlbmRlcmVyID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGJyb3dzZXIgd2luZG93LlxuICogQHR5cGUge1dpbmRvd31cbiAqIEBwcml2YXRlXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLl93aW5kb3cgPSBudWxsO1xuXG4vKipcbiAqIFRydWUgaWYgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGhpc3RvcnkgQVBJLlxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5faXNIaXN0b3J5U3VwcG9ydGVkID0gZmFsc2U7XG5cbi8qKlxuICogUm91dGVzIGJyb3dzZXIgcmVuZGVyIHJlcXVlc3QuXG4gKiBAcGFyYW0ge1VSSX0gbmV3TG9jYXRpb24gTmV3IGxvY2F0aW9uLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cblJlcXVlc3RSb3V0ZXIucHJvdG90eXBlLnJvdXRlID0gZnVuY3Rpb24gKG5ld0xvY2F0aW9uKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0Ly8gYmVjYXVzZSBub3cgbG9jYXRpb24gd2FzIG5vdCBjaGFuZ2UgeWV0IGFuZFxuXHQvLyBkaWZmZXJlbnQgYnJvd3NlcnMgaGFuZGxlIGBwb3BzdGF0ZWAgZGlmZmVyZW50bHlcblx0Ly8gd2UgbmVlZCB0byBkbyByb3V0ZSBpbiBuZXh0IGl0ZXJhdGlvbiBvZiBldmVudCBsb29wXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzdGF0ZSA9IHNlbGYuX3N0YXRlUHJvdmlkZXIuZ2V0U3RhdGVCeVVyaShuZXdMb2NhdGlvbiksXG5cdFx0XHRcdG5ld0xvY2F0aW9uU3RyaW5nID0gbmV3TG9jYXRpb24udG9TdHJpbmcoKTtcblxuXHRcdFx0aWYgKCFzdGF0ZSkge1xuXHRcdFx0XHRzZWxmLl93aW5kb3cubG9jYXRpb24uYXNzaWduKG5ld0xvY2F0aW9uU3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLl93aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCBuZXdMb2NhdGlvblN0cmluZyk7XG5cblx0XHRcdC8vIGlmIG9ubHkgVVJJIGZyYWdtZW50IGlzIGNoYW5nZWRcblx0XHRcdHZhciBuZXdRdWVyeSA9IG5ld0xvY2F0aW9uLnF1ZXJ5ID9cblx0XHRcdFx0XHRuZXdMb2NhdGlvbi5xdWVyeS50b1N0cmluZygpIDogbnVsbCxcblx0XHRcdFx0Y3VycmVudFF1ZXJ5ID0gc2VsZi5fbG9jYXRpb24ucXVlcnkgP1xuXHRcdFx0XHRcdHNlbGYuX2xvY2F0aW9uLnF1ZXJ5LnRvU3RyaW5nKCkgOiBudWxsO1xuXHRcdFx0aWYgKG5ld0xvY2F0aW9uLnBhdGggPT09IHNlbGYuX2xvY2F0aW9uLnBhdGggJiZcblx0XHRcdFx0bmV3UXVlcnkgPT09IGN1cnJlbnRRdWVyeSkge1xuXHRcdFx0XHRzZWxmLl9sb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZWxmLl9sb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXHRcdFx0cmV0dXJuIHNlbGYuX2NoYW5nZVN0YXRlKHN0YXRlKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogU2V0cyBhcHBsaWNhdGlvbiBzdGF0ZSB0byBzcGVjaWZpZWQgVVJJLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uU3RyaW5nIFVSSSB0byBnby5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIChsb2NhdGlvblN0cmluZykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBsb2NhdGlvbiA9IG5ldyBVUkkobG9jYXRpb25TdHJpbmcpO1xuXHRcdFx0bG9jYXRpb24gPSBsb2NhdGlvbi5yZXNvbHZlUmVsYXRpdmUoc2VsZi5fbG9jYXRpb24pO1xuXHRcdFx0bG9jYXRpb25TdHJpbmcgPSBsb2NhdGlvbi50b1N0cmluZygpO1xuXG5cdFx0XHR2YXIgY3VycmVudEF1dGhvcml0eSA9IHNlbGYuX2xvY2F0aW9uLmF1dGhvcml0eSA/XG5cdFx0XHRcdFx0c2VsZi5fbG9jYXRpb24uYXV0aG9yaXR5LnRvU3RyaW5nKCkgOiBudWxsLFxuXHRcdFx0XHRuZXdBdXRob3JpdHkgPSBsb2NhdGlvbi5hdXRob3JpdHkgP1xuXHRcdFx0XHRcdGxvY2F0aW9uLmF1dGhvcml0eS50b1N0cmluZygpIDogbnVsbDtcblxuXHRcdFx0Ly8gd2UgbXVzdCBjaGVjayBpZiB0aGlzIGlzIGFuIGV4dGVybmFsIGxpbmsgYmVmb3JlIG1hcCBVUklcblx0XHRcdC8vIHRvIGludGVybmFsIGFwcGxpY2F0aW9uIHN0YXRlXG5cdFx0XHRpZiAoIXNlbGYuX2lzSGlzdG9yeVN1cHBvcnRlZCB8fFxuXHRcdFx0XHRsb2NhdGlvbi5zY2hlbWUgIT09IHNlbGYuX2xvY2F0aW9uLnNjaGVtZSB8fFxuXHRcdFx0XHRuZXdBdXRob3JpdHkgIT09IGN1cnJlbnRBdXRob3JpdHkpIHtcblx0XHRcdFx0c2VsZi5fd2luZG93LmxvY2F0aW9uLmFzc2lnbihsb2NhdGlvblN0cmluZyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYucm91dGUobG9jYXRpb24pO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIGN1cnJlbnQgYXBwbGljYXRpb24gc3RhdGUgd2l0aCBuZXcgbG9jYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgTmV3IHN0YXRlLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5fY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcm91dGluZ0NvbnRleHQgPSBzZWxmLl9jb250ZXh0RmFjdG9yeS5jcmVhdGUoe1xuXHRcdFx0XHRcdHJlZmVycmVyOiBzZWxmLl9yZWZlcnJlciB8fCBzZWxmLl93aW5kb3cuZG9jdW1lbnQucmVmZXJyZXIsXG5cdFx0XHRcdFx0bG9jYXRpb246IHNlbGYuX2xvY2F0aW9uLFxuXHRcdFx0XHRcdHVzZXJBZ2VudDogc2VsZi5fd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdFx0fSk7XG5cblx0XHRcdGlmICghc2VsZi5faXNTdGF0ZUluaXRpYWxpemVkKSB7XG5cdFx0XHRcdHNlbGYuX2lzU3RhdGVJbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdHJldHVybiBzZWxmLl9kb2N1bWVudFJlbmRlcmVyLmluaXRXaXRoU3RhdGUoXG5cdFx0XHRcdFx0c3RhdGUsIHJvdXRpbmdDb250ZXh0XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBcIm5vdCBmb3VuZFwiIHN0YXRlXG5cdFx0XHRpZiAoc3RhdGUgPT09IG51bGwpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZWxmLl9kb2N1bWVudFJlbmRlcmVyXG5cdFx0XHRcdC5yZW5kZXIoc3RhdGUsIHJvdXRpbmdDb250ZXh0KTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuX3JlZmVycmVyID0gc2VsZi5fbG9jYXRpb247XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIFdyYXBzIGRvY3VtZW50IHdpdGggcmVxdWlyZWQgZXZlbnRzIHRvIHJvdXRlIHJlcXVlc3RzLlxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX3dyYXBEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdGlmICghdGhpcy5faXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5fd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKCkge1xuXHRcdHNlbGYucm91dGUobmV3IFVSSShzZWxmLl93aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSkpXG5cdFx0XHQuY2F0Y2goc2VsZi5faGFuZGxlRXJyb3IuYmluZChzZWxmKSk7XG5cdH0pO1xuXG5cdHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBBX1RBR19OQU1FKSB7XG5cdFx0XHRzZWxmLl9saW5rQ2xpY2tIYW5kbGVyKGV2ZW50LCBldmVudC50YXJnZXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbGluayA9IGNsb3Nlc3RMaW5rKGV2ZW50LnRhcmdldCk7XG5cdFx0XHRpZiAoIWxpbmspIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5fbGlua0NsaWNrSGFuZGxlcihldmVudCwgbGluayk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyBsaW5rIGNsaWNrIG9uIHRoZSBwYWdlLlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQtcmVsYXRlZCBvYmplY3QuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgTGluayBlbGVtZW50LlxuICogQHByaXZhdGVcbiAqL1xuUmVxdWVzdFJvdXRlci5wcm90b3R5cGUuX2xpbmtDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQpIHtcblx0dmFyIHRhcmdldEF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFRBUkdFVF9BVFRSSUJVVEVfTkFNRSk7XG5cdGlmICh0YXJnZXRBdHRyaWJ1dGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBpZiBtaWRkbGUgbW91c2UgYnV0dG9uIHdhcyBjbGlja2VkXG5cdGlmIChldmVudC5idXR0b24gIT09IE1PVVNFX1BSSU1BUllfS0VZIHx8XG5cdFx0ZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgbG9jYXRpb25TdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShIUkVGX0FUVFJJQlVURV9OQU1FKTtcblx0aWYgKCFsb2NhdGlvblN0cmluZykge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAobG9jYXRpb25TdHJpbmdbMF0gPT09ICcjJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdHRoaXMuZ28obG9jYXRpb25TdHJpbmcpXG5cdFx0LmNhdGNoKHRoaXMuX2hhbmRsZUVycm9yLmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVzIGFsbCBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBFcnJvciB0byBoYW5kbGUuXG4gKiBAcHJpdmF0ZVxuICovXG5SZXF1ZXN0Um91dGVyLnByb3RvdHlwZS5faGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG59O1xuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IGFzY2VuZGluZyBcIkFcIiBlbGVtZW50IG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Tm9kZXxudWxsfSBUaGUgY2xvc2VzdCBcIkFcIiBlbGVtZW50IG9yIG51bGwuXG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3RMaW5rKGVsZW1lbnQpIHtcblx0d2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSAhPT0gQV9UQUdfTkFNRSAmJlxuXHRcdGVsZW1lbnQubm9kZU5hbWUgIT09IEJPRFlfVEFHX05BTUUpIHtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9XG5cdHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09IEFfVEFHX05BTUUgPyBlbGVtZW50IDogbnVsbDtcbn1cbiIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIEdldHMgdGhlIGhpZ2ggcmVzb2x1dGlvbiB0aW1lIG9yIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cblx0ICogcHJldmlvdXMgYW5kIGN1cnJlbnQgdGltZS5cblx0ICogQHBhcmFtIHtBcnJheT99IFByZXZpb3VzIGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGhpZ2ggcmVzb2x1dGlvbiB0aW1lLlxuXHQgKi9cblx0Z2V0OiByZXF1aXJlKCdicm93c2VyLXByb2Nlc3MtaHJ0aW1lJyksXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0aGUgaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcCB0byB0ZXh0IG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7QXJyYXl9XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRpbWUgbWVzc2FnZS5cblx0ICovXG5cdHRvTWVzc2FnZTogcmVxdWlyZSgncHJldHR5LWhydGltZScpLFxuXHQvKipcblx0ICogQ29udmVydHMgaGlnaCByZXNvbHV0aW9uIHRpbWUgdG8gbWlsbGlzZWNvbmRzIG51bWJlci5cblx0ICogQHBhcmFtIHtBcnJheX0gaHJUaW1lIEhpZ2ggcmVzb2x1dGlvbiB0aW1lIHR1cGxlLlxuXHQgKi9cblx0dG9NaWxsaXNlY29uZHM6IGZ1bmN0aW9uIChoclRpbWUpIHtcblx0XHRyZXR1cm4gaHJUaW1lWzBdICogMWUzICsgTWF0aC5yb3VuZChoclRpbWVbMV0gLyAxZTYpO1xuXHR9XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudExvYWRlcjtcblxudmFyIG1vZHVsZUhlbHBlciA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlcicpLFxuXHR1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRMb2FkZXJCYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL2Jhc2UvTG9hZGVyQmFzZScpO1xuXG51dGlsLmluaGVyaXRzKENvbXBvbmVudExvYWRlciwgTG9hZGVyQmFzZSk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBsb2FkZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgTG9jYXRvciB0byByZXNvbHZlIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgTG9hZGVyQmFzZVxuICovXG5mdW5jdGlvbiBDb21wb25lbnRMb2FkZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gJHNlcnZpY2VMb2NhdG9yO1xuXHR0aGlzLl9ldmVudEJ1cyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xuXHR0aGlzLl90ZW1wbGF0ZVByb3ZpZGVyID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ3RlbXBsYXRlUHJvdmlkZXInKTtcblx0TG9hZGVyQmFzZS5jYWxsKHRoaXMsICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlQWxsKCdjb21wb25lbnRUcmFuc2Zvcm0nKSk7XG59XG5cbi8qKlxuICogQ3VycmVudCBldmVudCBidXMuXG4gKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5fZXZlbnRCdXMgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuICogQHByaXZhdGVcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5fc2VydmljZUxvY2F0b3IgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgdGVtcGxhdGUgcHJvdmlkZXIuXG4gKiBAdHlwZSB7VGVtcGxhdGVQcm92aWRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUuX3RlbXBsYXRlUHJvdmlkZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbWFwIG9mIGxvYWRlZCBjb21wb25lbnRzIGJ5IG5hbWVzLlxuICogQHR5cGUge09iamVjdH0gTWFwIG9mIGNvbXBvbmVudHMgYnkgbmFtZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5Db21wb25lbnRMb2FkZXIucHJvdG90eXBlLl9sb2FkZWRDb21wb25lbnRzID0gbnVsbDtcblxuLyoqXG4gKiBMb2FkcyBjb21wb25lbnRzIHdoZW4gaXQgaXMgaW4gYSBicm93c2VyLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuX2xvYWRlZENvbXBvbmVudHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRlZENvbXBvbmVudHMpO1xuXHR9XG5cblx0dGhpcy5fbG9hZGVkQ29tcG9uZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50cyA9IHNlbGYuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmVBbGwoJ2NvbXBvbmVudCcpLFxuXHRcdFx0XHRjb21wb25lbnRQcm9taXNlcyA9IFtdO1xuXG5cdFx0XHQvLyB0aGUgbGlzdCBpcyBhIHN0YWNrLCB3ZSBzaG91bGQgcmV2ZXJzZSBpdFxuXHRcdFx0Y29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcblx0XHRcdFx0Y29tcG9uZW50UHJvbWlzZXMudW5zaGlmdChcblx0XHRcdFx0XHRzZWxmLl9wcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudClcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKGNvbXBvbmVudFByb21pc2VzKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG5cdFx0XHRjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuXHRcdFx0XHRpZiAoIWNvbXBvbmVudCB8fCB0eXBlb2YgKGNvbXBvbmVudCkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuX2xvYWRlZENvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuXHRcdFx0fSk7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdhbGxDb21wb25lbnRzTG9hZGVkJywgY29tcG9uZW50cyk7XG5cdFx0XHRyZXR1cm4gc2VsZi5fbG9hZGVkQ29tcG9uZW50cztcblx0XHR9KTtcbn07XG5cbi8qKlxuICogUHJvY2Vzc2VzIGNvbXBvbmVudCBhbmQgYXBwbHkgcmVxdWlyZWQgb3BlcmF0aW9ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnREZXRhaWxzIExvYWRlZCBjb21wb25lbnQgZGV0YWlscy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IENvbXBvbmVudCBvYmplY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5Db21wb25lbnRMb2FkZXIucHJvdG90eXBlLl9wcm9jZXNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudERldGFpbHMpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdGNvbXBvbmVudCA9IE9iamVjdC5jcmVhdGUoY29tcG9uZW50RGV0YWlscyk7XG5cblx0cmV0dXJuIHRoaXMuX2FwcGx5VHJhbnNmb3Jtcyhjb21wb25lbnQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHRyYW5zZm9ybWVkKSB7XG5cdFx0XHRjb21wb25lbnQgPSB0cmFuc2Zvcm1lZDtcblx0XHRcdHNlbGYuX3RlbXBsYXRlUHJvdmlkZXIucmVnaXN0ZXJDb21waWxlZChcblx0XHRcdFx0Y29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC50ZW1wbGF0ZVNvdXJjZVxuXHRcdFx0KTtcblx0XHRcdGNvbXBvbmVudC50ZW1wbGF0ZSA9IHtcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YUNvbnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fdGVtcGxhdGVQcm92aWRlci5yZW5kZXIoXG5cdFx0XHRcdFx0XHRjb21wb25lbnQubmFtZSwgZGF0YUNvbnRleHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHR5cGVvZiAoY29tcG9uZW50LmVycm9yVGVtcGxhdGVTb3VyY2UpID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR2YXIgZXJyb3JUZW1wbGF0ZU5hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0TmFtZUZvckVycm9yVGVtcGxhdGUoXG5cdFx0XHRcdFx0Y29tcG9uZW50Lm5hbWVcblx0XHRcdFx0KTtcblx0XHRcdFx0c2VsZi5fdGVtcGxhdGVQcm92aWRlci5yZWdpc3RlckNvbXBpbGVkKFxuXHRcdFx0XHRcdGVycm9yVGVtcGxhdGVOYW1lLCBjb21wb25lbnQuZXJyb3JUZW1wbGF0ZVNvdXJjZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb21wb25lbnQuZXJyb3JUZW1wbGF0ZSA9IHtcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhQ29udGV4dCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuX3RlbXBsYXRlUHJvdmlkZXIucmVuZGVyKFxuXHRcdFx0XHRcdFx0XHRlcnJvclRlbXBsYXRlTmFtZSwgZGF0YUNvbnRleHRcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50TG9hZGVkJywgY29tcG9uZW50KTtcblx0XHRcdHJldHVybiBjb21wb25lbnQ7XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIEdldHMgbWFwIG9mIGNvbXBvbmVudHMgYnkgbmFtZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBNYXAgb2YgY29tcG9uZW50cyBieSBuYW1lcy5cbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnRzQnlOYW1lcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuX2xvYWRlZENvbXBvbmVudHMgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RvcmVMb2FkZXI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRMb2FkZXJCYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL2Jhc2UvTG9hZGVyQmFzZScpO1xuXG51dGlsLmluaGVyaXRzKFN0b3JlTG9hZGVyLCBMb2FkZXJCYXNlKTtcblxuLyoqXG4gKiBDcmVhdGVzIGluc3RhbmNlIG9mIHRoZSBzdG9yZSBsb2FkZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgTG9jYXRvciB0byByZXNvbHZlIHN0b3Jlcy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgTG9hZGVyQmFzZVxuICovXG5mdW5jdGlvbiBTdG9yZUxvYWRlcigkc2VydmljZUxvY2F0b3IpIHtcblx0dGhpcy5fc2VydmljZUxvY2F0b3IgPSAkc2VydmljZUxvY2F0b3I7XG5cdHRoaXMuX2V2ZW50QnVzID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2V2ZW50QnVzJyk7XG5cdExvYWRlckJhc2UuY2FsbCh0aGlzLCAkc2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgnc3RvcmVUcmFuc2Zvcm0nKSk7XG59XG5cbi8qKlxuICogQ3VycmVudCBldmVudCBidXMuXG4gKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVMb2FkZXIucHJvdG90eXBlLl9ldmVudEJ1cyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG4gKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZUxvYWRlci5wcm90b3R5cGUuX3NlcnZpY2VMb2NhdG9yID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiBsb2FkZWQgc3RvcmVzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlTG9hZGVyLnByb3RvdHlwZS5fbG9hZGVkU3RvcmVzID0gbnVsbDtcblxuLyoqXG4gKiBMb2FkcyBhbGwgc3RvcmVzIHdoZW4gaXQgaXMgaW4gYSBicm93c2VyLlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cblN0b3JlTG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5fbG9hZGVkU3RvcmVzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkZWRTdG9yZXMpO1xuXHR9XG5cblx0dGhpcy5fbG9hZGVkU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzdG9yZXMgPSBzZWxmLl9zZXJ2aWNlTG9jYXRvci5yZXNvbHZlQWxsKCdzdG9yZScpLFxuXHRcdFx0XHRzdG9yZVByb21pc2VzID0gW107XG5cblx0XHRcdC8vIHRoZSBsaXN0IGlzIGEgc3RhY2ssIHdlIHNob3VsZCByZXZlcnNlIGl0XG5cdFx0XHRzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcblx0XHRcdFx0c3RvcmVQcm9taXNlcy51bnNoaWZ0KFxuXHRcdFx0XHRcdHNlbGYuX2dldFN0b3JlKHN0b3JlKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChzdG9yZVByb21pc2VzKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChzdG9yZXMpIHtcblx0XHRcdHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuXHRcdFx0XHRpZiAoIXN0b3JlIHx8IHR5cGVvZiAoc3RvcmUpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLl9sb2FkZWRTdG9yZXNbc3RvcmUubmFtZV0gPSBzdG9yZTtcblx0XHRcdH0pO1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnYWxsU3RvcmVzTG9hZGVkJywgc2VsZi5fbG9hZGVkU3RvcmVzKTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fbG9hZGVkU3RvcmVzKTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgc3RvcmUgZnJvbSBzdG9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0b3JlRGV0YWlscyBTdG9yZSBkZXRhaWxzLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3Igc3RvcmUuXG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZUxvYWRlci5wcm90b3R5cGUuX2dldFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlRGV0YWlscykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHJldHVybiB0aGlzLl9hcHBseVRyYW5zZm9ybXMoc3RvcmVEZXRhaWxzKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh0cmFuc2Zvcm1lZCkge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnc3RvcmVMb2FkZWQnLCB0cmFuc2Zvcm1lZCk7XG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtZWQ7XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSk7XG59O1xuXG4vKipcbiAqIEdldHMgc3RvcmVzIG1hcCBieSBuYW1lcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcCBvZiBzdG9yZXMgYnkgbmFtZXMuXG4gKi9cblN0b3JlTG9hZGVyLnByb3RvdHlwZS5nZXRTdG9yZXNCeU5hbWVzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5fbG9hZGVkU3RvcmVzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUFwaVByb3ZpZGVyO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKSxcblx0cHJvcGVydHlIZWxwZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVycy9wcm9wZXJ0eUhlbHBlcicpLFxuXHRNb2R1bGVBcGlQcm92aWRlckJhc2UgPSByZXF1aXJlKCcuLi8uLi9saWIvYmFzZS9Nb2R1bGVBcGlQcm92aWRlckJhc2UnKTtcblxudXRpbC5pbmhlcml0cyhNb2R1bGVBcGlQcm92aWRlciwgTW9kdWxlQXBpUHJvdmlkZXJCYXNlKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgbW9kdWxlIEFQSSBwcm92aWRlci5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9ICRzZXJ2aWNlTG9jYXRvciBTZXJ2aWNlIGxvY2F0b3JcbiAqIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyBNb2R1bGVBcGlQcm92aWRlckJhc2VcbiAqL1xuZnVuY3Rpb24gTW9kdWxlQXBpUHJvdmlkZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdE1vZHVsZUFwaVByb3ZpZGVyQmFzZS5jYWxsKHRoaXMsICRzZXJ2aWNlTG9jYXRvcik7XG5cdHByb3BlcnR5SGVscGVyLmRlZmluZVJlYWRPbmx5KHRoaXMsICdpc0Jyb3dzZXInLCB0cnVlKTtcblx0cHJvcGVydHlIZWxwZXIuZGVmaW5lUmVhZE9ubHkodGhpcywgJ2lzU2VydmVyJywgZmFsc2UpO1xufVxuXG4vKipcbiAqIFJlbG9hZHMgdGhlIHBhZ2UgZm9yIGhhbmRsaW5nIFwibm90IGZvdW5kXCIgZXJyb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXIucHJvdG90eXBlLm5vdEZvdW5kID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgd2luZG93ID0gdGhpcy5sb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbi8qKlxuICogUmVkaXJlY3RzIGN1cnJlbnQgcGFnZSB0byBzcGVjaWZpZWQgVVJJLlxuICogQHBhcmFtIHtzdHJpbmd9IHVyaVN0cmluZyBVUkkgdG8gcmVkaXJlY3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXIucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gKHVyaVN0cmluZykge1xuXHR2YXIgcmVxdWVzdFJvdXRlciA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCdyZXF1ZXN0Um91dGVyJyk7XG5cdHJldHVybiByZXF1ZXN0Um91dGVyLmdvKHVyaVN0cmluZyk7XG59O1xuXG4vKipcbiAqIENsZWFycyBjdXJyZW50IGxvY2F0aW9uIFVSSSdzIGZyYWdtZW50LlxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyLnByb3RvdHlwZS5jbGVhckZyYWdtZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgd2luZG93ID0gdGhpcy5sb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpLFxuXHRcdHBvc2l0aW9uID0gd2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuXHR3aW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9Cb290c3RyYXBwZXInKTtcbiIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRGYWN0b3J5O1xuXG52YXIgcHJvcGVydHlIZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcnMvcHJvcGVydHlIZWxwZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29udGV4dCBmYWN0b3J5LlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29udGV4dEZhY3RvcnkoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gJHNlcnZpY2VMb2NhdG9yO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuICogQHByaXZhdGVcbiAqL1xuQ29udGV4dEZhY3RvcnkucHJvdG90eXBlLl9zZXJ2aWNlTG9jYXRvciA9IG51bGw7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgY29udGV4dCBmb3IgbW9kdWxlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7VVJJfSBhZGRpdGlvbmFsLnJlZmVycmVyIEN1cnJlbnQgcmVmZXJyZXIuXG4gKiBAcGFyYW0ge1VSSX0gYWRkaXRpb25hbC5sb2NhdGlvbiBDdXJyZW50IGxvY2F0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGFkZGl0aW9uYWwudXNlckFnZW50IEN1cnJlbnQgdXNlciBhZ2VudC5cbiAqL1xuQ29udGV4dEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhZGRpdGlvbmFsKSB7XG5cdHZhciBhcGlQcm92aWRlciA9IHRoaXMuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ21vZHVsZUFwaVByb3ZpZGVyJyksXG5cdFx0Y29udGV4dCA9IE9iamVjdC5jcmVhdGUoYXBpUHJvdmlkZXIpO1xuXHRPYmplY3Qua2V5cyhhZGRpdGlvbmFsKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHByb3BlcnR5SGVscGVyLmRlZmluZVJlYWRPbmx5KGNvbnRleHQsIGtleSwgYWRkaXRpb25hbFtrZXldKTtcblx0XHR9KTtcblx0cmV0dXJuIGNvbnRleHQ7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcmlhbFdyYXBwZXI7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcblxudmFyIEVSUk9SX05PX1NVQ0hfTUVUSE9EID0gJ1RoZXJlIGlzIG5vIHN1Y2ggcmVnaXN0ZXJlZCBtZXRob2QnO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBzZXJpYWwgd3JhcHBlciBmb3IgcHJvbWlzZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2VyaWFsV3JhcHBlcigpIHtcblx0dGhpcy5fZW1pdHRlciA9IG5ldyBldmVudHMuRXZlbnRFbWl0dGVyKCk7XG5cdHRoaXMuX2VtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKDApO1xuXHR0aGlzLl90b0ludm9rZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHRoaXMuX2luUHJvZ3Jlc3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiAqIEN1cnJlbnQgZXZlbnQgZW1pdHRlci5cbiAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5TZXJpYWxXcmFwcGVyLnByb3RvdHlwZS5fZW1pdHRlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2YgbmFtZWQgbWV0aG9kcyB0byBpbnZva2UuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuU2VyaWFsV3JhcHBlci5wcm90b3R5cGUuX3RvSW52b2tlID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNldCBvZiBmbGFncyBpZiB0aGUgbWV0aG9kIGlzIGluIHByb2dyZXNzLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblNlcmlhbFdyYXBwZXIucHJvdG90eXBlLl9pblByb2dyZXNzID0gbnVsbDtcblxuLyoqXG4gKiBBZGRzIG1ldGhvZCB0byB0aGUgc2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTWV0aG9kIG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0b0ludm9rZSBGdW5jdGlvbiB0aGF0IHJldHVybnMgcHJvbWlzZS5cbiAqL1xuU2VyaWFsV3JhcHBlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHRvSW52b2tlKSB7XG5cdHRoaXMuX3RvSW52b2tlW25hbWVdID0gdG9JbnZva2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBtZXRob2Qgd2l0aCBzdWNoIG5hbWUgd2FzIHJlZ2lzdGVyZWQgdG8gdGhlIHNldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgbWV0aG9kLlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgbWV0aG9kIG5hbWUgaXMgcmVnaXN0ZXJlZC5cbiAqL1xuU2VyaWFsV3JhcHBlci5wcm90b3R5cGUuaXNSZWdpc3RlcmVkID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIHR5cGVvZiAodGhpcy5fdG9JbnZva2VbbmFtZV0pID09PSAnZnVuY3Rpb24nO1xufTtcblxuLyoqXG4gKiBJbnZva2VzIG1ldGhvZCB3aXRob3V0IGNvbmN1cnJlbmN5LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTWV0aG9kIG5hbWUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQuXG4gKi9cblNlcmlhbFdyYXBwZXIucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHRpZiAoIXRoaXMuaXNSZWdpc3RlcmVkKG5hbWUpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9OT19TVUNIX01FVEhPRCkpO1xuXHR9XG5cblx0aWYgKHRoaXMuX2luUHJvZ3Jlc3NbbmFtZV0pIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xuXHRcdFx0c2VsZi5fZW1pdHRlci5vbmNlKG5hbWUsIGZ1bGZpbGwpO1xuXHRcdFx0c2VsZi5fZW1pdHRlci5vbmNlKG5hbWUgKyAnLS1lcnJvcicsIHJlamVjdCk7XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLl9pblByb2dyZXNzW25hbWVdID0gdHJ1ZTtcblx0dGhpcy5fdG9JbnZva2VbbmFtZV0oKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdHNlbGYuX2VtaXR0ZXIuZW1pdChuYW1lLCByZXN1bHQpO1xuXHRcdFx0c2VsZi5faW5Qcm9ncmVzc1tuYW1lXSA9IG51bGw7XG5cdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdFx0c2VsZi5fZW1pdHRlci5lbWl0KG5hbWUgKyAnLS1lcnJvcicsIHJlYXNvbik7XG5cdFx0XHRzZWxmLl9pblByb2dyZXNzW25hbWVdID0gbnVsbDtcblx0XHR9KTtcblxuXHRyZXR1cm4gdGhpcy5pbnZva2UobmFtZSk7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JlRGlzcGF0Y2hlcjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyksXG5cdFNlcmlhbFdyYXBwZXIgPSByZXF1aXJlKCcuL1NlcmlhbFdyYXBwZXInKSxcblx0bW9kdWxlSGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZHVsZUhlbHBlcicpO1xuXG52YXIgRVJST1JfU1RPUkVfTk9UX0ZPVU5EID0gJ1N0b3JlIFwiJXNcIiBub3QgZm91bmQnLFxuXHRFUlJPUl9TVEFURSA9ICdTdGF0ZSBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgcmVxdWVzdCcsXG5cdERFRkFVTFRfTElGRVRJTUUgPSA2MDAwMDtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBzdG9yZSBkaXNwYXRjaGVyLlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gJHNlcnZpY2VMb2NhdG9yIExvY2F0b3IgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMuXG4gKiBAcGFyYW0ge1N0b3JlTG9hZGVyfSAkc3RvcmVMb2FkZXIgU3RvcmUgbG9hZGVyIHRvIGxvYWQgc3RvcmVzLlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9ICRldmVudEJ1cyBFdmVudCBidXMgdG8gZW1pdCBldmVudHMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3RvcmVEaXNwYXRjaGVyKCRzZXJ2aWNlTG9jYXRvciwgJHN0b3JlTG9hZGVyLCAkZXZlbnRCdXMpIHtcblx0dGhpcy5fc2VydmljZUxvY2F0b3IgPSAkc2VydmljZUxvY2F0b3I7XG5cdHRoaXMuX3N0b3JlTG9hZGVyID0gJHN0b3JlTG9hZGVyO1xuXHR0aGlzLl9ldmVudEJ1cyA9ICRldmVudEJ1cztcblx0dGhpcy5fc3RvcmVJbnN0YW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9sYXN0RGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHRoaXMuX2RlcGVuZGFudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR0aGlzLl9zZXJpYWxXcmFwcGVyID0gbmV3IFNlcmlhbFdyYXBwZXIoKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX3NlcnZpY2VMb2NhdG9yID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IGV2ZW50IGJ1cy5cbiAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9ldmVudEJ1cyA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzdG9yZSBsb2FkZXIuXG4gKiBAdHlwZSB7U3RvcmVMb2FkZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9zdG9yZUxvYWRlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBtYXAgb2YgYWxsIHN0b3JlIGluc3RhbmNlcy5cbiAqIEB0eXBlIHtudWxsfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fc3RvcmVJbnN0YW5jZXMgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbWFwIG9mIGxhc3QgZGF0YSBmb3IgZWFjaCBzdG9yZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9sYXN0RGF0YSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBtYXAgb2YgbGFzdCBzdGF0ZSBvZiBzdG9yZSBkaXNwYXRjaGVyLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX2xhc3RTdGF0ZSA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXJpYWwgd3JhcHBlci5cbiAqIEB0eXBlIHtTZXJpYWxXcmFwcGVyfVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fc2VyaWFsV3JhcHBlciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBiYXNpYyBjb250ZXh0IGZvciBhbGwgc3RvcmUgY29udGV4dHMuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5fY3VycmVudEJhc2ljQ29udGV4dCA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBzZXQgb2Ygc3RvcmUgZGVwZW5kZW5jeSBncmFwaC5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLl9kZXBlbmRhbnRzID0gbnVsbDtcblxuLyoqXG4gKiBHZXRzIHN0b3JlIGRhdGEgYW5kIGNyZWF0ZXMgc3RvcmUgaW5zdGFuY2UgaWYgcmVxdWlyZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lIE5hbWUgb2Ygc3RvcmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBTdG9yZSdzIGRhdGEuXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuZ2V0U3RvcmVEYXRhID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRpZiAoIXRoaXMuX2xhc3RTdGF0ZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoRVJST1JfU1RBVEUpKTtcblx0fVxuXHRpZiAodHlwZW9mIChzdG9yZU5hbWUpICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG5cdH1cblx0aWYgKHN0b3JlTmFtZSBpbiB0aGlzLl9sYXN0RGF0YSkge1xuXHRcdHZhciBleGlzdFRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXS5jcmVhdGVkQXQ7XG5cdFx0aWYgKGV4aXN0VGltZSA8PSB0aGlzLl9sYXN0RGF0YVtzdG9yZU5hbWVdLmxpZmV0aW1lKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xhc3REYXRhW3N0b3JlTmFtZV0uZGF0YSk7XG5cdFx0fVxuXHRcdGRlbGV0ZSB0aGlzLl9sYXN0RGF0YVtzdG9yZU5hbWVdO1xuXHR9XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRsaWZldGltZSA9IERFRkFVTFRfTElGRVRJTUU7XG5cdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ3N0b3JlRGF0YUxvYWQnLCB7XG5cdFx0bmFtZTogc3RvcmVOYW1lXG5cdH0pO1xuXHR2YXIgc3RvcmUgPSB0aGlzLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdGlmICghc3RvcmUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFxuXHRcdFx0XHR1dGlsLmZvcm1hdChFUlJPUl9TVE9SRV9OT1RfRk9VTkQsIHN0b3JlTmFtZSkpXG5cdFx0KTtcblx0fVxuXHRpZiAodHlwZW9mIChzdG9yZS4kbGlmZXRpbWUpID09PSAnbnVtYmVyJykge1xuXHRcdGxpZmV0aW1lID0gc3RvcmUuJGxpZmV0aW1lO1xuXHR9XG5cdHJldHVybiBzZWxmLl9zZXJpYWxXcmFwcGVyLmludm9rZShzdG9yZU5hbWUpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdHNlbGYuX2xhc3REYXRhW3N0b3JlTmFtZV0gPSB7XG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdGxpZmV0aW1lOiBsaWZldGltZSxcblx0XHRcdFx0Y3JlYXRlZEF0OiBEYXRlLm5vdygpXG5cdFx0XHR9O1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnc3RvcmVEYXRhTG9hZGVkJywge1xuXHRcdFx0XHRuYW1lOiBzdG9yZU5hbWUsXG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdGxpZmV0aW1lOiBsaWZldGltZVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogU2VuZHMgYWN0aW9uIHRvIHNwZWNpZmllZCBzdG9yZSBhbmQgcmVzb2x2ZXMgcHJvbWlzZXMgaW4gc2VyaWFsIG1vZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgTmFtZSBvZiB0aGUgYWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgQWN0aW9uIGFyZ3VtZW50cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPCo+fSBQcm9taXNlIGZvciBhY3Rpb24gaGFuZGxpbmcgcmVzdWx0LlxuICovXG5TdG9yZURpc3BhdGNoZXIucHJvdG90eXBlLnNlbmRBY3Rpb24gPSBmdW5jdGlvbiAoc3RvcmVOYW1lLCBhY3Rpb25OYW1lLCBhcmdzKSB7XG5cdGlmICghdGhpcy5fbGFzdFN0YXRlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihFUlJPUl9TVEFURSkpO1xuXHR9XG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHRhY3Rpb25EZXRhaWxzID0ge1xuXHRcdFx0c3RvcmVOYW1lOiBzdG9yZU5hbWUsXG5cdFx0XHRhY3Rpb25OYW1lOiBhY3Rpb25OYW1lLFxuXHRcdFx0YXJnczogYXJnc1xuXHRcdH07XG5cdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2FjdGlvblNlbmQnLCBhY3Rpb25EZXRhaWxzKTtcblx0dmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZShzdG9yZU5hbWUpO1xuXHRpZiAoIXN0b3JlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcblx0XHRcdHV0aWwuZm9ybWF0KEVSUk9SX1NUT1JFX05PVF9GT1VORCwgc3RvcmVOYW1lKSlcblx0XHQpO1xuXHR9XG5cdHZhciBoYW5kbGVNZXRob2QgPSBtb2R1bGVIZWxwZXIuZ2V0TWV0aG9kVG9JbnZva2UoXG5cdFx0c3RvcmUsICdoYW5kbGUnLCBhY3Rpb25OYW1lXG5cdCk7XG5cdHJldHVybiBtb2R1bGVIZWxwZXIuZ2V0U2FmZVByb21pc2UoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBoYW5kbGVNZXRob2QoYXJncyk7XG5cdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0c2VsZi5fZXZlbnRCdXMuZW1pdCgnYWN0aW9uU2VudCcsIGFjdGlvbkRldGFpbHMpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogU2VuZHMgYWN0aW9uIHRvIGV2ZXJ5IHN0b3JlIHRoYXQgaGFzIGhhbmRsZSBtZXRob2QgZm9yIHN1Y2ggYWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgTmFtZSBvZiB0aGUgYWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IGFyZyBBY3Rpb24gYXJndW1lbnRzLlxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8Kj4+fSBQcm9taXNlIGZvciB0aGUgYWN0aW9uIGhhbmRsaW5nIHJlc3VsdC5cbiAqL1xuU3RvcmVEaXNwYXRjaGVyLnByb3RvdHlwZS5zZW5kQnJvYWRjYXN0QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbk5hbWUsIGFyZykge1xuXHR2YXIgcHJvbWlzZXMgPSBbXSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRzdG9yZXNCeU5hbWVzID0gdGhpcy5fc3RvcmVMb2FkZXIuZ2V0U3RvcmVzQnlOYW1lcygpLFxuXHRcdG1ldGhvZE5hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0Q2FtZWxDYXNlTmFtZSgnaGFuZGxlJywgYWN0aW9uTmFtZSk7XG5cdE9iamVjdC5rZXlzKHN0b3Jlc0J5TmFtZXMpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0dmFyIHN0b3JlID0gc3RvcmVzQnlOYW1lc1tzdG9yZU5hbWVdLFxuXHRcdFx0XHRwcm90b01ldGhvZCA9IHN0b3JlLmNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblx0XHRcdGlmICh0eXBlb2YgKHByb3RvTWV0aG9kKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgc2VuZEFjdGlvblByb21pc2UgPSBzZWxmLnNlbmRBY3Rpb24oXG5cdFx0XHRcdHN0b3JlLm5hbWUsIGFjdGlvbk5hbWUsIGFyZ1xuXHRcdFx0KTtcblx0XHRcdHByb21pc2VzLnB1c2goc2VuZEFjdGlvblByb21pc2UpO1xuXHRcdH0pO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuLyoqXG4gKiBTZXRzIG5ldyBzdGF0ZSB0byBzdG9yZSBkaXNwYXRjaGVyIGFuZCBpbnZva2VzIFwiY2hhbmdlZFwiIG1ldGhvZCBmb3IgYWxsXG4gKiBzdG9yZXMgd2hpY2ggc3RhdGUgaGF2ZSBiZWVuIGNoYW5nZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBNYXAgb2YgbmV3IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gYmFzaWNDb250ZXh0IEJhc2ljIGNvbnRleHQgZm9yIGFsbCBzdG9yZXMuXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn0gTmFtZXMgb2Ygc3RvcmVzIHRoYXQgaGF2ZSBiZWVuIGNoYW5nZWQuXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFyYW1ldGVycywgYmFzaWNDb250ZXh0KSB7XG5cdHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdGlmICghdGhpcy5fbGFzdFN0YXRlKSB7XG5cdFx0dGhpcy5fY3VycmVudEJhc2ljQ29udGV4dCA9IGJhc2ljQ29udGV4dDtcblx0XHR0aGlzLl9sYXN0U3RhdGUgPSBwYXJhbWV0ZXJzO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIHNvbWUgc3RvcmUncyBwYXJhbWV0ZXJzIGNhbiBiZSByZW1vdmVkIHNpbmNlIGxhc3QgdGltZVxuXHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0Y2hhbmdlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0T2JqZWN0LmtleXModGhpcy5fbGFzdFN0YXRlKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0cmV0dXJuICEoc3RvcmVOYW1lIGluIHBhcmFtZXRlcnMpO1xuXHRcdH0pXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRcdGNoYW5nZWRbbmFtZV0gPSB0cnVlO1xuXHRcdH0pO1xuXG5cdE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0Ly8gbmV3IHBhcmFtZXRlcnMgd2VyZSBzZXQgZm9yIHN0b3JlXG5cdFx0XHRpZiAoIShzdG9yZU5hbWUgaW4gc2VsZi5fbGFzdFN0YXRlKSkge1xuXHRcdFx0XHRjaGFuZ2VkW3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5ldyBhbmQgbGFzdCBwYXJhbWV0ZXJzIGhhcyBkaWZmZXJlbnQgdmFsdWVzXG5cdFx0XHR2YXIgbGFzdFBhcmFtZXRlck5hbWVzID1cblx0XHRcdFx0XHRPYmplY3Qua2V5cyhzZWxmLl9sYXN0U3RhdGVbc3RvcmVOYW1lXSksXG5cdFx0XHRcdGN1cnJlbnRQYXJhbWV0ZXJOYW1lcyA9XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMocGFyYW1ldGVyc1tzdG9yZU5hbWVdKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRQYXJhbWV0ZXJOYW1lcy5sZW5ndGggIT09XG5cdFx0XHRcdGxhc3RQYXJhbWV0ZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRcdFx0Y2hhbmdlZFtzdG9yZU5hbWVdID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50UGFyYW1ldGVyTmFtZXMuZXZlcnkoZnVuY3Rpb24gKHBhcmFtZXRlck5hbWUpIHtcblx0XHRcdFx0aWYgKHBhcmFtZXRlcnNbc3RvcmVOYW1lXVtwYXJhbWV0ZXJOYW1lXSAhPT1cblx0XHRcdFx0XHRzZWxmLl9sYXN0U3RhdGVbc3RvcmVOYW1lXVtwYXJhbWV0ZXJOYW1lXSkge1xuXHRcdFx0XHRcdGNoYW5nZWRbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0dGhpcy5fbGFzdFN0YXRlID0gcGFyYW1ldGVycztcblx0aWYgKHRoaXMuX2N1cnJlbnRCYXNpY0NvbnRleHQgIT09IGJhc2ljQ29udGV4dCkge1xuXHRcdHRoaXMuX2N1cnJlbnRCYXNpY0NvbnRleHQgPSBiYXNpY0NvbnRleHQ7XG5cdFx0T2JqZWN0LmtleXModGhpcy5fc3RvcmVJbnN0YW5jZXMpXG5cdFx0XHQuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRcdHNlbGYuX3N0b3JlSW5zdGFuY2VzW3N0b3JlTmFtZV0uJGNvbnRleHQgPVxuXHRcdFx0XHRcdHNlbGYuX2dldFN0b3JlQ29udGV4dChzdG9yZU5hbWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR2YXIgY2hhbmdlZFN0b3JlTmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRPYmplY3Qua2V5cyhjaGFuZ2VkKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0XHRcdHZhciBzdG9yZSA9IHNlbGYuZ2V0U3RvcmUoc3RvcmVOYW1lKTtcblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c3RvcmUuJGNvbnRleHQuY2hhbmdlZCgpXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRcdFx0Y2hhbmdlZFN0b3JlTmFtZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblxuXHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdzdGF0ZUNoYW5nZWQnLCB7XG5cdFx0b2xkU3RhdGU6IHRoaXMuX2xhc3RTdGF0ZSxcblx0XHRuZXdTdGF0ZTogcGFyYW1ldGVyc1xuXHR9KTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKGNoYW5nZWRTdG9yZU5hbWVzKTtcbn07XG5cbi8qKlxuICogR2V0cyBjb250ZXh0IGZvciBzdG9yZSB1c2luZyBjb21wb25lbnQncyBjb250ZXh0IGFzIGEgcHJvdG90eXBlLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZSBOYW1lIG9mIHN0b3JlLlxuICogQHJldHVybnMge09iamVjdH0gU3RvcmUgY29udGV4dC5cbiAqIEBwcml2YXRlXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuX2dldFN0b3JlQ29udGV4dCA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcblx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdHN0b3JlQ29udGV4dCA9IE9iamVjdC5jcmVhdGUodGhpcy5fY3VycmVudEJhc2ljQ29udGV4dCk7XG5cdHN0b3JlQ29udGV4dC5uYW1lID0gc3RvcmVOYW1lO1xuXHRzdG9yZUNvbnRleHQuc3RhdGUgPSB0aGlzLl9sYXN0U3RhdGVbc3RvcmVOYW1lXSB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRzdG9yZUNvbnRleHQuY2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgd2Fsa2VkID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRcdGN1cnJlbnQsXG5cdFx0XHR0b0NoYW5nZSA9IFtzdG9yZU5hbWVdO1xuXG5cdFx0d2hpbGUgKHRvQ2hhbmdlLmxlbmd0aCA+IDApIHtcblx0XHRcdGN1cnJlbnQgPSB0b0NoYW5nZS5zaGlmdCgpO1xuXHRcdFx0aWYgKGN1cnJlbnQgaW4gd2Fsa2VkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0d2Fsa2VkW2N1cnJlbnRdID0gdHJ1ZTtcblx0XHRcdGlmIChjdXJyZW50IGluIHNlbGYuX2RlcGVuZGFudHMpIHtcblx0XHRcdFx0dG9DaGFuZ2UgPSB0b0NoYW5nZS5jb25jYXQoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoc2VsZi5fZGVwZW5kYW50c1tjdXJyZW50XSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzZWxmLl9sYXN0RGF0YVtjdXJyZW50XTtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ3N0b3JlQ2hhbmdlZCcsIGN1cnJlbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMod2Fsa2VkKTtcblx0fTtcblx0c3RvcmVDb250ZXh0LmdldFN0b3JlRGF0YSA9IGZ1bmN0aW9uIChzb3VyY2VTdG9yZU5hbWUpIHtcblx0XHRpZiAoc291cmNlU3RvcmVOYW1lID09PSBzdG9yZU5hbWUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG5cdFx0fVxuXHRcdHJldHVybiBzZWxmLmdldFN0b3JlRGF0YShzb3VyY2VTdG9yZU5hbWUpO1xuXHR9O1xuXHRzdG9yZUNvbnRleHQuc2V0RGVwZW5kZW5jeSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0aWYgKCEobmFtZSBpbiBzZWxmLl9kZXBlbmRhbnRzKSkge1xuXHRcdFx0c2VsZi5fZGVwZW5kYW50c1tuYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0fVxuXHRcdHNlbGYuX2RlcGVuZGFudHNbbmFtZV1bc3RvcmVOYW1lXSA9IHRydWU7XG5cdH07XG5cdHN0b3JlQ29udGV4dC51bnNldERlcGVuZGVuY3kgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGlmICghKG5hbWUgaW4gc2VsZi5fZGVwZW5kYW50cykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGVsZXRlIHNlbGYuX2RlcGVuZGFudHNbbmFtZV1bc3RvcmVOYW1lXTtcblx0fTtcblx0c3RvcmVDb250ZXh0LnNlbmRBY3Rpb24gPSBmdW5jdGlvbiAoc3RvcmVOYW1lLCBuYW1lLCBhcmdzKSB7XG5cdFx0cmV0dXJuIHNlbGYuc2VuZEFjdGlvbihzdG9yZU5hbWUsIG5hbWUsIGFyZ3MpO1xuXHR9O1xuXHRzdG9yZUNvbnRleHQuc2VuZEJyb2FkY2FzdEFjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG5cdFx0cmV0dXJuIHNlbGYuc2VuZEJyb2FkY2FzdEFjdGlvbihuYW1lLCBhcmdzKTtcblx0fTtcblxuXHRyZXR1cm4gc3RvcmVDb250ZXh0O1xufTtcblxuLyoqXG4gKiBHZXRzIHN0b3JlIGluc3RhbmNlIGFuZCBjcmVhdGVzIGl0IGlmIHJlcXVpcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZSBOYW1lIG9mIHN0b3JlLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3Igc3RvcmUuXG4gKi9cblN0b3JlRGlzcGF0Y2hlci5wcm90b3R5cGUuZ2V0U3RvcmUgPSBmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdGlmICghc3RvcmVOYW1lKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIHN0b3JlID0gdGhpcy5fc3RvcmVJbnN0YW5jZXNbc3RvcmVOYW1lXTtcblx0aWYgKHN0b3JlKSB7XG5cdFx0cmV0dXJuIHN0b3JlO1xuXHR9XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHR2YXIgc3RvcmVzID0gc2VsZi5fc3RvcmVMb2FkZXIuZ2V0U3RvcmVzQnlOYW1lcygpLFxuXHRcdGNvbmZpZyA9IHNlbGYuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2NvbmZpZycpO1xuXHRpZiAoIShzdG9yZU5hbWUgaW4gc3RvcmVzKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGNvbnN0cnVjdG9yID0gc3RvcmVzW3N0b3JlTmFtZV0uY29uc3RydWN0b3I7XG5cdGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kY29udGV4dCA9IHNlbGYuX2dldFN0b3JlQ29udGV4dChzdG9yZU5hbWUpO1xuXHRzZWxmLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdID0gc2VsZi5fc2VydmljZUxvY2F0b3Jcblx0XHQucmVzb2x2ZUluc3RhbmNlKGNvbnN0cnVjdG9yLCBjb25maWcpO1xuXHRzZWxmLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdLiRjb250ZXh0ID0gY29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0O1xuXG5cdHNlbGYuX3NlcmlhbFdyYXBwZXIuYWRkKHN0b3JlTmFtZSwgZnVuY3Rpb24gKCkge1xuXHRcdHZhciBsb2FkTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKFxuXHRcdFx0c2VsZi5fc3RvcmVJbnN0YW5jZXNbc3RvcmVOYW1lXSwgJ2xvYWQnXG5cdFx0KTtcblx0XHRyZXR1cm4gbW9kdWxlSGVscGVyLmdldFNhZmVQcm9taXNlKGxvYWRNZXRob2QpO1xuXHR9KTtcblx0cmV0dXJuIHNlbGYuX3N0b3JlSW5zdGFuY2VzW3N0b3JlTmFtZV07XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb3RzdHJhcHBlckJhc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRtb2R1bGVIZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL21vZHVsZUhlbHBlcicpLFxuXHRoclRpbWVIZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2hyVGltZUhlbHBlcicpLFxuXHR1aHIgPSByZXF1aXJlKCdjYXRiZXJyeS11aHInKSxcblx0UHJvbWlzZSA9IHJlcXVpcmUoJ3Byb21pc2UnKSxcblx0U3RhdGVQcm92aWRlciA9IHJlcXVpcmUoJy4uL3Byb3ZpZGVycy9TdGF0ZVByb3ZpZGVyJyksXG5cdFN0b3JlTG9hZGVyID0gcmVxdWlyZSgnLi4vbG9hZGVycy9TdG9yZUxvYWRlcicpLFxuXHRDb21wb25lbnRMb2FkZXIgPSByZXF1aXJlKCcuLi9sb2FkZXJzL0NvbXBvbmVudExvYWRlcicpLFxuXHREb2N1bWVudFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vRG9jdW1lbnRSZW5kZXJlcicpLFxuXHRSZXF1ZXN0Um91dGVyID0gcmVxdWlyZSgnLi4vUmVxdWVzdFJvdXRlcicpLFxuXHRNb2R1bGVBcGlQcm92aWRlckJhc2UgPSByZXF1aXJlKCcuLi9iYXNlL01vZHVsZUFwaVByb3ZpZGVyQmFzZScpLFxuXHRDb250ZXh0RmFjdG9yeSA9IHJlcXVpcmUoJy4uL0NvbnRleHRGYWN0b3J5JyksXG5cdEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIElORk9fQ09NUE9ORU5UX0xPQURFRCA9ICdDb21wb25lbnQgXCIlc1wiIGxvYWRlZCcsXG5cdElORk9fU1RPUkVfTE9BREVEID0gJ1N0b3JlIFwiJXNcIiBsb2FkZWQnLFxuXHRJTkZPX0FMTF9TVE9SRVNfTE9BREVEID0gJ0FsbCBzdG9yZXMgbG9hZGVkJyxcblx0SU5GT19BTExfQ09NUE9ORU5UU19MT0FERUQgPSAnQWxsIGNvbXBvbmVudHMgbG9hZGVkJyxcblx0REVCVUdfRE9DVU1FTlRfUkVOREVSRUQgPSAnRG9jdW1lbnQgcmVuZGVyZWQgZm9yIFVSSSAlcycsXG5cdERFQlVHX1JFTkRFUl9DT01QT05FTlQgPSAnQ29tcG9uZW50IFwiJXMlc1wiIGlzIGJlaW5nIHJlbmRlcmVkLi4uJyxcblx0REVCVUdfQ09NUE9ORU5UX1JFTkRFUkVEID0gJ0NvbXBvbmVudCBcIiVzJXNcIiByZW5kZXJlZCVzJztcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBiYXNlIENhdGJlcnJ5IGJvb3RzdHJhcHBlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhdGJlcnJ5Q29uc3RydWN0b3IgQ29uc3RydWN0b3JcbiAqIG9mIHRoZSBDYXRiZXJyeSdzIG1haW4gbW9kdWxlLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJvb3RzdHJhcHBlckJhc2UoY2F0YmVycnlDb25zdHJ1Y3Rvcikge1xuXHR0aGlzLl9jYXRiZXJyeUNvbnN0cnVjdG9yID0gY2F0YmVycnlDb25zdHJ1Y3Rvcjtcbn1cblxuLyoqXG4gKiBDdXJyZW50IGNvbnN0cnVjdG9yIG9mIHRoZSBDYXRiZXJyeSdzIG1haW4gbW9kdWxlLlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuQm9vdHN0cmFwcGVyQmFzZS5wcm90b3R5cGUuX2NhdGJlcnJ5Q29uc3RydWN0b3IgPSBudWxsO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IGZ1bGwtY29uZmlndXJlZCBpbnN0YW5jZSBvZiB0aGUgQ2F0YmVycnkgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdD99IGNvbmZpZ09iamVjdCBDb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIHtDYXRiZXJyeX0gQ2F0YmVycnkgYXBwbGljYXRpb24gaW5zdGFuY2UuXG4gKi9cbkJvb3RzdHJhcHBlckJhc2UucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWdPYmplY3QpIHtcblx0dmFyIGN1cnJlbnRDb25maWcgPSBjb25maWdPYmplY3QgfHwge30sXG5cdFx0Y2F0YmVycnkgPSBuZXcgdGhpcy5fY2F0YmVycnlDb25zdHJ1Y3RvcigpO1xuXG5cdHRoaXMuY29uZmlndXJlKGN1cnJlbnRDb25maWcsIGNhdGJlcnJ5LmxvY2F0b3IpO1xuXHRjYXRiZXJyeS5ldmVudHMgPSBjYXRiZXJyeS5sb2NhdG9yLnJlc29sdmVJbnN0YW5jZShNb2R1bGVBcGlQcm92aWRlckJhc2UpO1xuXHRyZXR1cm4gY2F0YmVycnk7XG59O1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgbG9jYXRvciB3aXRoIGFsbCByZXF1aXJlZCB0eXBlIHJlZ2lzdHJhdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnT2JqZWN0IENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBTZXJ2aWNlIGxvY2F0b3IgdG8gY29uZmlndXJlLlxuICovXG5Cb290c3RyYXBwZXJCYXNlLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAoY29uZmlnT2JqZWN0LCBsb2NhdG9yKSB7XG5cdHZhciBldmVudEJ1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0ZXZlbnRCdXMuc2V0TWF4TGlzdGVuZXJzKDApO1xuXHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3Byb21pc2UnLCBQcm9taXNlKTtcblx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdldmVudEJ1cycsIGV2ZW50QnVzKTtcblx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdjb25maWcnLCBjb25maWdPYmplY3QpO1xuXHRsb2NhdG9yLnJlZ2lzdGVyKCdzdGF0ZVByb3ZpZGVyJywgU3RhdGVQcm92aWRlciwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblx0bG9jYXRvci5yZWdpc3RlcignY29udGV4dEZhY3RvcnknLCBDb250ZXh0RmFjdG9yeSwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblx0bG9jYXRvci5yZWdpc3Rlcignc3RvcmVMb2FkZXInLCBTdG9yZUxvYWRlciwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblx0bG9jYXRvci5yZWdpc3RlcignY29tcG9uZW50TG9hZGVyJywgQ29tcG9uZW50TG9hZGVyLCBjb25maWdPYmplY3QsIHRydWUpO1xuXHRsb2NhdG9yLnJlZ2lzdGVyKCdkb2N1bWVudFJlbmRlcmVyJywgRG9jdW1lbnRSZW5kZXJlciwgY29uZmlnT2JqZWN0LCB0cnVlKTtcblx0bG9jYXRvci5yZWdpc3RlcigncmVxdWVzdFJvdXRlcicsIFJlcXVlc3RSb3V0ZXIsIGNvbmZpZ09iamVjdCwgdHJ1ZSk7XG5cblx0dWhyLnJlZ2lzdGVyKGxvY2F0b3IpO1xufTtcblxuLyoqXG4gKiBXcmFwcyBldmVudCBidXMgd2l0aCBsb2cgbWVzc2FnZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIEFwcGxpY2F0aW9uIGNvbmZpZy5cbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBldmVudEJ1cyBFdmVudCBlbWl0dGVyIHRoYXQgaW1wbGVtZW50cyBldmVudCBidXMuXG4gKiBAcGFyYW0ge0xvZ2dlcn0gbG9nZ2VyIExvZ2dlciB0byB3cml0ZSBtZXNzYWdlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQm9vdHN0cmFwcGVyQmFzZS5wcm90b3R5cGUuX3dyYXBFdmVudHNXaXRoTG9nZ2VyID1cblx0ZnVuY3Rpb24gKGNvbmZpZywgZXZlbnRCdXMsIGxvZ2dlcikge1xuXHRcdHZhciBpc1JlbGVhc2UgPSBCb29sZWFuKGNvbmZpZy5pc1JlbGVhc2UpO1xuXHRcdGV2ZW50QnVzXG5cdFx0XHQub24oJ2NvbXBvbmVudExvYWRlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdGxvZ2dlci5pbmZvKHV0aWwuZm9ybWF0KElORk9fQ09NUE9ORU5UX0xPQURFRCwgYXJncy5uYW1lKSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdzdG9yZUxvYWRlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdGxvZ2dlci5pbmZvKHV0aWwuZm9ybWF0KElORk9fU1RPUkVfTE9BREVELCBhcmdzLm5hbWUpKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2FsbFN0b3Jlc0xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9nZ2VyLmluZm8oSU5GT19BTExfU1RPUkVTX0xPQURFRCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdhbGxDb21wb25lbnRzTG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2dnZXIuaW5mbyhJTkZPX0FMTF9DT01QT05FTlRTX0xPQURFRCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRsb2dnZXIuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoaXNSZWxlYXNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGV2ZW50QnVzXG5cdFx0XHQub24oJ2NvbXBvbmVudFJlbmRlcicsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdHZhciBpZCA9IGFyZ3MuY29udGV4dC5hdHRyaWJ1dGVzW21vZHVsZUhlbHBlci5BVFRSSUJVVEVfSURdO1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoREVCVUdfUkVOREVSX0NPTVBPTkVOVCxcblx0XHRcdFx0XHRtb2R1bGVIZWxwZXIuZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoYXJncy5uYW1lKSxcblx0XHRcdFx0XHRpZCA/ICcjJyArIGlkIDogJydcblx0XHRcdFx0KSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdjb21wb25lbnRSZW5kZXJlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdHZhciBpZCA9IGFyZ3MuY29udGV4dC5hdHRyaWJ1dGVzW21vZHVsZUhlbHBlci5BVFRSSUJVVEVfSURdO1xuXHRcdFx0XHRsb2dnZXIuZGVidWcodXRpbC5mb3JtYXQoXG5cdFx0XHRcdFx0REVCVUdfQ09NUE9ORU5UX1JFTkRFUkVELFxuXHRcdFx0XHRcdG1vZHVsZUhlbHBlci5nZXRUYWdOYW1lRm9yQ29tcG9uZW50TmFtZShhcmdzLm5hbWUpLFxuXHRcdFx0XHRcdGlkID8gJyMnICsgaWQgOiAnJyxcblx0XHRcdFx0XHR1dGlsLmlzQXJyYXkoYXJncy5oclRpbWUpID9cblx0XHRcdFx0XHRcdCcgKCcgKyBoclRpbWVIZWxwZXIudG9NZXNzYWdlKGFyZ3MuaHJUaW1lKSArICcpJyA6ICcnXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSlcblx0XHRcdC5vbignZG9jdW1lbnRSZW5kZXJlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0XHRcdGxvZ2dlci5kZWJ1Zyh1dGlsLmZvcm1hdChcblx0XHRcdFx0XHRERUJVR19ET0NVTUVOVF9SRU5ERVJFRCwgYXJncy5sb2NhdGlvbi50b1N0cmluZygpXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSk7XG5cdH07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0YmVycnlCYXNlO1xuXG52YXIgU2VydmljZUxvY2F0b3IgPSByZXF1aXJlKCdjYXRiZXJyeS1sb2NhdG9yJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIENhdGJlcnJ5IGFwcGxpY2F0aW9uIG1vZHVsZS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDYXRiZXJyeUJhc2UoKSB7XG5cdHRoaXMubG9jYXRvciA9IG5ldyBTZXJ2aWNlTG9jYXRvcigpO1xuXHR0aGlzLmxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnc2VydmljZUxvY2F0b3InLCB0aGlzLmxvY2F0b3IpO1xuXHR0aGlzLmxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnY2F0YmVycnknLCB0aGlzKTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHZlcnNpb24gb2YgY2F0YmVycnkuXG4gKi9cbkNhdGJlcnJ5QmFzZS5wcm90b3R5cGUudmVyc2lvbiA9ICc3LjEuMic7XG5cbi8qKlxuICogQ3VycmVudCBvYmplY3Qgd2l0aCBldmVudHMuXG4gKiBAdHlwZSB7TW9kdWxlQXBpUHJvdmlkZXJ9XG4gKi9cbkNhdGJlcnJ5QmFzZS5wcm90b3R5cGUuZXZlbnRzID0gbnVsbDtcblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqL1xuQ2F0YmVycnlCYXNlLnByb3RvdHlwZS5sb2NhdG9yID0gbnVsbDsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVXcmFwcGVyQmFzZTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIGNvb2tpZSB3cmFwcGVyLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvb2tpZVdyYXBwZXJCYXNlKCkge1xufVxuXG4vKipcbiAqIEdldHMgbWFwIG9mIGNvb2tpZSB2YWx1ZXMgYnkgbmFtZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb2tpZXMgbWFwIGJ5IG5hbWVzLlxuICovXG5Db29raWVXcmFwcGVyQmFzZS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc3RyaW5nID0gdGhpcy5nZXRDb29raWVTdHJpbmcoKTtcblx0cmV0dXJuIHRoaXMuX3BhcnNlQ29va2llU3RyaW5nKHN0cmluZyk7XG59O1xuXG4vKipcbiAqIEdldHMgY29va2llIHZhbHVlIGJ5IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBDb29raWUgbmFtZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IENvb2tpZSB2YWx1ZS5cbiAqL1xuQ29va2llV3JhcHBlckJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdGlmICh0eXBlb2YgKG5hbWUpICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldEFsbCgpW25hbWVdIHx8ICcnO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgY29va2llIHN0cmluZyBpbnRvIG1hcCBvZiBjb29raWUga2V5L3ZhbHVlIHBhaXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb29raWUgc3RyaW5nLlxuICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IHdpdGggY29va2llIHZhbHVlcyBieSBrZXlzLlxuICogQHByb3RlY3RlZFxuICovXG5Db29raWVXcmFwcGVyQmFzZS5wcm90b3R5cGUuX3BhcnNlQ29va2llU3RyaW5nID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgY29va2llID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIChzdHJpbmcpICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBjb29raWU7XG5cdH1cblx0c3RyaW5nXG5cdFx0LnNwbGl0KC87ICovKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChjb29raWVQYWlyKSB7XG5cdFx0XHR2YXIgZXF1YWxzSW5kZXggPSBjb29raWVQYWlyLmluZGV4T2YoJz0nKTtcblx0XHRcdGlmIChlcXVhbHNJbmRleCA8IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIga2V5ID0gY29va2llUGFpci5zdWJzdHIoMCwgZXF1YWxzSW5kZXgpLnRyaW0oKSxcblx0XHRcdFx0dmFsdWUgPSBjb29raWVQYWlyLnN1YnN0cihcblx0XHRcdFx0XHRlcXVhbHNJbmRleCArIDEsIGNvb2tpZVBhaXIubGVuZ3RoXG5cdFx0XHRcdCkudHJpbSgpO1xuXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL15cInxcIiQvZywgJycpO1xuXHRcdFx0Y29va2llW2tleV0gPSB2YWx1ZTtcblx0XHR9KTtcblxuXHRyZXR1cm4gY29va2llO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBjb29raWUgc2V0dXAgb2JqZWN0IHRvIGNvb2tpZSBzdHJpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gY29va2llU2V0dXAgQ29va2llIHNldHVwIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC5rZXkgQ29va2llIGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC52YWx1ZSBDb29raWUgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcj99IGNvb2tpZVNldHVwLm1heEFnZSBNYXggY29va2llIGFnZSBpbiBzZWNvbmRzLlxuICogQHBhcmFtIHtEYXRlP30gY29va2llU2V0dXAuZXhwaXJlcyBFeHBpcmUgZGF0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nP30gY29va2llU2V0dXAucGF0aCBVUkkgcGF0aCBmb3IgY29va2llLlxuICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5kb21haW4gQ29va2llIGRvbWFpbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGNvb2tpZVNldHVwLnNlY3VyZSBJcyBjb29raWUgc2VjdXJlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGNvb2tpZVNldHVwLmh0dHBPbmx5IElzIGNvb2tpZSBIVFRQIG9ubHkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb29raWUgc3RyaW5nLlxuICogQHByb3RlY3RlZFxuICovXG5Db29raWVXcmFwcGVyQmFzZS5wcm90b3R5cGUuX2NvbnZlcnRUb0Nvb2tpZVNldHVwID0gZnVuY3Rpb24gKGNvb2tpZVNldHVwKSB7XG5cdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLmtleSkgIT09ICdzdHJpbmcnIHx8XG5cdFx0dHlwZW9mIChjb29raWVTZXR1cC52YWx1ZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdXcm9uZyBrZXkgb3IgdmFsdWUnKTtcblx0fVxuXG5cdHZhciBjb29raWUgPSBjb29raWVTZXR1cC5rZXkgKyAnPScgKyBjb29raWVTZXR1cC52YWx1ZTtcblxuXHQvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2MjY1I3NlY3Rpb24tNC4xLjFcblx0aWYgKHR5cGVvZiAoY29va2llU2V0dXAubWF4QWdlKSA9PT0gJ251bWJlcicpIHtcblx0XHRjb29raWUgKz0gJzsgTWF4LUFnZT0nICsgY29va2llU2V0dXAubWF4QWdlLnRvRml4ZWQoKTtcblx0XHRpZiAoIWNvb2tpZVNldHVwLmV4cGlyZXMpIHtcblx0XHRcdC8vIGJ5IGRlZmF1bHQgZXhwaXJlIGRhdGUgPSBjdXJyZW50IGRhdGUgKyBtYXgtYWdlIGluIHNlY29uZHNcblx0XHRcdGNvb2tpZVNldHVwLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICtcblx0XHRcdFx0Y29va2llU2V0dXAubWF4QWdlICogMTAwMCk7XG5cdFx0fVxuXHR9XG5cdGlmIChjb29raWVTZXR1cC5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdGNvb2tpZSArPSAnOyBFeHBpcmVzPScgKyBjb29raWVTZXR1cC5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG5cdH1cblx0aWYgKHR5cGVvZiAoY29va2llU2V0dXAucGF0aCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0Y29va2llICs9ICc7IFBhdGg9JyArIGNvb2tpZVNldHVwLnBhdGg7XG5cdH1cblx0aWYgKHR5cGVvZiAoY29va2llU2V0dXAuZG9tYWluKSA9PT0gJ3N0cmluZycpIHtcblx0XHRjb29raWUgKz0gJzsgRG9tYWluPScgKyBjb29raWVTZXR1cC5kb21haW47XG5cdH1cblx0aWYgKHR5cGVvZiAoY29va2llU2V0dXAuc2VjdXJlKSA9PT0gJ2Jvb2xlYW4nICYmXG5cdFx0Y29va2llU2V0dXAuc2VjdXJlKSB7XG5cdFx0Y29va2llICs9ICc7IFNlY3VyZSc7XG5cdH1cblx0aWYgKHR5cGVvZiAoY29va2llU2V0dXAuaHR0cE9ubHkpID09PSAnYm9vbGVhbicgJiZcblx0XHRjb29raWVTZXR1cC5odHRwT25seSkge1xuXHRcdGNvb2tpZSArPSAnOyBIdHRwT25seSc7XG5cdH1cblxuXHRyZXR1cm4gY29va2llO1xufTsiLCIvKlxuICogY2F0YmVycnlcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGVuaXMgUmVjaGt1bm92IGFuZCBwcm9qZWN0IGNvbnRyaWJ1dG9ycy5cbiAqXG4gKiBjYXRiZXJyeSdzIGxpY2Vuc2UgZm9sbG93czpcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4gKiBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4gKiBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiBUaGlzIGxpY2Vuc2UgYXBwbGllcyB0byBhbGwgcGFydHMgb2YgY2F0YmVycnkgdGhhdCBhcmUgbm90IGV4dGVybmFsbHlcbiAqIG1haW50YWluZWQgbGlicmFyaWVzLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFJlbmRlcmVyQmFzZTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiB0aGUgYmFzaWMgZG9jdW1lbnQgcmVuZGVyZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgTG9jYXRvciB0byByZXNvbHZlIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEb2N1bWVudFJlbmRlcmVyQmFzZSgkc2VydmljZUxvY2F0b3IpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR0aGlzLl9zZXJ2aWNlTG9jYXRvciA9ICRzZXJ2aWNlTG9jYXRvcjtcblx0dGhpcy5fY29udGV4dEZhY3RvcnkgPSAkc2VydmljZUxvY2F0b3IucmVzb2x2ZSgnY29udGV4dEZhY3RvcnknKTtcblx0dGhpcy5fY29tcG9uZW50TG9hZGVyID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2NvbXBvbmVudExvYWRlcicpO1xuXHR0aGlzLl9ldmVudEJ1cyA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xuXG5cdHZhciBzdG9yZUxvYWRlciA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdzdG9yZUxvYWRlcicpO1xuXHR0aGlzLl9sb2FkaW5nID0gUHJvbWlzZS5hbGwoW1xuXHRcdHRoaXMuX2NvbXBvbmVudExvYWRlci5sb2FkKCksXG5cdFx0c3RvcmVMb2FkZXIubG9hZCgpXG5cdF0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5fbG9hZGluZyA9IG51bGw7XG5cdFx0XHRzZWxmLl9ldmVudEJ1cy5lbWl0KCdyZWFkeScpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHRcdHNlbGYuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKTtcblx0XHR9KTtcbn1cblxuLyoqXG4gKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cbiAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlckJhc2UucHJvdG90eXBlLl9zZXJ2aWNlTG9jYXRvciA9IG51bGw7XG5cbi8qKlxuICogQ3VycmVudCBjb21wb25lbnQgbG9hZGVyLlxuICogQHR5cGUge0NvbXBvbmVudExvYWRlcn1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuRG9jdW1lbnRSZW5kZXJlckJhc2UucHJvdG90eXBlLl9jb21wb25lbnRMb2FkZXIgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgbW9kdWxlIGxvYWRpbmcgcHJvbWlzZS5cbiAqIEB0eXBlIHtQcm9taXNlfVxuICogQHByb3RlY3RlZFxuICovXG5Eb2N1bWVudFJlbmRlcmVyQmFzZS5wcm90b3R5cGUuX2xvYWRpbmcgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgY29udGV4dCBmYWN0b3J5LlxuICogQHR5cGUge0NvbnRleHRGYWN0b3J5fVxuICogQHByb3RlY3RlZFxuICovXG5Eb2N1bWVudFJlbmRlcmVyQmFzZS5wcm90b3R5cGUuX2NvbnRleHRGYWN0b3J5ID0gbnVsbDtcblxuLyoqXG4gKiBHZXRzIHByb21pc2UgZm9yIHJlYWR5IHN0YXRlIHdoZW4gaXQgd2lsbCBiZSBhYmxlIGhhbmRsZSByZXF1ZXN0cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICogQHByb3RlY3RlZFxuICovXG5Eb2N1bWVudFJlbmRlcmVyQmFzZS5wcm90b3R5cGUuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5fbG9hZGluZyA/XG5cdFx0dGhpcy5fbG9hZGluZyA6XG5cdFx0UHJvbWlzZS5yZXNvbHZlKCk7XG59OyIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRlckJhc2U7XG5cbi8qKlxuICogQ3JlYXRlIGJhc2ljIGltcGxlbWVudGF0aW9uIG9mIGEgbW9kdWxlIGxvYWRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IHRyYW5zZm9ybXMgQXJyYXkgb2YgbW9kdWxlIHRyYW5zZm9ybWF0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBMb2FkZXJCYXNlKHRyYW5zZm9ybXMpIHtcblx0dGhpcy5fdHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG59XG5cbi8qKlxuICogQ3VycmVudCBsaXN0IG9mIGNvbXBvbmVudCB0cmFuc2Zvcm1zLlxuICogQHR5cGUge0FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuTG9hZGVyQmFzZS5wcm90b3R5cGUuX3RyYW5zZm9ybXMgPSBudWxsO1xuXG4vKipcbiAqIEFwcGxpZXMgYWxsIHRyYW5zZm9ybWF0aW9ucyByZWdpc3RlcmVkIGluIFNlcnZpY2UgTG9jYXRvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgTG9hZGVkIG1vZHVsZS5cbiAqIEBwYXJhbSB7bnVtYmVyP30gaW5kZXggVHJhbnNmb3JtYXRpb24gaW5kZXggaW4gYSBsaXN0LlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gVHJhbnNmb3JtZWQgbW9kdWxlLlxuICogQHByb3RlY3RlZFxuICovXG5Mb2FkZXJCYXNlLnByb3RvdHlwZS5fYXBwbHlUcmFuc2Zvcm1zID0gZnVuY3Rpb24gKG1vZHVsZSwgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyB0aGUgbGlzdCBpcyBhIHN0YWNrLCB3ZSBzaG91bGQgcmV2ZXJzZSBpdFxuXHRcdGluZGV4ID0gdGhpcy5fdHJhbnNmb3Jtcy5sZW5ndGggLSAxO1xuXHR9XG5cblx0aWYgKGluZGV4IDwgMCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUobW9kdWxlKTtcblx0fVxuXG5cdHZhciBzZWxmID0gdGhpcyxcblx0XHR0cmFuc2Zvcm1hdGlvbiA9IHRoaXMuX3RyYW5zZm9ybXNbaW5kZXhdO1xuXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0cmFuc2Zvcm1hdGlvbi50cmFuc2Zvcm0obW9kdWxlKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uICh0cmFuc2Zvcm1lZE1vZHVsZSkge1xuXHRcdFx0cmV0dXJuIHNlbGYuX2FwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1lZE1vZHVsZSwgaW5kZXggLSAxKTtcblx0XHR9KTtcbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlQXBpUHJvdmlkZXJCYXNlO1xuXG52YXIgRVJST1JfRVZFTlRfTkFNRSA9ICdFdmVudCBuYW1lIHNob3VsZCBiZSBhIHN0cmluZycsXG5cdEVSUk9SX0VWRU5UX0hBTkRMRVIgPSAnRXZlbnQgaGFuZGxlciBzaG91bGQgYmUgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIEFQSSBwcm92aWRlci5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9ICRzZXJ2aWNlTG9jYXRvciBTZXJ2aWNlIGxvY2F0b3JcbiAqIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1vZHVsZUFwaVByb3ZpZGVyQmFzZSgkc2VydmljZUxvY2F0b3IpIHtcblx0dGhpcy5sb2NhdG9yID0gJHNlcnZpY2VMb2NhdG9yO1xuXHR0aGlzLmNvb2tpZSA9ICRzZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb29raWVXcmFwcGVyJyk7XG5cdHRoaXMuX2V2ZW50QnVzID0gJHNlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ2V2ZW50QnVzJyk7XG59XG5cbi8qKlxuICogQ3VycmVudCBjb29raWUgcHJvdmlkZXIuXG4gKiBAdHlwZSB7Q29va2llV3JhcHBlcn1cbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXJCYXNlLnByb3RvdHlwZS5jb29raWUgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuICogQHByb3RlY3RlZFxuICovXG5Nb2R1bGVBcGlQcm92aWRlckJhc2UucHJvdG90eXBlLmxvY2F0b3IgPSBudWxsO1xuXG4vKipcbiAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuICogQHR5cGUge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyQmFzZS5wcm90b3R5cGUuX2V2ZW50QnVzID0gbnVsbDtcblxuLyoqXG4gKiBTdWJzY3JpYmVzIG9uIHRoZSBzcGVjaWZpZWQgZXZlbnQgaW4gQ2F0YmVycnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICogQHJldHVybnMge01vZHVsZUFwaVByb3ZpZGVyQmFzZX0gVGhpcyBvYmplY3QgZm9yIGNoYWluaW5nLlxuICovXG5Nb2R1bGVBcGlQcm92aWRlckJhc2UucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0dGhpcy5fZXZlbnRCdXMub24oZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXMgb24gdGhlIHNwZWNpZmllZCBldmVudCBpbiBDYXRiZXJyeSB0byBoYW5kbGUgb25jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXIuXG4gKiBAcmV0dXJucyB7TW9kdWxlQXBpUHJvdmlkZXJCYXNlfSBUaGlzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyQmFzZS5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0Y2hlY2tFdmVudE5hbWVBbmRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cdHRoaXMuX2V2ZW50QnVzLm9uY2UoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBoYW5kbGVyIGZyb20gdGhlIHNwZWNpZmllZCBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXIuXG4gKiBAcmV0dXJucyB7TW9kdWxlQXBpUHJvdmlkZXJCYXNlfSBUaGlzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG4gKi9cbk1vZHVsZUFwaVByb3ZpZGVyQmFzZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHR0aGlzLl9ldmVudEJ1cy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGFuZGxlcnMgZnJvbSB0aGUgc3BlY2lmaWVkIGV2ZW50IGluIENhdGJlcnJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEByZXR1cm5zIHtNb2R1bGVBcGlQcm92aWRlckJhc2V9IFRoaXMgb2JqZWN0IGZvciBjaGFpbmluZy5cbiAqL1xuTW9kdWxlQXBpUHJvdmlkZXJCYXNlLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cdGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGR1bW15KTtcblx0dGhpcy5fZXZlbnRCdXMucmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50TmFtZSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgZXZlbnQgbmFtZSBpcyBhIHN0cmluZyBhbmQgaGFuZGxlciBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0geyp9IGhhbmRsZXIgVGhlIGV2ZW50IGhhbmRsZXIgdG8gY2hlY2suXG4gKi9cbmZ1bmN0aW9uIGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKHR5cGVvZiAoZXZlbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoRVJST1JfRVZFTlRfTkFNRSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIChoYW5kbGVyKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihFUlJPUl9FVkVOVF9IQU5ETEVSKTtcblx0fVxufVxuXG4vKipcbiAqIERvZXMgbm90aGluZy4gSXQgaXMgdXNlZCBhcyBhIGRlZmF1bHQgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGR1bW15KCkge31cbiIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxudmFyIFRJVExFID0gJ0NhdGJlcnJ5QDcuMS4yICgnICtcblx0XHQnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9pc3N1ZXNcIiAnICtcblx0XHQndGFyZ2V0PVwiX2JsYW5rXCI+JyArXG5cdFx0J3JlcG9ydCBhbiBpc3N1ZScgK1xuXHRcdCc8L2E+JyArXG5cdFx0JyknLFxuXHRBTVAgPSAvJi9nLFxuXHRMVCA9IC88L2csXG5cdEdUID0gLz4vZyxcblx0UVVPVCA9IC9cXFwiL2csXG5cdFNJTkdMRV9RVU9UID0gL1xcJy9nLFxuXHRFUlJPUl9NRVNTQUdFX1JFR0VYUCA9IC9eKD86W1xcdyRdKyk6ICg/Oi4rKVxccj9cXG4vaSxcblx0RVJST1JfTUVTU0FHRV9GT1JNQVQgPSAnPHNwYW4gJyArXG5cdFx0J3N0eWxlPVwiY29sb3I6IHJlZDsgZm9udC1zaXplOiAxNnB0OyBmb250LXdlaWdodDogYm9sZDtcIj4nICtcblx0XHQnJXMlcycgK1xuXHRcdCc8L3NwYW4+Jyxcblx0TkVXX0xJTkUgPSAvXFxyP1xcbi9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIFByaW50cyBlcnJvciB3aXRoIHByZXR0eSBmb3JtYXR0aW5nLlxuXHQgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBFcnJvciB0byBwcmludC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCBVc2VyIGFnZW50IGluZm9ybWF0aW9uLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MIHdpdGggYWxsIGluZm9ybWF0aW9uIGFib3V0IGVycm9yLlxuXHQgKi9cblx0cHJldHR5UHJpbnQ6IGZ1bmN0aW9uIChlcnJvciwgdXNlckFnZW50KSB7XG5cdFx0aWYgKCFlcnJvciB8fCB0eXBlb2YgKGVycm9yKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0dmFyIGRhdGVTdHJpbmcgPSAobmV3IERhdGUoKSkudG9VVENTdHJpbmcoKSArICc7PGJyLz4nLFxuXHRcdFx0dXNlckFnZW50U3RyaW5nID0gKHVzZXJBZ2VudCA/ICh1c2VyQWdlbnQgKyAnOzxici8+JykgOiAnJyksXG5cdFx0XHRuYW1lID0gKHR5cGVvZiAoZXJyb3IubmFtZSkgPT09ICdzdHJpbmcnID8gZXJyb3IubmFtZSArICc6ICcgOiAnJyksXG5cdFx0XHRtZXNzYWdlID0gU3RyaW5nKGVycm9yLm1lc3NhZ2UgfHwgJycpLFxuXHRcdFx0c3RhY2sgPSBTdHJpbmcoZXJyb3Iuc3RhY2sgfHwgJycpLnJlcGxhY2UoRVJST1JfTUVTU0FHRV9SRUdFWFAsICcnKSxcblx0XHRcdGZ1bGxNZXNzYWdlID0gdXRpbC5mb3JtYXQoXG5cdFx0XHRcdEVSUk9SX01FU1NBR0VfRk9STUFULCBlc2NhcGUobmFtZSksIGVzY2FwZShtZXNzYWdlKVxuXHRcdFx0KTtcblxuXHRcdHJldHVybiAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDEycHQ7XCI+JyArXG5cdFx0XHRkYXRlU3RyaW5nICtcblx0XHRcdHVzZXJBZ2VudFN0cmluZyArXG5cdFx0XHRUSVRMRSArICc8YnIvPjxici8+JyArXG5cdFx0XHRmdWxsTWVzc2FnZSArICc8YnIvPjxici8+JyArXG5cdFx0XHRlc2NhcGUoc3RhY2spICtcblx0XHRcdCc8L2Rpdj4nO1xuXHR9XG59O1xuXG4vKipcbiAqIEVzY2FwZXMgZXJyb3IgdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBFcnJvciB0ZXh0LlxuICogQHJldHVybnMge3N0cmluZ30gZXNjYXBlZCBhbmQgZm9ybWF0dGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZVxuXHRcdC5yZXBsYWNlKEFNUCwgJyZhbXA7Jylcblx0XHQucmVwbGFjZShMVCwgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKEdULCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoUVVPVCwgJyZxdW90OycpXG5cdFx0LnJlcGxhY2UoU0lOR0xFX1FVT1QsICcmIzM5OycpXG5cdFx0LnJlcGxhY2UoTkVXX0xJTkUsICc8YnIvPicpO1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGVscGVyID0ge1xuXHRDT01QT05FTlRfUFJFRklYOiAnY2F0LScsXG5cdENPTVBPTkVOVF9QUkVGSVhfUkVHRVhQOiAvXmNhdC0vaSxcblx0Q09NUE9ORU5UX0VSUk9SX1RFTVBMQVRFX1BPU1RGSVg6ICctLWVycm9yJyxcblx0RE9DVU1FTlRfQ09NUE9ORU5UX05BTUU6ICdkb2N1bWVudCcsXG5cdERPQ1VNRU5UX0VMRU1FTlRfTkFNRTogJ2h0bWwnLFxuXHRIRUFEX0NPTVBPTkVOVF9OQU1FOiAnaGVhZCcsXG5cdEFUVFJJQlVURV9JRDogJ2lkJyxcblx0QVRUUklCVVRFX1NUT1JFOiAnY2F0LXN0b3JlJyxcblx0REVGQVVMVF9MT0dJQ19GSUxFTkFNRTogJ2luZGV4LmpzJyxcblxuXHQvKipcblx0ICogQ3JlYXRlcyBuYW1lIGZvciBlcnJvciB0ZW1wbGF0ZSBvZiBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIG5hbWUgb2YgY29tcG9uZW50LlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBOYW1lIG9mIGVycm9yIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqL1xuXHRnZXROYW1lRm9yRXJyb3JUZW1wbGF0ZTogZnVuY3Rpb24gKGNvbXBvbmVudE5hbWUpIHtcblx0XHRpZiAodHlwZW9mIChjb21wb25lbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGNvbXBvbmVudE5hbWUgKyBoZWxwZXIuQ09NUE9ORU5UX0VSUk9SX1RFTVBMQVRFX1BPU1RGSVg7XG5cdH0sXG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgc3BlY2lmaWVkIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBcImRvY3VtZW50XCIgY29tcG9uZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3BlY2lmaWVkIGNvbXBvbmVudCBpcyB0aGUgXCJkb2N1bWVudFwiIGNvbXBvbmVudC5cblx0ICovXG5cdGlzRG9jdW1lbnRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnROYW1lKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaGVscGVyLkRPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FO1xuXHR9LFxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyBpZiBzcGVjaWZpZWQgY29tcG9uZW50IG5hbWUgaXMgdGhlIFwiaGVhZFwiIGNvbXBvbmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHNwZWNpZmllZCBjb21wb25lbnQgaXMgdGhlIFwiaGVhZFwiIGNvbXBvbmVudC5cblx0ICovXG5cdGlzSGVhZENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudE5hbWUpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSBoZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyB0aGUgb3JpZ2luYWwgY29tcG9uZW50IG5hbWUgd2l0aG91dCBwcmVmaXguXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmdWxsQ29tcG9uZW50TmFtZSBGdWxsIGNvbXBvbmVudCBuYW1lICh0YWcgbmFtZSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBvcmlnaW5hbCBjb21wb25lbnQgbmFtZSB3aXRob3V0IHByZWZpeC5cblx0ICovXG5cdGdldE9yaWdpbmFsQ29tcG9uZW50TmFtZTogZnVuY3Rpb24gKGZ1bGxDb21wb25lbnROYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiAoZnVsbENvbXBvbmVudE5hbWUpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRmdWxsQ29tcG9uZW50TmFtZSA9IGZ1bGxDb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKGZ1bGxDb21wb25lbnROYW1lID09PSBoZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSkge1xuXHRcdFx0cmV0dXJuIGZ1bGxDb21wb25lbnROYW1lO1xuXHRcdH1cblx0XHRpZiAoZnVsbENvbXBvbmVudE5hbWUgPT09IGhlbHBlci5ET0NVTUVOVF9DT01QT05FTlRfTkFNRSB8fFxuXHRcdFx0ZnVsbENvbXBvbmVudE5hbWUgPT09IGhlbHBlci5ET0NVTUVOVF9FTEVNRU5UX05BTUUpIHtcblx0XHRcdHJldHVybiBoZWxwZXIuRE9DVU1FTlRfQ09NUE9ORU5UX05BTUU7XG5cdFx0fVxuXHRcdHJldHVybiBmdWxsQ29tcG9uZW50TmFtZS5yZXBsYWNlKGhlbHBlci5DT01QT05FTlRfUFJFRklYX1JFR0VYUCwgJycpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIHZhbGlkIHRhZyBuYW1lIGZvciBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gTmFtZSBvZiB0aGUgdGFnLlxuXHQgKi9cblx0Z2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWU6IGZ1bmN0aW9uIChjb21wb25lbnROYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiAoY29tcG9uZW50TmFtZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHZhciB1cHBlckNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCk7XG5cdFx0aWYgKGNvbXBvbmVudE5hbWUgPT09IGhlbHBlci5IRUFEX0NPTVBPTkVOVF9OQU1FKSB7XG5cdFx0XHRyZXR1cm4gdXBwZXJDb21wb25lbnROYW1lO1xuXHRcdH1cblx0XHRpZiAoY29tcG9uZW50TmFtZSA9PT0gaGVscGVyLkRPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FKSB7XG5cdFx0XHRyZXR1cm4gaGVscGVyLkRPQ1VNRU5UX0VMRU1FTlRfTkFNRS50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaGVscGVyLkNPTVBPTkVOVF9QUkVGSVgudG9VcHBlckNhc2UoKSArIHVwcGVyQ29tcG9uZW50TmFtZTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyBtZXRob2Qgb2YgdGhlIG1vZHVsZSB0aGF0IGNhbiBiZSBpbnZva2VkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIE1vZHVsZSBpbXBsZW1lbnRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCBNZXRob2QgcHJlZml4IChpLmUuIGhhbmRsZSkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nP30gbmFtZSBOYW1lIG9mIHRoZSBlbnRpdHkgdG8gaW52b2tlIG1ldGhvZCBmb3Jcblx0ICogKHdpbGwgYmUgY29udmVydGVkIHRvIGNhbWVsIGNhc2luZykuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gTWV0aG9kIHRvIGludm9rZS5cblx0ICovXG5cdGdldE1ldGhvZFRvSW52b2tlOiBmdW5jdGlvbiAobW9kdWxlLCBwcmVmaXgsIG5hbWUpIHtcblx0XHRpZiAoIW1vZHVsZSB8fCB0eXBlb2YgKG1vZHVsZSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdFByb21pc2VNZXRob2Q7XG5cdFx0fVxuXHRcdHZhciBtZXRob2ROYW1lID0gaGVscGVyLmdldENhbWVsQ2FzZU5hbWUocHJlZml4LCBuYW1lKTtcblx0XHRpZiAodHlwZW9mIChtb2R1bGVbbWV0aG9kTmFtZV0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbW9kdWxlW21ldGhvZE5hbWVdLmJpbmQobW9kdWxlKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAobW9kdWxlW3ByZWZpeF0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbW9kdWxlW3ByZWZpeF0uYmluZChtb2R1bGUsIG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWZhdWx0UHJvbWlzZU1ldGhvZDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyBuYW1lIGluIGNhbWVsIGNhc2luZyBmb3IgZXZlcnl0aGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCBQcmVmaXggZm9yIHRoZSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIHRvIGNvbnZlcnQuXG5cdCAqL1xuXHRnZXRDYW1lbENhc2VOYW1lOiBmdW5jdGlvbiAocHJlZml4LCBuYW1lKSB7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoL1teYS16MC05XS9pKSxcblx0XHRcdGNhbWVsQ2FzZU5hbWUgPSBTdHJpbmcocHJlZml4IHx8ICcnKTtcblxuXHRcdHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQpIHtcblx0XHRcdGlmICghcGFydCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZpcnN0IGNoYXJhY3RlciBpbiBtZXRob2QgbmFtZSBtdXN0IGJlIGluIGxvd2VyY2FzZVxuXHRcdFx0Y2FtZWxDYXNlTmFtZSArPSBjYW1lbENhc2VOYW1lID9cblx0XHRcdFx0cGFydFswXS50b1VwcGVyQ2FzZSgpIDpcblx0XHRcdFx0cGFydFswXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y2FtZWxDYXNlTmFtZSArPSBwYXJ0LnN1YnN0cmluZygxKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjYW1lbENhc2VOYW1lO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIHNhZmUgcHJvbWlzZSByZXNvbHZlZCBmcm9tIGFjdGlvbi5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byB3cmFwIHdpdGggc2FmZSBwcm9taXNlLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3IgZG9uZSBhY3Rpb24uXG5cdCAqL1xuXHRnZXRTYWZlUHJvbWlzZTogZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdHZhciByZXN1bHQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGFjdGlvbigpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcjtcblxuLyoqXG4gKiBKdXN0IHJldHVybnMgcmVzb2x2ZWQgcHJvbWlzZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5mdW5jdGlvbiBkZWZhdWx0UHJvbWlzZU1ldGhvZCgpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIERlZmluZXMgcmVhZC1vbmx5IHByb3BlcnR5LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IE9iamVjdCB0byBkZWZpbmUgcHJvcGVydHkgaW4uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHByb3BlcnR5LlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFByb3BlcnR5IHZhbHVlLlxuXHQgKi9cblx0ZGVmaW5lUmVhZE9ubHk6IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSk7XG5cdH1cbn07IiwiLypcbiAqIGNhdGJlcnJ5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IERlbmlzIFJlY2hrdW5vdiBhbmQgcHJvamVjdCBjb250cmlidXRvcnMuXG4gKlxuICogY2F0YmVycnkncyBsaWNlbnNlIGZvbGxvd3M6XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICogVGhpcyBsaWNlbnNlIGFwcGxpZXMgdG8gYWxsIHBhcnRzIG9mIGNhdGJlcnJ5IHRoYXQgYXJlIG5vdCBleHRlcm5hbGx5XG4gKiBtYWludGFpbmVkIGxpYnJhcmllcy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpLFxuXHRVUkkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKS5VUkk7XG5cbnZhciBVUklfUEFUSF9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSA9ICcoW15cXFxcL1xcXFxcXFxcXSopJyxcblx0VVJJX1FVRVJZX1JFUExBQ0VNRU5UX1JFR19FWFBfU09VUkNFID0gJyhbXiY/PV0qKSc7XG5cbnZhciBQQVRIX0VORF9TTEFTSF9SRUdfRVhQID0gLyguKylcXC8oJHxcXD98IykvLFxuXHRFWFBSRVNTSU9OX0VTQ0FQRV9SRUdfRVhQID0gL1tcXC1cXFtcXF1cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLFxuXHRJREVOVElGSUVSX1JFR19FWFBfU09VUkNFID0gJ1skQS1aX11bXFxcXGRBLVpfJF0qJyxcblx0U1RPUkVfTElTVF9SRUdfRVhQX1NPVVJDRSA9ICcoPzooPzpcXFxcXFxcXFtbIF0qJyArXG5cdFx0J1teXFxcXFtcXFxcXSxdKycgK1xuXHRcdCcoWyBdKixbIF0qJyArXG5cdFx0J1teXFxcXFtcXFxcXSxdKycgK1xuXHRcdCcpKlsgXSpcXFxcXFxcXF0pfCg/OlxcXFxcXFxcW1sgXSpcXFxcXFxcXF0pKT8nLFxuXHRQQVJBTUVURVJfUkVHX0VYUCA9IG5ldyBSZWdFeHAoXG5cdFx0XHQnOicgK1xuXHRcdFx0SURFTlRJRklFUl9SRUdfRVhQX1NPVVJDRSArXG5cdFx0XHRTVE9SRV9MSVNUX1JFR19FWFBfU09VUkNFLCAnZ2knKSxcblx0U0xBU0hFRF9CUkFDS0VUU19SRUdfRVhQID0gL1xcXFxcXFt8XFxcXFxcXS8sXG5cdFNUT1JFX0xJU1RfU0VQQVJBVE9SID0gJywnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIFJlbW92ZXMgc2xhc2ggZnJvbSB0aGUgZW5kIG9mIFVSSSBwYXRoLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJpUGF0aCBVUkkgcGF0aCB0byBwcm9jZXNzLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBVUkkgd2l0aG91dCBlbmQgc2xhc2guXG5cdCAqL1xuXHRyZW1vdmVFbmRTbGFzaDogZnVuY3Rpb24gKHVyaVBhdGgpIHtcblx0XHRpZiAoIXVyaVBhdGggfHwgdHlwZW9mICh1cmlQYXRoKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0aWYgKHVyaVBhdGggPT09ICcvJykge1xuXHRcdFx0cmV0dXJuIHVyaVBhdGg7XG5cdFx0fVxuXHRcdHJldHVybiB1cmlQYXRoLnJlcGxhY2UoUEFUSF9FTkRfU0xBU0hfUkVHX0VYUCwgJyQxJDInKTtcblx0fSxcblx0LyoqXG5cdCAqIEdldHMgVVJJIG1hcHBlciBmcm9tIHRoZSByb3V0ZSBleHByZXNzaW9uIGxpa2Vcblx0ICogL3NvbWUvOmlkW3N0b3JlMSwgc3RvcmUyLCBzdG9yZTNdL2RldGFpbHM/ZmlsdGVyPTpmaWx0ZXJbc3RvcmUzXS5cblx0ICogQHBhcmFtIHtVUkl9IHJvdXRlVXJpIEV4cHJlc3Npb24gdGhhdCBkZWZpbmVzIHJvdXRlLlxuXHQgKiBAcmV0dXJucyB7e2V4cHJlc3Npb246IFJlZ0V4cCwgbWFwOiBGdW5jdGlvbn0/fSBVUkkgbWFwcGVyIG9iamVjdC5cblx0ICogVVJJIG1hcHBlciBvYmplY3QuXG5cdCAqL1xuXHRjb21waWxlUm91dGU6IGZ1bmN0aW9uIChyb3V0ZVVyaSkge1xuXHRcdGlmICghcm91dGVVcmkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIGVzY2FwZSByZWd1bGFyIGV4cHJlc3Npb24gY2hhcmFjdGVyc1xuXHRcdHZhciBlc2NhcGVkID0gcm91dGVVcmkucGF0aC5yZXBsYWNlKFxuXHRcdFx0RVhQUkVTU0lPTl9FU0NBUEVfUkVHX0VYUCwgJ1xcXFwkJidcblx0XHQpO1xuXG5cdFx0Ly8gZ2V0IGFsbCBvY2N1cnJlbmNlcyBvZiByb3V0aW5nIHBhcmFtZXRlcnMgaW4gVVJJIHBhdGhcblx0XHR2YXIgcmVnRXhwU291cmNlID0gJ14nICsgZXNjYXBlZC5yZXBsYWNlKFxuXHRcdFx0XHRcdFBBUkFNRVRFUl9SRUdfRVhQLFxuXHRcdFx0XHRcdFVSSV9QQVRIX1JFUExBQ0VNRU5UX1JFR19FWFBfU09VUkNFKSArICckJyxcblx0XHRcdGV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHJlZ0V4cFNvdXJjZSwgJ2knKSxcblx0XHRcdHF1ZXJ5TWFwcGVyLFxuXHRcdFx0cGF0aE1hcHBlcixcblx0XHRcdHBhdGhQYXJhbWV0ZXJNYXRjaGVzID0gZXNjYXBlZC5tYXRjaChcblx0XHRcdFx0UEFSQU1FVEVSX1JFR19FWFBcblx0XHRcdCksXG5cdFx0XHRwYXRoUGFyYW1ldGVycyA9IHBhdGhQYXJhbWV0ZXJNYXRjaGVzID9cblx0XHRcdFx0cGF0aFBhcmFtZXRlck1hdGNoZXMubWFwKGdldFBhcmFtZXRlckRlc2NyaXB0b3IpIDogbnVsbDtcblxuXHRcdGlmIChwYXRoUGFyYW1ldGVycykge1xuXHRcdFx0cGF0aE1hcHBlciA9IGNyZWF0ZVVyaVBhdGhNYXBwZXIoZXhwcmVzc2lvbiwgcGF0aFBhcmFtZXRlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChyb3V0ZVVyaS5xdWVyeSkge1xuXHRcdFx0dmFyIHF1ZXJ5UGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRPYmplY3Qua2V5cyhyb3V0ZVVyaS5xdWVyeS52YWx1ZXMpXG5cdFx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRcdFx0Ly8gYXJyYXlzIGluIHJvdXRpbmcgZGVmaW5pdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRcdFx0XHRpZiAodXRpbC5pc0FycmF5KHJvdXRlVXJpLnF1ZXJ5LnZhbHVlc1tuYW1lXSkpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBlc2NhcGUgcmVndWxhciBleHByZXNzaW9uIGNoYXJhY3RlcnNcblx0XHRcdFx0XHR2YXIgZXNjYXBlZCA9IHJvdXRlVXJpLnF1ZXJ5LnZhbHVlc1tuYW1lXS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0RVhQUkVTU0lPTl9FU0NBUEVfUkVHX0VYUCwgJ1xcXFwkJidcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0Ly8gZ2V0IGFsbCBvY2N1cnJlbmNlcyBvZiByb3V0aW5nIHBhcmFtZXRlcnMgaW4gVVJJIHBhdGhcblx0XHRcdFx0XHR2YXIgcmVnRXhwU291cmNlID0gJ14nICsgZXNjYXBlZC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRQQVJBTUVURVJfUkVHX0VYUCxcblx0XHRcdFx0XHRcdFx0VVJJX1FVRVJZX1JFUExBQ0VNRU5UX1JFR19FWFBfU09VUkNFKSArICckJztcblx0XHRcdFx0XHR2YXIgcXVlcnlQYXJhbWV0ZXJNYXRjaGVzID0gZXNjYXBlZC5tYXRjaChcblx0XHRcdFx0XHRcdFx0UEFSQU1FVEVSX1JFR19FWFBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKCFxdWVyeVBhcmFtZXRlck1hdGNoZXMgfHxcblx0XHRcdFx0XHRcdHF1ZXJ5UGFyYW1ldGVyTWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgcGFyYW1ldGVyID0gZ2V0UGFyYW1ldGVyRGVzY3JpcHRvcihcblx0XHRcdFx0XHRcdHF1ZXJ5UGFyYW1ldGVyTWF0Y2hlc1txdWVyeVBhcmFtZXRlck1hdGNoZXMubGVuZ3RoIC0gMV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHZhciBleHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdFeHBTb3VyY2UsICdpJyk7XG5cdFx0XHRcdFx0cGFyYW1ldGVyLm1hcCA9IGNyZWF0ZVVyaVF1ZXJ5VmFsdWVNYXBwZXIoZXhwcmVzc2lvbik7XG5cdFx0XHRcdFx0cXVlcnlQYXJhbWV0ZXJzW25hbWVdID0gcGFyYW1ldGVyO1xuXHRcdFx0XHR9KTtcblx0XHRcdHF1ZXJ5TWFwcGVyID0gY3JlYXRlVXJpUXVlcnlNYXBwZXIocXVlcnlQYXJhbWV0ZXJzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZXhwcmVzc2lvbjogZXhwcmVzc2lvbixcblx0XHRcdG1hcDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdFx0XHR2YXIgc3RhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0XHRpZiAocGF0aE1hcHBlcikge1xuXHRcdFx0XHRcdHBhdGhNYXBwZXIodXJpLnBhdGgsIHN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChxdWVyeU1hcHBlciAmJiB1cmkucXVlcnkpIHtcblx0XHRcdFx0XHRxdWVyeU1hcHBlcih1cmkucXVlcnkudmFsdWVzLCBzdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBVUkkgcGF0aC10by1zdGF0ZSBvYmplY3QgbWFwcGVyLlxuICogQHBhcmFtIHtSZWdFeHB9IGV4cHJlc3Npb24gUmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIFVSSSBwYXRoLlxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1ldGVycyBMaXN0IG9mIHBhcmFtZXRlciBkZXNjcmlwdG9ycy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVVJJIG1hcHBlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVXJpUGF0aE1hcHBlcihleHByZXNzaW9uLCBwYXJhbWV0ZXJzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAodXJpUGF0aCwgc3RhdGUpIHtcblx0XHR2YXIgbWF0Y2hlcyA9IHVyaVBhdGgubWF0Y2goZXhwcmVzc2lvbik7XG5cdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgMikge1xuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdH1cblxuXHRcdC8vIHN0YXJ0IHdpdGggc2Vjb25kIG1hdGNoIGJlY2F1c2UgZmlyc3QgbWF0Y2ggaXMgYWx3YXlzXG5cdFx0Ly8gdGhlIHdob2xlIFVSSSBwYXRoXG5cdFx0bWF0Y2hlcyA9IG1hdGNoZXMuc3BsaWNlKDEpO1xuXG5cdFx0cGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbWV0ZXIsIGluZGV4KSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBtYXRjaGVzW2luZGV4XTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdFx0fVxuXHRcdFx0cGFyYW1ldGVyLnN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRcdGlmICghc3RhdGVbc3RvcmVOYW1lXSkge1xuXHRcdFx0XHRcdHN0YXRlW3N0b3JlTmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXRlW3N0b3JlTmFtZV1bcGFyYW1ldGVyLm5hbWVdID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBVUkkgcXVlcnktdG8tc3RhdGUgb2JqZWN0IG1hcHBlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIExpc3Qgb2YgcG9zc2libGUgcXVlcnkgcGFyYW1ldGVyIGRlc2NyaXB0b3JzIGJ5XG4gKiBxdWVyeSBwYXJhbWV0ZXIgbmFtZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFVSSSBtYXBwZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVyaVF1ZXJ5TWFwcGVyKHBhcmFtZXRlcnMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChxdWVyeVZhbHVlcywgc3RhdGUpIHtcblx0XHRxdWVyeVZhbHVlcyA9IHF1ZXJ5VmFsdWVzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRPYmplY3Qua2V5cyhxdWVyeVZhbHVlcylcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeUtleSkge1xuXHRcdFx0XHR2YXIgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1txdWVyeUtleV07XG5cdFx0XHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZhbHVlID0gdXRpbC5pc0FycmF5KHF1ZXJ5VmFsdWVzW3F1ZXJ5S2V5XSkgP1xuXHRcdFx0XHRcdFx0cXVlcnlWYWx1ZXNbcXVlcnlLZXldXG5cdFx0XHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyLm1hcClcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgIT09IG51bGw7XG5cdFx0XHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRcdHBhcmFtZXRlci5tYXAocXVlcnlWYWx1ZXNbcXVlcnlLZXldKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1ldGVyLnN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRcdFx0aWYgKCFzdGF0ZVtzdG9yZU5hbWVdKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZVtzdG9yZU5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RhdGVbc3RvcmVOYW1lXVtwYXJhbWV0ZXIubmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fTtcbn1cblxuLyoqXG4gKiBNYXBzIHF1ZXJ5IHBhcmFtZXRlciB2YWx1ZSB1c2luZyB0aGUgcGFyYW1ldGVycyBleHByZXNzaW9uLlxuICogQHBhcmFtIHtSZWdFeHB9IGV4cHJlc3Npb24gUmVndWxhciBleHByZXNzaW9uIHRvIGdldCBwYXJhbWV0ZXIgdmFsdWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFVSSSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyIHZhbHVlIG1hcHBlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVXJpUXVlcnlWYWx1ZU1hcHBlcihleHByZXNzaW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR2YWx1ZSA9IHZhbHVlXG5cdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0Ly8gd2UgaGF2ZSB0byB0ZW1wb3JhcnkgZW5jb2RlIHRoZXNlIGNoYXJhY3RlcnMgZm9yIG5vdCBicmVha2luZ1xuXHRcdFx0Ly8gZXhwcmVzc2lvbiBwYXJzaW5nLCBiZWNhdXNlIGl0J3MgdGVybWluYXRlZCBieSBxdWVyeSBzZXBhcmF0b3Jcblx0XHRcdC5yZXBsYWNlKC89L2csICclM0QnKVxuXHRcdFx0LnJlcGxhY2UoL1xcPy9nLCAnJTNGJylcblx0XHRcdC5yZXBsYWNlKC8mL2csICclMjYnKTtcblx0XHR2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGV4cHJlc3Npb24pO1xuXHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlIHZhbHVlIGlzIHRoZSBzZWNvbmQgaXRlbSwgdGhlIGZpcnN0IGlzIGEgd2hvbGUgc3RyaW5nXG5cdFx0dmFyIG1hcHBlZFZhbHVlID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuXHRcdHRyeSB7XG5cdFx0XHRtYXBwZWRWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXBwZWRWYWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXBwZWRWYWx1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBHZXRzIGRlc2NyaXB0aW9uIG9mIHBhcmFtZXRlcnMgZnJvbSBpdHMgZXhwcmVzc2lvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbWV0ZXIgUGFyYW1ldGVyIGV4cHJlc3Npb24uXG4gKiBAcmV0dXJucyB7e25hbWU6IHN0cmluZywgc3RvcmVOYW1lczogQXJyYXl9fSBQYXJhbWV0ZXIgZGVzY3JpcHRvci5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1ldGVyRGVzY3JpcHRvcihwYXJhbWV0ZXIpIHtcblx0dmFyIHBhcnRzID0gcGFyYW1ldGVyLnNwbGl0KFNMQVNIRURfQlJBQ0tFVFNfUkVHX0VYUCk7XG5cblx0cmV0dXJuIHtcblx0XHRuYW1lOiBwYXJ0c1swXVxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnN1YnN0cmluZygxKSxcblx0XHRzdG9yZU5hbWVzOiAocGFydHNbMV0gPyBwYXJ0c1sxXSA6ICcnKVxuXHRcdFx0LnNwbGl0KFNUT1JFX0xJU1RfU0VQQVJBVE9SKVxuXHRcdFx0Lm1hcChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRcdHJldHVybiBzdG9yZU5hbWUudHJpbSgpO1xuXHRcdFx0fSlcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gc3RvcmVOYW1lLmxlbmd0aCA+IDA7XG5cdFx0XHR9KVxuXHR9O1xufSIsIi8qXG4gKiBjYXRiZXJyeVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBEZW5pcyBSZWNoa3Vub3YgYW5kIHByb2plY3QgY29udHJpYnV0b3JzLlxuICpcbiAqIGNhdGJlcnJ5J3MgbGljZW5zZSBmb2xsb3dzOlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbiAqIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcbiAqIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqIFRoaXMgbGljZW5zZSBhcHBsaWVzIHRvIGFsbCBwYXJ0cyBvZiBjYXRiZXJyeSB0aGF0IGFyZSBub3QgZXh0ZXJuYWxseVxuICogbWFpbnRhaW5lZCBsaWJyYXJpZXMuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlUHJvdmlkZXI7XG5cbnZhciByb3V0ZUhlbHBlciA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9yb3V0ZUhlbHBlcicpLFxuXHRjYXRiZXJyeVVyaSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LXVyaScpLFxuXHRVUkkgPSBjYXRiZXJyeVVyaS5VUkk7XG5cbi8qKlxuICogQ3JlYXRlIG5ldyBpbnN0YW5jZSBvZiB0aGUgc3RhdGUgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSAkc2VydmljZUxvY2F0b3IgU2VydmljZSBsb2NhdG9yXG4gKiB0byByZXNvbHZlIFVSSSBtYXBwZXJzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFN0YXRlUHJvdmlkZXIoJHNlcnZpY2VMb2NhdG9yKSB7XG5cdHRoaXMuX3VyaU1hcHBlcnMgPSBnZXRVcmlNYXBwZXJzKCRzZXJ2aWNlTG9jYXRvcik7XG59XG5cbi8qKlxuICogQ3VycmVudCBsaXN0IG9mIFVSSSBtYXBwZXJzLlxuICogQHR5cGUge0FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuU3RhdGVQcm92aWRlci5wcm90b3R5cGUuX3VyaU1hcHBlcnMgPSBudWxsO1xuXG4vKipcbiAqIEdldHMgc3RhdGUgYnkgc3BlY2lmaWVkIGxvY2F0aW9uIFVSSS5cbiAqIEBwYXJhbSB7VVJJfSBsb2NhdGlvbiBVUkkgbG9jYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0P30gU3RhdGUgb2JqZWN0LlxuICovXG5TdGF0ZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0ZUJ5VXJpID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG5cdGlmICh0aGlzLl91cmlNYXBwZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bG9jYXRpb24gPSBsb2NhdGlvbi5jbG9uZSgpO1xuXG5cdGxvY2F0aW9uLnBhdGggPSByb3V0ZUhlbHBlci5yZW1vdmVFbmRTbGFzaChsb2NhdGlvbi5wYXRoKTtcblx0dmFyIHN0YXRlID0gZ2V0U3RhdGUodGhpcy5fdXJpTWFwcGVycywgbG9jYXRpb24pO1xuXG5cdGlmICghc3RhdGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIG1ha2Ugc3RhdGUgb2JqZWN0IGltbXV0YWJsZVxuXHRPYmplY3Qua2V5cyhzdGF0ZSlcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG5cdFx0XHRPYmplY3QuZnJlZXplKHN0YXRlW3N0b3JlTmFtZV0pO1xuXHRcdH0pO1xuXHRPYmplY3QuZnJlZXplKHN0YXRlKTtcblxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIEdldHMgbGlzdCBvZiBVUkkgbWFwcGVycy5cbiAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IHNlcnZpY2VMb2NhdG9yIFNlcnZpY2UgbG9jYXRvciB0byBnZXQgcm91dGVcbiAqIGRlZmluaXRpb25zLlxuICogQHJldHVybnMge0FycmF5fSBMaXN0IG9mIFVSSSBtYXBwZXJzLlxuICovXG5mdW5jdGlvbiBnZXRVcmlNYXBwZXJzKHNlcnZpY2VMb2NhdG9yKSB7XG5cdHZhciB1cmlNYXBwZXJzID0gW107XG5cblx0c2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgncm91dGVEZWZpbml0aW9uJylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcblx0XHRcdC8vIGp1c3QgY29sb24tcGFyYW1ldHJpemVkIHN0cmluZ1xuXHRcdFx0aWYgKHR5cGVvZiAocm91dGUpID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR2YXIgcm91dGVVcmkgPSBuZXcgVVJJKHJvdXRlKTtcblx0XHRcdFx0cm91dGVVcmkucGF0aCA9IHJvdXRlSGVscGVyLnJlbW92ZUVuZFNsYXNoKHJvdXRlVXJpLnBhdGgpO1xuXHRcdFx0XHR1cmlNYXBwZXJzLnB1c2gocm91dGVIZWxwZXIuY29tcGlsZVJvdXRlKHJvdXRlVXJpKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZXh0ZW5kZWQgY29sb24tcGFyYW1ldHJpemVkIG1hcHBlclxuXHRcdFx0aWYgKHR5cGVvZiAocm91dGUpID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHQodHlwZW9mIChyb3V0ZS5leHByZXNzaW9uKSA9PT0gJ3N0cmluZycpICYmXG5cdFx0XHRcdChyb3V0ZS5tYXAgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcblx0XHRcdFx0dmFyIG1hcHBlclVyaSA9IG5ldyBVUkkocm91dGUuZXhwcmVzc2lvbik7XG5cdFx0XHRcdG1hcHBlclVyaS5wYXRoID0gcm91dGVIZWxwZXIucmVtb3ZlRW5kU2xhc2gobWFwcGVyVXJpLnBhdGgpO1xuXHRcdFx0XHR2YXIgbWFwcGVyID0gcm91dGVIZWxwZXIuY29tcGlsZVJvdXRlKG1hcHBlclVyaSk7XG5cdFx0XHRcdHVyaU1hcHBlcnMucHVzaCh7XG5cdFx0XHRcdFx0ZXhwcmVzc2lvbjogbWFwcGVyLmV4cHJlc3Npb24sXG5cdFx0XHRcdFx0bWFwOiBmdW5jdGlvbiAodXJpKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3RhdGUgPSBtYXBwZXIubWFwKHVyaSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcm91dGUubWFwKHN0YXRlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXBwZXJcblx0XHRcdGlmICh0eXBlb2YgKHJvdXRlKSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0KHJvdXRlLmV4cHJlc3Npb24gaW5zdGFuY2VvZiBSZWdFeHApICYmXG5cdFx0XHRcdChyb3V0ZS5tYXAgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcblx0XHRcdFx0dXJpTWFwcGVycy5wdXNoKHJvdXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0cmV0dXJuIHVyaU1hcHBlcnM7XG59XG5cbi8qKlxuICogR2V0cyBzdGF0ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHVyaU1hcHBlcnMgTGlzdCBvZiBVUkkgbWFwcGVycy5cbiAqIEBwYXJhbSB7VVJJfSBsb2NhdGlvbiBVUkkgdGhhdCBkZXNjcmliZXMgdGhlIHN0YXRlLlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBUaGUgc3RhdGUgZnJvbSBVUkkuXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlKHVyaU1hcHBlcnMsIGxvY2F0aW9uKSB7XG5cdHZhciBzdGF0ZSA9IG51bGw7XG5cblx0dXJpTWFwcGVycy5zb21lKGZ1bmN0aW9uIChtYXBwZXIpIHtcblx0XHRpZiAobWFwcGVyLmV4cHJlc3Npb24udGVzdChsb2NhdGlvbi5wYXRoKSkge1xuXHRcdFx0c3RhdGUgPSBtYXBwZXIubWFwKGxvY2F0aW9uKSB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuamFkZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG4gIHZhciBhYyA9IGFbJ2NsYXNzJ107XG4gIHZhciBiYyA9IGJbJ2NsYXNzJ107XG5cbiAgaWYgKGFjIHx8IGJjKSB7XG4gICAgYWMgPSBhYyB8fCBbXTtcbiAgICBiYyA9IGJjIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhYykpIGFjID0gW2FjXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmMpKSBiYyA9IFtiY107XG4gICAgYVsnY2xhc3MnXSA9IGFjLmNvbmNhdChiYykuZmlsdGVyKG51bGxzKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSAhPSAnY2xhc3MnKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIEZpbHRlciBudWxsIGB2YWxgcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG51bGxzKHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdmFsICE9PSAnJztcbn1cblxuLyoqXG4gKiBqb2luIGFycmF5IGFzIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5qb2luQ2xhc3NlcyA9IGpvaW5DbGFzc2VzO1xuZnVuY3Rpb24gam9pbkNsYXNzZXModmFsKSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLm1hcChqb2luQ2xhc3NlcykgOlxuICAgICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXModmFsKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsW2tleV07IH0pIDpcbiAgICBbdmFsXSkuZmlsdGVyKG51bGxzKS5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXNcbiAqIEBwYXJhbSB7QXJyYXkuPEJvb2xlYW4+fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xzID0gZnVuY3Rpb24gY2xzKGNsYXNzZXMsIGVzY2FwZWQpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXNjYXBlZCAmJiBlc2NhcGVkW2ldKSB7XG4gICAgICBidWYucHVzaChleHBvcnRzLmVzY2FwZShqb2luQ2xhc3NlcyhbY2xhc3Nlc1tpXV0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5wdXNoKGpvaW5DbGFzc2VzKGNsYXNzZXNbaV0pKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRleHQgPSBqb2luQ2xhc3NlcyhidWYpO1xuICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyBjbGFzcz1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuZXhwb3J0cy5zdHlsZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWwpLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgfSkuam9pbignOycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBmdW5jdGlvbiBhdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgdmFsID0gZXhwb3J0cy5zdHlsZSh2YWwpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT0gdHlwZW9mIHZhbCB8fCBudWxsID09IHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9IGVsc2UgaWYgKDAgPT0ga2V5LmluZGV4T2YoJ2RhdGEnKSAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbCkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdTaW5jZSBKYWRlIDIuMC4wLCBhbXBlcnNhbmRzIChgJmApIGluIGRhdGEgYXR0cmlidXRlcyAnICtcbiAgICAgICAgICAgICAgICAgICAnd2lsbCBiZSBlc2NhcGVkIHRvIGAmYW1wO2AnKTtcbiAgICB9O1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgZWxpbWluYXRlIHRoZSBkb3VibGUgcXVvdGVzIGFyb3VuZCBkYXRlcyBpbiAnICtcbiAgICAgICAgICAgICAgICAgICAnSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArIFwiPSdcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvJy9nLCAnJmFwb3M7JykgKyBcIidcIjtcbiAgfSBlbHNlIGlmIChlc2NhcGVkKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgZXhwb3J0cy5lc2NhcGUodmFsKSArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBmdW5jdGlvbiBhdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGJ1ZiA9IFtdO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgICwgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09IGtleSkge1xuICAgICAgICBpZiAodmFsID0gam9pbkNsYXNzZXModmFsKSkge1xuICAgICAgICAgIGJ1Zi5wdXNoKCcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgamFkZV9lbmNvZGVfaHRtbF9ydWxlcyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xudmFyIGphZGVfbWF0Y2hfaHRtbCA9IC9bJjw+XCJdL2c7XG5cbmZ1bmN0aW9uIGphZGVfZW5jb2RlX2NoYXIoYykge1xuICByZXR1cm4gamFkZV9lbmNvZGVfaHRtbF9ydWxlc1tjXSB8fCBjO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGphZGVfZXNjYXBlO1xuZnVuY3Rpb24gamFkZV9lc2NhcGUoaHRtbCl7XG4gIHZhciByZXN1bHQgPSBTdHJpbmcoaHRtbCkucmVwbGFjZShqYWRlX21hdGNoX2h0bWwsIGphZGVfZW5jb2RlX2NoYXIpO1xuICBpZiAocmVzdWx0ID09PSAnJyArIGh0bWwpIHJldHVybiBodG1sO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIGphZGUgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHJldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdKYWRlJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG5cbmV4cG9ydHMuRGVidWdJdGVtID0gZnVuY3Rpb24gRGVidWdJdGVtKGxpbmVubywgZmlsZW5hbWUpIHtcbiAgdGhpcy5saW5lbm8gPSBsaW5lbm87XG4gIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbn1cblxufSx7XCJmc1wiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyIsIi8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciByYW5nZTtcblxudmFyIHRlc3RFbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDoge307XG5cbi8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRyaWNrLXN0ZWVsZS1pZGVtL21vcnBoZG9tL2lzc3Vlcy8zMiAoSUU3KyBzdXBwb3J0KVxuLy8gPD1JRTcgZG9lcyBub3Qgc3VwcG9ydCBlbC5oYXNBdHRyaWJ1dGUobmFtZSlcbnZhciBoYXNBdHRyaWJ1dGU7XG5pZiAodGVzdEVsLmhhc0F0dHJpYnV0ZSkge1xuICAgIGhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShlbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKG5hbWUpO1xuICAgIH07XG59IGVsc2Uge1xuICAgIGhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShlbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eShvKSB7XG4gICAgZm9yICh2YXIgayBpbiBvKSB7XG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBpZiAoIXJhbmdlICYmIGRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgaWYgKHJhbmdlICYmIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCkge1xuICAgICAgICBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgICAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBkb2Vzbid0IHRoaW5rXG4gICAgICogdGhhdCBcInNlbGVjdGVkXCIgaXMgYW4gYXR0cmlidXRlIHdoZW4gcmVhZGluZ1xuICAgICAqIG92ZXIgdGhlIGF0dHJpYnV0ZXMgdXNpbmcgc2VsZWN0RWwuYXR0cmlidXRlc1xuICAgICAqL1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICgoZnJvbUVsLnNlbGVjdGVkID0gdG9FbC5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnRcbiAgICAgKiBzaW5jZSBpdCBzZXRzIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiXG4gICAgICogYXR0cmlidXRlIHdpdGhvdXQgY2hhbmdpbmcgdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmVcbiAgICAgKiBubyBlZmZlY3Qgc2luY2UgaXQgaXMgb25seSB1c2VkIHRvIHRoZSBzZXQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICogU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGZyb21FbC5jaGVja2VkID0gdG9FbC5jaGVja2VkO1xuXG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlKHRvRWwsICdjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlKHRvRWwsICd2YWx1ZScpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFRFWFRBUkVBOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGZyb21FbC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogTG9vcCBvdmVyIGFsbCBvZiB0aGUgYXR0cmlidXRlcyBvbiB0aGUgdGFyZ2V0IG5vZGUgYW5kIG1ha2Ugc3VyZSB0aGVcbiAqIG9yaWdpbmFsIERPTSBub2RlIGhhcyB0aGUgc2FtZSBhdHRyaWJ1dGVzLiBJZiBhbiBhdHRyaWJ1dGVcbiAqIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBub2RlIGlzIG5vdCBvbiB0aGUgbmV3IG5vZGUgdGhlbiByZW1vdmUgaXQgZnJvbVxuICogdGhlIG9yaWdpbmFsIG5vZGVcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBmcm9tTm9kZVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHRvTm9kZVxuICovXG5mdW5jdGlvbiBtb3JwaEF0dHJzKGZyb21Ob2RlLCB0b05vZGUpIHtcbiAgICB2YXIgYXR0cnMgPSB0b05vZGUuYXR0cmlidXRlcztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXR0cjtcbiAgICB2YXIgYXR0ck5hbWU7XG4gICAgdmFyIGF0dHJWYWx1ZTtcbiAgICB2YXIgZm91bmRBdHRycyA9IHt9O1xuXG4gICAgZm9yIChpPWF0dHJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IGF0dHJzW2ldO1xuICAgICAgICBpZiAoYXR0ci5zcGVjaWZpZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICBmb3VuZEF0dHJzW2F0dHJOYW1lXSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXQgd2VyZW4ndFxuICAgIC8vIGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICBhdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGk9YXR0cnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBhdHRyID0gYXR0cnNbaV07XG4gICAgICAgIGlmIChhdHRyLnNwZWNpZmllZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgaWYgKCFmb3VuZEF0dHJzLmhhc093blByb3BlcnR5KGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuaWQ7XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICB9XG5cbiAgICB2YXIgc2F2ZWRFbHMgPSB7fTsgLy8gVXNlZCB0byBzYXZlIG9mZiBET00gZWxlbWVudHMgd2l0aCBJRHNcbiAgICB2YXIgdW5tYXRjaGVkRWxzID0ge307XG4gICAgdmFyIGdldE5vZGVLZXkgPSBvcHRpb25zLmdldE5vZGVLZXkgfHwgZGVmYXVsdEdldE5vZGVLZXk7XG4gICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTW9ycGhFbCA9IG9wdGlvbnMub25CZWZvcmVNb3JwaEVsIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuID0gb3B0aW9ucy5vbkJlZm9yZU1vcnBoRWxDaGlsZHJlbiB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcbiAgICB2YXIgbW92ZWRFbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVIZWxwZXIobm9kZSwgbmVzdGVkSW5TYXZlZEVsKSB7XG4gICAgICAgIHZhciBpZCA9IGdldE5vZGVLZXkobm9kZSk7XG4gICAgICAgIC8vIElmIHRoZSBub2RlIGhhcyBhbiBJRCB0aGVuIHNhdmUgaXQgb2ZmIHNpbmNlIHdlIHdpbGwgd2FudFxuICAgICAgICAvLyB0byByZXVzZSBpdCBpbiBjYXNlIHRoZSB0YXJnZXQgRE9NIHRyZWUgaGFzIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgLy8gd2l0aCB0aGUgc2FtZSBJRFxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHNhdmVkRWxzW2lkXSA9IG5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5lc3RlZEluU2F2ZWRFbCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCBuZXN0ZWQgaW4gYSBzYXZlZCBlbGVtZW50IHRoZW4gd2Uga25vdyB0aGF0IHRoaXMgbm9kZSBoYXMgYmVlblxuICAgICAgICAgICAgLy8gY29tcGxldGVseSBkaXNjYXJkZWQgYW5kIHdpbGwgbm90IGV4aXN0IGluIHRoZSBmaW5hbCBET00uXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlSGVscGVyKGN1ckNoaWxkLCBuZXN0ZWRJblNhdmVkRWwgfHwgaWQpO1xuICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoIWdldE5vZGVLZXkoY3VyQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byBoYW5kbGUgbm9kZXMgdGhhdCBkb24ndCBoYXZlIGFuIElEIHRvIGF2b2lkIGRvdWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyB3YWxraW5nIHRoZSBzYW1lIHNhdmVkIGVsZW1lbnQuXG5cbiAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCBwYXJlbnROb2RlLCBhbHJlYWR5VmlzaXRlZCkge1xuICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgaWYgKGFscmVhZHlWaXNpdGVkKSB7XG4gICAgICAgICAgICBpZiAoIWdldE5vZGVLZXkobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVOb2RlSGVscGVyKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhFbChmcm9tRWwsIHRvRWwsIGFscmVhZHlWaXNpdGVkLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgdmFyIHRvRWxLZXkgPSBnZXROb2RlS2V5KHRvRWwpO1xuICAgICAgICBpZiAodG9FbEtleSkge1xuICAgICAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCBpcyB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICAgICAgZGVsZXRlIHNhdmVkRWxzW3RvRWxLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU1vcnBoRWwoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcblxuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21FbC50YWdOYW1lICE9ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgIHZhciBjdXJUb05vZGVDaGlsZCA9IHRvRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlSWQ7XG5cbiAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciBzYXZlZEVsO1xuICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEVsO1xuXG4gICAgICAgICAgICBvdXRlcjogd2hpbGUoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlSWQgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlSWQgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeVZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUlkICYmICh1bm1hdGNoZWRFbCA9IHVubWF0Y2hlZEVsc1tjdXJGcm9tTm9kZUlkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hdGNoZWRFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjdXJGcm9tTm9kZUNoaWxkLCB1bm1hdGNoZWRFbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCB1bm1hdGNoZWRFbCwgYWxyZWFkeVZpc2l0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSAxKSB7IC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVDaGlsZC50YWdOYW1lID09PSBjdXJUb05vZGVDaGlsZC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgY29tcGF0aWJsZSBET00gZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlSWQgfHwgY3VyVG9Ob2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGVpdGhlciBET00gZWxlbWVudCBoYXMgYW4gSUQgdGhlbiB3ZSBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIGRpZmZlcmVudGx5IHNpbmNlIHdlIHdhbnQgdG8gbWF0Y2ggdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlSWQgPT09IGN1ckZyb21Ob2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgY29tcGF0aWJsZSBET00gZWxlbWVudHMgc28gdHJhbnNmb3JtIHRoZSBjdXJyZW50IFwiZnJvbVwiIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgdGFyZ2V0IERPTSBub2RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkLCBhbHJlYWR5VmlzaXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IDMpIHsgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGNvbXBhdGlibGUgbWF0Y2ggc28gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBET00gYW5kIGNvbnRpbnVlIHRyeWluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBmaW5kIGEgbWF0Y2ggaW4gdGhlIG9yaWdpbmFsIERPTVxuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgYWxyZWFkeVZpc2l0ZWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNhdmVkRWwgPSBzYXZlZEVsc1tjdXJUb05vZGVJZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHNhdmVkRWwsIGN1clRvTm9kZUNoaWxkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gc2F2ZWRFbDsgLy8gV2Ugd2FudCB0byBhcHBlbmQgdGhlIHNhdmVkIGVsZW1lbnQgaW5zdGVhZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgRE9NIGVsZW1lbnQgaW4gdGhlIHRhcmdldCB0cmVlIGhhcyBhbiBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdlIGRpZCBub3QgZmluZCBhIG1hdGNoIGluIGFueSBvZiB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2libGluZ3MuIFdlIGp1c3QgcHV0IHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgb2xkIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgaWYgd2UgbGF0ZXIgZmluZCBhbiBlbGVtZW50IGluIHRoZSBvbGQgRE9NIHRyZWUgdGhhdCBoYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgbWF0Y2hpbmcgSUQgdGhlbiB3ZSB3aWxsIHJlcGxhY2UgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIG9sZCBlbGVtZW50IGFuZCBtb3JwaCB0aGUgb2xkIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubWF0Y2hlZEVsc1tjdXJUb05vZGVJZF0gPSBjdXJUb05vZGVDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHdlIGRpZCBub3QgZmluZCBhIGNhbmRpZGF0ZSBtYXRjaCBmb3Igb3VyIFwidG8gbm9kZVwiXG4gICAgICAgICAgICAgICAgLy8gYW5kIHdlIGV4aGF1c3RlZCBhbGwgb2YgdGhlIGNoaWxkcmVuIFwiZnJvbVwiIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgY3VycmVudCBcInRvIG5vZGVcIiB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSA9PT0gMSAmJiAoY3VyVG9Ob2RlSWQgfHwgY3VyVG9Ob2RlQ2hpbGQuZmlyc3RDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgdGhhdCB3YXMganVzdCBhZGRlZCB0byB0aGUgb3JpZ2luYWwgRE9NIG1heSBoYXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgbmVzdGVkIGVsZW1lbnRzIHdpdGggYSBrZXkvSUQgdGhhdCBuZWVkcyB0byBiZSBtYXRjaGVkIHVwXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggb3RoZXIgZWxlbWVudHMuIFdlJ2xsIGFkZCB0aGUgZWxlbWVudCB0byBhIGxpc3Qgc28gdGhhdCB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gbGF0ZXIgcHJvY2VzcyB0aGUgbmVzdGVkIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBhbnkgdW5tYXRjaGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSBkaXNjYXJkZWRcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRFbHMucHVzaChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgXCJ0byBub2Rlc1wiLiBJZiBjdXJGcm9tTm9kZUNoaWxkIGlzIG5vbi1udWxsIHRoZW5cbiAgICAgICAgICAgIC8vIHdlIHN0aWxsIGhhdmUgc29tZSBmcm9tIG5vZGVzIGxlZnQgb3ZlciB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgd2hpbGUoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIGFscmVhZHlWaXNpdGVkKTtcbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwudGFnTmFtZV07XG4gICAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICAgIH1cbiAgICB9IC8vIEVORDogbW9ycGhFbCguLi4pXG5cbiAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgYXJlIGdpdmVuIHR3byBET00gbm9kZXMgdGhhdCBhcmUgbm90XG4gICAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbU5vZGUudGFnTmFtZSAhPT0gdG9Ob2RlLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9Ob2RlLnRhZ05hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSAzKSB7IC8vIFRleHQgbm9kZVxuICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9ycGhlZE5vZGUgPT09IHRvTm9kZSkge1xuICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCJcbiAgICAgICAgLy8gc28gd2UgaGFkIHRvIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBmYWxzZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hhdCB3ZSB3aWxsIGRvIGhlcmUgaXMgd2FsayB0aGUgdHJlZSBmb3IgdGhlIERPTSBlbGVtZW50XG4gICAgICAgICAqIHRoYXQgd2FzIG1vdmVkIGZyb20gdGhlIHRhcmdldCBET00gdHJlZSB0byB0aGUgb3JpZ2luYWxcbiAgICAgICAgICogRE9NIHRyZWUgYW5kIHdlIHdpbGwgbG9vayBmb3Iga2V5ZWQgZWxlbWVudHMgdGhhdCBjb3VsZFxuICAgICAgICAgKiBiZSBtYXRjaGVkIHRvIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSBlYXJsaWVyIGRpc2NhcmRlZC5cbiAgICAgICAgICogSWYgd2UgZmluZCBhIG1hdGNoIHRoZW4gd2Ugd2lsbCBtb3ZlIHRoZSBzYXZlZCBlbGVtZW50XG4gICAgICAgICAqIGludG8gdGhlIGZpbmFsIERPTSB0cmVlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlTW92ZWRFbCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzYXZlZEVsID0gc2F2ZWRFbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkRWwgJiYgKGN1ckNoaWxkLnRhZ05hbWUgPT09IHNhdmVkRWwudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNhdmVkRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoc2F2ZWRFbCwgY3VyQ2hpbGQsIHRydWUgLyogYWxyZWFkeSB2aXNpdGVkIHRoZSBzYXZlZCBlbCB0cmVlICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1wdHkoc2F2ZWRFbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW92ZWRFbChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUaGUgbG9vcCBiZWxvdyBpcyB1c2VkIHRvIHBvc3NpYmx5IG1hdGNoIHVwIGFueSBkaXNjYXJkZWRcbiAgICAgICAgLy8gZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIHdpdGggZWxlbWVuZXRzIGZyb20gdGhlXG4gICAgICAgIC8vIHRhcmdldCB0cmVlIHRoYXQgd2VyZSBtb3ZlZCBvdmVyIHdpdGhvdXQgdmlzaXRpbmcgdGhlaXJcbiAgICAgICAgLy8gY2hpbGRyZW5cbiAgICAgICAgaWYgKCFlbXB0eShzYXZlZEVscykpIHtcbiAgICAgICAgICAgIGhhbmRsZU1vdmVkRWxzTG9vcDpcbiAgICAgICAgICAgIHdoaWxlIChtb3ZlZEVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW92ZWRFbHNUZW1wID0gbW92ZWRFbHM7XG4gICAgICAgICAgICAgICAgbW92ZWRFbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bW92ZWRFbHNUZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVNb3ZlZEVsKG1vdmVkRWxzVGVtcFtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gbW9yZSB1bm1hdGNoZWQgZWxlbWVudHMgc28gY29tcGxldGVseSBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBoYW5kbGVNb3ZlZEVsc0xvb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIHRoZSBcIm9uTm9kZURpc2NhcmRlZFwiIGV2ZW50IGZvciBhbnkgc2F2ZWQgZWxlbWVudHNcbiAgICAgICAgLy8gdGhhdCBuZXZlciBmb3VuZCBhIG5ldyBob21lIGluIHRoZSBtb3JwaGVkIERPTVxuICAgICAgICBmb3IgKHZhciBzYXZlZEVsSWQgaW4gc2F2ZWRFbHMpIHtcbiAgICAgICAgICAgIGlmIChzYXZlZEVscy5oYXNPd25Qcm9wZXJ0eShzYXZlZEVsSWQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNhdmVkRWwgPSBzYXZlZEVsc1tzYXZlZEVsSWRdO1xuICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChzYXZlZEVsKTtcbiAgICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhzYXZlZEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCBET00gbm9kZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuIFRoaXMgaXMgb25seVxuICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgICBmcm9tTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtb3JwaGVkTm9kZSwgZnJvbU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb3JwaGRvbTtcbiIsIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWluaW1hbERlc2MgPSBbJ2gnLCAnbWluJywgJ3MnLCAnbXMnLCAnzrxzJywgJ25zJ107XHJcbnZhciB2ZXJib3NlRGVzYyA9IFsnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJywgJ21pY3Jvc2Vjb25kJywgJ25hbm9zZWNvbmQnXTtcclxudmFyIGNvbnZlcnQgPSBbNjAqNjAsIDYwLCAxLCAxZTYsIDFlMywgMV07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UsIG9wdHMpIHtcclxuXHR2YXIgdmVyYm9zZSwgcHJlY2lzZSwgaSwgc3BvdCwgc291cmNlQXRTdGVwLCB2YWxBdFN0ZXAsIGRlY2ltYWxzLCBzdHJBdFN0ZXAsIHJlc3VsdHMsIHRvdGFsU2Vjb25kcztcclxuXHJcblx0dmVyYm9zZSA9IGZhbHNlO1xyXG5cdHByZWNpc2UgPSBmYWxzZTtcclxuXHRpZiAob3B0cykge1xyXG5cdFx0dmVyYm9zZSA9IG9wdHMudmVyYm9zZSB8fCBmYWxzZTtcclxuXHRcdHByZWNpc2UgPSBvcHRzLnByZWNpc2UgfHwgZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlKSB8fCBzb3VyY2UubGVuZ3RoICE9PSAyKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cdGlmICh0eXBlb2Ygc291cmNlWzBdICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygc291cmNlWzFdICE9PSAnbnVtYmVyJykge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Ly8gbm9ybWFsaXplIHNvdXJjZSBhcnJheSBkdWUgdG8gY2hhbmdlcyBpbiBub2RlIHY1LjQrXHJcblx0aWYgKHNvdXJjZVsxXSA8IDApIHtcclxuXHRcdHRvdGFsU2Vjb25kcyA9IHNvdXJjZVswXSArIHNvdXJjZVsxXSAvIDFlOTtcclxuXHRcdHNvdXJjZVswXSA9IHBhcnNlSW50KHRvdGFsU2Vjb25kcyk7XHJcblx0XHRzb3VyY2VbMV0gPSBwYXJzZUZsb2F0KCh0b3RhbFNlY29uZHMgJSAxKS50b1ByZWNpc2lvbig5KSkgKiAxZTk7XHJcblx0fVxyXG5cclxuXHRyZXN1bHRzID0gJyc7XHJcblxyXG5cdC8vIGZvcmVhY2ggdW5pdFxyXG5cdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdHNwb3QgPSBpIDwgMyA/IDAgOiAxOyAvLyBncmFiYmluZyBmaXJzdCBvciBzZWNvbmQgc3BvdCBpbiBzb3VyY2UgYXJyYXlcclxuXHRcdHNvdXJjZUF0U3RlcCA9IHNvdXJjZVtzcG90XTtcclxuXHRcdGlmIChpICE9PSAzICYmIGkgIT09IDApIHtcclxuXHRcdFx0c291cmNlQXRTdGVwID0gc291cmNlQXRTdGVwICUgY29udmVydFtpLTFdOyAvLyB0cmltIG9mZiBwcmV2aW91cyBwb3J0aW9uc1xyXG5cdFx0fVxyXG5cdFx0aWYgKGkgPT09IDIpIHtcclxuXHRcdFx0c291cmNlQXRTdGVwICs9IHNvdXJjZVsxXS8xZTk7IC8vIGdldCBwYXJ0aWFsIHNlY29uZHMgZnJvbSBvdGhlciBwb3J0aW9uIG9mIHRoZSBhcnJheVxyXG5cdFx0fVxyXG5cdFx0dmFsQXRTdGVwID0gc291cmNlQXRTdGVwIC8gY29udmVydFtpXTsgLy8gdmFsIGF0IHRoaXMgdW5pdFxyXG5cdFx0aWYgKHZhbEF0U3RlcCA+PSAxKSB7XHJcblx0XHRcdGlmICh2ZXJib3NlKSB7XHJcblx0XHRcdFx0dmFsQXRTdGVwID0gTWF0aC5mbG9vcih2YWxBdFN0ZXApOyAvLyBkZWFsIGluIHdob2xlIHVuaXRzLCBzdWJzZXF1ZW50IGxhcHMgd2lsbCBnZXQgdGhlIGRlY2ltYWwgcG9ydGlvblxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcHJlY2lzZSkge1xyXG5cdFx0XHRcdC8vIGRvbid0IGZsaW5nIHRvbyBtYW55IGRlY2ltYWxzXHJcblx0XHRcdFx0ZGVjaW1hbHMgPSB2YWxBdFN0ZXAgPj0gMTAgPyAwIDogMjtcclxuXHRcdFx0XHRzdHJBdFN0ZXAgPSB2YWxBdFN0ZXAudG9GaXhlZChkZWNpbWFscyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3RyQXRTdGVwID0gdmFsQXRTdGVwLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0ckF0U3RlcC5pbmRleE9mKCcuJykgPiAtMSAmJiBzdHJBdFN0ZXBbc3RyQXRTdGVwLmxlbmd0aC0xXSA9PT0gJzAnKSB7XHJcblx0XHRcdFx0c3RyQXRTdGVwID0gc3RyQXRTdGVwLnJlcGxhY2UoL1xcLj8wKyQvLCcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlc3VsdHMpIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9ICcgJzsgLy8gYXBwZW5kIHNwYWNlIGlmIHdlIGhhdmUgYSBwcmV2aW91cyB2YWx1ZVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdHMgKz0gc3RyQXRTdGVwOyAvLyBhcHBlbmQgdGhlIHZhbHVlXHJcblx0XHRcdC8vIGFwcGVuZCB1bml0c1xyXG5cdFx0XHRpZiAodmVyYm9zZSkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gJyAnK3ZlcmJvc2VEZXNjW2ldO1xyXG5cdFx0XHRcdGlmIChzdHJBdFN0ZXAgIT09ICcxJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0cyArPSAncyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gJyAnK21pbmltYWxEZXNjW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdmVyYm9zZSkge1xyXG5cdFx0XHRcdGJyZWFrOyAvLyB2ZXJib3NlIGdldHMgYXMgbWFueSBncm91cHMgYXMgbmVjZXNzYXJ5LCB0aGUgcmVzdCBnZXQgb25seSBvbmVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwL3JhdycpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuLy8gU3RhdGVzOlxuLy9cbi8vIDAgLSBwZW5kaW5nXG4vLyAxIC0gZnVsZmlsbGVkIHdpdGggX3ZhbHVlXG4vLyAyIC0gcmVqZWN0ZWQgd2l0aCBfdmFsdWVcbi8vIDMgLSBhZG9wdGVkIHRoZSBzdGF0ZSBvZiBhbm90aGVyIHByb21pc2UsIF92YWx1ZVxuLy9cbi8vIG9uY2UgdGhlIHN0YXRlIGlzIG5vIGxvbmdlciBwZW5kaW5nICgwKSBpdCBpcyBpbW11dGFibGVcblxuLy8gQWxsIGBfYCBwcmVmaXhlZCBwcm9wZXJ0aWVzIHdpbGwgYmUgcmVkdWNlZCB0byBgX3tyYW5kb20gbnVtYmVyfWBcbi8vIGF0IGJ1aWxkIHRpbWUgdG8gb2JmdXNjYXRlIHRoZW0gYW5kIGRpc2NvdXJhZ2UgdGhlaXIgdXNlLlxuLy8gV2UgZG9uJ3QgdXNlIHN5bWJvbHMgb3IgT2JqZWN0LmRlZmluZVByb3BlcnR5IHRvIGZ1bGx5IGhpZGUgdGhlbVxuLy8gYmVjYXVzZSB0aGUgcGVyZm9ybWFuY2UgaXNuJ3QgZ29vZCBlbm91Z2guXG5cblxuLy8gdG8gYXZvaWQgdXNpbmcgdHJ5L2NhdGNoIGluc2lkZSBjcml0aWNhbCBmdW5jdGlvbnMsIHdlXG4vLyBleHRyYWN0IHRoZW0gdG8gaGVyZS5cbnZhciBMQVNUX0VSUk9SID0gbnVsbDtcbnZhciBJU19FUlJPUiA9IHt9O1xuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb2JqLnRoZW47XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgTEFTVF9FUlJPUiA9IGV4O1xuICAgIHJldHVybiBJU19FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYWxsT25lKGZuLCBhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZuKGEpO1xuICB9IGNhdGNoIChleCkge1xuICAgIExBU1RfRVJST1IgPSBleDtcbiAgICByZXR1cm4gSVNfRVJST1I7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyeUNhbGxUd28oZm4sIGEsIGIpIHtcbiAgdHJ5IHtcbiAgICBmbihhLCBiKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBMQVNUX0VSUk9SID0gZXg7XG4gICAgcmV0dXJuIElTX0VSUk9SO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdGhpcy5fNDUgPSAwO1xuICB0aGlzLl84MSA9IDA7XG4gIHRoaXMuXzY1ID0gbnVsbDtcbiAgdGhpcy5fNTQgPSBudWxsO1xuICBpZiAoZm4gPT09IG5vb3ApIHJldHVybjtcbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblByb21pc2UuXzEwID0gbnVsbDtcblByb21pc2UuXzk3ID0gbnVsbDtcblByb21pc2UuXzYxID0gbm9vcDtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0aGlzLmNvbnN0cnVjdG9yICE9PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHNhZmVUaGVuKHRoaXMsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IFByb21pc2Uobm9vcCk7XG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBzYWZlVGhlbihzZWxmLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICByZXR1cm4gbmV3IHNlbGYuY29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXMgPSBuZXcgUHJvbWlzZShub29wKTtcbiAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIGhhbmRsZShzZWxmLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fODEgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fNjU7XG4gIH1cbiAgaWYgKFByb21pc2UuXzEwKSB7XG4gICAgUHJvbWlzZS5fMTAoc2VsZik7XG4gIH1cbiAgaWYgKHNlbGYuXzgxID09PSAwKSB7XG4gICAgaWYgKHNlbGYuXzQ1ID09PSAwKSB7XG4gICAgICBzZWxmLl80NSA9IDE7XG4gICAgICBzZWxmLl81NCA9IGRlZmVycmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VsZi5fNDUgPT09IDEpIHtcbiAgICAgIHNlbGYuXzQ1ID0gMjtcbiAgICAgIHNlbGYuXzU0ID0gW3NlbGYuXzU0LCBkZWZlcnJlZF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGYuXzU0LnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBoYW5kbGVSZXNvbHZlZChzZWxmLCBkZWZlcnJlZCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc29sdmVkKHNlbGYsIGRlZmVycmVkKSB7XG4gIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fODEgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICBpZiAoc2VsZi5fODEgPT09IDEpIHtcbiAgICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl82NSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fNjUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gdHJ5Q2FsbE9uZShjYiwgc2VsZi5fNjUpO1xuICAgIGlmIChyZXQgPT09IElTX0VSUk9SKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICBpZiAobmV3VmFsdWUgPT09IHNlbGYpIHtcbiAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgc2VsZixcbiAgICAgIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJylcbiAgICApO1xuICB9XG4gIGlmIChcbiAgICBuZXdWYWx1ZSAmJlxuICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgKSB7XG4gICAgdmFyIHRoZW4gPSBnZXRUaGVuKG5ld1ZhbHVlKTtcbiAgICBpZiAodGhlbiA9PT0gSVNfRVJST1IpIHtcbiAgICAgIHJldHVybiByZWplY3Qoc2VsZiwgTEFTVF9FUlJPUik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoZW4gPT09IHNlbGYudGhlbiAmJlxuICAgICAgbmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlXG4gICAgKSB7XG4gICAgICBzZWxmLl84MSA9IDM7XG4gICAgICBzZWxmLl82NSA9IG5ld1ZhbHVlO1xuICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvUmVzb2x2ZSh0aGVuLmJpbmQobmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc2VsZi5fODEgPSAxO1xuICBzZWxmLl82NSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuICBzZWxmLl84MSA9IDI7XG4gIHNlbGYuXzY1ID0gbmV3VmFsdWU7XG4gIGlmIChQcm9taXNlLl85Nykge1xuICAgIFByb21pc2UuXzk3KHNlbGYsIG5ld1ZhbHVlKTtcbiAgfVxuICBmaW5hbGUoc2VsZik7XG59XG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fNDUgPT09IDEpIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fNTQpO1xuICAgIHNlbGYuXzU0ID0gbnVsbDtcbiAgfVxuICBpZiAoc2VsZi5fNDUgPT09IDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuXzU0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fNTRbaV0pO1xuICAgIH1cbiAgICBzZWxmLl81NCA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSl7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBwcm9taXNlKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHZhciByZXMgPSB0cnlDYWxsVHdvKGZuLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIGRvbmUgPSB0cnVlO1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfSlcbiAgaWYgKCFkb25lICYmIHJlcyA9PT0gSVNfRVJST1IpIHtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRoZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHRoaXM7XG4gIHNlbGYudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSwgMCk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9UaGlzIGZpbGUgY29udGFpbnMgdGhlIEVTNiBleHRlbnNpb25zIHRvIHRoZSBjb3JlIFByb21pc2VzL0ErIEFQSVxuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbi8qIFN0YXRpYyBGdW5jdGlvbnMgKi9cblxudmFyIFRSVUUgPSB2YWx1ZVByb21pc2UodHJ1ZSk7XG52YXIgRkFMU0UgPSB2YWx1ZVByb21pc2UoZmFsc2UpO1xudmFyIE5VTEwgPSB2YWx1ZVByb21pc2UobnVsbCk7XG52YXIgVU5ERUZJTkVEID0gdmFsdWVQcm9taXNlKHVuZGVmaW5lZCk7XG52YXIgWkVSTyA9IHZhbHVlUHJvbWlzZSgwKTtcbnZhciBFTVBUWVNUUklORyA9IHZhbHVlUHJvbWlzZSgnJyk7XG5cbmZ1bmN0aW9uIHZhbHVlUHJvbWlzZSh2YWx1ZSkge1xuICB2YXIgcCA9IG5ldyBQcm9taXNlKFByb21pc2UuXzYxKTtcbiAgcC5fODEgPSAxO1xuICBwLl82NSA9IHZhbHVlO1xuICByZXR1cm4gcDtcbn1cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gTlVMTDtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBVTkRFRklORUQ7XG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIFRSVUU7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiBGQUxTRTtcbiAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gWkVSTztcbiAgaWYgKHZhbHVlID09PSAnJykgcmV0dXJuIEVNUFRZU1RSSU5HO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVByb21pc2UodmFsdWUpO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWwudGhlbiA9PT0gUHJvbWlzZS5wcm90b3R5cGUudGhlbikge1xuICAgICAgICAgIHdoaWxlICh2YWwuXzgxID09PSAzKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuXzY1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsLl84MSA9PT0gMSkgcmV0dXJuIHJlcyhpLCB2YWwuXzY1KTtcbiAgICAgICAgICBpZiAodmFsLl84MSA9PT0gMikgcmVqZWN0KHZhbC5fNjUpO1xuICAgICAgICAgIHZhbC50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWwpKTtcbiAgICAgICAgICAgIHAudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpe1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogUHJvdG90eXBlIE1ldGhvZHMgKi9cblxuUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5yZXF1aXJlKCcuL2RvbmUuanMnKTtcbnJlcXVpcmUoJy4vZmluYWxseS5qcycpO1xucmVxdWlyZSgnLi9lczYtZXh0ZW5zaW9ucy5qcycpO1xucmVxdWlyZSgnLi9ub2RlLWV4dGVuc2lvbnMuanMnKTtcbnJlcXVpcmUoJy4vc3luY2hyb25vdXMuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHRoZW4vcHJvbWlzZSBzcGVjaWZpYyBleHRlbnNpb25zIHRoYXQgYXJlIG9ubHkgdXNlZnVsXG4vLyBmb3Igbm9kZS5qcyBpbnRlcm9wXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG52YXIgYXNhcCA9IHJlcXVpcmUoJ2FzYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG4vKiBTdGF0aWMgRnVuY3Rpb25zICovXG5cblByb21pc2UuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKGZuLCBhcmd1bWVudENvdW50KSB7XG4gIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnRDb3VudCA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRDb3VudCAhPT0gSW5maW5pdHlcbiAgKSB7XG4gICAgcmV0dXJuIGRlbm9kZWlmeVdpdGhDb3VudChmbiwgYXJndW1lbnRDb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlbm9kZWlmeVdpdGhvdXRDb3VudChmbik7XG4gIH1cbn1cblxudmFyIGNhbGxiYWNrRm4gPSAoXG4gICdmdW5jdGlvbiAoZXJyLCByZXMpIHsnICtcbiAgJ2lmIChlcnIpIHsgcmooZXJyKTsgfSBlbHNlIHsgcnMocmVzKTsgfScgK1xuICAnfSdcbik7XG5mdW5jdGlvbiBkZW5vZGVpZnlXaXRoQ291bnQoZm4sIGFyZ3VtZW50Q291bnQpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudENvdW50OyBpKyspIHtcbiAgICBhcmdzLnB1c2goJ2EnICsgaSk7XG4gIH1cbiAgdmFyIGJvZHkgPSBbXG4gICAgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3Muam9pbignLCcpICsgJykgeycsXG4gICAgJ3ZhciBzZWxmID0gdGhpczsnLFxuICAgICdyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJzLCByaikgeycsXG4gICAgJ3ZhciByZXMgPSBmbi5jYWxsKCcsXG4gICAgWydzZWxmJ10uY29uY2F0KGFyZ3MpLmNvbmNhdChbY2FsbGJhY2tGbl0pLmpvaW4oJywnKSxcbiAgICAnKTsnLFxuICAgICdpZiAocmVzICYmJyxcbiAgICAnKHR5cGVvZiByZXMgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJlcyA9PT0gXCJmdW5jdGlvblwiKSAmJicsXG4gICAgJ3R5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiJyxcbiAgICAnKSB7cnMocmVzKTt9JyxcbiAgICAnfSk7JyxcbiAgICAnfTsnXG4gIF0uam9pbignJyk7XG4gIHJldHVybiBGdW5jdGlvbihbJ1Byb21pc2UnLCAnZm4nXSwgYm9keSkoUHJvbWlzZSwgZm4pO1xufVxuZnVuY3Rpb24gZGVub2RlaWZ5V2l0aG91dENvdW50KGZuKSB7XG4gIHZhciBmbkxlbmd0aCA9IE1hdGgubWF4KGZuLmxlbmd0aCAtIDEsIDMpO1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTGVuZ3RoOyBpKyspIHtcbiAgICBhcmdzLnB1c2goJ2EnICsgaSk7XG4gIH1cbiAgdmFyIGJvZHkgPSBbXG4gICAgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3Muam9pbignLCcpICsgJykgeycsXG4gICAgJ3ZhciBzZWxmID0gdGhpczsnLFxuICAgICd2YXIgYXJnczsnLFxuICAgICd2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsnLFxuICAgICdpZiAoYXJndW1lbnRzLmxlbmd0aCA+ICcgKyBmbkxlbmd0aCArICcpIHsnLFxuICAgICdhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggKyAxKTsnLFxuICAgICdmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeycsXG4gICAgJ2FyZ3NbaV0gPSBhcmd1bWVudHNbaV07JyxcbiAgICAnfScsXG4gICAgJ30nLFxuICAgICdyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJzLCByaikgeycsXG4gICAgJ3ZhciBjYiA9ICcgKyBjYWxsYmFja0ZuICsgJzsnLFxuICAgICd2YXIgcmVzOycsXG4gICAgJ3N3aXRjaCAoYXJnTGVuZ3RoKSB7JyxcbiAgICBhcmdzLmNvbmNhdChbJ2V4dHJhJ10pLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICdjYXNlICcgKyAoaW5kZXgpICsgJzonICtcbiAgICAgICAgJ3JlcyA9IGZuLmNhbGwoJyArIFsnc2VsZiddLmNvbmNhdChhcmdzLnNsaWNlKDAsIGluZGV4KSkuY29uY2F0KCdjYicpLmpvaW4oJywnKSArICcpOycgK1xuICAgICAgICAnYnJlYWs7J1xuICAgICAgKTtcbiAgICB9KS5qb2luKCcnKSxcbiAgICAnZGVmYXVsdDonLFxuICAgICdhcmdzW2FyZ0xlbmd0aF0gPSBjYjsnLFxuICAgICdyZXMgPSBmbi5hcHBseShzZWxmLCBhcmdzKTsnLFxuICAgICd9JyxcbiAgICBcbiAgICAnaWYgKHJlcyAmJicsXG4gICAgJyh0eXBlb2YgcmVzID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXMgPT09IFwiZnVuY3Rpb25cIikgJiYnLFxuICAgICd0eXBlb2YgcmVzLnRoZW4gPT09IFwiZnVuY3Rpb25cIicsXG4gICAgJykge3JzKHJlcyk7fScsXG4gICAgJ30pOycsXG4gICAgJ307J1xuICBdLmpvaW4oJycpO1xuXG4gIHJldHVybiBGdW5jdGlvbihcbiAgICBbJ1Byb21pc2UnLCAnZm4nXSxcbiAgICBib2R5XG4gICkoUHJvbWlzZSwgZm4pO1xufVxuXG5Qcm9taXNlLm5vZGVpZnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGNhbGxiYWNrID1cbiAgICAgIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicgPyBhcmdzLnBvcCgpIDogbnVsbDtcbiAgICB2YXIgY3R4ID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykubm9kZWlmeShjYWxsYmFjaywgY3R4KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGNhbGxiYWNrID09PSBudWxsIHx8IHR5cGVvZiBjYWxsYmFjayA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGV4KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIG51bGwsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5Qcm9taXNlLmVuYWJsZVN5bmNocm9ub3VzID0gZnVuY3Rpb24gKCkge1xuICBQcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpID09IDA7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpID09IDE7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXRlKCkgPT0gMjtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fODEgPT09IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLl82NS5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgYSB2YWx1ZSBvZiBhbiB1bmZ1bGZpbGxlZCBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl82NTtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRSZWFzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuXzgxID09PSAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fNjUuZ2V0UmVhc29uKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGEgcmVqZWN0aW9uIHJlYXNvbiBvZiBhIG5vbi1yZWplY3RlZCBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl82NTtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fODEgPT09IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLl82NS5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fODEgPT09IC0xIHx8IHRoaXMuXzgxID09PSAtMikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuXzgxO1xuICB9O1xufTtcblxuUHJvbWlzZS5kaXNhYmxlU3luY2hyb25vdXMgPSBmdW5jdGlvbigpIHtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNQZW5kaW5nID0gdW5kZWZpbmVkO1xuICBQcm9taXNlLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gIFByb21pc2UucHJvdG90eXBlLmdldFJlYXNvbiA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSB1bmRlZmluZWQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGRlZmluaXRpb25zIG9mIHJ1bGVzIGhvdyBsb2NhdGlvbiBVUkxzIGFyZSB0cmFuc2xhdGVkXG4vLyB0byBwYXJhbWV0ZXJzIGZvciBzdG9yZXMgaW4gQ2F0YmVycnkgYXBwbGljYXRpb24uXG4vL1xuLy8gRm9ybWF0OlxuLy8gL3NvbWUvOnBhcmFtZXRlcltzdG9yZTEsc3RvcmUyLHN0b3JlM11cbi8vXG4vLyBNb3JlIGRldGFpbHMgaGVyZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRiZXJyeS9jYXRiZXJyeS9ibG9iL21hc3Rlci9kb2NzL2luZGV4Lm1kI3JvdXRpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBbXG5cdCcvOnBhZ2VbUGFnZXNdJ1xuXTtcbiJdfQ==
