import { AppDispatch } from 'app/providers/StoriesProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>