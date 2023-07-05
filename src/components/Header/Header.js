import { createContext, useState } from "react";
import Main from "../Main/Main";

export const ThemeContext = createContext("light");

export default function Header({children}) {

	const [theme, setTheme] = useState(ThemeContext);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={'App ' + theme}>
				<select onChange={event => setTheme(event.target.value)}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			{children}
			</div>
		</ThemeContext.Provider>
	)
}