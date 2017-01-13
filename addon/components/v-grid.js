// import Ember from 'ember';
// import layout from '../templates/components/v-grid';

// export default Ember.Component.extend({
//   layout: layout,
//    gridOptions: {
//     columnDefs: [{
//       headerName: "Product",
//       field: "name"
//     }, {
//       headerName: 'Units',
//       field: 'units'
//     }, {
//       headerName: 'Sales',
//       field: 'sales'
//     }, {
//       headerName: 'Profit',
//       field: 'profit'
//     }],
//     rowData: [{
//       name: 'Chips',
//       units: '223',
//       sales: '$54,335',
//       profit: '$545,454'
//     }, {
//       name: 'Towels',
//       units: '965',
//       sales: '$1,900',
//       profit: '$800'
//     }, {
//       name: 'Gloves',
//       units: '213',
//       sales: '$100,032',
//       profit: '$22,004'
//     }, {
//       name: 'Soap',
//       units: '100',
//       sales: '$1,0695',
//       profit: '$5,112'
//     }, {
//       name: 'Toys',
//       units: '708',
//       sales: '$14,430',
//       profit: '$1,030'
//     }, {
//       name: 'Mirrors',
//       units: '9,901',
//       sales: '$600',
//       profit: '$30'
//     }, {
//       name: 'Games',
//       units: '5,000',
//       sales: '$12,115',
//       profit: '$15,321'
//     }, {
//       name: 'Bicycles',
//       units: '670',
//       sales: '$2,00',
//       profit: '$301'
//     }, {
//       name: 'Helmets',
//       units: '600',
//       sales: '$200',
//       profit: '$40'
//     }, {
//       name: 'Shirts',
//       units: '8,530',
//       sales: '$5,465',
//       profit: '$1,554'
//     }],
//     showToolPanel: true
//   }
// });


import Ember from 'ember';
import config from 'ember-get-config';
import layout from '../templates/components/v-grid';

const {
  Component,
  computed,
  run,
  assert
} = Ember;

export default Component.extend({

  layout: layout,
  classNames: ['ag-grid-container'],
  tagName: 'div',
  theme: 'ag-fresh',
  width: '100%',
  height: '400px',
  gridOptions: undefined,

  containerStyle: computed('width', 'height', function () {
    let width = this.get('width');
    let height = this.get('height');

    assert('invalid width property; use auto, px, % or em',
      this._escapeCSS(width)
    );

    assert('invalid height property; use auto, px, % or em',
      this._escapeCSS(height)
    );

    return Ember.String.htmlSafe(`width: ${width}; height: ${height};`);
  }),

  _escapeCSS(css) {
    return /(^auto$|^\d*px$|^\d*%$|^\d*em$)/.test(css);
  },

  didInsertElement() {
    this._super(...arguments);

    let defaults = {columnDefs: [], rowData: []};
    const agGridOptions = typeof config !== "undefined" ? config.agGrid : false;
    
    if (!this.get('gridOptions')) {
      this.set('gridOptions', defaults);
    }

    run.scheduleOnce('afterRender', () => {
      if (agGridOptions && agGridOptions.useEnterprise && agGridOptions.licenseKey) {
        agGrid.LicenseManager.setLicenseKey(agGridOptions.licenseKey);
      }

      new agGrid.Grid(this.$('.agGrid')[0], this.get('gridOptions'));

    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('gridOptions').api.destroy();
  }

});