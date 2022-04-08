/* eslint-env node */
'use strict';

module.exports = {
    // no-op since we're just adding dependencies
    normalizeEntityName() {},

    afterInstall() {
        return this.addAddonsToProject({
            packages: [{ name: '@fortawesome/ember-fontawesome', target: '^0.3.2' }]
        });
    }
};
