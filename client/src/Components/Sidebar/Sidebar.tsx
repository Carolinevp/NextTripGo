import React, { Dispatch, SetStateAction } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import './Sidebar.css';

import SubMenu from './SubMenu';
import { routes } from './SidebarRoutes';

interface IProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}


function Sidebar({ sidebar, setSidebar }: IProps) {
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div
        className={
          sidebar ? 'trip-sidebar-nav shadow' : 'trip-sidebar-nav-closed'
        }
      >
        <div className={sidebar ? 'trip-sidebar-wrap' : 'trip-sidebar-hidden'}>
          <div className={'trip-sidebar-icon'}>
            <NavigateBeforeIcon
              className="cursor-pointer"
              color={'action'}
              onClick={showSidebar}
            />
          </div>
          <Link to="/">
            <img alt="logo" className="trip-logo" width="90%" src={Logo} />
          </Link>
          {routes.map((element, index) => {
            return <SubMenu item={element} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
