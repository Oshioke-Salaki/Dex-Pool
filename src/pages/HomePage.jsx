import { useState } from "react";
import Navbar from "../ui/Navbar";
import { useQuery } from "../context/QueryContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [chain, setChain] = useState("eth-mainnet");
  const [dex, setDex] = useState("uniswap_v2");
  const [poolAddress, setPoolAddress] = useState("");
  const { dispatch } = useQuery();

  const navigate = useNavigate();

  function handleSubmit() {
    dispatch({
      type: "submit",
      payload: {
        chain_name: chain,
        dex_name: dex,
        pool_address: poolAddress,
      },
    });
    navigate("results");
  }

  return (
    <div className="min-h-screen bg-bgMain bg-cover bg-center bg-no-repeat">
      <Navbar />
      <main className="flex justify-center px-[28px] pt-[38px]">
        <div className="w-full sm:w-[650px]">
          <h2 className="mb-[14px] text-lg font-extrabold text-white">
            Filters
          </h2>
          <form className="w-full ">
            <div className="form-box rounded-lg bg-white px-[30px] py-6">
              <div className="form-control">
                <label htmlFor="chain-name">Chain</label>
                <select
                  name="chain-name"
                  id="chain-name"
                  value={chain}
                  className="text-black"
                  onChange={(e) => setChain(e.target.value)}
                >
                  <option value="eth-mainnet" selected>
                    Ethereum
                  </option>
                  <option value="optimism-mainnet">Optimism</option>
                  <option value="matic-mainnet">Matic</option>
                  <option value="bsc-mainnet">BNB Smart Chain</option>
                  <option value="avalanche-mainnet">Avalanche</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="dex">Dex</label>
                <select
                  name="dex"
                  id="dex"
                  value={dex}
                  className="text-black"
                  onChange={(e) => setDex(e.target.value)}
                >
                  <option value="uniswap_v2" selected>
                    Uniswap
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-6 text-center">
              <label
                className="mb-4 text-base font-bold text-white"
                htmlFor="pool-address"
              >
                Pool Address
              </label>
              <input
                type="text"
                required
                name="pool-address"
                id="pool-address"
                value={poolAddress}
                placeholder="Enter the pool address"
                onChange={(e) => setPoolAddress(e.target.value)}
                className="mt-4 w-full rounded-lg border-[0.5px] border-solid border-[#c4c4c4] bg-white p-4 text-black outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg border-[0.5px] border-solid border-[#c4c4c4] bg-[#121212] py-4 text-xl font-bold text-white"
              onClick={handleSubmit}
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
