const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-python",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9h4jugdwa2.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_nrNxUBlUB",
    APP_CLIENT_ID: "3ava5o3mva0is75ihm27ukc3qm",
    IDENTITY_POOL_ID: "us-east-2:0ccce5fd-c70d-4547-9096-5a9f15381d79",
  },
};

export default config;
