import "../styles/experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="experience">
      <h2>Education &Experience</h2>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in-right" data-aos-duration="1500">
            <div>Bachelor degree in Commerce</div>
            <div className="year">2013 - 2016</div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in-left" data-aos-duration="1500">
            <div>Postgraduate diploma in Supply chain management</div>
            <div className="year">2017 - 2018</div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in-right" data-aos-duration="1500">
            <div>Receiving supervisor</div>
            <div className="year">2019 - 2021</div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in-left" data-aos-duration="1500">
            <div>Inventory co-ordinator</div>
            <div className="year">2021 - 2022</div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in-right" data-aos-duration="1500">
            <div>Diploma in Web development</div>
            <div className="year">2022 - 2022</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
