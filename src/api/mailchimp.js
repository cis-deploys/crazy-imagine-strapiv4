const Mailchimp = require('mailchimp-api-v3');

const apiKeyMailchimp = process.env.MAILCHIMP_API_KEY;
const listIdMailchimp = process.env.MAILCHIMP_LIST_KEY;

async function addMailchimp(content) {
  try {
    console.log(apiKeyMailchimp, listIdMailchimp);
    const client = new Mailchimp(apiKeyMailchimp);

    const response = await client.post(`/lists/${listIdMailchimp}/members`, {
      email_address: content.data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: content.data.name,
        LNAME: content.data.lastname,
      },
      tags: ['WebSub']
    });

    return response;
  } catch (error) {
    console.error(`Error al agregar miembro a lista de Mailchimp: ${error}`);
    // throw error;
  }
}

module.exports = {
    addMailchimp
};