/* sidebar.js — one job: a left slide-out sidebar (drawer).
 *
 * Drop <site-sidebar></site-sidebar> anywhere in <body> and load this script.
 * The hamburger (.nav_toggle) toggles it; backdrop click or Escape closes it.
 * The panel is intentionally empty for now — nav links go in .sidebar_panel later.
 */
class SiteSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar_backdrop"></div>
            <nav class="sidebar_panel" aria-label="Site navigation">
                <a class="sidebar_home" href="index.html">Home</a>

                <p class="sidebar_heading">Menu</p>
                <ul class="sidebar_menu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="game-audio.html">ReDesigns</a></li>
                    <li><a href="reels-linear-media.html">Reels</a></li>
                    <li><a href="linear-media.html">Linear Media</a></li>
                    <li><a href="vr-audio.html">VR & Game Audio</a></li>
                    <li><a href="composition.html">Composition</a></li>
                </ul>
            </nav>`;

        this.backdrop = this.querySelector('.sidebar_backdrop');

        // Delegated click: works regardless of header/sidebar load order.
        document.addEventListener('click', (e) => {
            if (e.target.closest('.nav_toggle')) {
                this.toggle();
            } else if (e.target === this.backdrop) {
                this.close();
            }
        });

        // Escape closes it.
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open() {
        this.classList.add('open');
        document.querySelector('.nav_toggle')?.setAttribute('aria-expanded', 'true');
    }

    close() {
        this.classList.remove('open');
        document.querySelector('.nav_toggle')?.setAttribute('aria-expanded', 'false');
    }

    toggle() {
        this.classList.contains('open') ? this.close() : this.open();
    }
}

customElements.define('site-sidebar', SiteSidebar);
