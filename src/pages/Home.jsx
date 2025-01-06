import { Button } from "@nextui-org/react";
import React from "react";

function Home() {
  return (
    <>
      <section className="hero flex flex-col items-center pb-14">
        <h1 className="text-center font-extrabold text-5xl  pb-5" data-aos="fade-down" data-aos-duration="1000">
          Catatan Kuliah Jadi Lebih <br />
          <span className="text-[#5647F9]">Mudah</span> dan <span className="text-[#FFB400]">Berbagi</span> <br />
          Pengetahuan Lebih Cepat!
        </h1>
        <p className="font-light text-center text-xl text-gray-500 leading-none pb-5" data-aos="fade-down" data-aos-duration="1500">
          Kamu dapat menyimpan semua catatan kuliahmu <br />
          di satu tempat, berbagi dengan teman, dan menemukan<br />
          materi yang relevan dari mahasiswa lainnya.
        </p>
        <Button
          data-aos="fade-up" data-aos-duration="2500"
          radius='full'
          size="lg"
          className='bg-white border border-[#5647F9] hover:bg-[#5647F9] hover:text-white group'
          endContent={<img className='bg-[#5647F9] size-7 p-1 -me-2  rounded-full -rotate-45 group-hover:rotate-0 transition-all duration-500' src="src/assets/svg/arrow.svg" alt="login" />}
        >
          Daftar Sekarang
        </Button>
      </section >
      <section className="kategori bg-white">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto py-16">
          <p className="font-bold text-2xl">Cari Catatan <br />
            Berdasarkan Kategori</p>
          <button className="rounded-full font-semibold border py-2 px-4 border-gray-500 w-fit hover:bg-[#5647F9] hover:text-white">Lihat Semua</button>
        </div>
        <div className="cards flex flex-wrap gap-[31px] max-w-6xl mx-auto">
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Matematika</p>
                <p className="text-sm text-gray-500"><span>1,398</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Sejarah</p>
                <p className="text-sm text-gray-500"><span>190</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Teknik</p>
                <p className="text-sm text-gray-500"><span>476</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Hukum</p>
                <p className="text-sm text-gray-500"><span>2,986</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Fisika</p>
                <p className="text-sm text-gray-500"><span>176</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Bahasa Asing</p>
                <p className="text-sm text-gray-500"><span>812</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Biologi</p>
                <p className="text-sm text-gray-500"><span>239</span> catatan</p>
              </div>
            </div>
          </div>
          <div className="card-item flex flex-row justify-between items-center ">
            <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
              <div className="rounded-full p-4 bg-[#5647F9]">
                <img src="src/assets/svg/arrow.svg" alt="" />
              </div>
              <div>
                <p className="font-semibold text-base">Agama</p>
                <p className="text-sm text-gray-500"><span>3,623</span> catatan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="populer bg-white pb-40">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto py-16">
          <p className="font-bold text-2xl">Catatan Populer</p>
          <button className="rounded-full font-semibold border py-2 px-4 border-gray-500 w-fit hover:bg-[#5647F9] hover:text-white">Lihat Semua</button>
        </div>
        <div className="cards flex flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col rounded-xl items-start w-[210px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
              <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold">Sel Hidup</p>
              <p className="font-light text-gray-500">Biologi</p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl items-start w-[210px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
              <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold">Sel Hidup</p>
              <p className="font-light text-gray-500">Biologi</p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl items-start w-[210px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
              <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold">Sel Hidup</p>
              <p className="font-light text-gray-500">Biologi</p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl items-start w-[210px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
              <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold">Sel Hidup</p>
              <p className="font-light text-gray-500">Biologi</p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl items-start w-[210px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
              <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold">Sel Hidup</p>
              <p className="font-light text-gray-500">Biologi</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;