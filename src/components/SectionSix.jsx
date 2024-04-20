import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import '../Css/SectionSix.css';

const SectionSix = ({item}) => {
    return (
        <>
            <div className='text-center' style={{ backgroundColor: "#2E2A27", height: "clamp(300px, 50vh, 400px)",  }}>
                <div className="container text-center d-flex flex-column justify-content-center align-items-center pt-5">
                    <h2 className='section-six-heading'>{item?.section_header}</h2>
                    <p className='section-six-paragraph' style={{
                        color: "gray",
                        fontWeight: "400",
                        fontSize: "clamp(14px, 2vw, 20px)",
                        lineHeight: "clamp(24px, 4vw, 32px)",
                    }}>{item?.section_sub_header}</p>
                    <button
                        style={{
                            backgroundColor: "#F8B517",
                            border: "none",
                            borderRadius: "5px",
                            width: "clamp(150px, 20vw, 150px)",
                            height: "clamp(30px, 5vh, 50px)"
                        }}> {item?.section_button_title} <FaArrowRightLong />
                    </button>
                </div>
            </div>
            </>
    );
};

export default SectionSix;
    