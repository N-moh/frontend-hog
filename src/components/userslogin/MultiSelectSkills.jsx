import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Component } from 'react';
//import { colourOptions } from '../data';

const skillOptions = [
  { value: 'JS', label: 'Javascript' },
  { value: 'HTML', label: 'Html' },
  { value: 'CSS', label: 'CSS' },
  { value: 'React', label: 'React'}
]
const animatedComponents = makeAnimated();

export default function MultiSelectSkills() {
  
return (
  <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={skillOptions} 
            components={animatedComponents}
              isMulti 
              defaultValue={[skillOptions[2], skillOptions[3]]} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
);
}