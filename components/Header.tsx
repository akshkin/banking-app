import React from "react";

function Header({ type = "title", title, subText, user }: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient"> {user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subText}</p>
    </div>
  );
}

export default Header;
