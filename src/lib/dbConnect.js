import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.mongoUri;
if (!uri) throw new Error("❌ Missing MONGO_URI in .env.local");

// 🔥 Global client cache (Next.js hot reload safe)
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default async function dbConnect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db("buddyGarage").collection(collectionName);
}
