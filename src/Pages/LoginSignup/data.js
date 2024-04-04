const login = {
    title: 'LOGIN',
    string1: 'Create an account?',
    string2: 'Click here',
    url: '/signup',
    data: [
        {
            text: 'Email Address',
            type: 'email'
        },{
            text: 'Password',
            type: 'password'
        }       
    ]
}

const signup = {
    title: 'SIGNUP',
    string1: 'Already have an account?',
    string2: 'Login here',
    url: '/login',
    data: [
        {
            text: 'Your name',
            type: 'text'
        },
        {
            text: 'Email Address',
            type: 'email'
        },{
            text: 'Password',
            type: 'password'
        }       
    ]
}

export { login, signup }