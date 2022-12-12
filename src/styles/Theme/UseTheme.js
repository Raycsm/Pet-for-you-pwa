import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getFromLS, setToLS } from '../../utils/storage';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, [themes.data.light]);

  return { theme, themeLoaded, setMode, getFonts };
};