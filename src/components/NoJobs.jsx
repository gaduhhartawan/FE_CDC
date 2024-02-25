export default function NoJobs({ data }) {
    if (data === 0) {
      return (
        <div className="flex flex-col mb-10">
          <img src="/nojobs.svg" alt="" className="justify-center h-60"/>
          <p className=" text-center justify-center items-center font-plusjakarta text-black font-bold text-3xl mt-10">
            No Jobs Available Right Now!
          </p>
        </div>
      );
    }
    return <></>;
}