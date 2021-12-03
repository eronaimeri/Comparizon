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
        label: '0',
    },
    {
        value: 5,
        label: '5 Gb',
    },
    {
        value: 10,
        label: '10 Gb',
    },
    {
        value: 15,
        label: '15 Gb',
    },
    {
        value: 20,
        label: '20 Gb',
    },
    {
        value: 25,
        label: 'Unl.',
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

export default function GbRangeSlider() {
    const classes = useStyles();

    const [val, setVal] = useState([0, 25])
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
                step={1}
                max={25}
                graduated
                progress
                renderMark={mark => {
                    return mark;
                }}
            />
        </div>
    );
}