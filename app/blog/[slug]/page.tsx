import { blogData } from "@/constants/data";
import React from "react";

const DynamicBlog = ({ params }: { params: { slug: string } }) => {
  const selectedBlog = blogData?.filter((item) => item?.slug === params.slug);
  return <div>
    <p className="text-lg px-14 py-8 font-medium ">
      {selectedBlog[0]?.content}
      </p></div>;
}; 

export default DynamicBlog;
