import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.mongoUri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const clientPromise =
  process.env.NODE_ENV === "development"
    ? global._mongoClientPromise ?? (global._mongoClientPromise = client.connect())
    : client.connect();

export default async function dbConnect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db("buddyGarage").collection(collectionName);
}
