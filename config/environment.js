/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
  	 moment: {
      // Options:
      // 'all' - all years, all timezones
      // '2010-2020' - 2010-2020, all timezones
      // 'none' - no data, just timezone API
      includeTimezone: 'all',
      // Global Default Output Format
      // Your application may require a default format other than the default, ISO 8601. 
      // For example, you may want dates to fallback on the localized shorthand format L by default.
	  outputFormat: 'L', //Working
      allowEmpty: true // default: false//Working : It will not show 'Invalid date' for empty date.
    }
  };
};
