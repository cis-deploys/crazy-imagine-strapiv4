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
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: env('NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN'),
        sites: [
          {
            name: 'crazyimagine-nextjs',
            id: "bca1cdb0-58d0-4803-8ca5-fd37db559742",
            buildHook: "https://api.netlify.com/build_hooks/653ff609fe789327cc3e9588",
            branch: 'main'
          }
        ]
      }
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