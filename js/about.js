import html from './html.js';

function makeTemplate() {
    return html`
        <section class="photos">
            <div id="kristin">
                <p>Kristin Hortsch</p>
                <img src="images/kristin.jpeg" alt="photo-of-kristin"/>
            </div>
            
            <div id="ivan">
                <p>Ivan Poblete</p>
                <img src="images/Ivan.jpeg" alt="photo-of-Ivan"/>
            </div>

            <div id="jei">
                <p>Jei Shepherd</p>
                <img src="images/Jei.jpeg" alt="photo-of-Jei"/>
            </div>

            <div id="connor">
                <p>Connor Frendt</p>
                <img src="images/Connor.jpeg" alt="photo-of-Connor"/>
            </div>
        </section>
    `;
}

export default class Profiles {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

const profiles = new Profiles();
const root = document.getElementById('root');
root.appendChild(profiles.render());