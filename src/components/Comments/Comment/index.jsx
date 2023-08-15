import React, { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import Heading from "./Heading";
import Avatar from "../../Avatar";
import EditCommentModal from "../../EditCommentsModal/EditCommentModal";

const Comment = ({ comment, postId }) => {
    let [isOpen, setIsOpen] = useState(false);
    const {
        user: { allUsers },
    } = useUser();

    const user = allUsers?.find(
        (dbUser) => comment?.username === dbUser?.username
    );

    const name = user?.firstName + " " + user?.lastName;
    return (
        <div className="border-t-[1px] px-4 pb-2 pt-3 transition-colors duration-500 ease-out">
            <div className="grid grid-cols-[auto,1fr] gap-3">
                <Avatar src={user?.avatar} alt={user?.username} />
                <div>
                    <div>
                        <Heading
                            setIsOpen={setIsOpen}
                            name={name}
                            username={user?.username}
                            postId={postId}
                            commentId={comment?._id}
                        />
                    </div>
                    <p>{comment?.text}</p>
                </div>
            </div>
            <EditCommentModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                comment={comment}
                postId={postId}
            />
        </div>
    );
};

export default Comment;
