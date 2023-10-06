import { logout } from '../slices/auth-slice';
import httpService from './httpService';

const interceptor = (store) => {
	httpService.interceptors.request.use(
		async (config) => {
			const auth = store.getState().auth;
			const token = auth.token;
			// config.headers['Content-Type'] = 'application/json; charset=utf-8';

			if (token) {
				// Adding authorization header
				config.headers.Authorization = `Bearer ${token}`;
			}
			//console.log('config', JSON.stringify(config));
			return config;
		},
		error => Promise.reject(error)
	);

	httpService.interceptors.response.use(
		(next) => {
			return Promise.resolve(next);
		},
		(error) => {
			const status = error.response?.status || 500;
			if (status === 401) {
				store.dispatch(logout());
				window.location = window.location.protocol + "//" + window.location.host + "/"
			} else {
				return Promise.reject(error); // Delegate error to calling side
			}
		}
		// You can handle error here and trigger warning message without get in the code inside
	);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { interceptor };