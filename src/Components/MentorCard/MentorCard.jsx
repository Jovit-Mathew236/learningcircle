import React from "react";
import styles from "./MentorCard.module.css";
import Avatar from "@mui/material/Avatar";

import linkedin from "./assets/linkedin.png";
import placeholder from "./assets/placeholder.jpeg";

const MentorCard = ({
  name,
  designation,
  image,
  linkedIn,
  interest,
  source,
  clink,
  mclink,
}) => {
  return (
    <div className={styles.mentor_card_container}>
      <div className={styles.mentor_card}>
        <div className={styles.box}>
          {image && <img src={image} alt="" className={styles.mentorimg} />}
          <div className={styles.textdiv}>
            {interest && <p className={styles.mentor_interest}>{interest}</p>}

            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              {linkedIn && (
                <img src={linkedin} alt="" className={styles.linkedinimg} />
              )}
            </a>
          </div>
        </div>

        <p className={styles.mentor_name}>{name}</p>

        <p className={styles.mentor_designation}>{designation}</p>
        <p className={styles.mentor_source}>{source}</p>

        {clink && (
          <a href={clink} target="_blank" rel="noopener noreferrer">
            {" "}
            <button className={styles.comingsoon}>Checkout Course</button>
          </a>
        )}
        {mclink && (
          <a href={mclink}>
            {" "}
            <button className={styles.comingsoon}>Checkout Challenge</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default MentorCard;
