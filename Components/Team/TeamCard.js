import React from "react";

const TeamCard = () => {
  return (
    <>
      {TeamPeople.map((team) => {
        const {
          image,
          name,
          job,
          facebook,
          linkedin,
          instagram,
          twitter,
          profile,
        } = team;
        return <div></div>;
      })}
    </>
  );
};

export default TeamCard;
