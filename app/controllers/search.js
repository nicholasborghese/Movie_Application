import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['s'],
    actions: {
        submit(search) {
            this.transitionToRoute('search', {queryParams: {s: search}})
        }
    }
});
