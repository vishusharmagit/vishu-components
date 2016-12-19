import Ember from 'ember';
import layout from '../templates/components/v-ragbox-content';

export default Ember.Component.extend({
  tagName : '',
  layout : layout,
  title : null, //Title of box
  totalCount : null, //Total count of box
  countedFromCount : null, //Either incremented or decremented value in number.
  countedFromMsg : "From last Week", //It will be default, otherwise user can provide.
  countDifference : null, //It is default value for it. But it going to have one of 
  //these three values 'incresed', 'decreased' & 'no-change'
  // countDifference : "incresed",
  // countDifference : "decreased",
  // countDifference : "no-change",
  countColor : Ember.computed('countDifference', function() {
  	return (this.get('countDifference') === "incresed") ? 'green' : 'red';
  }),
  countSort : Ember.computed('countDifference', function() {
  	return (this.get('countDifference') === "incresed") ? 'asc' : 'desc';
  }),
  footerContent : Ember.computed('countDifference', function() {
  	let cd = this.get('countDifference');
  	return (Ember.isEmpty(cd) || cd === "no-change") ? false : true;
  }),
});
