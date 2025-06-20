import { GiJoint, GiScalpel } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";
import { SiSpine } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { GiPelvisBone } from "react-icons/gi";
import { GiBackboneShell } from "react-icons/gi";

// Types
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
  imageAlt: string;
  videoId?: number;
}

// Data
export const servicesData: Service[] = [
  {
    title: "Joint Injections",
    description:
      "Delivers medication directly into joints, reducing inflammation and relieving pain from conditions like arthritis.",
    icon: <GiJoint size={40} className="text-2xl" />,
    link: "/services/joint-injections",
    image: "/services/injections.jpg",
    imageAlt: "joint-injections",
    videoId: 3,
  },
  {
    title: "Radiofrequency Ablation",
    description:
      "A minimally invasive procedure that uses heat from radio waves to target and destroy nerve tissue responsible for transmitting pain.",
    icon: <GiScalpel size={40} className="text-2xl" />,
    link: "/services/radiofrequency-ablation",
    image: "/services/radiofrequency.jpg",
    imageAlt: "radiofrequency-ablation",
    videoId: 5,
  },
  {
    title: "Epidural Injections",
    description:
      "Delivers medication directly to the spine, reducing inflammation and providing pain relief for neck and back pain.",
    icon: <FaSyringe size={40} className="text-2xl" />,
    link: "/services/epidural-injections",
    image: "/services/epidural-injection.jpg",
    imageAlt: "epidural-injection",
    videoId: 1,
  },
  {
    title: "Spinal Cord Stimulation",
    description:
      "A treatment for chronic pain that involves implanting a small device near the spinal cord to send electrical impulses.",
    icon: <SiSpine size={40} className="text-2xl" />,
    link: "/services/spinal-cord-stimulation",
    image: "/services/scs.jpg",
    imageAlt: "spinal-cord-stimulation",
    videoId: 6,
  },
  {
    title: "Peripheral Nerve Stimulation",
    description:
      "Delivers electrical impulses to specific nerves, interrupting pain signals and offering relief for chronic pain conditions.",
    icon: <LuBrainCircuit size={40} className="text-2xl" />,
    link: "/services/peripheral-nerve-stimulation",
    image: "/services/pns.jpg",
    imageAlt: "peripheral-nerve-stimulation",
    videoId: 2,
  },
  {
    title: "Kyphoplasty",
    description:
      "A minimally invasive surgery used to treat vertebral compression fractures by stabilizing the bone with cement.",
    icon: <GiBackboneShell size={40} className="text-2xl" />,
    link: "/services/kyphoplasty",
    image: "/services/kyphoplasty.jpg",
    imageAlt: "kyphoplasty",
    videoId: 4,
  },
  {
    title: "Sacroiliac Joint Injections",
    description:
      "A surgical procedure to fuse the sacroiliac joints to reduce pain caused by joint instability or degeneration.",
    icon: <GiPelvisBone size={40} className="text-2xl" />,
    link: "/services/sacroiliac-joint-injections",
    image: "/services/sac-injections.jpg",
    imageAlt: "sacroiliac-joint-injections",
    videoId: 3,
  },
];

export const videoData: Video[] = [
  {
    id: 1,
    title: "Epidural Injections",
    description:
      "Learn about epidural injection procedures and their benefits for pain management.",
    thumbnail: "/placeholder.svg?height=240&width=320",
    videoUrl: "/videos/injection.mp4",
    duration: "00:35",
    category: "Pain Management",
  },
  {
    id: 2,
    title: "Peripheral Nerve Stimulation",
    description:
      "Discover the benefits of peripheral nerve stimulation for chronic pain relief.",
    videoUrl: "/videos/injection.mp4",
    duration: "00:30",
    category: "Nerve Treatment",
    thumbnail: "/placeholder.svg?height=240&width=320",
  },
  {
    id: 3,
    title: "Joint Injections",
    description:
      "Understanding joint injection procedures and their therapeutic applications.",
    videoUrl: "/videos/injection.mp4",
    thumbnail: "/placeholder.svg?height=240&width=320",
    duration: "00:35",
    category: "Joint Care",
  },
  {
    id: 4,
    title: "Kyphoplasty Procedure",
    description:
      "See how kyphoplasty can help treat vertebral compression fractures.",
    thumbnail: "/placeholder.svg?height=240&width=320",
    videoUrl: "/videos/injection.mp4",
    duration: "01:15",
    category: "Spinal Treatment",
  },
  {
    id: 5,
    title: "Radiofrequency Ablation",
    description:
      "Learn about this minimally invasive pain management technique.",
    thumbnail: "/placeholder.svg?height=240&width=320",
    videoUrl: "/videos/injection.mp4",
    duration: "02:20",
    category: "Pain Management",
  },
  {
    id: 6,
    title: "Spinal Cord Stimulation",
    description: "How spinal cord stimulation can help manage chronic pain.",
    thumbnail: "/placeholder.svg?height=240&width=320",
    videoUrl: "/videos/injection.mp4",
    duration: "01:45",
    category: "Pain Management",
  },
];
