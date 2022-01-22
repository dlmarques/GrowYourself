import React from "react";
import "./About.scss";
import "animate.css";

const About = () => {
  return (
    <>
      <div className="containerabout">
        <div className="title">ABOUT & FAQS</div>
        <div className="textcontainer">
          <div className="textabout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            libero, gravida sit amet venenatis a, molestie nec metus. Praesent
            at odio non lacus pellentesque venenatis. Nulla tincidunt, nulla
            eget laoreet tincidunt, risus est dictum magna, ac accumsan nunc
            sapien sit amet metus. Aenean vel dignissim nibh, eu rutrum nibh.
            Vestibulum sed ultricies magna. Maecenas fermentum vel massa ac
            lobortis. Suspendisse potenti. Duis sit amet velit vitae libero
            tempor pellentesque vitae a erat. Mauris sed est leo. In hac
            habitasse platea dictumst. Morbi in augue a orci sagittis mattis.
            Nam ullamcorper, velit ac facilisis interdum, odio mi vestibulum
            magna, rhoncus porta quam metus vitae enim. Vestibulum feugiat nunc
            turpis, at vestibulum metus fermentum vel. Cras varius tellus eget
            vehicula ultrices.
          </div>
        </div>
        <div class="animate__animated animate__fadeInRight">
          <p class="heading">FAQs</p>
          <div class="faqs">
            <details>
              <summary>What is GrowYourself?</summary>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
            <details>
              <summary>Who is Founder of GrowYourself?</summary>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
            <details>
              <summary>What's the goal of this project?</summary>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
