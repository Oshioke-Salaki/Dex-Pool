import backBtn from "../assets/backBtn.svg";
import "@covalenthq/goldrush-kit/styles.css";
import { GoldRushProvider, XYKPoolDetailView } from "@covalenthq/goldrush-kit";

function ResultsPage() {
  return (
    <div className="bg-bgMain bg-no-repeat bg-cover bg-center min-h-screen relative">
      <button className="fixed top-[40px] left-[40px]">
        <img src={backBtn} alt="" />
      </button>
      <main className="pt-[100px] flex justify-center flex-col gap-y-4 items-center">
        <h2 className="text-white text-lg font-extrabold mb-[14px]">Results</h2>
        <div className="w-[80%]">
          <GoldRushProvider
            apikey={"cqt_rQkVVrThdHDvQ4MkG7br9J8BhrW4"}
            mode="dark"
            color="emerald"
          >
            <XYKPoolDetailView
              chain_name={"eth-mainnet"}
              dex_name={"uniswap_v2"}
              pool_address={"0x21b8065d10f73ee2e260e5b47d3344d3ced7596e"}
            />
          </GoldRushProvider>
        </div>
      </main>
    </div>
  );
}

export default ResultsPage;
