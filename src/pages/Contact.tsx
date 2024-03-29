import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Loader, Preload } from "@react-three/drei";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { Fox } from "../models";

interface IForm {
  name: string;
  email: string;
  message: string;
}
const initialForm: IForm = {
  name: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState<IForm>(initialForm);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAnimation, setcurrentAnimation] = useState("idle");
  const { alert, hideAlert, showAlert } = useAlert();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "César",
          from_email: form.email,
          to_email: "cordobacesar29@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          text: "Message sent successfully",
          type: "success",
        });
        setcurrentAnimation("walk");

        setTimeout(() => {
          hideAlert();
          setcurrentAnimation("idle");
          setForm(initialForm);
        }, 2000);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        setcurrentAnimation("idle");
        console.log(error);

        showAlert({
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      });
  };
  const handleFocus = () => setcurrentAnimation("walk");
  const handleBlur = () => setcurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how I can hel you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
          <Preload all/>
        </Canvas>
      </div>
    </section>
  );
};
