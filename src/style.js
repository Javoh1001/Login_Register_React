import styled from 'styled-components';
import {ReactComponent as User } from './icon/users.svg'

export const Container = styled.div`
    background-color:#2a393e;
    width:800px;
    height:400px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    // padding:30px;

`

export const Wrapper = styled.div`
    width:360px;
    height:360px;
    border:2px solid #445859;
    margin:10px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    align-items:center;
    padding:30px;
`

export const Description = styled.div`
    color:#fff;
    font-weight:600;
    font-family:'verdana';
    margin-top:20px;
    font-size:20px;
`

export const Title = styled.div`
    color:#e7c961;
    font-size:28px;
    margin-top:10px;
    font-family:'verdana';
`
export const InputWrapper = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
`
export const Input = styled.input`
    width:100%;
    height:40px;
    border-radius:4px;
    background-color:rgba(104,105,102, .5);
    border:2px solid #354545;
    outline:none;
    margin-top:20px;   
    ::placeholder{
        font-family:'verdana';
    }
    color:#fff;
    font-family:'verdana';
    padding-left:15px;
`

export const UserIcon = styled(User)`
    color:#fff;
    background-color:#fff;
`