import { getSongsCollection } from '../db.js';

export async function findByid(req, res) {
    try {
        const id = req.params.id;
        const song = await getSongsCollection().findOne({ id: id });

        if (!song) {
            res.status(404).send({ message: 'Song not found' });
            return;
        }
        res.send(song);
    } catch (err) {
        res.status(500).send({ message: 'Error retrieving song' });
    }
}

export async function updateSong(req, res) {
    try {
        const id = req.params.id;
        const updatedSong = req.body;
        const collection = getSongsCollection();

        const existingSong = await collection.findOne({ id: id });
        if (!existingSong) {
            res.status(404).send({ message: 'Song not found' });
            return;
        }

        await collection.updateOne({ id: id }, { $set: updatedSong });
        res.status(204).send();
    } catch (err) {
        res.status(500).send({ message: 'Error updating song' });
    }
}

export async function deleteSong(req, res) {
    try {
        const id = req.params.id;
        const collection = getSongsCollection();

        const existingSong = await collection.findOne({ id: id });
        if (!existingSong) {
            res.status(404).send({ message: 'Song not found' });
            return;
        }

        await collection.deleteOne({ id: id });
        res.status(204).send();
    } catch (err) {
        res.status(500).send({ message: 'Error deleting song' });
    }
}
