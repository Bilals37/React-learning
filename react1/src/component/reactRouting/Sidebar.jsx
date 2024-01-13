import React from 'react'
import './slider.css'
import { SidebarData } from './SidebarData';
import CloseIcon from '@mui/icons-material/Close';


function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
      <li id="Close"><div className='closebtn' ><CloseIcon/></div></li>
        {SidebarData.map((val, key) => {
          return (
           
            <li key={key} className='Row'>
              <div id='icon'>{val.icon}</div>
              <div id='tital'>{val.tital}</div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Sidebar
