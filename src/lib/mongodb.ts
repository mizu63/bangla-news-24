import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("MONGODB_URL is not defined");
}

const client = new MongoClient(uri);

const db = client.db("bangla-news-24");

export { client, db };