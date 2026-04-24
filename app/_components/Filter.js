"use client";

import React from 'react';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all"

  function handleFilter(filter) {
    // web api urlSearchParams
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {scroll: false});
  };

  return (
    <div className='border border-primary-800 flex'>
      <button className='px-5 py-2 hover:bg-primary-700' onClick={() => handleFilter("all")}>
      All Cabins
      </button>
      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
        All Cabins
      </Button>
      <button className='px-5 py-2 hover:bg-primary-700' onClick={() => handleFilter("small")}>
      
      </button>
      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1&mdash;3 guests
      </Button>
      <button className='px-5 py-2 hover:bg-primary-700'  onClick={() => handleFilter("medium")}>
      
      </button>
      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4&mdash;7 guests
      </Button>
      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  )
};

function Button({ filter, handleFilter, activeFilter, children }) {
  <button className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}  onClick={() => handleFilter(filter)}>
    {children}
  </button>;
}

export default Filter;