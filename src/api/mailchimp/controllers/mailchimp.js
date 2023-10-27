'use strict';

/**
 * mailchimp controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { addMailchimp } = require('../../mailchimp');

module.exports = createCoreController('api::mailchimp.mailchimp', ({ strapi }) =>  ({
    async create(ctx) {
        const { data, meta } = await super.create(ctx);
        await addMailchimp(ctx.request.body);
        // console.log(data)
        return data;
      },
  }));


//   12239955accb82ef132de25cdef158bf-us21 Mailchimpapi key
//   7dd85ba0cd listid key