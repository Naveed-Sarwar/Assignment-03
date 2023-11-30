import { blogData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {

  return (
    <div className="px-4 py-8 lg:px-14 grid lg:grid-cols-3 gap-x-4">
      {blogData?.map((item) => {
        return (
          <div className="cursor-pointer">
            <Link href={`/blog/${item?.slug}`}>
              <img src={item?.image} className="w-full h-64 rounded-lg" />
              <h1 className="text-xl font-bold">{item?.title}</h1>
              {item?.content}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
