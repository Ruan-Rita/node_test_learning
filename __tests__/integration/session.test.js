const { User } = require('../../src/app/models')





describe('Authentication', () => {
    // it('should receive JWT tokce when authenticate with valid credentials', () => {

    // });
    it('should sum two numbers',  async function() {
        const user =  await new Promise(resolve => {
            resolve(User.create({
                name: "Ruan@@@22Rita", 
                email: "ruan@gmail.com",
                password_hash: "asdlçasdçl123123"
            }))
        })

        console.log("nosso querido user, inseriu ???");
        console.log(user);
        expect(user.email).resolves.toBe('ruan@gmail.com')
        
    });
});
