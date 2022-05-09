const { MongoClient } = require('mongodb');

require('dotenv').config();

async function main() {
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qqejt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log('Connected successfully to mongodb server!\n');

    // Retrieve datas
    await listAllSuperheroes(client);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

// ! CRUD

// Read
async function listAllSuperheroes(client) {
  const db = await client.db('superheroesAPI');

  const allSuperheroes = await db.collection('superheroes').find().toArray();

  allSuperheroes.forEach(superhero => {
    console.log(`Name: ${superhero['name']}\nAlias: ${superhero['alias']}\n`);
  });
}
