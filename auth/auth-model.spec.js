const model = require("./auth-model")
const db = require("../database/dbConfig")


// Test 1 and 2 for auth-model ADD users
describe("user model", () => {
  beforeEach(async () => {
    await db('users').truncate()
  })

  describe("add()", () => {
    it("should insert (register) a user into the users database", async () => {
      await model.add({ 
        username: "zachs",
        password: "pass1s"
       })

      let users = await db("users")
      expect(users).toHaveLength(1)
    })
  })
})