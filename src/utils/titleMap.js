const TITLE_MAP = {
  interview: "Пригласительное письмо",
  thanks: "Письмо с благодарностью!",
  mistakes: "Сообщение об ошибках",
};

export function newTitle(val) {
  return TITLE_MAP[val] ? TITLE_MAP[val] : null;
}
