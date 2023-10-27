'use strict';

/**
 * mailchimp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mailchimp.mailchimp');
