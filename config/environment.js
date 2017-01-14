/*jshint node:true*/
'use strict';

module.exports = function( /* environment, appConfig */ ) {
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
    },
    agGrid: {
      useEnterprise: false,
      // licenseKey: 'YOUR_LICENSE_KEY'
    },
    //Vishu : This one solve the problem to append values in css class.
    //need to work on it. if user want to add the 'componentClassPrefix' value.
    // 'componentClassPrefix': componentClassPrefix
    // 'componentClassPrefix': 'vishu-components'

    // config: function() {
    //   return {
    //     'componentClassPrefix': componentClassPrefix
    //   };
    // }
  };
};
