import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import gambar from "../../public/assets/jurnal_list.webp";
import Link from "next/link";

const data = [
  {
    title: "FLICKER SANDAL NAVY",
    desc: "COMMUNITY - Fauzan Fadhilla Dzulfiqar Hello kawan!! Udah lama gak sharing sharing nihh...",
    button: "Read More",
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    desc: "COMMUNITY - Fauzan Fadhilla Dzulfiqar Hello kawan!! Udah lama gak sharing sharing nihh...",
    button: "Read More",
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    desc: "COMMUNITY - Fauzan Fadhilla Dzulfiqar Hello kawan!! Udah lama gak sharing sharing nihh...",
    button: "Read More",
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    desc: "COMMUNITY - Fauzan Fadhilla Dzulfiqar Hello kawan!! Udah lama gak sharing sharing nihh...",
    button: "Read More",
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    desc: "COMMUNITY - Fauzan Fadhilla Dzulfiqar Hello kawan!! Udah lama gak sharing sharing nihh...",
    button: "Read More",
    image: gambar,
  },
];

const JurnalList = () => {
  return (
    <div className="w-full flex flex-wrap gap-[42px]">
      {data.map((item, index) => {
        return <ListItemJurnal key={index} image={item.image} title={item.title} desc={item.desc} button={item.button} link={`/blogs/jurnal/${item.title}`}/>;
      })}
    </div>
  );
};

export default JurnalList;

const ListItemJurnal = ({ image, button, title, desc, link }) => {
  return (
    <div className="w-[31%] flex flex-col gap-5">
      <span className="w-full h-48 overflow-hidden">
        <Link href={link ? link : ""}>
          <Image
            src={image}
            width={500}
            height={300}
            className="w-full h-48 object-cover object-center hover:scale-125 transition-all duration-[5s]"
          />
        </Link>
      </span>

      <span className="space-y-4 text-start">
        <Link href={link ? link : ""}>
          <h2 className="text-2xl font-semibold uppercase">{title}</h2>
        </Link>
        <p>{desc}</p>
        <Button
          text={button}
          className={"text-white bg-blackgrey"}
          link={link}
        />
      </span>
    </div>
  );
};
