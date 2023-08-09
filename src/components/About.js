import React,{useState} from 'react'

export default function About() {

const [currStyle, setNewStyle] = useState(
  {
    color: 'black',
    backgroundColor: 'white'
  }
);

const [currBtnText, setBtnText] = useState('Enable dark mode');
const [currBtnStyle, setBtnStyle] = useState('btn btn-dark');

const handleClick = ()=>{
  if(currStyle.color==='black')
  {
    setNewStyle({
    color: 'white',
    backgroundColor: 'black'
    });

    setBtnText('Enable Light Mode');
    setBtnStyle('btn btn-light');
  } else {

    setNewStyle({
      color: 'black',
      backgroundColor: 'white'
      });

      setBtnText('Enable Dark Mode');  
      setBtnStyle('btn btn-dark');
  }

}

  return (
    <div className='container'>
      <h1>About us</h1>
        <div className="accordion" id="accordionExample" style={currStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={currStyle}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={currStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={currStyle}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={currStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={currStyle}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={currStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

        <div className='container my-3'>
        <button type="button" class={currBtnStyle} onClick={handleClick}>{currBtnText}</button> 
        </div>  

    </div>
  )
}
