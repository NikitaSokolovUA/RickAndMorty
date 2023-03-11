export const selectCharacters = state => state.char.charList;

export const selectSortCharacter = state => {
  const characters = selectCharacters(state);

  if (characters) {
    return [...characters].sort((firstChar, secondChar) =>
      firstChar.name.localeCompare(secondChar.name)
    );
  }
};
