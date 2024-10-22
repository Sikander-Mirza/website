import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from react-icons

const WhatsAppLink = () => {
    const handleWhatsAppClick = (e) => {
        e.preventDefault(); 
        
        const phoneNumber = "923272075510"; // Replace with your actual phone number
        const message = "Hello!"; // Replace with your actual message
        
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL with the correct format
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <a
            href="#"
            onClick={handleWhatsAppClick}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000,
                backgroundColor: '#25D366', // WhatsApp green background
                color: 'white',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        >
            <FaWhatsapp size={30} />
        </a>
    );
};

export default WhatsAppLink;
