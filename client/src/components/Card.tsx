import { FaVideo, FaTwitter } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Arrow from "../icons/Arrow";

type CardType = {
  title: string;
  link: string;
  type: "tweet" | "video";
};

export default function Card({ title = "Title", link, type }: CardType) {
  let trimmdTitle = title.length > 25 ? title.substring(0, 24) + "..." : title;
  return (
    <div className="">
      <div className="bg-gray-50 p-3 text-black w-[350px] rounded">
        <div className="flex items-center justify-between">
          {type === "tweet" ? <FaTwitter size={20} /> : <FaVideo size={20} />}
          <p className="font-medium text-lg">{trimmdTitle}</p>
          <div className="flex gap-2 items-center">
            <Arrow />
            <FaRegTrashAlt size={20} />
          </div>
        </div>
        <div className="h-full w-full mt-2">
          {type === "tweet" ? (
            <blockquote className="twitter-tweet">
              <a
                href={link?.replace("x.com", "twitter.com")}
                target="_blank"
              />
            </blockquote>
          ) : (
            <iframe
              className="w-full h-full rounded-md"
              src={link?.replace("youtu.be/", "www.youtube.com/embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
