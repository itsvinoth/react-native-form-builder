import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, Alert } from 'react-native';
import FormBuilder from './src/components/FormBuilder'; 

export default class App extends Component {
    getFormFields = () => {
        
        const formFields = [
            [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text', 
                    inputProps: {
                        placeholder: 'Enter your name',
                        autoCapitalize: 'words',
                        autoCorrect: false,
                    },
                },
                {
                    name: 'age',
                    label: 'Age',
                    type: 'text', 
                    inputProps: {
                        placeholder: 'Enter your age',
                        keyboardType: 'numeric',
                    },
                },
            ],
            [
                {
                    name: 'gender',
                    label: 'Gender',
                    type: 'checkbox', 
                    options: ['Male', 'Female', 'Other'], 
                },
            ],
            [
                {
                    name: 'preferences',
                    label: 'Preferences',
                    type: 'grid', 
                    gridOptions: [
                        ['Option 1', 'Option 2'],
                        ['Option 3', 'Option 4'],
                    ], 
                },
            ],
        ];

        return formFields;
    };

    handleSubmit = (state) => {
        console.log('Form Data:', state);
        Alert.alert('Form Submitted', JSON.stringify(state, null, 2));
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.screenTitle}>Form Builder</Text>
                <FormBuilder
                    formFieldsRows={this.getFormFields()}
                    handleSubmit={this.handleSubmit}
                    submitBtnTitle="Submit Form"
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#3F4EA5',
    },
    screenTitle: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
});
