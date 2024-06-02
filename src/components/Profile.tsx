import { Icon } from "@iconify/react";

function Profile() {
  return (
    <div className="w-full h-20 box-border p-2 card absolute bottom-0 right-0 flex justify-between">
      <div className="profile-data flex gap-5">
        <div className="avatar w-16 h-16 ml-8 bg-gray-400 rounded-full overflow-hidden relative flex justify-center items-end">
          <Icon icon="mdi:person" width={70} className="absolute -bottom-3" />
        </div>

        <div className="profile-info w-52  flex flex-col items-start justify-center rounded-lg h-16">
          <p className="text-3xl font-semibold name-profile">John Doe</p>
          <p className="text-sm text-green-400">156.589$</p>
        </div>
      </div>

      <div className="profile-settings flex items-center gap-2 mr-8 *:duration-100">
        <div className="settings  w-12 h-12  justify-center rounded-xl items-center flex hover:bg-white hover:text-black">
          <Icon icon="hugeicons:settings-02" className="w-8 h-8" />
        </div>
        <div className="out w-12 h-12 justify-center rounded-xl items-center flex hover:bg-white hover:text-black">
          <Icon icon="hugeicons:logout-02" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
