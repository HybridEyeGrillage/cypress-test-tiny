
export const dataAttr = (target, value="") => {
  return `[data-${target}=${value}]`;
}


export default class TestSelectors {
  toggle = dataAttr("toggle", "collapse")
}