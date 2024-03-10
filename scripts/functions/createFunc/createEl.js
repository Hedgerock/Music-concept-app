export function createElem(props) {
    const { tag, className, textContent, href, dataId, dataTitle, src, target, type, innerHTML, tabIndex} = props;

    const el = document.createElement(tag);
    el.className = className || '';

    if (textContent) { el.textContent = textContent };

    if (innerHTML) { el.innerHTML = innerHTML };

    if (href) { el.href = href };

    if (tabIndex) { el.setAttribute('tabindex', tabIndex) };

    if (dataId) { el.dataset.id = dataId }

    if (dataTitle) { el.title = dataTitle }

    if (type) { el.type = type }

    if (target) { el.target = target }

    if (src) { el.src = src }

    return el
}