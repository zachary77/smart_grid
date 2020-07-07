import React, {useState, useMemo, useEffect} from 'react';
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
    // response 받은 걸로 할 예정
    const valueAPI = useMemo(() => {
        const apiBaseUrl = "http://http://10.120.73.90:3000/powerConsumption/get";

        try{
            fetch(apiBaseUrl).then(response => response.json())
            .then(response => {
                if(response.token) {
                    localStorage.setItem('wtw-token', response.token);
                }
            });
        }catch (error){
            console.log(error);
        }
    }, []);
    const classes = useStyles();
    const [value, setValue] = useState(valueAPI);
    const max = 600;
    const [lv, setLv] = useState(1);

    useEffect(() => {
        if(value > 200){
            setLv(2);
        };
        if(value > 400){
            setLv(3);
        };
        if(value >= max){
            setValue(max);
        };
    }, [lv, value, max]);

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