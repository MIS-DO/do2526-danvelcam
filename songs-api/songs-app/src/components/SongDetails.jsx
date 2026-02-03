import React from 'react';

const SongDetails = ({ song, onClose }) => {
    if (!song) return null;

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} min ${remainingSeconds} sec`;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="bg-emerald-600 text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Song Details</h2>
                    <button onClick={onClose} className="text-white hover:text-emerald-100">&times;</button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{song.title}</h3>
                        <p className="text-lg text-emerald-600 font-medium">{song.artist}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block text-gray-500 mb-1">Release Year</span>
                            <span className="font-semibold text-gray-800">{song.releaseYear}</span>
                        </div>
                        <div>
                            <span className="block text-gray-500 mb-1">Duration</span>
                            <span className="font-semibold text-gray-800">{formatDuration(song.durationSeconds)}</span>
                        </div>
                        <div>
                            <span className="block text-gray-500 mb-1">Explicit Content</span>
                            <span className={`font-semibold ${song.isExplicit ? 'text-red-500' : 'text-green-500'}`}>
                                {song.isExplicit ? 'Yes' : 'No'}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500 mb-1">ID</span>
                            <span className="font-mono text-xs text-gray-400">{song.id}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-medium shadow-sm"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SongDetails;
