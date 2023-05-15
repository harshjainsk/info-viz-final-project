import React from "react";
import photo1 from "../assets/output.svg"
import photo2 from "../assets/final_1.svg"
function Page2(){
    return(
        <div>
            <h2 className="text-2xl">
		Gephi Project
	</h2>
            <img id="data-1" src={photo1} alt="" ></img>
    <img id="data-2" src={photo2} alt=""></img>        
    <style>{`
		#data-1{
		width:90vw;
		height:80vh;
		}
        #data-2{
		width:90vw;
		height:100vh;
		}
		html {
			height: 100%;
		}
		body {
			font-family: Arial, sans-serif;
			background-color: #F0F0F0;
		}
		h1{
			text-align: center;
		}
		h2{
			text-align : center;
		}
		img{
			display: block;
			margin: 0 auto;
            /* padding: auto; */
			margin-top: 50px;
		}`}
	</style>
    </div>
    );
}
export default Page2;