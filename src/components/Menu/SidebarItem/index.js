import React from 'react';

const SidebarItem = ({ icon: Icon, label }) => {
    return (
        <li className="sidebar__item">
            <div className="sidebar__item-content">
                <Icon className="sidebar__item-icon" />
                {label && <span className="sidebar__item-text">{label}</span>}
            </div>
        </li>
    );
};

export default SidebarItem;