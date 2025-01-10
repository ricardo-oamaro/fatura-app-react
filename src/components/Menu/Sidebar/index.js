import { useState } from 'react';
import SidebarItem from '../SidebarItem';
import './sidebar.css';
import { AiOutlineHome } from "react-icons/ai";

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const sidebarItems = [
        { icon: AiOutlineHome, label: 'Home', to: '/' },
        { icon: AiOutlineHome, label: 'Despesas', to: '/expenses' },
    ];

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button onClick={toggleCollapse} className="collapse-button">
                {isCollapsed ? '>' : '<'}</button>
            <div className="sidebar__content">
                <ul>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem 
                        key={index} 
                        icon={item.icon} 
                        label={isCollapsed ? '' : item.label} 
                        to={item.to}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;