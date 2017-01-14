// export default function classPrefix() {
//   return true;
// }

import config from 'ember-get-config';

export default function( componentClass ) {
	//Vishu : Need to debug config.
	Ember.Logger.log("config.componentClassPrefix");
	Ember.Logger.log(`${config.componentClassPrefix}`);
    return `${config.componentClassPrefix}-${componentClass}`;
}
