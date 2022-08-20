import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs
            .sendForm(
                'service_7wq84gf',
                'template_d1c2ujv',
                refForm.current,
                'FnxJcprfl-sJ016Wr'
            )
            .then(
                () => {
                    alert('Message successfully send')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send')
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am intrested in freelance opportunities - especially
                        ambitious or large project. However, if you have other
                        request or question, don't hesitate to contact me using
                        below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Kevin Alfito,
                    <br />
                    Indonesia
                    <br />
                    Cirebon
                    <br />
                    Sumber
                    <br />
                    <span>kevinalfito69@gmail.com</span>
                </div>
            </div>
            <div className="map-warp">
                <MapContainer center={[-6.732023, 108.552315]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-6.732023, 108.552315]}>
                        <Popup>
                            Kevin Alfito lives here,come over for a cup of
                            coffee 😁
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
