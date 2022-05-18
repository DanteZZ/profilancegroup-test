const connector = ({ posts: { list }, user: { isAuth, info } }) => ({
	list,
	isAuth,
	userInfo: info
});
export default connector;
