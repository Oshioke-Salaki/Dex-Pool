import backBtn from "../assets/backBtn.svg";

function ResultsPage() {
  return (
    <div className="bg-bgMain bg-no-repeat bg-cover bg-center min-h-screen relative">
      <button className="fixed top-[40px] left-[40px]">
        <img src={backBtn} alt="" />
      </button>
      <main className="pt-[100px] flex justify-center">
        <h2 className="text-white text-lg font-extrabold mb-[14px]">Results</h2>
      </main>
    </div>
  );
}

export default ResultsPage;
