import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    keyForAttribute(key) {
        return key;
    },
    normalizeResponse(store, primaryModelClass, payload) {
        if (payload.Search) {
            payload.data = payload.Search;
            payload.data.forEach(item => {
                item.type = primaryModelClass.modelName;
                item.attributes = {
                Title: item.Title,
                Year: item.Year,
                Type: item.Type,
                Poster: item.Poster
                };
                delete item.Title;
                delete item.Year;
                delete item.Type;
                delete item.Poster;
            });
            delete payload.Search;
        } else {
            // Thiis is an example of using a single model/serializer to accomplish
            // querying for a single record.
            payload.data = {};
            payload.data.imdbID = payload.imdbID;
            payload.data.type = primaryModelClass.modelName;
            payload.data.attributes = {
                Title: payload.Title,
                Year: payload.Year,
                Type: payload.Type,
                Rated: payload.Rated,
                Runtime: payload.Runtime,
                Genre: payload.Genre,
                Director: payload.Director,
                Actors: payload.Actors,
                Poster: payload.Poster,
                Plot: payload.Plot,
                imdbRating: payload.imdbRating,
                imdbVotes: payload.imdbVotes
            };
        }
        return this._super(...arguments);
    }
});
