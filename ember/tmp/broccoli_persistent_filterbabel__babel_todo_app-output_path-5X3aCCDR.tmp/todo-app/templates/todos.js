define("todo-app/templates/todos", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VMFQE126", "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"id\",\"todoapp\"],[9],[0,\"\\n  \"],[7,\"header\"],[11,\"id\",\"header\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"todos\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"placeholder\",\"value\",\"action\"],[\"text\",\"new-todo\",\"What needs to be done?\",[23,[\"newTitle\"]],\"createTodo\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"id\",\"main\"],[9],[0,\"\\n  \"],[7,\"ul\"],[11,\"id\",\"todo-list\"],[9],[0,\"\\n\"],[4,\"each\",null,[[\"itemController\"],[\"todo\"]],{\"statements\":[[0,\"    \"],[7,\"li\"],[3,\"bind-attr\",null,[[\"class\"],[\"isCompleted:completed isEditing:editing\"]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isEditing\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"input\",null,[[\"insert-newline\"],[[27,\"action\",[[22,0,[]],\"acceptChanges\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"checked\",\"class\"],[\"checkbox\",[23,[\"isCompleted\"]],\"toggle\"]]],false],[0,\"\\n        \"],[7,\"label\"],[3,\"action\",[[22,0,[]],\"editTodo\"],[[\"on\"],[\"doubleClick\"]]],[9],[1,[21,\"title\"],false],[10],[0,\"\\n\\n      \"],[7,\"button\"],[11,\"class\",\"destroy\"],[3,\"action\",[[22,0,[]],\"removeTodo\"]],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n    \"],[7,\"input\"],[11,\"id\",\"toggle-all\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"footer\"],[11,\"id\",\"footer\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"id\",\"todo-count\"],[9],[0,\"\\n    \"],[7,\"strong\"],[9],[1,[21,\"remaining\"],false],[10],[0,\" \"],[1,[21,\"inflection\"],false],[0,\" left\\n  \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"id\",\"filters\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"all\"],[11,\"class\",\"selected\"],[9],[0,\"All\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"active\"],[9],[0,\"Active\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"completed\"],[9],[0,\"Completed\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"button\"],[11,\"id\",\"clear-completed\"],[9],[0,\"\\n      Clear completed (1)\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"footer\"],[11,\"id\",\"info\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Double-click to edit a todo\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/todos.hbs" } });
});