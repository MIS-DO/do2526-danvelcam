import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import SongDetails from './components/SongDetails';
import { getSongs, createSong, updateSong, deleteSong } from './services/api';

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [viewingSong, setViewingSong] = useState(null);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const response = await getSongs();
      setSongs(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching songs:", err);
      setError("Failed to load songs. Please ensure the API is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingSong(null);
    setIsFormOpen(true);
  };

  const handleEdit = (song) => {
    setEditingSong(song);
    setIsFormOpen(true);
  };

  const handleSave = async (songData) => {
    try {
      if (editingSong) {
        await updateSong(editingSong.id, songData);
      } else {
        await createSong(songData);
      }
      setIsFormOpen(false);
      fetchSongs();
    } catch (err) {
      console.error("Error saving song:", err);
      alert("Failed to save song.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      try {
        await deleteSong(id);
        fetchSongs();
      } catch (err) {
        console.error("Error deleting song:", err);
        alert("Failed to delete song.");
      }
    }
  };

  const handleView = (song) => {
    setViewingSong(song);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header onAddLike={handleCreate} />

      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <SongList
            songs={songs}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}
      </main>

      {isFormOpen && (
        <SongForm
          song={editingSong}
          onClose={() => setIsFormOpen(false)}
          onSave={handleSave}
        />
      )}

      {viewingSong && (
        <SongDetails
          song={viewingSong}
          onClose={() => setViewingSong(null)}
        />
      )}
    </div>
  );
}

export default App;
