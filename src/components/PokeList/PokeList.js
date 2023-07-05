import React,{useContext} from 'react';
import PokeCard from '../PokeCard/PokeCard';
import { ThemeContext } from '../Header/Header';

const PokeList = () => {
	const {theme,setTheme}=useContext(ThemeContext);
	return (
		<div>
			<PokeCard />
		</div>
	)
}



export default PokeList;
