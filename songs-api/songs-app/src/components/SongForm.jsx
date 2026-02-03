import React, { useState, useEffect } from 'react';

const SongForm = ({ song, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        id: `song-${Date.now()}`,
        title: '',
        artist: '',
        releaseYear: new Date().getFullYear(),
        durationSeconds: 0,
        isExplicit: false
    });

    useEffect(() => {
        if (song) {
            setFormData(song);
        }
    }, [song]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Remove MongoDB _id and convert numeric fields
        const { _id, ...rest } = formData;
        const dataToSave = {
            ...rest,
            releaseYear: parseInt(formData.releaseYear, 10),
            durationSeconds: parseInt(formData.durationSeconds, 10)
        };
        onSave(dataToSave);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                <div className="bg-emerald-600 text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">{song ? 'Edit Song' : 'Add New Song'}</h2>
                    <button onClick={onClose} className="text-white hover:text-emerald-100">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {!song && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ID (Auto-generated)</label>
                            <input
                                type="text"
                                name="id"
                                value={formData.id || ''}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Artist</label>
                        <input
                            type="text"
                            name="artist"
                            value={formData.artist}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                            <input
                                type="number"
                                name="releaseYear"
                                value={formData.releaseYear}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Sec)</label>
                            <input
                                type="number"
                                name="durationSeconds"
                                value={formData.durationSeconds}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="isExplicit"
                            id="isExplicit"
                            checked={formData.isExplicit}
                            onChange={handleChange}
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isExplicit" className="ml-2 block text-sm text-gray-900">
                            Explicit Content
                        </label>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-medium shadow-sm"
                        >
                            Save Song
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SongForm;
