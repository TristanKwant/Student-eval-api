const assert = require('assert');
const app = require('../../src/app');

describe('\'batch\' service', () => {
  it('registered the service', () => {
    const service = app.service('batch');

    assert.ok(service, 'Registered the service');
  });
});
