const VOCABULARY_SCHEMA = {
  meta: {
    title: 'string',
    grade_level: '4-6 | 7-9 | 10-12',
    total_time: 'number (minutes)',
    total_questions: 'number (50 for 4-6/7-9, 30 for 10-12)',
  },
  parts: [
    {
      part_number: 1,
      name: 'Word Meanings',
      instructions: 'string',
      question_range: { start: 1, end: 15 },
      groups: [
        {
          options: {
            A: 'string',
            B: 'string',
            C: 'string',
            D: 'string',
            E: 'string',
          },
          questions: [
            {
              number: 'number',
              definition: 'string',
              answer: 'A | B | C | D | E',
            },
          ],
        },
      ],
    },
    {
      part_number: 2,
      name: 'Words in Context',
      instructions: 'string',
      question_range: { start: 16, end: 30 },
      questions: [
        {
          number: 'number',
          sentence: 'string (with blank like "b_____")',
          first_letter: 'string',
          answer: 'string',
        },
      ],
    },
    {
      part_number: 3,
      name: 'Spelling (ONLY for grades 4-6 and 7-9, OMIT for 10-12)',
      instructions: 'string',
      question_range: { start: 31, end: 50 },
      questions: [
        {
          number: 'number',
          sentence: 'string',
          misspelled_word: 'string',
          correct_spelling: 'string',
        },
      ],
    },
  ],
  answer_key: {
    part1: [{ question: 'number', answer: 'string' }],
    part2: [{ question: 'number', answer: 'string' }],
    part3: '(ONLY for grades 4-6 and 7-9, OMIT for 10-12)',
  },
};

// Two examples: one with Part 3, one without
const VOCABULARY_EXAMPLE_GRADE_4_6 = {
  meta: {
    title: 'AEAS Vocabulary Exercise - Grade 4-6',
    grade_level: '4-6',
    total_time: 20,
    total_questions: 50,
  },
  parts: [
    {
      part_number: 1,
      name: 'Word Meanings',
      instructions: 'Choose the word that best matches each definition.',
      question_range: { start: 1, end: 15 },
      groups: [
        {
          options: { A: 'borrow', B: 'lend', C: 'steal', D: 'give', E: 'take' },
          questions: [
            {
              number: 1,
              definition:
                'to receive something with the intention of returning it',
              answer: 'A',
            },
          ],
        },
      ],
    },
    {
      part_number: 2,
      name: 'Words in Context',
      instructions:
        'Complete each sentence with a word beginning with the given letter.',
      question_range: { start: 16, end: 30 },
      questions: [
        {
          number: 16,
          sentence: 'Mary had to b_____ my torch.',
          first_letter: 'b',
          answer: 'borrow',
        },
      ],
    },
    {
      part_number: 3,
      name: 'Spelling',
      instructions: 'Find the misspelled word and write the correct spelling.',
      question_range: { start: 31, end: 50 },
      questions: [
        {
          number: 31,
          sentence: 'She was very intested in the story.',
          misspelled_word: 'intested',
          correct_spelling: 'interested',
        },
      ],
    },
  ],
  answer_key: {
    part1: [{ question: 1, answer: 'A' }],
    part2: [{ question: 16, answer: 'borrow' }],
    part3: [{ question: 31, answer: 'interested' }],
  },
};

const VOCABULARY_EXAMPLE_GRADE_10_12 = {
  meta: {
    title: 'AEAS Vocabulary Exercise - Grade 10-12',
    grade_level: '10-12',
    total_time: 15,
    total_questions: 30,
  },
  parts: [
    {
      part_number: 1,
      name: 'Word Meanings',
      instructions: 'Choose the word that best matches each definition.',
      question_range: { start: 1, end: 15 },
      groups: [
        {
          options: {
            A: 'meticulous',
            B: 'ambiguous',
            C: 'pragmatic',
            D: 'volatile',
            E: 'benevolent',
          },
          questions: [
            {
              number: 1,
              definition: 'showing great attention to detail',
              answer: 'A',
            },
          ],
        },
      ],
    },
    {
      part_number: 2,
      name: 'Words in Context',
      instructions:
        'Complete each sentence with a word beginning with the given letter.',
      question_range: { start: 16, end: 30 },
      questions: [
        {
          number: 16,
          sentence:
            'The politician gave an a_____ response that satisfied no one.',
          first_letter: 'a',
          answer: 'ambiguous',
        },
      ],
    },
  ],
  answer_key: {
    part1: [{ question: 1, answer: 'A' }],
    part2: [{ question: 16, answer: 'ambiguous' }],
  },
};

export const VOCABULARY_SYSTEM_PROMPT = `You are an AEAS vocabulary exercise generator.

RULES:
- Respond with valid JSON ONLY
- No markdown code blocks
- No explanations before or after
- Follow the exact schema provided
- For grades 4-6 and 7-9: include Part 3 (Spelling) with 20 questions, total 50 questions
- For grade 10-12: NO Part 3, only Part 1 and Part 2, total 30 questions

SCHEMA:
${JSON.stringify(VOCABULARY_SCHEMA, null, 2)}

EXAMPLE FOR GRADES 4-6 / 7-9 (with Part 3):
${JSON.stringify(VOCABULARY_EXAMPLE_GRADE_4_6, null, 2)}

EXAMPLE FOR GRADE 10-12 (NO Part 3):
${JSON.stringify(VOCABULARY_EXAMPLE_GRADE_10_12, null, 2)}`;
