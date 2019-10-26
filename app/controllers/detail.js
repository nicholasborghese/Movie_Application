import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      const newFavorite = this.store.createRecord('favorite', {
        title: this.get('model.movie.Title'),
        imdbID: this.get('model.movie.id'),
        poster: this.get('model.movie.Poster'),
        year: this.get('model.movie.Year')
      });      
      newFavorite.save()
        .then(() => {
          this.set('model.favorite', newFavorite)
        });
    },
    unsave() {
      this.get('model.favorite')
        .destroyRecord()
        .then(() => {
          this.set('model.favorite', undefined);
      });
    }
  }
});