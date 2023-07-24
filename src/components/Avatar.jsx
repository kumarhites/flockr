import { useAuth } from "../contexts/AuthContext";

const Avatar = ({ src = "", alt, profile = false }) => {
  const { authState } = useAuth();
  const currentUser = authState?.user;

  const userInitials = currentUser?.fullname?.split(" ");
  const initials = userInitials
    ? userInitials.map((initial) => initial[0].toUpperCase())
    : null;

  return (
    <div
      className={
        profile
          ? "w-36 h-36 overflow-hidden rounded-full"
          : "w-12 h-12 overflow-hidden rounded-full"
      }
    >
      {src.length === 0 ? (
        <span
          className={
            profile
              ? "w-36 h-36 overflow-hidden rounded-full text-5xl flex text-white justify-center items-center bg-slate-700"
              : "w-12 h-12 overflow-hidden rounded-full text-xl flex text-white justify-center items-center bg-slate-700"
          }
        >
          {initials ? initials.join("") : ""}
        </span>
      ) : (
        <img src={src} alt={alt} className="w-full" />
      )}
    </div>
  );
};

export default Avatar;
