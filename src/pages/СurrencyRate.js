import React from 'react'
import { Button, ButtonGroup, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const useStyles = makeStyles({
    typography: {
        margin: 10
    },
})

const data = [
    {
        "date": "2014-12-01",
        "RUB": 51.01736
    },
    {
        "date": "2014-12-02",
        "RUB": 53.724625
    },
    {
        "date": "2014-12-03",
        "RUB": 53.12414
    },
    {
        "date": "2014-12-04",
        "RUB": 53.96487
    },
    {
        "date": "2014-12-05",
        "RUB": 53.01086
    },
    {
        "date": "2014-12-06",
        "RUB": 52.94798
    },
    {
        "date": "2014-12-07",
        "RUB": 52.80878
    },
    {
        "date": "2014-12-08",
        "RUB": 53.55434
    },
    {
        "date": "2014-12-09",
        "RUB": 54.02305
    },
    {
        "date": "2014-12-10",
        "RUB": 54.74389
    },
    {
        "date": "2014-12-11",
        "RUB": 55.6739
    },
    {
        "date": "2014-12-12",
        "RUB": 58.214525
    },
    {
        "date": "2014-12-13",
        "RUB": 57.871
    },
    {
        "date": "2014-12-14",
        "RUB": 57.85198
    },
    {
        "date": "2014-12-15",
        "RUB": 57.9957
    },
    {
        "date": "2014-12-16",
        "RUB": 68.53245
    },
    {
        "date": "2014-12-17",
        "RUB": 68.30813
    },
    {
        "date": "2014-12-18",
        "RUB": 61.891725
    },
    {
        "date": "2014-12-19",
        "RUB": 58.9055
    },
    {
        "date": "2014-12-20",
        "RUB": 58.9055
    }
]

export default function CurrencyRate(props) {

    const classes = useStyles()

    const currenciesItems = [
        {
            text: 'RUB',
        },

        {
            text: 'USD',
        },

        {
            text: 'EUR',
        },
    ]

    return (
        <div>
            <Box sx={{ m: 2 }} >
                <Typography >Choose currency</Typography>
            </Box>
            <div>
                <ButtonGroup>
                    {currenciesItems.map(item => (
                        <Button key={item.text} > {item.text} </Button>
                    ))}
                </ButtonGroup>
                <div>
                    
                    <Typography className={classes.typography}>There is only one currency unfortunately</Typography>
                    <h2 className={classes.typography}> Dollar to ruble currency rate</h2>
                    <LineChart
                        width={1200}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="RUB"
                            stroke="#82ca9d"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}