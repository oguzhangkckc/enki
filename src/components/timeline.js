import React from 'react'

const AboutUsItemsRender = ({ data }) => {
    return (
        <div className='flex flex-col gap-y-10'>
            {Object.values(data).map((element, index) => (
                <>
                    <div className={element.divStyling} key={index}>
                        <h3 className={element.yearStyling}>{element.year}</h3>
                        <img className={element.imgStyling} alt="" src={element.img} />
                    </div>
                    <h2 className={element.textStyling}>
                        {element.text}
                        <br />
                        {element.textContinued}
                        <br />
                        {element.textContinued2}
                    </h2>
                </>
            ))}
        </div>
    );
};

export default AboutUsItemsRender;