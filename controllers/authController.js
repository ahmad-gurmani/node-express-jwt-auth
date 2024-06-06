export function signup_get(req, res) {
    res.render('signup');
}
export function login_get(req, res) {
    res.render('login');
}
export function login_post(req, res) {
    res.send('login post');
}
export function signup_post(req, res) {
    res.send('new User signup');
}
export function logout_post(req, res) {
    res.render('Current user logged out');
}   