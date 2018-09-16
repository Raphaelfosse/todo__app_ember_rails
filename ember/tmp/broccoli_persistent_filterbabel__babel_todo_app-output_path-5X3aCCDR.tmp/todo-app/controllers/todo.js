define('todo-app/controllers/todo', ['exports', '@ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      editTodo: function () {
        this.set('isEditing', true);
      },
      acceptChanges: function () {
        this.set('isEditing', false);

        if (_ember.default.isEmpty(this.get('model.title'))) {
          this.send('removeTodo');
        } else {
          this.get('model').save();
        }
      },
      removeTodo: function () {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
      }
    },

    isEditing: false,
    isCompleted: function (key, value) {
      var model = this.get('model');

      if (value === undefined) {
        // property being used as a getter
        return model.get('isCompleted');
      } else {
        // property being used as a setter
        model.set('isCompleted', value);
        model.save();
        return value;
      }
    }('model.isCompleted')
  });
});