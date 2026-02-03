import React from 'react';

const SongCard = ({ song, onEdit, onDelete, onClick }) => {
    // Format duration from seconds to MM:SS
    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-emerald-100 cursor-pointer group"
            onClick={() => onClick(song)}
        >
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 truncate" title={song.title}>{song.title}</h3>
                    {song.isExplicit && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-bold">E</span>
                    )}
                </div>
                <p className="text-emerald-600 font-medium mb-1">{song.artist}</p>
                <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>📅 {song.releaseYear}</span>
                    <span>⏱️ {formatDuration(song.durationSeconds)}</span>
                </div>
            </div>
            <div className="bg-emerald-50 px-5 py-3 flex justify-end gap-2 border-t border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => { e.stopPropagation(); onEdit(song); }}
                    className="text-emerald-600 hover:text-emerald-800 font-medium text-sm px-3 py-1 bg-white rounded border border-emerald-200 hover:border-emerald-300"
                >
                    Edit
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(song.id); }}
                    className="text-red-500 hover:text-red-700 font-medium text-sm px-3 py-1 bg-white rounded border border-red-200 hover:border-red-300"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SongCard;
