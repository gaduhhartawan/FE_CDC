import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Swal from "sweetalert2";
import Header from "../components/Header";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const fullname = currentUser?.fullname.split(" ").join("+");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const fetchData = async () => {
    // Make a request to the ChatGPT API with the user input
    const prompt = `jelaskan ${input} secara singkat dan jelaskan tidak dalam bentuk list`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Update the conversation history with the response from ChatGPT
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
      { role: "bot", content: text },
    ]);

    // Clear the input field
    setInput("");
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "This Feature is Under Development!",
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col md:h-[450px] xl:h-[500px] w-full overflow-y-scroll">
        <div className="flex-1 overflow-y-scroll p-4 flex flex-col items-center gap-5 w-full chat">
          {!messages.length ? (
            <div className="flex flex-col gap-y-5 justify-center text-center">
              <img src="/wisdom.png" alt="" className="w-32 h-32 mx-auto" />
              <h2 className="text-7xl font-bold">
                Hey, I'm <span className="text-bluu">Wisdom</span>
              </h2>
              <p className="text-lg max-w-md mx-auto">
                A career path guide designed to help you find the right career
                path for you
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`bg-slate-100 w-[48%] ${
                  message.role === "bot" ? " text-left" : " text-left "
                }`}
              >
                <p
                  className={`p-3 text-black rounded-xl bg-[#E7EEFE] flex gap-2 ${
                    message.role === "user" && "flex gap-2 items-center"
                  }`}
                >
                  {message.role === "user" ? (
                    <img
                      src={
                        currentUser?.imgUrl === "None"
                          ? `https://ui-avatars.com/api/?name=${fullname}`
                          : currentUser?.imgUrl
                      }
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  ) : (
                    <img
                      src="/wisdom.png"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  )}
                  {message.content}
                </p>
              </div>
            ))
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-lg justify-between items-center mt-8 mx-auto border-2 border-gray-400 rounded-full bg-[#E7EEFE]"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 outline-none rounded-full bg-[#E7EEFE]"
          />
          <button
            className="px-4 rounded disabled:cursor-not-allowed "
            disabled={isLoading}
            type="submit"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </form>
        {isLoading && (
          <div className="custom-loader fixed z-10 top-0 left-0 bottom-0 right-0 m-auto"></div>
        )}
      </div>
    </div>
  );
};

export default Chat;
