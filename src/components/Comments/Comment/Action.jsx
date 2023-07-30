import React from "react";
import { Bookmark, LikeIcon, ReplyIcon } from "../../Icons";
import Rune from "../../Rune";

const Actions = ({ replies, retweets, likes }) => {
    return (
        <div className="mt-3 flex max-w-md cursor-pointer justify-between">
            <div className="tabletpx-4 group flex items-center gap-1">
                <Rune
                    Icon={<LikeIcon fill="group-hover:fill-rose-500" />}
                    color="group-hover:bg-rose-100"
                />
                <p className="text-xs group-hover:text-rose-500">{likes}</p>
            </div>
            <div className="group flex items-center tablet:pr-4">
                <Rune
                    Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
                    color="group-hover:bg-sky-100"
                />
                <p className="text-xs group-hover:text-sky-500">{replies}</p>
            </div>
            <div className="tabletpx-4 group flex items-center gap-1">
                <Rune
                    Icon={
                        <Bookmark fill="group-hover:fill-green-500 green-100" />
                    }
                    color="group-hover:bg-green-100 "
                />
                <p className="text-xs group-hover:text-green-500">{retweets}</p>
            </div>
        </div>
    );
};

export default Actions;
