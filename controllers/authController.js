module.exports = {
  login: (_, args) => {
    const { email, password } = args
    /*
     * Your computation about login algorithm
     * */
    if (email !== 'admin@mail.com' || password !== '123456')
      throw new Error('Wrong email or password!')

    return {
      // Resolve your token
      accessToken: 'this is token!'
    }
  }
}
