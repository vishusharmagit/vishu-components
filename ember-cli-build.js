/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });

  // -------------------------------------------------------------------------
  // Javascript

  //In sl-comp, they added it in 'index.js'
  //(PATH : /Users/vishu/Documents/Vishu/Vishu/dashboard/sl-ember-components-master/index.js)

  // app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  // app.import(app.bowerDirectory + '/bootstrap-datepicker/js/bootstrap-datepicker.js');
  // app.import(app.bowerDirectory + '/highcharts/highcharts.src.js');
  // app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
  // app.import(app.bowerDirectory + '/moment/min/moment-with-locales.js');
  // app.import(app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.js');
  // app.import(app.bowerDirectory + '/rxjs/dist/rx.all.js');
  // app.import(app.bowerDirectory + '/select2/select2.js');
  // app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');
  // app.import(app.bowerDirectory + '/jquery.fn.twbs-responsive-pagination/src/twbsResponsivePagination.js');

  return app.toTree();
};
