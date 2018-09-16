'use strict';



;define('todo-app/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.ActiveModelAdapter.extend({
    host: 'http://localhost:3000/api'
  });
});
;define('todo-app/app', ['exports', 'todo-app/resolver', 'ember-load-initializers', 'todo-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('todo-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('todo-app/controllers/todo', ['exports', '@ember'], function (exports, _ember) {
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
;define('todo-app/controllers/todos', ['exports'], function (exports) {
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
    remaining: function () {
      return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
      var remaining = this.get('remaining');
      return remaining === 1 ? 'todo' : 'todos';
    }.property('remaining')
  });
});
;define('todo-app/helpers/app-version', ['exports', 'todo-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('todo-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('todo-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('todo-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'todo-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('todo-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('todo-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('todo-app/initializers/export-application-global', ['exports', 'todo-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('todo-app/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('todo-app/models/todo', ['exports', 'ember-data'], function (exports, _emberData) {
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
;define('todo-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('todo-app/router', ['exports', 'todo-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('todos');
  });

  exports.default = Router;
});
;define('todo-app/routes/todos', ['exports'], function (exports) {
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
;define('todo-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("todo-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "m4Xxgq6p", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/application.hbs" } });
});
;define("todo-app/templates/todos", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AB4ndL/Q", "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"id\",\"todoapp\"],[9],[0,\"\\n  \"],[7,\"header\"],[11,\"id\",\"header\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"todos\"],[10],[0,\"\\n    \"],[7,\"input\"],[11,\"id\",\"new-todo\"],[11,\"placeholder\",\"What needs to be done?\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"id\",\"main\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"id\",\"todo-list\"],[9],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"completed\"],[9],[0,\"\\n        \"],[7,\"input\"],[11,\"class\",\"toggle\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Learn Ember.js\"],[10],[7,\"button\"],[11,\"class\",\"destroy\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"input\"],[11,\"class\",\"toggle\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"...\"],[10],[7,\"button\"],[11,\"class\",\"destroy\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"input\"],[11,\"class\",\"toggle\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"Profit!\"],[10],[7,\"button\"],[11,\"class\",\"destroy\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"input\"],[11,\"id\",\"toggle-all\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"footer\"],[11,\"id\",\"footer\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"id\",\"todo-count\"],[9],[0,\"\\n      \"],[7,\"strong\"],[9],[0,\"2\"],[10],[0,\" todos left\\n    \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"id\",\"filters\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"all\"],[11,\"class\",\"selected\"],[9],[0,\"All\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"active\"],[9],[0,\"Active\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"completed\"],[9],[0,\"Completed\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"button\"],[11,\"id\",\"clear-completed\"],[9],[0,\"\\n      Clear completed (1)\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"footer\"],[11,\"id\",\"info\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Double-click to edit a todo\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/todos.hbs" } });
});
;

;define('todo-app/config/environment', [], function() {
  var prefix = 'todo-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("todo-app/app")["default"].create({"name":"todo-app","version":"0.0.0+8174d448"});
          }
        
//# sourceMappingURL=todo-app.map
