import React, { useEffect, useRef } from "react";
import autoAnimate from '@formkit/auto-animate'

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-30 backdrop-blur-lg dropshadow-md mr-auto";
  
  const parent  = useRef(null);
  const bottomRef = useRef(null);

  // Only For Auto Animation
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent])

  // For Scrolling Bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behaviour:"smooth"})
  }, [chat])

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] bg-slate-700 ${
              message.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef} className="h-3"></div>
      {/* AI Response */}
      {/* <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle}`}>
        <pre>
            <span>Yes, I can..!!</span>
        </pre>
    </div> */}
    </div>
  );
};

export default ChatBody;
