import Ember from 'ember';
import layout from '../templates/components/v-topbar-msg';

export default Ember.Component.extend({
  tagName : '',
  layout : layout,
  // data : '',
  data : [
  { 
    id: 1,
    userName:"Vishu",
    userEmail: 'vishusharmagit@gmail.com',
    messageContent: "Message From Server 1",
    messageTime: moment(),
    profileImageUrl:"http://vignette2.wikia.nocookie.net/althistory/images/a/a6/Venstre_(Denmark)_Logo.png/revision/latest?cb=20081224190313" 
  },
  { 
    id: 1,
    userName:"Vishu",
    userEmail: 'vishusharmagit@gmail.com',
    messageContent: "Message From Server 2",
    messageTime: new Date(),
    profileImageUrl:"http://vignette2.wikia.nocookie.net/althistory/images/a/a6/Venstre_(Denmark)_Logo.png/revision/latest?cb=20081224190313" 
  }
  ],
  messagesCount : Ember.computed('data', function() {
  	return this.get('data').length;
  })
});
