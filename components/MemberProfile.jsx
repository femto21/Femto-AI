import { auth, currentUser, UserButton } from "@clerk/nextjs";

const MemberProfile = async () => {
  const user = await currentUser();
  //const { userId } = auth();

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p>{user.firstName + " " + user.lastName}</p>
    </div>
  );
};
export default MemberProfile;
