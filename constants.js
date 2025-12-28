// Contact Information Constants
const CONTACT = {
    phone: {
        display: '+31 6 2267 0480',
        link: 'tel:+31622670480'
    },
    email: {
        display: 'info@ttsl.nl',
        link: 'mailto:info@ttsl.nl'
    }
};

// Initialize contact info when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update all phone links and displays
    document.querySelectorAll('[data-contact="phone-link"]').forEach(el => {
        el.href = CONTACT.phone.link;
    });
    
    document.querySelectorAll('[data-contact="phone-display"]').forEach(el => {
        el.textContent = CONTACT.phone.display;
    });
    
    // Update all email links and displays
    document.querySelectorAll('[data-contact="email-link"]').forEach(el => {
        el.href = CONTACT.email.link;
    });
    
    document.querySelectorAll('[data-contact="email-display"]').forEach(el => {
        el.textContent = CONTACT.email.display;
    });
});
