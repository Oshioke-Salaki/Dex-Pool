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
                <label htmlFor="chain-name">Chain</label>
                <select
                  name="chain-name"
                  id="chain-name"
                  value={chain}
                  className="text-black"
                  onChange={(e) => setChain(e.target.value)}
                >
                  <option value="eth-mainnet" selected>
                    Ethereum Mainnet
                  </option>
                  <option value="optimism-mainnet">Optimism Mainnet</option>
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

            <div className="text-center mt-6">
              <label
                className="text-white text-base font-bold mb-4"
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
                className="bg-white text-black border-[#c4c4c4] mt-4 border-[0.5px] border-solid w-full p-4 rounded-lg outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full border-[0.5px] border-solid border-[#c4c4c4] bg-[#121212] py-4 text-white text-xl font-bold rounded-lg mt-6"
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
