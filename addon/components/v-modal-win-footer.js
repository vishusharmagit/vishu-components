// import Ember from 'ember';
// import layout from '../templates/components/v-modal-win-footer';

// export default Ember.Component.extend({
//   layout
// });

import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import layout from '../templates/components/v-modal-win-footer';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

   /**
     * The close button text
     *
     * @type {String}
     */
    buttonText: 'Close',

    /** @type {String[]} */
    classNames: [
        'modal-footer'
    ],

    /** @type {Object} */
    layout: layout,

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
    componentClass: 'modal-footer'

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods
});
