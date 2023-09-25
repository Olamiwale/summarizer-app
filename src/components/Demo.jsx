import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

export default function Demo() {

  const [article, setArticle] = useState({
    url:'', 
    summary:'',
  })

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const {data} = await getSummary({
      articleUrl:article.url

     
    })
 if(data?.summary) {
  const newArticle = {...article,summary:data.summary}
  setArticle(newArticle)

      }
    
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2 ">
        <form onSubmit={handleSubmit} 
              className="flex justify-center items-center relative">
          <img
            src={linkIcon}
            alt="link-icon "
            className="absolute left-0 my-2 ml-3 w-5"     
          />
          <input
            type="url"
            placeholder="Paste the article link"
            required
            className="url_input peer"
            value={article.url}
            onChange={(e)=>setArticle({...article,url:e.target.value})}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>
        

        <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img 
          src={loader} 
          alt='loader' 
          className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            opps, that wasn't supposed to happen, try again...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>



      </div>



     
    </section>
  );
}
