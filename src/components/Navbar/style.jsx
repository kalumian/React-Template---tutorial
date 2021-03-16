import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbarsection = styled.div`padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
    display: flex;
    align-items: center;
    padding: 40px 54px;
    `

export const Logo = styled.div
`width: 50%;
 float: left;
 @media (max-width : 991px) {
        width: 100%;
        float: none;
 `

export const Text_Logo = styled.h2
` 
font-size: 30px;
font-weight: bold
display: inline-block;
width: 172px;
text-align: center;
`

export const Ul_list = styled.ul
   `width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    @media (max-width : 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none}
    `

export const Lits_item = styled.li
`display: inline-block;
@media (max-width : 991px) {
    display: block;
    text-align: center;
}
` 


export const Linkl_list = styled(Link) ` 
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 17px;
    
    &:hover{
        color: #eb5424
    }
`



