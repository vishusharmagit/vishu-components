/* jshint node: true */
'use strict';
//Added from wb-ui-comp
var path = require('path'),
  fs = require('fs');
var componentClassPrefix;


module.exports = {
  name: 'vishu-components'
    //Added from wb-ui-comp
    ,

  config: function() {
    return {
      'componentClassPrefix': componentClassPrefix
    };
  },
  treeFor: function(type) {
    var pkgPath = path.join(process.cwd(), 'package.json'),
      pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' })),
      env = process.env.EMBER_ENV || 'development';
    if (env === 'production') {
      if (pkg.includeDevDepsAddonInProdBuild === true) {
        return this._super.treeFor.apply(this, [type]);
      }
    } else {
      return this._super.treeFor.apply(this, [type]);
    }
  },
  included: function(app) {
  	//TODO : VISHU
  	//NEED TO MOVE IT @LINE- 65 AND, THEN TEST IN DASHBAORD BY REMOVING ADD DEPENDENCY FROM
  	//'bower.json' we added.
  	//Tested not working.
  	// this._super.included( app );

  	//Vishu : I think this one is giving name / appending 'vishu-components' to components.
  	//Here, 'else' part setting 'componentClassPrefix' value from 'this.name'.
  	//'this.name' have value 'vishu-components'. :) [Tested using console.]

  	// Here, 'if' condition will work if any using 'app' want to change 'add-on' default name.
  	//Like as below :
  	
  // 	To get started, you will need to add a config value to your ember-cli-build.js

		// var app = new EmberApp(defaults, {
		//     'sl-ember-components': {
		//         componentClassPrefix: 'custom-prefix' // specify your custom prefix here
		//     }
		// });

  	//
  	// console.log("Vishu - addon");
  	// console.log(app);
    var addonOptions = app.options[ 'vishu-components' ];

    if ( addonOptions && addonOptions.componentClassPrefix ) {
        componentClassPrefix = addonOptions.componentClassPrefix;
    } else {
  			// console.log("Vishu - addon this.name");
    		// console.log(this.name);
        componentClassPrefix =  this.name;
    }
    var pkgPath = path.join(process.cwd(), 'package.json'),
      pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' })),
      env = process.env.EMBER_ENV || 'development';
    // if (env === 'production') {
    //   if (pkg.includeDevDepsAddonInProdBuild !== true) {
    //     return this._super.included(app);
    //   }
    // }
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    app.import(app.bowerDirectory + '/bootstrap-datepicker/js/bootstrap-datepicker.js');
    app.import(app.bowerDirectory + '/highcharts/highcharts.src.js');
    app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
    app.import(app.bowerDirectory + '/moment/min/moment-with-locales.js');
    app.import(app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.js');
    app.import(app.bowerDirectory + '/rxjs/dist/rx.all.js');
    app.import(app.bowerDirectory + '/select2/select2.js');
    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');
    app.import(app.bowerDirectory + '/jquery.fn.twbs-responsive-pagination/src/twbsResponsivePagination.js');
    // this.addons.forEach(function(addon) {
    //   if ((addon.name === "ember-infinity" || addon.name === 'ember-select-2') && app.options.isRunningInComponentsDummy !== true) {
    //     addon.included.apply(addon, [app]);
    //   }
    // });
    this._super.included(app);
  }
};
