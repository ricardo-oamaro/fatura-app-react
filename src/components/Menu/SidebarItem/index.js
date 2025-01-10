import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarItem.css';

const SidebarItem = ({ icon: Icon, label, to }) => {
    return (
        <li className="sidebar__item">
            <div className="sidebar__item-content">
                <Icon className="sidebar__item-icon" />
                {label && <Link
                    className="sidebar__item-text"
                    to={to}
                >
                    {label}

                </Link>}
            </div>
        </li>
    );
};

export default SidebarItem;