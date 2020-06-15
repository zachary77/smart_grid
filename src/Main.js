import React, {useState} from 'react';
import {Grid, Container, Typography, Card, CardContent} from '@material-ui/core';
import ReactSpeedometer from "react-d3-speedometer";
import HeadBar from './HeadBar';

const Main = ({users}) => {
    const [max, setMax] = useState(600);
    const [value,setValue] = useState(0);

    const onIncrease = (e) => {
        setValue(value + e);
    };

    const isMax = () => {
        setMax(max + 100);
    };

    return (
        <>
            <HeadBar />
            <Container maxWidth="xs">
                <Typography align="left" variant="h6">
                    전기요금 및 사용량
                </Typography>
                <hr />
                <Grid container item sm justify="center" alignItems="center" >
                    <ReactSpeedometer
                        height={175}
                        currentValueText={value+"kWh"}
                        maxValue={max}
                        value={value}
                        segments={3}
                        segmentColors={["#33FF33", "#FFCC00", "#FF0000"]}
                    />
                </Grid>
            </Container>
        </>
    );
};

export default Main;