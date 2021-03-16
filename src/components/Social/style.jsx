import styled from "styled-components";


export const Social_media_section = styled.div`
    height: auto;
    overflow: hidden;
`

export const Social_bar = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${props => props.kind === "Social Facebook" ? '#3b5998' : props.kind === "Social twitter" ?  '#498cbf' : props.kind === "Social Pinterest"?  '#cc2127' :""};
`


export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
`

export const Social_P = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`

export const S_span = styled.span`
    display: block;
    margin-bottom: 8px;
`

export const P_pan_info2 = styled.span` 
    font-weight: normal;
`