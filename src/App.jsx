import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return <div className=" w-[100%] h-[100vh] flex flex-col background p-10 overflow-x-hidden ">
           <h1 className=" border p-4 mb-10 bg-slate-50 text-center text-xl lg:text-3xl font-bold uppercase rounded-2xl">Random GIFs</h1>
           <div className=" flex flex-col w-full justify-center items-center gap-10" >
              <Random/>
              <Tag/>
           </div>
  </div>;
}
