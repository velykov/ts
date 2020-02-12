import React from 'react'
import {useHistory} from "react-router";

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Информация о проекте</p>
            <button className={'btn'} onClick={() => history.push('/')}>Обратно в список дел</button>
        </>
    )
}