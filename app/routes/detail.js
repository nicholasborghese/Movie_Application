import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    const variables = {
      id: params.id
    };
    return RSVP.hash({
      movie: this.store.queryRecord('movie', {i: params.id}),
      favorite: this.store
        .query('favorite', { 
          filter: {
            imdbID: params.id
          }
        })
        .then(favorites => {
          return favorites.get('firstObject');
        })
    });
  }
});
