import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
  };

  return (
    <div>
      <div className="px-12  pt-16">
        <h1 className="text-lime-700 text-6xl max-w-[750px] font-bold">
          Cari rumah yang sesuai dengan anda
        </h1>
        <Slider {...settings} className="w-[900px]  mx-auto mt-12">
          <div>
            <img
              src={require("../images/homea.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
          </div>
          <div>
            <img
              src={require("../images/homeb.png")}
              alt="Credit to Alisa Anton on Unsplash"
            />
          </div>
          <div>
            <img
              src={require("../images/homec.jpg")}
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
          </div>
          <div>
            <img
              src={require("../images/homed.jpg")}
              alt="Credit to Pierre Châtel-Innocenti on Unsplash"
            />
          </div>
        </Slider>
        <h1 className="text-lime-700  text-6xl mt-28 font-bold">
          Cari Informasi Properti yang anda butuhkan
        </h1>
        <div className="flex gap-12 mt-12 mx-auto w-[850px]  justify-center">
          <div>
            <img
              src={require("../images/1.jpeg")}
              className="bg-red-400 rounded-xl h-96 w-72"
              alt="Credit to Joshua Earle on Unsplash"
            />
            <button className="bg-[#198754] text-white w-full rounded-full p-2 mt-2">
              Selengkapnya
            </button>
          </div>
          <div>
            <img
              src={require("../images/2.jpeg")}
              className="bg-red-400 rounded-xl h-96 w-72"
              alt="Credit to Alisa Anton on Unsplash"
            />
            <button className="bg-[#198754] text-white w-full rounded-full p-2 mt-2">
              Selengkapnya
            </button>
          </div>
          <div>
            <img
              src={require("../images/3.jpeg")}
              className="bg-red-400 rounded-xl h-96 w-72"
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
            <button className="bg-[#198754] text-white w-full rounded-full p-2 mt-2">
              Selengkapnya
            </button>
          </div>
        </div>
        <div className="md:flex mt-12 items-center justify-center text-center gap-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={require("../images/logorumah.png")} alt="" />
            <h1 className="text-[#198754] text-3xl font-bold">
              Cari rumah yang sesuai dengan anda
            </h1>
            <p>
              Sepakat telah bekerja sama dengan lebih dari 100 perumahan di
              wilayah Lumajang, Jember, Bondowoso, Situbondo, dan Banyuwangi.
              Dengan ini, user memiliki banyak pilihan untuk jenis rumah yang
              diinginkan dengan mengetahui langsung harga hingga spesifikasi
              rumah tersebut.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={require("../images/logokoper.png")} alt="" />
            <h1 className="text-[#198754] text-3xl font-bold">
              Memilih agen properti sendiri
            </h1>
            <p>
              Dengan aplikasi sepakat, user dapat memilih sendiri agen yang akan
              dia pilih dalam proses pembelian rumah. Sepakat akan menampilkan
              profil lengkap agen tersebut, sehingga user dapat mengetahui
              kualifikasi dari agen yang dia pilih.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={require("../images/logosite.png")} alt="" />
            <h1 className="text-[#198754] text-3xl font-bold">
              Memilih kavling sendiri dengan siteplan aktif dan realtime
            </h1>
            <p>
              Sepakat memiliki fitur siteplan aktif, yaitu dapat mengupdate
              kavling yang telah terjual dan belum terjual. Dengan fitur ini,
              user dapat memilih sendiri kavling yang dia inginkan, dan
              mengetahui langsung gambar rumah tersebut tanpa harus survey ke
              lokasi.
            </p>
          </div>
        </div>
      </div>
      <div className="dekorasi -mb-2  w-48 h-[75px]">
        <img src={require("../images/decor.png")} alt="" />
        <img src={require("../images/decor.png")} alt="" />
      </div>
      <div className="orangesession bg-[#f2eec8] h-[850px] px-12 flex gap-16">
        <div className="flex  m-auto">
          <div className=" w-1/2 tracking-widest">
            <h1 className="text-[#f56600] w-[] font-bold text-5xl ">
              Download Aplikasi Sepakat
            </h1>
            <p className="mt-12 text-3xl font-bold italic">
              #MudahCariProperti
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=id.asc.sepakat"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="mt-12 h-12 cursor-pointer"
                src={require("../images/ps.png")}
                alt=""
              />
            </a>
          </div>
          <div className=" w-1/2 relative flex ">
            <img
              className="inline-block"
              src={require("../images/hp1.png")}
              alt=""
            />
            <img
              className="inline-block absolute left-1/3"
              src={require("../images/hp2.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="orangebottomsession flex h-[335px] bg-[#f56600]">
        <div className="mx-12 flex justify-between w-full contain  my-auto">
          <div>
            <a
              className="gap-4"
              href="https://www.youtube.com/channel/UChSicdrwHc5api6jWRCICCQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inline-block mr-4 cursor-pointer "
                src={require("../images/yt.png")}
                alt=""
              />
            </a>
            <a
              className="gap-4"
              href="https://www.instagram.com/sepakat.properti/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inline-block mr-4 cursor-pointer"
                src={require("../images/ig.png")}
                alt=""
              />
            </a>

            <a
              className="gap-4"
              href="https://www.tiktok.com/@sepakat.properti"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inline-block mr-4 cursor-pointer"
                src={require("../images/tik.png")}
                alt=""
              />
            </a>
            <a
              className="gap-4"
              href="https://web.facebook.com/sepakat.properti?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inline-block mr-4 cursor-pointer"
                src={require("../images/fb.png")}
                alt=""
              />
            </a>

            <div className="flex items-center gap-2 mt-4">
              <img src={require("../images/s.png")} alt="" />
              <h1 className="text-white font-bold tracking-widest text-3xl">
                Sepakat
              </h1>
            </div>
          </div>

          <div className="text-white font-bold text-xl">
            <p className="cursor-pointer hover:text-slate-300">
              Syarat & Ketentuan
            </p>
            <p className="mt-6 cursor-pointer hover:text-slate-300">
              Menjadi Agen
            </p>
          </div>

          <div className="text-white font-bold text-xl">
            <p className="cursor-pointer hover:text-slate-300">
              Customer Service
            </p>
            <p className="mt-6 cursor-pointer hover:text-slate-300">
              Kebijakan dan Privasi
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className=" text-white font-bold text-xl">
              Informasi lebih hubungi
            </p>
            <div className="bg-white w-80 h-10 rounded-md flex items-center gap-2">
              <img className="ml-2" src={require("../images/@.png")} alt="" />

              <p>sepakat.asc@gmail.com</p>
            </div>
            <div className="bg-white w-80 h-10 rounded-md flex items-center gap-2">
            
            <a
            className="gap-4"
            href="https://api.whatsapp.com/send?phone=+6281335258181&text=Halo"
            target="_blank"
            rel="noreferrer"
          >
         
          <img className="ml-2" src={require("../images/wa.png")} alt="" />
          </a>


              <p>0813 3525 8181</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
