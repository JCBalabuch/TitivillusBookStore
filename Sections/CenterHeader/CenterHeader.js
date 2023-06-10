import "./CenterHeader.css";

const NavCenterHeader = (links) => {
    return `
    <nav>
        <ul>
            ${links.map((links) => `
                <li>
                    <a href=${link.link} id=${link.id}>${link.name}</a>
                </li>
            `).join("")}
        </ul>
    </nav>
    `;
};

export default NavCenterHeader;