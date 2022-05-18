const connector = ({ user: { isAuth, info } }) => ({
	isAuth,
	userInfo: info
});
export default connector;
