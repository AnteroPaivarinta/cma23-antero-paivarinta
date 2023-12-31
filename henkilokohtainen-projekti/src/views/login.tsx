import '../App.css';
import React, {useEffect, useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Login = () => {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');

    const onHandleUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const onHandlePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const loginPost = () => {
        axios.post("http://localhost:5185/api/users/Login", {firstname: username, password: password}).then((response) =>
        localStorage.setItem('token', response.data));
    }
    return(
        <div className="container-B">
        <div className='item-a'>
            <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
            <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: 10}}>
                <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
                <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
                <Link to="/cart"> Login </Link>
                <Link to="/main">Register</Link>
            </div>
        </div>
        <div className='item-b'>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <label>Firstname </label><input onChange={(e) => onHandleUsername(e)} placeholder='Firstname'></input>
                <label>Password </label><input onChange={(e) => onHandlePassword(e)} placeholder='Password'></input>
              
                <button onClick={(() => loginPost())}>LOGIN</button>
                {localStorage.getItem('token')?.toString()}
            </div>
        </div>
        <div className='item-c'></div>
        <div className='item-d'>
            Anteron verkkokauppa, Y-4543, Tampere
        </div>
        </div>
    )
}

export default Login;