import React from 'react'
import { Link } from 'react-router-dom'
import  {Lits_item,Linkl_list} from './style.jsx';


const NavList = (props) => {
    return(
            <Lits_item> <Linkl_list to={props.Link}>{props.title}</Linkl_list> </Lits_item>
    )
}
export default NavList;