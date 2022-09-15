import React from "react";

const pagination = ({data,pageHandler}) => {
    const pagenumber=[];
    for(let i=1;i<Math.ceil(data.length/10)+1;i++)
    pagenumber.push(i)
  return <>
  {pagenumber.map((page)=>(
    <div className="pageNumber" onClick={()=>{pageHandler(page)}}>{page}</div>
  ))}
  </>;
};

export default pagination;
