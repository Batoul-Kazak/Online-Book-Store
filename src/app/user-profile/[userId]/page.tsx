// import { mockUsers } from "@/app/lib";
import UserProfile from "@/app/components/UserProfile/UserProfile";

export default async function UserProfile_({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  // const userId_ = (await params).userId;
  // const userInfo = mockUsers.find(
  //   (user) => Number(user.id) === Number(userId_)
  // );

  // return <div>User {userInfo?.id}</div>;
  return <UserProfile />;
}
