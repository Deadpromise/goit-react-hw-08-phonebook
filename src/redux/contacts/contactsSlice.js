import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// [
//   {
//     createdAt: '2023-04-24T09:03:34.912Z',
//     name: 'Bernard Kuphal',
//     phone: '455-780-5983',
//     id: '4',
//   },
//   {
//     createdAt: '2023-04-24T07:07:44.001Z',
//     name: 'Guillermo Jast MD',
//     phone: '592-405-5613',
//     id: '5',
//   },
//   {
//     createdAt: '2023-04-24T13:00:03.473Z',
//     name: 'Homer Hartmann DVM',
//     phone: '709-766-5688',
//     id: '9',
//   },
//   {
//     createdAt: '2023-04-24T02:34:09.748Z',
//     name: 'Felix Goldner',
//     phone: '989-217-0265',
//     id: '10',
//   },
//   {
//     createdAt: '2023-04-23T21:29:27.245Z',
//     name: 'Mrs. Clara Bartoletti',
//     phone: '273-871-1609',
//     id: '11',
//   },
//   {
//     createdAt: '2023-04-24T07:18:15.458Z',
//     name: 'Brandon Hickle',
//     phone: '388-868-0537',
//     id: '12',
//   },
//   {
//     createdAt: '2023-04-24T04:19:13.245Z',
//     name: 'Ms. Nina Langworth',
//     phone: '347-286-4320',
//     id: '13',
//   },
//   {
//     createdAt: '2023-04-24T13:09:03.977Z',
//     name: 'Inez Paucek MD',
//     phone: '423-282-9611',
//     id: '14',
//   },
//   {
//     createdAt: '2023-04-24T00:03:49.687Z',
//     name: 'Darren Kautzer',
//     phone: '559-266-6454',
//     id: '15',
//   },
//   {
//     createdAt: '2023-04-23T23:38:49.896Z',
//     name: 'Carrie Renner',
//     phone: '570-729-5510',
//     id: '16',
//   },
//   {
//     createdAt: '2023-04-23T20:53:44.761Z',
//     name: "Eleanor O'Kon",
//     phone: '412-576-7175',
//     id: '17',
//   },
//   {
//     createdAt: '2023-04-24T04:00:11.678Z',
//     name: 'Wendy Lesch',
//     phone: '720-861-1966',
//     id: '19',
//   },
//   {
//     createdAt: '2023-04-24T02:39:57.787Z',
//     name: 'Johanna Huel',
//     phone: '983-941-5486',
//     id: '20',
//   },
//   {
//     createdAt: '2023-04-24T14:54:10.842Z',
//     name: 'Alberto Daugherty',
//     phone: '365-770-4594',
//     id: '21',
//   },
//   {
//     createdAt: '2023-04-24T08:51:42.855Z',
//     name: 'Mrs. Judy Morissette',
//     phone: '308-577-5667',
//     id: '22',
//   },
//   {
//     createdAt: '2023-04-23T23:40:30.720Z',
//     name: 'Caleb Oberbrunner',
//     phone: '599-704-9030',
//     id: '23',
//   },
//   {
//     createdAt: '2023-04-23T20:28:05.859Z',
//     name: 'Marty Olson',
//     phone: '882-621-2702',
//     id: '24',
//   },
//   {
//     createdAt: '2023-04-23T19:52:56.343Z',
//     name: 'Frankie Lebsack',
//     phone: '536-485-9147',
//     id: '25',
//   },
//   {
//     createdAt: '2023-04-24T10:39:55.080Z',
//     name: 'Kurt Bosco',
//     phone: '898-790-6289',
//     id: '27',
//   },
//   {
//     createdAt: '2023-04-23T23:24:32.106Z',
//     name: 'Nick Harris',
//     phone: '898-672-4561',
//     id: '28',
//   },
//   {
//     createdAt: '2023-04-23T23:25:26.227Z',
//     name: 'Opal McDermott',
//     phone: '704-730-8547',
//     id: '29',
//   },
//   {
//     createdAt: '2023-04-24T03:12:35.505Z',
//     name: 'Sarah Witting',
//     phone: '634-888-6771',
//     id: '31',
//   },
//   {
//     createdAt: '2023-04-24T10:03:53.905Z',
//     name: 'Sylvia Renner',
//     phone: '286-965-2376',
//     id: '32',
//   },
//   {
//     createdAt: '2023-04-24T15:22:11.178Z',
//     name: 'Rufus Sporer',
//     phone: '801-806-1805',
//     id: '33',
//   },
//   {
//     createdAt: '2023-04-24T05:16:28.128Z',
//     name: 'Sophie Stoltenberg',
//     phone: '689-517-7921',
//     id: '34',
//   },
//   {
//     createdAt: '2023-04-24T04:36:29.793Z',
//     name: 'Gabriel Lockman IV',
//     phone: '320-260-4496',
//     id: '35',
//   },
//   {
//     createdAt: '2023-04-24T17:00:17.006Z',
//     name: 'Esther Gorczany',
//     phone: '268-815-0442',
//     id: '36',
//   },
//   {
//     createdAt: '2023-04-23T22:19:20.547Z',
//     name: 'Anton Orlov',
//     phone: '365-854-8654',
//     id: '37',
//   },
// ];
