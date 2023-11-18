//npm install @mui/joy @emotion/react @emotion/styled
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";

const Lesson35_Tabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>First Title</Tab>
        <Tab>Second Title</Tab>
        <Tab>Third Title</Tab>
      </TabList>
      <TabPanel value={0}>First</TabPanel>
      <TabPanel value={1}>Second</TabPanel>
      <TabPanel value={2}>Third</TabPanel>
    </Tabs>
  );
};

export default Lesson35_Tabs;
