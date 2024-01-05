import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import { useColorMode } from '../utils';
import { useNavigate } from 'react-router-dom';

interface Command {
  command: string;
  query: string;
  mode: 'dark' | 'light';
  genreOrCategory: string;
  genres: {
    id: number,
    name: string,
  }[]
}

const useAIButton = () => {
  const { changeColorMode } = useColorMode();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_ALAN_AI_KEY,
      showOverlayOnMicPermissionPrompt: true,
      //@ts-ignore
      onCommand: (command: Command) => {
        if (command.command === 'changeMode') {
            if (command.mode) changeColorMode(command.mode);
        }
        if (command.command === 'search') {
          navigate(`search?q=${command.query}`);
        }
        if (command.command === 'chooseGenre') {
          const { genreOrCategory, genres } = command;
          const genre = genres.find(g => g.name.toLowerCase() === genreOrCategory.toLowerCase());
          if (genre) navigate(`genre/${genre.id}`);
        }
      },
    });
  }, []);
};

export default useAIButton;
