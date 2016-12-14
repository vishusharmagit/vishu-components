import Ember from 'ember';
import layout from '../templates/components/v-panel';

export default Ember.Component.extend({
    layout: layout,
    /**
     * This will help us to define the title of panel.
     *
     * @property {string} title
     * @default  ''
     */
    title : '',
    /**
     * This will help us to add some css class on panel title for applying styling.
     *
     * @property {string} titleCls
     * @default  ''
     */
    titleCls : '',
    /**
     * This will help us to make panel title as a link to redirect on a particular route.
     *
     * @property {string} titleUrl
     * @default  'null'
     */
    titleUrl : null,
    /**
     * This will help us to add some css class on panel header for applying styling.
     *
     * @property {string} headerCls
     * @default  ''
     */
    headerCls : '',

    /**
     * This will help user to render panel in collpased mode.
     *
     * @property {boolean} collapsed
     * @default  false
     */
    collapsed: false,

    /**
     * Sets the isCollapsed to true/false and help to change icon in panel bar header.
     *
     * @function isCollapsed
     * @computed collapsed
     * @returns  {boolean}
     */
    isCollapsed: Ember.computed('collapsed', {
        get: function () {
            if (this.get('collapsed')) {
                return true;
            }
            return false;
        }
    }),
    /*
     * This will help user to allow to make panel optional to collapsible.
     *
     * @property {boolean} collapsible
     * @default  true
     */
    collapsible: true,

    /**
     * Sets the isCollapsible to true/false and help to show/hide icon in panel bar header.
     *
     * @function isCollapsible
     * @computed collapsible
     * @returns  {boolean}
     */
    isCollapsible: Ember.computed('collapsible', {
        get: function () {
            if (this.get('collapsible')) {
                return true;
            }
            return false;
        }
    }),
    actions : {
        click: function () {
            this.toggleProperty('collapsed');
            this.sendAction('action', this.get('collapsed'));
        }
    }
});
