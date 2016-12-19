import Ember from 'ember';
import layout from '../templates/components/v-ragbox';

//Not going to use in dashboard currently.
//May be in future.
export default Ember.Component.extend({
  tagName : '',
  layout : layout,
  titleCls : "col-md-2 col-sm-4 col-xs-6 ",
  // data : '',
  data : { 
    id : 1,
    title :"Vishu",
    totalCount : "11111111111111",
    countDifference : "incresed",
    countedFromMsg : "From Last Week",
    countedFromCount :"11111" 
  }
});

