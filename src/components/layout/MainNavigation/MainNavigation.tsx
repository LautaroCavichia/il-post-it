import React from 'react';
import { NavigationItem } from '../../../types';
import { generateNavigationItems } from '../../../data/mockDataGenerator';
import './MainNavigation.css';

const MainNavigation: React.FC = () => {
  const navigationItems: NavigationItem[] = generateNavigationItems();

  return (
    <div className='main-navigation-container'>
      <nav className="main-navigation">
        <div className="my-nav-container">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a href={item.url} className="nav-link">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;