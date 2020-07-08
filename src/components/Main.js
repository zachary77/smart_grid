import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography, Card, CardContent} from '@material-ui/core';
import ReactSpeedometer from "react-d3-speedometer";
import HeadBar from './HeadBar';

const useStyles = makeStyles({
    body: {
        fontSize: 15,
    },
});

const Main = () => {
    const classes = useStyles();
    const [max, setMax] = useState(600);
    const [value, setValue] = useState(120);
    const [lv, setLv] = useState(1);

    const increaseLv = () => {
        setLv(lv + 1);
    };

    const onIncrease = () => {
        setValue(value + 1);
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
                <Card>
                    <CardContent>
                        <Typography className={classes.body} varient="body2" component="p">
                            현재까지 사용량은 {value}kWh로 {lv}단계에 해당합니다.<br />
                            이번달 예상사용량은 597kWh로 3단계가 예상됩니다.<br />
                            지난달 우리APT의 평균사용량은 314kWh 입니다.<br />
                        </Typography>
                    </CardContent>
                </Card>
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


// response 받은 걸로 setState
// fetchPosts().then(response => {
//     this.setState({
//       posts: response.posts
//     });
//   });