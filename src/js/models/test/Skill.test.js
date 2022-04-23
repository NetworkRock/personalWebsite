import {Skill} from "../Skill"

describe('Skill', () => {
  test('Skill constructor', () => {
    const skill = new Skill('React', '5', 'Frontend')
    expect(skill.technologie).toBe('React')
    expect(skill.rating).toBe('5')
    expect(skill.category).toBe('Frontend')
  });
})
