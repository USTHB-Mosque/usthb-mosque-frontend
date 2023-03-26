import { useState } from "react";
import { postRequest } from "../../hooks/useFetch";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const [sent, setSent] = useState();
  const sendForm = async () => {
    const response = await postRequest("form-responses", {
      data: { firstName, email, message },
    });
    setEmail("");
    setFirstName("");
    setMessage("");
    if (response.data) {
      setSent("Sent successfully");
      setTimeout(() => {
        setSent();
      }, 3000);
    } else {
      setError(response.error.message);
      setTimeout(() => {
        setError();
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col ">
      <h1 className="text-white text-5xl mb-12 text-center">
        اتــــصـــل بـــنـــــا
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded-xl shadow-lg bg-[#243245] outline-none text-white px-6  py-2 text-2xl "
          dir="rtl"
          placeholder="الإسم..."
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl shadow-lg bg-[#243245]  outline-none text-white px-6  py-2 text-2xl "
          dir="rtl"
          placeholder="البريد الإلكتروني..."
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          dir="rtl"
          className="rounded-xl shadow-lg bg-[#243245]  outline-none text-white px-6  py-2 text-2xl flex h-40 resize-none"
          placeholder="الرسالة..."
        />
        <button
          className="text-white rounded-xl shadow-lg flex justify-center items-center bg-[#48B09F] px-4 py-2 text-2xl"
          type="submit"
          onClick={sendForm}
        >
          أرسل
        </button>
        {sent && (
          <div className="text-green-400 text-2xl text-center">{sent}</div>
        )}
        {error && (
          <div className="text-red-400 text-2xl text-center">{error}</div>
        )}
      </form>
    </div>
  );
}
