/* eslint-disable react/prop-types */
import backBtn from "../assets/backBtn.svg";
import "@covalenthq/goldrush-kit/styles.css";
import { GoldRushProvider, XYKPoolDetailView } from "@covalenthq/goldrush-kit";
import { useQuery } from "../context/QueryContext";
import { useNavigate } from "react-router-dom";

function ResultsPage() {
  const { dex_name, pool_address, chain_name } = useQuery();

  const navigate = useNavigate();
  function handleGoHome() {
    navigate("/");
  }
  return (
    <div className="bg-bgMain bg-no-repeat bg-cover bg-center min-h-screen relative pb-10">
      <button className="fixed top-[40px] left-[40px]" onClick={handleGoHome}>
        <img src={backBtn} alt="" />
      </button>
      <main className="pt-[100px] flex justify-center flex-col gap-y-4 items-center">
        {!dex_name || !pool_address || !chain_name ? (
          <div className="flex flex-col items-center text-center pt-[100px]">
            <h3 className="text-[32px] font-semibold text-white">
              Hey go back to the home page
              <br /> to query your data.
            </h3>
            <button
              className="w-[300px] border-[0.5px] border-solid border-[#c4c4c4] bg-[#121212] py-4 text-white text-xl font-bold rounded-lg mt-6"
              onClick={handleGoHome}
            >
              Go to home
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-white text-lg font-extrabold mb-[14px]">
              Results
            </h2>
            <div className="w-[80%]">
              <GoldRushProvider
                apikey={"cqt_rQkVVrThdHDvQ4MkG7br9J8BhrW4"}
                mode="dark"
                color="emerald"
              >
                <XYKPoolDetailView
                  chain_name={chain_name}
                  dex_name={dex_name}
                  pool_address={pool_address}
                />
              </GoldRushProvider>
            </div>{" "}
          </>
        )}
      </main>
    </div>
  );
}

export default ResultsPage;
