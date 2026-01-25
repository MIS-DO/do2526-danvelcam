import * as service from '../services/apiv1songsService.js';

export function getSongs(req, res) {
    service.getSongs(req, res);
}

export function addSong(req, res) {
    service.addSong(req, res);
}

