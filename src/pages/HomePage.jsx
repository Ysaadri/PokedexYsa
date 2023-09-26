import React from 'react'
import { useRef } from 'react'
import { useDispatch } from "react-redux";
import { setTrainerSlice } from '../store/slices/trainer.slice';
import { useNavigate } from "react-router-dom"
import '../components/HomePage/styles/HomePage.css'

const HomePage = () => {
    
    const inputTrainer = useRef()
    const dispatch= useDispatch() 

    const navigate = useNavigate()

    const handleTrainer = e => {
        e.preventDefault();
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    };



    return (
        
        <div className="home-page-container containt_register">
        <div className="Title-pokedex"></div>
        <h2 className="greet_coach">Hi Trainer!</h2>
        <p className="text_for-trainer">
          To start in this application, please, give me your trainer name.
        </p>
        <form className="form_trainer" onSubmit={handleTrainer}>
                <input className='input_trainer' placeholder="Tu nombre es?" type="text" ref={inputTrainer}/>
                <button className='button_trainer'>Buscar</button>
            </form>
        <footer className="footer_register">
          <div className="div_red-footer"></div>
          <div className="div_black-footer"></div>
          <div className="circle_footer">
            <div className="circle_in-the-footer"></div>
          </div>
        </footer>
      </div>
    )
}

export default HomePage