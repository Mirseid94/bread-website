import "./main.css"
import img from "./pngwing.com.png"
import { useSpring, animated } from '@react-spring/web'





function Main(){

    const springProps=useSpring({
        from:{opacity:0},
        to:{opacity:1},
    });
    return(
        <animated.div style={springProps} className="main-container">
            <div className="inner-container">
            <img src={img} alt=""/>
            </div>
            <div className="inner2-container">
            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/9a3132533b35584281a7210c/333.png" alt="" />
            <h1>Fresh breads handcrafted daily</h1>
            <p>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
            <button>READ MORE</button>
            </div>
        </animated.div>
    )
}
export default Main