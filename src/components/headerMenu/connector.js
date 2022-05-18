const connector = ({ user: { isAuth, error } }) => ({
	isAuth,
	error
});
export default connector;
