import { Button, Input } from "@nextui-org/react";
import NoteBox from "../components/NoteBox";

const notes = [
  {
    id: 1,
    title: "Note 1",
    desc: "Bahasa",
    body: "Bilangan prima adalah bilangan bulat yang lebih besar dari 1 dan hanya memiliki dua faktor pembagi, yaitu 1 dan bilangan itu sendiri. Dengan kata lain, bilangan prima hanya bisa dibagi habis oleh 1 dan dirinya sendiri.",
    img: "src/assets/png/bahasa.png",
  },
  {
    id: 2,
    title: "Note 2",
    desc: "hukum",
    body: "Energi potensial adalah energi yang dimiliki oleh suatu benda karena posisi atau keadaannya. Bayangkan sebuah batu di atas tebing. Batu tersebut memiliki energi potensial karena posisinya yang tinggi. Jika batu itu dijatuhkan, energi potensialnya akan berubah menjadi energi kinetik (energi gerak)....",
    img: "src/assets/png/hukum.png",
  },
  {
    id: 3,
    title: "Note 3",
    desc: "matematika",
    body: "Energi Mantab adalah energi yang dimiliki oleh suatu benda karena posisi atau keadaannya. Bayangkan sebuah batu di atas tebing. Batu tersebut memiliki energi potensial karena posisinya yang tinggi. Jika batu itu dijatuhkan, energi potensialnya akan berubah menjadi energi kinetik (energi gerak)....",
    img: "src/assets/png/matematika.png",
  },

  {
    id: 4,
    title: "Note 4",
    desc: "Biology",
    body: "Bilangan prima adalah bilangan bulat yang lebih besar dari 1 dan hanya memiliki dua faktor pembagi, yaitu 1 dan bilangan itu sendiri. Dengan kata lain, bilangan prima hanya bisa dibagi habis oleh 1 dan dirinya sendiri.",
    img: "src/assets/png/biologi.png",
  },
  {
    id: 5,
    title: "Note 5",
    desc: "teknik",
    body: "Energi potensial adalah energi yang dimiliki oleh suatu benda karena posisi atau keadaannya. Bayangkan sebuah batu di atas tebing. Batu tersebut memiliki energi potensial karena posisinya yang tinggi. Jika batu itu dijatuhkan, energi potensialnya akan berubah menjadi energi kinetik (energi gerak)....",
    img: "src/assets/png/teknik.png",
  },
  {
    id: 6,
    title: "Note 6",
    desc: "agama",
    body: "Energi Mantab adalah energi yang dimiliki oleh suatu benda karena posisi atau keadaannya. Bayangkan sebuah batu di atas tebing. Batu tersebut memiliki energi potensial karena posisinya yang tinggi. Jika batu itu dijatuhkan, energi potensialnya akan berubah menjadi energi kinetik (energi gerak)....",
    img: "src/assets/png/agama.png",
  },
];

const Catatan = () => {
  return (
    <>
      <div className="pt-10">
        <div className="flex justify-center max-w-screen-lg mx-auto">
          <div className="flex flex-col items-end w-full">
            <div className="flex items-center w-full">
              <Input placeholder="Cari Catatan . . . " className="" color="" />

              <Button className="ml-2 bg-[#5647F9]">
                <img src="src/assets/svg/iconSearch.svg" alt="logo search" />
              </Button>
            </div>

            <Button className="mt-10 bg-[#5647F9] text-base font-semibold text-white">
              Bikin Catatan
              <img src="src/assets/svg/iconPlus.svg" alt="logo plus" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-10 justify-items-center mx-auto  max-w-screen-xl">
          {notes.map((note) => (
            <NoteBox
              key={note.id}
              title={note.title}
              img={note.img}
              body={note.body}
              desc={note.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catatan;
