export const categories = [
	{
		id: 1,
		name: 'Решена',
		value: 'SOLVED'
	},
	{
		id: 2,
		name: 'Отклонена',
		value: 'REJECTED'
	}
]

export const navigationMD = [
	{
		id: 1,
		link: '/',
		title: 'Главная',
		img: './header/home.svg'
	},
	{
		id: 2,
		link: '/problems',
		title: 'Заявки',
		img: './header/add.svg'
	},
	{
		id: 3,
		link: '/profile',
		title: 'Профиль',
		img: './header/profile.svg'
	}
]

export const navigationPC = [
	{
		id: 1,
		link: '/register',
		title: 'Регистрация'
	},
	{
		id: 2,
		link: '/login',
		title: 'Вход'
	}
]

export const test = [
	{
		id: 1,
		title: 'Ремон дороги',
		category: 'Дорога',
		time: '27.10.2023 18:37',
		img: {
			before: './test/test.png',
			after: './test/test2.png'
		}
	},
	{
		id: 2,
		title: 'Восстановление города',
		category: 'Город',
		time: '28.11.2024 19:47',
		img: {
			before: './test/test3.png',
			after: './test/test4.png'
		}
	}
]

export const register = [
	{
		id: 1,
		label: 'Фамилия',
		title: 'surname',
		type: 'text',
		placeholder: 'Ваша фамилия'
	},
	{
		id: 2,
		label: 'Имя',
		title: 'name',
		type: 'text',
		placeholder: 'Ваше имя'
	},
	{
		id: 3,
		label: 'Отчество',
		title: 'patronymic',
		type: 'text',
		placeholder: 'Ваше отчество'
	},
	{
		id: 4,
		label: 'Логин',
		title: 'login',
		type: 'text',
		placeholder: 'Ваш логин'
	},
	{
		id: 5,
		label: 'Почта',
		title: 'email',
		type: 'email',
		placeholder: 'Ваша почта'
	},
	{
		id: 6,
		label: 'Пароль',
		title: 'password',
		type: 'password',
		placeholder: 'Пароль'
	},
	{
		id: 7,
		label: 'Повторите пароль',
		title: 'twoPassword',
		type: 'password',
		placeholder: 'Повторите пароль'
	}
]

export const login = [
	{
		id: 1,
		label: 'Логин',
		title: 'login',
		type: 'text',
		placeholder: 'Ваш логин'
	},
	{
		id: 2,
		label: 'Пароль',
		title: 'password',
		type: 'password',
		placeholder: 'Пароль'
	}
]
