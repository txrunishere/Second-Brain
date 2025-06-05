import Button from "../Button";
import { FaPlus } from "react-icons/fa";

export default function Header({ setIsOpen }: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <header className="flex items-center justify-between p-[1rem] bg-gray-100 text-black">
      <div className="flex items-center">
        <span className="font-bold text-2xl">MyApp</span>
      </div>
      <Button
        type="button"
        varient="primary"
        icon={<FaPlus />}
        handler={() => setIsOpen(true)}
      >
        Content
      </Button>
    </header>
  );
}
