import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import QuestionCard from '../components/QuestionCard';

const FormPreview = ({ route }) => {
  const { formTitle, questions } = route.params;
  const [responses, setResponses] = useState({});

  const handleResponseChange = (id, value) => {
    setResponses({
      ...responses,
      [id]: value
    });
  };

  const handleSubmit = () => {
    console.log("Form responses:", responses);
  };

  return (
    <ScrollView style={tailwind('p-4')}>
      <Text style={tailwind('text-xl font-bold mb-4')}>{formTitle}</Text>
      
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          onResponseChange={handleResponseChange}
        />
      ))}

      <Button title="Submit Form" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default FormPreview;
