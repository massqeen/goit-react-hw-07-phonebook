export const getStateContacts = (state) => state.contacts;
export const getStateFilter = (state) => state.filter;
export const getIsLoading = (state) => state.isLoading;

export const getVisibleContacts = (state) => {
  const contacts = getStateContacts(state);
  const contactFilter = getStateFilter(state);
  const normalizedFilter = contactFilter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
