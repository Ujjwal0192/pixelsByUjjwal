import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// 🔔 Custom success toast
const showSuccessToast = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-[#343d68] text-white shadow-xl rounded-2xl pointer-events-auto flex`}
    >
      <div className="flex-1 p-4">
        <p className="font-semibold text-sm">✅ Message sent successfully</p>
        <p className="text-xs text-gray-300 mt-1">
          Thank you for reaching out! I&apos;ll get back to you soon.
        </p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="px-4 text-white hover:text-(--bgOrange) transition"
      >
        ✕
      </button>
    </div>
  ));
};

// 🔔 Custom error toast
const showErrorToast = (message) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-[#7f1d1d] text-white shadow-xl rounded-2xl pointer-events-auto flex`}
    >
      <div className="flex-1 p-4">
        <p className="font-semibold text-sm">❌ Failed to send message</p>
        <p className="text-xs text-red-100 mt-1">
          {message || "Something went wrong. Please try again."}
        </p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="px-4 text-white hover:text-(--bgOrange) transition"
      >
        ✕
      </button>
    </div>
  ));
};

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;
    setLoading(true);

    console.log("SERVICE_ID:", SERVICE_ID);
    console.log("TEMPLATE_ID:", TEMPLATE_ID);
    console.log("PUBLIC_KEY:", PUBLIC_KEY);

    try {
      const sendPromise = emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      await sendPromise;

      formRef.current.reset();
      showSuccessToast();
    } catch (err) {
      console.error("EmailJS error:", err);
      showErrorToast(err?.text || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contactme"
      className="w-full bg-[#e7e7e7] mt-8 py-10 md:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-[40px] md:text-[56px] text-(--bgOrange) font-bold mb-2">
          Contact Me
        </h1>
        <h3 className="text-lg md:text-2xl text-[#343d68aa] mb-6">
          Question, thoughts, or just want to say hello?
        </h3>

        <div className="flex justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full md:w-[70%] flex flex-col gap-4 md:gap-6 bg-white shadow-[2px_2px_10px_rgba(31,31,31,0.4)] rounded-xl p-4 md:p-6"
          >
            <input
              className="w-full h-11 px-6 text-[16px] rounded-lg shadow-[2px_2px_10px_rgba(31,31,31,0.35)] font-medium border-none outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              className="w-full h-11 px-6 text-[16px] rounded-lg shadow-[2px_2px_10px_rgba(31,31,31,0.35)] font-medium border-none outline-none"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <input
              className="w-full h-11 px-6 text-[16px] rounded-lg shadow-[2px_2px_10px_rgba(31,31,31,0.35)] font-medium border-none outline-none"
              type="text"
              name="subject"
              placeholder="Enter your subject"
            />
            <textarea
              name="message"
              rows="5"
              className="w-full px-6 py-3 text-[16px] rounded-lg shadow-[2px_2px_10px_rgba(31,31,31,0.35)] font-medium border-none outline-none resize-none"
              placeholder="Enter your message"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="relative inline-block bg-(--bgOrange) text-black px-8 py-3 text-[18px] font-medium shadow-[5px_5px_7px_rgba(0,0,0,0.25)] border-2 border-transparent rounded-2xl overflow-hidden group self-start disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
            </button>

            <p className="text-xs text-gray-600">
              Or email me directly at{" "}
              <a
                href="mailto:ujjwalkumarjha@gmail.com"
                className="text-(--bgOrange) underline"
              >
                ujjwalkumarjha@gmail.com
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
