import React from "react";
import User from "./User";
import { useAuth } from "../../../contexts/AuthContext";

const SuggestedUsers = ({ allUsers }) => {
  const { authState } = useAuth();
  const currentUser = authState?.user;
  const suggestedUsers = allUsers?.filter(
    (user) => user?.username !== currentUser?.username
  );

  return (
    <section className="bg-neutral-900 py-4 rounded-2xl sticky top-20">
      <h1 className="text-[1.25rem] px-4 pb-4">Suggested Users</h1>
      <div>
        {suggestedUsers?.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedUsers;
