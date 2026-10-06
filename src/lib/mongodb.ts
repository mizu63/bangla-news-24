import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL!;

const globalForMongo = globalThis as unknown as {
  mongoClient: MongoClient | undefined;
};

export const client =
  globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const db = client.db("bangla-news-24");