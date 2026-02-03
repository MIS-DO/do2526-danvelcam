import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs, onEdit, onDelete, onView }) => {
    if (!songs || songs.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
                <p className="text-lg">No songs found.</p>
                <p className="text-sm mt-1">Add a new song to get started!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
                <SongCard
                    key={song.id}
                    song={song}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onClick={onView}
                />
            ))}
        </div>
    );
};

export default SongList;
