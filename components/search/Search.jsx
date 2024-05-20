"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const [allowSearch, setAllowSearch] = useState(true);
  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin || "",
    checkout: checkout || "",
  });

  const handleInputs = (event) => {
    const names = event.target.name;
    const value = event.target.value;

    const state = { ...searchTerm, [names]: value };

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }

    setSearchTerm(state);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm.destination);
    if (searchTerm.checkin && searchTerm.checkout) {
      params.set("checkin", searchTerm.checkin);
      params.set("checkout", searchTerm.checkout);
    }

    if (pathName.includes("hotels")) {
      replace(`${pathName}?${params.toString()}`);
    } else {
      replace(`${pathName}hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                onChange={handleInputs}
                defaultValue={searchTerm.destination}
                name="destination"
                id="destination"
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
                <option value="Palermo">Palermo</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                onChange={handleInputs}
                value={searchTerm.checkin}
                type="date"
                name="checkin"
                id="checkin"
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                onChange={handleInputs}
                value={searchTerm.checkout}
                type="date"
                name="checkout"
                id="checkout"
              />
            </h4>
          </div>
        </div>
      </div>

      <button
        onClick={handleSearch}
        disabled={!allowSearch}
        className={"search-btn"}
      >
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
