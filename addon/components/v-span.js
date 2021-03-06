// import Ember from 'ember';
// import layout from '../templates/components/v-span';

// export default Ember.Component.extend({
//   layout
// });

import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import layout from '../templates/components/v-span';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'inverse',
        'loading:v-loading'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'span',

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
    componentClass: 'span',

    /**
     * Whether "inverse" class should be applied (only for sl-loading in this context)
     *
     * @type {Boolean}
     */
    inverse: false,

    /**
     * Whether to show the loading icon or content
     *
     * @type {Boolean}
     */
    loading: false,

    /**
     * The value to display once loaded/ready
     *
     * @type {?String}
     */
    value: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
