export default function InvisalignDoctorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>
            <p className="text-[#36384F] text-lg leading-relaxed text-justify">
              Undoubtedly, we have the{" "}
              <strong>best dentist in Kolkata</strong>, but stay tuned,
              do not underestimate our team.

              Along with our doctors, our other{" "}
              <strong>orthodontists</strong> and the rest of the group
              receive training regularly.

              <br />
              <br />

              When you approach the top{" "}
              <strong>clear aligner clinic in Kolkata,</strong> the risk
              is minimum, and the precision is optimized.

              The result of the same is your sparkling, eye-catching
              smile which enhances your facial features.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/aiAswhXOsUw?si=NxQXssKHnu54nF73"
                title="Invisalign Specialists"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}