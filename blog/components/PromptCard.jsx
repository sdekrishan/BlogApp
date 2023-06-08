"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  const [copy, setCopy] = useState("")

  const handleCopy = () => {
    setCopy(post.blog)
    navigator.clipboard.writeText(post.blog)
    setTimeout(()=>setCopy(""),3000)
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

      {/* for copy */}
      <div className="copy_btn" onClick={()=>handleCopy}>
        <Image 
        src={copy === post.blog ? '/assets/icon/tick.svg' : "/assets/icon/copy.svg"}
        width={12}
        height={12}
        />
      </div>

      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.blog}
      </p>
      <p className="font-inter text-sm blue_gradient curson-pointer" 
      onClick={()=> handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
    </div>
  );
};

export default PromptCard;
