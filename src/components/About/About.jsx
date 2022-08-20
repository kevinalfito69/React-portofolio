import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faReact,
    faHtml5,
    faJs,
    faCss3,
    faPython,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons'

import './index.scss'
import Loader from 'react-loaders'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis nisi ratione harum.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJs} color="#F0DB4F" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#e94e2f" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#e94e2f" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
