// export default function classPrefix() {
//   return true;
// }

import config from 'ember-get-config';

export default function( componentClass ) {
	//Vishu : Need to debug config.
	//Fixed it by adding in envirnoment.js //Now move to index.js 
	// Ember.Logger.log("config.componentClassPrefix");
	// Ember.Logger.log(`${config.componentClassPrefix}`);
    return `${config.componentClassPrefix}-${componentClass}`;
}
