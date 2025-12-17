export interface VocabularyExercise {
  meta: ExerciseMeta;
  parts: VocabularyPart[];
  answer_key: AnswerKey;
}

export interface ExerciseMeta {
  title: string;
  grade_level: '4-6' | '7-9' | '10-12';
  total_time: number;
  total_questions: number;
}

export type VocabularyPart =
  | WordMeaningsPart
  | WordsInContextPart
  | SpellingPart;

export interface WordMeaningsPart {
  part_number: 1;
  name: 'Word Meanings';
  instructions: string;
  question_range: { start: 1; end: 15 };
  groups: WordMeaningsGroup[];
}

export interface WordMeaningsGroup {
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  questions: {
    number: number;
    definition: string;
    answer: 'A' | 'B' | 'C' | 'D' | 'E';
  }[];
}

export interface WordsInContextPart {
  part_number: 2;
  name: 'Words in Context';
  instructions: string;
  question_range: { start: 16; end: 30 };
  questions: {
    number: number;
    sentence: string;
    first_letter: string;
    answer: string;
  }[];
}

export interface SpellingPart {
  part_number: 3;
  name: 'Spelling';
  instructions: string;
  question_range: { start: 31; end: 50 };
  questions: {
    number: number;
    sentence: string;
    misspelled_word: string;
    correct_spelling: string;
  }[];
}

export interface AnswerKey {
  part1: { question: number; answer: string }[];
  part2: { question: number; answer: string }[];
  part3?: { question: number; answer: string }[];
}
