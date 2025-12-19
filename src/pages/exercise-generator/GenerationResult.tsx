import { forwardRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
import type { GeneratorStatus } from '../../types';
import { mockVocabularyData } from '../../.data/mockData';
import { VocabularyExercisePDF } from '../../components/pdf/VocabularyExercisePDF';
import { PDFPreview } from '../../components/pdf/PDFPreview';
import { PDFDownload } from '../../components/pdf/PDFDownload';
import type { VocabularyExercise } from '../../types/vocabulary';

type ResultConfig = {
  text: string;
  decorativeImage: string;
  title: string;
};

const resultConfig: Record<Exclude<GeneratorStatus, 'idle'>, ResultConfig> = {
  generating: {
    title: 'We’re creating your worksheet...',
    text: 'This usually takes just a few seconds.',
    decorativeImage: 'loading.lottie',
  },
  success: {
    title: 'Generation Complete!',
    text: 'Your vocabulary worksheet is ready.',
    decorativeImage: 'success.lottie',
  },
  error: {
    title: 'Something went wrong',
    text: 'Please check your connection and try again.',
    decorativeImage: 'error.lottie',
  },
};

interface GenerationResultProps {
  status: GeneratorStatus;
  generatedData: VocabularyExercise | null;
}

export const GenerationResult = forwardRef<
  HTMLDivElement,
  GenerationResultProps
>(({ status, generatedData }, ref) => {
  const [showPreview, setShowPreview] = useState(false);

  if (status === 'idle') return null;

  const pdfDocument = generatedData ? (
    <VocabularyExercisePDF data={generatedData} />
  ) : (
    <VocabularyExercisePDF data={mockVocabularyData} />
  );

  const config = resultConfig[status];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Message + Animation */}
          <div className="flex flex-col items-center gap-8">
            <DotLottieReact
              src={config.decorativeImage}
              loop
              autoplay
              aria-hidden="true"
              className="w-48 h-48 md:w-64 md:h-64"
            />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {config.title}
              </h3>
              <p className="mt-3 text-lg text-gray-600">{config.text}</p>
            </div>
          </div>

          {/* Success Actions */}
          {status === 'success' && (
            <div className="mt-12 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PDFDownload
                  document={pdfDocument}
                  filename="vocabulary-worksheet.pdf"
                  label="Download PDF"
                />

                <Button
                  variant="secondary"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? 'Hide Preview' : 'Preview Worksheet'}
                </Button>
              </div>

              {/* PDF Preview */}
              {showPreview && (
                <div className="mt-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="p-4 bg-gray-100 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-700">Preview</p>
                  </div>
                  <div className="p-4 md:p-8">
                    <PDFPreview document={pdfDocument} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error Retry Hint */}
          {status === 'error' && (
            <div className="mt-8">
              <Button
                onClick={() => window.location.reload()}
                variant="primary"
              >
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

GenerationResult.displayName = 'GenerationResult';
