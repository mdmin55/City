
import { useContext, useState } from 'react';
import ProblemService from '../services/ProblemService';
import { AuthContext, ProblemContext } from '../main';
import { categories } from '../utils/constants';
import { useLocation } from 'react-router-dom';

const Card = ({ item }) => {
    const [more, setMore] = useState(false);
    const { setProblem } = useContext(ProblemContext);
    const { user } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const [size, setSize] = useState();
    const [rej, setRej] = useState(false);
    const [photoErr, setPhotoErr] = useState();
    const [success, setSuccess] = useState();
    const location = useLocation();
    const [currProblem, setCurrProblem] = useState({
        afterImg: '',
        status: ''
    });
    const MAX_SIZE = 10 * 1024 * 1024;

   
    const toBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = err => {
                reject(err);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    };

    // Функция загрузки файла
    const uploadFile = async file => {
        setSize(file.size);
        const base64String = await toBase64(file);
        setCurrProblem(prevState => ({
            ...prevState,
            afterImg: base64String
        }));
    };

    // Функция удаления заявки
    const del = async id => {
        if (item?.status === 'Новая') {
            if (confirm('Подтвердить удаление?')) {
                await ProblemService.delete(id);
                const problems = await ProblemService.getAll();
                setProblem(problems);
            } else {
                alert('Вы отменили удаление');
            }
        } else {
            alert('Невозможно удалить записи со статусом "Решена" и "Отклонена"');
        }
    };

    // Функция редактирования поста
    const editPost = async e => {
        e.preventDefault();
        if (size > MAX_SIZE) {
            setPhotoErr('Размер файла превышает 10 Мб');
        } else {
            if (currProblem.afterImg === '' || currProblem.status === '') {
                setPhotoErr('');
            } else {
                await ProblemService.update(item.id, currProblem);
                const problems = await ProblemService.getAll();
                setProblem(problems);
                setPhotoErr('');
                setSuccess('Запись успешно изменена');
                setEdit(false);
            }
        }
    };

    return (
        <div className='p-4 bg-white m-5 rounded-md'>
            <p className='text-danger font-bold'>{photoErr}</p>
            <p className='text-success font-bold'>{success}</p>
            <div className='relative'>
                {item?.afterImg === null ? (
                    <>
                        <img
                            src={item?.beforeImg}
                            alt=''
                            className='relative w-full h-[150px] object-cover rounded-lg ease-in duration-300 md:h-[500px] md:duration-500'
                        />
                        <label
                            className={`${
                                edit ? 'block' : 'hidden'
                            } absolute bg-black/50 top-0 left-0 w-full h-[150px] object-cover rounded-lg ease-in duration-300 opacity-0 cursor-pointer group hover:opacity-100 md:h-[500px] md:duration-500`}
                        >
                            {currProblem.afterImg !== '' ? (
                                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-2xl md:font-bold'>
                                    Файл успешно загружен
                                </p>
                            ) : (
                                <>
                                    <img
                                        src='./header/add.svg'
                                        alt=''
                                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] opacity-70 md:w-[100px] md:h-[100px]'
                                    />
                                    <p className='absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-xl md:font-bold md:top-[65%]'>
                                        Max. 10Mb
                                    </p>
                                    <input
                                        type='file'
                                        className='hidden w-full h-[150px]'
                                        name='afterImg'
                                        id='afterImg'
                                        onChange={e => {
                                            uploadFile(e.target.files[0]);
                                        }}
                                    />
                                </>
                            )}
                        </label>
                    </>
                ) : (
                    <>
                        <img
                            src={item?.afterImg}
                            alt=''
                            className='w-full h-[150px] opacity-100 object-cover rounded-lg scale-95 ease-in duration-300 hover:opacity-0 hover:scale-100 md:h-[500px] md:duration-500'
                        />
                        <img
                            src={item?.beforeImg}
                            alt=''
                            className='absolute top-0 left-0 opacity-0 w-full h-[150px] object-cover rounded-lg scale-95 ease-in duration-300 hover:scale-100 hover:opacity-100 md:h-[500px] md:duration-500'
                        />
                    </>
                )}
            </div>
            <div className='mt-2 md:px-5 '>
                <div className='flex items-center justify-between gap-x-2'>
                    <p className='font-bold text-xl text-ellipsis overflow-hidden text-black line-clamp-1 md:text-2xl'>
                        {item?.title}
                    </p>
                    <p className='text-sm font-semibold text-ellipsis overflow-hidden line-clamp-1 text-black/50 md:text-md'>
                        {item?.category?.title}
                    </p>
                </div>
                <p
                    className={`${
                        more === true ? '' : 'text-ellipsis overflow-hidden line-clamp-3'
                    } text-lg font-semibold text-black/70`}
                >
                    {item?.description}
                </p>

                <div className='flex items-center justify-between'>
                   
                    <div className='text-sm text-black/50'>
                        <p>
                            Создано:{' '}
                            {new Date(item?.createdAt).toLocaleString('ru-RU', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                year: 'numeric',
                                month: 'numeric',
                                day: '2-digit'
                            })}
                        </p>
                        <p>
                            Изменено:{' '}
                            {new Date(item?.updatedAt).toLocaleString('ru-RU', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                year: 'numeric',
                                month: 'numeric',
                                day: '2-digit'
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly mt-5 md:px-5 md:justify-end md:gap-x-5'>
                {edit ? (
                    <>
                        <button
                            className={`${
                                user?.role === 'admin' ? 'block' : 'hidden'
                            } bg-success px-1 py-2 rounded-lg`}
                            onClick={editPost}
                        >
                            Сохранить
                        </button>
                        <button
                            className={`${
                                user?.role === 'admin' ? 'block' : 'hidden'
                            } bg-danger px-1 py-2 rounded-lg`}
                            onClick={() => setEdit(false)}
                        >
                            Отмена
                        </button>
                    </>
                ) : (
                    <button
                        className={`${
                            user?.role === 'admin' ? 'block' : 'hidden'
                        } bg-new px-1 py-2 rounded-lg ${
                            item?.status === 'Решена' || item?.status === 'Отклонена'
                                ? 'hidden'
                                : 'block'
                        }`}
                        onClick={() => setEdit(true)}
                    >
                        Редактировать
                    </button>
                )}
                <button
                    onClick={() => del(item.id)}
                    className={`${
                        user?.id === item?.user?.id ||
                        location.pathname === '/profile' ||
                        user?.role === 'admin'
                            ? 'block'
                            : 'hidden'
                    } bg-danger px-1 py-2 rounded-lg`}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default Card;
