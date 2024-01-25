import Navbar from "../ui/Navbar";

function HomePage() {
  return (
    <div className="bg-bgMain bg-no-repeat bg-cover bg-center min-h-screen">
      <Navbar />
      <main className="pt-[38px] flex justify-center">
        <div className="w-[650px]">
          <h2 className="text-white text-lg font-extrabold mb-[14px]">
            Filters
          </h2>
          <form className="w-full ">
            <div className="form-box bg-white rounded-lg py-6 px-[30px]">
              <div className="form-control">
                <label htmlFor="">Chain</label>
                <select name="" id=""></select>
              </div>
              <div className="form-control">
                <label htmlFor="">Dex</label>
                <select name="" id=""></select>
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-white text-base font-bold mb-4">
                Pool Address
              </h3>
              <input
                type="text"
                className="bg-white border-[#c4c4c4] border-[0.5px] border-solid w-full p-3 rounded-lg outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full border-[0.5px] border-solid border-[#c4c4c4] bg-[#121212] py-4 text-white text-xl font-bold rounded-lg mt-6"
            >
              Query data
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
