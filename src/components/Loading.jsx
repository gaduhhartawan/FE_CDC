export default function Loading({ isLoading }) {
    if (isLoading) {
      return (
        <p className=" text-center justify-center items-center font-plusjakarta text-black font-bold text-3xl">
          Loading...
        </p>
      );
    }
    return <></>;
}