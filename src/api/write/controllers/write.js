'use strict';

/**
 * write controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::write.write');
