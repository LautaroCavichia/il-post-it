import React from 'react';
import { NavigationItem } from '../../../types';
import { generateNavigationItems } from '../../../data/mockDataGenerator';
import './MainNavigation.css';

const MainNavigation: React.FC = () => {
  const navigationItems: NavigationItem[] = generateNavigationItems();

  return (
    <nav className="main-navigation">
      <div className="container">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a href={item.url} className="nav-link">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;