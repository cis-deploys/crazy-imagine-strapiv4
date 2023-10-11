'use strict';

/**
 * write service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::write.write');
