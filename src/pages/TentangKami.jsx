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
import { Carousel } from "flowbite-react";


function TentangKami() {
  return (
    <div>
      {/* header */}
        <div className="bg-slate-100 h-[400px] flex flex-col justify-center align-middle">
            <h1 className="text-center font-bold text-6xl" data-aos="fade-down" data-aos-duration="1000">Tentang <span className="text-indigo-700" >Kami</span></h1>
            <p className="text-center text-2xl p-14" data-aos="fade-up" data-aos-duration="2500">Platform digital untuk mencatat, berbagi, dan menginspirasi. Temukan kemudahan mencatat momen dan ide terbaikmu bersama kami.</p>
        </div>

        {/* body */}
        <div className="p-16 bg-white">
            {/* Tentang aplikasi */}
            <div className="h-[400px] flex flex-col flex-wrap align-middle justify-center">
                <h1 className="text-4xl font-bold" data-aos="fade-right" data-aos-duration="1000">Tentang <span className="text-indigo-700" >Aplikasi</span></h1>
                <br />
                <div className="w-[600px]" data-aos="fade-right" data-aos-duration="1000">
                    <p className="text-2xl">Catatan Kita adalah ruang digital yang membantu individu dan tim mencatat, mengelola ide, dan berbagi informasi dengan mudah. Kami percaya bahwa setiap catatan memiliki nilai yang dapat menginspirasi.</p>
                </div>
                <img src={about1} alt="about1" className="m-3" data-aos="fade-left" data-aos-duration="1000"/>
            </div>

            {/* Fitur Utama */}
            <div className="mt-24">
                <h1 className="text-4xl font-bold text-center" data-aos="zoom-in" data-aos-duration="1000">Fitur <span className="text-indigo-700">Utama</span></h1>
                <div className="flex flex-row justify-between pt-14">
                    <div className="w-[200px]" data-aos="flip-left" data-aos-duration="1000">
                        <center><img src={feature1} alt="feature1"/></center>
                        <p className="text-2xl font-semibold text-center">Pencatatan Digital</p>
                    </div>
                    <div className="w-[200px]" data-aos="flip-left" data-aos-duration="1000">
                        <center><img src={feature2} alt="feature2"/></center>
                        <p className="text-2xl font-semibold text-center">Pengelolaan yang rapih</p>
                    </div>
                    <div className="w-[200px]" data-aos="flip-left" data-aos-duration="1000">
                        <center><img src={feature3} alt="feature3"/></center>
                        <p className="text-2xl font-semibold text-center">Kolaborasi secara real time</p>
                    </div>
                    <div className="w-[200px]" data-aos="flip-left" data-aos-duration="1000">
                        <center><img src={feature4} alt="feature4"/></center>
                        <p className="text-2xl font-semibold text-center">Personalisasi</p>
                    </div>
                </div>
            </div>
          </div>
          {/* developer */}
          <div className="pt-10 bg-blue-200 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-4xl font-bold text-center">Developer</h1>
              <div className="h-96">
                <Carousel>
                  <div className="mx-auto flex flex-row justify-around pt-14 pb-20">
                    <div>
                        <img src={dev1} alt="dev1" className="w-[250px] object-cover object-top h-[250px] rounded-full" />
                        <p className="text-2xl text-center font-semibold mt-3">Luthfi Hadhit Habibi</p>
                    </div>
                    <div>
                        <img src={dev2} alt="dev2" className="w-[250px] object-cover object-top h-[250px] rounded-full"/>
                        <p className="text-2xl text-center font-semibold mt-3">Muhamad Syaiful Bahri</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev3} alt="dev3" className="w-[250px] object-cover object-top h-[250px] rounded-full"/>
                        <p className="text-2xl text-center font-semibold mt-3">Andreas Kurniawan Rusli</p>
                    </div>
                  </div>
                  <div className="mx-auto flex flex-row justify-around pt-14 pb-20">
                    <div className="w-[250px]">
                        <img src={dev4} alt="dev4" className="w-[250px] object-cover object-top h-[250px] rounded-full"/>
                        <p className="text-2xl text-center font-semibold mt-3">Elman Nabil</p>
                    </div>
                    <div className="w-[250px]">
                        <img src={dev5} alt="dev5" className="w-[250px] object-cover object-top h-[250px] rounded-full"/>
                        <p className="text-2xl text-center font-semibold mt-3">Shayhan Sagufta</p>
                    </div>
                  </div>
                </Carousel>
              </div>
          </div>
    </div>
  );
}

export default TentangKami;