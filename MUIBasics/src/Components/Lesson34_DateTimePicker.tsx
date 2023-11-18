//npm install @mui/x-date-pickers
// npm install dayjs
// npm install moment
//npm install @mui/x-date-pickers-pro

import React from 'react';
import dayjs,{Dayjs} from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem  } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro';
// import { DateRange } from '@mui/lab';

const Lesson34_DateTimePicker = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    // const [value2, setValue2] = React.useState<DateRange<Dayjs>>([
    //     dayjs('2022-04-17'),
    //     dayjs('2022-04-21'),
    //   ]);
  return (
    <Stack direction="row" spacing={5}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Tarih" value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Basic time picker" />
      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
          'MobileTimePicker',
          'DesktopTimePicker',
          'StaticTimePicker',
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Uncontrolled picker" component="DateRangePicker">
          <DateRangePicker
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          />
        </DemoItem>
        <DemoItem label="Controlled picker" component="DateRangePicker">
          <DateRangePicker
            value={value2}
            onChange={(newValue) => setValue2(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}
    </Stack>

    
  )
}

export default Lesson34_DateTimePicker
