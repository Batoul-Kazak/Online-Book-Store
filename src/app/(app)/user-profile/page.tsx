import { mockUsers } from "@/_lib";
import Image from "next/image";

export default function UserProfiles() {
  return (
    <div className="w-2/3 pt-30 place-self-center">
      <table className="w-full">
        <tr>
          <td className="p-2 font-bold">Avatar</td>
          <td className="p-2 font-bold">Name</td>
          <td className="p-2 font-bold">Email</td>
          <td className="p-2 font-bold">Role</td>
          <td className="p-2 font-bold">Signup Date</td>
          <td className="p-2 font-bold">Notifications State</td>
          <td className="p-2 font-bold">Prefered Categories</td>
          <td className="p-2 font-bold">Current Readings</td>
          <td className="p-2 font-bold">Reading History</td>
          <td className="p-2 font-bold">Saved Books</td>
        </tr>
        {mockUsers.map((user, i) =>
          <tr key={user.id} className={`${i % 2 === 0 ? "bg-primary-dark" : "bg-primary-very-dark"} max-h-[2rem] `}>
            <td className="h-10 p-2"><Image src={user.profileImage} alt={user.name + user.profileImage} /></td>
            <td className="h-10 p-2">{user.name}</td>
            <td className="h-10 p-2">{user.email}</td>
            <td className="h-10 p-2">{user.createdAt}</td>
            <td className="h-10 p-2">{user.role}</td>
            <td className={`h-10 p-2 ${user.preferences.notifications ? "text-green-400" : "text-red-400"} font-bold`}>{user.preferences.notifications ? "On" : "Off"}</td>
            <td className="p-2 overflow-y-scroll max-h-10">
              <ol>
                {user.preferences.favoriteCategories.map(cat => <li key={cat}>{cat}</li>)}
              </ol>
            </td>
            <td className="p-2 ">
              <ol>
                {user.readingHistory.map(book => <li key={book}>{book}</li>)}
              </ol>
            </td>
            <td className="p-2 ">
              <ol>{user.savedBooks.map(book => <li key={book}>{book}</li>)}</ol>
            </td>
          </tr>
        )}
      </table>
    </div>)

    ;
}
