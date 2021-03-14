import React,{useEffect,useState} from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import  Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import SessionManager from '../utils/SessionHandler';
import {useOvermind} from "../others/OvermindHelper";
import { useHistory } from "react-router-dom";


const baseAPIEndpoint = "http://192.168.0.106:2000/";
const sessionAPIEndpoint = baseAPIEndpoint+"sessions/";
const sessionGetAPIEndpoint = sessionAPIEndpoint+"byid/";
const sessionTokenAPIEndPoint = sessionAPIEndpoint+'token/';

const useStyles = makeStyles(theme=>({
    button : {
        ...theme.typography.estimate,
        marginTop: '50px',
        borderRadius :'50px',
        marginLeft :'50px',
        marginRight : '25px',
        height : '45px',

    }
}));

const ScanPage = () => {

    const {state, actions} = useOvermind();

    const classes = useStyles();
    const [sessionID,setSessionID] = useState("");
    let history = useHistory();
    

    useEffect(() => {
        // checkSession();
        startSession();
    }, []);

    function startSession(){

        axios.post(sessionAPIEndpoint).then(function(response){
            
            setSessionID(response.data['_id']);
        })
    }

    function getOAuthToken() {
        
        const finalUrl = sessionTokenAPIEndPoint+sessionID+'/';
        axios.get(finalUrl).then(function(response){
            if (response.status === 200){
                SessionManager.saveToken(response.data);

            console.log(response.data);

            const url = response.data?.user.photoURL;

            actions.setUrl(url);
            actions.changeLoginStatus();
            history.push('/home');
        }
            
        });
        
    }

    return (
        
        <div align = 'center'>
             
            <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
              alignContent='center'>

                <QRCode value={sessionID} />

                <Button variant={"contained"} color={"secondary"}
                    className={classes.button} onClick = {getOAuthToken}>
                    LogIn
                </Button>

            </Grid>
            
        </div>

    );
};

export default ScanPage;