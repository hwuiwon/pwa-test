import {useColorScheme} from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import React from 'react';

export const ModeToggle: React.FC = () => {
  const {mode, setMode} = useColorScheme();

  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button>
  );
};
