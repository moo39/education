import React from 'react';
import { Card } from 'react-bootstrap';
import '../Css/SectionTwo.css';

const SectionTwo = ({item}) => {
    
    return (
        <>
            <div className='section-two text-center pt-5'>
                <div className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <h1 className='section-two-heading'>{item?.section_header}</h1>
                    <p className='section-two-paragraph'>{item?.section_sub_header}</p>
                </div>
                
                <div className='container section-tow-data'>
                        <div className='layout text-center col-lg-6 mb-4'> 
                            
                            <Card className='section-two-card text-start mb-4'>
                                <Card.Img variant="left" src={item?.features[0].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white" }}>{item?.features[0].feature_title}</Card.Title>
                                    <Card.Text className='section-two-card-text' style={{color:"white" }}  >
                                    {item?.features[0].feature_description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
    
                            <Card className='section-two-card text-start mb-4'>
                                <Card.Img variant="left" src={item?.features[2].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}>item?.features[2].feature_title}</Card.Title>
                                    <Card.Text className='section-two-card-text' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}  >
                                    {item?.features[2].feature_description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
    
                            <Card className='section-two-card text-start mb-4'>
                                <Card.Img variant="left"  src={item?.features[4].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}>{item?.features[4].feature_title}</Card.Title>
                                    <Card.Text  className='section-two-card-text'style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}  >
                                    {item?.features[4].feature_description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
    
                        <div className='layout col-lg-6 mb-4'>
                            <Card className=' section-two-card text-start mb-4'>
                                <Card.Img variant="left" src={item?.features[1].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}>{item?.features[1].feature_title}</Card.Title>
                                    <Card.Text className='section-two-card-text' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}  >
                                    {item?.features[1].feature_description} 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
    
                            <Card className='section-two-card text-start mb-4'>
                                <Card.Img variant="left" src={item?.features[3].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}>{item?.features[3].feature_title}</Card.Title>
                                    <Card.Text className='section-two-card-text' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}  >
                                    {item?.features[3].feature_description} 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
    
                            <Card className='section-two-card text-start mb-4'>
                                <Card.Img variant="left" src={item?.features[5].feature_image} height={50} width={50}/>
                                <Card.Body className='section-two-card-body flex-coulmn'>
                                    <Card.Title className='section-two-card-title' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}>{item?.features[5].feature_title}</Card.Title>
                                    <Card.Text className='section-two-card-text' style={{color:"white",marginLeft: "clamp(10px, 2vw, 20px)"}}  >
                                    {item?.features[5].feature_description} 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div> 
                </div>
            </div>
        </>
    );
};

export default SectionTwo;

  /* 
  <div>
    {state.map((item, index) => (
        <div key={index}>{item.name}</div>
    ))}
  </div>
  */