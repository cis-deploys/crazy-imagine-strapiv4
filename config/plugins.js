module.exports = ({ env }) => ({
    email: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "support@crazyimagine.com",
        defaultReplyTo: "support@crazyimagine.com",
      },
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: 'public-read', // <== set ACL to private
            // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET_NAME'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // upload: {
    //   provider: "aws-s3", 
    //   providerOptions: {
    //     accessKeyId: env("AWS_ACCESS_KEY_ID"),
    //     secretAccessKey: env("AWS_ACCESS_SECRET"),
    //     region: env("AWS_REGION"),
    //     params: {
    //       Bucket: env("AWS_BUCKET_NAME"),
    //     },
    //   },
    // },
    // upload: {
    //   config: {
    //     provider: 'cloudinary',
    //     providerOptions: {
    //       cloud_name: env('CLOUDINARY_CLOUD_NAME'),
    //       api_key: env('CLOUDINARY_API_KEY'),
    //       api_secret: env('CLOUDINARY_API_SECRET'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },
  });