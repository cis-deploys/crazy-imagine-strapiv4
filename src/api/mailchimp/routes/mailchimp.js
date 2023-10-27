'use strict';

/**
 * mailchimp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mailchimp.mailchimp');
