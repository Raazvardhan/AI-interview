/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mocker_owner:9nmoX5edMAOW@ep-summer-recipe-a59dbr9e.us-east-2.aws.neon.tech/mocker?sslmode=require',
    }
  };