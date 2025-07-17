import React from "react";
import DoctorsComponent from "@/components/DoctorsComponent";

export default function MansoorAman() {
  const affiliations = [
    {
      img: "/partners/harvard.png",
      alt: "harvard-logo",
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
      img: "/partners/windsor.png",
      alt: "windsor-logo",
      link: "https://www.windsor.edu/",
    },
    {
      img: "/partners/WISIPP.png",
      alt: "wisipp-logo",
      link: "https://www.windsor.edu/",
    },
  ];

  const details = {
    name: "Dr Mansoor Aman",
    image: "/new/mansoor.jpg",
    image2: "/new/mansoor-bg.jpg",
    education:
      "Dr. Mansoor Aman is proudly affiliated with leading organizations in pain medicine and neuromodulation. These affiliations underscore his dedication to advancing patient care and innovative treatments in the field.",
    bio: "Dr. Mansoor Aman is double board certified in Interventional Pain Medicine and Anesthesiology. He is a graduate of Windsor University School of Medicine where he earned his Doctor of Medicine (M.D.). Following medical school, he explored his clinical research interests at Drexel University School of Medicine focusing on minimally invasive medical device implementation in clinical applications. Dr. Aman completed his internship in General Surgery and residency in Anesthesiology at Drexel University School of Medicine, where he served as chief resident. He culminated his medical training with a fellowship in Pain Medicine at Harvard Medical School.",
    paragraph_one:
      "Dr. Aman is an active member of the International Pain and Spine Symposium where he serves as the co-chair for the annual meeting, co-chair for the education committee, and is a member of the advocacy committee. He lectures at the American Society of Pain and Neuroscience (ASPN) annual meeting and serves on the cancer pain committee. He is involved with the North American Neuromodulation Society (NANS), and International Neuromodulation Society (INS). Dr. Aman has authored numerous publications, textbook chapters and presented at regional, national, and international Pain Medicine meetings. He has been featured on the radio for his work on minimally invasive lumbar decompression (mild procedure), and multiple news outlets for helping his patients reduce the suffering of chronic pain using dorsal root ganglion stimulation and peripheral nerve stimulation. Dr. Aman has run a robust clinical research program studying neuromodulation in the treatment diabetic neuropathy, cancer pain, shoulder, and knee arthritis.",
    paragraph_two:
      "Dr. Aman is a national expert in spinal cord stimulation, dorsal root ganglion stimulation, targeted drug delivery, peripheral nerve stimulation, restorative stimulation (Reactiv8), minimally invasive decompression (mild procedure), kyphoplasty, and sacroiliac joint fusion. He has trained hundreds of pain physicians across the country on innovative therapies. Dr. Aman is an advocate for patient empowerment and offers an array of services including medication management, injections, surgery.",
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
