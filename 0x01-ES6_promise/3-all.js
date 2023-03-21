import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
		.then((value) => {
			const res = value[0];
			const user = value[1];
			console.log(`${res.body} ${user.firstName} ${user.lastName}`);
		})
		.catch(() => console.log('Signup system offline'));
}
