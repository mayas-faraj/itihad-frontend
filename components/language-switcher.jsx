import React from 'raect';
import style from '../language-switcher.module.scss';

export default function LanguageSwitcher() {
  const [language, setLanguage] = React.useState("EN");
  return (
    <div className={style['wrapper']}>
    { language }
    </div>
  );
}
