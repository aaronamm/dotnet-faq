import './index.html';
import React from 'react';
import { render } from 'react-dom';
import DotnetLearningPath from './components/DotnetLearningPath';

render(
  <DotnetLearningPath />,
  document.getElementsByClassName('dotnet-learning-path')[0],
);
