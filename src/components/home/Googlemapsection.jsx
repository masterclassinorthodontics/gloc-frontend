export default function GoogleMapSection() {
  return (
    <section className=" bg-white">
      <div className="w-full">


        {/* Map */}
        <div className="overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7176941652187!2d88.34772579999999!3d22.514772699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270cb5c1b07c5%3A0x4788b0b3baf2059e!2sGreat%20Lakes%20Dental%20Clinic%20and%20Orthodontic%20Care!5e0!3m2!1sen!2sin!4v1780894158910!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}