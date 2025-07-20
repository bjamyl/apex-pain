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
    icon: <GiJoint size={30} className="text-2xl" />,
    link: "/services/joint-injections",
    image: "/new/ji.jpeg",
    imageAlt: "joint-injections",
    videoId: 3,
  },
  {
    title: "Radiofrequency Ablation",
    description:
      "A minimally invasive procedure that uses heat from radio waves to target and destroy nerve tissue responsible for transmitting pain.",
    icon: <GiScalpel size={30} className="text-2xl" />,
    link: "/services/radiofrequency-ablation",
    image: "/new/ra.jpeg",
    imageAlt: "radiofrequency-ablation",
    videoId: 5,
  },
  {
    title: "Epidural Injections",
    description:
      "Delivers medication directly to the spine, reducing inflammation and providing pain relief for neck and back pain.",
    icon: <FaSyringe size={30} className="text-2xl" />,
    link: "/services/epidural-injections",
    image: "/new/ej.jpeg",
    imageAlt: "epidural-injection",
    videoId: 1,
  },
  {
    title: "Sacroiliac Joint Fusion",
    description:
      "Sacroiliac joint fusion offers lasting relief from sacroiliac joint pain by stabilizing the source of dysfunction.",
    icon: <GiPelvisBone size={30} className="text-2xl" />,
    link: "/services/spinal-cord-stimulation",
    image: "/services/sij-fusion.jpg",
    imageAlt: "sacroiliac-joint-fusion",
    videoId: 6,
  },
  {
    title: "Spinal Cord Stimulation",
    description:
      "A treatment for chronic pain that involves implanting a small device near the spinal cord to send electrical impulses.",
    icon: <SiSpine size={30} className="text-2xl" />,
    link: "/services/spinal-cord-stimulation",
    image: "/new/scs.jpeg",
    imageAlt: "spinal-cord-stimulation",
    videoId: 6,
  },
  {
    title: "Peripheral Nerve Stimulation",
    description:
      "Delivers electrical impulses to specific nerves, interrupting pain signals and offering relief for chronic pain conditions.",
    icon: <LuBrainCircuit size={30} className="text-2xl" />,
    link: "/services/peripheral-nerve-stimulation",
    image: "/services/pns.jpg",
    imageAlt: "peripheral-nerve-stimulation",
    videoId: 2,
  },
  {
    title: "Kyphoplasty",
    description:
      "A minimally invasive surgery used to treat vertebral compression fractures, where a balloon is inflated inside a fractured vertebra and then filled with cement to stabilize the bone and relieve pain.",
    icon: <GiBackboneShell size={30} className="text-2xl" />,
    link: "/services/kyphoplasty",
    image: "/new/kypho.jpeg",
    imageAlt: "kyphoplasty",
    videoId: 4,
  },
  {
    title: "Minimally Invasive Lumbar Decompression(MILD)",
    description:
      "The minimally invasive lumbar decompression (MILD) procedure is a safe, outpatient treatment for spinal stenosis that removes access tissue pressing on the nerves to help relieve leg and back pain and improve walking",
    icon: <SiSpine size={30} className="text-2xl" />,
    link: "/services/sacroiliac-joint-injections",
    image: "/services/sac-injections.jpg",
    imageAlt: "mild",
    videoId: 3,
  },
  {
    title: "Sacroiliac Joint Injection",
    description:
      "A x-ray guided procedure where anti-inflammatory medication and anesthetic are injected directly into the joint to relieve pain in the lower back, buttock, and upper leg.",
    icon: <GiPelvisBone size={30} className="text-2xl" />,
    link: "/services/sacroiliac-joint-injections",
    image: "/services/sac-injections.jpg",
    imageAlt: "sacroiliac-joint-injections",
    videoId: 3,
  },
  {
    title: "Intracept Procedure",
    description:
      "Targets the basivertebral nerve within the vertebrae to reduce chronic low back pain by using radiofrequency energy.",
    icon: <LuBrainCircuit size={30} className="text-2xl" />,
    link: "/services/basivertebral-nerve-ablation",
    image: "/services/ip.jpg",
    imageAlt: "basivertebral-nerve-ablation",
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
