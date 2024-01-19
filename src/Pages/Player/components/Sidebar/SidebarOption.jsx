import React from 'react';
import './SidebarOption.css';

function SidebarOptions({ title, Icon, img, owner, type }) {
  return (
    <React.Fragment>
      {Icon ? (
        <OptionRow title={title} Icon={Icon} />
      ) : (
        <PlaylistRow title={title} img={img} owner={owner} type={type} />
      )}
    </React.Fragment>
  );
}

export default SidebarOptions;

function PlaylistRow({ title, img, owner, type }) {
  return (
    <div className='playlist_row'>
      <div className='playlist_img'>
        <img src={img} alt='Playlist img' />
      </div>
      <div className='playlist_texts'>
        <p className='playlist_title'>{title}</p>
        <p className='playlist_subtitle'>
          {type} • {owner}
        </p>
      </div>
    </div>
  );
}

function OptionRow({ title, Icon }) {
  return (
    <div className='option_row'>
      <Icon className='option_icon' />
      <h4 className='option_title'>{title}</h4>
    </div>
  );
}
