import {Client,Account,Databases} from 'appwrite'

const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6465a18b55f531cc84a8")

export const account = new Account(client)
export const databases = new Databases(client,"6465a1e5c4ed1e82b0f5")

