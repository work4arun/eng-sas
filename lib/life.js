// Content for /life. All photographs come from the college's own public gallery
// (sasurieengg.com/gallery) and are stored in public/life/. Captions describe what the picture shows.
// To add a photo: drop a web-sized image in public/life/, then add a line to PHOTOS with its pixel size.
import { SITE } from "@/lib/site";

export const CATEGORIES = [
  { key: "campus", label: "Campus" },
  { key: "learning", label: "Classrooms and labs" },
  { key: "student", label: "Student life" },
  { key: "sports", label: "Sports" },
  { key: "stay", label: "Hostel, gym and travel" },
];

const P = (file, w, h, cat, caption) => ({ src: `/life/${file}.webp`, w, h, cat, caption });

export const PHOTOS = [
  P("campus-sign", 1600, 901, "campus", "The I ♥ Sasurie sign on the campus lawn"),
  P("lab-mentor", 1600, 900, "learning", "A faculty member guiding a student in the lab"),
  P("pongal", 1600, 1067, "student", "Pongal celebrated on campus"),
  P("sports-football", 1000, 1500, "sports", "Football on the college ground"),
  P("campus-avenue", 1600, 901, "campus", "The tree-lined avenue through the campus"),
  P("life-notebooks", 1600, 901, "student", "Between classes"),
  P("lab-hands-on", 1600, 900, "learning", "Hands-on work in the laboratory"),
  P("sports-kabaddi", 1000, 667, "sports", "A kabaddi match in progress"),
  P("hostel-room", 800, 533, "stay", "A hostel room"),
  P("library-read", 1600, 900, "learning", "Reading in the Central Library"),
  P("conclave", 886, 594, "student", "Youth Entrepreneurship Conclave 2024"),
  P("campus-garden", 1600, 900, "campus", "Lawns and planting beside the academic blocks"),
  P("sports-run", 1600, 1067, "sports", "A runner on the road course"),
  P("bus-fleet", 800, 533, "stay", "The college bus fleet"),
  P("lab-bench", 1600, 900, "learning", "Students working together at a lab bench"),
  P("pongal-prize", 1600, 1067, "student", "Prize-giving at the Pongal programme"),
  P("sports-team", 709, 473, "sports", "The college team in SCE colours"),
  P("life-walk", 1600, 901, "student", "Walking to class"),
  P("library-stacks", 1600, 900, "learning", "Shelves in the Central Library"),
  P("gym", 1000, 667, "stay", "The gymnasium"),
  P("campus-aerial", 970, 386, "campus", "The academic block and the bus fleet"),
  P("sports-volleyball", 800, 533, "sports", "Volleyball at the net"),
  P("life-steps", 1600, 900, "student", "Changing classes at the block entrance"),
  P("seminar-hall", 709, 473, "learning", "The air-conditioned seminar hall"),
  P("sports-kabaddi2", 1000, 667, "sports", "Kabaddi, women's teams"),
  P("hostel-room2", 1000, 670, "stay", "Another hostel room"),
  P("ceremony", 1600, 1102, "student", "A ceremony on campus"),
  P("sports-trophy", 1000, 667, "sports", "Receiving a trophy"),
  P("bus-students", 800, 533, "stay", "Students beside a college bus"),
  P("campus-lobby", 1024, 398, "campus", "The entrance lobby"),
  P("sports-kabaddi3", 709, 473, "sports", "Kabaddi on the red-earth court"),
  P("industrial-visit", 1000, 751, "learning", "On an industrial visit"),
  P("sports-carrom", 800, 533, "sports", "A game of carrom"),
  P("sports-crowd", 1000, 667, "sports", "Teams and spectators at a ground event"),
];

// A day on campus, in six places. Every figure is from the college's facilities page.
export const DAY = [
  { n: "01", place: "The ride in", text: "Twelve GPS-enabled buses serve the city and nearby areas within a 50 km radius.", image: "/life/bus-fleet.webp", alt: "A row of college buses" },
  { n: "02", place: "Class and lab", text: "Departmental laboratories and a computer centre with high-speed internet, plus air-conditioned seminar halls.", image: "/life/lab-hands-on.webp", alt: "A student and a faculty member in a laboratory" },
  { n: "03", place: "The library", text: "More than 46,000 volumes, 148 reading seats and DELNET access to scholarly databases.", image: "/life/library-read.webp", alt: "Two students reading in the library" },
  { n: "04", place: "The canteen", text: "A 900 m² canteen seating 600, with purified drinking water, open every working day.", image: "/life/canteen.webp", alt: "The canteen hall, with long tables" },
  { n: "05", place: "Ground and gym", text: "Coaching in sports and athletics, with chess, carrom, table tennis and badminton indoors.", image: "/life/sports-volleyball.webp", alt: "Volleyball players at the net" },
  { n: "06", place: "The hostel", text: "Separate on-campus hostels for boys and girls, with a focus on security and discipline.", image: "/life/hostel-room.webp", alt: "Students in a hostel room" },
];

// The channel's uploads, as a playlist. A YouTube channel id "UCxxxx" has an uploads playlist "UUxxxx".
export const VIDEO = {
  channelId: "UCYoY8BpfIQXH7UN2mVvrM0Q",
  get embed() {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=UU${this.channelId.slice(2)}&autoplay=1&rel=0`;
  },
  poster: "/life/campus-sign.webp",
  channel: SITE.social.find((s) => s.label === "YouTube")?.href,
  instagram: SITE.social.find((s) => s.label === "Instagram")?.href,
};
