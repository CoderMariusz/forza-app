import { Client, ID, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64da51595a6e8d11082e');

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

console.log('Appwrite initialized');

export { client, account, database, storage, ID };
