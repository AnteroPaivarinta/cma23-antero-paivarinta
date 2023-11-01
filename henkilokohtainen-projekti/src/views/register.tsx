import '../App.css';
import React, {useEffect, useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../types';



const Register = () => {
    const [firstname, setFirstname ] = useState('');
    const [lastname, setlastName ] = useState('');
    const [password, setPassword ] = useState('');
    const [email, setEmail] = useState('');
    const address = 'http://localhost:5185/api/users/';
    const path = 'addUser';

    const onHandleUsername = (e:any) => {
        setFirstname(e.target.value)
    }
    
    const onHandleLastname = (e:any) => {
        setlastName(e.target.value)
    }

    const onHandlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e:any) => {
        setEmail(e.target.value)
    }

    const registerPost = () => {
        const user:IUser = {firstname: firstname, lastname: lastname ,password: password, email: email, isadmin: false, id: uuidv4()};
        axios.post(address+path, user)
    }
    return(
        <div className="container-B">
        <div className='item-a'>
            <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
            <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: 10}}>
                <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
                <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
                <Link to="/login"> Login </Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
        <div className='item-b'>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <label>Firstname </label><input onChange={(e) => onHandleUsername(e)} placeholder='Username'></input>
            <label>Lastname </label> <input onChange={(e) => onHandleLastname(e)} placeholder='Lastname'></input>
            <label> Email </label>  <input onChange={(e) => handleEmail(e)} placeholder='Email'></input>
            <label>Password </label>   <input onChange={(e) => onHandlePassword(e)} placeholder='Password'></input>
                <button onClick={() => registerPost()}>REGISTER</button>
            </div>
        </div>
        <div className='item-c'></div>
        <div className='item-d'>
            Anteron verkkokauppa, Y-4543, Tampere
        </div>
        </div>
    )
}


export default Register;