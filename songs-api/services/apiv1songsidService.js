import db from '../db.js';

export function findByid(req, res) {
    const id = req.params.id;

    db.findOne({ id: id }, (err, song) => {
        if (err) {
            res.status(500).send({ message: 'Error retrieving song' });
        } else if (!song) {
            res.status(404).send({ message: 'Song not found' });
        } else {
            res.send(song);
        }
    });
}

export function updateSong(req, res) {
    const id = req.params.id;
    const updatedSong = req.body;

    db.findOne({ id: id }, (err, existingSong) => {
        if (err) {
            res.status(500).send({ message: 'Error checking song' });
        } else if (!existingSong) {
            res.status(404).send({ message: 'Song not found' });
        } else {
            db.update({ id: id }, { $set: updatedSong }, {}, (err) => {
                if (err) {
                    res.status(500).send({ message: 'Error updating song' });
                } else {
                    res.status(204).send();
                }
            });
        }
    });
}

export function deleteSong(req, res) {
    const id = req.params.id;

    db.findOne({ id: id }, (err, existingSong) => {
        if (err) {
            res.status(500).send({ message: 'Error checking song' });
        } else if (!existingSong) {
            res.status(404).send({ message: 'Song not found' });
        } else {
            db.remove({ id: id }, {}, (err) => {
                if (err) {
                    res.status(500).send({ message: 'Error deleting song' });
                } else {
                    res.status(204).send();
                }
            });
        }
    });
}
