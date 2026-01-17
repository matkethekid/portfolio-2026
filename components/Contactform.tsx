"use client";

import { MoveRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contactform = () => {
    async function onSubmit(e: any) {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const question = formData.get("question") as string;

            if (!name.trim() || !email.trim() || !question.trim()) {
                toast.error("All fields are required");
                return;
            }

            formData.append("access_key", "09fbb8c2-5000-4dac-b8a5-90bcd83804ff");
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
                body: json,
            })
            .then((res) => res.json());
                toast.success("Message sent");
                } catch (error: any) {
                toast.error(error);
        }
    };
  return (
    <main className='w-full min-h-screen'>
        <Toaster/>
        <div className="w-full px-5 pt-32 pb-10 lg:px-15">
            <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter pb-5 text-[#F54927]">Let's Talk</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
            <div className="flex flex-col justify-between py-5">
                <p className="text-2xl md:text-4xl font-medium max-w-md leading-none tracking-tight">
                    DO YOU HAVE A PROJECT? <br />
                    WANT TO COLLABORATE? <br />
                    OR JUST SAY HI?
                </p>
            </div>
            <div className="lg:pl-10 pb-10">
                    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="uppercase font-bold text-sm text-gray-500">Your Name</label>
                            <input
                                name="name"
                                type="text" 
                                placeholder="JOHN DOE"
                                className="bg-transparent border-b-4 border-black py-4 text-3xl outline-none focus:placeholder-transparent placeholder:text-gray-200 font-bold uppercase"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="uppercase font-bold text-sm text-gray-500">Your Email</label>
                            <input
                                name="email"
                                type="email" 
                                placeholder="EMAIL@WORK.COM"
                                className="bg-transparent border-b-4 border-black py-4 text-3xl outline-none focus:placeholder-transparent placeholder:text-gray-200 font-bold uppercase"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="uppercase font-bold text-sm text-gray-500">Message</label>
                            <textarea
                                name="question"
                                rows={3}
                                placeholder="WHAT'S ON YOUR MIND?"
                                className="bg-transparent border-b-4 border-black py-4 text-3xl outline-none focus:placeholder-transparent placeholder:text-gray-200 font-bold uppercase resize-none"
                            />
                        </div>
                        <button className="group flex items-center justify-between bg-[#F54927] text-white p-6 mt-5 hover:bg-white hover:text-[#F54927] cursor-pointer border-4 border-black transition-colors duration-300">
                            <span className="text-4xl uppercase">Send it</span>
                            <div className="overflow-hidden w-10 h-10 relative flex items-center justify-center">
                            <MoveRight className="w-10 h-10 absolute transition-transform duration-500 group-hover:translate-x-12" />
                            <MoveRight className="w-10 h-10 absolute -translate-x-12 transition-transform duration-500 group-hover:translate-x-0" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contactform;