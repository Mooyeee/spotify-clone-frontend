import React from 'react';
import './Sidebar.css';
import logo from '../../../../assets/logo.svg';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useStateProviderValue } from '../../../../Provider/StateProvider';
import likedSongs from '../../../../assets/liked_songs.jpg';

function Sidebar() {
  const [{ playlists, savedTracks }] = useStateProviderValue();

  return (
    <div className='sidebar'>
      <div className='sidebar_logo'>
        <img src={logo} alt='logo-sidebar'></img>
      </div>
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      <SidebarOption
        title='Liked Songs'
        img={likedSongs}
        type='Playlist'
        owner={savedTracks.total + ' tracks'}
      />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          img={playlist.images[0].url}
          owner={playlist.owner.display_name}
          type={playlist.type}
          key={playlist.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;
