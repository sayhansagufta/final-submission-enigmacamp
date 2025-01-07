import React from "react";
import about1 from "../assets/about/about1.svg"
import feature1 from "../assets/about/feature1.svg"
import feature2 from "../assets/about/feature2.svg"
import feature3 from "../assets/about/feature3.svg"
import feature4 from "../assets/about/feature4.svg"
import dev1 from "../assets/about/luthfi.jpg"
import dev2 from "../assets/about/Syaiful.jpg"
import dev3 from "../assets/about/Andre.png"
import dev4 from "../assets/about/Nabil.jpg"
import dev5 from "../assets/about/Shayhan.jpg"


function TentangKami() {
  var cont=0;

  const loopSlider = () => {
    var xx= setInterval(function(){
      switch(cont)
      {
      case 0:
        {
          $("#slider-1").fadeOut(400);
          $("#slider-2").delay(400).fadeIn(400);
          $("#sButton1").removeClass("bg-purple-800");
          $("#sButton2").addClass("bg-purple-800");
          cont=1;
          
          break;
        }
      case 1:
        {
        
          $("#slider-2").fadeOut(400);
          $("#slider-1").delay(400).fadeIn(400);
          $("#sButton2").removeClass("bg-purple-800");
          $("#sButton1").addClass("bg-purple-800");
          
          cont=0;
          
          break;
        }
      }
    },8000);
  }

  const reinitLoop = (time) => {
    clearInterval(xx);
    setTimeout(loopSlider(),time);
  }

  const sliderButton1 = () => {
    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0
  }

  const sliderButton2 = () => {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1
  }

  $(window).ready(() => {
    $("#slider-2").hide();
    $("#sButton1").addClass("bg-purple-800");
    
    loopSlider();
  })

  return (
    <div>
      {/* header */}
        <div className="bg-slate-100 h-[400px] flex flex-col justify-center align-middle">
            <h1 className="text-center font-bold text-6xl">Tentang <span className="text-indigo-700" >Kami</span></h1>
            <p className="text-center text-2xl p-14">Platform digital untuk mencatat, berbagi, dan menginspirasi. Temukan kemudahan mencatat momen dan ide terbaikmu bersama kami.</p>
        </div>

        {/* body */}
        <div className="p-16 bg-white">
            {/* Tentang aplikasi */}
            <div className="h-[400px] flex flex-col flex-wrap align-middle justify-center">
                <h1 className="text-4xl font-bold">Tentang <span className="text-indigo-700" >Aplikasi</span></h1>
                <br />
                <div className="w-[600px]">
                    <p className="text-2xl">Catatan Kita adalah ruang digital yang membantu individu dan tim mencatat, mengelola ide, dan berbagi informasi dengan mudah. Kami percaya bahwa setiap catatan memiliki nilai yang dapat menginspirasi.</p>
                </div>
                <img src={about1} alt="about1" className="m-3"/>
            </div>

            {/* Fitur Utama */}
            <div className="mt-24">
                <h1 className="text-4xl font-bold text-center">Fitur <span className="text-indigo-700">Utama</span></h1>
                <div className="flex flex-row justify-between pt-14">
                    <div className="w-[200px]">
                        <center><img src={feature1} alt="feature1"/></center>
                        <p className="text-2xl font-semibold text-center">Pencatatan Digital</p>
                    </div>
                    <div className="w-[200px]">
                        <center><img src={feature2} alt="feature2"/></center>
                        <p className="text-2xl font-semibold text-center">Pengelolaan yang rapih</p>
                    </div>
                    <div className="w-[200px]">
                        <center><img src={feature3} alt="feature3"/></center>
                        <p className="text-2xl font-semibold text-center">Kolaborasi secara real time</p>
                    </div>
                    <div className="w-[200px]">
                        <center><img src={feature4} alt="feature4"/></center>
                        <p className="text-2xl font-semibold text-center">Personalisasi</p>
                    </div>
                </div>
            </div>

            {/* developer */}
            <div className="mt-24">
                <h1 className="text-4xl font-bold text-center">Developer</h1>

                <div className="sliderAx h-auto">
                  <div id="slider-1" className="container mx-auto flex flex-row justify-around pt-14 gap-5">
                    <div>
                        <img src={dev1} alt="dev1" className="w-full object-cover object-top h-[250px]" />
                        <p className="text-2xl text-center font-semibold mt-3">Luthfi Hadhit Habibi</p>
                    </div>
                    <div>
                        <img src={dev2} alt="dev2" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl text-center font-semibold mt-3">Muhamad Syaiful Bahri</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev3} alt="dev3" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl text-center font-semibold mt-3">Andreas Kurniawan Rusli</p>
                    </div>
                  </div>
                  <div id="slider-2" className="container mx-auto flex flex-row justify-around pt-14 pb-10 gap-5"> 
                    <div className="w-[250px]">
                        <img src={dev4} alt="dev4" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl text-center font-semibold mt-3">Elman Nabil</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev5} alt="dev5" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl text-center font-semibold mt-3">Shayhan Sagufta</p>
                    </div>
                    <div>
                        <img src={dev1} alt="dev1" className="w-full object-cover object-top h-[250px]" />
                        <p className="text-2xl text-center font-semibold mt-3">Luthfi Hadhit Habibi</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-14 mx-auto pb-2">
                  <button id="sButton1" onClick={sliderButton1} className="bg-purple-400 rounded-full w-6 pb-2"></button>
                  <button id="sButton2" onClick={sliderButton2} className="bg-purple-400 rounded-full w-6 pb-2"></button>
                </div>

                {/* <div className="flex flex-row justify-between pt-14 gap-5">
                    <div>
                        <img src={dev1} alt="dev1" className="w-full object-cover object-top h-[250px]" />
                        <p className="text-2xl font-semibold mt-3">Luthfi Hadhit Habibi</p>
                    </div>
                    <div>
                        <img src={dev2} alt="dev2" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl font-semibold mt-3">Muhamad Syaiful Bahri</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev3} alt="dev3" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl font-semibold mt-3">Andreas Kurniawan Rusli</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev4} alt="dev4" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl font-semibold mt-3">Elman Nabil</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev5} alt="dev5" className="w-full object-cover object-top h-[250px]"/>
                        <p className="text-2xl font-semibold mt-3">Shayhan Sagufta</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  );
}

export default TentangKami;