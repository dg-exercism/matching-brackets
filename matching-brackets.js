//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  const pairs = string.replace(/[^{}[\]()]/g, '').split('');
  const check = [];
  const legend = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };
  let verdict = true;
  pairs.forEach(individual => {
    if (individual === '{' || individual === '[' || individual === '(') {
      check.push(individual)
    } else {
      let final = check.pop();
      individual !== legend[final] ? verdict = false : null;
    }
  })
  return verdict && !check.length
};
