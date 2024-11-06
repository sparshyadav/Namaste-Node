const { MongoClient } = require("mongodb");

const url = "mongodb+srv://sparshyadavmrt:newpassword@cluster0.ajmb4.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected Successfully to Server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    // Read
    const findResult = await collection.find({}).toArray();
    console.log("Found Documents =>", findResult);

    // Insert 
    const data = {
        firstName: "Sparsh",
        LastName: "Yadav",
        city: "Meerut",
        country: "India"
    }

    const insertResult = await collection.insertMany([data]);
    console.log("Inerted Documents =>", insertResult);

    const countResult = await collection.countDocuments({});
    console.log("Count Documents =>", countResult);

    return "Done.";
}

main()
    .then(console.log())
    .catch(console.error)
    .finally(() => client.close());
