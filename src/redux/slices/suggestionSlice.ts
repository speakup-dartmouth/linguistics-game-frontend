import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/api';
import { User } from './authSlice';

export interface Suggestion {
    prompt: string;
    stances: [
        {
            color: string;
            stance: string;
        }
    ];
    dateSubmitted: Date;
    icon: string;
    question: string;
    user: Pick<User, 'username' | '_id'>;
    status: string;
}

export interface SuggestionState {
    suggestions: Suggestion[];
    currentSuggestion: Suggestion | null;
}

const initialState: SuggestionState = {
    suggestions: [],
    currentSuggestion: null,
}

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {
        setCurrentSuggestion(state, action) {
            state.currentSuggestion = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.addSuggestion.matchFulfilled, (state, action) => {
            state.suggestions.push(action.payload);
            return state;
        });
        builder.addMatcher(api.endpoints.getSuggestions.matchFulfilled, (state, action) => {
            state.suggestions = action.payload;
            return state;
        });
        builder.addMatcher(api.endpoints.getSuggestionsByUser.matchFulfilled, (state, action) => {
            state.suggestions = action.payload;
            return state;
        });
        builder.addMatcher(api.endpoints.signIn.matchFulfilled, (state) => {
            state.suggestions = [];
            state.currentSuggestion = null;
            return state;
        });
        builder.addMatcher(api.endpoints.signUp.matchFulfilled, (state) => {
            state.suggestions = [];
            state.currentSuggestion = null;
            return state;
        });
    },
});

export const {
    setCurrentSuggestion,
} = suggestionSlice.actions;

export default suggestionSlice.reducer;
