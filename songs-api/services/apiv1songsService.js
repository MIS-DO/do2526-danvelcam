import { getSongsCollection } from '../db.js';

export async function getSongs(req, res) {
    try {
        const songs = await getSongsCollection().find({}).toArray();
        res.send(songs);
    } catch (err) {
        res.status(500).send({ message: 'Error retrieving songs' });
    }
}

export async function addSong(req, res) {
    try {
        const song = req.body;
        const collection = getSongsCollection();

        const existingSong = await collection.findOne({ id: song.id });
        if (existingSong) {
            res.status(409).send({ message: 'Song with this id already exists' });
            return;
        }

        await collection.insertOne(song);
        res.status(201).send(song);
    } catch (err) {
        res.status(500).send({ message: 'Error creating song' });
    }
}
