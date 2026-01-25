import db from '../db.js';

export function getSongs(req, res) {
    db.find({}, (err, songs) => {
        if (err) {
            res.status(500).send({ message: 'Error retrieving songs' });
        } else {
            res.send(songs);
        }
    });
}

export function addSong(req, res) {
    const song = req.body;

    db.findOne({ id: song.id }, (err, existingSong) => {
        if (err) {
            res.status(500).send({ message: 'Error checking song' });
        } else if (existingSong) {
            res.status(409).send({ message: 'Song with this id already exists' });
        } else {
            db.insert(song, (err, newSong) => {
                if (err) {
                    res.status(500).send({ message: 'Error creating song' });
                } else {
                    res.status(201).send(newSong);
                }
            });
        }
    });
}
