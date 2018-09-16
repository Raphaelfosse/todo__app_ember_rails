define('todo-app/models/todo', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Todo = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    isCompleted: _emberData.default.attr('boolean')
  });

  Todo.reopenClass({
    FIXTURES: [{
      id: "1",
      title: 'install ember-cli',
      isCompleted: true
    }, {
      id: "2",
      title: 'install additional dependencies',
      isCompleted: true
    }, {
      id: "3",
      title: 'develop amazing things',
      isCompleted: false
    }] });

  exports.default = Todo;
});