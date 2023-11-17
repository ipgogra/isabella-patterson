import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialprof } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprof.github && (
          <li>
            <a href={socialprof.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprof.linkedin && (
          <li>
            <a href={socialprof.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
