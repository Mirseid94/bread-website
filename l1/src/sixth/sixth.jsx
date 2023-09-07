import "./sixth.css"


function Sixth(){
    return(
        <div className="sixth-container">

            <div className="input-container">
                <h1>Contact Us</h1>
                <p>Image from <a href="#"> Freepick</a>
                </p>
               
                <input id="email_id" type="email" placeholder="Enter your email" />
                
                <input id="name_id" type="text" placeholder="Enter your Name " />
                <button>SUBMIT</button>
            </div>
            <div className="contact-container">
                <div>
                <h2>F​IND US</h2>
                <p>
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                </p>

                </div>
                <div>
                    <h2>
                    HOURS
                    </h2>
                    <p>
                    Monday – Saturday
9am – 7pm <br />
Sunday <br />
10am – 6pm
                    </p>

                </div>
                <div>
                    <h2>CALL US</h2>
                    <a href="#">1 (234)567-891</a> <br />
                    <a href="#">2(345) 333-897</a>
                </div>

               
            </div>
        </div>
    )
}
export default Sixth