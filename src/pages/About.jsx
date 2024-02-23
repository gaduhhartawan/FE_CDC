import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function DisplayEgg({ name, hitung }) {
  if (hitung != 7) {
    return null;
  }
  return (
    <>
      <img src="egg.png" className="w-60 self-center"></img>
      <h1 className="text-center">{name}</h1>
    </>
  );
}

export default function About() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    if (count == 7) {
      setCount(0);
    }
  }
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col w-full h-full items-center content-center my-8">
        <div className="flex flex-col w-1/3 h-full font-plusjakarta text-base gap-5">
          <div className="flex flex-col gap-4">
            <span className="text-center text-abt leading-9 font-medium">
              The Story Behind{" "}
              <b className="cursor-pointer select-none" onClick={handleClick}>
                #Careerpath.
              </b>
            </span>
            <span className="text-center text-textabt">
              <b>Careerpath</b> is a leading job portal in Indonesia committed
              to helping job seekers find their dream careers and helping
              companies find the best talent.
            </span>
            <DisplayEgg hitung={count} name="Ambatukam" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-abt leading-9 font-bold">Our Vision</span>
            <span className="text-textabt text-justify">
              To become the leading career platform in Indonesia that connects
              job seekers with the best job opportunities and helps them reach
              their full potential.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-abt leading-9 font-bold">Our Mission</span>
            <ul className="text-textabt text-justify list-disc ml-5">
              <li>
                To become the most trusted and comprehensive job portal in
                Indonesia.
              </li>
              <li>
                To help job seekers find careers that match their passion and
                skills.
              </li>
              <li>
                To help companies find the best talent to improve their
                performance and achieve their business goals.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-abt leading-9 font-bold">Our Values</span>
            <ul className="text-textabt text-justify list-disc ml-5">
              <li>
                <b>Trust:</b> We are committed to providing accurate and
                reliable information to job seekers and companies.
              </li>
              <li>
                <b>Transparency:</b> We provide a platform that is open and
                easily accessible to everyone.
              </li>
              <li>
                <b>Speed:</b> We understand that time is important, and we
                strive to provide fast and efficient service.
              </li>
              <li>
                <b>Innovation:</b> We are always looking to innovate and improve
                our services to provide the best experience for our users.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-abt leading-9 font-bold">Featured</span>
            <span className="text-textabt text-justify">
              <b>Careerpath</b> A premier platform facilitating job seekers in
              finding their ideal jobs and companies in securing exceptional
              talent
              <ul className="list-disc ml-5">
                <li>
                  <b>Job Search:</b> Job seekers can search for jobs by keyword,
                  location, category, and job type.
                </li>
                <li>
                  <b>Job Posting:</b> Companies can easily post jobs and reach
                  millions of job seekers across Indonesia.
                </li>
              </ul>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-abt leading-9 font-bold">Contact Us</span>
            <span className="text-textabt text-justify">
              If you have any questions or would like to get more information
              about careerpath., please contact us through:
              <ul className="list-disc ml-5">
                <li>
                  Email: <b>hi.tryfix@gmail.com</b>
                </li>
                <li>
                  Phone: <b>08XXXXXXXXXX</b>
                </li>
                <li>
                  Website: <b>careerpath.com</b>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
