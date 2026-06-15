export default function ClinicalytSection() {
  return (
    <section className="py-10 bg-white">
  <div className="w-[70vw] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-40 items-center">

      {/* Left Column */}
      <div className="flex justify-center">
        <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
           <p>
                Besides saving time, iTero systems improve the overall
                experience of the patients. They are designed to be powerful,
                intuitive, and portable.
                Here at Great Lakes Dental Clinic and Orthodontic Centre,
                we are the first{" "}
                <strong>dental braces clinic in Kolkata</strong> and
                Eastern India to use this system to provide value-added
                services to our patients.
                This digital innovation has helped us transform our
                practices for the overall satisfaction of our patients.<br/><br/>
                Our clinic has in-house <strong>iTero scanner</strong> that
                are designed specifically to work with the Invisalign system
                to provide the best workflow possible.
                We are the first <strong>dental clinic in Kolkata</strong>{" "}
                and Eastern India to own an iTero Element 2 for 3D
                replication of treatment results in{" "}
                <strong>clear aligner</strong> orthodontics, which is an
                alternative to <strong>dental braces</strong>.
              </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center">
        {/* Image / Video */}
        <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="iTero Scanner Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
      </div>

    </div>

  </div>
</section>
  );
}