import { PhysicianCard } from "./PhysicianCard"

interface Physician {
  image: string
  name: string
  link:string;
  description: string
  title?:string;
}

interface PhysiciansShowcaseProps {
  physicians: Physician[]
}

export function PhysiciansShowcase({ physicians }: PhysiciansShowcaseProps) {
  return (
    <div className="mx-4 my-20 overflow-hidden">
      <div className="py-8 lg:py-16 px-4 sm:px-6 lg:px-16">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-defaultGreen leading-tight text-left mb-6 lg:mb-8">
            Physicians, you know.
            <br />
            Care you trust.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl">
            At Apex Interventional Pain Specialists, our goal is to reduce suffering from chronic pain and improve
            quality of life! We offer evidence based, cutting edge treatments to target pain along the entire spine,
            joints, and nerves.
          </p>
        </div>

        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:space-x-10">
          {physicians.map((physician,i) => (
            <PhysicianCard
              key={i}
              title={physician.title}
              image={physician.image}
              name={physician.name}
              link={physician.link}
              description={physician.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
