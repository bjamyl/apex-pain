import React from "react";
import DoctorsComponent from "@/components/DoctorsComponent";

export default function VishalPatel() {
  const affiliations = [
    {
      img: "/partners/unimaryland.png",
      alt: "maryland-logo",
      link: "https://hms.harvard.edu/research",
    },
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
      img: "/partners/drexel.png",
      alt: "drexel-logo",
      link: "https://drexel.edu/medicine/",
    },
    {
      img: "/partners/nans.png",
      alt: "nans-logo",
      link: "https://www.neuromodulation.org/",
    },
    {
      img: "/partners/carnegie.png",
      alt: "carnegie-logo",
      link: "https://www.cmu.edu/",
    },
    {
      img: "/partners/umdnj.png",
      alt: "umdnj-logo",
    },
    {
      img: "/partners/lvhn.png",
      alt: "lvhn-logo",
      link: "https://www2.lehigh.edu/",
    },
    {
      img: "/partners/WISIPP.png",
      alt: "wisipp-logo",
      link: "https://www.windsor.edu/",
    },
  ];

  const details = {
    name: "Dr. Vishal Patel",
    image: "/new/patel.jpg",
    image2: "/new/patel2.jpg",
    bio: "Dr. Vishal Patel is double board certified in Interventional Pain Medicine and Anesthesiology. He earned his Bachelor of Science from Carnegie Mellon University, and his Doctor of Medicine (M.D.) from Robert Wood Johnson Medical School. He pursued specialty training in Anesthesiology at Drexel University College of Medicine, where he served as chief resident. He obtained subspecialty fellowship training in Pain Medicine at the University of Maryland",
    paragraph_one:
      "Dr. Patel is an active member of the International Pain and Spine Symposium where he serves on the education committee. He is also a member of the American Society of Regional Anesthesia and Pain Medicine (ASRA), North American Neuromodulation Society (NANS), International Neuromodulation Society (INS), American Medical Association (AMA) and American Society of Pain and Neuroscience (ASPN).",
    paragraph_two:
      "Dr. Patel attends regional, national, and international Pain conferences to provide his patients with the most evidence based cutting edge innovations to alleviate pain. He is an expert in advanced spinal pain care, complex regional pain syndrome, and diabetic neuropathy. Dr. Patel offers spinal cord stimulation, dorsal root ganglion, peripheral nerve stimulation, kyphoplasty, intrathecal drug delivery, minimally invasive decompression (mild procedure), and joint fusion techniques for chronic pain.",
    education:
      "Dr. Vishal Patel is proudly affiliated with leading organizations in pain medicine and neuromodulation. These affiliations underscore his dedication to advancing patient care and innovative treatments in the field.",
    affiliations: affiliations,
  };
  return (
    <section className="bg-gray-300">
      <DoctorsComponent
        name={details.name}
        image={details.image}
        image2={details.image2}
        bio={details.bio}
        paragraph_one={details.paragraph_one}
        paragraph_two={details.paragraph_two}
        education={details.education}
        affiliations={details.affiliations}
      />
    </section>
  );
}
