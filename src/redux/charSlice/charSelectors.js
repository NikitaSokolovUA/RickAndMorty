export const selectCharacters = state => state.char.charList;
export const selectCountPages = state => state.char.info.pages;
export const selectCurrentPage = state => state.char.currentPage;
export const selectSearchValue = state => state.char.searchValue;

export const selectSortCharacter = state => {
  const characters = selectCharacters(state);

  if (characters) {
    return [...characters].sort((firstChar, secondChar) =>
      firstChar.name.localeCompare(secondChar.name)
    );
  }
};
