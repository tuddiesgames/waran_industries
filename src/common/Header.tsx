import React from 'react';
import { IonButton } from '@ionic/react';

const Header = () => {
    const menuItems = ['Home', 'Gallery', 'Softwares', 'Products', 'About'];

    return (
        <div className="header">
            {menuItems.map((item, index) => (
                <IonButton key={index} className="flex-col m-3 bg-yellow-500">{item}</IonButton>
            ))}
        </div>
    );
}

export default Header;
