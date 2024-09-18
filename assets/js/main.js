const old_windows_container = document.getElementById('old-windows');
const material_container = document.getElementById('material-style');
const old_windows_background_color = "#008080";
const material_background_color = "#f9dec9";

let is_maximized = false;

function interpolateColor(color1, color2, factor) {
    const hex = (color) => {
        const bigint = parseInt(color.slice(1), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };

    const [r1, g1, b1] = hex(color1);
    const [r2, g2, b2] = hex(color2);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `rgb(${r}, ${g}, ${b})`;
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percentageVisible = entry.intersectionRatio * 100;
            old_windows_container.style.opacity = percentageVisible / 100;
            material_container.style.opacity = 1 - percentageVisible / 100;
            const interpolatedColor = interpolateColor(material_background_color, old_windows_background_color, entry.intersectionRatio);
            document.body.style.backgroundColor = interpolatedColor;
        } else {
            console.log('Percentage of old_windows_container visible: 0%');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Create thresholds from 0 to 1 in increments of 0.01
});

observer.observe(old_windows_container);

function maximize() {
    const main_window = document.getElementById('window');
    const window_container = document.querySelector(".main-window-container")
    if (is_maximized) {
        window_container.classList.remove("maximized");
        main_window.classList.remove("maximized");
    } else {
        window_container.classList.add("maximized");
        main_window.classList.add("maximized");
    }   
    is_maximized = !is_maximized;
}

function close_window() {
    if (is_maximized) {
        maximize();
    }
    const main_window = document.getElementById('window');
    main_window.style.display = "none";
    setTimeout(() => {
        main_window.classList.add("window-anim");
        main_window.style.display = "block";
        setTimeout(() => {
            main_window.classList.remove("window-anim");
        }, 1000);
    }, 1000);
}

function minimize() {
    const main_window = document.getElementById('window');
    main_window.classList.add("window-minimize");
    setTimeout(() => {
        main_window.style.display = "none";
        main_window.classList.remove("window-minimize");
        setTimeout(() => {
            main_window.classList.add("window-restore");
            main_window.style.display = "block";
            setTimeout(() => {
                main_window.classList.remove("window-restore");
            }, 1000);
        }, 1000);
    }, 1000);
}