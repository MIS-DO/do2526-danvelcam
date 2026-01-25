import Datastore from '@seald-io/nedb';

const dbPath = process.env.DB_PATH || './data/songs.db';
const db = new Datastore({ filename: dbPath, autoload: true });

// Seed data - 4 initial songs
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
    }
];

// Initialize DB with seed data
db.count({}, (err, count) => {
    if (count === 0) {
        db.insert(initialSongs, (err) => {
            if (err) {
                console.error('Error seeding database:', err);
            } else {
                console.log('Database seeded with initial songs');
            }
        });
    }
});

export default db;
