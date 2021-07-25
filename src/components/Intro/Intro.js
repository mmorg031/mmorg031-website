import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnimateIn from "./AnimateIn";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer.", "Designer.", "Enthusiast."],
        });
    }, []);

    return (
        <div className="intro" id="intro">

            <div className="title">Hello World &#128075;
            <br />
            <span className="name">Madison</span> here.</div>
            <div className="typing"> Software <span ref={textRef}></span></div>
            <AnimateIn>
                <div className="description">
                    I'm a computer engineer with a passion for software based in Canada.
                    I have a great interest in machine learning, data, full-stack
                    development, and everything in between.
                </div>
                <a href="mailto:madison.morgan.eng@gmail.ca" className="contact">
                    <FontAwesomeIcon icon={faEnvelope} /> Lets Talk !
                </a>
            </AnimateIn>

        </div>
    );
}