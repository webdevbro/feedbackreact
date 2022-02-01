import React from "react";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <div className="container">
      <Card reverse={false}>
        <div className="about">
          <h2>About our cool app</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus
            ipsam ullam minus dolorum hic doloribus, excepturi exercitationem
            nihil vitae?
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
