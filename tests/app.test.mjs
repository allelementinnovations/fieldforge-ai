import test from 'node:test';
import assert from 'node:assert/strict';

import FieldForgeCore from '../app.js';

const {
  buildDownloadReport,
  buildFieldBrief,
  makeFilename,
  normalizeProject,
  validateProject
} = FieldForgeCore;

const validProject = {
  projectTitle: 'Safer ATV rack',
  role: 'Farmer or rancher',
  goal: 'Create a safer workflow',
  problem: 'Long tools move across the ATV rack during sudden stops on rough pasture.',
  equipment: 'ATV, steel rack, shovel, rake, mud, and uneven terrain.',
  tried: 'Bungee cords and a plastic basket.',
  budget: '$25–$100',
  experience: 'Experienced in the field',
  risk: 'machinery',
  constraints: 'Must not interfere with controls or rider movement.',
  safetyAck: true
};

test('validation rejects an underspecified problem', () => {
  const errors = validateProject({ ...validProject, problem: 'Too short' });
  assert.equal(errors[0].field, 'problem');
});

test('validation requires constraints for elevated risk', () => {
  const errors = validateProject({ ...validProject, constraints: '' });
  assert.ok(errors.some((error) => error.field === 'constraints'));
});

test('validation requires explicit safety acknowledgement', () => {
  const errors = validateProject({ ...validProject, safetyAck: false });
  assert.ok(errors.some((error) => error.field === 'safetyAck'));
});

test('a complete project passes validation', () => {
  assert.deepEqual(validateProject(validProject), []);
});

test('field brief preserves evidence and adds safety reasoning instructions', () => {
  const prompt = buildFieldBrief(validProject);
  assert.match(prompt, /GPT-5\.6 FIELD BRIEF v2\.0/);
  assert.match(prompt, /Long tools move across the ATV rack/);
  assert.match(prompt, /Known Facts, Assumptions, and Unknowns/);
  assert.match(prompt, /stop-work triggers/i);
  assert.match(prompt, /Powered equipment, vehicles, or machinery/);
});

test('normalization trims and caps untrusted user text', () => {
  const normalized = normalizeProject({ ...validProject, problem: `  ${'x'.repeat(1300)}  ` });
  assert.equal(normalized.problem.length, 1200);
  assert.equal(normalized.problem.startsWith(' '), false);
});

test('download report is labeled as planning information', () => {
  const report = buildDownloadReport({ data: validProject, prompt: 'PROMPT', result: 'RESULT' });
  assert.match(report, /not professional approval/i);
  assert.match(report, /PROMPT/);
  assert.match(report, /RESULT/);
});

test('download filenames are portable and predictable', () => {
  assert.equal(makeFilename('Safer ATV Rack!'), 'safer-atv-rack-report.txt');
  assert.equal(makeFilename(''), 'fieldforge-project-report.txt');
});
