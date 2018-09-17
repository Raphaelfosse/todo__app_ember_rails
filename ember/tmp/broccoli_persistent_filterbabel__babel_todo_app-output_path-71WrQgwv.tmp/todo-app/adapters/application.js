define('todo-app/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.ActiveModelAdapter.extend({
    host: 'http://localhost:3000/api'
  });
});