import React from 'react';

const Header = ({ onAddLike }) => {
    return (
        <header className="bg-emerald-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    🎵 Songs API
                </h1>
                <button
                    onClick={onAddLike}
                    className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-sm"
                >
                    + Add Song
                </button>
            </div>
        </header>
    );
};

export default Header;
