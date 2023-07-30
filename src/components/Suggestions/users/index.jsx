import React from "react";
import User from "./User";
import { useAuth } from "../../../contexts/AuthContext";

const SuggestedUsers = ({ allUsers }) => {
  const { currentUser } = useAuth();
  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const suggestedUsers = allUsers?.filter(
    (indivisualUser) =>
      indivisualUser?.username !== updatedCurrentUser?.username &&
      !updatedCurrentUser?.following?.some(
        ({ username }) => username === indivisualUser?.username
      )
  );

  return (
    <section className="sticky top-20 rounded-2xl bg-neutral-900 py-4">
      <h1 className="px-4 pb-4 text-[1.25rem]">Suggested Users</h1>
      {suggestedUsers?.length > 0 ? (
        <div className="flex flex-col gap-5">
          {[...suggestedUsers]?.map((user) => (
            <User user={user} key={user?._id} />
          ))}
        </div>
      ) : (
        <div className="pt-2 pb-3 px-4 w-full font-bold text-left">You followed all the users!</div>
      )}
    </section>
  );
};

export default SuggestedUsers;
