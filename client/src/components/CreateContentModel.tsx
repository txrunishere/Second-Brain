import { useState } from "react";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";

export default function CreateContentModel({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [postType, setPostType] = useState<string | null>("tweet");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target)
    console.log(postType)
  };

  return (
    <>
      {isOpen && (
        <div className="flex items-center justify-center h-screen w-screen absolute">
          <section className="h-screen absolute w-screen z-10 flex justify-center items-center opacity-50 bg-slate-500"></section>
          <div className="bg-black rounded-2xl z-20 w-[25vw] p-6">
            <div className="flex items-center justify-end">
              <Button
                handler={() => setIsOpen(false)}
                type="button"
                varient="secondary"
              >
                <RxCross2 size={30} className="cursor-pointer" />
              </Button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="w-full outline-0 rounded-xl border-[2px] border-gray-50 mt-4 font-medium px-2 py-2"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                className="w-full outline-0 rounded-xl border-[2px] border-gray-50 mt-4 font-medium px-2 py-2"
                type="text"
                placeholder="Enter link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
              <div className="mt-4 flex gap-2">
                <select
                  className="w-full"
                  onChange={(e) => setPostType(e.target.value)}
                  name="post_type"
                  id="postType"
                >
                  <option value="tweet">Tweet</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <Button type="submit" className="mt-3 w-full" varient="primary">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
