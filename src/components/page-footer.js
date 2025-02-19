import React from 'react';
// import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-links">
          <a href="mailto:jonathan.gartland@gmail.com" className="footer-link">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              className="footer-link-image"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-gartland-01b7ba16"
            className="footer-link"
          >
            <img
              src="LI-In-Bug.png"
              alt="Gmail"
              className="footer-link-image"
            />
          </a>

          <a
            href="https://github.com/jonathan-gartland"
            className="footer-link"
          >
            <img
              src="/Github_Logo_White.png"
              alt="Gmail"
              className="footer-link-image"
            />
          </a>

          <a
            href="https://www.buymeacoffee.com/jonathan.gartland"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
              alt="Buy Me A Coffee"
              height="41"
              width="174"
            />
          </a>
          {/*<a href="https://www.linkedin.com/in/your-profile" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>*/}
          {/*<a href="https://github.com/your-username" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>*/}
        </div>
      </div>
    </footer>
  );
};
