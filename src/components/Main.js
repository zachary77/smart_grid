import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography, Card, CardContent} from '@material-ui/core';
import ReactSpeedometer from "react-d3-speedometer";
import HeadBar from './HeadBar';
// import axios from 'axios';

const useStyles = makeStyles({
    body: {
        fontSize: 15,
    },
});

function Main( data ) {
    const [value, setValue] = useState(data.match.params.data); // history.push 로 보낸 데이터를 match parameter를 이용해 받아옴
    const classes = useStyles();
    const max = 600;
    const [lv, setLv] = useState(1);
    // const [error, setError] = useState(null);

    //console.log(data.match.params.data);

    // useEffect(() => {
    //     const fetchValues = async () => {
    //         const apiBaseUrl = 'http://34.64.239.172:3000/powerConsumption/get';
    //         try {
    //             // 요청이 시작 할 때에는 error 와 value 를 초기화하고
    //             setError(null);
    //             setValue(null);
    //             const response = await axios.get(
    //                 apiBaseUrl, {
    //                     params: {
    //                         address: key
    //                     }
    //                 }
    //             );
    //             setValue(response.powerConsumption); // 데이터는 response.powerConsumption 안에 들어있음
    //         } catch (e) {
    //             setError(e);
    //             console.log(e);
    //         }
    //     };

    //     fetchValues();
    // }, []);

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

    // if (error) return <div>API연결에서 에러 발생</div>;

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