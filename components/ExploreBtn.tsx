import { MoveDown } from "lucide-react";

const ExploreBtn = () => {
  return (
    <a 
    href="#events" 
    className="mt-7 mx-auto" id="explore-btn">
      Explore Events
      <MoveDown className="ml-2 animate-bounce" size={20} />
    </a>
  );
};

export default ExploreBtn;
