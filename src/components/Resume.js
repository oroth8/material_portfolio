import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Grad from "../assets/svgs/Grad";
import Work from "../assets/svgs/Work";
import Flag from "../assets/svgs/Flag";
import Certificate from "../assets/svgs/Certificate";

const Resume = () => {
  return (
    <section className="section-dark cd-section" id="resume">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2020-2020"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Certificate />}
        >
          <h1 className="vertical-timeline-element-title">
            Full Stack Web Developer Certification Program
          </h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            Northwestern University
          </h4>
          <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
          <p>
            A 24-week intensive program focused on gaining technical programming
            skills in full-stack web development. Areas covered: HTML5, CSS3,
            JavaScript, jQuery, Bootstrap, Firebase, NodeJS, MySQL, MongoDB,
            Express, and ReactJS.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2020-2020"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Certificate />}
        >
          <h1 className="vertical-timeline-element-title">
            Salesforce Certified Administrator Course
          </h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            SF Trailhead
          </h4>
          <h5 className="vertical-timeline-element-subtitle">Online</h5>
          <p>
            Earned over 60 badges in trailhead. 5 Superbadges. More than 70,000
            trailhead points.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2018-2020"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Flag />}
        >
          <h1 className="vertical-timeline-element-title">
            United States Navy SEAL Candidate
          </h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            United States Navy
          </h4>
          <h5 className="vertical-timeline-element-subtitle">San Diego, CA</h5>
          <p>
            Studied at Naval Special Warfare, San Diego, receiving an education
            in mental toughness, dive physics, basic combat patrolling, and
            attention to detail from decorated Navy SEALs. Qualified to enter
            BUD/S Preparatory School and BUD/s selection by meeting physical and
            mental qualifications. Secured Hell Week August 2nd 2019 as a squad
            (boat crew) leader: 5.5 days(132 hours) of no sleep|240+ miles in
            boots/sand
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2015, 2017 - 2018"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Work />}
        >
          <h1 className="vertical-timeline-element-title">General Manager</h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            Trifecta Bar and Grill
          </h4>
          <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
          <p>
            Helped generate 6.8% YOY growth in restaurant revenue by
            recalculating menu price points. Managed schedules and maintained
            inventory for the restaurant serving 350 customers daily. Developed
            and executed marketing plans and determined menu pricing. Tracked
            expenditures and revenues, recording necessary financial data.
            Assisted in creating new menu items to maximize restaurant
            profitability.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2013 - 2017"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Grad />}
        >
          <h1 className="vertical-timeline-element-title">B.A. Economics</h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            University of Wisconsin-Madison
          </h4>
          <h5 className="vertical-timeline-element-subtitle">Madison, WI</h5>
          <p>
            Relevant Coursework: Econometrics, Advanced Calculus, Healthcare
            Economics, Statistics Awards/Honors: Defensive Captain, BIG 10
            Tournament Champions Clubs/Activities: Men’s Varsity Lacrosse
            Relevant Projects: Health Services Economic Research Assistant
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12232E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #007cc7" }}
          date="2016 - 2016"
          iconStyle={{ background: "#007cc7", color: "#fff" }}
          icon={<Work />}
        >
          <h1 className="vertical-timeline-element-title">Consulting Intern</h1>
          <h4
            className="vertical-timeline-element-title"
            style={{ color: " #007cc7" }}
          >
            Healthscape Advisors
          </h4>
          <h5 className="vertical-timeline-element-subtitle">Chicago, IL</h5>
          <p>
            Performed data analysis and prepared proposal for a government bid.
            Evaluated and developed SWOT analysis for a proposed merger of two
            health insurance companies. Collaborated with team members on the
            development of an internal business case, and white paper involving
            (MACRA) Medicare Access and CHIP Reauthorization Act.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Resume;
