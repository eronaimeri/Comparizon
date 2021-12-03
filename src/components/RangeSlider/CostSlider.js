import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        width: 270,
        backgroundColor: red,
    },
});

const marks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 25,
        label: '$25',
    },
    {
        value: 50,
        label: '$50',
    },
    {
        value: 75,
        label: '$75',
    },
    {
        value: 100,
        label: '$100+',
    }
];

const CustomSlider = withStyles({
    rail: {
        backgroundImage: "linear-gradient(.25turn, #fafafa, #a0a0a0)",
        height: 3,
    },
    track: {
        backgroundImage: "linear-gradient(.25turn, #db735c, #f3c57b)",
        height: 3,
    },
    tick: {
        height: 3,
    }
})(Slider);

export default function CostRangeSlider() {
    const classes = useStyles();

    const [val, setVal] = useState([0, 100])
    const updateRange = (e, data) => {
        setVal(data)
    }

    return (
        <div className={classes.root}>
            <CustomSlider
                value={val}
                onChange={updateRange}
                marks={marks}
                min={0}
                step={5}
                max={100}
                graduated
                progress
                variant='light'
                renderMark={mark => {
                    return mark;
                }}
            />
        </div>
    );
}