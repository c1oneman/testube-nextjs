import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  const sendToFullscreen = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const hostname = window.location.host;
      router.push(
        `https://www.youtube.com/redirect?&q=https%3A%2F%2F${hostname}%2F`
      );
    }
  };
  const handleOpen = (URL) => {
    if (typeof window !== "undefined") {
      router.push(`${URL}`);
    }
  };

  return (
    <div>
      <Head>
        <title>Tesla Media Router</title>
        <meta name="description" content="A fast tesla media web-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="language" content="en" />
      </Head>

      <div className={`text-white text-xl pl-2 sm:pl-8`}>
        <header className="w-full py-2 flex justify-between pr-8">
          <Image
            src="/TeslaLogo.svg"
            height={30}
            width={30}
            alt={"Tesla Logo"}
          />

          <div className="">
            <button
              onClick={sendToFullscreen}
              className="material-icons h-full"
            >
              fullscreen
            </button>
          </div>
        </header>
        <div className="flex flex-col mb-4 fade-right">
          {/* Website scroll list horizontal */}
          <div>
            <h1 className=" text-2xl">Streaming</h1>
            <div className="mt-2">
              {/* horizontal scroll */}
              <div className="flex space-x-4 overflow-x-auto streamList pb-2 pr-8 ">
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg bg-gray-200 app-container hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleOpen("https://netflix.com")}
                >
                  <Image
                    src="/NetflixLogo.svg"
                    height={64}
                    width={150}
                    alt={"Netflix Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg bg-gray-300 app-container hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleOpen("https://youtube.com")}
                >
                  <Image
                    src="/youtube-ar21.svg"
                    height={74}
                    width={150}
                    alt={"Youtube Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 app-container hover:bg-none hover:bg-blue-600  cursor-pointer"
                  onClick={() => handleOpen("https://hbomax.com")}
                >
                  <Image
                    src="/HBO_MaxLogo.svg"
                    height={64}
                    width={200}
                    alt={"HBO Max Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg app-container bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  onClick={() => handleOpen("https://hulu.com")}
                >
                  <Image
                    src="/HuluLogo.svg"
                    height={64}
                    width={200}
                    alt={"Hulu Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg app-container bg-gray-200 hover:bg-blue-100 transition cursor-pointer"
                  onClick={() =>
                    handleOpen(
                      "https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011"
                    )
                  }
                >
                  <Image
                    src="/PrimeLogo.svg"
                    height={64}
                    width={200}
                    alt={"Prime Video Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center app-container rounded-lg bg-indigo-700 hover:bg-indigo-800 transition cursor-pointer"
                  onClick={() => handleOpen("https://www.disneyplus.com/")}
                >
                  <Image
                    src="/Disney+-White-Logo.wine.svg"
                    height={100}
                    width={200}
                    alt={"Disney+ Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center app-container rounded-lg bg-gray-100 hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleOpen("https://www.peacocktv.com/")}
                >
                  <Image
                    src="/PeacockLogo.svg"
                    height={64}
                    width={150}
                    alt={"Peacock Logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4 fade-right">
          {/* Website scroll list horizontal */}
          <div>
            <h1 className=" text-2xl">Personal Media</h1>
            <div className="mt-2">
              {/* horizontal scroll */}
              <div className="flex space-x-4 overflow-x-auto  streamList pb-2 pr-8">
                <div
                  className="flex shrink-0 items-center justify-center app-container  rounded-lg bg-slate-800 hover:bg-slate-900 transition cursor-pointer"
                  onClick={() => handleOpen("https://app.plex.tv/")}
                >
                  <Image
                    src="/PlexLogo.svg"
                    height={64}
                    width={100}
                    alt={"Plex Logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  mb-4 fade-right">
          {/* Website scroll list horizontal */}
          <div>
            <h1 className=" text-2xl">Gaming</h1>
            <div className="mt-2">
              {/* horizontal scroll */}
              <div className="flex space-x-4 overflow-x-auto  streamList pb-2 pr-8">
                <div
                  className="flex shrink-0 items-center justify-center app-container rounded-lg bg-purple-600 transition cursor-pointer"
                  onClick={() => handleOpen("https://twitch.tv/")}
                >
                  <Image
                    src="/TwitchLogo.svg"
                    height={64}
                    width={100}
                    alt={"Twitch Logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-4">
          {/* Website scroll list horizontal */}
          <div>
            <h1 className="text-2xl">Utility</h1>
            <div className="mt-2">
              {/* horizontal scroll */}
              <div className="flex space-x-4 overflow-x-auto  streamList pb-2 pr-8">
                <div
                  className="flex shrink-0 items-center justify-center app-container rounded-lg bg-gray-100 hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleOpen("https://google.com")}
                >
                  <Image
                    src="/Google-Logo.wine.svg"
                    height={64}
                    width={148}
                    alt={"Google Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center app-container rounded-lg bg-red-500 hover:bg-red-600 transition cursor-pointer"
                  onClick={() => handleOpen("https://www.tesla.com/")}
                >
                  <Image
                    src="/TeslaLogo.svg"
                    height={64}
                    width={128}
                    alt={"Tesla Logo"}
                  />
                </div>
                <div
                  className="flex shrink-0 items-center justify-center app-container  rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                  onClick={() => handleOpen("https://na.chargepoint.com/home")}
                >
                  <Image
                    src="/ChargePointLogo.svg"
                    height={64}
                    width={128}
                    alt={"ChargePoint Logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
