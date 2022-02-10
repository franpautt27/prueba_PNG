import React from 'react';
import logo from "../logoRF.png";

export const Banner = () => (
<h4 className="bg-success text-white text-center p-4" >
    <img src={logo} alt="" style={{'borderRadius':'50%'}} width="100" height="100" />
    <b> Royal Films Movie Application </b>
    <p className="h6" id="creditos" >With ❤ by Francisco Pautt </p>
</h4>
);
