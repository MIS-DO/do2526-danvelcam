import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'songsdb';

let db = null;
let songsCollection = null;

const initialSongs = [
    {
        id: "1",
        title: "Borderline",
        artist: "Tame Impala",
        releaseYear: 2019,
        durationSeconds: 237,
        isExplicit: false
    },
    {
        id: "2",
        title: "Black Hole Sun",
        artist: "Soundgarden",
        releaseYear: 1994,
        durationSeconds: 320,
        isExplicit: false
    },
    {
        id: "3",
        title: "Creep",
        artist: "Radiohead",
        releaseYear: 1992,
        durationSeconds: 238,
        isExplicit: true
    },
    {
        id: "4",
        title: "My Own Summer (Shove It)",
        artist: "Deftones",
        releaseYear: 1997,
        durationSeconds: 204,
        isExplicit: false
    },
    {
        id: "5",
        title: "King Nothing",
        artist: "Metallica",
        releaseYear: 1996,
        durationSeconds: 328,
        isExplicit: false
    }
];

export async function connectDB() {
    if (db) return db;

    const client = new MongoClient(mongoUri);
    await client.connect();
    console.log('Connected to MongoDB');

    db = client.db(dbName);
    songsCollection = db.collection('songs');

    // Seed data if collection is empty
    const count = await songsCollection.countDocuments();
    if (count === 0) {
        await songsCollection.insertMany(initialSongs);
        console.log('Database seeded with initial songs');
    }

    return db;
}

export function getSongsCollection() {
    return songsCollection;
}

export default { connectDB, getSongsCollection };
