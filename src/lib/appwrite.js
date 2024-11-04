import { Client, Account } from "appwrite";

export const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("6727331a0015542088e7"); 

export const account = new Account(client);
export { ID } from "appwrite";
