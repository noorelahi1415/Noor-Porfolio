import React, { useRef } from "react";
import SectionTitle from "../common/sectiontitle";
import { sendEmail } from "../../utils/email";


function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(form.current);

      alert("✅ Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to send message.");
    }
  };

  return (
    
    <section
      id="contact"
      className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <SectionTitle
        title="Let's Work Together"
        subtitle="Contact"
      />

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-[#A0A0A0]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-[#A0A0A0]"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Message"
          required
          className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-[#A0A0A0]"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </section>

    
  );
}

export default Contact;
