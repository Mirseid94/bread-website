import "./thirds.css"
import img from "../pngwing.com.png"



function Third(){
    return(
        <div className="main-container">
            <div className="inner-container">
                <h1>Ingredients & Method</h1>
                <p>Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.</p>
                <button>READ MORE</button>
            </div>
            <div className="in-container">
            <img src={img}alt="" />
            </div>
           
        </div>
    )

}
export default Third