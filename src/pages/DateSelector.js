import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { Box } from '@mui/system';
import MyTable from '../components/Table';

export default function DateSelector(props) {

    const [value, setValue] = useState([null, null]);
    const [episodes, SetEpisodes] = useState(props.episodes)

    return (

        <div>
            <Box sx={{ m: 2 }}>
                <Typography> To see Breaking Bad and Better Call Saul episodes info choose date range from 20/01/2008 to 08/10/2018</Typography>
            </Box>

            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DateRangePicker
                    startText="Start"
                    endText="End"
                    value={value}
                    inputFormat='dd/MM/yyyy'
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>

            <Box sx={{ m: 2 }}>
                <Button variant="outlined"
                    onClick={() => { SetEpisodes(props.episodes.filter(item => new Date(item.air_date) <= value[1] && new Date(item.air_date) >= value[0])) }}>Accept</Button>
            </Box>

            <div>
                <MyTable episodes={episodes} dates={value} />
            </div>

        </div>
    )
}