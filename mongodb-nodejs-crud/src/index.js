const { MongoClient } = require('mongodb');

require('dotenv').config();

async function main() {
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qqejt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log('Connected successfully to mongodb server!');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
