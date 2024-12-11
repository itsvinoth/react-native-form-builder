import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import QuestionCard from '../components/QuestionCard';

const FormEditor = () => {
  const [formTitle, setFormTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const addTextQuestion = () => {
    setQuestions([
      ...questions,
      { type: 'text', question: '', id: Date.now() }
    ]);
  };

  const addGridQuestion = () => {
    setQuestions([
      ...questions,
      { type: 'grid', question: '', id: Date.now() }
    ]);
  };

  const addCheckBoxQuestion = () => {
    setQuestions([
      ...questions,
      { type: 'checkbox', question: '', id: Date.now() }
    ]);
  };

  return (
    <ScrollView style={tailwind('p-4')}>
      <Text style={tailwind('text-lg font-bold mb-2')}>Form Title</Text>
      <TextInput
        style={tailwind('border p-2 mb-4')}
        placeholder="Enter form title"
        value={formTitle}
        onChangeText={setFormTitle}
      />

      <Button title="Add Text Question" onPress={addTextQuestion} />
      <Button title="Add Grid Question" onPress={addGridQuestion} />
      <Button title="Add CheckBox Question" onPress={addCheckBoxQuestion} />

      <View style={tailwind('mt-4')}>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </View>
    </ScrollView>
  );
};

export default FormEditor;
