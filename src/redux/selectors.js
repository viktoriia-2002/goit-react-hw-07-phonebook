export const selectContacts = state => state.contacts;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;
