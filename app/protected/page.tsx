import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="max-h-screen max-w-screen bg-black">
      <div className="w-full h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="pointer-events-none w-full max-w-screen-lg aspect-video"
        ></iframe>
        <SignOut />
      </div>
    </div>
  );
}
