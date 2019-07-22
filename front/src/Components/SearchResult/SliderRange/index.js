import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([1,5000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.filter(value[0], value[1]);
    };

    return (
        <div className={classes.root}>
            <Slider
                min={1}
                max={props.max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
