const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1772k2lv13vts",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://raop4cfhd8.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aP0Hjg1Mw",
    APP_CLIENT_ID: "46fa627guku0aeu4t5jc2qvdv0",
    IDENTITY_POOL_ID: "us-east-2:2d9740a6-6309-4432-83fc-099df0050705",
  },
};

export default config;
