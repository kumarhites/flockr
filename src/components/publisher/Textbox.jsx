import React from "react";
import { usePost } from "../../contexts/PostContext";

const Textbox = () => {
    const { postInput, setPostInput } = usePost();
    return (
        <div className="flex-1 py-2">
            <textarea
                id="message"
                rows="5"
                name="caption"
                className="block h-full w-full rounded-lg border border-gray-300  bg-transparent/10 p-2.5 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Write your thoughts here...
                (Win + . ) for 😉"
                value={postInput?.caption}
                onChange={(e) =>
                    setPostInput({ ...postInput, caption: e.target.value })
                }
            ></textarea>
        </div>
    );
};

export default Textbox;
