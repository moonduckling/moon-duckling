class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="https://taiyo-harenohi.github.io/">Moon Duckling</a>
        </header>
    `
    }
}
customElements.define('my-header', MyHeader)


class MyNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="navigation">
            <ul>
                <li><button onclick="window.location.href='about.html'">about</button></li>
                <li><button onclick="window.location.href='commissions.html'">commission</button></li>
                <li><button onclick="window.location.href='art.html'">my work</button></li>
                <li><button onclick="window.location.href='socials.html'">socials</button></li>
            </ul>
        </section>
        `
    }
}
customElements.define('my-navigation', MyNavigation)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div>Made by @moon.duckling. </div>
           <div> All rights reserved.</div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

// Add the "loaded" class to the text after the page has loaded
window.onload = function() {
    document.querySelector('.my-text').classList.add('loaded');
};
