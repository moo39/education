import React from 'react';
import '../Css/SectionFive.css';

const ScetionFive = ({item}) => {
    return (
        <>
        <div className='container d-flex flex-column-reverse flex-md-row justify-content-around align-items-center my-5'>
            <p className='section-five-paragraph'>{item?.section_content}</p>
            <div className="card text-center" style={{border:"none"}}>
                <img src={item?.section_image} className="card-img-top rounded-circle float-end" alt="..." height={203} width={203}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"700",lineHeight:"32px"}}>{item?.section_author_fullname}</h5>
                        <p className="card-text"><small className="text-body-secondary">{item?.section_author_title}</small></p>
                    </div>
            </div>
        </div>
        </>
    );
};

export default ScetionFive;