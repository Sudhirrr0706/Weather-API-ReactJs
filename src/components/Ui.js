import React, { Component } from 'react'
import './ui.css'
import Moment from 'react-moment';
import Clock from 'react-live-clock';
import {Animated} from "react-animated-css";

class Ui extends Component {
    state={
        time:"",
        cityName:"",
        temp:"",
        country:"",
        deg:'',
        weatherReport:'',
        iconUrl:'',
        city:'',
        values:'',
        inputValues:'',
        errorValue:'',
        bg_class:'icon',
        minTemp:'',
        maxTemp:'',
        pressure:'',
        unit:'',
        humidity:'',
        wind:'',
        km:'',
        mostly:'',
        animeError:false,
        anime:false
    };

    onChangeInputValues=(event)=>{
        this.setState({inputValues:event.target.value})
    }
 

    onClickSearch=()=>{
        this.setState({inputValues:this.state.inputValues})
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValues}&appid=0cf2f8e58d0cdec5c9d4931a1f5f0e6e&units=metric`)
        .then((res)=>res.json())
        .then((data)=>{
            try{
                this.setState({
                    cityName:data.name,
                    temp:Math.round(data.main.temp),
                    country:data.sys.country,
                    time:data.timezone,
                    weatherReport:data.weather[0].description,
                    deg:'°C',
                    iconUrl:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                    errorValue:"",
                    minTemp:data.main.temp_min,
                    maxTemp:data.main.temp_max,
                    unit:'Pa',
                    pressure:data.main.pressure,
                    humidity:data.main.humidity,
                    wind:data.wind.speed,
                    km:"km",
                    mostly:data.weather[0].main,
                    animeError:false,
                    anime:true
                })
            }
            catch{
                this.setState({
                    cityName:'',
                    temp:'',
                    country:'',
                    time:data.timezone,
                    weatherReport:'',
                    iconUrl:'',
                    deg:'',
                    errorValue:'Invalid City Name',
                    minTemp:'',
                    maxTemp:'',
                    pressure:'',
                    unit:'',
                    humidity:'',
                    wind:'',
                    km:'',
                    mostly:'',
                    animeError:true,
                    anime:false
                })
            }
            
        })
    }
 
    render() {
        
        return (
        <React.Fragment>
            <div className="d-flex flex-wrap align-content-center p-lg-4">
                <div className='card col-lg-8 col-12  mx-auto my-lg-5 bg-image'>
                        <div className="text-white container">
                            <Clock className=" timeZone" format={'HH:mm:ss'} ticking={true} />
                            <Moment  className='date px-2' format="MMMM DD YY"/>
                       </div>
                       <Animated animationIn='bounceIn'>
                            <h1 className='topic pt-5'>Weather Report</h1>
                       </Animated>
                      
                        <div class="card-body px-4">
                          
                            
                           <Animated className="d-flex justify-content-between footer col-11" animationInDuration={2000} animationIn="slideInRight" animationOut="slideOutLeft"  isVisible={this.state.anime}>
                                    <div>
                                        <img className="icon" src={this.state.iconUrl} alt=''/>
                                        <h4 class="card-title  cityName">{this.state.cityName} <span className="text-white text-muted"> {this.state.country}</span></h4>
                                    </div>
                                    <div className="">
                                        <h3 class="card-subtitle report degree">{this.state.temp}{this.state.deg}</h3>
                                        <h5 className="weather my-auto">{this.state.weatherReport}</h5>
                                    </div>
                           </Animated>
                                
                        </div>
                </div>
                <div className='section2 col-lg-4 col-12 my-lg-5'>
                    <Animated animationIn='fadeInDown'>
                        <div className="d-flex flex-wrap justify-content-between pt-5 pb-1 px-4">
                            <input className="text-dark col-lg-8 col-12"  id="CityName"  type="text" name="cityName" placeholder="city name" value={this.state.inputValues} onChange={this.onChangeInputValues} />
                            <button onClick={this.onClickSearch} className="btn btn-outline-primary custom-button mt-lg-0 mt-2">Get Weather</button>
                        </div>
                    </Animated>
                    
                    
                    <Animated animationIn="headShake" animationInDuration={500} isVisible={this.state.animeError}>
                        <p className="d-flex justify-content-center align-items-center error-msg px-5">{this.state.errorValue}</p>
                    </Animated>

                    <Animated animationIn="slideInRight" isVisible={this.state.anime}>
                        <div className="detailedReport text-white">
                            <p className="px-4 fw-bold">City Details</p>

                            <div className='d-flex justify-content-between px-4 pb-0 mb-0 pt-3'>
                                <p>City Name</p>
                                <p>{this.state.cityName}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>country</p>
                                <p>{this.state.country}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <p className="px-4 fw-bold pt-3">Weather Details</p>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Temperature</p>
                                <p>{this.state.temp}{this.state.deg}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>description</p>
                                <p>{this.state.weatherReport}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Mostly</p>
                                <p>{this.state.mostly}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Minimum Temperature</p>
                                <p>{this.state.minTemp}{this.state.deg}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Maximum Temperature</p>
                                <p>{this.state.maxTemp}{this.state.deg}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>pressure</p>
                                <p>{this.state.pressure} {this.state.unit}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Humidity</p>
                                <p>{this.state.humidity}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                            <div className='d-flex justify-content-between px-4 pt-3'>
                                <p>Wind</p>
                                <p>{this.state.wind} {this.state.km}</p>
                            </div>
                            <hr className="col-8 mt-0 pt-0 ms-auto"/>

                        </div>
                    </Animated>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Ui

