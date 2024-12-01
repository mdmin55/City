export const validData = {
	surname: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'На русском'
	},
	name: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'На русском'
	},
	patronymic: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'На русском'
	},
	login: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[a-zA-Z]+$/i.test(data) && 'латинскими символами'
	},
	email: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^\S+@\S+\.\S+$/.test(data) && 'неверная почта'
	},
	password: data => {
		return data.length < 3 && 'Пароль короче 3 символов'
	},
	twoPassword: data => {
		return data.length < 3 && 'Пароль короче 3 символов'
	}
}
