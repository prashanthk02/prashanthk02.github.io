import '../styles/experience.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
  return (
    <div className='experience'>
      <h2 className='neon'>Education & Experience</h2>

      <Timeline position="alternate">

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>Bachelor degree in Commerce.</div>
          <div className='year'>2013 - 2016</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>Postgraduate diploma in Supply chain management.</div>
          <div className='year'>2017 - 2018</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>Receiving supervisor</div>
          <div className='year'>2019 - 2021</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>Inventory co-ordinator</div>
          <div className='year'>2021 - 2022</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>Diploma in Web development</div>
          <div className='year'>2022 - 2022</div>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </div>
  )
}

export default Experience;