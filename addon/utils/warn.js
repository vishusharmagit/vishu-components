// export default function warn() {
//   return true;
// }

import Ember from 'ember';

export default function( message ) {
    Ember.Logger.warn( message );
    return true;
}
