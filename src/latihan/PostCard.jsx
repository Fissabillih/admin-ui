import React, { useState } from "react";

function PostCard({ title, body }) {
    const [clicked, setClicked] = useState(false);

    return (
        <div
            className={`${clicked ? "bg-blue-100" : "bg-white"} p-6 rounded-lg shadow hover:shadow-md transition-all cursor-pointer`}
            onClick={() => setClicked(true)}
        >
            <h2 className="text-base font-bold text-gray-800 mb-2 capitalize">{title}</h2>
            <p className="text-sm text-gray-600">{body}</p>
        </div>
    );
}

export default PostCard;
