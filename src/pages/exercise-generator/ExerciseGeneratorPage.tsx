import { Header } from '../../components/layout/Header';
import { FeatureCardTitle } from '../../components/layout/FeatureCardTitle';
import { GeneratorForm } from './GeneratorForm';
import { useState, useRef, useEffect } from 'react';
import { GenerationResult } from './GenerationResult';
import type { GeneratorStatus } from '../../types';

export function ExerciseGeneratorPage() {
  const [status, setStatus] = useState<GeneratorStatus>('idle');

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== 'idle') {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status]);

  return (
    <>
      <Header />
      <FeatureCardTitle
        title="AI Vocabulary Exercise Generator"
        description="Select grade and difficulty to generate exercises in official AEAS format."
      />
      <GeneratorForm status={status} setStatus={setStatus} />
      <GenerationResult status={status} ref={resultRef} />
    </>
  );
}
