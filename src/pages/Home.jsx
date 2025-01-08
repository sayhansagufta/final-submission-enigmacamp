import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import PopularNotes from "../components/PopularNotes";
import categoryService from "../services/categoryService";
import favoriteService from "../services/favoriteService";
import { toast } from "react-toastify";
import Category from "../components/Category";

function Home() {
  const [categories, setCategories] = useState([]);
  const [popularNotes, setPopularNotes] = useState([]);

  const getCategories = async () => {
    try {
      const response = await categoryService.getCategory();
      setCategories(response.data);
    } catch (error) {
      toast.error(error);
    }
  };
  const getPopularNotes = async () => {
    try {
      const response = await favoriteService.getFavoriteNotes();
      const data = findPopular(response.data);
      setPopularNotes(data);
    } catch (error) {
      toast.error("terjadi kesalahan mengambil catatan populer");
    }
  };

  const findPopular = (data = []) => {
    const value = [];
    data.forEach((item) => {
      let existingItem = value.find((v) => v.noteId === item.noteId);
      if (!existingItem) {
        value.push({
          noteId: item.noteId,
          title: item.note.title,
          jmluser: 1,
        });
      } else {
        existingItem.jmluser++;
      }
    });
    const sortedValue = value.sort((a, b) => b.jmluser - a.jmluser);
    return sortedValue.slice(0, 5);
  };
  useEffect(() => {
    getCategories();
    getPopularNotes();
  }, []);
  return (
    <>
      <section className="hero flex flex-col items-center pb-14">
        <h1
          className="text-center font-extrabold text-5xl  pb-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Catatan Kuliah Jadi Lebih <br />
          <span className="text-[#5647F9]">Mudah</span> dan{" "}
          <span className="text-[#FFB400]">Berbagi</span> <br />
          Pengetahuan Lebih Cepat!
        </h1>
        <p
          className="font-light text-center text-xl text-gray-500 leading-none pb-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Kamu dapat menyimpan semua catatan kuliahmu <br />
          di satu tempat, berbagi dengan teman, dan menemukan
          <br />
          materi yang relevan dari mahasiswa lainnya.
        </p>
        <Button
          data-aos="fade-up"
          data-aos-duration="2500"
          radius="full"
          size="lg"
          className='bg-white border text-[#5647F9] border-[#5647F9] hover:bg-[#5647F9] hover:text-white group'
          endContent={<img className='bg-[#5647F9] size-7 p-1 -me-2  rounded-full -rotate-45 group-hover:rotate-0 transition-all duration-500' src="src/assets/svg/arrow.svg" alt="login" />}
        >
          Daftar Sekarang
        </Button>
      </section>
      <section className="kategori bg-white">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto py-16">
          <p className="font-bold text-2xl">Cari Catatan <br />
            Berdasarkan Kategori</p>
          <Button
            data-aos="fade-left" data-aos-duration="1000"
            radius='full'
            size="lg"
            className='bg-white border text-[#5647F9] border-[#5647F9] hover:bg-[#5647F9] hover:text-white group'
            endContent={<img className='bg-[#5647F9] size-7 p-1 -me-2  rounded-full -rotate-45 group-hover:rotate-0 transition-all duration-500' src="src/assets/svg/arrow.svg" alt="login" />}
          >
            Lihat Semua
          </Button>
        </div>
        <div className="cards flex flex-wrap gap-[15px] max-w-6xl mx-auto overflow-auto max-h-96">
          {
            categories && categories.map((category, index) => {
              return <Category category={category.name} number={category.notes.length} key={index} />
            })
          }
        </div>
      </section>
      <section className="populer bg-white pb-40">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto py-16">
          <p className="font-bold text-2xl">Catatan Populer</p>
          <Button
            data-aos="fade-left" data-aos-duration="1000"
            radius='full'
            size="lg"
            className='bg-white border text-[#5647F9] border-[#5647F9] hover:bg-[#5647F9] hover:text-white group'
            endContent={<img className='bg-[#5647F9] size-7 p-1 -me-2  rounded-full -rotate-45 group-hover:rotate-0 transition-all duration-500' src="src/assets/svg/arrow.svg" alt="login" />}
          >
            Lihat Semua
          </Button>
        </div>
        <div className="cards flex flex-row gap-6 max-w-6xl mx-auto">
          {popularNotes &&
            popularNotes.map((item) => {
              return (
                <PopularNotes
                  jmluser={item.jmluser}
                  title={item.title}
                  key={item.noteId}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Home;