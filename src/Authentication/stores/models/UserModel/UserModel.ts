import { observable } from "mobx";

class UserModel {
   id: string;
   @observable name: string;
   @observable email: string;
   @observable password: string;

   constructor({ id, name, email, password }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
   }
}

export { UserModel };
