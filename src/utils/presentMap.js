const PRESENT_MAP = {
  null: null,
  company: "Компанию:",
  startup: "Стартап:",
  ip: "Индивидульного предпринимателя:",
};

export function newPresent(val) {
  return PRESENT_MAP[val] ? PRESENT_MAP[val] : null;
}
