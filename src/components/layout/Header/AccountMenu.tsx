import { FC } from "react";

const AccountMenu: FC<{visible: boolean}> = ({visible}) => {
    if (!visible) {
      return null
    }
    
    return (
      <div className="bg-black w-56 absolute right-0 top-16 border-gray-700 py-3 px-3 flex flex-col gap-3">
        <div className="align-center">
          This is your username
        </div>
        <hr />
        <div className="align-center">
          Log Out
        </div>
      </div>
    )
};

export default AccountMenu