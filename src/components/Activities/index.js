import React, { useRef, useState } from "react";
import ActivityItem from "./ActivityItem";
import masjid from "../../assets/masjid.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import useFetch from "../../hooks/useFetch";

export default function Activities() {
  const [swiperRef, setSwiperRef] = useState();
  const { data: activities, error, loading } = useFetch("activities");
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{"error"}</div>;

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-8 pb-20">
        <h1 className="text-[48px] font-bold pt-4 pb-8">
          نـــشـــاطــــــتنـــــــــا
        </h1>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        initialSlide={1}
        slidesPerView={3}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper flex row-auto"
      >
        {activities.data.map((activity) => (
          <div className="m-auto" key={activity.id}>
            <SwiperSlide key={activity.id}>
              <ActivityItem
                key={activity.id}
                title={activity.attributes.title}
                content={activity.attributes.content}
                image={activity.image || masjid}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}

const activities = [
  {
    id: 0,
    image: masjid,
    title: "1 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
  {
    id: 1,
    image: masjid,
    title: "2 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
  {
    id: 2,
    image: masjid,
    title: "3 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
  {
    id: 3,
    image: masjid,
    title: "4 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
  {
    id: 4,
    image: masjid,
    title: "5 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
  {
    id: 5,
    image: masjid,
    title: "6 عنوان المقالة",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد.....",
  },
];
