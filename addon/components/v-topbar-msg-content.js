import Ember from 'ember';
import layout from '../templates/components/v-topbar-msg-content';

export default Ember.Component.extend({
	tagName : '',
  layout : layout,
  userName : null,
  messageTime : null,
  messageContent : null,
  profileImageUrl : null,
});
