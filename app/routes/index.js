import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('movie', {
        s: 'top'
    });
}
});
