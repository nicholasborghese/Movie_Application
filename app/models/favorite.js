import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  imdbID: attr('string'),
  poster: attr('string'),
  year: attr('string')
});
