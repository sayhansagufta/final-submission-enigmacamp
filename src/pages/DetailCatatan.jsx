import React from "react";


function Favorit() {
    return (
    <div className="container mx-auto max-w-6xl">
      <div className="bg-white p-20 rounded-2xl shadow-md mb-10">
        <div className="rounded-2xl bg-[#5647F9] w-full h-60 mb-8">
          <img src="src/assets/arrow.svg" alt="" />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-center w-full mb-8">
            <div className="rounded-full p-6 bg-yellow-400">
              <img src="src/assets/arrow.svg" alt="s" />
            </div>
            <div className="flex flex-col pl-3">
              <h2 className="font-bold">Pembuat</h2>
              <p className="font-light">Syaiful</p>
            </div>
          </div>
          <div className="flex flex-row items-center  justify-center w-full mb-8">
            <div className="rounded-full p-6 bg-yellow-400">
              <img src="src/assets/arrow.svg" alt="s" />
            </div>
            <div className="flex flex-col pl-3">
              <h2 className="font-bold">Kategori</h2>
              <p className="font-light">Fisika</p>
            </div>
          </div>
          <div className="flex flex-row items-center  justify-center w-full mb-8">
            <div className="rounded-full p-6 bg-yellow-400">
              <img src="src/assets/arrow.svg" alt="s" />
            </div>
            <div className="flex flex-col pl-3">
              <h2 className="font-bold">Dibuat</h2>
              <p className="font-light">06 Jan 2025</p>
            </div>
          </div>
          <div className="flex flex-row items-center  justify-center w-full mb-8">
            <div className="rounded-full p-6 bg-yellow-400">
              <img src="src/assets/arrow.svg" alt="s" />
            </div>
            <div className="flex flex-col pl-3">
              <h2 className="font-bold">Favorit</h2>
              <p className="font-light">Tidak</p>
            </div>
          </div>

        </div>
        <h1 className="text-3xl font-bold pb-16">Energi Potensial</h1>
        <p>
        <b>Energi potensial</b> adalah energi yang dimiliki oleh suatu benda karena posisi atau keadaannya. Bayangkan sebuah batu di atas tebing. Batu tersebut memiliki energi potensial karena posisinya yang tinggi. Jika batu itu dijatuhkan, energi potensialnya akan berubah menjadi energi kinetik (energi gerak).
            <br></br>
            <br></br>
            <b>Contoh Energi Potensial:</b><br></br>
            <b>Energi Potensial Gravitasi:</b> Energi yang dimiliki benda karena ketinggiannya terhadap suatu acuan (biasanya permukaan bumi).<br></br>
            <b>Energi Potensial Elastis:</b> Energi yang tersimpan dalam benda elastis yang diregangkan atau dimampatkan, seperti pegas atau karet.<br></br>
            <b>Energi Potensial Kimia:</b> Energi yang tersimpan dalam ikatan kimia suatu zat. Misalnya, bensin memiliki energi potensial kimia yang dapat dilepaskan saat dibakar.<br></br>
            <br></br>
            <b>Energi Potensial Listrik:</b> Energi yang dimiliki oleh muatan listrik dalam medan listrik.<br></br>

            <b>Rumus Energi Potensial Gravitasi:</b><br></br>
            Ep = m * g * h<br></br>
            Ep = <i>Energi potensial</i> (Joule)<br></br>
            m = <i>Massa benda</i> (kg)<br></br>
            g = <i>Percepatan gravitasi</i> (m/s²)<br></br>
            h = <i>Ketinggian benda</i> (m) <br></br>
        </p>
      </div>
    </div>
    );
  }
  
  export default Favorit;