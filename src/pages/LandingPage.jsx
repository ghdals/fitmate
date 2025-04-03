import logo from "../assets/logo.svg";

const LandingPage = () => {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <img src={logo} alt="동양 캐릭터" className="h-50" />
          <h1 className="text-5xl font-bold">FITMATE</h1>
          <p className="mt-4 text-lg">당신을 위한 맞춤형 운동 플랜</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600">
            시작하기
          </button>
        </div>
      </section>
    );
  };
  
  export default LandingPage;