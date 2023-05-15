import React from "react";
function Page1(){
    return(
        <div className=" px-2 py-5">
            <h2 className="text-3xl">
		Tableau Project
	</h2>
            <iframe id="data" src="https://public.tableau.com/views/AirbnbVisualisationDashboard/AirBnBDashboard?:language=en-GB&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true" ></iframe>
        	
            <style>{`
        #data{
            width:80vw;
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
            iframe{
                display: block;
                margin: 0 auto;
                /* padding: auto; */
                margin-top: 50px;
            }
      `}</style>
        </div>
    );
}
export default Page1;