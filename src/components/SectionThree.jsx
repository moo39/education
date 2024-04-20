import React from 'react';
import '../Css/SectionThree.css';

const SectionThree = ({item}) => {

    return (
    <>
        <div className='container my-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center' style={{height: "800px"}}>
            <div className='text-start text-md-left mx-md-5'>
                <h1 className='section-three-heading mb-4 mb-md-0'>{item?.section_header}</h1>
                <p className='section-three-paragraph'>{item?.section_sub_header}</p>
            </div>
            <div className="curved-line-overlay">
                <img src={item?.section_image} alt='...' className="rounded-5" height="100%" width="100%"/>
            </div>
        </div>
    </>
    );
};

export default SectionThree;