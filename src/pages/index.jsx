import Navbar from "../components/Navbar";
import Adhan from "../components/Adhan";

import bismilah from "../assets/bismilah.svg";
import gate from "../assets/gate.svg";
import masjid from "../assets/masjid.svg";
import andalus from "../assets/andalus.svg";
import Blogs from "../components/Blogs";
import Activities from "../components/Activities";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        id="main"
        className="flex flex-col justify-center items-center h-screen mt-12"
      >
        <img
          src={bismilah}
          alt="bismilah"
          width={450}
          className="invisible lg:visible"
        />
        <img src={gate} alt="gate" width={500} className="hidden lg:block" />
        <div className="-mt-16">
          <Adhan />
        </div>
      </div>

      {/* about us  */}
      <div
        id="about-us"
        className="bg-white flex relative py-20 px-20 space-x-12 flex-col-reverse lg:flex-row"
      >
        <img
          alt="bg-andalus"
          src={andalus}
          className="absolute top-0 left-0"
          fill
        />
        <div className="flex flex-col justify-center items-center flex-1 mt-6 mb-12 lg:my-0">
          <div className="text-[#35506F] text-4xl font-bold">
            حـــــــــــولنـــــــــــا
          </div>
          <div className="text-right text-xl mt-8">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن. لوريم ايبسوم دولار
            سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
            فينايم,كيواس نوستريد أكسير سيتاشن
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img alt="masjid" src={masjid} className="rounded-3xl shadow-xl" />
        </div>
      </div>
      {/* Activities */}
      <div id="activities" className="py-10 px-20 text-white">
        <Activities />
      </div>
      {/* Blogs */}
      <div id="blogs" className="bg-white py-20 px-20">
        <Blogs />
      </div>
      {/* Form */}
      <div id="call-us" className="py-20 px-20">
        <Form />
      </div>
    </div>
  );
}
