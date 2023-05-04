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
                    <a href="/red" onClick={(event) => handleColorChange(event, 'red')}>
                        Red
                    </a>
                </li>
                <li>
                    <a href="/green" onClick={(event) => handleColorChange(event, 'green')}>
                        Green
                    </a>
                </li>
                <li>
                    <a href="/blue" onClick={(event) => handleColorChange(event, 'blue')}>
                        Blue
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ObjectRenderMenu;