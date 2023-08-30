import { footerTags } from "@/data";
import "./footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="desc-container">
        <h3>Footer</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          corrupti mollitia exercitationem temporibus minima, doloremque in
          consectetur molestias maxime, iusto aspernatur nostrum! Rerum eveniet
          ab quasi soluta non a quia.
        </p>
      </div>
      <div className="tag-container">
        <h3>Tags</h3>
        <div className="tag-items">
          {footerTags.map((tag) => {
            return (
              <div className="tag">
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
