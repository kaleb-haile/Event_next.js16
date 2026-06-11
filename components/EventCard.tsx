import Link from "next/link";
import Image from "next/image";
import { Clock3, MapPin, CalendarDays } from "lucide-react";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <div className="flex flex-row gap-2 items-center">
        <MapPin size={15} />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div className="items-center">
          <CalendarDays width={15} />
          <p>{date}</p>
        </div>
        <div className="items-center">
          <Clock3 size={15} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
