import type { RadioGroupConfig, ButtonConfig } from '../types';
import type { GeneratorStatus } from '../types';
//Generator Form
export const GENERATOR_FORM_OPTIONS: RadioGroupConfig[] = [
  {
    name: 'grade',
    legend: 'Grade Level',
    options: [
      {
        label: '4-6',
        value: '4-6',
      },
      {
        label: '7-9',
        value: '7-9',
      },
      {
        label: '10-12',
        value: '10-12',
      },
    ],
  },
  {
    name: 'difficulty',
    legend: 'Difficulty',
    options: [
      { label: 'Easy', value: 'easy' },
      { label: 'Medium', value: 'medium' },
      { label: 'Hard', value: 'difficult' },
    ],
  },
  {
    name: 'includeAnswerSheet',
    legend: 'Include Answer Sheet',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    name: 'includeAnswerKey',
    legend: 'Include Answer Key',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
];

export const BUTTON_CONFIG: Record<GeneratorStatus, ButtonConfig> = {
  idle: { text: 'Generate', variant: 'primary', disabled: false },
  generating: { text: 'Generating...', variant: 'disabled', disabled: true },
  success: { text: 'Generate Again', variant: 'primary', disabled: false },
  error: { text: 'Try Again', variant: 'primary', disabled: false },
};
