const TEXTAREA_MAP = {
  interview: "Немного о нас:",
  thanks: "Выражение благодарности:",
  mistakes: "Описание ошибок:",
};

export function textareaName(val) {
  return TEXTAREA_MAP[val] ? TEXTAREA_MAP[val] : TEXTAREA_MAP.interview;
}
