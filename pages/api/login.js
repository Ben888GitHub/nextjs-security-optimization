const login = (req, res) => {
	// check the user's credentials
	const { username, password } = req.body;
	// res.status(200).json({ message: 'Hello world' });
	let authenticated;
	// res.status(200).json({ username, password });

	if (username === 'test' && password === '123456') {
		authenticated = true;
	} else {
		authenticated = false;
	}

	if (authenticated) {
		// set a cookie with the a random sessionId
		const sessionId = 454544;
		res.setHeader(
			'Set-Cookie',
			`session=${sessionId}; Path=/;   Max-Age=600; SameSite=Strict; HttpOnly`
		);

		// send a success response
		res.status(200).json({ message: 'Login successful' });
	} else {
		// send an error response
		res.status(401).json({ message: 'Invalid credentials' });
	}
};

export default login;
