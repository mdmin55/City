
import { register } from '../utils/constants';
import AuthForm from '../ui/AuthForm';
import AuthBtn from '../ui/AuthBtn';
import AuthHelp from '../ui/AuthHelp';
import AuthArrow from '../ui/AuthArrow';
import AuthHeader from '../ui/AuthHeader';
import { useState } from 'react';
import useTitle from '../hooks/useTitle';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    useTitle({ title: 'Регистрация' });
    const [form, setForm] = useState();
    const navigate = useNavigate();
    const [err, setErr] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await UserService.register(form);
        if (user.error) {
            setErr('Пользователь с таким логином или почтой уже существует');
        } else {
            navigate('/login');
        }
    };

    return (
        <main className='relative flex items-center justify-center  '>
            <div className='bg-[#c5ad87] p-6 rounded-lg  shadow-lg max-w-md w-full'>
            <AuthHeader title={'Регистрация'} />
            <AuthArrow />
            <form
                className='flex flex-col max-h-screen gap-y-3 px-4 mt-5 md:grid md:place-content-center md:mt-0 '
                onSubmit={handleSubmit}
            >
                
                {register.map(item => (
                    <AuthForm 
                        {...item}
                        key={item.id}
                        setForm={setForm}
                        form={form}
                        validate={true}
                    />
                ))}
                <p className='text-danger font-bold'>{err}</p>
                
               
                <AuthBtn title={'Зарегистрироваться'} />
                <AuthHelp className='text-sm font-light text-white/45' text={'Уже есть аккаунт?'} title={'Войти'} link={'/login'} />
            </form>
</div>
        </main>
    );
};

export default Registration;