import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Container, Typography} from '@material-ui/core';
import HeadBar from './HeadBar';

const Input = () => {
    const [form, setForm] = useState({
        id: ''
    });

    const onChange = (e) => {
        const {id, value} = e.target;
        setForm({
            ...form,
            [id]: [value]
        });
    };

    const onCheck = () => {
        const apiBaseUrl = "http://";   // 추후에 api와 연결
        const payload = {
            id: Number(form.id)
        };
        try{
            axios.post(apiBaseUrl, payload).then((response) => { // 추후에 api와 연결
                console.log(response);
                if(response.data.code === 200){
                    console.log('login successful');
                    response.bind('/main');
                }else{
                    console.log('존재하지 않는 ID');
                    alert('존재하지 않는 ID입니다.');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

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