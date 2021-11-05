import styled from 'styled-components';
import {ReactComponent as User } from './icon/users.svg';
import {ReactComponent as Password} from './icon/password.svg';

export const Container = styled.div`
    background-color:#2a393e;
    width:800px;
    height:420px;
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
    // align-items:center;
    padding:30px;
`
// export const Form = styled.form``

export const Description = styled.div`
    color:#fff;
    font-weight:600;
    font-family:'verdana';
    // margin-top:20px;
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
    margin-top:20px;   
    position:relative;

`
export const Input = styled.input`
    width:100%;
    height:40px;
    border-radius:4px;
    background-color:rgba(104,105,102, .5);
    border:2px solid #354545;
    outline:none;
    ::placeholder{
        font-family:'verdana';
    }
    color:#fff;
    font-family:'verdana';
    padding-left:30px;
`

export const UserIcon = styled(User)`
    color:#fff;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:5px;
`
export const PasswordIcon = styled(Password)`
    color:#fff;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:5px;
    width:18px;
    height:18px;
`
export const Button = styled.button`
    border:none;
    // padding:8px 16px;
    background-color:#00908D;
    color:#fff;
    width:120px;
    height:40px;
    margin-left:auto;
    margin-top:${(props)=> props.margin1? '0':'10px'};
    border:0;
    outline:none;
    border-radius:4px;
    cursor:pointer;
`

export const Info = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    margin-top:24px;
    span{
        padding-left:20px;
        font-size:14px;
        font-family:'verdana';
    }
`
export const Checkbox = styled.input`
    // margin-right:auto;
    width:30px;
    height:30px;
    background-color:rgba(104,105,103,.1);
    border:none;
`

export const Forget = styled.a`
    display:block;
    text-align:end;
    margin-top:20px;
    font-size:18px;
    font-family:'verdana';
    color:#fff;
    text-decoration:none;
`


