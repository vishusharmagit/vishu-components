import Ember from 'ember';

export default Ember.Controller.extend({

  //Components properties Start
  
  //Vishu  : For 'v-input' data
  colors: [
    { id: 'Black' },
    { id: 'Blue' },
    { id: 'Gray' },
    { id: 'Green' },
    { id: 'Orange' },
    { id: 'Purple' },
    { id: 'Red' },
    { id: 'White' },
    { id: 'Yellow' }
  ],

  names: [
    "Vishu",
    "Sharma",
    "Varun"
  ],
  //Vishu  : For 'v-input' data
  //Vishu  : For 'v-radio-group' data
  currentColor: 'blue',
  //Vishu  : For 'v-radio-group' data

  //Vishu  : For 'v-span' data
  isLoading: true,
  initialize: Ember.on(
    'init',
    function() {
      setTimeout( () => {
          this.set( 'isLoading', false );
      }, 5000 );
    }
  ),
  //Vishu  : For 'v-span' data

  //Vishu  : For 'v-select' data
  numbers: [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ],
  selectColors: Ember.A([
            {
                label: 'Red',
                description: 'Apples',
                value: 'red'
            },
            {
                label: 'Orange',
                description: 'Oranges',
                value: 'orange'
            },
            {
                label: 'Yellow',
                description: 'Bananas',
                value: 'yellow'
            },
            {
                label: 'Green',
                description: 'Avocados',
                value: 'green'
            },
            {
                label: 'Purple',
                description: 'Blueberries',
                value: 'purple'
            },
            {
                label: 'Splorge',
                description: '???',
                value: 'splorge'
            }
        ]),
  //Vishu  : For 'v-select' data

  //Vishu  : For 'v-progress-bar' data
  dynamicValue: 21,
  //Vishu  : For 'v-progress-bar' data


  //Vishu  : For 'v-accordion-panel' data
  basicSelectedPanel: 'Panel B',
  basicAccordionPanels : Ember.A([{
      title : 'Panel A',
      content:'Panel A Content'
  }, {
       title : 'Panel B',
      content:'Panel B Content'
  }, {
       title : 'Panel C',
      content:'Panel C Content'
  }]),

  selectedPanel: 'Panel 1',
  accordionPanels : Ember.A([{
      title : 'Panel 1',
      content:'Panel 1 Content',
      theme: 'primary'
  }, {
      title : 'Panel 2',
      content: 'Panel 2 Content',
      theme: 'success'
  }, {
      title : 'Panel 3',
      content: 'Panel 3 Content',
      theme: 'warning'
  }, {
      title : 'Panel 4',
      content:'Panel 4 Content',
      theme: 'info'
  }, {
      title : 'Panel 5',
      content: 'Panel 5 Content',
      theme: 'danger'
  }]),

  selectedPanel2: 'Panel 2.2',
  accordionPanels2 : Ember.A([{
      title : 'Panel 2.1',
      content:'Panel 2.1 Content',
      theme: 'primary'
  }, {
      title : 'Panel 2.2',
      content:'Panel 2.2 Content',
      theme: 'success'
  }, {
      title : 'Panel 2.3',
      content:'Panel 2.3 Content',
      theme: 'warning'
  }, {
      title : 'Panel 2.4',
      content:'Panel 2.4 Content',
      theme: 'info'
  }, {
      title : 'Panel 2.5',
      content:'Panel 2.5 Content',
      theme: 'danger'
  }]),
  //Vishu  : For 'v-accordion-panel' data





  //Components properties End


  dummyTheme: 'v-grid-theme',
  dummyGridOptions: {

    //Basic Sorting
    enableSorting: true,
    animateRows: true,
    sortingOrder: ['desc', 'asc', null],

    //Basic Filtering : https://www.ag-grid.com/javascript-grid-filtering/
    enableFilter: true,

    //Basic Pagination : Need to work on it.
    // paginationPageSize: 5,
    // rowModelType: 'pagination',

    columnDefs: [{
        headerName: "Product",
        field: "name",
        filter: 'text',
        filterParams: { apply: true, newRowsAction: 'keep' }
      }, {
        headerName: 'Units',
        field: 'units',
        filter: 'number',
        filterParams: { apply: true, newRowsAction: 'keep' }
      }, {
        headerName: 'Sales',
        field: 'sales',
        filter: 'text'
      }, {
        headerName: 'Profit',
        field: 'profit',
        filter: 'number' //Not working, I think becuase of data type. :)
      }, {
        headerName: 'Profit1',
        // field: 'profit1'
        filter: 'text',
        // the grid works with embedded fields
        field: "profit1.name"
      },


      // or use the object value, so value passed around is an object
      {
        headerName: "Profit2",
        filter: 'text',
        field: "profit1",
        cellRenderer: function(params) {
          return '<b>' + params.value.name + '</b>';
        },
        // this is needed to avoid toString=[object,object] result with objects
        getQuickFilterText: function(params) {
          return params.value.name;
        }
      },




      {
        headerName: 'Profit3',
        field: 'profit'
      }, {
        headerName: 'Profit4',
        field: 'profit'
      }
    ],
    rowData: [{
      name: 'Chips',
      units: '223',
      sales: '$54,335',
      profit: '$545,454',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Towels',
      units: '965',
      sales: '$1,900',
      profit: '$800',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Gloves',
      units: '213',
      sales: '$100,032',
      profit: '$22,004',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Soap',
      units: '100',
      sales: '$1,0695',
      profit: '$5,112',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Toys',
      units: '708',
      sales: '$14,430',
      profit: '$1,030',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Mirrors',
      units: '9,901',
      sales: '$600',
      profit: '$30',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Games',
      units: '5,000',
      sales: '$12,115',
      profit: '$15,321',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Bicycles',
      units: '670',
      sales: '$2,00',
      profit: '$301',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Helmets',
      units: '600',
      sales: '$200',
      profit: '$40',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }, {
      name: 'Shirts',
      units: '8,530',
      sales: '$5,465',
      profit: '$1,554',
      profit1: {
        name: 'V' + Math.floor(Math.random() * 10000)
      }
    }],
    // showToolPanel: true //Vishu : We are getting warning for it. It is available only in Paid Version.
  },
  


  actions: {
    filterChanged(value) {
      //this.get('categories').api.setQuickFilter(value);
    },
    selectTheme(theme) {
      this.set('dummyTheme', theme);
    },

  //Vishu  : For 'v-accordion-panel' data
    accordionPanelClickTest(e) {
      //Here, 'e' will be panel title.
      //this.sendAction('action', e);
      Ember.Logger.log("Application Test --> e");
      Ember.Logger.log(e);
      
    },
  //Vishu  : For 'v-accordion-panel' data

  }

});
