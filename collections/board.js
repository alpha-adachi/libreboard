
// Collections
Boards = new Meteor.Collection("boards");

if (Meteor.isClient) {
    BoardsQuery = CollectionQuery.extend({
        addBoard: function(title) {
            return this.collect(Boards).only(function(insert, update, remove, get, all) {
                // insert 
                return insert({ title: title });
            });
        },
        all: function() {
            return this.collect(Boards).only(function(insert, update, remove, get, all) {
                return all({});
            });
        }
    });
}
