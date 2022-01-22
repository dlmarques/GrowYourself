import React from "react";
import "./Plans.scss";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Plans = () => {
  return (
    <>
      <section class="price-comparison">
        <div class="price-column">
          <div class="price-header">
            <div class="price">
              <div class="dollar-sign">$</div>
              29
              <div class="per-month">/mo</div>
            </div>
            <div class="plan-name">Basic</div>
          </div>
          <div class="divider"></div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Training Plan
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Meal Plan
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />
            We added our coach's whatsapp
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />% off our supplement store
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />
            Live training
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />
            24h Monitoring
          </div>
          <button class="cta">Here We Go!</button>
        </div>
        <div class="price-column popular">
          <div class="most-popular">Most Popular</div>
          <div class="price-header">
            <div class="price">
              <div class="dollar-sign">$</div>
              69
              <div class="per-month">/mo</div>
            </div>
            <div class="plan-name">Ultimate</div>
          </div>
          <div class="divider"></div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Training Plan
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Meal Plan
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            We added our coach's whatsapp
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />% off our supplement store
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Live training
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            24h Monitoring
          </div>
          <button class="cta">Here We Go!</button>
        </div>
        <div class="price-column">
          <div class="price-header">
            <div class="price">
              <div class="dollar-sign">$</div>
              49
              <div class="per-month">/mo</div>
            </div>
            <div class="plan-name">Basic</div>
          </div>
          <div class="divider"></div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Training Plan
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            Personalized Meal Plan
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />
            We added our coach's whatsapp
          </div>
          <div class="feature">
            <AiOutlineCheck id="check" />% off our supplement store
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />
            Live training
          </div>
          <div class="feature inactive">
            <AiOutlineClose id="inactive" />
            24h Monitoring
          </div>
          <button class="cta">Here We Go!</button>
        </div>
      </section>
    </>
  );
};

export default Plans;
