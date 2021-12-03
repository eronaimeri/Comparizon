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
        value: 500,
        label: '500',
    },
    {
        value: 1000,
        label: '1000',
    },
    {
        value: 1500,
        label: '1500',
    },
    {
        value: 2000,
        label: '2000',
    },
    {
        value: 2500,
        label: '2500',
    },
    {
        value: 3000,
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

export default function MinRangeSlider() {
    const classes = useStyles();

    const [val, setVal] = useState([0, 3000])
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
                step={100}
                max={3000}
                graduated
                progress
                renderMark={mark => {
                    return mark;
                }}
            />
        </div>
    );
}