// Custom Service Card Element
class ServiceCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Service';
        const description = this.getAttribute('description') || '';
        const image = this.getAttribute('image') || '';
        const icon = this.getAttribute('icon') || 'briefcase';
        const link = this.getAttribute('link') || '#';

        const iconSVGs = {
            lightbulb: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>',
            music: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>',
            laptop: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
            briefcase: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'
        };

        this.className = 'service-card';
        this.innerHTML = `
            <div class="service-card-inner">
                <img src="${image}" alt="${title}" class="service-image">
                <!--
                <div style="color: rgba(255,255,255,0.9);" class="mb-4">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${iconSVGs[icon] || iconSVGs.briefcase}
                    </svg>
                </div>
                -->
                <h3 class="text-2xl md:text-3xl font-bold mb-3">${title}</h3>
                <p class="text-base leading-relaxed service-description" style="color: rgba(255,255,255,0.8);">${description}</p>
                <a href="${link}" class="service-button">Meer informatie →</a>
            </div>
        `;
    }
}

customElements.define('service-card', ServiceCard);