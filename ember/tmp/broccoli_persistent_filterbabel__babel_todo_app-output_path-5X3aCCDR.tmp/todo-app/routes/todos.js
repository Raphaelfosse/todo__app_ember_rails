define('todo-app/routes/todos', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function () {
      return this.store.find('todo');
    }
  });
});