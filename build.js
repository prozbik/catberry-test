'use strict';

var isRelease = process.argv.length === 3 ?
		process.argv[2] === 'release' : undefined,
	templateEngine = require('catberry-jade'),
	assets = require('catberry-assets'),
	catberry = require('catberry'),
	cat = catberry.create({
		isRelease: isRelease
	});
	
assets.register(cat.locator);
templateEngine.register(cat.locator);
cat.build();
