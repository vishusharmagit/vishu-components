// import Ember from 'ember';
// import layout from '../templates/components/v-accordion-panel';

// export default Ember.Component.extend({
//   layout
// });


// import Ember from 'ember';
// import layout from '../templates/components/v-accordion-panel-item';

// export default Ember.Component.extend({
//   layout
// });


import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import layout from '../templates/components/v-accordion-panel';
// import containsValue from '../utils/contains-value';
// import warn from '../utils/warn';
// import {
//   Theme as TWBSTheme
// } from '../utils/bootstrap-naming';

import prefix from '../utils/class-prefix';


/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend(ClassPrefix, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  // classNameBindings: [
  //   'themeClassName'
  // ],

  /** @type {String[]} */
  // classNames: [
  //   'panel'
  // ],



  /** @type {Object} */
  layout,

  data: '',
  selected: '',
  theme: '',


  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Component class that will be prefixed with base component class
   *
   * @type {String}
   */
  // componentClass: 'panel',
  componentClass: 'accordion-panel',


  /**
   * When true, the panel body will be in a loading state
   *
   * @type {Boolean}
   */
  // loading: false,

  /**
   * The Bootstrap "theme" style name
   *
   * @type {TWBSTheme}
   */
  // theme: TWBSTheme.DEFAULT,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  

	didInsertElement() {
    this._super( ...arguments );

		const accordComponentClassSelector = `.${prefix( 'accordion-panel-item' )} .panel-heading`;
    if(Ember.isEmpty(this.get('selected'))){
			const selectedPanel = this.$( accordComponentClassSelector )[0].innerText.trim();
			this.set('selected', selectedPanel);
		}
    // this.initialize();

  //   Ember.Logger.log(" didInsertElement this.get('selected')");
		// Ember.Logger.log(this.get('selected'));

		// // const accordComponentClassSelector = `.${prefix( 'accordion-panel-item' )}`;
		// const accordComponentClassSelector = `.${prefix( 'accordion-panel-item' )} .panel-heading`;

		// Ember.Logger.log(" didInsertElement  accordComponentClassSelector");
		// Ember.Logger.log(accordComponentClassSelector);

		// Ember.Logger.log(" this.$( accordComponentClassSelector )[0].innerText ");
		// Ember.Logger.log(this.$( accordComponentClassSelector )[0].innerText);
		// this.$( accordComponentClassSelector )[0].innerText;

  },


  actions: {
    accordionPanelClick(e) {
      //Here, 'e' will be panel title.
      this.sendAction('action', e);
      // Ember.Logger.log("e");
      // Ember.Logger.log(e);
      // if (e) {
      // }
    },
  }

});
