import React, { useEffect, useState } from "react";
import { fetchUserList } from "../Module/getListUser";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import BaIcon from "../Icon/ba.png";
import devIcon from "../Icon/developer.png";
import MaIcon from "../Icon/manager.png";
import TeIcon from "../Icon/tester.png";

export default function UserList() {
  const [lstUser, setLstUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [role, setRole] = useState("dev");
  const [activeRole, setActiveRole] = useState("dev");
  const [gender, setGender] = useState("all");
  const [search, setSearch] = useState("");

  const handleRoleClick = (role) => {
    setActiveRole(role);
    setRole(role);
  };

  useEffect(() => {
    const loadUsers = async () => {
      const users = await fetchUserList(role);
      setLstUser(users);
    };
    loadUsers();
  }, [role]);

  useEffect(() => {
    let users = lstUser;

    if (gender !== "all") {
      users = users.filter((user) => user.gender === gender);
    }

    if (search) {
      users = users.filter((user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredUsers(users);
  }, [lstUser, gender, search]);

  return (
    <div className="grid grid-cols-12 md:grid-cols-12 sm:grid-cols-1">
      <div className="hidden md:block col-span-2 md:col-span-2">
        <Sidebar setRole={setRole} />
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col p-4 w-full col-span-12 md:col-span-10">
        <Header search={search} setSearch={setSearch} />
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between mt-5 mb-11">
          <h1 className="text-2xl font-semibold my-4 text-orange-400">User List</h1>
          <div className="flex items-center">
            <p className="font-semibold mr-3">Gender:</p>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {filteredUsers.map((user, index) => (
            <UserCard
              key={index}
              picture={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              gender={user.gender}
              email={user.email}
              country={user.location.country}
              phoneNumber={user.phone}
            />
          ))}
        </div>
      </div>
      <div className="sm:block md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <button 
            className={`p-2 rounded-full ${activeRole === "dev" ? "bg-orange-100 text-orange-500" : ""}`}
            onClick={() => handleRoleClick("dev")}
          >
            <img src={devIcon} alt="" className="w-6 h-6" />
          </button>
          <button 
            className={`p-2 rounded-full ${activeRole === "test" ? "bg-orange-100 text-orange-500" : ""}`}
            onClick={() => handleRoleClick("test")}
          >
            <img src={TeIcon} alt="" className="w-6 h-6" />
          </button>
          <button 
            className={`p-2 rounded-full ${activeRole === "ba" ? "bg-orange-100 text-orange-500" : ""}`}
            onClick={() => handleRoleClick("ba")}
          >
            <img src={BaIcon} alt="" className="w-6 h-6" />
          </button>
          <button 
            className={`p-2 rounded-full ${activeRole === "manager" ? "bg-orange-100 text-orange-500" : ""}`}
            onClick={() => handleRoleClick("manager")}
          >
            <img src={MaIcon} alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
}