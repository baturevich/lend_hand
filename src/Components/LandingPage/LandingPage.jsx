import React from 'react'
// Подключил стили, стили сброса подключил в корневой index.js
import s from './LandingPage.module.scss'
// Изображения подключать как переменные, импортируем от куда то
import test_img from '../../assets/img/test_img.png'

export const LandingPage = (props) => {
    return (
        <div className={s.wrapper}>
            {/* Вместо класс пишем  ClassName, класс подключаем как модуль через ковычки */}
            <div className={s.container}>
                {/* Изображения тоже подключаем как переменную, через ковычки */}
                <img src={test_img} alt="test_img" />
            </div>
        </div>
    )
}

