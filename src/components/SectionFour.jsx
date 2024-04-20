import React from 'react';
import '../Css/SectionFour.css';

const SectionFour = ({item}) => {

    return (
        <>
            <div className=' my-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center w-100' 
            style={{height: "800px", backgroundColor:"#FFF4E5"}}>
                <div>
                    <img src={item?.section_image} alt='...' className="section-four-img rounded-5 " />
                </div>
            <div className='text-start text-md-left mx-md-5'>
                <h1 className='section-four-heading mb-4 mb-md-0'>{item?.section_header}</h1>
                <p className='section-four-paragraph' > {item?.section_sub_header} </p>
            </div>
        </div>
        </>
    );
};

export default SectionFour;