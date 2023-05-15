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
          Harsh Kumar Jain - RA2011026010141
        </div>
        <div className=" w-full h-full flex flex-col items-center my-4">
          <div className=" text-2xl font-bold my-1">
            About The Project
          </div>
          <div className=" my-1 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque turpis ligula, quis finibus risus commodo ac. Aenean facilisis sit amet ante eu feugiat. Duis nec rhoncus ligula, ac pharetra justo. Donec scelerisque, nibh vel tristique dictum, ante leo laoreet magna, eu sagittis lorem justo ac erat. Nullam elementum lacus erat, vitae finibus dui suscipit a. Nam varius elementum massa sit amet semper. Pellentesque at est sit amet justo tristique luctus. Nam pellentesque sagittis tempor. Suspendisse potenti. Donec sed interdum nibh. Etiam viverra nulla quis sem venenatis, eu commodo diam feugiat. Aenean condimentum felis odio. Donec consequat nibh quam, in ullamcorper est porta nec.Etiam a ipsum sollicitudin, vulputate metus at, aliquet quam. Nunc ac mauris ultrices, gravida nibh pretium, laoreet neque. Aliquam metus tortor, vestibulum eget lacus egestas, euismod congue lectus. Nulla pulvinar iaculis mauris eget sodales. Pellentesque et justo vel ex semper consequat. Cras at ipsum ut odio pellentesque volutpat. Mauris dictum aliquam velit quis porttitor. Curabitur suscipit in leo ut vestibulum. In lobortis pharetra elit, sed volutpat enim venenatis laoreet. Nam ligula ligula, suscipit et dolor eu, placerat tristique lectus. Ut eget gravida massa, et bibendum massa. Aliquam vitae varius nisl. Nulla non pharetra sapien. Integer blandit velit nisl, nec convallis turpis imperdiet in. Pellentesque in enim sit amet dolor mollis consequat vitae non dui. Sed id auctor risus, at tristique justo.
          </div>
        </div>
        <div className=" text-4xl font-bold my-4">
          Assignments
        </div>
        <div className=" w-full h-full flex flex-col items-center my-6">
          <div className=" text-3xl font-bold my-2">Tableau Project</div>
          <div className=" w-full grid grid-cols-7 my-2">
            <div className=" w-full h-[220px] col-span-4">
              <div className=" w-full text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque turpis ligula, quis finibus risus commodo ac. Aenean facilisis sit amet ante eu feugiat. Duis nec rhoncus ligula, ac pharetra justo. Donec scelerisque, nibh vel tristique dictum, ante leo laoreet magna, eu sagittis lorem justo ac erat. Nullam elementum lacus erat, vitae finibus dui suscipit a. Nam varius elementum massa sit amet semper. Pellentesque at est sit amet justo tristique luctus. Nam pellentesque sagittis tempor. Suspendisse potenti. Donec sed interdum nibh. Etiam viverra nulla quis sem venenatis, eu commodo diam feugiat. Aenean condimentum felis odio. Donec consequat nibh quam, in ullamcorper est porta nec.</div>
             
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
            <div className=" w-full h-[220px] col-span-4  text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque turpis ligula, quis finibus risus commodo ac. Aenean facilisis sit amet ante eu feugiat. Duis nec rhoncus ligula, ac pharetra justo. Donec scelerisque, nibh vel tristique dictum, ante leo laoreet magna, eu sagittis lorem justo ac erat. Nullam elementum lacus erat, vitae finibus dui suscipit a. Nam varius elementum massa sit amet semper. Pellentesque at est sit amet justo tristique luctus. Nam pellentesque sagittis tempor. Suspendisse potenti. Donec sed interdum nibh. Etiam viverra nulla quis sem venenatis, eu commodo diam feugiat. Aenean condimentum felis odio. Donec consequat nibh quam, in ullamcorper est porta nec.</div>
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
            <div className=" w-full h-[220px] col-span-4">
              <div className=" w-full text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque turpis ligula, quis finibus risus commodo ac. Aenean facilisis sit amet ante eu feugiat. Duis nec rhoncus ligula, ac pharetra justo. Donec scelerisque, nibh vel tristique dictum, ante leo laoreet magna, eu sagittis lorem justo ac erat. Nullam elementum lacus erat, vitae finibus dui suscipit a. Nam varius elementum massa sit amet semper. Pellentesque at est sit amet justo tristique luctus. Nam pellentesque sagittis tempor. Suspendisse potenti. Donec sed interdum nibh. Etiam viverra nulla quis sem venenatis, eu commodo diam feugiat. Aenean condimentum felis odio. Donec consequat nibh quam, in ullamcorper est porta nec.</div>
              
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
            <div className=" w-full h-[220px] col-span-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque turpis ligula, quis finibus risus commodo ac. Aenean facilisis sit amet ante eu feugiat. Duis nec rhoncus ligula, ac pharetra justo. Donec scelerisque, nibh vel tristique dictum, ante leo laoreet magna, eu sagittis lorem justo ac erat. Nullam elementum lacus erat, vitae finibus dui suscipit a. Nam varius elementum massa sit amet semper. Pellentesque at est sit amet justo tristique luctus. Nam pellentesque sagittis tempor. Suspendisse potenti. Donec sed interdum nibh. Etiam viverra nulla quis sem venenatis, eu commodo diam feugiat. Aenean condimentum felis odio. Donec consequat nibh quam, in ullamcorper est porta nec.</div>
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