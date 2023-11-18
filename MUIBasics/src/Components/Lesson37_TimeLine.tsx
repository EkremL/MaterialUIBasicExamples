import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";

const Lesson37_TimeLine = () => {
  return <Timeline>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Yemek Ye</TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Oyun oyna</TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Kod yaz</TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
        </TimelineSeparator>
        <TimelineContent>Uyu :)</TimelineContent>
    </TimelineItem>
  </Timeline>;
  
};

export default Lesson37_TimeLine;
