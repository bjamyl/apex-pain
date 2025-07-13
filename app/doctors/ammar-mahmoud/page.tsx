import DoctorsComponent from "@/components/DoctorsComponent";
import React from "react";

export default function AmmarMahmoud() {
  const affiliations = [
    {
      img: "/partners/aba.png",
      alt: "aba-logo",
      link: "https://www.theaba.org/",
    },
    {
      img: "/partners/aspn.png",
      alt: "aspn-logo",
      link: "https://aspnpain.com/",
    },
    {
      img: "/partners/cleveland.png",
      alt: "cleveland-logo",
      link: "https://my.clevelandclinic.org/",
    },
    {
      img: "/partners/cook.png",
      alt: "cook-logo",
      link: "https://cookcountyhealth.org/",
    },
    {
      img: "/partners/nans.png",
      alt: "nans-logo",
      link: "https://www.neuromodulation.org/",
    },
    {
      img: "/partners/windsor.png",
      alt: "windsor-logo",
      link: "https://www.windsor.edu/",
    },
    {
      img: "/partners/royal.png",
      alt: "royal-logo",
      link: "https://www.windsor.edu/",
    },
  ];
  const details = {
    name: "Dr. Ammar Mahmoud",
    image: "/Ammar.jpg",
    image2: "/slider/slide1.jpg",
    bio: "Dr. Ammar Mahmoud is a double board-certified physician in Interventional Pain Medicine and Anesthesiology. He is a graduate of Windsor University School of Medicine. Dr. Mahmoud completed his internship and anesthesiology residency at John H. Stroger Hospital of Cook County in Chicago, IL., where he served as chief resident. He completed a multidisciplinary Pain Medicine Fellowship at the prestigious Cleveland Clinic Foundation, where he gained expertise in advanced and cutting-edge pain therapies and served as chief fellow.",
    paragraph_one:
      "Dr. Mahmoud authors expert content and publishes in high-impact scientific journals. He lectures at the American Society of Pain and Neuroscience (ASPN) annual meeting, where he serves as faculty for the Poster- to- Podium physician research program and serves on the ASPN CARES cancer committee. Dr. Mahmoud is also an active member of the North American Neuromodulation Society (NANS) and International Neuromodulation Society (INS).",
    paragraph_two:
      "Dr. Mahmoud is passionate about exceptional interventional pain management treatments, with a goal of providing pain relief and functional improvement.  Dr. Mahmoud cares for a wide variety of painful conditions and develops individualized treatment plans surrounding each patient’s values and goals. His goal is to develop a positive and long-lasting patient-physician relationship that is based on trust, knowledge, and advocacy. He aims to empower his patients with the necessary information to understand their pain condition, allowing them to become actively involved in managing their health.  His favorite part of being a pain management physician is helping improve his patients’ quality of life.",
    paragraph_three:
      "He is a recognized expert in the treatment of neuropathic pain, cancer pain, and diseases of the spine and joints. He offers the latest innovations in radiofrequency ablation, spinal cord stimulation, dorsal root ganglion stimulation, targeted drug delivery, peripheral nerve stimulation, minimally invasive decompression, and kyphoplasty.",
    education:
      "Dr. Ammar Mahmoud is proudly affiliated with leading organizations in pain medicine and neuromodulation. These affiliations underscore his dedication to advancing patient care and innovative treatments in the field.",
    affiliations: affiliations,
  };
  return (
    <section className="bg-gray-300">
      <DoctorsComponent
        name={details.name}
        image={details.image}
        image2={details.image2}
        bio={details.bio}
        education={details.education}
        paragraph_one={details.paragraph_one}
        paragraph_two={details.paragraph_two}
        paragraph_three={details.paragraph_three}
        affiliations={details.affiliations}
      />
    </section>
  );
}
