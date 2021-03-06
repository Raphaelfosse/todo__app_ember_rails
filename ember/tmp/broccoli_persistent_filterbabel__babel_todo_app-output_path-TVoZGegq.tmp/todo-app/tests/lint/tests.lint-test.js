define('todo-app/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/todo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/todo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/todos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/todos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/todo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/todo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/todos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/todos-test.js should pass ESLint\n\n');
  });
});