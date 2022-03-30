import React from 'react';
import "./Progress.css"
  
const Progress = ({skill, progress}) => {
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: "#f2709c",
       borderRadius:40,
        textAlign: 'right'
      }
        
    return (
	<div className="progress">
		<div className="progress__text">
			<h2>{skill}</h2>
		</div>
		<div className="progress_container">
    		<div className="progress__parent">
      			<div style={Childdiv}>
        			<span className="progress__span">{`${progress}%`}</span>
      			</div>
    		</div>
		</div>
	</div>
    )
}
  
export default Progress;