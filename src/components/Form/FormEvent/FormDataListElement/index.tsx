import { UserDataWithId } from "../../../../types/User";

type propsFormDataList = {
    users:UserDataWithId[]
}
const index = ({users}:propsFormDataList) => {
  return (
    <>
      <div className="form__group">
        <input list="admins" placeholder="admins of event" />
        <datalist id="admins">
          {users.map((userDataList) => (
            <option value={userDataList.name}></option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default index;
