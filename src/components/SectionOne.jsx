import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import '../Css/SectionOne.css';

const SectionOne = ({item}) => {
    return(
        <>
            <div className='d-flex flex-column-reverse flex-md-row justify-content-between align-items-center' style={{height: "auto"}}>
                <div className='section text-md-left mx-md-5'>
                    <h1 className='section-heading mb-4 mb-md-0'>{item?.section_header}</h1>
                    <p className='section-pargraph'> {item?.section_sub_header}</p>
                    <button> {item?.section_button_title} <FaArrowRightLong /></button>
                </div>
                <div >
                    <img src={item?.section_image} alt='...' height="auto" width="100%"/>
                </div>
            </div>
        </>
    );
};

export default SectionOne;