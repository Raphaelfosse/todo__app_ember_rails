QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/todo.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/todo.js should pass ESLint\n\n3:10 - \'isEmpty\' is defined but never used. (no-unused-vars)\n13:11 - Use import { isEmpty } from \'@ember/utils\'; instead of using Ember.isEmpty (ember/new-module-imports)');
});

QUnit.test('controllers/todos.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/todos.js should pass ESLint\n\n23:14 - Don\'t use Ember\'s function prototype extensions (ember/no-function-prototype-extensions)\n27:15 - Don\'t use Ember\'s function prototype extensions (ember/no-function-prototype-extensions)');
});

QUnit.test('models/todo.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/todo.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/todos.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/todos.js should pass ESLint\n\n');
});

