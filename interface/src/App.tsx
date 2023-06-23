import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { 
  LandingPage,
  DashboardPage,
  ViewPlaylistsPage,
  EditLabelsPage,
  OrganizeLibraryPage,
  SettingsPage, 
} from './pages';

function App() {
  // TODO: Add protected routes for authentication using access token
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/playlists" element={<ViewPlaylistsPage />} />
          <Route path="/edit-labels" element={<EditLabelsPage />} />
          <Route path="/library" element={<OrganizeLibraryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
