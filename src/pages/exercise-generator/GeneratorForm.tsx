import {
  Field,
  Fieldset,
  Label,
  Legend,
  Radio,
  RadioGroup,
} from '@headlessui/react';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { GeneratorStatus } from '../../types';
import axios from 'axios';
import { GENERATOR_FORM_OPTIONS, BUTTON_CONFIG } from '../../constants/index';
import type { GeminiResponse } from '../../types';

interface GeneratorFormProps {
  status: GeneratorStatus;
  setStatus: React.Dispatch<React.SetStateAction<GeneratorStatus>>;
}

const API_URL = import.meta.env.VITE_API_URL;

export function GeneratorForm({ status, setStatus }: GeneratorFormProps) {
  const [form, setForm] = useState({
    grade: '4-6',
    difficulty: 'easy',
    includeAnswerSheet: true,
    includeAnswerKey: true,
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('generating');

    const prompt =
      JSON.stringify(form) +
      ' According to the options json, generate a set of exercise for AEAS exam in Australia. Response in json.';

    try {
      const response = await axios.post<GeminiResponse>(API_URL, { prompt });
      const text = response.data;
      console.log(text);
      setStatus('success');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw new Error('Failed to fetch AI response');
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-20 md:px-24 py-2 md:py-4">
      <div className="flex items-center justify-between gap-12">
        {/* Left: Generator Options Form  */}
        <form
          className="flex flex-3 flex-col gap-10"
          onSubmit={handleSubmit}
          method="post"
          action="#"
        >
          {GENERATOR_FORM_OPTIONS.map((group) => (
            <Fieldset key={group.name} className="flex flex-col gap-4">
              <Legend className="text-md font-bold text-gray-900">
                {group.legend}
              </Legend>
              <RadioGroup
                name={group.name}
                value={form[group.name]}
                onChange={(value) =>
                  setForm((f) => ({ ...f, [group.name]: value }))
                }
                aria-label="Grade choice"
                className="flex gap-20 mx-10"
              >
                {group.options.map((option) => (
                  <Field key={option.label} className="flex items-center gap-2">
                    <Radio
                      value={option.value}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400 cursor-pointer"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                    </Radio>
                    <Label className="cursor-pointer whitespace-nowrap">
                      {option.label}
                    </Label>
                  </Field>
                ))}
              </RadioGroup>
            </Fieldset>
          ))}
          <Button
            type="submit"
            variant={BUTTON_CONFIG[status].variant}
            disabled={BUTTON_CONFIG[status].disabled}
            className="w-1/2 mt-10 "
          >
            {BUTTON_CONFIG[status].text}
          </Button>
        </form>

        {/*Right: Decorative image*/}
        <DotLottieReact
          src="generator.lottie"
          aria-hidden="true"
          loop
          autoplay
          className="flex-4 flex justify-center"
        />
      </div>
    </div>
  );
}
