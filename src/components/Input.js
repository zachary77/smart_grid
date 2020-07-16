import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Container, Typography} from '@material-ui/core';
import HeadBar from './HeadBar';
import { useHistory } from 'react-router-dom';

const Input = () => {
    const [form, setForm] = useState({
        id: 0
    });

    const onChange = (e) => {
        setForm(e.target.value);
    };

    const history = useHistory();

    const onCheck = () => {
        const apiBaseUrl = "http://34.64.179.235:3000/powerConsumption/get";   // api 주소
        // const payload = {
        //     address: form
        // };
        try{
            // axios.post(apiBaseUrl, payload).then((response) => { // post 작동 안되서 get방식으로 변경
            //     console.log(response);
            //     if(response.status === 200){
            //         console.log('login successful');
            //     }else{
            //         console.log('존재하지 않는 ID');
            //         alert('존재하지 않는 ID입니다.');
            //     }
            // });
            axios.get(apiBaseUrl, {
                    params: {
                        address: form
                    }
                })
                .then((response) => {
                    console.log(response);
                    if(response.status === 200){
                        console.log('login successful');
                        return (
                            // <Main data={response.data} />
                            history.push(`/main/${response.data}`) // router에 들어있는 파라미터? 중 하나인 history.push로 데이터를 보내줌
                        );
                    }else{
                        console.log('존재하지 않는 ID');
                        alert('존재하지 않는 ID입니다.');
                    }
                });
        } catch (error) {
            console.log(error);
            return <div>API연결에서 에러 발생</div>
        }
    };

    useEffect(() => {
        console.log('form 값이 설정됨');
        console.log(form);
        return () => {
            console.log('form 값이 바뀌기 전...');
            console.log(form.id);
        }
    },[form]);

    return(
        <>
            <HeadBar />
            <Container maxWidth="xs">
                <Grid container item sm justify="center" alignItems="center" >
                    <TextField
                        id="standard-basic"
                        label="번호"
                        autoFocus={true}
                        placeholder="자신의 번호를 입력하세요"
                        fullWidth={true}
                        onChange={onChange}
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        label="조회"
                        type="submit"
                        onClick={onCheck}
                    >
                        <Typography varient='button' display='block' gutterBottom>Submit</Typography>
                    </Button>
                </Grid>
            </Container>
        </>
    );
};

export default Input;