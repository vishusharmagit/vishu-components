// import Ember from 'ember';
// import layout from '../templates/components/v-accordion-panel-item';

// export default Ember.Component.extend({
//   layout
// });


import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import layout from '../templates/components/v-accordion-panel-item';
import containsValue from '../utils/contains-value';
import warn from '../utils/warn';
import {
  Theme as TWBSTheme
} from '../utils/bootstrap-naming';


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
  classNameBindings: [
    'themeClassName'
  ],

  /** @type {String[]} */
  classNames: [
    'panel'
  ],

  title: '',
  // selected: '',
  collapsed: Ember.computed('selected', 'title', {
    get() {
      if (this.get("selected") !== this.get('title')) {
        return true;
      }
      return false;
    }
  }),

  /** @type {Object} */
  layout,

  // didInsertElement() {
  //   this._super( ...arguments );
  //   // alert(this.get('selected'));
  //   Ember.Logger.log("this.get('selected') 1");
  //   Ember.Logger.log(this.get('selected'));

  //   if(Ember.isEmpty(this.get('selected'))){
		// 	const selectedPanel = this.$(".panel-heading")[0].innerText.trim();
		// 	this.set('selected', selectedPanel);
		// 	Ember.Logger.log("this.get('selected') 22222");
  //   	Ember.Logger.log(this.get('selected'));
		// }
  // },

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
  componentClass: 'accordion-panel-item',


  /**
   * When true, the panel body will be in a loading state
   *
   * @type {Boolean}
   */
  loading: false,

  /**
   * The Bootstrap "theme" style name
   *
   * @type {TWBSTheme}
   */
  theme: TWBSTheme.DEFAULT,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Element-specific class name for the Bootstrap "theme" style
   *
   * @function
   * @returns {String}
   */
  themeClassName: Ember.computed(
    'theme',
    function() {
      const theme = this.get('theme');

      if (!containsValue(theme, TWBSTheme)) {
        warn(`Invalid theme property value "${theme}"`);
        // Vishu : TODO - > THis one added if user didn't pass theme property in 'v-accordion-panel'
      	return `panel-default`;

      }

      return `panel-${theme}`;
    }
  ),

  actions: {
    click: function(panelTilte) {
      if (this.get("selected") !== panelTilte) {
        this.set("selected", panelTilte);
      }
      this.sendAction('action', this.get('selected'));
    }
  }

});
