import React from "react";
import photo1 from "../assets/tableau.png"
import photo2 from "../assets/gephi.png"
import photo3 from "../assets/python_photo.png"
import photo4 from "../assets/D3_js.png"
import { useNavigate } from "react-router-dom"
function Home(){
    const navigate = useNavigate();
    const handleTab1=()=>{
      navigate('/assignment1')

    }
    const handleTab2=()=>{

        window.open("https://public.tableau.com/app/profile/harsh.kumar.jain5800/viz/adani-group-stock-analysis/Story3")
      }
    
    const handleGephi=()=>{
        navigate('/assignment2')
      }
      const handlpyth1=()=>{
        const Output1 = 'https://harshjainsk.github.io/18CSE301J_RA2011026010141/python-code/python-code-and-output.html';
    window.open(Output1, '_blank');
       
      }
      const handlpyth2=()=>{
        const Output2 = 'https://harshjainsk.github.io/18CSE301J_RA2011026010141/Flipbook%20(2)/index.html';
    window.open(Output2, '_blank');
       
      }
      const handlpyth3=()=>{
        const Output3 = 'https://gist.github.com/harshjainsk/dada9c8a17c64448335ceff5387773a8';
    window.open(Output3, '_blank');
       
      }
      const handlevideo=()=>{
        window.open("https://drive.google.com/file/d/1M3sKz-zCyBjAeNfBdtNwknuUNZ9P9nMH/view?usp=sharing")
      }
      const handleD3=()=>{
        window.open("https://harshjainsk.github.io/18CSE301J_RA2011026010141/d3_assignment.html")
      }
    return(
        <div className=" w-full h-full bg-black text-white ">
      <div className=" w-full h-full flex flex-col  items-center py-10 px-16">
        <div className=" text-3xl font-bold my-1">
          18CSE301J INFORMATION VISUALIZATION
        </div>
        <div className=" text-3xl font-bold my-1">
          Harsh Kumar Jain
        </div>
        <div className=" text-3xl font-bold my-1">
          RA2011026010141
        </div>
        
        <div className=" w-full h-full flex flex-col items-center my-6">
          <div className=" text-3xl font-bold my-2">Tableau Project</div>
          <div className=" w-full grid grid-cols-7 my-2">
            <div className=" w-full h-[300px] col-span-4">
              <div className=" w-full text-lg">Tableau analysis of Airbnb data involves using Tableau's tools and functionalities to explore and gain insights from the dataset. It includes data preparation, creating visualizations, and deriving meaningful findings. The analysis typically focuses on various aspects such as location, pricing, reviews, and time-based trends. With Tableau, you can create interactive maps to visualize the spatial distribution of Airbnb listings and identify popular areas. Pricing analysis helps understand the relationship between pricing and factors like property type and amenities. By analyzing customer reviews and ratings, you can gauge satisfaction levels and identify common themes. Time-based analysis uncovers seasonal variations and booking patterns. The goal is to derive actionable insights and present them effectively, using Tableau's storytelling capabilities to create a narrative flow. Tableau analysis of Airbnb data empowers decision-making, informs strategies, and enhances understanding of the Airbnb marketplace.</div>
             
            </div>
            <div className=" w-full h-[200px] col-span-3 items-center">
              <img className=" object-contain  h-[200px] w-full" src={photo1} alt="" />
            </div>
          </div>

          <div className=" w-full flex justify-around items-center my-3">
          <div onClick={handleTab1} ><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Visualization Airbnb</button></div>
          <div onClick={handleTab2} ><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Visualization Adani Group</button></div>

          <div onClick={handlevideo}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Video Demostration</button></div>
            
          </div>

        </div>
        <div className=" w-full h-full flex flex-col items-center my-6">
          <div className=" text-3xl font-bold my-2">Gephi Project</div>
          <div className=" w-full grid grid-cols-7 my-2">
            <div className=" w-full h-[220px] col-span-4  text-lg">Gephi is an open-source software tool designed for network analysis and visualization. It is built using Java on the NetBeans platform, and provides a range of features for analyzing and visualizing complex networks. With Gephi, users can explore and understand networks through interactive visualizations, and can apply a range of algorithms and metrics to gain insights into the structure and behavior of networks. Its open-source nature also enables customization and extensibility by developers.</div>
            <div className=" w-full h-[200px] col-span-3 items-center">
              <img className=" object-contain  h-[200px] w-full" src={photo2} alt="" />
            </div>
          </div>
          <div className=" w-full flex justify-around items-center my-3">
          <div onClick={handleGephi}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Visualization</button></div>
                      
          </div>
          
        </div>
        <div className=" w-full h-full flex flex-col items-center my-6">
          <div className=" text-3xl font-bold my-2">Python Project</div>
          <div className=" w-full grid grid-cols-7 my-2">
            <div className=" w-full h-[350px] col-span-4">
              <div className=" w-full text-lg">Python data analysis of Adani stock data involves utilizing Python libraries like pandas, NumPy, and matplotlib to explore and analyze historical stock data of Adani Group companies. The process typically includes data loading, cleansing, and manipulation to ensure data quality. Using pandas, you can calculate various financial metrics such as daily returns, moving averages, and trading volume. Exploratory data analysis techniques can be applied to understand trends, patterns, and relationships within the data. Visualizations created with matplotlib can help visualize stock price movements, trading volume, and other relevant information. Statistical analysis and time series modeling can be performed to identify seasonality, trends, and potential forecasting. Python's rich ecosystem of libraries enables the application of machine learning techniques for predictive modeling and risk analysis. The goal is to derive insights that aid investment decisions, risk management, and portfolio optimization. Python data analysis of Adani stock data provides valuable information for investors, analysts, and traders, facilitating data-driven strategies in the stock market.</div>
              
            </div>            
            <div className=" w-full h-[200px] col-span-3 items-center">
              <img className=" object-contain  h-[200px] w-full" src={photo3} alt="" />
            </div>
          </div>
          <div className=" w-full flex flex-row justify-around items-center mt-3">
                <div onClick={handlpyth1}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Output for python code</button></div>
                <div onClick={handlpyth2}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Data description</button></div>
                <div onClick={handlpyth3}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Python code</button></div>
              </div>
        </div>
        <div className=" w-full h-full flex flex-col items-center my-6">
          <div className=" text-3xl font-bold my-2">D3.js Project</div>
          <div className=" w-full grid grid-cols-7 my-2">
            <div className=" w-full h-[220px] col-span-4 text-lg">D3 (Data-Driven Documents) is a JavaScript library for data visualization that provides a range of tools for creating dynamic, interactive visualizations for the web. D3 enables the creation of a wide range of visualizations, including line charts, scatter plots, and heat maps, and provides a range of customization options for creating bespoke designs. Its emphasis on data-driven design makes it an essential tool for creating data visualizations that communicate insights effectively.</div>
            <div className=" w-full h-[200px] col-span-3 items-center">
              <img className=" object-contain  h-[200px] w-full" src={photo4} alt="" />
            </div>
          </div>
          <div className=" w-full flex justify-around items-center my-3">
          <div onClick={handleD3}><button className=" px-3 py-2 bg-indigo-600 text-xl  text-white font-semibold rounded-lg">Visualization</button></div>            
          </div>
        </div>



      </div>
    </div>
    );
}
export default Home;