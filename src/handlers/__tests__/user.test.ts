import * as user from "../user";

describe("User Handler", () => {

  it("should create a new user", async () => {
    const req = {
      body: { username: "user_name", password: "password@" },
    };
    const res = {
      json({ token }) {
        console.log({token})
        expect(token).toBeTruthy();
      },
    };
    await user.createNewUser(req, res, () => {});
  });
});
