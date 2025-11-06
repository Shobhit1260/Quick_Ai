import React from 'react'

/**
 * Lottie dotlottie webcomponent loader wrapper.
 * Props:
 * - size: number (px)
 * - src: dotlottie URL
 */
export default function Loader({ size = 20, src = 'https://lottie.host/e4c88c2b-3b43-481b-8e10-333b14b2f280/eQoJOxVafX.lottie' }) {
  const style = { width: `${size}px`, height: `${size}px` };
  // React/TSX may complain about unknown JSX intrinsic elements. Use a ref to create the element imperatively.
  const ref = React.useRef(/** @type {HTMLDivElement|null} */ (null));
  React.useEffect(() => {
    if (!ref.current) return;
    // create the element if not present
    const existing = ref.current.firstChild;
    const existingEl = /** @type {HTMLElement|undefined} */ (existing || undefined);
    if (!existingEl || !(existingEl.tagName && existingEl.tagName.toLowerCase() === 'dotlottie-wc')) {
      const el = /** @type {HTMLElement} */ (document.createElement('dotlottie-wc'));
      el.setAttribute('src', src);
      el.setAttribute('autoplay', '');
      el.setAttribute('loop', '');
      el.style.width = style.width;
      el.style.height = style.height;
      // clear and append
      ref.current.innerHTML = '';
      ref.current.appendChild(el);
    } else {
      const el = /** @type {any} */ (existingEl);
      el.setAttribute('src', src);
      el.style.width = style.width;
      el.style.height = style.height;
    }
  }, [src, style.width, style.height]);

  return <div ref={ref} />;
}
