import * as service from '../services/apiv1songsidService.js';

export function findByid(req, res) {
    service.findByid(req, res);
}

export function updateSong(req, res) {
    service.updateSong(req, res);
}

export function deleteSong(req, res) {
    service.deleteSong(req, res);
}

