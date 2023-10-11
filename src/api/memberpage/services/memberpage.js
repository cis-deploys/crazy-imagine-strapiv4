'use strict';

/**
 * memberpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memberpage.memberpage');
