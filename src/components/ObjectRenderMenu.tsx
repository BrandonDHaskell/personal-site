import React from 'react';

interface MenuProps {
    handleColorChange: (
        event: React.MouseEvent<HTMLAnchorElement>,
        color: string
    ) => void;
}

export const ObjectRenderMenu: React.FC<MenuProps> = ({ handleColorChange }) => {
    return (
        <div>
            <ul>
                <li>
                    <a href="/orange" onClick={(event) => handleColorChange(event, 'orange')}>
                        Orange
                    </a>
                </li>
                <li>
                    <a href="/crimson" onClick={(event) => handleColorChange(event, 'crimson')}>
                        Crimson
                    </a>
                </li>
                <li>
                    <a href="/teal" onClick={(event) => handleColorChange(event, 'teal')}>
                        Teal
                    </a>
                </li>
                <li>
                    <a href="/steelblue" onClick={(event) => handleColorChange(event, 'steelblue')}>
                        Steelblue
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ObjectRenderMenu;