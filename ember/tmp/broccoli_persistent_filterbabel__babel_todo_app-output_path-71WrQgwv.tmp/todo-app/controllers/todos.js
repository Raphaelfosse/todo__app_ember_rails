define('todo-app/controllers/todos', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.ArrayController.extend({
    actions: {
      createTodo: function () {
        // Get the todo title set by the "New Todo" text field
        var title = this.get('newTitle');
        if (!title.trim()) {
          return;
        }

        // Create the new Todo Model
        var todo = this.store.createRecord('todo', {
          title: title,
          isCompleted: false
        });

        // Clear the "New Todo" text field
        this.set('newTitle', '');

        // Save the new model
        todo.save();
      }
    },
    remaining: Ember.computed('@each.isCompleted', function () {
      return this.filterBy('isCompleted', false).get('length');
    }),

    inflection: Ember.computed('remaining', function () {
      var remaining = this.get('remaining');
      return remaining === 1 ? 'todo' : 'todos';
    })
  });
});