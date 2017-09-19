// import Ember from 'ember';
// import layout from '../templates/components/v-loader';
//
// export default Ember.Component.extend({
//   layout
// });
import Ember from 'ember';
import layout from '../templates/components/rdc-loading-indicator';

export default Ember.Component.extend({
	layout,
	loadingText: 'Loading...',
	shieldIcon : false
});
